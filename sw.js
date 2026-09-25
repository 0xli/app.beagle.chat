(() => {
  // src/sw.js
  var DB_NAME = "beagle-web";
  var KV = "kv";
  var MIME = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    bmp: "image/bmp",
    heic: "image/heic",
    mp4: "video/mp4",
    webm: "video/webm",
    mov: "video/quicktime",
    m4v: "video/mp4",
    mp3: "audio/mpeg",
    m4a: "audio/mp4",
    wav: "audio/wav",
    ogg: "audio/ogg",
    opus: "audio/opus",
    pdf: "application/pdf",
    txt: "text/plain",
    md: "text/markdown",
    json: "application/json"
  };
  var mimeFor = (name) => MIME[(String(name || "").split(".").pop() || "").toLowerCase()] || "application/octet-stream";
  var DB_TIMEOUT_MS = 1500;
  var deadline = (ms) => new Promise((resolve) => setTimeout(() => resolve(null), ms));
  function openDB() {
    return new Promise((resolve) => {
      let req;
      try {
        req = indexedDB.open(DB_NAME);
      } catch {
        resolve(null);
        return;
      }
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
      req.onblocked = () => resolve(null);
    });
  }
  async function getFile(name) {
    const db = await Promise.race([openDB(), deadline(DB_TIMEOUT_MS)]);
    if (!db || !db.objectStoreNames.contains(KV))
      return null;
    const read = new Promise((resolve) => {
      let store;
      try {
        store = db.transaction(KV, "readonly").objectStore(KV);
      } catch {
        resolve(null);
        return;
      }
      const get = (key) => new Promise((ok) => {
        const g = store.get(key);
        g.onsuccess = () => ok(g.result ?? null);
        g.onerror = () => ok(null);
      });
      (async () => {
        const [scope, legacyOwner] = await Promise.all([get("scope"), get("legacy-owner")]);
        const own = scope ? await get(`u/${scope}/file:${name}`) : null;
        if (own)
          return own;
        return !scope || scope === legacyOwner ? get(`file:${name}`) : null;
      })().then(resolve, () => resolve(null));
    });
    return Promise.race([read, deadline(DB_TIMEOUT_MS)]);
  }
  self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil((async () => {
      const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      const mine = all.filter((c) => new URL(c.url).origin === self.location.origin);
      const target = mine.find((c) => c.focused) || mine[0];
      if (target) {
        try {
          await target.focus();
        } catch {
        }
        return;
      }
      try {
        await self.clients.openWindow("/");
      } catch {
      }
    })());
  });
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
  self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin || url.pathname !== "/api/file-download")
      return;
    event.respondWith((async () => {
      const name = url.searchParams.get("name");
      const bytes = name ? await getFile(name) : null;
      if (!bytes)
        return new Response("not found", { status: 404 });
      const dl = url.searchParams.get("dl") === "1";
      return new Response(bytes, {
        headers: {
          "content-type": mimeFor(name),
          "content-disposition": `${dl ? "attachment" : "inline"}; filename="${encodeURIComponent(name)}"`,
          "cache-control": "no-store"
        }
      });
    })());
  });
})();
