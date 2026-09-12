(() => {
  // node_modules/@decentnetwork/peer/dist/utils/base58.js
  var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var BASE = BigInt(58);
  var indexes = new Map([...ALPHABET].map((char, index) => [char, BigInt(index)]));
  function base58ToBytes(value) {
    if (!value) {
      throw new Error("base58 value is required");
    }
    let num = 0n;
    for (const char of value) {
      const digit = indexes.get(char);
      if (digit === void 0) {
        throw new Error(`invalid base58 character: ${char}`);
      }
      num = num * BASE + digit;
    }
    const bytes = [];
    while (num > 0n) {
      bytes.push(Number(num & 0xffn));
      num >>= 8n;
    }
    bytes.reverse();
    for (const char of value) {
      if (char !== "1") {
        break;
      }
      bytes.unshift(0);
    }
    return Uint8Array.from(bytes);
  }
  function bytesToBase58(bytes) {
    if (!bytes.length) {
      return "";
    }
    let num = 0n;
    for (const byte of bytes) {
      num = (num << 8n) + BigInt(byte);
    }
    let encoded = "";
    while (num > 0n) {
      const rem = Number(num % BASE);
      encoded = ALPHABET[rem] + encoded;
      num /= BASE;
    }
    for (const byte of bytes) {
      if (byte !== 0) {
        break;
      }
      encoded = "1" + encoded;
    }
    return encoded || "1";
  }

  // node_modules/@decentnetwork/peer/dist/compat/address.js
  var CARRIER_PUBLIC_KEY_SIZE = 32;
  var CARRIER_NOSPAM_SIZE = 4;
  var CARRIER_ADDRESS_CHECKSUM_SIZE = 2;
  var CARRIER_ADDRESS_SIZE = CARRIER_PUBLIC_KEY_SIZE + CARRIER_NOSPAM_SIZE + CARRIER_ADDRESS_CHECKSUM_SIZE;
  function parseCarrierAddress(address) {
    const bytes = base58ToBytes(address);
    if (bytes.length !== CARRIER_ADDRESS_SIZE) {
      throw new Error(`Carrier address must decode to ${CARRIER_ADDRESS_SIZE} bytes`);
    }
    const actual = readUint16LE(bytes, CARRIER_PUBLIC_KEY_SIZE + CARRIER_NOSPAM_SIZE);
    const expected = addressChecksum(bytes.subarray(0, -2));
    if (actual !== expected) {
      throw new Error("Carrier address checksum mismatch");
    }
    return {
      publicKey: bytes.slice(0, CARRIER_PUBLIC_KEY_SIZE),
      nospam: readUint32LE(bytes, CARRIER_PUBLIC_KEY_SIZE),
      checksum: actual
    };
  }
  function carrierIdFromAddress(address) {
    return bytesToBase58(parseCarrierAddress(address).publicKey);
  }
  function addressChecksum(bytes) {
    const checksum = [0, 0];
    for (let i = 0; i < bytes.length; i++) {
      checksum[i % 2] ^= bytes[i];
    }
    return checksum[0] | checksum[1] << 8;
  }
  function readUint16LE(bytes, offset) {
    return bytes[offset] | bytes[offset + 1] << 8;
  }
  function readUint32LE(bytes, offset) {
    return (bytes[offset] | bytes[offset + 1] << 8 | bytes[offset + 2] << 16 | bytes[offset + 3] << 24) >>> 0;
  }

  // src/profile.js
  var ENS_GATEWAY = "https://ens-gateway.beaglechat.workers.dev";
  var REF_KEY = "beagle-web:ref";
  var IDENTITY_MIRROR = "beagle-web:kv:identity";
  var ACTION_CHANNEL = "beagle-web-actions";
  var $ = (id) => document.getElementById(id);
  var B58 = /^[1-9A-HJ-NP-Za-km-z]+$/;
  var T = {
    en: {
      title: (n) => `${n} \xB7 Beagle`,
      addr: "Beagle address",
      copy: "copy",
      copied: "copied",
      add: "Add me as a friend",
      online: "online now",
      seen: "on Beagle",
      hintNew: "No account needed. You pick a name and a face, and the request goes out.",
      hintHave: "Already on Beagle here? This opens your chat with the address filled in.",
      hintApp: "Have the app on your phone? Copy the address and paste it into Add.",
      noAddr: "This person has not published an address yet, so there is nothing to add \u2014 ask them for their link.",
      notFound: "There is no page at this address.",
      notFoundHint: "A profile link looks like app.beagle.chat/<address> or app.beagle.chat/<name>.beagles.eth.",
      unknownName: (n) => `${n} is not registered on beagles.eth.`,
      open: "Open Beagle",
      handed: "Opened in your Beagle tab \u2014 switch to that tab and tap Add.",
      openHere: "Open here instead"
    },
    zh: {
      title: (n) => `${n} \xB7 Beagle`,
      addr: "Beagle \u5730\u5740",
      copy: "\u590D\u5236",
      copied: "\u5DF2\u590D\u5236",
      add: "\u52A0\u6211\u4E3A\u597D\u53CB",
      online: "\u73B0\u5728\u5728\u7EBF",
      seen: "\u5728 Beagle \u4E0A",
      hintNew: "\u4E0D\u7528\u6CE8\u518C\u3002\u53D6\u4E2A\u540D\u5B57\u3001\u9009\u4E2A\u5934\u50CF\uFF0C\u597D\u53CB\u8BF7\u6C42\u5C31\u53D1\u51FA\u53BB\u4E86\u3002",
      hintHave: "\u8FD9\u4E2A\u6D4F\u89C8\u5668\u91CC\u5DF2\u7ECF\u6709 Beagle \u8EAB\u4EFD\uFF1F\u4F1A\u76F4\u63A5\u6253\u5F00\u804A\u5929\uFF0C\u5730\u5740\u5DF2\u586B\u597D\u3002",
      hintApp: "\u624B\u673A\u4E0A\u88C5\u4E86 app\uFF1F\u590D\u5236\u5730\u5740\uFF0C\u7C98\u8D34\u5230\u300C\u6DFB\u52A0\u300D\u91CC\u3002",
      noAddr: "\u8FD9\u4E2A\u4EBA\u8FD8\u6CA1\u6709\u516C\u5F00\u5730\u5740\uFF0C\u6682\u65F6\u52A0\u4E0D\u4E86 \u2014\u2014 \u5411\u4ED6\u8981\u4E00\u4E0B\u94FE\u63A5\u3002",
      notFound: "\u8FD9\u4E2A\u5730\u5740\u4E0B\u6CA1\u6709\u9875\u9762\u3002",
      notFoundHint: "\u4E2A\u4EBA\u9875\u94FE\u63A5\u957F\u8FD9\u6837\uFF1Aapp.beagle.chat/<\u5730\u5740> \u6216 app.beagle.chat/<\u540D\u5B57>.beagles.eth\u3002",
      unknownName: (n) => `${n} \u6CA1\u6709\u5728 beagles.eth \u6CE8\u518C\u3002`,
      open: "\u6253\u5F00 Beagle",
      handed: "\u5DF2\u5728\u4F60\u6253\u5F00\u7684 Beagle \u6807\u7B7E\u9875\u91CC\u6253\u5F00 \u2014\u2014 \u5207\u6362\u8FC7\u53BB\uFF0C\u70B9\u300C\u6DFB\u52A0\u300D\u3002",
      openHere: "\u5728\u8FD9\u91CC\u6253\u5F00"
    }
  };
  var lang = (() => {
    try {
      return localStorage.getItem("beagle-web:lang") || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");
    } catch {
      return "en";
    }
  })();
  var W = () => T[lang] || T.en;
  function classify(raw) {
    const s = String(raw || "").trim();
    if (!s)
      return { kind: "none" };
    if (s.includes("/") || /\.[a-z0-9]{2,5}$/i.test(s) && !/\.eth$/i.test(s))
      return { kind: "none" };
    if (B58.test(s) && s.length >= 50 && s.length <= 60) {
      try {
        parseCarrierAddress(s);
        return { kind: "address", address: s, userid: carrierIdFromAddress(s) };
      } catch {
      }
    }
    if (/^0x[0-9a-fA-F]{40}$/.test(s))
      return { kind: "eth", key: s };
    if (B58.test(s) && s.length >= 32 && s.length <= 44)
      return { kind: "key", key: s };
    if (/^[a-z0-9][a-z0-9-]*(\.[a-z0-9-]+)*$/i.test(s)) {
      const name = s.includes(".") ? s : `${s}.beagles.eth`;
      return { kind: "name", name };
    }
    return { kind: "none" };
  }
  var punkUrl = (id) => {
    if (id == null || id === "")
      return null;
    const n = Number(id);
    return Number.isInteger(n) && n >= 0 && n <= 9999 ? `https://www.larvalabs.com/cryptopunks/cryptopunk${n}.png` : null;
  };
  async function ensByKey(key) {
    try {
      const r = await fetch(`${ENS_GATEWAY}/getAddress/${encodeURIComponent(key)}`, { cache: "no-store" });
      if (!r.ok)
        return null;
      const rec = await r.json();
      return rec && rec.name && !rec.error ? rec : null;
    } catch {
      return null;
    }
  }
  async function ensByName(name) {
    try {
      const r = await fetch(`${ENS_GATEWAY}/names`, { cache: "no-store" });
      if (!r.ok)
        return null;
      const all = await r.json();
      const norm = (x) => String(x || "").toLowerCase().replace(/\s+/g, "");
      const hit = Object.entries(all || {}).find(([k]) => norm(k) === norm(name));
      return hit ? { name: hit[0], ...hit[1] } : null;
    } catch {
      return null;
    }
  }
  function bridgeBases() {
    const cfg = String(globalThis.__BEAGLE_BRIDGE__ || "");
    const list = cfg ? cfg.split(",").map((s) => s.trim()).filter(Boolean) : ["/relay-ws"];
    return list.map((u) => {
      try {
        if (u.startsWith("/"))
          return location.origin;
        const x = new URL(u);
        return `${x.protocol === "wss:" ? "https:" : "http:"}//${x.host}`;
      } catch {
        return null;
      }
    }).filter(Boolean);
  }
  async function bridgeProfile(userid) {
    for (const base of bridgeBases()) {
      try {
        const r = await fetch(`${base}/profile/${encodeURIComponent(userid)}`, { cache: "no-store" });
        if (!r.ok)
          continue;
        const d = await r.json();
        if (d && d.ok)
          return d;
      } catch {
      }
    }
    return null;
  }
  function identicon(seed, size) {
    let h = 2166136261;
    for (const ch of String(seed)) {
      h ^= ch.charCodeAt(0);
      h = Math.imul(h, 16777619) >>> 0;
    }
    const hue = h % 360;
    const cells = [];
    let bits = h;
    for (let y = 0; y < 5; y++)
      for (let x = 0; x < 3; x++) {
        bits = Math.imul(bits ^ bits >>> 13, 1274126177) >>> 0;
        if (bits & 1) {
          cells.push([x, y]);
          if (x < 2)
            cells.push([4 - x, y]);
        }
      }
    const rects = cells.map(([x, y]) => `<rect x="${x}" y="${y}" width="1" height="1"/>`).join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.6 -0.6 6.2 6.2" width="${size}" height="${size}" shape-rendering="crispEdges"><rect x="-1" y="-1" width="8" height="8" fill="hsl(${hue} 22% 12%)"/><g fill="hsl(${hue} 70% 62%)">${rects}</g></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }
  var profile = null;
  function setLang(l) {
    lang = l;
    try {
      localStorage.setItem("beagle-web:lang", l);
    } catch {
    }
    $("langEn").classList.toggle("on", l === "en");
    $("langZh").classList.toggle("on", l === "zh");
    document.documentElement.lang = l === "zh" ? "zh" : "en";
    if (profile)
      render(profile);
  }
  function showNotFound(msg, hint) {
    const t = W();
    $("face").src = identicon("nobody", 96);
    $("face").classList.add("blank");
    $("name").classList.remove("skel");
    $("name").textContent = msg || t.notFound;
    $("bio").textContent = hint || t.notFoundHint;
    $("addrBox").hidden = true;
    $("add").textContent = t.open;
    $("add").disabled = false;
    $("add").onclick = () => {
      location.href = "/";
    };
    $("hint").textContent = "";
  }
  function render(p) {
    const t = W();
    profile = p;
    const shownName = p.name || (p.ens ? p.ens.replace(/\.beagles\.eth$/i, "") : "") || `${p.userid.slice(0, 8)}\u2026${p.userid.slice(-4)}`;
    document.title = t.title(shownName);
    const face = $("face");
    const urls = [p.avatarUrl, punkUrl(p.punkId)].filter(Boolean);
    face.classList.toggle("blank", !urls.length);
    if (urls.length) {
      let i = 0;
      face.onerror = () => {
        i += 1;
        if (i < urls.length)
          face.src = urls[i];
        else {
          face.onerror = null;
          face.src = identicon(p.userid, 96);
          face.classList.add("blank");
        }
      };
      face.src = urls[0];
    } else {
      face.onerror = null;
      face.src = identicon(p.userid, 96);
    }
    $("name").classList.remove("skel");
    $("name").textContent = shownName;
    $("ens").textContent = p.ens || "";
    const st = $("status");
    st.className = "status" + (p.online ? " on" : "");
    st.innerHTML = p.online ? `<span class="dot"></span>${t.online}` : p.source === "bridge" || p.ens ? `<span class="dot"></span>${t.seen}` : "";
    $("bio").textContent = p.description || "";
    const links = $("links");
    links.innerHTML = "";
    const social = [
      ["twitter", (h) => `https://x.com/${h}`, "@"],
      ["github", (h) => `https://github.com/${h}`, "github/"],
      ["linkedin", (h) => `https://www.linkedin.com/in/${h}`, "in/"]
    ];
    for (const [k, url, pre] of social) {
      const h = String(p.socials?.[k] || "").replace(/^@/, "").replace(/^https?:\/\/[^/]+\//, "").replace(/\/+$/, "");
      if (!h)
        continue;
      const a = document.createElement("a");
      a.href = url(h);
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = pre + h;
      links.appendChild(a);
    }
    if (p.url) {
      const a = document.createElement("a");
      a.href = p.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = p.url.replace(/^https?:\/\//, "").replace(/\/+$/, "");
      links.appendChild(a);
    }
    $("addrLbl").textContent = t.addr;
    $("copy").textContent = t.copy;
    if (p.address) {
      $("addrBox").hidden = false;
      $("addr").textContent = p.address;
      $("copy").onclick = () => {
        try {
          navigator.clipboard.writeText(p.address);
        } catch {
        }
        $("copy").textContent = t.copied;
        setTimeout(() => {
          $("copy").textContent = t.copy;
        }, 1800);
      };
    } else {
      $("addrBox").hidden = true;
    }
    const add = $("add");
    add.textContent = t.add;
    add.disabled = !p.address;
    $("hint").textContent = p.address ? hasIdentityHere() ? t.hintHave : `${t.hintNew} ${t.hintApp}` : t.noAddr;
    add.onclick = () => addMe(p);
  }
  function hasIdentityHere() {
    try {
      return !!localStorage.getItem(IDENTITY_MIRROR);
    } catch {
      return false;
    }
  }
  function askApp(msg, resultType, timeoutMs) {
    if (typeof BroadcastChannel === "undefined")
      return Promise.resolve(null);
    return new Promise((resolve) => {
      let bc;
      try {
        bc = new BroadcastChannel(ACTION_CHANNEL);
      } catch {
        resolve(null);
        return;
      }
      const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const done = (v) => {
        clearTimeout(timer);
        bc.close();
        resolve(v);
      };
      const timer = setTimeout(() => done(null), timeoutMs);
      bc.onmessage = (ev) => {
        if (ev.data?.type === resultType && ev.data.id === id)
          done(ev.data);
      };
      bc.postMessage({ ...msg, id });
    });
  }
  async function addMe(p) {
    if (!p.address)
      return;
    const ref = {
      address: p.address,
      userid: p.userid,
      name: p.name || "",
      ens: p.ens || "",
      punkId: p.punkId ?? null,
      avatarUrl: p.avatarUrl || null,
      ts: Date.now()
    };
    try {
      localStorage.setItem(REF_KEY, JSON.stringify(ref));
    } catch {
    }
    if (!hasIdentityHere()) {
      location.href = "/";
      return;
    }
    const deep = `/#/chat?address=${encodeURIComponent(p.address)}`;
    const add = $("add");
    add.disabled = true;
    const running = await askApp({ type: "state-request", what: "desktop" }, "state-result", 1e3);
    const handed = running && await askApp({ type: "open-chat", address: p.address }, "open-chat-result", 1500);
    add.disabled = false;
    if (!handed?.ok) {
      location.href = deep;
      return;
    }
    $("hint").textContent = W().handed;
    add.textContent = W().openHere;
    add.onclick = () => {
      location.href = deep;
    };
  }
  function fromEns(rec) {
    const tx = rec?.texts || {};
    return {
      ens: rec?.name || "",
      name: tx.displayName || "",
      description: tx.description || "",
      address: tx.carrierAddress || "",
      userid: tx.carrierUserId || rec?.owner || "",
      punkId: rec?.nft === "CryptoPunks" && rec?.nftid != null ? Number(rec.nftid) : null,
      avatarUrl: tx.avatar || null,
      url: tx.url || "",
      socials: { twitter: tx["com.twitter"], github: tx["com.github"], linkedin: tx["com.linkedin"] }
    };
  }
  async function main() {
    $("langEn").onclick = () => setLang("en");
    $("langZh").onclick = () => setLang("zh");
    setLang(lang);
    const raw = (() => {
      try {
        return decodeURIComponent(location.pathname.replace(/^\/+/, "").replace(/\/+$/, ""));
      } catch {
        return "";
      }
    })();
    const what = classify(raw);
    if (what.kind === "none") {
      showNotFound();
      return;
    }
    let p = {
      userid: what.userid || what.key || "",
      address: what.address || "",
      name: "",
      description: "",
      ens: "",
      punkId: null,
      avatarUrl: null,
      socials: {},
      source: "address"
    };
    const rec = what.kind === "name" ? await ensByName(what.name) : await ensByKey(what.address || what.key);
    if (rec) {
      const e = fromEns(rec);
      p = { ...p, ...e, userid: e.userid || p.userid, address: e.address || p.address, source: "ens" };
    } else if (what.kind === "name") {
      showNotFound(W().unknownName(what.name), W().notFoundHint);
      return;
    } else if (what.kind === "eth") {
      showNotFound();
      return;
    }
    if (p.userid)
      render(p);
    if (p.userid) {
      const b = await bridgeProfile(p.userid);
      if (b) {
        p = {
          ...p,
          name: b.name || p.name,
          description: b.descr || p.description,
          punkId: b.punk ?? p.punkId,
          address: p.address || b.address || "",
          online: !!b.online,
          source: p.source === "ens" ? "ens" : "bridge"
        };
        render(p);
      }
    }
    if (!p.userid)
      showNotFound();
  }
  main().catch((err) => showNotFound(String(err?.message || err)));
})();
