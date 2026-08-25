const ICON_PATHS = {
  // ---- tab bar (the four must feel like one set) ----
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/>',
  wallet: '<path d="M19 7V6a2 2 0 0 0-2-2H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a2 2 0 0 0 2-2v-1"/><path d="M3 7a3 3 0 0 0 3 3h13a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3"/><circle cx="16.5" cy="14" r="1.15" fill="currentColor" stroke="none"/>',
  userRound: '<circle cx="12" cy="8" r="4.5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  // ---- actions / chrome ----
  search: '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.3-4.3"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 16.5v-5M12 7.6h.01"/>',
  more: '<circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCheck: '<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.6 7.6L13 16"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2.4"/><path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"/>',
  // Three linked nodes — an address is for passing ON to someone else, so it
  // must not wear the same glyph as the userid's plain copy.
  share: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.8l7.4-4.3M8.3 13.2l7.4 4.3"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-2.6-6.3"/><path d="M21 4v4.5h-4.5"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7.5V12l3 2"/>',
  edit: '<path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 14h3v3M21 14v.01M14 21h.01M17 21h.01M21 17v4"/>',
  // ---- app tiles ----
  video: '<path d="m22 8.5-5.4 3.5 5.4 3.5V8.5Z"/><rect x="2" y="6" width="14.5" height="12" rx="3"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  sparkles: '<path d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9 12 3.5Z"/><path d="M19 3.5v3.2M20.6 5.1h-3.2"/><path d="M5 16v2.4M6.2 17.2H3.8"/>',
  mic: '<rect x="9" y="2.5" width="6" height="11.5" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5v3.5"/>',
  flask: '<path d="M9.5 3v6.2L4.8 17.4A2 2 0 0 0 6.5 20.5h11a2 2 0 0 0 1.7-3.1L14.5 9.2V3"/><path d="M8.5 3h7"/><path d="M7.3 15h9.4"/>',
  headphones: '<path d="M3.5 14v-1.5a8.5 8.5 0 0 1 17 0V14"/><path d="M3.5 14.5a2.5 2.5 0 0 1 2.5-2.5h0a1.5 1.5 0 0 1 1.5 1.5v3.5a1.5 1.5 0 0 1-1.5 1.5h0a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M20.5 14.5a2.5 2.5 0 0 0-2.5-2.5h0a1.5 1.5 0 0 0-1.5 1.5v3.5a1.5 1.5 0 0 0 1.5 1.5h0a2.5 2.5 0 0 0 2.5-2.5Z"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5a14 14 0 0 1 0 19 14 14 0 0 1 0-19Z"/>',
  store: '<path d="M4 9.5V19a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19V9.5"/><path d="M3 6.5 4.5 3.5h15L21 6.5a2.5 2.5 0 0 1-4.5 1.5 2.5 2.5 0 0 1-4.5 0 2.5 2.5 0 0 1-4.5 0A2.5 2.5 0 0 1 3 6.5Z"/>',
  // ---- chat composer ----
  camera: '<path d="M14.5 4.5h-5L7.2 7.2H4.5A2.5 2.5 0 0 0 2 9.7V18a2.5 2.5 0 0 0 2.5 2.5h15A2.5 2.5 0 0 0 22 18V9.7a2.5 2.5 0 0 0-2.5-2.5h-2.7L14.5 4.5Z"/><circle cx="12" cy="13.5" r="3.2"/>',
  phone: '<path d="M16.5 21a2 2 0 0 0 2-2.2 1.9 1.9 0 0 0-.6-1.2l-2-1.7a2 2 0 0 0-2.4-.1l-.9.6a14 14 0 0 1-5-5l.6-.9a2 2 0 0 0-.1-2.4l-1.7-2a1.9 1.9 0 0 0-1.2-.6A2 2 0 0 0 3 5.5 16 16 0 0 0 16.5 21Z"/>',
  bolt: '<path d="M13 2 4 13h7l-1 9 9-11h-7l1-9Z"/>',
  arrowUp: '<path d="M12 20V5M6 11l6-6 6 6"/>',
  send: '<path d="M21.5 4.5 10.5 13.5"/><path d="M21.5 4.5 14.8 21.5 11 13l-8.5-3.8 19-4.7Z"/>',
  // ---- account ----
  shield: '<path d="M12 21.5s7.5-3.8 7.5-9.5V5.5L12 2.8 4.5 5.5V12c0 5.7 7.5 9.5 7.5 9.5Z"/>',
  download: '<path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5"/><path d="M5 20.5h14"/>',
  // Folder with a magnifier corner — "reveal / show in file manager".
  folderOpen: '<path d="M3 7.5a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><circle cx="12" cy="13" r="2.4"/><path d="M13.9 14.9 15.5 16.5"/>',
  migrate: '<path d="M8 4 4 8l4 4"/><path d="M4 8h13a3 3 0 0 1 3 3v1"/><path d="m16 20 4-4-4-4"/><path d="M20 16H7a3 3 0 0 1-3-3v-1"/>',
  starCoin: '<circle cx="12" cy="12" r="9"/><path d="m12 7.2 1.4 2.9 3.2.4-2.3 2.2.6 3.1-2.9-1.5-2.9 1.5.6-3.1L8.4 10.5l3.2-.4L12 7.2Z" fill="currentColor" stroke="none"/>',
  link: '<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.3 2.3a4 4 0 0 0 5.7 5.7l1-1"/>',
  trendingUp: '<path d="M22 7.5 13.5 16l-4.5-4.5L2 18.5"/><path d="M16.5 7.5H22v5.5"/>',
  bell: '<path d="M18 8.5a6 6 0 0 0-12 0c0 6.5-2.5 8-2.5 8h17S18 15 18 8.5Z"/><path d="M13.7 20.5a2 2 0 0 1-3.4 0"/>',
  bot: '<rect x="3.5" y="9" width="17" height="11" rx="3"/><path d="M12 4.5v4.5"/><circle cx="12" cy="3" r="1.4"/><path d="M8.5 14.5h.01M15.5 14.5h.01"/><path d="M2 13.5v3M22 13.5v3"/>',
  scan: '<path d="M3 8V6a3 3 0 0 1 3-3h2"/><path d="M16 3h2a3 3 0 0 1 3 3v2"/><path d="M21 16v2a3 3 0 0 1-3 3h-2"/><path d="M8 21H6a3 3 0 0 1-3-3v-2"/><path d="M7 12h10"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  at: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.9 7.9"/>',
  keyRound: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6"/><path d="M18.5 6l-1 13.5a2 2 0 0 1-2 1.5h-7a2 2 0 0 1-2-1.5L5.5 6"/><path d="M10 10.5v6M14 10.5v6"/>',
  arrowDown: '<path d="M12 4v15M6 13l6 6 6-6"/>',
  shrink: '<path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/>',
  maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  theater: '<rect x="2.5" y="6.5" width="19" height="11" rx="2"/>',
  speaker: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M16 9a3 3 0 0 1 0 6"/><path d="M19 7a6 6 0 0 1 0 10"/>',
  micFill: '<rect x="9" y="2.5" width="6" height="11.5" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5v3.5"/>'
};
function Icon({ name, size = 24, stroke = 1.75, color = "currentColor", fill = "none", style }) {
  const d = ICON_PATHS[name];
  if (!d)
    return null;
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill,
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { display: "block", flexShrink: 0, ...style },
      dangerouslySetInnerHTML: { __html: d }
    }
  );
}
Object.assign(window, { Icon, ICON_PATHS });
Object.assign(ICON_PATHS, {
  message: '<path d="M21 12a8.5 8.5 0 0 1-12.2 7.7L3 21l1.3-5.8A8.5 8.5 0 1 1 21 12Z"/>',
  network: '<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="19" r="2.4"/><circle cx="19" cy="19" r="2.4"/><path d="M10.6 6.9 6.4 16.7M13.4 6.9l4.2 9.8M7.4 19h9.2"/>',
  route: '<circle cx="6.5" cy="18.5" r="2.4"/><circle cx="17.5" cy="5.5" r="2.4"/><path d="M9 18.5h5.5a3.5 3.5 0 0 0 0-7h-4a3.5 3.5 0 0 1 0-7H15"/>',
  globe2: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  power: '<path d="M12 4v8"/><path d="M7.6 7.2a7 7 0 1 0 8.8 0"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
  terminal: '<path d="m4.5 17 6-6-6-6"/><path d="M12 18.5h7.5"/>',
  signal: '<path d="M4.8 12.8a10 10 0 0 1 14.4 0"/><path d="M8.3 16.3a5 5 0 0 1 7.4 0"/><path d="M12 19.6h.01"/>',
  paperclip: '<path d="m20.5 9-8.7 8.7a4.2 4.2 0 0 1-6-6l8.6-8.6a2.8 2.8 0 0 1 4 4l-8.6 8.6a1.4 1.4 0 0 1-2-2l7.9-7.9"/>',
  file: '<path d="M14 3v5h5"/><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/>',
  fileText: '<path d="M14 3v5h5"/><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M8.5 13h7M8.5 16.5h5"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 17 4.5-4.5a2 2 0 0 1 2.8 0L20 21"/>',
  arrowRight: '<path d="M5 12h13M13 6l6 6-6 6"/>',
  dotFill: '<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>',
  hash: '<path d="M4 9h16M3.5 15h16M10 4 8 20M16 4l-2 16"/>',
  sliders: '<path d="M4 6h11M4 12h7M4 18h13"/><circle cx="18" cy="6" r="2"/><circle cx="13.5" cy="12" r="2"/><circle cx="19" cy="18" r="2"/>',
  unlink: '<path d="M9 15 5.5 18.5a3.5 3.5 0 0 1-5-5L4 10"/><path d="m15 9 3.5-3.5a3.5 3.5 0 0 1 5 5L20 14"/><path d="M8 8 4 4M16 16l4 4M3 11h2M11 3v2"/>',
  zap: '<path d="M13 2 4 13h7l-1 9 9-11h-7l1-9Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  plug: '<path d="M9 2v6M15 2v6"/><path d="M7 8h10v3a5 5 0 0 1-10 0V8Z"/><path d="M12 16v6"/>'
});
function dkHash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function dkRng(a) {
  return function() {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function dkIdenticon(seed) {
  const rnd = dkRng(dkHash(seed || "x"));
  const hue = Math.floor(rnd() * 360);
  const grid = [];
  for (let y = 0; y < 5; y++) {
    const row = [];
    for (let x = 0; x < 3; x++)
      row.push(rnd() > 0.5);
    grid.push([row[0], row[1], row[2], row[1], row[0]]);
  }
  return { cells: grid, hue };
}
function dkClock(ts) {
  if (!ts)
    return "";
  const d = new Date(ts);
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}
function dkFileSize(n) {
  if (!n || n < 0)
    return "0 B";
  if (n < 1024)
    return n + " B";
  if (n < 1024 * 1024)
    return (n / 1024).toFixed(1) + " KB";
  if (n < 1024 * 1024 * 1024)
    return (n / (1024 * 1024)).toFixed(1) + " MB";
  return (n / (1024 * 1024 * 1024)).toFixed(2) + " GB";
}
function dkSpeed(kbps) {
  if (kbps == null || !(kbps >= 0))
    return "";
  return kbps >= 1024 ? (kbps / 1024).toFixed(2) + " MB/s" : Math.round(kbps) + " KB/s";
}
function dkPct(p) {
  return p == null ? "\u2026" : (p >= 100 ? "100" : p.toFixed(2)) + "%";
}
const dkBlobUrls = /* @__PURE__ */ new Map();
const DK_BLOB_MAX = 64 * 1024 * 1024;
function dkFileUrl(name) {
  return dkBlobUrls.get(name) || "/api/file-download?name=" + encodeURIComponent(name);
}
function dkFileDownloadUrl(name) {
  return dkBlobUrls.get(name) || dkFileUrl(name) + "&dl=1";
}
async function dkEnsureBlob(name, size) {
  if (!name || dkBlobUrls.has(name))
    return;
  if (size && size > DK_BLOB_MAX)
    return;
  try {
    const r = await fetch("/api/file-download?name=" + encodeURIComponent(name));
    if (!r.ok)
      return;
    const b = await r.blob();
    if (b.size && !dkBlobUrls.has(name))
      dkBlobUrls.set(name, URL.createObjectURL(b));
  } catch (e) {
  }
}
function dkFileMediaKind(name) {
  const ext = (String(name || "").split(".").pop() || "").toLowerCase();
  if (["png", "jpg", "jpeg", "gif", "webp", "svg", "heic", "bmp"].includes(ext))
    return "image";
  if (["mp4", "mov", "webm", "m4v", "mkv", "avi"].includes(ext))
    return "video";
  if (["mp3", "m4a", "aac", "wav", "ogg", "flac", "opus"].includes(ext))
    return "audio";
  return "file";
}
function dkDayLabel(ts) {
  if (!ts)
    return "Today";
  const d = new Date(ts), now = /* @__PURE__ */ new Date();
  if (d.toDateString() === now.toDateString())
    return "Today";
  const y = new Date(now.getTime() - 864e5);
  if (d.toDateString() === y.toDateString())
    return "Yesterday";
  return d.toLocaleDateString();
}
async function dkGet(path) {
  const r = await fetch(path, { headers: { "cache-control": "no-cache" } });
  return r.json();
}
async function dkPost(path, body) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15e3);
  try {
    const r = await fetch(path, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body || {}),
      signal: ctrl.signal
    });
    try {
      return await r.json();
    } catch (e) {
      return { ok: r.ok };
    }
  } catch (e) {
    return { ok: false, error: e && e.name === "AbortError" ? "timed out" : e && e.message || "network error" };
  } finally {
    clearTimeout(timer);
  }
}
function dkCopy(text) {
  const s = text == null ? "" : String(text);
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(s).then(() => true).catch(() => dkCopyLegacy(s));
  }
  return Promise.resolve(dkCopyLegacy(s));
}
function dkCopyLegacy(s) {
  try {
    const ta = document.createElement("textarea");
    ta.value = s;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:-1000px;left:-1000px;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, s.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    return false;
  }
}
const dkApi = {
  send: (userid, text) => dkPost("/api/chat-send", { userid, text }),
  logLocal: (userid, dir, text) => dkPost("/api/chat-log-local", { userid, dir, text }),
  add: (address) => dkPost("/api/add", { address }),
  accept: (userid) => dkPost("/api/accept", { userid }),
  reject: (userid) => dkPost("/api/reject", { userid }),
  remove: (userid) => dkPost("/api/friend-remove", { userid }),
  alias: (userid, alias) => dkPost("/api/friend-alias", { userid, alias }),
  markRead: (userid) => dkPost("/api/chat-mark-read", { userid }),
  delFiles: (userid, ids) => dkPost("/api/file-delete", { userid, ids }),
  // Reveal a received file in the OS file manager (localhost-only on the daemon side).
  revealFile: (name) => dkPost("/api/file-reveal", { name }),
  cancelSend: (userid, ids) => dkPost("/api/file-cancel", { userid, ids }),
  retrySend: (userid, ids) => dkPost("/api/file-retry", { userid, ids }),
  setProfile: (name, description) => dkPost("/api/set-profile", { name, description }),
  // Web port: the welcome flow also picks an avatar and marks first run done.
  setProfileFull: (p) => dkPost("/api/set-profile", p),
  // Mint the keypair. Only called when the user commits in the welcome flow —
  // loading the page must not create an account on its own.
  createIdentity: () => dkPost("/api/create-identity", {}),
  saveWebrtcFile: async (userid, name, blob) => {
    try {
      const r = await fetch(
        "/api/webrtc-file-save?userid=" + encodeURIComponent(userid) + "&name=" + encodeURIComponent(name),
        { method: "POST", body: blob }
      );
      const txt = await r.text();
      try {
        return JSON.parse(txt);
      } catch {
        return { ok: false, error: (txt || "HTTP " + r.status).slice(0, 120) };
      }
    } catch (e) {
      return { ok: false, error: String(e) };
    }
  },
  sendFile: async (userid, file) => {
    try {
      const r = await fetch(
        "/api/file-send?userid=" + encodeURIComponent(userid) + "&name=" + encodeURIComponent(file.name),
        { method: "POST", body: file }
      );
      const txt = await r.text();
      try {
        return JSON.parse(txt);
      } catch {
        if (r.status === 404)
          return { ok: false, error: "file upload not supported \u2014 update & restart `agentnet ui`" };
        return { ok: false, error: (txt || "HTTP " + r.status).slice(0, 120) };
      }
    } catch (e) {
      return { ok: false, error: String(e) };
    }
  }
};
const DK_ME_FALLBACK = {
  name: "\u2026",
  handle: "@decentnetwork/peer",
  userId: "",
  carrier: "",
  netKey: "",
  ip: "",
  online: false,
  lanVer: "",
  peerVer: "",
  channel: "@next",
  wire: "163"
};
function useDaemonData() {
  const [snap, setSnap] = React.useState({
    me: DK_ME_FALLBACK,
    peers: [],
    requests: [],
    exits: [],
    activeExit: null,
    loaded: false
  });
  const [threads, setThreads] = React.useState({});
  const refresh = React.useCallback(async () => {
    var _a;
    try {
      const d = await dkGet("/api/desktop");
      setSnap({
        me: d.me || DK_ME_FALLBACK,
        peers: d.peers || [],
        requests: d.requests || [],
        exits: d.exits || [],
        activeExit: (_a = d.activeExit) != null ? _a : null,
        loaded: true
      });
    } catch (e) {
    }
  }, []);
  React.useEffect(() => {
    refresh();
    const t = setInterval(refresh, 2500);
    return () => clearInterval(t);
  }, [refresh]);
  const loadThread = React.useCallback(async (peerId) => {
    if (!peerId)
      return;
    try {
      const d = await dkGet("/api/chat-history?peer=" + encodeURIComponent(peerId));
      const arr = d.chats && d.chats[peerId] || [];
      await Promise.all(arr.filter((m) => m.file && m.file.name && m.file.status !== "sending" && m.file.status !== "queued").map((m) => dkEnsureBlob(m.file.name, m.file.size)));
      const msgs = arr.map((m) => ({
        id: m.id,
        from: m.dir === "out" ? "me" : "them",
        time: dkClock(m.ts),
        text: m.text,
        file: m.file ? {
          name: m.file.name,
          size: dkFileSize(m.file.size),
          dir: m.dir,
          media: dkFileMediaKind(m.file.name),
          status: m.file.status,
          pct: m.file.status === "sending" && m.file.size ? Math.min(100, (m.file.sent || 0) / m.file.size * 100) : void 0,
          kbps: m.file.kbps
        } : void 0,
        status: m.dir === "out" ? m.status === "queued" ? "queued" : "read" : void 0,
        // Delivery path: "online" = live session, "offline" = express relay.
        // Incoming messages carry this; the bubble colors them differently.
        via: m.via,
        // Brief 30: a validated component form, already whitelisted host-side.
        // Passed through untouched — the renderer treats every string as text,
        // never markup.
        components: m.components
      }));
      const withDay = msgs.length ? [{ day: dkDayLabel(arr[0].ts) }].concat(msgs) : [];
      setThreads((t) => Object.assign({}, t, { [peerId]: withDay }));
    } catch (e) {
    }
  }, []);
  return Object.assign({}, snap, { threads, refresh, loadThread });
}
Object.assign(window, {
  dkHash,
  dkIdenticon,
  dkClock,
  dkDayLabel,
  dkApi,
  useDaemonData,
  DK_ME_FALLBACK,
  dkCopy
});
const DK_FALLBACK_ICE_SERVERS = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "turn:tokyo.fi.chat:3478", username: "allcom", credential: "allcompass" },
  { urls: "turn:tokyo.fi.chat:3478?transport=tcp", username: "allcom", credential: "allcompass" }
];
const DK_LIVE_ICE_SERVERS = [];
let _dkIcePromise = null;
let _dkIceWarmPromise = null;
function dkWarmCallIce(iceServers) {
  if (_dkIceWarmPromise)
    return _dkIceWarmPromise;
  if (!window.RTCPeerConnection || !iceServers || !iceServers.length) {
    _dkIceWarmPromise = Promise.resolve();
    return _dkIceWarmPromise;
  }
  _dkIceWarmPromise = new Promise((resolve) => {
    let pc;
    let finished = false;
    const done = (why) => {
      if (finished)
        return;
      finished = true;
      try {
        if (pc)
          pc.close();
      } catch (e) {
      }
      console.log("[rtc] ICE warmup done (" + why + ")");
      resolve();
    };
    try {
      pc = new RTCPeerConnection({ iceServers, iceTransportPolicy: "all" });
      const timer = setTimeout(() => done("timeout"), 5e3);
      pc.onicecandidate = (ev) => {
        const c = ev.candidate && ev.candidate.candidate;
        if (c && /typ relay/.test(c)) {
          clearTimeout(timer);
          done("relay");
        }
      };
      pc.onicegatheringstatechange = () => {
        if (pc.iceGatheringState === "complete") {
          clearTimeout(timer);
          done("gather-complete");
        }
      };
      pc.createDataChannel("ice-warm");
      pc.createOffer().then((o) => pc.setLocalDescription(o)).catch(() => done("offer-fail"));
    } catch (e) {
      done("error");
    }
  });
  return _dkIceWarmPromise;
}
function dkLoadCallIceServers() {
  if (_dkIcePromise)
    return _dkIcePromise;
  _dkIcePromise = (async () => {
    try {
      const r = await fetch("/api/call-ice-servers", { headers: { "cache-control": "no-cache" } });
      const d = await r.json();
      if (d && d.ok && Array.isArray(d.iceServers) && d.iceServers.length) {
        DK_LIVE_ICE_SERVERS.splice(0, DK_LIVE_ICE_SERVERS.length, ...d.iceServers);
        console.log("[rtc] Carrier bootstrap ICE servers:", DK_LIVE_ICE_SERVERS.map((s) => s.urls));
        await dkWarmCallIce(DK_LIVE_ICE_SERVERS);
        return DK_LIVE_ICE_SERVERS;
      }
      console.warn("[rtc] call-ice-servers unavailable:", d && d.error);
    } catch (e) {
      console.warn("[rtc] call-ice-servers fetch failed", e);
    }
    console.warn("[rtc] falling back to tokyo TURN \u2014 web\u2194Android online ICE may fail");
    DK_LIVE_ICE_SERVERS.splice(0, DK_LIVE_ICE_SERVERS.length, ...DK_FALLBACK_ICE_SERVERS.map((s) => ({ ...s })));
    await dkWarmCallIce(DK_LIVE_ICE_SERVERS);
    return DK_LIVE_ICE_SERVERS;
  })();
  return _dkIcePromise;
}
function dkAwaitCallIceServers(ms) {
  const budget = typeof ms === "number" ? ms : 1e4;
  return Promise.race([
    dkLoadCallIceServers(),
    new Promise((resolve) => setTimeout(() => {
      if (!DK_LIVE_ICE_SERVERS.length) {
        DK_LIVE_ICE_SERVERS.splice(0, DK_LIVE_ICE_SERVERS.length, ...DK_FALLBACK_ICE_SERVERS.map((s) => ({ ...s })));
        console.warn("[rtc] ICE wait timed out \u2014 using fallback");
      }
      resolve(DK_LIVE_ICE_SERVERS);
    }, budget))
  ]).then(() => DK_LIVE_ICE_SERVERS);
}
dkLoadCallIceServers();
function dkRtcParseEnvelope(data) {
  const text = String(data || "").replace(/\0+$/u, "").trim();
  if (!text)
    return null;
  try {
    const obj = JSON.parse(text);
    if (obj && obj.dkRtc === 1 && typeof obj.kind === "string")
      return obj;
  } catch (e) {
  }
  return null;
}
function dkRtcSignalBus() {
  if (window.__dkRtcSignalBus)
    return window.__dkRtcSignalBus;
  const PW = window.PeerWebRTC;
  const handlers = /* @__PURE__ */ new Map();
  const pendingCalls = [];
  const PENDING_CALL_CAP = 16;
  let started = false;
  let stopped = false;
  function emit(kind, userid, payload) {
    const set = handlers.get(kind);
    if (!set || !set.size) {
      if (kind === "call") {
        pendingCalls.push({ userid, payload });
        if (pendingCalls.length > PENDING_CALL_CAP)
          pendingCalls.shift();
      }
      return;
    }
    for (const h of Array.from(set)) {
      try {
        h(userid, payload);
      } catch (e) {
        console.warn("[rtc] signal handler failed", e);
      }
    }
  }
  async function pollLoop() {
    let cursor = null;
    while (!stopped) {
      let signals = [];
      try {
        const u = cursor == null ? "/api/call-poll" : "/api/call-poll?since=" + cursor;
        const r = await fetch(u, { headers: { "cache-control": "no-cache" } });
        const d = await r.json();
        signals = d && d.signals || [];
        if (d && typeof d.cursor === "number")
          cursor = d.cursor;
      } catch (e) {
        await new Promise((res) => setTimeout(res, 1e3));
        continue;
      }
      for (const s of signals) {
        const env = dkRtcParseEnvelope(s.data);
        if (env) {
          emit(env.kind, s.userid, env);
          continue;
        }
        if (PW) {
          try {
            emit("call", s.userid, PW.decodeSignal(s.data));
          } catch (e) {
          }
        }
      }
    }
  }
  const bus = {
    start() {
      if (started)
        return;
      started = true;
      stopped = false;
      pollLoop();
    },
    on(kind, cb) {
      if (!handlers.has(kind))
        handlers.set(kind, /* @__PURE__ */ new Set());
      handlers.get(kind).add(cb);
      this.start();
      if (kind === "call" && pendingCalls.length) {
        const queued = pendingCalls.splice(0);
        console.log("[rtc] flushing " + queued.length + " buffered call signal(s)");
        for (const q of queued) {
          try {
            cb(q.userid, q.payload);
          } catch (e) {
            console.warn("[rtc] buffered call handler failed", e);
          }
        }
      }
      return () => {
        var _a;
        return (_a = handlers.get(kind)) == null ? void 0 : _a.delete(cb);
      };
    },
    async send(userid, data) {
      const body = JSON.stringify({ userid, data: typeof data === "string" ? data : JSON.stringify(data) });
      const r = await fetch("/api/call-signal", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body
      });
      const d = await r.json().catch(() => ({ ok: r.ok }));
      if (!d.ok)
        throw new Error(d.error || "call-signal send failed");
    },
    stop() {
      stopped = true;
    }
  };
  window.__dkRtcSignalBus = bus;
  return bus;
}
function makeDaemonSignaling() {
  const PW = window.PeerWebRTC;
  const bus = dkRtcSignalBus();
  let off = null;
  return {
    async send(peerId, signal) {
      await bus.send(peerId, PW.encodeSignal(signal));
    },
    onSignal(cb) {
      if (off)
        off();
      off = bus.on("call", cb);
    },
    stop() {
      if (off) {
        off();
        off = null;
      }
    }
  };
}
Object.assign(window, { dkRtcSignalBus, makeDaemonSignaling });
function DkIdenticon({ seed, size = 30, radius = 7 }) {
  const { cells, hue } = dkIdenticon(seed);
  const cell = size / 5;
  const fg = `oklch(0.62 0.15 ${hue})`;
  const bg = `oklch(var(--ident-l) 0.05 ${hue})`;
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, style: { display: "block", borderRadius: radius } }, /* @__PURE__ */ React.createElement("rect", { width: size, height: size, fill: bg }), cells.map((row, y) => row.map((on, x) => on ? /* @__PURE__ */ React.createElement("rect", { key: `${x}-${y}`, x: x * cell, y: y * cell, width: cell + 0.4, height: cell + 0.4, fill: fg }) : null)));
}
function DkBot({ seed, size = 30, radius = 7 }) {
  const hue = dkIdenticon(seed).hue;
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: radius,
    flexShrink: 0,
    background: `linear-gradient(150deg, oklch(0.6 0.17 ${hue}), oklch(0.5 0.18 ${(hue + 30) % 360}))`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "bot", size: size * 0.56, color: "#fff", stroke: 1.9 }));
}
function DkImgAvatar({ url, seed, size, radius }) {
  const [broken, setBroken] = React.useState(false);
  if (broken)
    return /* @__PURE__ */ React.createElement(DkIdenticon, { seed, size, radius });
  return /* @__PURE__ */ React.createElement(
    "img",
    {
      src: url,
      alt: "",
      width: size,
      height: size,
      onError: () => setBroken(true),
      style: { width: size, height: size, borderRadius: radius, objectFit: "cover", flexShrink: 0, background: "var(--panel-2)" }
    }
  );
}
function DkAvatar({ peer, size = 30, radius = 7, dot = true }) {
  const d = Math.max(8, size * 0.3);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: size, height: size, flexShrink: 0 } }, peer.agent ? /* @__PURE__ */ React.createElement(DkBot, { seed: peer.id, size, radius }) : peer.avatarUrl ? /* @__PURE__ */ React.createElement(DkImgAvatar, { url: peer.avatarUrl, seed: peer.userId || peer.id, size, radius }) : peer.punkId != null ? /* @__PURE__ */ React.createElement(DkPunkAvatar, { id: peer.punkId, size, radius, fallbackSeed: peer.userId || peer.id }) : /* @__PURE__ */ React.createElement(DkIdenticon, { seed: peer.userId || peer.id, size, radius }), dot && /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: d,
    height: d,
    borderRadius: 999,
    background: peer.online ? "var(--online)" : "var(--off)",
    border: "2px solid var(--panel)",
    boxSizing: "border-box"
  } }));
}
function StatusDot({ online, size = 8 }) {
  return /* @__PURE__ */ React.createElement("span", { style: {
    width: size,
    height: size,
    borderRadius: 999,
    flexShrink: 0,
    background: online ? "var(--online)" : "var(--off)",
    boxShadow: online ? "0 0 0 3px color-mix(in oklab, var(--online), transparent 80%)" : "none"
  } });
}
function Mono({ children, dim, size = 12.5, copy, title, icon = "copy" }) {
  const [hit, setHit] = React.useState(false);
  const onCopy = (e) => {
    e.stopPropagation();
    dkCopy(copy === true ? String(children) : copy);
    setHit(true);
    setTimeout(() => setHit(false), 900);
  };
  return /* @__PURE__ */ React.createElement("span", { title, onClick: copy ? onCopy : void 0, style: {
    fontFamily: "var(--mono)",
    fontSize: size,
    letterSpacing: -0.2,
    color: dim ? "var(--dim)" : "var(--text)",
    cursor: copy ? "pointer" : "default",
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    whiteSpace: "nowrap"
  } }, children, copy && /* @__PURE__ */ React.createElement(Icon, { name: hit ? "check" : icon, size: 12, stroke: 2, color: hit ? "var(--online)" : "var(--faint)" }));
}
function shortKey(s, head = 6, tail = 5) {
  if (!s || s.length <= head + tail + 1)
    return s;
  return s.slice(0, head) + "\u2026" + s.slice(-tail);
}
function RouteTag({ peer }) {
  if (!peer.online)
    return /* @__PURE__ */ React.createElement(Tag, { tone: "off" }, "offline");
  const relay = peer.via === "relay";
  const via = peer.via || "online";
  return /* @__PURE__ */ React.createElement(Tag, { tone: relay ? "warn" : "ok" }, peer.ping != null ? `${via} \xB7 ${peer.ping}ms` : via);
}
function Tag({ children, tone = "neutral", style, title }) {
  const tones = {
    neutral: { bg: "var(--chip)", fg: "var(--dim)", bd: "transparent" },
    ok: { bg: "color-mix(in oklab, var(--online), transparent 86%)", fg: "var(--online)", bd: "transparent" },
    warn: { bg: "color-mix(in oklab, var(--warn), transparent 86%)", fg: "var(--warn)", bd: "transparent" },
    off: { bg: "var(--chip)", fg: "var(--faint)", bd: "transparent" },
    accent: { bg: "color-mix(in oklab, var(--accent), transparent 86%)", fg: "var(--accent)", bd: "transparent" },
    danger: { bg: "color-mix(in oklab, var(--danger), transparent 88%)", fg: "var(--danger)", bd: "transparent" }
  };
  const t = tones[tone] || tones.neutral;
  return /* @__PURE__ */ React.createElement("span", { title, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    height: 18,
    padding: "0 6px",
    borderRadius: 4,
    background: t.bg,
    color: t.fg,
    border: `1px solid ${t.bd}`,
    fontFamily: "var(--mono)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: -0.1,
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...style
  } }, children);
}
function Unread({ n }) {
  if (!n)
    return null;
  return /* @__PURE__ */ React.createElement("span", { style: {
    minWidth: 18,
    height: 18,
    padding: "0 5px",
    borderRadius: 999,
    flexShrink: 0,
    background: "var(--accent)",
    color: "#fff",
    fontFamily: "var(--mono)",
    fontSize: 11,
    fontWeight: 700,
    lineHeight: "18px",
    textAlign: "center"
  } }, n);
}
function Btn({ children, icon, tone = "ghost", onClick, size = "md", title, style }) {
  const tones = {
    ghost: { bg: "transparent", fg: "var(--text)", bd: "var(--line)" },
    solid: { bg: "var(--accent)", fg: "#fff", bd: "transparent" },
    soft: { bg: "var(--chip)", fg: "var(--text)", bd: "transparent" },
    ok: { bg: "color-mix(in oklab, var(--online), transparent 84%)", fg: "var(--online)", bd: "transparent" },
    danger: { bg: "transparent", fg: "var(--danger)", bd: "color-mix(in oklab, var(--danger), transparent 70%)" }
  };
  const t = tones[tone] || tones.ghost;
  const h = size === "sm" ? 26 : size === "lg" ? 36 : 30;
  return /* @__PURE__ */ React.createElement("button", { onClick, title, style: {
    height: h,
    padding: icon && !children ? 0 : "0 11px",
    minWidth: icon && !children ? h : "auto",
    borderRadius: 6,
    cursor: "pointer",
    fontFamily: "var(--mono)",
    fontWeight: 600,
    fontSize: size === "sm" ? 12 : 12.5,
    letterSpacing: -0.1,
    background: t.bg,
    color: t.fg,
    border: `1px solid ${t.bd}`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    whiteSpace: "nowrap",
    ...style
  } }, icon && /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 15, stroke: 2 }), children);
}
function Section({ label, count, trailing, style }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "0 2px", ...style } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--faint)" } }, label), count != null && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "var(--faint)" } }, count), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 1, background: "var(--line)" } }), trailing);
}
Object.assign(window, { DkIdenticon, DkBot, DkAvatar, DkImgAvatar, StatusDot, Mono, shortKey, RouteTag, Tag, Unread, Btn, Section });
const TWEAKS_STORAGE_KEY = "decentlan.tweaks";
function useTweaks(defaults) {
  const [values, setValues] = React.useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(TWEAKS_STORAGE_KEY) || "{}");
      return { ...defaults, ...saved };
    } catch (e) {
      return defaults;
    }
  });
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === "object" && keyOrEdits !== null ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => {
      const next = { ...prev, ...edits };
      try {
        localStorage.setItem(TWEAKS_STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
      }
      return next;
    });
    try {
      window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
    } catch (e) {
    }
  }, []);
  return [values, setTweak];
}
Object.assign(window, { useTweaks });
function RequestsBlock({ T, requests, onAct }) {
  if (!requests.length)
    return null;
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 0 8px" } }, /* @__PURE__ */ React.createElement(Section, { label: T.requests, count: requests.length, style: { margin: "4px 4px 8px" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, requests.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.id, style: {
    padding: "9px 10px",
    borderRadius: 8,
    background: "var(--panel-2)",
    border: "1px solid var(--line)",
    display: "flex",
    flexDirection: "column",
    gap: 8
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(DkIdenticon, { seed: r.carrier, size: 26, radius: 6 }), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0, flex: 1 } }, /* @__PURE__ */ React.createElement(Mono, { size: 12, copy: r.carrier, title: r.carrier }, shortKey(r.carrier, 8, 6)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--faint)", marginTop: 2 } }, "via ", r.via, " \xB7 ", r.time))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(Btn, { tone: "ok", icon: "check", size: "sm", onClick: () => onAct(r.id, "accept"), style: { flex: 1 } }, T.accept), /* @__PURE__ */ React.createElement(Btn, { tone: "danger", icon: "x", size: "sm", onClick: () => onAct(r.id, "reject"), style: { flex: 1 } }, T.reject))))));
}
function PeerRow({ peer, T, active, onClick }) {
  const name = peer.alias || peer.userId;
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    textAlign: "left",
    padding: "var(--row-pad)",
    borderRadius: 8,
    cursor: "pointer",
    fontFamily: "inherit",
    border: "1px solid " + (active ? "var(--line)" : "transparent"),
    background: active ? "var(--panel-2)" : "transparent"
  } }, /* @__PURE__ */ React.createElement(DkAvatar, { peer, size: 32, radius: 7 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: peer.alias ? "var(--ui)" : "var(--mono)",
    fontSize: 13.5,
    fontWeight: 600,
    color: "var(--text)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, peer.alias || shortKey(peer.userId, 8, 5)), peer.agent && /* @__PURE__ */ React.createElement(Icon, { name: "bot", size: 13, color: "var(--faint)", stroke: 2 }), peer.wire === "64" && /* @__PURE__ */ React.createElement(Tag, { tone: "off", style: { height: 15, fontSize: 9.5, padding: "0 4px" } }, "w64")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)" } }, peer.ip), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--line)", fontSize: 11 } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 11,
    color: "var(--dim)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flex: 1,
    minWidth: 0
  } }, dkContactPreview(peer.lastMsg) || peer.lastMsg))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--faint)" } }, peer.lastTime), peer.unread ? /* @__PURE__ */ React.createElement(Unread, { n: peer.unread }) : peer.pending ? /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 11, stroke: 2.2, color: "var(--warn, #d29922)", title: "friend request pending" }) : /* @__PURE__ */ React.createElement(StatusDot, { online: peer.online })));
}
function PeerSidebar({ T, peers, requests, activeId, onSelect, onAct, onAdd, prefillAddr, onPrefillConsumed }) {
  const [q, setQ] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [addState, setAddState] = React.useState(null);
  const [fromDeepLink, setFromDeepLink] = React.useState(false);
  React.useEffect(() => {
    if (prefillAddr) {
      setAddr(prefillAddr);
      setFromDeepLink(true);
    }
  }, [prefillAddr]);
  const submitAddr = () => {
    const v = addr.trim();
    if (!v || addState && addState.kind === "sending")
      return;
    setAddState({ kind: "sending", msg: T.addSending });
    Promise.resolve(onAdd(v)).then((r) => {
      if (r && r.ok) {
        setAddr("");
        setFromDeepLink(false);
        onPrefillConsumed && onPrefillConsumed();
        setAddState({ kind: "ok", msg: T.addSent });
      } else {
        setAddState({ kind: "err", msg: r && r.error ? `${T.addFailed}: ${r.error}` : T.addFailed });
      }
    }).catch((e) => {
      setAddState({ kind: "err", msg: `${T.addFailed}: ${e && e.message || e}` });
    }).finally(() => {
      setTimeout(() => setAddState((s) => s && s.kind !== "sending" ? null : s), 6e3);
    });
  };
  const filtered = peers.filter((p) => {
    if (!q)
      return true;
    const s = (p.alias || "") + " " + p.userId + " " + p.ip;
    return s.toLowerCase().includes(q.toLowerCase());
  });
  const online = peers.filter((p) => p.online).length;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 320, flexShrink: 0, borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column", background: "var(--panel)" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 12px 10px", borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 8 } }, fromDeepLink && /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--ui)",
    fontSize: 12,
    lineHeight: 1.4,
    color: "var(--text)",
    background: "color-mix(in oklab, var(--accent), transparent 88%)",
    border: "1px solid var(--accent)",
    borderRadius: 8,
    padding: "7px 10px"
  } }, T.deepLinkConfirm || "\u901A\u8FC7\u94FE\u63A5\u6DFB\u52A0\u8FD9\u4F4D\u597D\u53CB? \u70B9\u300C\u6DFB\u52A0\u300D\u53D1\u9001\u597D\u53CB\u8BF7\u6C42 / Add this contact from the link? Tap Add to send a friend request."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7 } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      value: addr,
      onChange: (e) => {
        setAddr(e.target.value);
        if (fromDeepLink)
          setFromDeepLink(false);
      },
      onKeyDown: (e) => {
        if (e.key === "Enter")
          submitAddr();
      },
      placeholder: T.addPlaceholder,
      style: { ...inputStyle, ...fromDeepLink ? { borderColor: "var(--accent)" } : null }
    }
  ), /* @__PURE__ */ React.createElement(Btn, { tone: "solid", icon: "userPlus", onClick: submitAddr }, T.add)), addState && /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--mono)",
    fontSize: 11.5,
    lineHeight: 1.35,
    color: addState.kind === "err" ? "var(--bad, #e5484d)" : addState.kind === "ok" ? "var(--good, #46a758)" : "var(--faint)"
  } }, addState.msg), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 15, color: "var(--faint)", stroke: 2, style: { position: "absolute", left: 9 } }), /* @__PURE__ */ React.createElement("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: T.search, style: { ...inputStyle, paddingLeft: 30 } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", padding: "10px 8px 16px" } }, /* @__PURE__ */ React.createElement(RequestsBlock, { T, requests, onAct }), /* @__PURE__ */ React.createElement(Section, { label: T.peers, count: `${online}/${peers.length}`, style: { margin: "6px 4px 8px" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, filtered.map((p) => /* @__PURE__ */ React.createElement(PeerRow, { key: p.id, peer: p, T, active: p.id === activeId, onClick: () => onSelect(p.id) })), !filtered.length && /* @__PURE__ */ React.createElement("div", { style: { padding: 16, textAlign: "center", fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)" } }, "no matches"))));
}
const inputStyle = {
  flex: 1,
  height: 32,
  borderRadius: 7,
  border: "1px solid var(--line)",
  background: "var(--panel-2)",
  color: "var(--text)",
  fontFamily: "var(--mono)",
  fontSize: 12.5,
  padding: "0 10px",
  outline: "none",
  minWidth: 0
};
const mediaBtnStyle = {
  width: 28,
  height: 28,
  borderRadius: 8,
  border: "none",
  background: "rgba(0,0,0,0.5)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 0
};
function dkRtcFileFromText(peerId, text) {
  const m = /^received file via WebRTC: (.+) \(([^)]+)\)$/.exec(String(text || ""));
  if (!m || !window.__dkRtcFiles)
    return null;
  const name = m[1];
  for (const item of window.__dkRtcFiles.values()) {
    if (item && item.peerId === peerId && item.name === name)
      return item;
  }
  return null;
}
function dkCallFromText(text) {
  const m = /^WebRTC (audio|video) call: (incoming|outgoing)$/.exec(String(text || ""));
  return m ? { kind: m[1], direction: m[2] } : null;
}
function dkHtmlEscape(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function dkSafeHref(s) {
  const href = String(s || "").trim();
  if (!href)
    return "";
  try {
    const u = new URL(href, window.location.href);
    if (u.protocol === "http:" || u.protocol === "https:" || u.protocol === "mailto:")
      return u.href;
  } catch (e) {
  }
  return "";
}
function dkTrimUrlTail(raw) {
  let url = raw;
  const TAIL = `.,;:!?'"\u3002\uFF0C\u3001\uFF1B\uFF1A\uFF01\uFF1F\u2026\u201D\u2019\u300D\u300F`;
  const PAIRS = [["(", ")"], ["[", "]"], ["{", "}"], ["\uFF08", "\uFF09"], ["\u3010", "\u3011"], ["\u300A", "\u300B"]];
  const count = (s, ch) => s.split(ch).length - 1;
  for (; ; ) {
    const before = url;
    while (url && TAIL.indexOf(url[url.length - 1]) >= 0)
      url = url.slice(0, -1);
    for (let i = 0; i < PAIRS.length; i += 1) {
      const open = PAIRS[i][0], close = PAIRS[i][1];
      if (url.slice(-1) === close && count(url, open) < count(url, close))
        url = url.slice(0, -1);
    }
    if (url === before)
      return url;
  }
}
function dkInlineMarkdown(s) {
  const text = String(s == null ? "" : s);
  const tokenRe = /(`[^`\n]+`|\[[^\]\n]+\]\([^) \n]+(?: [^)]+)?\)|https?:\/\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+|\*\*[^*\n]+?\*\*|\*[^*\n]+?\*)/g;
  let out = "";
  let last = 0;
  let m;
  while (m = tokenRe.exec(text)) {
    out += dkHtmlEscape(text.slice(last, m.index));
    const tok = m[0];
    if (tok[0] === "`") {
      out += "<code>" + dkHtmlEscape(tok.slice(1, -1)) + "</code>";
    } else if (tok.startsWith("[")) {
      const lm = /^\[([^\]\n]+)\]\(([^) \n]+)(?: [^)]+)?\)$/.exec(tok);
      const href = lm && dkSafeHref(lm[2]);
      out += href ? '<a href="' + dkHtmlEscape(href) + '" target="_blank" rel="noopener">' + dkHtmlEscape(lm[1]) + "</a>" : dkHtmlEscape(tok);
    } else if (/^https?:\/\//.test(tok)) {
      const url = dkTrimUrlTail(tok);
      const href = dkSafeHref(url);
      const tail = tok.slice(url.length);
      out += href ? '<a href="' + dkHtmlEscape(href) + '" target="_blank" rel="noopener">' + dkHtmlEscape(url) + "</a>" + dkHtmlEscape(tail) : dkHtmlEscape(tok);
    } else if (tok.startsWith("**")) {
      out += "<strong>" + dkHtmlEscape(tok.slice(2, -2)) + "</strong>";
    } else if (tok.startsWith("*")) {
      out += "<em>" + dkHtmlEscape(tok.slice(1, -1)) + "</em>";
    } else {
      out += dkHtmlEscape(tok);
    }
    last = tokenRe.lastIndex;
  }
  out += dkHtmlEscape(text.slice(last));
  return out;
}
function dkParseBeagleContact(raw) {
  const text = String(raw == null ? "" : raw);
  const fence = /```\s*beagle-contact\s*\n([\s\S]*?)\n```/i.exec(text);
  if (fence) {
    try {
      const j = JSON.parse(fence[1].trim());
      if (j && (j.type === "beagle_contact" || j.type === "beagle-contact")) {
        return {
          name: j.name || "",
          ens: j.ens || "",
          userid: j.userid || j.userId || "",
          address: j.address || "",
          avatar: j.avatar || j.avatarUrl || "",
          description: j.description || ""
        };
      }
    } catch (e) {
    }
  }
  if (/^\s*BCR1\s+/i.test(text)) {
    try {
      const j = JSON.parse(text.replace(/^\s*BCR1\s+/i, "").trim());
      if (j && j.type === "beagle_contact") {
        return {
          name: j.name || "",
          ens: j.ens || "",
          userid: j.userid || j.userId || "",
          address: j.address || "",
          avatar: j.avatar || "",
          description: j.description || ""
        };
      }
    } catch (e) {
    }
  }
  return null;
}
function dkEncodeBeagleContact(p) {
  const j = {
    v: 1,
    type: "beagle_contact",
    name: p.name || "",
    ens: p.ens || "",
    userid: p.userid || "",
    address: p.address || "",
    avatar: p.avatar || "",
    description: p.description || ""
  };
  const head = "**" + (p.name || p.ens || "Beagle user") + "**" + (p.ens ? " \xB7 `" + p.ens + "`" : "");
  const bio = p.description ? "\n\n" + p.description : "";
  const link = "\n\n[Open name card](https://app.beagle.chat/#/chat?address=" + encodeURIComponent(p.address || "") + ")";
  return head + bio + link + "\n\n```beagle-contact\n" + JSON.stringify(j) + "\n```\n";
}
function dkContactPreview(text) {
  const s = String(text == null ? "" : text);
  if (!/beagle-contact|BCR1\s*\{/i.test(s))
    return null;
  const mine = /^you:\s*/i.test(s);
  const card = dkParseBeagleContact(s.replace(/^you:\s*/i, ""));
  const label = "\u{1F4C7} " + (card && (card.name || card.ens) || "name card");
  return mine ? "you: " + label : label;
}
function DkContactCardMsg({ card, mine, T, onNameCard }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onNameCard && onNameCard(card),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "10px 13px",
        minWidth: 220,
        maxWidth: 320,
        borderRadius: 12,
        border: "1px solid var(--line)",
        cursor: "pointer",
        textAlign: "left",
        background: mine ? "var(--bub-me)" : "var(--bub-them)"
      }
    },
    card.avatar ? /* @__PURE__ */ React.createElement(DkImgAvatar, { url: card.avatar, seed: card.userid || card.address || card.name, size: 40, radius: 10 }) : /* @__PURE__ */ React.createElement(DkEnsAvatar, { userid: card.userid || card.address, fallbackSeed: card.userid || card.address || card.name, size: 40, radius: 10 }),
    /* @__PURE__ */ React.createElement("span", { style: { minWidth: 0, display: "flex", flexDirection: "column", gap: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 13.5, fontWeight: 700, color: mine ? "#fff" : "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, card.name || card.ens || shortKey(card.userid || card.address, 8, 6)), card.ens && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: mine ? "rgba(255,255,255,0.8)" : "var(--accent)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, card.ens), card.description && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 11, color: mine ? "rgba(255,255,255,0.7)" : "var(--dim)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, card.description), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10, color: mine ? "rgba(255,255,255,0.6)" : "var(--faint)", marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 } }, T && T.nameCard || "name card", " \u203A"))
  );
}
function dkAddressFromHref(href) {
  try {
    const u = new URL(String(href || ""), window.location.href);
    const a = u.searchParams.get("address");
    if (a && a.trim())
      return a.trim();
    const h = u.hash || "";
    const qi = h.indexOf("?");
    if (qi >= 0) {
      const ha = new URLSearchParams(h.slice(qi + 1)).get("address");
      if (ha && ha.trim())
        return ha.trim();
    }
  } catch (e) {
  }
  return "";
}
function dkMarkdownHtml(src) {
  const lines = String(src == null ? "" : src).replace(/\r\n?/g, "\n").split("\n");
  let html = "";
  let i = 0;
  const isBlockStart = (line) => /^```/.test(line) || /^#{1,6}\s+/.test(line) || /^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line);
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (/^```/.test(line)) {
      const lang = line.replace(/^```/, "").trim().toLowerCase();
      i += 1;
      const code = [];
      while (i < lines.length && !/^```/.test(lines[i])) {
        code.push(lines[i]);
        i += 1;
      }
      if (i < lines.length)
        i += 1;
      if (lang === "beagle-contact")
        continue;
      html += "<pre><code>" + dkHtmlEscape(code.join("\n")) + "</code></pre>";
      continue;
    }
    const hm = /^(#{1,6})\s+(.+)$/.exec(line);
    if (hm) {
      const level = Math.min(6, hm[1].length);
      html += "<h" + level + ">" + dkInlineMarkdown(hm[2]) + "</h" + level + ">";
      i += 1;
      continue;
    }
    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      html += ordered ? "<ol>" : "<ul>";
      while (i < lines.length && (ordered ? /^\s*\d+\.\s+/.test(lines[i]) : /^\s*[-*]\s+/.test(lines[i]))) {
        html += "<li>" + dkInlineMarkdown(lines[i].replace(ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/, "")) + "</li>";
        i += 1;
      }
      html += ordered ? "</ol>" : "</ul>";
      continue;
    }
    const para = [line];
    i += 1;
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) {
      para.push(lines[i]);
      i += 1;
    }
    html += "<p>" + para.map(dkInlineMarkdown).join("<br>") + "</p>";
  }
  return html || dkHtmlEscape(src);
}
const DK_NATIVE_MEDIA_MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".heic": "image/heic",
  ".m4a": "audio/mp4",
  ".aac": "audio/aac",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".caf": "audio/x-caf",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v"
};
const DK_GROUP_TS_RE = /\n?\[(20\d{2}-\d{1,2}-\d{1,2}\s+\d{1,2}:\d{2}:\d{2})\]\s*$/;
function dkStripGroupTs(text) {
  const m = DK_GROUP_TS_RE.exec(text);
  return m ? { body: text.slice(0, m.index), ts: m[1] } : { body: text, ts: null };
}
function dkSplitGroupSender(text) {
  const m = /^([^:\n]{1,48}):\s([\s\S]+)$/.exec(text);
  return m ? { sender: m[1], body: m[2] } : null;
}
function dkParseCGP1(text) {
  const t = String(text || "").trim();
  if (!t.startsWith("CGP1 "))
    return null;
  let j = null;
  try {
    j = JSON.parse(t.slice(5));
  } catch (e) {
    return null;
  }
  if (!j || j.type !== "carrier_group_message" || j.chat_type !== "group")
    return null;
  const origin = j.origin || {};
  const senderId = origin.userid || origin.friendid || null;
  const sender = origin.nickname || origin.user_info && origin.user_info.name || (senderId ? senderId.slice(0, 10) : "member");
  const body = j.message && j.message.text || j.render && j.render.plain || "";
  return { sender, senderId, body: String(body), ts: null, strong: true };
}
function dkGroupParse(text) {
  const cgp = dkParseCGP1(text);
  if (cgp)
    return cgp;
  const t = String(text || "");
  const { body: noTs, ts } = dkStripGroupTs(t);
  const split = dkSplitGroupSender(noTs.trim());
  if (!split)
    return null;
  return { sender: split.sender, senderId: null, body: split.body.trim(), ts, strong: !!ts };
}
function DkGroupSender({ grp, T, avatar }) {
  const [open, setOpen] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [done, setDone] = React.useState(null);
  const [showProf, setShowProf] = React.useState(false);
  const seed = grp.senderId || grp.sender;
  const addFriend = () => {
    setBusy(true);
    fetch("/api/add", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ address: grp.senderId }) }).then((r) => r.json()).then((r) => setDone(r.ok ? T && T.addSent || "request sent" : r.error || "failed")).catch((e) => setDone(String(e && e.message || e))).finally(() => setBusy(false));
  };
  return /* @__PURE__ */ React.createElement("span", { style: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    margin: avatar ? 0 : "0 3px 2px",
    alignSelf: avatar ? "flex-start" : void 0
  } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((v) => !v),
      title: grp.sender,
      style: { display: "inline-flex", alignItems: "center", gap: 5, background: "none", border: "none", padding: 0, cursor: "pointer" }
    },
    avatar ? /* @__PURE__ */ React.createElement(DkEnsAvatar, { userid: grp.senderId, name: grp.sender, fallbackSeed: seed, size: 24, radius: 6 }) : /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--faint)" } }, grp.sender)
  ), open && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { onClick: () => setOpen(false), style: { position: "fixed", inset: 0, zIndex: 40 } }), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    left: 0,
    top: avatar ? 28 : 20,
    zIndex: 50,
    width: 240,
    padding: 12,
    borderRadius: 10,
    background: "var(--panel-2)",
    border: "1px solid var(--line)",
    boxShadow: "0 14px 40px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    gap: 8
  } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(DkEnsAvatar, { userid: grp.senderId, name: grp.sender, fallbackSeed: seed, size: 34, radius: 8 }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12.5, fontWeight: 700, color: "var(--text)", wordBreak: "break-all" } }, grp.sender)), grp.senderId ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Mono, { size: 10.5, dim: true, copy: grp.senderId, title: grp.senderId }, shortKey(grp.senderId, 12, 8)), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: addFriend,
      disabled: busy || !!done,
      style: {
        padding: "6px 10px",
        borderRadius: 8,
        border: "none",
        background: "var(--accent)",
        color: "#fff",
        fontFamily: "var(--ui)",
        fontSize: 12,
        cursor: busy || done ? "default" : "pointer",
        opacity: busy ? 0.6 : 1
      }
    },
    done || (T && T.add || "Add friend")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setOpen(false);
        setShowProf(true);
      },
      style: {
        padding: "6px 10px",
        borderRadius: 8,
        border: "1px solid var(--line)",
        background: "transparent",
        color: "var(--text)",
        fontFamily: "var(--ui)",
        fontSize: 12,
        cursor: "pointer"
      }
    },
    T && T.pubOpen || "View public profile"
  )) : /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--dim)", lineHeight: 1.45 } }, T && T.groupSenderUnknown || "The group relays only this display name. Register Beagle as a group agent (/agent add <beagle address> in the group) to receive full member identities you can add as friends."))), showProf && grp.senderId && /* @__PURE__ */ React.createElement(DkPublicProfile, { T, userid: grp.senderId, fallbackName: grp.sender, onClose: () => setShowProf(false) }));
}
function dkThreadIsGroup(thread) {
  return (thread || []).some((m) => !m.day && m.dir !== "out" && !m.file && (dkGroupParse(m.text) || {}).strong);
}
function dkNativeMediaFromText(text) {
  let body = dkStripGroupTs(String(text || "")).body.trim();
  if (body.length < 32)
    return null;
  let sender = null;
  if (!body.startsWith("{")) {
    const split = dkSplitGroupSender(body);
    if (!split || !split.body.startsWith("{"))
      return null;
    sender = split.sender;
    body = split.body.trim();
  }
  if (!body.startsWith("{") || !body.endsWith("}"))
    return null;
  let j = null;
  try {
    j = JSON.parse(body);
  } catch (e) {
    return null;
  }
  if (!j || typeof j !== "object" || typeof j.data !== "string" || j.data.length < 16)
    return null;
  const kind = j.type === "image" ? "image" : j.type === "audio" || j.type === "voice" ? "audio" : j.type === "video" ? "video" : null;
  if (!kind)
    return null;
  const ext = String(j.fileExtension || "").toLowerCase();
  const mime = DK_NATIVE_MEDIA_MIME[ext] || kind + "/*";
  const name = String(j.fileName || "file") + ext;
  return { sender, kind, name, url: "data:" + mime + ";base64," + j.data.replace(/\s+/g, "") };
}
function MarkdownText({ text, onNameCard }) {
  const onClick = (e) => {
    const a = e.target && e.target.closest && e.target.closest("a");
    if (!a)
      return;
    const addr = dkAddressFromHref(a.getAttribute("href") || "");
    if (!addr)
      return;
    e.preventDefault();
    e.stopPropagation();
    const card = dkParseBeagleContact(text) || { address: addr };
    if (!card.address)
      card.address = addr;
    if (onNameCard)
      onNameCard(card);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "dk-md", onClick, dangerouslySetInnerHTML: { __html: dkMarkdownHtml(text) } });
}
function DkChatForm({ form, submitted, peer, onSubmit }) {
  const items = form && form.components || [];
  const [vals, setVals] = React.useState(() => {
    const init = {};
    for (const c of items)
      if (c.type === "select" || c.type === "text")
        init[c.id] = c.default || "";
    return init;
  });
  const [files, setFiles] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const [step, setStep] = React.useState("");
  const [err, setErr] = React.useState("");
  if (submitted) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "10px 12px",
      borderRadius: 12,
      border: "1px solid var(--line)",
      background: "var(--bub-them)",
      opacity: 0.85,
      minWidth: 240
    } }, items.filter((c) => window.ChatComponents.INPUT_TYPES.has(c.type)).map((c) => {
      const raw = submitted.values && submitted.values[c.id] || "";
      const shown = raw && typeof raw === "object" ? raw.name : ((c.options || []).find((o) => o.value === raw) || {}).label || raw;
      return /* @__PURE__ */ React.createElement("div", { key: c.id, style: { display: "flex", gap: 8, fontFamily: "var(--mono)", fontSize: 12.5 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--faint)" } }, c.label || c.id), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text)", fontWeight: 600 } }, shown));
    }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 2, color: "var(--faint)", fontSize: 11.5, fontFamily: "var(--mono)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 12, stroke: 3, color: "var(--ok, #46d17f)" }), /* @__PURE__ */ React.createElement("span", null, "submitted")));
  }
  const attachments = items.filter((c) => c.type === "attachment");
  const missing = items.filter((c) => c.required && window.ChatComponents.INPUT_TYPES.has(c.type) && (c.type === "attachment" ? !files[c.id] : !vals[c.id]));
  const send = async (componentId) => {
    if (missing.length) {
      setErr("Fill in: " + missing.map((c) => c.label || c.id).join(", "));
      return;
    }
    setBusy(true);
    setErr("");
    try {
      const CC = window.ChatComponents;
      const answers = { ...vals };
      for (const c of attachments) {
        const f = files[c.id];
        if (!f)
          continue;
        setStep("Sending " + f.name + "\u2026");
        const up = await dkApi.sendFile(peer.userId || peer.id, f);
        if (!up || !up.ok) {
          setErr(up && up.error || "file send failed");
          setBusy(false);
          setStep("");
          return;
        }
        if (!up.fileId) {
          setErr("This peer received the file inline, which carries no file id \u2014 send it as a normal message instead.");
          setBusy(false);
          setStep("");
          return;
        }
        answers[c.id] = { fileId: up.fileId, name: up.name || f.name, size: up.size != null ? up.size : f.size };
      }
      setStep("");
      const text = CC.encodeInteraction(CC.buildInteraction(form.custom_id, componentId, answers));
      const r = await dkApi.send(peer.userId || peer.id, text);
      if (!r.ok) {
        setErr(r.error || "submit failed");
        setBusy(false);
        return;
      }
      if (onSubmit)
        onSubmit();
    } catch (e) {
      setErr(String(e && e.message || e));
      setBusy(false);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: "12px 13px",
    borderRadius: 12,
    border: "1px solid var(--line)",
    background: "var(--bub-them)",
    minWidth: 260
  } }, items.map((c) => {
    if (c.type === "select") {
      return /* @__PURE__ */ React.createElement("label", { key: c.id, style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, c.label || c.id, c.required ? " *" : ""), /* @__PURE__ */ React.createElement(
        "select",
        {
          value: vals[c.id] || "",
          disabled: busy,
          onChange: (e) => setVals((v) => ({ ...v, [c.id]: e.target.value })),
          style: {
            fontFamily: "var(--mono)",
            fontSize: 13,
            padding: "7px 8px",
            borderRadius: 8,
            border: "1px solid var(--line)",
            background: "var(--panel)",
            color: "var(--text)"
          }
        },
        /* @__PURE__ */ React.createElement("option", { value: "" }, c.placeholder || "\u2014"),
        (c.options || []).map((o) => /* @__PURE__ */ React.createElement("option", { key: o.value, value: o.value }, o.label))
      ));
    }
    if (c.type === "text") {
      return /* @__PURE__ */ React.createElement("label", { key: c.id, style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, c.label || c.id, c.required ? " *" : ""), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "text",
          value: vals[c.id] || "",
          disabled: busy,
          placeholder: c.placeholder || "",
          onChange: (e) => setVals((v) => ({ ...v, [c.id]: e.target.value })),
          style: {
            fontFamily: "var(--mono)",
            fontSize: 13,
            padding: "7px 8px",
            borderRadius: 8,
            border: "1px solid var(--line)",
            background: "var(--panel)",
            color: "var(--text)"
          }
        }
      ));
    }
    if (c.type === "attachment") {
      const picked = files[c.id];
      const tooBig = picked && c.max_bytes && picked.size > c.max_bytes;
      return /* @__PURE__ */ React.createElement("label", { key: c.id, style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, c.label || c.id, c.required ? " *" : ""), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "file",
          disabled: busy,
          accept: (c.accept || []).join(",") || void 0,
          onChange: (e) => setFiles((f) => ({ ...f, [c.id]: e.target.files && e.target.files[0] })),
          style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--text)" }
        }
      ), picked && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: tooBig ? "#f59e0b" : "var(--faint)" } }, dkFileSize(picked.size), tooBig ? " \u2014 larger than this form asked for" : ""));
    }
    if (c.type === "submit") {
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: c.id,
          onClick: () => send(c.id),
          disabled: busy,
          style: {
            marginTop: 2,
            padding: "8px 14px",
            borderRadius: 10,
            border: "none",
            cursor: busy ? "default" : "pointer",
            background: "var(--accent)",
            color: "#fff",
            fontFamily: "var(--mono)",
            fontSize: 13,
            fontWeight: 700,
            opacity: busy ? 0.6 : 1
          }
        },
        busy ? step || "\u2026" : c.label || "Submit"
      );
    }
    return null;
  }), err && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--danger, #ff6b6b)", fontSize: 11.5, fontFamily: "var(--mono)" } }, err));
}
function Msg({ m, peer, T, onTheater, onDelete, onCancel, onRetry, onReveal, onOpenFile, onCall, onFormSubmit, onNameCard, answered, selMode, selected, onToggleSel, busy, isGroup }) {
  const mine = m.from === "me";
  const nativeMedia = !m.file ? dkNativeMediaFromText(m.text) : null;
  const grp = isGroup && m.dir !== "out" && !m.file && !nativeMedia ? dkGroupParse(m.text) : null;
  const grpSender = grp || (nativeMedia && nativeMedia.sender ? { sender: nativeMedia.sender, senderId: null } : null);
  const read = window.ChatComponents ? window.ChatComponents.readMessage((grp ? grp.body : m.text) || "") : { text: grp ? grp.body : m.text, form: null, interaction: null };
  const submitted = read.form && answered ? answered.get(read.form.custom_id) : null;
  const rtcFile = !mine && !m.file ? dkRtcFileFromText(peer.userId || peer.id, m.text) : null;
  const callRec = !m.file ? dkCallFromText(m.text) : null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: selMode ? () => onToggleSel(m.id) : void 0,
      style: {
        display: "flex",
        justifyContent: mine ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        gap: 8,
        margin: "3px 0",
        cursor: selMode ? "pointer" : "default",
        borderRadius: 8,
        background: selMode && selected ? "rgba(91,140,255,0.12)" : "transparent",
        padding: selMode ? "2px 4px" : 0
      }
    },
    selMode && /* @__PURE__ */ React.createElement("div", { style: {
      alignSelf: "center",
      width: 18,
      height: 18,
      borderRadius: 5,
      flexShrink: 0,
      border: "1.5px solid " + (selected ? "var(--accent)" : "var(--line)"),
      background: selected ? "var(--accent)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, selected && /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 12, stroke: 3, color: "#fff" })),
    !mine && (grpSender ? /* @__PURE__ */ React.createElement(DkGroupSender, { grp: grpSender, T, avatar: true }) : /* @__PURE__ */ React.createElement(DkAvatar, { peer, size: 24, radius: 6, dot: false })),
    /* @__PURE__ */ React.createElement("div", { style: { maxWidth: m.file && (m.file.media === "image" || m.file.media === "video") || rtcFile && (rtcFile.media === "image" || rtcFile.media === "video") ? "min(680px, 88%)" : "75%", display: "flex", flexDirection: "column", alignItems: mine ? "flex-end" : "flex-start" } }, callRec ? /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => onCall && onCall(peer.userId, callRec.kind === "video"),
        style: { display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 12, border: "1px solid var(--line)", background: mine ? "var(--bub-me)" : "var(--bub-them)", color: mine ? "#fff" : "var(--text)", cursor: "pointer", fontFamily: "var(--mono)", fontSize: 12.5 }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: callRec.kind === "video" ? "video" : "phone", size: 17, stroke: 2, color: mine ? "#fff" : "var(--accent)" }),
      /* @__PURE__ */ React.createElement("span", null, callRec.direction === "incoming" ? "Incoming" : "Outgoing", " ", callRec.kind, " call"),
      /* @__PURE__ */ React.createElement("span", { style: { color: mine ? "rgba(255,255,255,0.75)" : "var(--faint)" } }, "\xB7 redial")
    ) : rtcFile ? /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      maxWidth: rtcFile.media === "image" || rtcFile.media === "video" ? "100%" : 300,
      width: rtcFile.media === "image" || rtcFile.media === "video" ? "100%" : void 0,
      background: "var(--bub-them)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 6
    } }, (rtcFile.media === "image" || rtcFile.media === "video") && /* @__PURE__ */ React.createElement("div", { "data-media": true, style: { position: "relative", lineHeight: 0 } }, rtcFile.media === "image" ? /* @__PURE__ */ React.createElement(
      "img",
      {
        src: rtcFile.url,
        alt: rtcFile.name,
        onError: (e) => {
          const w = e.currentTarget.closest("[data-media]");
          if (w)
            w.style.display = "none";
        },
        style: { display: "block", width: "100%", maxHeight: "72vh", borderRadius: 8, objectFit: "contain" }
      }
    ) : /* @__PURE__ */ React.createElement(
      "video",
      {
        src: rtcFile.url,
        controls: true,
        preload: "metadata",
        onError: (e) => {
          const w = e.currentTarget.closest("[data-media]");
          if (w)
            w.style.display = "none";
        },
        style: { display: "block", width: "100%", maxHeight: "72vh", borderRadius: 8, objectFit: "contain", background: "#000" }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 8, right: 8, display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => onTheater({ kind: rtcFile.media, url: rtcFile.url, name: rtcFile.name }),
        title: "theater / \u7F51\u9875\u5168\u5C4F",
        style: mediaBtnStyle
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "theater", size: 16, stroke: 2, color: "#fff" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: (e) => {
          const w = e.currentTarget.closest("[data-media]");
          const el = w && w.querySelector("video,img");
          if (el && el.requestFullscreen)
            el.requestFullscreen();
        },
        title: "fullscreen / \u5168\u5C4F",
        style: mediaBtnStyle
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "maximize", size: 16, stroke: 2, color: "#fff" })
    ))), rtcFile.media === "audio" && /* @__PURE__ */ React.createElement("audio", { src: rtcFile.url, controls: true, style: { width: "100%" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "0 2px" } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, rtcFile.name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)", flexShrink: 0 } }, dkFileSize(rtcFile.size)), /* @__PURE__ */ React.createElement("a", { href: rtcFile.url, download: rtcFile.name, title: "download", style: { display: "inline-flex", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 15, stroke: 2, color: "var(--accent)" })))) : m.file ? (
      // Inline preview/player. Received media: as soon as it's saved.
      // Sent media: once it's fully delivered ('sent') — the daemon keeps a
      // local copy so it plays on the sender's side too.
      (m.file.media === "image" || m.file.media === "video" || m.file.media === "audio") && (mine ? m.file.status === "sent" : m.file.status !== "sending" && m.file.status !== "failed" && m.file.status !== "queued" && m.file.status !== "cancelled") ? (
        // Received media → inline preview / player, with name, size, download.
        /* @__PURE__ */ React.createElement("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 6,
          maxWidth: m.file.media === "image" || m.file.media === "video" ? "100%" : 300,
          width: m.file.media === "image" || m.file.media === "video" ? "100%" : void 0,
          background: "var(--bub-them)",
          border: "1px solid var(--line)",
          borderRadius: 12,
          padding: 6
        } }, (m.file.media === "image" || m.file.media === "video") && /* @__PURE__ */ React.createElement("div", { "data-media": true, style: { position: "relative", lineHeight: 0 } }, m.file.media === "image" ? /* @__PURE__ */ React.createElement(
          "img",
          {
            src: dkFileUrl(m.file.name),
            alt: m.file.name,
            onError: (e) => {
              const w = e.currentTarget.closest("[data-media]");
              if (w)
                w.style.display = "none";
            },
            style: { display: "block", width: "100%", maxHeight: "72vh", borderRadius: 8, objectFit: "contain" }
          }
        ) : /* @__PURE__ */ React.createElement(
          "video",
          {
            src: dkFileUrl(m.file.name),
            controls: true,
            preload: "metadata",
            onError: (e) => {
              const w = e.currentTarget.closest("[data-media]");
              if (w)
                w.style.display = "none";
            },
            style: { display: "block", width: "100%", maxHeight: "72vh", borderRadius: 8, objectFit: "contain", background: "#000" }
          }
        ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 8, right: 8, display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => onTheater({ kind: m.file.media, url: dkFileUrl(m.file.name), name: m.file.name }),
            title: "theater / \u7F51\u9875\u5168\u5C4F",
            style: mediaBtnStyle
          },
          /* @__PURE__ */ React.createElement(Icon, { name: "theater", size: 16, stroke: 2, color: "#fff" })
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: (e) => {
              const w = e.currentTarget.closest("[data-media]");
              const el = w && w.querySelector("video,img");
              if (el && el.requestFullscreen)
                el.requestFullscreen();
            },
            title: "fullscreen / \u5168\u5C4F",
            style: mediaBtnStyle
          },
          /* @__PURE__ */ React.createElement(Icon, { name: "maximize", size: 16, stroke: 2, color: "#fff" })
        ))), m.file.media === "audio" && /* @__PURE__ */ React.createElement("audio", { src: dkFileUrl(m.file.name), controls: true, style: { width: "100%" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "0 2px" } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, m.file.name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)", flexShrink: 0 } }, m.file.size), onReveal && /* @__PURE__ */ React.createElement(
          "button",
          {
            title: T.revealInFinder || "\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u663E\u793A / Show in file manager",
            onClick: (e) => {
              e.stopPropagation();
              onReveal(m.file.name);
            },
            style: { background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", flexShrink: 0 }
          },
          /* @__PURE__ */ React.createElement(Icon, { name: "folderOpen", size: 15, stroke: 2, color: "var(--accent)" })
        ), /* @__PURE__ */ React.createElement("a", { href: dkFileDownloadUrl(m.file.name), download: m.file.name, title: "download", style: { display: "inline-flex", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 15, stroke: 2, color: "var(--accent)" }))))
      ) : (() => {
        const cardStyle = {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          borderRadius: 10,
          background: mine ? "var(--bub-me)" : "var(--bub-them)",
          border: "1px solid " + (mine ? "transparent" : "var(--line)"),
          minWidth: 200,
          textDecoration: "none",
          cursor: mine ? "default" : "pointer"
        };
        const icon = /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 7, flexShrink: 0, background: mine ? "rgba(255,255,255,0.16)" : "var(--chip)", display: "flex", alignItems: "center", justifyContent: "center", color: mine ? "#fff" : "var(--accent)" } }, /* @__PURE__ */ React.createElement(Icon, { name: m.file.media === "image" ? "image" : m.file.media === "video" ? "video" : m.file.media === "audio" ? "play" : "file", size: 18, stroke: 1.9 }));
        const meta = /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0, flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 12.5, fontWeight: 600, color: mine ? "#fff" : "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, m.file.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11, color: mine ? "rgba(255,255,255,0.7)" : "var(--faint)", marginTop: 1 } }, busy === "cancel" ? `${m.file.size} \xB7 ${T.cancelling || "Cancelling\u2026"}` : busy === "retry" ? `${m.file.size} \xB7 ${T.retrying || "Retrying\u2026"}` : m.file.status === "queued" ? `${m.file.size} \xB7 ${T.queued || "queued"}` : m.file.status === "sending" ? `${m.file.size} \xB7 ${dkPct(m.file.pct)}${m.file.kbps ? " \xB7 " + dkSpeed(m.file.kbps) : ""}` : m.file.status === "failed" ? `${m.file.size} \xB7 failed` : m.file.status === "cancelled" ? `${m.file.size} \xB7 ${T.cancelled || "cancelled"}` : mine ? `${m.file.size} \xB7 sent` : `${m.file.size} \xB7 ${T.open || "open"}`));
        if (mine) {
          const btnBusy = !!busy;
          return /* @__PURE__ */ React.createElement(
            "div",
            {
              style: { ...cardStyle, cursor: "pointer", opacity: btnBusy ? 0.85 : 1 },
              title: T.open || "open",
              onClick: () => onOpenFile ? onOpenFile(m.file.name) : window.open(dkFileUrl(m.file.name), "_blank", "noopener")
            },
            icon,
            meta,
            onReveal && /* @__PURE__ */ React.createElement(
              "button",
              {
                title: T.revealInFinder || "\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u663E\u793A / Show in file manager",
                onClick: (e) => {
                  e.stopPropagation();
                  onReveal(m.file.name);
                },
                style: { background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", flexShrink: 0 }
              },
              /* @__PURE__ */ React.createElement(Icon, { name: "folderOpen", size: 15, stroke: 2, color: "rgba(255,255,255,0.85)" })
            ),
            /* @__PURE__ */ React.createElement(
              "a",
              {
                href: dkFileDownloadUrl(m.file.name),
                download: m.file.name,
                title: "download",
                onClick: (e) => e.stopPropagation(),
                style: { display: "inline-flex", flexShrink: 0 }
              },
              /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 15, stroke: 2, color: "rgba(255,255,255,0.85)" })
            ),
            busy === "cancel" || busy === "retry" ? /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 16, stroke: 2, color: "rgba(255,255,255,0.85)" }) : m.file.status === "queued" ? /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 16, stroke: 2, color: "rgba(255,255,255,0.85)" }) : m.file.status === "sending" ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap" } }, dkPct(m.file.pct), m.file.kbps ? " \xB7 " + dkSpeed(m.file.kbps) : "") : m.file.status === "failed" || m.file.status === "cancelled" ? /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 16, stroke: 2.4, color: "rgba(255,200,190,0.95)" }) : /* @__PURE__ */ React.createElement(Icon, { name: "checkCheck", size: 16, stroke: 2, color: "rgba(255,255,255,0.85)" }),
            (m.file.status === "sending" || m.file.status === "queued" || busy === "cancel") && m.id && /* @__PURE__ */ React.createElement(
              "button",
              {
                title: T.cancel || "cancel",
                disabled: btnBusy,
                onClick: (e) => {
                  e.stopPropagation();
                  if (!btnBusy)
                    onCancel(m.id);
                },
                style: { background: "rgba(255,255,255,0.16)", border: "none", borderRadius: 6, cursor: btnBusy ? "wait" : "pointer", padding: 3, marginLeft: 2, display: "inline-flex", flexShrink: 0, opacity: btnBusy ? 0.5 : 1 }
              },
              /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 13, stroke: 2.4, color: "#fff" })
            ),
            m.file.status !== "sent" && m.id && /* @__PURE__ */ React.createElement(
              "button",
              {
                title: T.retry || "retry",
                disabled: btnBusy,
                onClick: (e) => {
                  e.stopPropagation();
                  if (!btnBusy)
                    onRetry(m.id);
                },
                style: { background: "rgba(255,255,255,0.16)", border: "none", borderRadius: 6, cursor: btnBusy ? "wait" : "pointer", padding: 3, marginLeft: 2, display: "inline-flex", flexShrink: 0, opacity: btnBusy ? 0.5 : 1 }
              },
              /* @__PURE__ */ React.createElement(Icon, { name: "refresh", size: 13, stroke: 2.2, color: "#fff" })
            )
          );
        }
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            style: cardStyle,
            title: "open",
            onClick: () => onOpenFile ? onOpenFile(m.file.name) : window.open(dkFileUrl(m.file.name), "_blank", "noopener")
          },
          icon,
          meta,
          onReveal && /* @__PURE__ */ React.createElement(
            "button",
            {
              title: T.revealInFinder || "\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u663E\u793A / Show in file manager",
              onClick: (e) => {
                e.stopPropagation();
                onReveal(m.file.name);
              },
              style: { background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", flexShrink: 0 }
            },
            /* @__PURE__ */ React.createElement(Icon, { name: "folderOpen", size: 16, stroke: 2, color: "var(--accent)" })
          ),
          /* @__PURE__ */ React.createElement(
            "a",
            {
              href: dkFileDownloadUrl(m.file.name),
              download: m.file.name,
              title: "download",
              onClick: (e) => e.stopPropagation(),
              style: { display: "inline-flex", flexShrink: 0 }
            },
            /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 16, stroke: 2, color: "var(--accent)" })
          )
        );
      })()
    ) : nativeMedia ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, maxWidth: "min(420px, 88%)" } }, nativeMedia.sender && /* @__PURE__ */ React.createElement(DkGroupSender, { grp: { sender: nativeMedia.sender, senderId: null }, T }), nativeMedia.kind === "image" ? /* @__PURE__ */ React.createElement(
      "img",
      {
        src: nativeMedia.url,
        alt: nativeMedia.name,
        style: { maxWidth: "100%", borderRadius: 12, border: "1px solid var(--line)", cursor: "pointer" },
        onClick: () => {
          try {
            const w = window.open();
            if (w)
              w.document.write('<img src="' + nativeMedia.url + '" style="max-width:100%">');
          } catch (e) {
          }
        }
      }
    ) : nativeMedia.kind === "audio" ? /* @__PURE__ */ React.createElement("audio", { controls: true, src: nativeMedia.url, style: { maxWidth: "100%" } }) : /* @__PURE__ */ React.createElement("video", { controls: true, src: nativeMedia.url, style: { maxWidth: "100%", borderRadius: 12, border: "1px solid var(--line)" } })) : (() => {
      const contact = !read.form ? dkParseBeagleContact(read.text) : null;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, grp && /* @__PURE__ */ React.createElement(DkGroupSender, { grp, T }), contact && (contact.address || contact.userid) ? /* @__PURE__ */ React.createElement(DkContactCardMsg, { card: contact, mine, T, onNameCard }) : /* @__PURE__ */ React.createElement("div", { style: {
        padding: "8px 12px",
        borderRadius: 12,
        borderBottomRightRadius: mine ? 4 : 12,
        borderBottomLeftRadius: mine ? 12 : 4,
        // Incoming messages are tinted by delivery path so the split is
        // visible: amber = arrived via the express relay (offline), plain =
        // live online session. Outgoing keep the accent bubble.
        background: mine ? "var(--bub-me)" : m.via === "offline" ? "rgba(245,158,11,0.16)" : "var(--bub-them)",
        color: mine ? "#fff" : "var(--text)",
        border: "1px solid " + (mine ? "transparent" : m.via === "offline" ? "rgba(245,158,11,0.55)" : "var(--line)"),
        fontFamily: "var(--ui)",
        fontSize: 13.5,
        lineHeight: 1.4,
        letterSpacing: -0.1,
        wordBreak: "break-word"
      } }, /* @__PURE__ */ React.createElement(MarkdownText, { text: read.text, onNameCard })));
    })(), read.form && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ React.createElement(DkChatForm, { form: read.form, submitted, peer, onSubmit: onFormSubmit })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4, margin: "3px 3px 0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "var(--faint)" } }, m.time), !mine && m.via && /* @__PURE__ */ React.createElement(
      "span",
      {
        title: m.via === "offline" ? "delivered via express relay (offline)" : "delivered over a live session (online)",
        style: { fontFamily: "var(--mono)", fontSize: 9, color: m.via === "offline" ? "#f59e0b" : "var(--faint)" }
      },
      m.via === "offline" ? "\u79BB\u7EBF" : "\u5728\u7EBF"
    ), !selMode && m.id && /* @__PURE__ */ React.createElement(
      "button",
      {
        title: T.delete || "delete",
        onClick: (e) => {
          e.stopPropagation();
          onDelete(m.id);
        },
        style: { background: "none", border: "none", cursor: "pointer", padding: 0, marginLeft: 2, display: "inline-flex", opacity: 0.55 }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", size: 11, stroke: 2, color: "var(--faint)" })
    ), mine && (m.status === "queued" || m.status === "sending") ? /* @__PURE__ */ React.createElement(
      "span",
      {
        style: { display: "inline-flex", alignItems: "center", gap: 2 },
        title: m.status === "sending" ? "delivering\u2026" : "waiting for peer \u2014 will send when they're online"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 11, stroke: 2.2, color: "var(--faint)" }),
      /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10, color: "var(--faint)" } }, m.status === "sending" ? T.sendingMsg || "sending" : T.queued || "queued")
    ) : mine && m.status && /* @__PURE__ */ React.createElement(Icon, { name: "checkCheck", size: 12, stroke: 2.2, color: m.status === "read" ? "var(--accent)" : "var(--faint)" })))
  );
}
function Conversation({ T, peer, lang, peers, onOpenChat, thread: threadProp, onSend, onSendFile, onSendRtcFile, onAlias, onRemove, onOpenNet, onCall, onReloadThread }) {
  const scrollRef = React.useRef(null);
  const isGroup = React.useMemo(() => dkThreadIsGroup(threadProp), [threadProp]);
  const followScrollRef = React.useRef(true);
  const fileRef = React.useRef(null);
  const rtcFileRef = React.useRef(null);
  const [menu, setMenu] = React.useState(false);
  const [pubProfile, setPubProfile] = React.useState(false);
  const [nameCardProf, setNameCardProf] = React.useState(null);
  const [selMode, setSelMode] = React.useState(false);
  const [sel, setSel] = React.useState(() => /* @__PURE__ */ new Set());
  const [hidden, setHidden] = React.useState(() => /* @__PURE__ */ new Set());
  const [fileBusy, setFileBusy] = React.useState(() => ({}));
  const [filePatch, setFilePatch] = React.useState(() => ({}));
  const [flash, setFlash] = React.useState(null);
  const flashTimer = React.useRef(null);
  const showFlash = (kind, msg) => {
    if (flashTimer.current)
      clearTimeout(flashTimer.current);
    setFlash({ kind, msg });
    flashTimer.current = setTimeout(() => setFlash(null), 2500);
  };
  React.useEffect(() => () => {
    if (flashTimer.current)
      clearTimeout(flashTimer.current);
  }, []);
  React.useEffect(() => {
    setSelMode(false);
    setSel(/* @__PURE__ */ new Set());
    setHidden(/* @__PURE__ */ new Set());
    setFileBusy({});
    setFilePatch({});
    setFlash(null);
    followScrollRef.current = true;
  }, [peer.id]);
  React.useEffect(() => {
    setFilePatch((p) => {
      let changed = false;
      const next = { ...p };
      for (const m of threadProp || []) {
        if (!m || !m.id || !next[m.id] || !m.file)
          continue;
        if (m.file.status === next[m.id].status) {
          delete next[m.id];
          changed = true;
        }
      }
      return changed ? next : p;
    });
  }, [threadProp]);
  const baseThread = threadProp && threadProp.length ? threadProp : [{ day: "Today" }, { from: "them", time: "\u2014", text: lang === "zh" ? "\u6682\u65E0\u6D88\u606F\u8BB0\u5F55\uFF0C\u53D1\u4E2A\u6D88\u606F\u6253\u4E2A\u62DB\u547C\u5427\u3002" : "No messages yet. Say hi." }];
  const thread = React.useMemo(() => {
    if (!Object.keys(filePatch).length)
      return baseThread;
    return baseThread.map((m) => {
      if (!m || !m.id || !m.file || !filePatch[m.id])
        return m;
      return { ...m, file: { ...m.file, ...filePatch[m.id] } };
    });
  }, [baseThread, filePatch]);
  const answered = React.useMemo(() => {
    if (!window.ChatComponents)
      return /* @__PURE__ */ new Map();
    return window.ChatComponents.answers(
      thread.filter((m) => m.from === "me").map((m) => m.text || "")
    );
  }, [thread]);
  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el)
      el.scrollTop = el.scrollHeight;
  };
  const updateFollowScroll = () => {
    const el = scrollRef.current;
    if (!el)
      return;
    followScrollRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  };
  React.useLayoutEffect(() => {
    if (followScrollRef.current)
      scrollToBottom();
  }, [peer.id, thread]);
  const toggleSel = (id) => setSel((s) => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const clearBusy = (id) => setFileBusy((b) => {
    const n = { ...b };
    delete n[id];
    return n;
  });
  const doReveal = (name) => {
    if (!name)
      return;
    dkApi.revealFile(name).then((r) => {
      if (!r || r.ok === false) {
        const missing = /not found/i.test(r && r.error || "");
        showFlash("err", missing ? lang === "zh" ? "\u672C\u5730\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\u7684\u526F\u672C(\u5B83\u662F\u65E7\u7248\u672C\u53D1\u9001\u7684,\u5F53\u65F6\u53D1\u5B8C\u5373\u5220;\u65B0\u53D1\u9001\u7684\u6587\u4EF6\u90FD\u4F1A\u4FDD\u7559)" : "No local copy of this file \u2014 it was sent by an older version that did not keep sent copies. Files sent from now on are kept." : (lang === "zh" ? "\u65E0\u6CD5\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u663E\u793A: " : "Could not reveal file: ") + (r && r.error || ""));
      }
    });
  };
  const doOpenFile = (name) => {
    if (!name)
      return;
    fetch(dkFileDownloadUrl(name), { method: "GET", headers: { range: "bytes=0-0" } }).then((r) => {
      if (r.ok || r.status === 206)
        window.open(dkFileUrl(name), "_blank", "noopener");
      else
        showFlash("err", lang === "zh" ? "\u672C\u5730\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\u7684\u526F\u672C(\u65E7\u7248\u672C\u53D1\u9001\u7684\u6587\u4EF6\u672A\u4FDD\u7559;\u65B0\u53D1\u9001\u7684\u90FD\u4F1A\u4FDD\u7559)" : "No local copy \u2014 sent before local copies were kept.");
    }).catch(() => showFlash("err", lang === "zh" ? "\u6253\u5F00\u5931\u8D25" : "Could not open the file"));
  };
  const doCancel = (id) => {
    if (!id || fileBusy[id])
      return;
    setFileBusy((b) => ({ ...b, [id]: "cancel" }));
    showFlash("ok", T.cancelling || "Cancelling\u2026");
    dkApi.cancelSend(peer.userId, [id]).then((r) => {
      if (!r || r.ok === false) {
        const msg = (T.cancelFailed || "Cancel failed") + ": " + (r && r.error || "daemon unavailable");
        showFlash("err", msg);
        window.alert(msg);
      } else if (!r.cancelled) {
        const msg = T.cancelMissing || "No active transfer was found. Refresh and try again.";
        showFlash("err", msg);
        window.alert(msg);
      } else {
        setFilePatch((p) => ({ ...p, [id]: { status: "cancelled", pct: void 0, kbps: void 0 } }));
        showFlash("ok", T.cancelled || "Transfer cancelled");
        if (onReloadThread)
          onReloadThread();
      }
    }).catch((e) => {
      const msg = (T.cancelFailed || "Cancel failed") + ": " + String(e);
      showFlash("err", msg);
      window.alert(msg);
    }).finally(() => clearBusy(id));
  };
  const doRetry = (id) => {
    if (!id || fileBusy[id])
      return;
    setFileBusy((b) => ({ ...b, [id]: "retry" }));
    setFilePatch((p) => ({ ...p, [id]: { status: "sending", pct: 0, kbps: void 0 } }));
    showFlash("ok", T.retrying || "Retrying\u2026");
    dkApi.retrySend(peer.userId, [id]).then((r) => {
      if (r && r.ok === false) {
        setFilePatch((p) => {
          const n = { ...p };
          delete n[id];
          return n;
        });
        const msg = (T.retryFailed || "Retry failed") + ": " + (r.error || "");
        showFlash("err", msg);
        window.alert(msg);
      } else if (!r || !r.retried) {
        setFilePatch((p) => {
          const n = { ...p };
          delete n[id];
          return n;
        });
        const msg = T.retryMissing || "No retryable transfer or original file is unavailable.";
        showFlash("err", msg);
        window.alert(msg);
      } else {
        showFlash("ok", T.retried || "Transfer restarted");
        if (onReloadThread)
          onReloadThread();
      }
    }).catch((e) => {
      setFilePatch((p) => {
        const n = { ...p };
        delete n[id];
        return n;
      });
      const msg = (T.retryFailed || "Retry failed") + ": " + String(e);
      showFlash("err", msg);
      window.alert(msg);
    }).finally(() => clearBusy(id));
  };
  const doDelete = (ids) => {
    ids = ids.filter(Boolean);
    if (!ids.length)
      return;
    if (!window.confirm(ids.length === 1 ? T.delete1 || "Delete this message and its file?" : (T.deleteN || "Delete {n} selected?").replace("{n}", ids.length)))
      return;
    setHidden((h) => {
      const n = new Set(h);
      ids.forEach((i) => n.add(i));
      return n;
    });
    dkApi.delFiles(peer.userId, ids).catch(() => {
    });
    setSel(/* @__PURE__ */ new Set());
    setSelMode(false);
  };
  const [draft, setDraft] = React.useState("");
  const [dragOver, setDragOver] = React.useState(false);
  const [sending, setSending] = React.useState(null);
  const [theater, setTheater] = React.useState(null);
  React.useEffect(() => {
    setDraft("");
  }, [peer.id]);
  React.useEffect(() => {
    setTheater(null);
  }, [peer.id]);
  React.useEffect(() => {
    if (!theater)
      return;
    const onKey = (e) => {
      if (e.key === "Escape")
        setTheater(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [theater]);
  const sendDraft = () => {
    if (draft.trim()) {
      followScrollRef.current = true;
      onSend(draft);
      setDraft("");
      requestAnimationFrame(scrollToBottom);
    }
  };
  const sendFiles = (files, mode) => {
    const sender = mode === "webrtc" ? onSendRtcFile : onSendFile;
    if (!files || !files.length || !sender)
      return;
    const file = files[0];
    followScrollRef.current = true;
    setSending({ name: file.name, via: mode, pct: 0, sent: 0, size: file.size });
    const onProgress = (p) => setSending((s) => s && s.name === file.name ? {
      ...s,
      pct: p && p.pct,
      sent: p && p.sent,
      size: p && p.size || s.size,
      kbps: p && p.kbps
    } : s);
    Promise.resolve(sender(file, onProgress)).then((r) => {
      if (r && r.ok === false)
        window.alert((lang === "zh" ? "\u53D1\u9001\u5931\u8D25: " : "Send failed: ") + (r.error || ""));
      else
        showFlash("ok", mode === "webrtc" ? lang === "zh" ? "WebRTC \u6587\u4EF6\u53D1\u9001\u5B8C\u6210" : "WebRTC file sent" : lang === "zh" ? "\u6587\u4EF6\u5DF2\u63D0\u4EA4\u53D1\u9001" : "File send started");
    }).finally(() => {
      setSending(null);
      requestAnimationFrame(scrollToBottom);
    });
  };
  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    sendFiles(e.dataTransfer.files);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", background: "var(--bg)", position: "relative" },
      onDragOver: (e) => {
        e.preventDefault();
        if (!dragOver)
          setDragOver(true);
      },
      onDragLeave: (e) => {
        if (e.currentTarget === e.target)
          setDragOver(false);
      },
      onDrop
    },
    dragOver && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, zIndex: 30, background: "rgba(91,140,255,0.10)", border: "2px dashed var(--accent)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", fontFamily: "var(--mono)", fontSize: 14, color: "var(--accent)" } }, lang === "zh" ? "\u677E\u5F00\u53D1\u9001\u6587\u4EF6" : "Drop to send file"),
    /* @__PURE__ */ React.createElement("div", { style: { height: 60, flexShrink: 0, borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 12, padding: "0 16px", background: "var(--panel)" } }, /* @__PURE__ */ React.createElement("div", { onClick: () => setPubProfile(true), title: T && T.pubOpen || "View public profile", style: { cursor: "pointer", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(DkAvatar, { peer, size: 34, radius: 8 })), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { onClick: () => setPubProfile(true), style: { fontFamily: peer.alias ? "var(--ui)" : "var(--mono)", fontSize: 15, fontWeight: 700, color: "var(--text)", cursor: "pointer" } }, peer.alias || shortKey(peer.userId, 10, 6)), peer.agent && /* @__PURE__ */ React.createElement(Tag, { tone: "accent" }, "agent"), isGroup && /* @__PURE__ */ React.createElement(Tag, null, T && T.groupTag || "group"), /* @__PURE__ */ React.createElement(RouteTag, { peer })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 2 } }, /* @__PURE__ */ React.createElement(Mono, { size: 11.5, dim: true, copy: peer.userId, title: peer.userId }, shortKey(peer.userId, 10, 6)), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--line)" } }, "\xB7"), /* @__PURE__ */ React.createElement("button", { onClick: () => onOpenNet(peer), title: T && T.openNet || "Network view", style: { background: "none", border: "none", cursor: "pointer", padding: 0, color: "var(--accent)", display: "inline-flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: "network", size: 12, stroke: 2 })), /* @__PURE__ */ React.createElement(Mono, { size: 11.5, dim: true, copy: peer.ip, title: peer.ip }, peer.ip), peer.address && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--line)" } }, "\xB7"), /* @__PURE__ */ React.createElement(
      Mono,
      {
        size: 11.5,
        dim: true,
        icon: "share",
        copy: peer.address,
        title: `${T && T.copyAddr || "Copy address \u2014 share it so someone else can add this friend"}
${peer.address}`
      },
      shortKey(peer.address, 8, 6)
    )))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), onCall && /* @__PURE__ */ React.createElement(Btn, { icon: "phone", title: T && T.audioCall || "Audio call", onClick: () => onCall(peer.userId, false) }), onCall && /* @__PURE__ */ React.createElement(Btn, { icon: "video", title: T && T.videoCall || "Video call", onClick: () => onCall(peer.userId, true) }), onSendRtcFile && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: rtcFileRef,
        type: "file",
        style: { display: "none" },
        onChange: (e) => {
          sendFiles(e.target.files, "webrtc");
          e.target.value = "";
        }
      }
    ), /* @__PURE__ */ React.createElement(Btn, { icon: "file", title: T && T.sendWebrtcFile || "Send file via WebRTC", onClick: () => rtcFileRef.current && rtcFileRef.current.click() })), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Btn, { icon: "more", onClick: () => setMenu((v) => !v) }), menu && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { onClick: () => setMenu(false), style: { position: "fixed", inset: 0, zIndex: 40 } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 0, top: 36, zIndex: 50, width: 180, background: "var(--panel-2)", border: "1px solid var(--line)", borderRadius: 9, padding: 6, boxShadow: "0 14px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ React.createElement(MenuItem, { icon: "hash", label: T.alias, onClick: () => {
      setMenu(false);
      onAlias(peer);
    } }), /* @__PURE__ */ React.createElement(MenuItem, { icon: "check", label: T.selectDelete || "Select & delete", onClick: () => {
      setMenu(false);
      setSelMode(true);
    } }), /* @__PURE__ */ React.createElement("div", { style: { height: 1, background: "var(--line)", margin: "5px 4px" } }), /* @__PURE__ */ React.createElement(MenuItem, { icon: "trash", label: T.remove, danger: true, onClick: () => {
      setMenu(false);
      onRemove(peer);
    } }))))),
    peer.pending && /* @__PURE__ */ React.createElement("div", { style: {
      flexShrink: 0,
      padding: "7px 16px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "color-mix(in srgb, #d29922 12%, var(--panel))",
      borderBottom: "1px solid var(--line)",
      fontSize: 12.5,
      color: "var(--text)"
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 13, stroke: 2.2, color: "#d29922" }), /* @__PURE__ */ React.createElement("span", null, T.pendingFriend || "Waiting for them to accept your friend request \u2014 messages will queue and deliver once they do.")),
    /* @__PURE__ */ React.createElement("div", { ref: scrollRef, onScroll: updateFollowScroll, style: { flex: 1, overflow: "auto", padding: "18px 22px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, thread.filter((m) => m.day || !hidden.has(m.id)).map((m, i) => m.day ? /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", justifyContent: "center", margin: "14px 0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, fontWeight: 600, color: "var(--faint)", background: "var(--chip)", padding: "3px 10px", borderRadius: 999 } }, m.day)) : /* @__PURE__ */ React.createElement(
      Msg,
      {
        key: m.id || i,
        m,
        peer,
        T,
        isGroup,
        onTheater: setTheater,
        onDelete: (id) => doDelete([id]),
        onCancel: doCancel,
        onRetry: doRetry,
        onReveal: doReveal,
        onOpenFile: doOpenFile,
        onCall,
        onFormSubmit: () => onReloadThread && onReloadThread(),
        onNameCard: (card) => setNameCardProf(card),
        answered,
        busy: m.id ? fileBusy[m.id] : void 0,
        selMode,
        selected: sel.has(m.id),
        onToggleSel: toggleSel
      }
    )))),
    selMode && /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, borderTop: "1px solid var(--line)", padding: "10px 16px", background: "var(--panel)", display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)" } }, sel.size, " ", T.selected || "selected"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { size: "sm", onClick: () => {
      setSelMode(false);
      setSel(/* @__PURE__ */ new Set());
    } }, T.cancel || "Cancel"), /* @__PURE__ */ React.createElement(Btn, { size: "sm", tone: "danger", icon: "trash", onClick: () => doDelete([...sel]) }, T.delete || "Delete")),
    /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, borderTop: "1px solid var(--line)", padding: "12px 16px", background: "var(--panel)" } }, flash && /* @__PURE__ */ React.createElement("div", { style: {
      maxWidth: 1200,
      margin: "0 auto 8px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--mono)",
      fontSize: 11.5,
      color: flash.kind === "err" ? "var(--danger)" : "var(--accent)"
    } }, /* @__PURE__ */ React.createElement(
      Icon,
      {
        name: flash.kind === "err" ? "x" : "check",
        size: 13,
        stroke: 2.2,
        color: flash.kind === "err" ? "var(--danger)" : "var(--accent)"
      }
    ), flash.msg), sending && /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto 8px", display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "paperclip", size: 13, stroke: 2, color: "var(--accent)" }), (lang === "zh" ? "\u53D1\u9001\u4E2D: " : "Sending: ") + (sending.via === "webrtc" ? "WebRTC \xB7 " : "") + sending.name + (sending.size ? " \xB7 " + dkFileSize(sending.sent || 0) + " / " + dkFileSize(sending.size) : "") + (sending.pct != null ? " \xB7 " + Math.min(100, Math.max(0, sending.pct)).toFixed(1) + "%" : "") + (sending.kbps != null ? " \xB7 " + dkSpeed(sending.kbps) : "")), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: fileRef,
        type: "file",
        style: { display: "none" },
        onChange: (e) => {
          sendFiles(e.target.files);
          e.target.value = "";
        }
      }
    ), /* @__PURE__ */ React.createElement(Btn, { icon: "paperclip", title: T.sendFile, onClick: () => fileRef.current && fileRef.current.click() }), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: draft,
        onChange: (e) => setDraft(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendDraft();
          }
        },
        placeholder: `${T.message} ${peer.alias || shortKey(peer.userId, 6, 4)}\u2026`,
        style: { flex: 1, height: 38, borderRadius: 9, border: "1px solid var(--line)", background: "var(--panel-2)", color: "var(--text)", fontFamily: "var(--ui)", fontSize: 13.5, padding: "0 14px", outline: "none", minWidth: 0 }
      }
    ), /* @__PURE__ */ React.createElement(Btn, { tone: "solid", icon: "arrowUp", title: T.send, onClick: sendDraft }))),
    theater && /* @__PURE__ */ React.createElement("div", { onClick: () => setTheater(null), style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      background: "rgba(0,0,0,0.86)",
      display: "flex",
      flexDirection: "column"
    } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { flexShrink: 0, height: 46, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "0 14px" } }, /* @__PURE__ */ React.createElement("span", { style: { minWidth: 0, fontFamily: "var(--mono)", fontSize: 12, color: "rgba(255,255,255,0.72)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, theater.name), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        title: lang === "zh" ? "\u5168\u5C4F" : "fullscreen",
        onClick: () => {
          const el = document.getElementById("dk-theater-media");
          if (el && el.requestFullscreen)
            el.requestFullscreen();
        },
        style: { width: 34, height: 34, borderRadius: 8, border: "none", background: "rgba(255,255,255,0.14)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "maximize", size: 18, stroke: 2, color: "#fff" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        title: (lang === "zh" ? "\u5173\u95ED" : "close") + " \xB7 Esc",
        onClick: () => setTheater(null),
        style: { width: 34, height: 34, borderRadius: 8, border: "none", background: "rgba(255,255,255,0.14)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 20, stroke: 2.2, color: "#fff" })
    ))), /* @__PURE__ */ React.createElement("div", { onClick: () => setTheater(null), style: { flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px 16px" } }, theater.kind === "video" ? /* @__PURE__ */ React.createElement(
      "video",
      {
        id: "dk-theater-media",
        src: theater.url,
        controls: true,
        autoPlay: true,
        onClick: (e) => e.stopPropagation(),
        style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 6, background: "#000" }
      }
    ) : /* @__PURE__ */ React.createElement(
      "img",
      {
        id: "dk-theater-media",
        src: theater.url,
        alt: theater.name,
        onClick: (e) => e.stopPropagation(),
        style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 6 }
      }
    ))),
    pubProfile && /* @__PURE__ */ React.createElement(DkPublicProfile, { T, userid: peer.userId, fallbackName: peer.alias, isFriend: true, onClose: () => setPubProfile(false) }),
    nameCardProf && (() => {
      const cardFriend = (peers || []).find((p) => nameCardProf.userid && p.userId === nameCardProf.userid || nameCardProf.address && p.address === nameCardProf.address);
      return /* @__PURE__ */ React.createElement(
        DkPublicProfile,
        {
          T,
          userid: cardFriend && cardFriend.userId || nameCardProf.userid || nameCardProf.address,
          fallbackName: nameCardProf.name || nameCardProf.ens,
          isFriend: !!cardFriend,
          onMessage: cardFriend && onOpenChat ? () => {
            onOpenChat(cardFriend.id);
            setNameCardProf(null);
          } : void 0,
          onClose: () => setNameCardProf(null)
        }
      );
    })()
  );
}
function MenuItem({ icon, label, onClick, danger }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    textAlign: "left",
    padding: "8px 9px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    background: "transparent",
    fontFamily: "var(--mono)",
    fontSize: 12.5,
    fontWeight: 600,
    color: danger ? "var(--danger)" : "var(--text)"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 15, stroke: 2, color: danger ? "var(--danger)" : "var(--dim)" }), " ", label);
}
function ChatEmpty({ T }) {
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, color: "var(--faint)", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "message", size: 40, stroke: 1.4, color: "var(--line)" }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 13 } }, T.pickPeer));
}
function ChatTab({ T, lang, peers, requests, activeId, thread, onSelect, onAct, onAdd, onSend, onSendFile, onSendRtcFile, onAlias, onRemove, onOpenNet, onCall, onReloadThread, prefillAddr, onPrefillConsumed }) {
  const peer = peers.find((p) => p.id === activeId);
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", minWidth: 0, minHeight: 0 } }, /* @__PURE__ */ React.createElement(PeerSidebar, { T, peers, requests, activeId, onSelect, onAct, onAdd, prefillAddr, onPrefillConsumed }), peer ? /* @__PURE__ */ React.createElement(Conversation, { T, peer, lang, peers, onOpenChat: onSelect, thread, onSend, onSendFile, onSendRtcFile, onAlias, onRemove, onOpenNet, onCall, onReloadThread }) : /* @__PURE__ */ React.createElement(ChatEmpty, { T }));
}
Object.assign(window, { ChatTab });
function StatTile({ label, value, sub, tone }) {
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, padding: "13px 15px", borderRadius: 10, background: "var(--panel)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--faint)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 21, fontWeight: 700, letterSpacing: -0.5, marginTop: 5, color: tone || "var(--text)" } }, value), sub && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--dim)", marginTop: 2 } }, sub));
}
function MyNode({ T, me, activeExit, peers, reqCount = 0 }) {
  const online = peers.filter((p) => p.online).length;
  const direct = peers.filter((p) => p.online && p.via === "direct").length;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 12, background: "var(--panel)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(DkIdenticon, { seed: me.userId, size: 46, radius: 11 }), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: -3, bottom: -3, width: 14, height: 14, borderRadius: 999, background: "var(--online)", border: "2.5px solid var(--panel)" } })), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 9 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 17, fontWeight: 700, color: "var(--text)" } }, me.name), /* @__PURE__ */ React.createElement(Tag, { tone: "ok" }, "online"), /* @__PURE__ */ React.createElement(Tag, { tone: "accent" }, me.channel), me.isExit && /* @__PURE__ */ React.createElement(Tag, { tone: "warn" }, "exit", me.exitRegion ? ` \xB7 ${me.exitRegion.toUpperCase()}` : "")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, T.myIp), /* @__PURE__ */ React.createElement(Mono, { size: 13, copy: me.ip }, me.ip), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--line)" } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, "wire ", me.wire), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--line)" } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, "lan ", me.lanVer, " / peer ", me.peerVer))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { icon: "copy", onClick: () => dkCopy(me.carrier) }, T.copyAddr)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement(StatTile, { label: T.peersOnline, value: `${online}/${peers.length}`, sub: `${direct} ${T.direct}`, tone: "var(--online)" }), /* @__PURE__ */ React.createElement(StatTile, { label: T.activeEgress, value: activeExit ? activeExit : T.directEgress, sub: activeExit ? "china \xB7 cn-sh-01" : T.noProxy, tone: activeExit ? "var(--warn)" : "var(--text)" }), /* @__PURE__ */ React.createElement(StatTile, { label: T.wireLabel, value: me.wire, sub: `${me.channel} \xB7 ${T.lossless}` }), /* @__PURE__ */ React.createElement(StatTile, { label: T.reqs, value: String(reqCount), sub: T.pending, tone: reqCount ? "var(--accent)" : "var(--text)" })));
}
function PeerTable({ T, peers, onOpenChat }) {
  return /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 11, border: "1px solid var(--line)", overflow: "hidden", background: "var(--panel)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 0.8fr 90px", gap: 0, padding: "9px 16px", borderBottom: "1px solid var(--line)", background: "var(--panel-2)" } }, [T.colPeer, T.colVip, T.colPath, T.colWire, ""].map((h, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { fontFamily: "var(--mono)", fontSize: 10.5, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--faint)", textAlign: i === 4 ? "right" : "left" } }, h))), peers.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.id, style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 0.8fr 90px",
    gap: 0,
    alignItems: "center",
    padding: "11px 16px",
    borderBottom: i < peers.length - 1 ? "1px solid var(--line)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, minWidth: 0 } }, /* @__PURE__ */ React.createElement(DkAvatar, { peer: p, size: 26, radius: 6 }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: p.alias ? "var(--ui)" : "var(--mono)", fontSize: 13, fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, p.alias || shortKey(p.userId, 8, 5)), p.agent && /* @__PURE__ */ React.createElement(Icon, { name: "bot", size: 12, color: "var(--faint)", stroke: 2 })), /* @__PURE__ */ React.createElement(Mono, { size: 12.5, dim: true, copy: p.ip }, p.ip), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RouteTag, { peer: p })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: p.wire === "64" ? "var(--warn)" : "var(--dim)" } }, p.wire === "64" ? "old\xB764" : "new\xB7163"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 6 } }, /* @__PURE__ */ React.createElement(Btn, { icon: "message", size: "sm", title: T.openChat, onClick: () => onOpenChat(p.id) }), /* @__PURE__ */ React.createElement(Btn, { icon: "signal", size: "sm", title: T.ping })))));
}
function ExitCard({ T, region, activeExit, onSetExit }) {
  return /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 11, border: "1px solid var(--line)", overflow: "hidden", background: "var(--panel)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderBottom: "1px solid var(--line)", background: "var(--panel-2)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, padding: "2px 7px", borderRadius: 5, background: "var(--chip)", color: "var(--dim)" } }, region.flag), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 13.5, fontWeight: 600, color: "var(--text)" } }, region.label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), (() => {
    const reach = region.nodes.filter((n) => n.reachable).length;
    const down = region.nodes.length - reach;
    return /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: down > 0 ? "var(--warn)" : "var(--faint)" } }, reach, "/", region.nodes.length, " ", T.up, down > 0 ? ` \xB7 ${down} down` : "");
  })()), /* @__PURE__ */ React.createElement("div", null, region.nodes.map((n, i) => {
    const active = n.ip === activeExit;
    const stuck = n.online && !n.reachable;
    return /* @__PURE__ */ React.createElement("div", { key: n.ip, style: { display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderBottom: i < region.nodes.length - 1 ? "1px solid var(--line)" : "none", background: active ? "color-mix(in oklab, var(--accent), transparent 92%)" : "transparent" } }, /* @__PURE__ */ React.createElement(StatusDot, { online: n.reachable }), /* @__PURE__ */ React.createElement(Mono, { size: 13, copy: n.ip }, n.ip), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)" } }, n.host), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), n.reachable ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: n.ping > 200 ? "var(--warn)" : "var(--dim)" } }, n.ping, "ms") : stuck ? /* @__PURE__ */ React.createElement(Tag, { tone: "warn", title: "Announces online but IP won't pass \u2014 session desync or NAT-blocked" }, "online \xB7 no route") : /* @__PURE__ */ React.createElement(Tag, { tone: "off" }, "offline"), active ? /* @__PURE__ */ React.createElement(Btn, { tone: "ok", icon: "check", size: "sm", onClick: () => onSetExit(null) }, T.routing) : /* @__PURE__ */ React.createElement(Btn, { size: "sm", icon: "route", onClick: () => n.reachable && onSetExit(n.ip), style: { opacity: n.reachable ? 1 : 0.4 } }, T.routeThru));
  })));
}
function LanEnableCard({ backend, onArm, onCancel }) {
  const [busy, setBusy] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const releasing = backend.state === "releasing";
  const cmd = backend.command || "sudo agentnet service install";
  const copy = () => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }).catch(() => {
    });
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    padding: "20px 22px",
    borderRadius: 12,
    background: "var(--panel)",
    border: "1px solid var(--line)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 15, fontWeight: 700, color: "var(--text)" } }, "\u865A\u62DF\u5C40\u57DF\u7F51 / Virtual LAN"), /* @__PURE__ */ React.createElement(Tag, { tone: "warn" }, "advanced \xB7 needs admin")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 13, lineHeight: 1.6, color: "var(--dim)" } }, "\u804A\u5929\u3001\u6587\u4EF6\u3001\u901A\u8BDD\u90FD", /* @__PURE__ */ React.createElement("b", null, "\u4E0D\u9700\u8981"), "\u5B83 \u2014\u2014 \u90A3\u4E9B\u5DF2\u7ECF\u5728\u5DE5\u4F5C\u4E86\u3002\u865A\u62DF\u5C40\u57DF\u7F51\u989D\u5916\u63D0\u4F9B", /* @__PURE__ */ React.createElement("b", null, "\u79C1\u6709 IP \u4E92\u901A"), "\u548C", /* @__PURE__ */ React.createElement("b", null, "\u51FA\u53E3\u4EE3\u7406\u8DEF\u7531"), ",\u8981\u521B\u5EFA TUN \u8BBE\u5907,\u6240\u4EE5\u9700\u8981\u7BA1\u7406\u5458\u6743\u9650\u3002", /* @__PURE__ */ React.createElement("br", null), "Beagle \u4E0D\u4F1A\u66FF\u4F60\u63D0\u6743:\u547D\u4EE4\u7531\u4F60\u81EA\u5DF1\u8FD0\u884C,\u5BC6\u7801\u7531\u7CFB\u7EDF\u5411\u4F60\u8981\u3002"), !releasing ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 9 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)", lineHeight: 1.5 } }, "\u7B2C 1 \u6B65 \xB7 Beagle \u5148\u4EA4\u51FA\u5F53\u524D\u8EAB\u4EFD \u2014\u2014 \u540C\u4E00\u8EAB\u4EFD\u4E0D\u80FD\u540C\u65F6\u8DD1\u4E24\u4E2A peer, \u6240\u4EE5\u8FD9\u4E00\u6B65\u4F1A\u8BA9\u6D88\u606F", /* @__PURE__ */ React.createElement("b", null, "\u77ED\u6682\u79BB\u7EBF"), "\u3002"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: async () => {
        setBusy(true);
        try {
          await onArm();
        } finally {
          setBusy(false);
        }
      },
      disabled: busy,
      style: {
        alignSelf: "flex-start",
        padding: "9px 16px",
        borderRadius: 10,
        border: "none",
        cursor: busy ? "default" : "pointer",
        background: "var(--accent)",
        color: "#fff",
        fontFamily: "var(--mono)",
        fontSize: 13,
        fontWeight: 700,
        opacity: busy ? 0.6 : 1
      }
    },
    busy ? "\u2026" : "\u542F\u7528\u865A\u62DF\u5C40\u57DF\u7F51"
  )) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "9px 12px",
    borderRadius: 9,
    background: "rgba(245,158,11,0.14)",
    border: "1px solid rgba(245,158,11,0.5)"
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--text)", lineHeight: 1.5 } }, "\u6D88\u606F\u5DF2\u79BB\u7EBF \u2014\u2014 \u8EAB\u4EFD\u5DF2\u4EA4\u51FA,\u7B49\u5F85\u5B88\u62A4\u8FDB\u7A0B\u63A5\u7BA1", backend.releaseSecondsLeft > 0 ? `(${Math.floor(backend.releaseSecondsLeft / 60)} \u5206 ${backend.releaseSecondsLeft % 60} \u79D2\u540E\u81EA\u52A8\u6062\u590D)` : "")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, "\u7B2C 2 \u6B65 \xB7 \u5728\u7EC8\u7AEF\u91CC\u8FD0\u884C(\u7CFB\u7EDF\u4F1A\u5411\u4F60\u8981\u5BC6\u7801):"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("code", { style: {
    flex: 1,
    fontFamily: "var(--mono)",
    fontSize: 13,
    padding: "10px 12px",
    borderRadius: 8,
    background: "var(--panel-2)",
    border: "1px solid var(--line)",
    color: "var(--text)",
    overflowX: "auto"
  } }, cmd), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: copy,
      style: {
        flexShrink: 0,
        padding: "9px 13px",
        borderRadius: 8,
        border: "1px solid var(--line)",
        cursor: "pointer",
        background: "var(--panel-2)",
        color: "var(--text)",
        fontFamily: "var(--mono)",
        fontSize: 12
      }
    },
    copied ? "\u5DF2\u590D\u5236" : "\u590D\u5236"
  )), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, "\u7B2C 3 \u6B65 \xB7 \u5B88\u62A4\u8FDB\u7A0B\u4E00\u8D77\u6765,Beagle \u81EA\u5DF1\u5207\u8FC7\u53BB\u5E76\u6062\u590D\u6D88\u606F \u2014\u2014 \u4E0D\u7528\u91CD\u542F\u3002"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onCancel(),
      style: {
        alignSelf: "flex-start",
        padding: "7px 13px",
        borderRadius: 8,
        border: "1px solid var(--line)",
        cursor: "pointer",
        background: "transparent",
        color: "var(--dim)",
        fontFamily: "var(--mono)",
        fontSize: 12
      }
    },
    "\u53D6\u6D88,\u6062\u590D\u6D88\u606F"
  )));
}
function NetworkTab({ T, me, peers, exits, activeExit, reqCount, onSetExit, onOpenChat, backend, onArmLan, onCancelLan }) {
  if (backend && backend.switchable && !backend.hasVirtualLan) {
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto", padding: "24px 28px 60px", display: "flex", flexDirection: "column", gap: 26 } }, /* @__PURE__ */ React.createElement(MyNode, { T, me, activeExit, peers, reqCount }), /* @__PURE__ */ React.createElement(LanEnableCard, { backend, onArm: onArmLan, onCancel: onCancelLan })));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto", padding: "24px 28px 60px", display: "flex", flexDirection: "column", gap: 26 } }, /* @__PURE__ */ React.createElement(MyNode, { T, me, activeExit, peers, reqCount }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(Section, { label: T.peerRouting, count: peers.length }), /* @__PURE__ */ React.createElement(PeerTable, { T, peers, onOpenChat })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(Section, { label: T.exitNodes, trailing: /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(Btn, { icon: "plus", size: "sm" }, T.addExit)) }), activeExit && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 10, background: "color-mix(in oklab, var(--warn), transparent 90%)", border: "1px solid color-mix(in oklab, var(--warn), transparent 70%)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "route", size: 17, color: "var(--warn)", stroke: 2 }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--text)" } }, T.egressVia), /* @__PURE__ */ React.createElement(Mono, { size: 13, copy: activeExit }, activeExit), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { tone: "danger", icon: "unlink", size: "sm", onClick: () => onSetExit(null) }, T.stopRouting)), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, exits.map((r) => /* @__PURE__ */ React.createElement(ExitCard, { key: r.region, T, region: r, activeExit, onSetExit }))))));
}
Object.assign(window, { NetworkTab });
function CopyBtn({ value, copiedText = "Copied", copyFailedText = "Copy failed", copyTitle = "Copy" }) {
  const [status, setStatus] = React.useState(null);
  const timer = React.useRef(null);
  React.useEffect(() => () => {
    if (timer.current)
      clearTimeout(timer.current);
  }, []);
  const onCopy = async () => {
    if (timer.current)
      clearTimeout(timer.current);
    setStatus("copied");
    timer.current = setTimeout(() => setStatus(null), 1400);
    const ok = await dkCopy(value);
    if (!ok) {
      setStatus("failed");
      if (timer.current)
        clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus(null), 1400);
    }
  };
  const message = status === "copied" ? copiedText : copyFailedText;
  return /* @__PURE__ */ React.createElement("span", { "aria-live": "polite", style: { display: "inline-flex", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
    Btn,
    {
      icon: status === "copied" ? "check" : status === "failed" ? "x" : "copy",
      tone: status === "copied" ? "ok" : status === "failed" ? "danger" : "ghost",
      size: "sm",
      title: status ? message : copyTitle,
      onClick: onCopy
    }
  ));
}
function FieldRow({ T, label, value, mono = true, copy, qr, onQr, last }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, padding: "13px 16px", borderBottom: last ? "none" : "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 130, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 } }, label), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: mono ? "var(--mono)" : "var(--ui)", fontSize: 13.5, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, value), copy && /* @__PURE__ */ React.createElement(CopyBtn, { value, copiedText: T.copied, copyFailedText: T.copyFailed, copyTitle: T.copy }), qr && /* @__PURE__ */ React.createElement(Btn, { icon: "qr", size: "sm", onClick: () => onQr && onQr(value, label) }));
}
function DkVersionRow({ T, me }) {
  const unsure = me.verFromBackend === false;
  const pill = (name, ver, mark) => /* @__PURE__ */ React.createElement("span", { key: name, style: { display: "inline-flex", alignItems: "baseline", gap: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--faint)" } }, name), /* @__PURE__ */ React.createElement("span", { title: mark && unsure ? T.verInstalledHint : void 0 }, ver || "\u2014", mark && unsure && ver ? /* @__PURE__ */ React.createElement("span", { style: { color: "var(--faint)" } }, " ?") : null));
  const line = (label, items) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 52, flexShrink: 0, fontSize: 11, color: "var(--faint)" } }, label), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 12, flexWrap: "wrap" } }, items));
  const embedded = me.backend === "embedded";
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 14, padding: "13px 16px", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 130, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 } }, T.version), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--mono)", fontSize: 13, color: "var(--text)" } }, line(T.verApp || "app", [
    pill("beagle", me.beagleVer),
    pill("peer-webrtc", me.webrtcVer),
    ...embedded ? [pill("peer", me.peerVer)] : []
  ]), !embedded && line(T.verDaemon || "daemon", [
    pill("lan", me.lanVer, true),
    pill("peer", me.peerVer, true)
  ]), !embedded && unsure && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--faint)", fontFamily: "var(--ui)" } }, T.verInstalledHint), line(T.verChannel || "channel", [/* @__PURE__ */ React.createElement("span", { key: "ch" }, me.channel)])));
}
function DkQrModal({ T, value, label, onClose }) {
  const qr = React.useMemo(() => {
    if (typeof qrcode === "undefined")
      return null;
    try {
      const q = qrcode(0, "M");
      q.addData(value);
      q.make();
      return q;
    } catch (e) {
      return null;
    }
  }, [value]);
  const count = qr ? qr.getModuleCount() : 0;
  const quiet = 4;
  const total = count + quiet * 2;
  const px = 248;
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 90, background: "color-mix(in oklab, #000, transparent 38%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, maxWidth: 340 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, alignSelf: "stretch" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: "var(--faint)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { icon: "x", size: "sm", onClick: onClose })), qr ? /* @__PURE__ */ React.createElement("svg", { width: px, height: px, viewBox: `0 0 ${total} ${total}`, shapeRendering: "crispEdges", style: { display: "block", borderRadius: 10, background: "#fff" } }, /* @__PURE__ */ React.createElement("rect", { width: total, height: total, fill: "#fff" }), Array.from({ length: count }).map(
    (_, r) => Array.from({ length: count }).map(
      (__, c) => qr.isDark(r, c) ? /* @__PURE__ */ React.createElement("rect", { key: `${r}-${c}`, x: c + quiet, y: r + quiet, width: 1.04, height: 1.04, fill: "#000" }) : null
    )
  )) : /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", padding: 48 } }, "QR unavailable"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--dim)", wordBreak: "break-all", textAlign: "center", maxWidth: 280, lineHeight: 1.5 } }, value), /* @__PURE__ */ React.createElement(CopyBtn, { value, copiedText: T.copied, copyFailedText: T.copyFailed, copyTitle: T.copy })));
}
function Card({ label, children, trailing }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(Section, { label, trailing }), /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 11, border: "1px solid var(--line)", overflow: "hidden", background: "var(--panel)" } }, children));
}
function DkEditModal({ T, me, onClose, onSave }) {
  const [name, setName] = React.useState(me.name || "");
  const [desc, setDesc] = React.useState(me.description || "");
  const save = () => {
    const n = name.trim();
    if (n)
      onSave(n, desc);
  };
  const field = { height: 38, borderRadius: 9, border: "1px solid var(--line)", background: "var(--panel-2)", color: "var(--text)", fontFamily: "var(--ui)", fontSize: 13.5, padding: "0 12px", outline: "none" };
  const lbl = { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 };
  const onKey = (e) => {
    if (e.key === "Enter")
      save();
    if (e.key === "Escape")
      onClose();
  };
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 90, background: "color-mix(in oklab, #000, transparent 38%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { width: 440, maxWidth: "92vw", background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 13, fontWeight: 700, color: "var(--text)" } }, T.editProfile), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { icon: "x", size: "sm", onClick: onClose })), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: lbl }, "display name"), /* @__PURE__ */ React.createElement("input", { value: name, onChange: (e) => setName(e.target.value), onKeyDown: onKey, autoFocus: true, maxLength: 48, style: field })), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: lbl }, "status message"), /* @__PURE__ */ React.createElement("input", { value: desc, onChange: (e) => setDesc(e.target.value), onKeyDown: onKey, maxLength: 120, placeholder: "optional \u2014 a short bio friends will see", style: field })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--faint)" } }, "Your userid (the unique identity) can't change \u2014 only the display name + status."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 2 } }, /* @__PURE__ */ React.createElement(Btn, { size: "sm", onClick: onClose }, T.cancel || "cancel"), /* @__PURE__ */ React.createElement(Btn, { tone: "accent", size: "sm", onClick: save }, T.save || "save"))));
}
const dkPunkCache = /* @__PURE__ */ new Map();
function DkPunkAvatar({ id, size, radius, fallbackSeed }) {
  const [img, setImg] = React.useState(() => (dkPunkCache.get(id) || {}).image || null);
  React.useEffect(() => {
    let dead = false;
    const hit = dkPunkCache.get(id);
    if (hit) {
      setImg(hit.image || null);
      return;
    }
    setImg(null);
    fetch(`/api/punk/${id}`).then((r) => r.json()).then((d) => {
      if (d.ok && d.punk && d.punk.image) {
        dkPunkCache.set(id, d.punk);
        if (!dead)
          setImg(d.punk.image);
      }
    }).catch(() => {
    });
    return () => {
      dead = true;
    };
  }, [id]);
  if (!img)
    return /* @__PURE__ */ React.createElement(DkIdenticon, { seed: fallbackSeed || String(id), size, radius });
  return /* @__PURE__ */ React.createElement(
    "img",
    {
      src: img,
      alt: "",
      width: size,
      height: size,
      style: { width: size, height: size, borderRadius: radius, background: "#638596", imageRendering: "pixelated", flexShrink: 0 }
    }
  );
}
const dkEnsAvCache = /* @__PURE__ */ new Map();
function DkEnsAvatar({ userid, name, fallbackSeed, size, radius }) {
  const key = userid || (name ? `name:${name}` : null);
  const query = userid ? `userid=${encodeURIComponent(userid)}` : name ? `name=${encodeURIComponent(name)}` : null;
  const [pub, setPub] = React.useState(() => key && dkEnsAvCache.has(key) ? dkEnsAvCache.get(key) : void 0);
  React.useEffect(() => {
    let dead = false;
    if (!query) {
      setPub(null);
      return void 0;
    }
    if (dkEnsAvCache.has(key)) {
      setPub(dkEnsAvCache.get(key));
      return void 0;
    }
    fetch(`/api/ens-profile?${query}`).then((r) => r.json()).then((d) => {
      var _a;
      const v = d.ok && d.profile ? { avatarUrl: d.profile.avatarUrl || null, punkId: (_a = d.profile.punkId) != null ? _a : null } : null;
      dkEnsAvCache.set(key, v);
      if (!dead)
        setPub(v);
    }).catch(() => {
      if (!dead)
        setPub(null);
    });
    return () => {
      dead = true;
    };
  }, [key]);
  if (pub && pub.avatarUrl)
    return /* @__PURE__ */ React.createElement(DkImgAvatar, { url: pub.avatarUrl, seed: fallbackSeed || userid, size, radius });
  if (pub && pub.punkId != null)
    return /* @__PURE__ */ React.createElement(DkPunkAvatar, { id: pub.punkId, size, radius, fallbackSeed: fallbackSeed || userid });
  return /* @__PURE__ */ React.createElement(DkIdenticon, { seed: fallbackSeed || userid || "x", size, radius });
}
function DkPunkPicker({ T, onPick, onClose }) {
  const TYPES = ["any", "female", "male", "zombie", "ape", "alien"];
  const tLabel = (t) => T && T["pt_" + t] || t;
  const [type, setType] = React.useState("any");
  const [batch, setBatch] = React.useState(null);
  const [err, setErr] = React.useState(null);
  const [gen, setGen] = React.useState(0);
  React.useEffect(() => {
    let dead = false;
    setBatch(null);
    setErr(null);
    fetch(`/api/punk-list?type=${type}&limit=24`).then((r) => r.json()).then((d) => {
      if (dead)
        return;
      if (d.ok)
        setBatch(d.list || []);
      else
        setErr(d.error || "load failed");
    }).catch((e) => {
      if (!dead)
        setErr(String(e && e.message || e));
    });
    return () => {
      dead = true;
    };
  }, [type, gen]);
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 90, background: "color-mix(in oklab, #000, transparent 38%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { width: 480, maxWidth: "94vw", background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 13, fontWeight: 700, color: "var(--text)" } }, T.ensPickPunk || "choose a punk"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { size: "sm", onClick: () => setGen(gen + 1) }, T.ensShuffle || "shuffle"), /* @__PURE__ */ React.createElement(Btn, { icon: "x", size: "sm", onClick: onClose })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, TYPES.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      onClick: () => setType(t),
      style: {
        padding: "4px 10px",
        borderRadius: 999,
        border: "1px solid var(--line)",
        cursor: "pointer",
        background: type === t ? "var(--accent)" : "transparent",
        color: type === t ? "#fff" : "var(--dim)",
        fontFamily: "var(--ui)",
        fontSize: 12
      }
    },
    tLabel(t)
  ))), /* @__PURE__ */ React.createElement("div", { style: { minHeight: 232 } }, err ? /* @__PURE__ */ React.createElement("div", { style: { padding: 16, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, err) : !batch ? /* @__PURE__ */ React.createElement("div", { style: { padding: 16, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, T.dirLoading || "loading\u2026") : /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 } }, batch.map((p) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: p.id,
      title: `#${p.id} \xB7 ${p.type}`,
      onClick: () => onPick(Number(p.id)),
      style: { padding: 0, border: "1px solid var(--line)", borderRadius: 10, cursor: "pointer", background: "#638596", overflow: "hidden", aspectRatio: "1" }
    },
    /* @__PURE__ */ React.createElement("img", { src: p.image, alt: `punk #${p.id}`, style: { width: "100%", height: "100%", imageRendering: "pixelated", display: "block" } })
  ))))));
}
function DkPublicProfile({ T, userid, fallbackName, onClose, isFriend, isMe, onMessage }) {
  const [st, setSt] = React.useState({ loading: true });
  const [addState, setAddState] = React.useState(null);
  const [recOpen, setRecOpen] = React.useState(false);
  const [recPeers, setRecPeers] = React.useState(null);
  const [recState, setRecState] = React.useState({});
  const openRecommend = () => {
    setRecOpen(true);
    if (recPeers)
      return;
    fetch("/api/desktop").then((r) => r.json()).then((d) => {
      const list = (d && d.peers || []).filter((p) => p.userId && p.userId !== userid && !p.pending);
      setRecPeers(list);
    }).catch(() => setRecPeers([]));
  };
  const recommendTo = (p) => {
    const prof2 = st.prof || {};
    const text = dkEncodeBeagleContact({
      name: prof2.displayName || fallbackName || "",
      ens: prof2.ens || "",
      userid,
      address: prof2.address || "",
      avatar: prof2.avatarUrl || "",
      description: prof2.description || ""
    });
    setRecState((s) => ({ ...s, [p.id]: "busy" }));
    fetch("/api/chat-send", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ userid: p.userId, text }) }).then((r) => r.json()).then((r) => setRecState((s) => ({ ...s, [p.id]: r.ok !== false ? "sent" : r.error || "failed" }))).catch((e) => setRecState((s) => ({ ...s, [p.id]: String(e && e.message || e) })));
  };
  const addFriend = (address) => {
    setAddState("busy");
    fetch("/api/add", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ address }) }).then((r) => r.json()).then((r) => setAddState(r.ok !== false ? "sent" : r.error || T.addFailed || "failed")).catch((e) => setAddState(String(e && e.message || e)));
  };
  React.useEffect(() => {
    let dead = false;
    setSt({ loading: true });
    fetch(`/api/ens-profile?userid=${encodeURIComponent(userid)}`).then((r) => r.json()).then((d) => {
      if (!dead)
        setSt({ loading: false, prof: d.ok && d.profile || null });
    }).catch(() => {
      if (!dead)
        setSt({ loading: false, prof: null });
    });
    return () => {
      dead = true;
    };
  }, [userid]);
  const prof = st.prof;
  const LINK_BASE = { twitter: "https://x.com/", linkedin: "https://www.linkedin.com/in/", github: "https://github.com/" };
  const links = prof ? Object.entries(prof.links || {}) : [];
  const lbl = { width: 110, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 };
  const rowS = { display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderTop: "1px solid var(--line)" };
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 90, background: "color-mix(in oklab, #000, transparent 38%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { width: 420, maxWidth: "94vw", background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 16, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, prof && prof.avatarUrl ? /* @__PURE__ */ React.createElement(DkImgAvatar, { url: prof.avatarUrl, seed: userid, size: 56, radius: 14 }) : prof && prof.punkId != null ? /* @__PURE__ */ React.createElement(DkPunkAvatar, { id: prof.punkId, size: 56, radius: 14, fallbackSeed: userid }) : /* @__PURE__ */ React.createElement(DkIdenticon, { seed: userid, size: 56, radius: 14 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 17, fontWeight: 700, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, prof && prof.displayName || fallbackName || shortKey(userid, 10, 6)), prof && prof.ens && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", marginTop: 2 } }, prof.ens)), /* @__PURE__ */ React.createElement(Btn, { icon: "x", size: "sm", onClick: onClose })), st.loading ? /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, T.dirLoading || "loading\u2026") : !prof ? /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, T.pubNone || "No public profile \u2014 this user has not registered a beagles.eth name.") : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, prof.description && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--dim)", paddingBottom: 12, lineHeight: 1.5 } }, prof.description), links.length > 0 && // Label keeps its column; pills wrap inside their OWN container so
  // an overflowing pill lands under the first pill, never under the label.
  /* @__PURE__ */ React.createElement("div", { style: { ...rowS, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { ...lbl, paddingTop: 5 } }, T.linksCard || "links"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", gap: 8, flexWrap: "wrap" } }, links.map(([k, h]) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: k,
      href: (LINK_BASE[k] || "") + h,
      target: "_blank",
      rel: "noreferrer",
      style: { display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 999, border: "1px solid var(--line)", textDecoration: "none", fontFamily: "var(--ui)", fontSize: 12, color: "var(--accent)" }
    },
    k,
    " \u2197"
  )))), (() => {
    const kvRow = (label, value, head = 8) => /* @__PURE__ */ React.createElement("div", { style: rowS, key: label }, /* @__PURE__ */ React.createElement("span", { style: lbl }, label), /* @__PURE__ */ React.createElement("span", { title: value, style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--dim)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, shortKey(value, head, 6)), /* @__PURE__ */ React.createElement(CopyBtn, { value, copiedText: T.copied, copyFailedText: T.copyFailed, copyTitle: T.copy }));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, prof.eth && kvRow("ethereum", prof.eth), prof.sol && kvRow("solana", prof.sol), kvRow(T.userId || "user id", userid, 10), prof.address && kvRow(T.addr || "address", prof.address));
  })(), (() => {
    const cta = { padding: "7px 16px", borderRadius: 9, cursor: "pointer", fontFamily: "var(--ui)", fontSize: 12.5 };
    return /* @__PURE__ */ React.createElement("div", { style: { ...rowS, justifyContent: "flex-end", gap: 8 } }, !isMe && prof.address && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: openRecommend,
        style: { ...cta, border: "1px solid var(--line)", background: "transparent", color: "var(--text)" }
      },
      T.pubRecommend || "Recommend"
    ), isFriend && onMessage && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: onMessage,
        style: { ...cta, border: "none", background: "var(--accent)", color: "#fff" }
      },
      T.pubMessage || "Message"
    ), !isMe && !isFriend && prof.address && (addState === "sent" ? /* @__PURE__ */ React.createElement(Tag, { tone: "accent" }, T.dirSent || "requested") : addState && addState !== "busy" ? /* @__PURE__ */ React.createElement("span", { title: addState, style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--warn, #f59e0b)" } }, T.addFailed || "failed") : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => addFriend(prof.address),
        disabled: addState === "busy",
        style: { ...cta, border: "none", background: "var(--accent)", color: "#fff", opacity: addState === "busy" ? 0.6 : 1 }
      },
      addState === "busy" ? "\u2026" : T.dirAdd || "Add"
    )));
  })(), recOpen && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line)", paddingTop: 10, display: "flex", flexDirection: "column", gap: 4, maxHeight: 200, overflowY: "auto" } }, /* @__PURE__ */ React.createElement("span", { style: { ...lbl, width: "auto", paddingBottom: 4 } }, T.pubRecTitle || "send this card to\u2026"), !recPeers ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--faint)" } }, T.dirLoading || "loading\u2026") : recPeers.length === 0 ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--faint)" } }, T.dirEmpty || "nobody") : recPeers.map((p) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: p.id,
      onClick: () => !recState[p.id] && recommendTo(p),
      style: { display: "flex", alignItems: "center", gap: 9, padding: "6px 8px", borderRadius: 9, border: "none", background: "transparent", cursor: recState[p.id] ? "default" : "pointer", textAlign: "left" }
    },
    /* @__PURE__ */ React.createElement(DkAvatar, { peer: p, size: 26, radius: 7, dot: false }),
    /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, p.alias || shortKey(p.userId, 8, 6)),
    recState[p.id] === "sent" ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--online)" } }, T.pubRecSent || "sent \u2713") : recState[p.id] === "busy" ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--faint)" } }, "\u2026") : recState[p.id] ? /* @__PURE__ */ React.createElement("span", { title: recState[p.id], style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--warn, #f59e0b)" } }, T.addFailed || "failed") : /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--accent)" } }, T.send || "Send")
  ))))));
}
function DkEnsCard({ T, me, onRecord }) {
  const [st, setSt] = React.useState({ loading: true });
  const [label, setLabel] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [msg, setMsg] = React.useState(null);
  const reload = () => {
    fetch("/api/ens-name").then((r) => r.json()).then((d) => {
      setSt({ loading: false, registered: !!d.registered, record: d.record || null, mineOwned: !!d.mineOwned });
      if (d.registered && d.record && d.record.name)
        setLabel(d.record.name.replace(/\.beagles\.eth$/i, ""));
      if (onRecord)
        onRecord(d.record || null);
    }).catch((e) => setSt({ loading: false, error: String(e && e.message || e) }));
  };
  React.useEffect(() => {
    reload();
  }, []);
  const post = (url, body) => {
    setBusy(true);
    setMsg(null);
    return fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }).then((r) => r.json()).then((d) => {
      setMsg(d.ok ? { tone: "ok", text: T.ensDone || "saved" } : { tone: "err", text: d.error || "failed" });
      if (d.ok)
        reload();
      return d;
    }).catch((e) => {
      setMsg({ tone: "err", text: String(e && e.message || e) });
    }).finally(() => setBusy(false));
  };
  const register = () => {
    const l = label.trim();
    if (l)
      post("/api/ens-register", { name: l, displayName: me.name });
  };
  const bind = (chain, address) => post("/api/ens-bind-wallet", { chain, address });
  const bindEth = async () => {
    const eth = window.ethereum;
    if (!eth) {
      setMsg({ tone: "err", text: T.ensNoEthWallet || "no Ethereum wallet extension found (MetaMask\u2026)" });
      return;
    }
    try {
      const a = await eth.request({ method: "eth_requestAccounts" });
      if (a && a[0])
        bind("eth", a[0]);
    } catch (e) {
      setMsg({ tone: "err", text: String(e && e.message || e) });
    }
  };
  const bindSol = async () => {
    const sol = window.phantom && window.phantom.solana || window.solana;
    if (!sol) {
      setMsg({ tone: "err", text: T.ensNoSolWallet || "no Solana wallet extension found (Phantom\u2026)" });
      return;
    }
    try {
      const r = await sol.connect();
      const a = r && r.publicKey && r.publicKey.toString();
      if (a)
        bind("sol", a);
    } catch (e) {
      setMsg({ tone: "err", text: String(e && e.message || e) });
    }
  };
  const field = { flex: 1, minWidth: 0, height: 34, borderRadius: 8, border: "1px solid var(--line)", background: "var(--panel-2)", color: "var(--text)", fontFamily: "var(--mono)", fontSize: 13, padding: "0 10px", outline: "none" };
  const row = { display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderBottom: "1px solid var(--line)" };
  const rowLbl = { width: 130, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 };
  const SOCIALS = [
    { k: "twitter", base: "https://x.com/" },
    { k: "linkedin", base: "https://www.linkedin.com/in/" },
    { k: "github", base: "https://github.com/" }
  ];
  const [draft, setDraft] = React.useState({});
  React.useEffect(() => {
    const t = st.record && st.record.texts || {};
    setDraft({ twitter: t["com.twitter"] || "", linkedin: t["com.linkedin"] || "", github: t["com.github"] || "" });
  }, [st.record]);
  const saveSocial = (k) => post("/api/ens-social", { key: k, value: (draft[k] || "").trim() });
  const socialRow = ({ k, base }, last) => {
    var _a;
    const saved = (st.record && st.record.texts || {})["com." + k] || "";
    const cur = (_a = draft[k]) != null ? _a : "";
    return /* @__PURE__ */ React.createElement("div", { key: k, style: { ...row, borderBottom: last ? "none" : row.borderBottom } }, /* @__PURE__ */ React.createElement("span", { style: rowLbl }, k), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: cur,
        onChange: (e) => setDraft({ ...draft, [k]: e.target.value }),
        disabled: busy || !st.mineOwned,
        placeholder: T.linkPlaceholder || "username or profile URL",
        onKeyDown: (e) => {
          if (e.key === "Enter")
            saveSocial(k);
        },
        style: field
      }
    ), saved && /* @__PURE__ */ React.createElement(
      "a",
      {
        href: base + saved,
        target: "_blank",
        rel: "noreferrer",
        title: base + saved,
        style: { flexShrink: 0, fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)", textDecoration: "none" }
      },
      "\u2197"
    ), /* @__PURE__ */ React.createElement(Btn, { tone: "accent", size: "sm", disabled: busy || !st.mineOwned || cur.trim() === saved, onClick: () => saveSocial(k) }, saved && !cur.trim() ? T.ensUnbind || "unbind" : T.save || "save"));
  };
  const [picking, setPicking] = React.useState(false);
  const fileRef = React.useRef(null);
  const rec = st.record;
  const boundEth = rec && rec.addresses && rec.addresses["60"];
  const boundSol = rec && rec.addresses && rec.addresses["501"];
  const punkId = rec && rec.nft === "CryptoPunks" && rec.nftid > 0 ? rec.nftid : null;
  const upAvatar = rec && rec.texts && rec.texts.avatar || null;
  const pickPunk = (id) => {
    setPicking(false);
    post("/api/ens-avatar", { nftid: id });
  };
  const onUploadFile = (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f)
      return;
    setBusy(true);
    setMsg(null);
    const img = new Image();
    const url = URL.createObjectURL(f);
    const fail = (text) => {
      setBusy(false);
      setMsg({ tone: "err", text });
    };
    img.onload = () => {
      URL.revokeObjectURL(url);
      try {
        const S = 256;
        const c = document.createElement("canvas");
        c.width = S;
        c.height = S;
        const ctx = c.getContext("2d");
        const side = Math.min(img.width, img.height);
        ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, S, S);
        const enc = (q) => {
          let d = c.toDataURL("image/webp", q);
          if (!d.startsWith("data:image/webp"))
            d = c.toDataURL("image/jpeg", q);
          return d;
        };
        let dataUrl = null;
        for (const q of [0.9, 0.75, 0.55, 0.4]) {
          dataUrl = enc(q);
          if (dataUrl.length < 13e4)
            break;
        }
        if (!dataUrl || dataUrl.length >= 13e4) {
          fail(T.ensTooBig || "image too large even after scaling");
          return;
        }
        post("/api/ens-avatar-upload", { dataUrl });
      } catch (err) {
        fail(String(err && err.message || err));
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      fail(T.ensBadImage || "cannot read that image");
    };
    img.src = url;
  };
  const walletRow = (lbl, chain, bound, onBind, last) => /* @__PURE__ */ React.createElement("div", { style: { ...row, borderBottom: last ? "none" : row.borderBottom } }, /* @__PURE__ */ React.createElement("span", { style: { width: 130, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 } }, lbl), bound ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, bound), /* @__PURE__ */ React.createElement(CopyBtn, { value: bound, copiedText: T.copied, copyFailedText: T.copyFailed, copyTitle: T.copy }), /* @__PURE__ */ React.createElement(Btn, { size: "sm", tone: "danger", disabled: busy || !st.mineOwned, onClick: () => bind(chain, "") }, T.ensUnbind || "unbind")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontFamily: "var(--ui)", fontSize: 12, color: "var(--faint)" } }, T.ensNotBound || "not bound"), /* @__PURE__ */ React.createElement(Btn, { size: "sm", disabled: busy || !st.mineOwned, onClick: onBind }, T.ensBind || "bind")));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Card, { label: T.ensCard || "Name \xB7 beagles.eth" }, st.loading ? /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px", fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, T.dirLoading || "loading\u2026") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: row }, /* @__PURE__ */ React.createElement("span", { style: { width: 130, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 } }, T.ensName || "name"), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: label,
      onChange: (e) => setLabel(e.target.value),
      placeholder: T.ensPlaceholder || "yourname",
      disabled: busy,
      onKeyDown: (e) => {
        if (e.key === "Enter")
          register();
      },
      style: field
    }
  ), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--dim)", flexShrink: 0 } }, ".beagles.eth"), /* @__PURE__ */ React.createElement(Btn, { tone: "accent", size: "sm", disabled: busy || !label.trim(), onClick: register }, busy ? "\u2026" : st.registered && st.mineOwned ? T.ensUpdate || "update" : T.ensRegister || "register")), st.registered && !st.mineOwned && /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px", borderBottom: "1px solid var(--line)", fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--faint)" } }, (T.ensWalletOwned || "registered via your mobile wallet as") + " ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)" } }, rec && rec.name)), st.registered && /* @__PURE__ */ React.createElement("div", { style: row }, /* @__PURE__ */ React.createElement("span", { style: { width: 130, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 } }, T.ensAvatar || "avatar"), upAvatar ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("img", { src: upAvatar, alt: "", width: 34, height: 34, style: { width: 34, height: 34, borderRadius: 9, objectFit: "cover", flexShrink: 0, background: "var(--panel-2)" } }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--text)" } }, T.ensCustom || "custom image"), /* @__PURE__ */ React.createElement(Btn, { size: "sm", tone: "danger", disabled: busy || !st.mineOwned, onClick: () => post("/api/ens-avatar", { nftid: null }) }, T.ensClear || "clear")) : punkId != null ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DkPunkAvatar, { id: punkId, size: 34, radius: 9, fallbackSeed: me.userId }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--text)" } }, `CryptoPunk #${punkId}`), /* @__PURE__ */ React.createElement(Btn, { size: "sm", tone: "danger", disabled: busy || !st.mineOwned, onClick: () => post("/api/ens-avatar", { nftid: null }) }, T.ensClear || "clear")) : /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontFamily: "var(--ui)", fontSize: 12, color: "var(--faint)" } }, T.ensNotSet || "not set"), /* @__PURE__ */ React.createElement(Btn, { size: "sm", disabled: busy || !st.mineOwned, onClick: () => fileRef.current && fileRef.current.click() }, T.ensUpload || "upload"), /* @__PURE__ */ React.createElement(Btn, { size: "sm", disabled: busy || !st.mineOwned, onClick: () => setPicking(true) }, T.ensChoose || "choose"), /* @__PURE__ */ React.createElement("input", { ref: fileRef, type: "file", accept: "image/*", onChange: onUploadFile, style: { display: "none" } })), walletRow(T.ensEth || "ethereum", "eth", boundEth, bindEth, false), walletRow(T.ensSol || "solana", "sol", boundSol, bindSol, !msg), msg && /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px", fontFamily: "var(--ui)", fontSize: 12, color: msg.tone === "ok" ? "var(--online)" : "var(--danger)" } }, msg.text)), picking && /* @__PURE__ */ React.createElement(DkPunkPicker, { T, onPick: pickPunk, onClose: () => setPicking(false) })), !st.loading && st.registered && /* @__PURE__ */ React.createElement(Card, { label: T.linksCard || "Links" }, SOCIALS.map((s, i) => socialRow(s, i === SOCIALS.length - 1))));
}
function DkUpdateCheck({ T }) {
  const [st, setSt] = React.useState("idle");
  const [info, setInfo] = React.useState(null);
  const check = () => {
    setSt("busy");
    fetch("/api/update-check?force=1").then((r) => r.json()).then((d) => {
      const behind = (d && d.updates || []).filter((u) => u.behind);
      if (d && d.ok && behind.length) {
        setInfo(d);
        setSt("idle");
      } else
        setSt("latest");
    }).catch(() => setSt("idle"));
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, padding: "13px 16px" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 130, flexShrink: 0, fontFamily: "var(--mono)", fontSize: 11.5, fontWeight: 600, color: "var(--faint)", textTransform: "uppercase", letterSpacing: 0.5 } }, T.updCheckLabel || "updates"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontFamily: "var(--ui)", fontSize: 12, color: st === "latest" ? "var(--online)" : "var(--faint)" } }, st === "latest" ? T.updLatest || "up to date \u2713" : ""), /* @__PURE__ */ React.createElement(Btn, { size: "sm", disabled: st === "busy", onClick: check }, st === "busy" ? "\u2026" : T.updCheck || "check for updates"), info && /* @__PURE__ */ React.createElement(DkUpdateModal, { T, info, onClose: () => setInfo(null) }));
}
function DkDisplaySettings({ t, setTweak }) {
  const zh = t.lang === "zh";
  const row = { display: "flex", alignItems: "center", gap: 13, padding: "13px 16px" };
  const name = { flex: 1, fontFamily: "var(--mono)", fontSize: 13.5, fontWeight: 600, color: "var(--text)" };
  const seg = (value, current, onPick, options) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, options.map(([v, label]) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: v,
      onClick: () => onPick(v),
      style: {
        padding: "5px 12px",
        borderRadius: 999,
        cursor: "pointer",
        fontFamily: "var(--ui)",
        fontSize: 12.5,
        border: "1px solid var(--line)",
        background: current === v ? "var(--accent)" : "transparent",
        color: current === v ? "#fff" : "var(--dim)"
      }
    },
    label
  )));
  return /* @__PURE__ */ React.createElement(Card, { label: zh ? "\u663E\u793A" : "Display" }, /* @__PURE__ */ React.createElement("div", { style: { ...row, borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("span", { style: name }, zh ? "\u8BED\u8A00" : "Language"), seg("lang", t.lang, (v) => setTweak("lang", v), [["en", "EN"], ["zh", "\u4E2D\u6587"]])), /* @__PURE__ */ React.createElement("div", { style: row }, /* @__PURE__ */ React.createElement("span", { style: name }, zh ? "\u4E3B\u9898" : "Theme"), seg("theme", t.theme, (v) => setTweak("theme", v), [["dark", zh ? "\u6DF1\u8272" : "Dark"], ["light", zh ? "\u6D45\u8272" : "Light"]])));
}
function ProfileTab({ T, me, onEdit, t, setTweak }) {
  const [qr, setQr] = React.useState(null);
  const [editing, setEditing] = React.useState(false);
  const [ensRec, setEnsRec] = React.useState(null);
  const punkId = ensRec && ensRec.nft === "CryptoPunks" && ensRec.nftid > 0 ? ensRec.nftid : null;
  const upAvatar = ensRec && ensRec.texts && ensRec.texts.avatar || null;
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 760, margin: "0 auto", padding: "24px 28px 60px", display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 18, padding: "20px 22px", borderRadius: 14, background: "var(--panel)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, upAvatar ? /* @__PURE__ */ React.createElement("img", { src: upAvatar, alt: "", width: 68, height: 68, style: { width: 68, height: 68, borderRadius: 16, objectFit: "cover", background: "var(--panel-2)" } }) : punkId != null ? /* @__PURE__ */ React.createElement(DkPunkAvatar, { id: punkId, size: 68, radius: 16, fallbackSeed: me.userId }) : /* @__PURE__ */ React.createElement(DkIdenticon, { seed: me.userId, size: 68, radius: 16 }), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: -3, bottom: -3, width: 18, height: 18, borderRadius: 999, background: "var(--online)", border: "3px solid var(--panel)" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 22, fontWeight: 700, letterSpacing: -0.5, color: "var(--text)" } }, me.name), /* @__PURE__ */ React.createElement(Tag, { tone: "ok" }, "online"), me.isExit && /* @__PURE__ */ React.createElement(Tag, { tone: "warn" }, "exit", me.exitRegion ? ` \xB7 ${me.exitRegion.toUpperCase()}` : "")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 13, color: "var(--dim)", marginTop: 4 } }, me.handle), me.description ? /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)", marginTop: 3 } }, me.description) : null), /* @__PURE__ */ React.createElement(Btn, { icon: "edit", onClick: () => setEditing(true) }, T.editProfile)), /* @__PURE__ */ React.createElement(Card, { label: T.identity }, /* @__PURE__ */ React.createElement(FieldRow, { T, label: T.userId, value: me.userId, copy: true, qr: true, onQr: (v, l) => setQr({ value: v, label: l }) }), /* @__PURE__ */ React.createElement(FieldRow, { T, label: T.carrierAddr, value: me.carrier, copy: true, qr: true, onQr: (v, l) => setQr({ value: v, label: l }) }), /* @__PURE__ */ React.createElement(FieldRow, { T, label: T.netKey, value: me.netKey, copy: true, last: true })), /* @__PURE__ */ React.createElement(DkEnsCard, { T, me, onRecord: setEnsRec }), typeof me.autoAccept === "boolean" && /* @__PURE__ */ React.createElement(Card, { label: T && T.friendsSettings || "Friends" }, /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 13, padding: "14px 16px", cursor: "pointer" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      checked: me.autoAccept,
      onChange: (e) => {
        const enabled = e.target.checked;
        fetch("/api/autoaccept", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ enabled }) }).catch(() => {
        });
      },
      style: { width: 16, height: 16, accentColor: "var(--accent)" }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 13.5, fontWeight: 600, color: "var(--text)" } }, T && T.autoAcceptLabel || "Auto-accept friend requests"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--dim)", marginTop: 2 } }, T && T.autoAcceptSub || "Off: requests wait in the sidebar for your approval.")))), t && setTweak && /* @__PURE__ */ React.createElement(DkDisplaySettings, { t, setTweak }), /* @__PURE__ */ React.createElement(Card, { label: T.network }, /* @__PURE__ */ React.createElement(FieldRow, { T, label: T.virtualIp, value: me.ip, copy: true }), /* @__PURE__ */ React.createElement(FieldRow, { T, label: T.wireLabel, value: `${me.wire} \xB7 lossless`, mono: false }), /* @__PURE__ */ React.createElement(DkVersionRow, { T, me }), /* @__PURE__ */ React.createElement(DkUpdateCheck, { T })), /* @__PURE__ */ React.createElement(Card, { label: T.dangerZone }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 13, padding: "14px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 8, flexShrink: 0, background: "color-mix(in oklab, var(--danger), transparent 86%)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--danger)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "trash", size: 17, stroke: 2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 13.5, fontWeight: 600, color: "var(--danger)" } }, T.deleteNode), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--faint)", marginTop: 1 } }, T.deleteSub)), /* @__PURE__ */ React.createElement(Btn, { tone: "danger", size: "sm" }, T.delete)))), qr && /* @__PURE__ */ React.createElement(DkQrModal, { T, value: qr.value, label: qr.label, onClose: () => setQr(null) }), editing && /* @__PURE__ */ React.createElement(DkEditModal, { T, me, onClose: () => setEditing(false), onSave: (name, description) => {
    if (onEdit)
      onEdit(name, description);
    setEditing(false);
  } }));
}
Object.assign(window, { ProfileTab, DkPunkAvatar, DkEnsAvatar, DkPublicProfile });
function DkDirAvatar({ p, size }) {
  const [broken, setBroken] = React.useState(false);
  if (p.punkId != null && !(p.avatar && !broken)) {
    return /* @__PURE__ */ React.createElement(DkPunkAvatar, { id: p.punkId, size, radius: Math.round(size / 4), fallbackSeed: p.userid || p.name });
  }
  if (p.avatar && !broken) {
    return /* @__PURE__ */ React.createElement(
      "img",
      {
        src: p.avatar,
        alt: "",
        width: size,
        height: size,
        onError: () => setBroken(true),
        style: { width: size, height: size, borderRadius: Math.round(size / 4), objectFit: "cover", flexShrink: 0, background: "var(--panel-2)" }
      }
    );
  }
  return /* @__PURE__ */ React.createElement(DkIdenticon, { seed: p.userid || p.name, size, radius: Math.round(size / 4) });
}
function DkDirRow({ p, T, isFriend, isMe, onAdd, onOpenChat, onOpenProfile }) {
  const [state, setState] = React.useState(null);
  const add = () => {
    setState("busy");
    Promise.resolve(onAdd(p.address)).then((r) => setState(r && r.ok === false ? r.error || T.addFailed || "failed" : "sent")).catch((e) => setState(String(e && e.message || e)));
  };
  const btn = (label, onClick, disabled) => /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: (e) => {
        e.stopPropagation();
        onClick();
      },
      disabled,
      style: {
        padding: "5px 11px",
        borderRadius: 8,
        border: "1px solid var(--line)",
        flexShrink: 0,
        background: disabled ? "transparent" : "var(--accent)",
        color: disabled ? "var(--faint)" : "#fff",
        fontFamily: "var(--ui)",
        fontSize: 12,
        cursor: disabled ? "default" : "pointer"
      }
    },
    label
  );
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: () => onOpenProfile && onOpenProfile(p),
      title: T && T.pubOpen || "View public profile",
      style: { display: "flex", alignItems: "center", gap: 11, padding: "var(--row-pad)", borderBottom: "1px solid var(--line)", cursor: "pointer" }
    },
    /* @__PURE__ */ React.createElement(DkDirAvatar, { p, size: 34 }),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 13.5, fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, p.name), p.points != null && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", flexShrink: 0 } }, p.points.toLocaleString(), " pts"), p.ens && p.ens !== p.name && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, p.ens)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Mono, { size: 10.5, dim: true, copy: p.userid, title: p.userid }, shortKey(p.userid, 10, 6)), p.description && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--ui)", fontSize: 11, color: "var(--faint)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, p.description))),
    isMe ? /* @__PURE__ */ React.createElement(Tag, null, T.dirMe || "me") : isFriend ? btn(T.dirOpenChat || "chat", () => onOpenChat(p.userid), false) : state === "sent" ? /* @__PURE__ */ React.createElement(Tag, { tone: "accent" }, T.dirSent || "requested") : state && state !== "busy" ? /* @__PURE__ */ React.createElement("span", { title: state, style: { fontFamily: "var(--ui)", fontSize: 11, color: "var(--warn, #f59e0b)", flexShrink: 0 } }, T.addFailed || "failed") : btn(state === "busy" ? "\u2026" : T.dirAdd || "Add", add, state === "busy")
  );
}
function DiscoverTab({ T, kind, peers, meId, onAdd, onOpenChat }) {
  const [list, setList] = React.useState(null);
  const [err, setErr] = React.useState(null);
  const [q, setQ] = React.useState("");
  const [prof, setProf] = React.useState(null);
  React.useEffect(() => {
    let dead = false;
    setList(null);
    setErr(null);
    fetch(kind === "recommended" ? "/api/discover-recommended" : "/api/discover-registered").then((r) => r.json()).then((d) => {
      if (dead)
        return;
      if (d.ok)
        setList(d.list || []);
      else
        setErr(d.error || "load failed");
    }).catch((e) => {
      if (!dead)
        setErr(String(e && e.message || e));
    });
    return () => {
      dead = true;
    };
  }, [kind]);
  const friendIds = React.useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    for (const p of peers || []) {
      if (p.id)
        s.add(p.id);
      if (p.userId)
        s.add(p.userId);
    }
    return s;
  }, [peers]);
  const shown = React.useMemo(() => {
    if (!list)
      return [];
    const needle = q.trim().toLowerCase();
    if (!needle)
      return list;
    return list.filter((p) => (p.name || "").toLowerCase().includes(needle) || (p.ens || "").toLowerCase().includes(needle) || (p.userid || "").toLowerCase().includes(needle));
  }, [list, q]);
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid var(--line)", background: "var(--panel)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 15, stroke: 2, color: "var(--faint)" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: q,
      onChange: (e) => setQ(e.target.value),
      placeholder: T.dirSearch || "search name / userid",
      style: { flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--text)", fontFamily: "var(--ui)", fontSize: 13 }
    }
  ), list && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--faint)" } }, shown.length, "/", list.length)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflowY: "auto" } }, err ? /* @__PURE__ */ React.createElement("div", { style: { padding: 22, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, (T.dirError || "Could not load the directory:") + " " + err) : !list ? /* @__PURE__ */ React.createElement("div", { style: { padding: 22, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, T.dirLoading || "loading\u2026") : shown.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: 22, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)" } }, T.dirEmpty || "nobody here") : shown.map((p) => /* @__PURE__ */ React.createElement(
    DkDirRow,
    {
      key: p.userid,
      p,
      T,
      isMe: !!meId && p.userid === meId,
      isFriend: friendIds.has(p.userid),
      onAdd,
      onOpenChat,
      onOpenProfile: (row) => setProf({ userid: row.userid, name: row.name })
    }
  ))), prof && /* @__PURE__ */ React.createElement(
    DkPublicProfile,
    {
      T,
      userid: prof.userid,
      fallbackName: prof.name,
      onClose: () => setProf(null),
      isFriend: friendIds.has(prof.userid),
      isMe: !!meId && prof.userid === meId
    }
  ));
}
const DK_FIRST_CONTACTS = [
  {
    ens: "help.beagles.eth",
    name: "Beagle Chat Help",
    userid: "FhbohSLrj5UjdyFKCEYNeEWAPq3QD9hRg6hsso5ipag2",
    address: "ZJxuWL9SDqdvunnCSMLUd5jyGCaBV44G6THYaQS7ZaZAz1wmt4nz",
    blurb: { en: "Ask anything about Beagle. Always online.", zh: "\u5173\u4E8E Beagle \u7684\u4EFB\u4F55\u95EE\u9898\u90FD\u53EF\u4EE5\u95EE\u5B83\uFF0C\u59CB\u7EC8\u5728\u7EBF\u3002" }
  },
  {
    ens: "air.beagles.eth",
    name: "air-wli",
    userid: "6dAPAT1RT4YqpHREKhyGDqroaRYr5WaaHW6PNUEb4dAM",
    address: "DMtGmaH17YMWACJk8ByX9B8WSMX5WvWdLF7v2YmRErAC2Z5xz1X8",
    blurb: { en: "Wei Li \u2014 the person building this. Say hi.", zh: "Wei Li \u2014 \u672C\u9879\u76EE\u4F5C\u8005\uFF0C\u6B22\u8FCE\u6253\u62DB\u547C\u3002" }
  }
];
const DK_WELCOME_T = {
  en: {
    title: "Your browser is your home on the internet",
    sub: "No signup, no server, nothing to install \u2014 your account here is a key, and it is created in this browser when you continue. First, say who you are, so people know who is knocking.",
    step1: "Who are you",
    step2: "Say hello to someone",
    name: "display name",
    namePh: "e.g. Wei Li",
    intro: "one line about you",
    introPh: "e.g. building decentralised things in SF",
    avatar: "avatar",
    pick: "choose an avatar",
    shuffle: "shuffle",
    useIdent: "use the default",
    addr: "your address",
    addrHint: "Share this and anyone can reach you \u2014 from a phone, a desktop, or another tab.",
    keyLater: "Your key is generated when you continue, and never leaves this browser.",
    creating: "creating your key\u2026",
    travels: "Your name and intro travel inside the friend request, so the other side sees them before accepting.",
    avatarLocal: "Your avatar shows in this window. Friends see a pattern generated from your key until beagles.eth registration works here.",
    next: "continue",
    back: "back",
    later: "skip for now",
    done: "start chatting",
    add: "add",
    added: "requested",
    browse: "Browse the directory instead \u2192",
    needName: "Pick a name first \u2014 a request with no name is just a key.",
    langLabel: "Language",
    pickTitle: "choose an avatar",
    shuffle: "shuffle",
    loading: "loading\u2026",
    types: { any: "any", female: "female", male: "male", zombie: "zombie", ape: "ape", alien: "alien" }
  },
  zh: {
    title: "\u6D4F\u89C8\u5668\u5C31\u662F\u4F60\u5728\u4E92\u8054\u7F51\u4E0A\u7684\u5BB6",
    sub: '\u4E0D\u7528\u6CE8\u518C\u3001\u6CA1\u6709\u670D\u52A1\u5668\u3001\u65E0\u9700\u5B89\u88C5 \u2014\u2014 \u8FD9\u91CC\u7684\u8D26\u53F7\u5C31\u662F\u4E00\u628A\u5BC6\u94A5\uFF0C\u70B9\u51FB"\u7EE7\u7EED"\u65F6\u624D\u4F1A\u5728\u8FD9\u4E2A\u6D4F\u89C8\u5668\u91CC\u751F\u6210\u3002\u5148\u8BF4\u8BF4\u4F60\u662F\u8C01\uFF0C\u522B\u4EBA\u624D\u77E5\u9053\u662F\u8C01\u5728\u6572\u95E8\u3002',
    step1: "\u4F60\u662F\u8C01",
    step2: "\u5148\u8DDF\u4EBA\u6253\u4E2A\u62DB\u547C",
    name: "\u6635\u79F0",
    namePh: "\u4F8B\u5982 Wei Li",
    intro: "\u4E00\u53E5\u8BDD\u4ECB\u7ECD",
    introPh: "\u4F8B\u5982 \u5728\u65E7\u91D1\u5C71\u505A\u53BB\u4E2D\u5FC3\u5316\u7684\u4E1C\u897F",
    avatar: "\u5934\u50CF",
    pick: "\u9009\u4E00\u4E2A\u5934\u50CF",
    shuffle: "\u6362\u4E00\u6279",
    useIdent: "\u7528\u9ED8\u8BA4\u56FE\u6848",
    addr: "\u4F60\u7684\u5730\u5740",
    addrHint: "\u628A\u5B83\u53D1\u7ED9\u522B\u4EBA\uFF0C\u624B\u673A\u3001\u684C\u9762\u7AEF\u6216\u53E6\u4E00\u4E2A\u6807\u7B7E\u9875\u90FD\u80FD\u627E\u5230\u4F60\u3002",
    keyLater: '\u4F60\u7684\u5BC6\u94A5\u4F1A\u5728\u70B9\u51FB"\u7EE7\u7EED"\u65F6\u751F\u6210\uFF0C\u5E76\u4E14\u6C38\u8FDC\u4E0D\u4F1A\u79BB\u5F00\u8FD9\u4E2A\u6D4F\u89C8\u5668\u3002',
    creating: "\u6B63\u5728\u751F\u6210\u5BC6\u94A5\u2026",
    travels: "\u6635\u79F0\u548C\u4ECB\u7ECD\u4F1A\u968F\u597D\u53CB\u8BF7\u6C42\u4E00\u8D77\u53D1\u9001\uFF0C\u5BF9\u65B9\u5728\u540C\u610F\u4E4B\u524D\u5C31\u80FD\u770B\u5230\u3002",
    avatarLocal: "\u5934\u50CF\u53EA\u5728\u672C\u7A97\u53E3\u663E\u793A\u3002\u5728\u6D4F\u89C8\u5668\u7AEF\u652F\u6301 beagles.eth \u6CE8\u518C\u4E4B\u524D\uFF0C\u597D\u53CB\u770B\u5230\u7684\u662F\u4F60\u5BC6\u94A5\u751F\u6210\u7684\u56FE\u6848\u3002",
    next: "\u7EE7\u7EED",
    back: "\u8FD4\u56DE",
    later: "\u4EE5\u540E\u518D\u8BF4",
    done: "\u5F00\u59CB\u804A\u5929",
    add: "\u6DFB\u52A0",
    added: "\u5DF2\u53D1\u9001",
    browse: "\u76F4\u63A5\u6D4F\u89C8\u76EE\u5F55 \u2192",
    needName: "\u5148\u53D6\u4E2A\u540D\u5B57 \u2014\u2014 \u6CA1\u6709\u540D\u5B57\u7684\u8BF7\u6C42\u5C31\u53EA\u662F\u4E00\u4E32\u5BC6\u94A5\u3002",
    langLabel: "\u8BED\u8A00",
    pickTitle: "\u9009\u4E00\u4E2A\u5934\u50CF",
    shuffle: "\u6362\u4E00\u6279",
    loading: "\u52A0\u8F7D\u4E2D\u2026",
    types: { any: "\u5168\u90E8", female: "\u5973", male: "\u7537", zombie: "\u50F5\u5C38", ape: "\u733F", alien: "\u5916\u661F\u4EBA" }
  }
};
function DkWelcome({ lang, onLang, me, onSave, onAdd, onBrowse, onClose, onCreateIdentity }) {
  var _a;
  const W = DK_WELCOME_T[lang === "zh" ? "zh" : "en"];
  const [step, setStep] = React.useState(1);
  const [name, setName] = React.useState(me.name || "");
  const [intro, setIntro] = React.useState(me.description || "");
  const [punk, setPunk] = React.useState((_a = me.punkId) != null ? _a : null);
  const [picking, setPicking] = React.useState(false);
  const [sent, setSent] = React.useState({});
  const [warn, setWarn] = React.useState(false);
  const [minting, setMinting] = React.useState(false);
  const hasKey = !!me.hasIdentity && !!me.carrier;
  const commit = (extra) => onSave({
    name: name.trim(),
    description: intro.trim(),
    punkId: punk,
    ...extra
  });
  const next = async () => {
    if (!name.trim()) {
      setWarn(true);
      return;
    }
    setMinting(true);
    try {
      if (!hasKey && onCreateIdentity)
        await onCreateIdentity();
    } finally {
      setMinting(false);
    }
    await commit({});
    setStep(2);
  };
  const finish = () => {
    commit({ onboarded: true });
    onClose();
  };
  const addOne = (c) => {
    setSent((s) => Object.assign({}, s, { [c.ens]: true }));
    Promise.resolve(commit({ onboarded: true })).then(() => onAdd && onAdd(c.address));
  };
  const field = {
    width: "100%",
    height: 34,
    padding: "0 11px",
    borderRadius: 9,
    border: "1px solid var(--line)",
    background: "var(--bg)",
    color: "var(--text)",
    fontFamily: "var(--ui)",
    fontSize: 13.5,
    outline: "none",
    boxSizing: "border-box"
  };
  const label = {
    fontFamily: "var(--mono)",
    fontSize: 11,
    fontWeight: 600,
    color: "var(--faint)",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    display: "block",
    marginBottom: 6
  };
  const note = { fontFamily: "var(--ui)", fontSize: 11.5, lineHeight: 1.55, color: "var(--faint)" };
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: 120, background: "color-mix(in oklab, #000, transparent 26%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 520, maxWidth: "96vw", maxHeight: "92vh", overflowY: "auto", background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 18, padding: 24, display: "flex", flexDirection: "column", gap: 18 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), [["en", "EN"], ["zh", "\u4E2D\u6587"]].map(([v, txt]) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: v,
      onClick: () => onLang && onLang(v),
      title: W.langLabel,
      style: {
        padding: "3px 10px",
        borderRadius: 999,
        cursor: "pointer",
        fontFamily: "var(--ui)",
        fontSize: 12,
        border: "1px solid var(--line)",
        background: lang === v ? "var(--accent)" : "transparent",
        color: lang === v ? "#fff" : "var(--dim)"
      }
    },
    txt
  ))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 19, fontWeight: 700, color: "var(--text)", lineHeight: 1.3 } }, W.title), step === 1 && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 13, color: "var(--dim)", marginTop: 8, lineHeight: 1.6 } }, W.sub)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, [1, 2].map((n) => /* @__PURE__ */ React.createElement("span", { key: n, style: { height: 3, flex: 1, borderRadius: 999, background: step >= n ? "var(--accent)" : "var(--line)" } })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)" } }, step, "/2")), step === 1 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 } }, punk != null ? /* @__PURE__ */ React.createElement(DkPunkAvatar, { id: punk, size: 72, radius: 16, fallbackSeed: me.userId || "beagle" }) : hasKey ? /* @__PURE__ */ React.createElement(DkIdenticon, { seed: me.userId, size: 72, radius: 16 }) : /* @__PURE__ */ React.createElement("div", { style: { width: 72, height: 72, borderRadius: 16, background: "var(--chip)", border: "1px dashed var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--faint)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "userRound", size: 30, stroke: 1.6 })), /* @__PURE__ */ React.createElement(Btn, { size: "sm", onClick: () => setPicking(true) }, W.pick), punk != null && /* @__PURE__ */ React.createElement(Btn, { size: "sm", tone: "ghost", onClick: () => setPunk(null) }, W.useIdent)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: label }, W.name), /* @__PURE__ */ React.createElement(
    "input",
    {
      autoFocus: true,
      value: name,
      placeholder: W.namePh,
      style: field,
      onChange: (e) => {
        setName(e.target.value);
        setWarn(false);
      },
      onKeyDown: (e) => {
        if (e.key === "Enter")
          next();
      }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: label }, W.intro), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: intro,
      placeholder: W.introPh,
      style: field,
      onChange: (e) => setIntro(e.target.value),
      onKeyDown: (e) => {
        if (e.key === "Enter")
          next();
      }
    }
  )))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7, padding: "12px 14px", borderRadius: 12, background: "var(--chip)" } }, /* @__PURE__ */ React.createElement("div", { style: note }, "\u2713 ", W.travels), /* @__PURE__ */ React.createElement("div", { style: note }, "\xB7 ", W.avatarLocal)), hasKey ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: label }, W.addr), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 11, color: "var(--dim)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, me.carrier), /* @__PURE__ */ React.createElement(CopyBtn, { value: me.carrier, copiedText: "copied", copyFailedText: "copy failed", copyTitle: "copy" })), /* @__PURE__ */ React.createElement("div", { style: Object.assign({ marginTop: 6 }, note) }, W.addrHint)) : (
    /* No key yet — promising an address here would be a lie. */
    /* @__PURE__ */ React.createElement("div", { style: note }, "\u{1F511} ", W.keyLater)
  ), warn && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--warn)" } }, W.needName), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--faint)", textDecoration: "underline" } }, W.later), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { tone: "solid", size: "lg", onClick: minting ? void 0 : next }, minting ? W.creating : W.next))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700, color: "var(--text)" } }, W.step2), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, DK_FIRST_CONTACTS.map((c) => /* @__PURE__ */ React.createElement("div", { key: c.ens, style: { display: "flex", alignItems: "center", gap: 12, padding: "11px 13px", borderRadius: 12, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement(DkEnsAvatar, { userid: c.userid, size: 38, radius: 10, fallbackSeed: c.userid }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 13.5, fontWeight: 600, color: "var(--text)" } }, c.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--faint)", marginTop: 1 } }, c.blurb[lang === "zh" ? "zh" : "en"]), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--faint)", marginTop: 2 } }, c.ens)), sent[c.ens] ? /* @__PURE__ */ React.createElement(Tag, { tone: "ok" }, W.added) : /* @__PURE__ */ React.createElement(Btn, { size: "sm", tone: "solid", onClick: () => addOne(c) }, W.add)))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        commit({ onboarded: true });
        onBrowse();
        onClose();
      },
      style: { background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--accent)" }
    },
    W.browse
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(Btn, { size: "lg", onClick: () => setStep(1) }, W.back), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Btn, { tone: "solid", size: "lg", onClick: finish }, W.done))), picking && /* @__PURE__ */ React.createElement(
    DkPunkPicker,
    {
      T: {
        ensPickPunk: W.pickTitle,
        ensShuffle: W.shuffle,
        dirLoading: W.loading,
        pt_any: W.types.any,
        pt_female: W.types.female,
        pt_male: W.types.male,
        pt_zombie: W.types.zombie,
        pt_ape: W.types.ape,
        pt_alien: W.types.alien
      },
      onPick: (id) => {
        setPunk(id);
        setPicking(false);
      },
      onClose: () => setPicking(false)
    }
  )));
}
const DK_FILE_RTC_KIND = "file";
const DK_FILE_RTC_CHUNK = 16 * 1024;
const DK_FILE_RTC_OPEN_TIMEOUT_MS = 2e4;
const DK_FILE_RTC_SIGNAL_TTL_MS = 10 * 60 * 1e3;
let _dkFileIcePromise = null;
function dkFileIceServers() {
  if (!_dkFileIcePromise)
    _dkFileIcePromise = dkLoadCallIceServers();
  return _dkFileIcePromise;
}
function dkFileRtcId() {
  if (window.crypto && window.crypto.randomUUID)
    return window.crypto.randomUUID();
  return "frtc-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
}
function dkFileRtcEnvelope(fileId, type, extra) {
  return Object.assign({ dkRtc: 1, kind: DK_FILE_RTC_KIND, fileId, type, ts: Date.now() }, extra || {});
}
function dkRtcState(pc) {
  if (!pc)
    return "";
  return "ice=" + pc.iceConnectionState + " conn=" + pc.connectionState + " gather=" + pc.iceGatheringState;
}
function dkWaitForOpen(dc, timeoutMs, describeState) {
  if (dc.readyState === "open")
    return Promise.resolve();
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      cleanup();
      const s = describeState ? describeState() : "";
      reject(new Error("WebRTC data channel open timed out" + (s ? " (" + s + ")" : "")));
    }, timeoutMs);
    const cleanup = () => {
      clearTimeout(timer);
      dc.removeEventListener("open", onOpen);
      dc.removeEventListener("error", onError);
      dc.removeEventListener("close", onClose);
    };
    const onOpen = () => {
      cleanup();
      resolve();
    };
    const onError = () => {
      cleanup();
      const s = describeState ? describeState() : "";
      reject(new Error("WebRTC data channel failed" + (s ? " (" + s + ")" : "")));
    };
    const onClose = () => {
      cleanup();
      const s = describeState ? describeState() : "";
      reject(new Error("WebRTC data channel closed before open" + (s ? " (" + s + ")" : "")));
    };
    dc.addEventListener("open", onOpen);
    dc.addEventListener("error", onError);
    dc.addEventListener("close", onClose);
  });
}
function dkWaitBufferedLow(dc, highWater) {
  if (dc.bufferedAmount < highWater)
    return Promise.resolve();
  return new Promise((resolve, reject) => {
    const prev = dc.bufferedAmountLowThreshold;
    dc.bufferedAmountLowThreshold = Math.floor(highWater / 2);
    let poll = null;
    let timer = null;
    const done = () => {
      cleanup();
      resolve();
    };
    const cleanup = () => {
      if (poll)
        clearInterval(poll);
      if (timer)
        clearTimeout(timer);
      dc.removeEventListener("bufferedamountlow", done);
      dc.removeEventListener("close", onClose);
      dc.removeEventListener("error", onError);
      dc.bufferedAmountLowThreshold = prev;
    };
    const check = () => {
      if (dc.readyState !== "open")
        return onClose();
      if (dc.bufferedAmount < highWater)
        done();
    };
    const onClose = () => {
      cleanup();
      reject(new Error("WebRTC data channel closed while draining"));
    };
    const onError = () => {
      cleanup();
      reject(new Error("WebRTC data channel failed while draining"));
    };
    dc.addEventListener("bufferedamountlow", done);
    dc.addEventListener("close", onClose);
    dc.addEventListener("error", onError);
    poll = setInterval(check, 250);
    timer = setTimeout(() => {
      cleanup();
      reject(new Error("WebRTC data channel drain timed out buffered=" + dc.bufferedAmount));
    }, 3e4);
  });
}
function dkFileDownload(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name || "agentnet-file";
  a.textContent = name || "agentnet-file";
  return { url, name: a.download };
}
function dkRememberRtcFile(peerId, fileId, name, size, url) {
  if (!window.__dkRtcFiles)
    window.__dkRtcFiles = /* @__PURE__ */ new Map();
  const item = { id: fileId, peerId, name, size, url, media: dkFileMediaKind(name) };
  window.__dkRtcFiles.set(peerId + "|" + name + "|" + size, item);
  return item;
}
function useRtcFileController(selfId, onReceivedFile) {
  const [incoming, setIncoming] = React.useState([]);
  const peersRef = React.useRef(/* @__PURE__ */ new Map());
  const onReceivedFileRef = React.useRef(onReceivedFile);
  React.useEffect(() => {
    onReceivedFileRef.current = onReceivedFile;
  }, [onReceivedFile]);
  React.useEffect(() => {
    if (!selfId || !window.RTCPeerConnection || !window.dkRtcSignalBus)
      return;
    const bus = dkRtcSignalBus();
    const cleanup = (fileId) => {
      const sess = peersRef.current.get(fileId);
      if (!sess)
        return;
      try {
        sess.dc && sess.dc.close();
      } catch (e) {
      }
      try {
        sess.pc && sess.pc.close();
      } catch (e) {
      }
      peersRef.current.delete(fileId);
    };
    const sendSignal = (peerId, fileId, type, extra) => bus.send(peerId, dkFileRtcEnvelope(fileId, type, extra));
    const handleDataChannel = (peerId, fileId, pc, dc, initialMeta) => {
      dc.binaryType = "arraybuffer";
      const prev = peersRef.current.get(fileId);
      const sess = Object.assign(prev || {}, { pc, dc, peerId, meta: initialMeta || null, chunks: [], received: 0 });
      peersRef.current.set(fileId, sess);
      dc.onmessage = (ev) => {
        if (typeof ev.data === "string") {
          let msg = null;
          try {
            msg = JSON.parse(ev.data);
          } catch (e) {
          }
          if (!msg)
            return;
          if (msg.type === "meta") {
            sess.meta = msg;
            sess.chunks = [];
            sess.received = 0;
          } else if (msg.type === "done") {
            const meta = sess.meta || {};
            const blob = new Blob(sess.chunks, { type: meta.mime || "application/octet-stream" });
            const dl = dkFileDownload(blob, meta.name || "agentnet-file");
            dkRememberRtcFile(peerId, fileId, dl.name, blob.size, dl.url);
            setIncoming((arr) => [{ id: fileId, peerId, name: dl.name, size: blob.size, url: dl.url }].concat(arr).slice(0, 8));
            if (onReceivedFileRef.current)
              onReceivedFileRef.current(peerId, dl.name, blob);
            cleanup(fileId);
          } else if (msg.type === "cancel") {
            cleanup(fileId);
          }
          return;
        }
        sess.chunks.push(ev.data);
        sess.received += ev.data.byteLength || ev.data.size || 0;
      };
      dc.onclose = () => setTimeout(() => cleanup(fileId), 1e3);
      dc.onerror = () => cleanup(fileId);
    };
    const off = bus.on(DK_FILE_RTC_KIND, async (peerId, env) => {
      if (!env || !env.fileId || !env.type)
        return;
      if (Date.now() - (env.ts || Date.now()) > DK_FILE_RTC_SIGNAL_TTL_MS)
        return;
      const fileId = env.fileId;
      let sess = peersRef.current.get(fileId);
      try {
        if (env.type === "offer") {
          if (sess && sess.pc && sess.pc.signalingState !== "closed") {
            console.warn("[file-rtc] duplicate offer ignored for " + fileId);
            return;
          }
          const pc = new RTCPeerConnection({ iceServers: await dkFileIceServers() });
          pc.oniceconnectionstatechange = () => console.warn("[file-rtc] receiver ice=" + pc.iceConnectionState + " conn=" + pc.connectionState);
          pc.onconnectionstatechange = () => console.warn("[file-rtc] receiver conn=" + pc.connectionState + " ice=" + pc.iceConnectionState);
          pc.onicecandidate = (ev) => {
            if (ev.candidate)
              sendSignal(peerId, fileId, "candidate", { candidate: ev.candidate.toJSON() }).catch(() => {
              });
          };
          pc.ondatachannel = (ev) => handleDataChannel(peerId, fileId, pc, ev.channel, env.meta || null);
          peersRef.current.set(fileId, { pc, dc: null, peerId, chunks: [], meta: env.meta || null, pendingCandidates: [] });
          await pc.setRemoteDescription({ type: "offer", sdp: env.sdp });
          sess = peersRef.current.get(fileId);
          if (sess && sess.pendingCandidates) {
            for (const c of sess.pendingCandidates.splice(0)) {
              try {
                await pc.addIceCandidate(c);
              } catch (e) {
              }
            }
          }
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          await sendSignal(peerId, fileId, "answer", { sdp: answer.sdp });
        } else if (env.type === "answer" && sess) {
          if (sess.pc.signalingState !== "have-local-offer") {
            console.warn("[file-rtc] stale answer ignored for " + fileId + " state=" + sess.pc.signalingState);
            return;
          }
          await sess.pc.setRemoteDescription({ type: "answer", sdp: env.sdp });
          if (sess.pendingCandidates) {
            for (const c of sess.pendingCandidates.splice(0)) {
              try {
                await sess.pc.addIceCandidate(c);
              } catch (e) {
              }
            }
          }
        } else if (env.type === "candidate" && sess && env.candidate) {
          if (sess.pc.remoteDescription) {
            try {
              await sess.pc.addIceCandidate(env.candidate);
            } catch (e) {
            }
          } else {
            if (!sess.pendingCandidates)
              sess.pendingCandidates = [];
            sess.pendingCandidates.push(env.candidate);
          }
        } else if (env.type === "bye") {
          cleanup(fileId);
        }
      } catch (e) {
        console.warn("[file-rtc] signal failed", e);
        cleanup(fileId);
      }
    });
    return () => {
      off();
      for (const id of Array.from(peersRef.current.keys()))
        cleanup(id);
    };
  }, [selfId]);
  const sendFile = React.useCallback(async (peerId, file, onProgress) => {
    if (!peerId || !file || !window.RTCPeerConnection || !window.dkRtcSignalBus) {
      return { ok: false, fallback: true, error: "WebRTC unavailable" };
    }
    const bus = dkRtcSignalBus();
    const fileId = dkFileRtcId();
    const pc = new RTCPeerConnection({ iceServers: await dkFileIceServers() });
    const dc = pc.createDataChannel("agentnet-file", { ordered: true });
    const sess = { pc, dc, peerId, chunks: [], meta: null, pendingCandidates: [] };
    peersRef.current.set(fileId, sess);
    const cleanup = () => {
      try {
        dc.close();
      } catch (e) {
      }
      try {
        pc.close();
      } catch (e) {
      }
      peersRef.current.delete(fileId);
    };
    const sendSignal = (type, extra) => bus.send(peerId, dkFileRtcEnvelope(fileId, type, extra));
    try {
      pc.oniceconnectionstatechange = () => console.warn("[file-rtc] sender ice=" + pc.iceConnectionState + " conn=" + pc.connectionState);
      pc.onconnectionstatechange = () => console.warn("[file-rtc] sender conn=" + pc.connectionState + " ice=" + pc.iceConnectionState);
      pc.onicecandidate = (ev) => {
        if (ev.candidate)
          sendSignal("candidate", { candidate: ev.candidate.toJSON() }).catch(() => {
          });
      };
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      await sendSignal("offer", {
        sdp: offer.sdp,
        meta: { name: file.name, size: file.size, mime: file.type || "application/octet-stream" }
      });
      await dkWaitForOpen(dc, DK_FILE_RTC_OPEN_TIMEOUT_MS, () => dkRtcState(pc));
      dc.send(JSON.stringify({ type: "meta", name: file.name, size: file.size, mime: file.type || "application/octet-stream" }));
      let sent = 0;
      const startedAt = Date.now();
      let lastProgressAt = 0;
      const highWater = 4 * 1024 * 1024;
      const reportProgress = (force) => {
        if (!onProgress)
          return;
        const now = Date.now();
        if (!force && now - lastProgressAt < 250 && sent < file.size)
          return;
        lastProgressAt = now;
        const elapsedMs = Math.max(1, now - startedAt);
        const kbps = sent / 1024 / (elapsedMs / 1e3);
        onProgress({
          sent,
          size: file.size,
          pct: file.size ? sent / file.size * 100 : 100,
          kbps,
          elapsedMs,
          via: "webrtc"
        });
      };
      reportProgress(true);
      while (sent < file.size) {
        if (dc.readyState !== "open")
          throw new Error("WebRTC data channel closed");
        const end = Math.min(file.size, sent + DK_FILE_RTC_CHUNK);
        const buf = await file.slice(sent, end).arrayBuffer();
        dc.send(buf);
        sent = end;
        reportProgress(false);
        await dkWaitBufferedLow(dc, highWater);
      }
      reportProgress(true);
      dc.send(JSON.stringify({ type: "done" }));
      await sendSignal("bye", { reason: "done" }).catch(() => {
      });
      setTimeout(cleanup, 1500);
      return { ok: true, via: "webrtc", fileId };
    } catch (e) {
      await sendSignal("bye", { reason: "fallback" }).catch(() => {
      });
      cleanup();
      return { ok: false, fallback: true, error: e && e.message || String(e) };
    }
  }, []);
  const dismissIncoming = React.useCallback((id) => {
    setIncoming((arr) => {
      const item = arr.find((x) => x.id === id);
      if (item && item.url)
        setTimeout(() => URL.revokeObjectURL(item.url), 1e3);
      return arr.filter((x) => x.id !== id);
    });
  }, []);
  return { incoming, sendFile, dismissIncoming };
}
function RtcFileInbox({ T, peers, ctl }) {
  const items = ctl && ctl.incoming || [];
  if (!items.length)
    return null;
  const closeLabel = T && T.receivedClose || "Close";
  const downloadLabel = T && T.downloadFile || "Download";
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", right: 72, bottom: 18, zIndex: 90, width: 360, maxWidth: "calc(100vw - 96px)", display: "flex", flexDirection: "column", gap: 10 } }, items.map((it) => {
    const peer = (peers || []).find((p) => p.id === it.peerId || p.userId === it.peerId) || {};
    const who = peer.alias || peer.name || shortKey(it.peerId, 8, 5);
    return /* @__PURE__ */ React.createElement("div", { key: it.id, style: { border: "1px solid var(--line)", background: "var(--panel)", borderRadius: 12, padding: 12, boxShadow: "0 14px 40px rgba(0,0,0,0.35)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 6 } }, T && T.receivedFile || "Received file", " \xB7 ", who), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 13, fontWeight: 700, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, it.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)", marginTop: 3 } }, dkFileSize(it.size)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 10, paddingRight: 2 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => ctl.dismissIncoming(it.id), style: { height: 30, minWidth: 58, borderRadius: 8, border: "1px solid var(--line)", background: "transparent", color: "var(--dim)", cursor: "pointer" } }, closeLabel), /* @__PURE__ */ React.createElement("a", { href: it.url, download: it.name, onClick: () => setTimeout(() => ctl.dismissIncoming(it.id), 500), style: { height: 30, minWidth: 76, textAlign: "center", borderRadius: 8, padding: "6px 10px", background: "var(--accent)", color: "#fff", textDecoration: "none", fontFamily: "var(--mono)", fontSize: 12 } }, downloadLabel)));
  }));
}
Object.assign(window, { useRtcFileController, RtcFileInbox });
function useCallController(selfId, onCallLog) {
  const [incoming, setIncoming] = React.useState(null);
  const [active, setActive] = React.useState(null);
  const [localStream, setLocalStream] = React.useState(null);
  const [remoteStream, setRemoteStream] = React.useState(null);
  const [sharing, setSharing] = React.useState(false);
  const engineRef = React.useRef(null);
  const onCallLogRef = React.useRef(onCallLog);
  React.useEffect(() => {
    onCallLogRef.current = onCallLog;
  }, [onCallLog]);
  React.useEffect(() => {
    if (!selfId || engineRef.current)
      return;
    if (!window.PeerWebRTC || !window.RTCPeerConnection) {
      console.warn("[call] WebRTC or peer-webrtc unavailable \u2014 calls disabled");
      return;
    }
    dkRtcSignalBus().start();
    let cancelled = false;
    let signaling = null;
    (async () => {
      await dkAwaitCallIceServers(1e4);
      if (cancelled || engineRef.current)
        return;
      if (!DK_LIVE_ICE_SERVERS.length) {
        console.warn("[call] no ICE servers after wait \u2014 calls will likely fail NAT");
      }
      const { CallEngine } = window.PeerWebRTC;
      signaling = makeDaemonSignaling();
      const engine = new CallEngine({
        selfId,
        signaling,
        createPeerConnection: (c) => new RTCPeerConnection(c),
        getLocalMedia: (k) => navigator.mediaDevices.getUserMedia({ audio: k.audio, video: k.video }),
        getDisplayMedia: (c) => navigator.mediaDevices.getDisplayMedia(c || { video: true, audio: false }),
        iceServers: DK_LIVE_ICE_SERVERS,
        logger: (m) => console.log(m)
      });
      if (cancelled) {
        try {
          signaling.stop();
          engine.dispose();
        } catch (e) {
        }
        return;
      }
      engine.on("incomingCall", (info) => {
        const claimedAt = claimedCalls.current.get(String(info.callId).toLowerCase());
        if (claimedAt && Date.now() - claimedAt < 5 * 6e4) {
          try {
            engine.discard && engine.discard(info.callId);
          } catch (e) {
          }
          return;
        }
        setIncoming(info);
        if (onCallLogRef.current)
          onCallLogRef.current(info.peerId, !!info.video, "incoming");
      });
      engine.on("stateChanged", (info, state) => setActive((a) => a && a.callId === info.callId ? { ...a, state } : a));
      engine.on("localStream", (id, s) => {
        setLocalStream(s);
        try {
          setSharing(engine.isSharingScreen(id));
        } catch (e) {
        }
      });
      engine.on("remoteStream", (id, s) => setRemoteStream(s));
      engine.on("ended", (id) => {
        setActive((a) => a && a.callId === id ? null : a);
        setIncoming((i) => i && i.callId === id ? null : i);
        setLocalStream(null);
        setRemoteStream(null);
        setSharing(false);
      });
      engineRef.current = engine;
      console.log("[call] CallEngine ready with ICE:", DK_LIVE_ICE_SERVERS.map((s) => s.urls));
    })().catch((e) => console.warn("[call] engine init failed", e));
    return () => {
      cancelled = true;
      try {
        if (signaling)
          signaling.stop();
        if (engineRef.current)
          engineRef.current.dispose();
      } catch (e) {
      }
      engineRef.current = null;
    };
  }, [selfId]);
  const waitEngine = React.useCallback(async () => {
    for (let i = 0; i < 100; i++) {
      if (engineRef.current)
        return engineRef.current;
      await new Promise((r) => setTimeout(r, 100));
    }
    return null;
  }, []);
  const start = React.useCallback((peerId, video) => {
    setActive({ callId: null, peerId, video: !!video, direction: "outgoing", state: "ringing" });
    if (onCallLogRef.current)
      onCallLogRef.current(peerId, !!video, "outgoing");
    waitEngine().then((eng) => {
      if (!eng)
        throw new Error("Calls unavailable (engine not ready)");
      return eng.call(peerId, { audio: true, video: !!video });
    }).then((callId) => setActive((a) => a && a.peerId === peerId && a.callId === null ? { ...a, callId } : a)).catch((e) => {
      setActive((a) => a && a.peerId === peerId ? null : a);
      alert("Could not start call: " + (e && e.message || e));
    });
  }, [waitEngine]);
  const incomingRef = React.useRef(null);
  React.useEffect(() => {
    incomingRef.current = incoming;
  }, [incoming]);
  const activeRef = React.useRef(null);
  React.useEffect(() => {
    activeRef.current = active;
  }, [active]);
  const claimTabId = React.useRef(Math.random().toString(36).slice(2));
  const claimBus = React.useRef(null);
  const claimedCalls = React.useRef(/* @__PURE__ */ new Map());
  React.useEffect(() => {
    let ch = null;
    try {
      ch = new BroadcastChannel("dk-call-claim");
    } catch (e) {
      return void 0;
    }
    claimBus.current = ch;
    ch.onmessage = (ev) => {
      const m = ev.data || {};
      if (!m || m.tabId === claimTabId.current || m.type !== "claimed")
        return;
      if (m.callId)
        claimedCalls.current.set(String(m.callId).toLowerCase(), Date.now());
      const inc = incomingRef.current;
      if (inc && (inc.callId === m.callId || inc.peerId === m.peerId)) {
        setIncoming(null);
        try {
          engineRef.current && engineRef.current.discard && engineRef.current.discard(inc.callId);
        } catch (e) {
        }
      }
    };
    return () => {
      try {
        ch.close();
      } catch (e) {
      }
      claimBus.current = null;
    };
  }, []);
  const broadcastClaim = React.useCallback((inc, action) => {
    try {
      if (claimBus.current)
        claimBus.current.postMessage({ type: "claimed", tabId: claimTabId.current, callId: inc.callId, peerId: inc.peerId, action });
    } catch (e) {
    }
  }, []);
  const accept = React.useCallback(() => {
    const pending = incomingRef.current;
    if (!pending)
      return;
    broadcastClaim(pending, "accepted");
    setIncoming(null);
    setActive({ callId: pending.callId, peerId: pending.peerId, video: pending.video, direction: "incoming", state: "connecting" });
    waitEngine().then((eng) => {
      if (!eng)
        throw new Error("Calls unavailable (engine not ready)");
      return eng.accept(pending.callId);
    }).catch((e) => alert("Accept failed: " + (e && e.message || e)));
  }, [waitEngine]);
  const reject = React.useCallback(() => {
    const eng = engineRef.current;
    const inc = incomingRef.current;
    if (inc)
      broadcastClaim(inc, "rejected");
    if (eng && inc)
      eng.reject(inc.callId);
    setIncoming(null);
  }, [broadcastClaim]);
  const hangup = React.useCallback(() => {
    const eng = engineRef.current;
    const a = activeRef.current;
    if (eng && a && a.callId)
      eng.hangup(a.callId);
    setActive(null);
    setLocalStream(null);
    setRemoteStream(null);
  }, []);
  const setMuted = React.useCallback((m) => {
    const eng = engineRef.current, a = active;
    if (eng && a && a.callId)
      eng.setLocalTrackEnabled(a.callId, "audio", !m);
  }, [active]);
  const toggleShare = React.useCallback(async () => {
    const eng = engineRef.current, a = active;
    if (!eng || !a || !a.callId)
      return;
    try {
      if (eng.isSharingScreen(a.callId))
        await eng.stopScreenShare(a.callId);
      else
        await eng.shareScreen(a.callId);
    } catch (e) {
      if (e && e.name !== "NotAllowedError")
        alert("Screen share failed: " + (e && e.message || e));
    }
  }, [active]);
  const setVideoOn = React.useCallback((v) => {
    const eng = engineRef.current, a = active;
    if (eng && a && a.callId)
      eng.setLocalTrackEnabled(a.callId, "video", v);
  }, [active]);
  return { incoming, active, localStream, remoteStream, sharing, start, accept, reject, hangup, setMuted, setVideoOn, toggleShare };
}
function VideoSurface({ stream, muted, style }) {
  const ref = React.useCallback((el) => {
    if (el && el.srcObject !== (stream || null))
      el.srcObject = stream || null;
  }, [stream]);
  return /* @__PURE__ */ React.createElement("video", { ref, autoPlay: true, playsInline: true, muted: !!muted, style });
}
function AudioSink({ stream }) {
  const ref = React.useCallback((el) => {
    if (el && el.srcObject !== (stream || null))
      el.srcObject = stream || null;
  }, [stream]);
  return /* @__PURE__ */ React.createElement("audio", { ref, autoPlay: true });
}
function useRingtone(active) {
  React.useEffect(() => {
    if (!active)
      return void 0;
    let ctx;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return void 0;
    }
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {
      });
    }
    let stopped = false;
    const timers = [];
    const stop = () => {
      if (stopped)
        return;
      stopped = true;
      timers.forEach(clearTimeout);
      try {
        ctx.close();
      } catch (e) {
      }
    };
    const burst = () => {
      if (stopped || ctx.state === "closed")
        return;
      [440, 480].forEach((f) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = f;
        o.connect(g);
        g.connect(ctx.destination);
        const t = ctx.currentTime;
        g.gain.setValueAtTime(1e-4, t);
        g.gain.exponentialRampToValueAtTime(0.12, t + 0.05);
        g.gain.setValueAtTime(0.12, t + 0.9);
        g.gain.exponentialRampToValueAtTime(1e-4, t + 1);
        o.start(t);
        o.stop(t + 1.05);
      });
      timers.push(setTimeout(burst, 3e3));
    };
    burst();
    window.addEventListener("pagehide", stop);
    window.addEventListener("beforeunload", stop);
    return () => {
      window.removeEventListener("pagehide", stop);
      window.removeEventListener("beforeunload", stop);
      stop();
    };
  }, [active]);
}
function IncomingCallModal({ T, ctl, peers }) {
  const inc = ctl.incoming;
  useRingtone(!!inc);
  if (!inc)
    return null;
  const peer = (peers || []).find((p) => p.id === inc.peerId) || { id: inc.peerId };
  const name = peer.alias || peer.name || shortKey(inc.peerId, 10, 6);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: 80, background: "color-mix(in oklab, var(--bg), transparent 15%)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 320, padding: 26, borderRadius: 18, background: "var(--panel)", border: "1px solid var(--line)", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", width: 96, height: 96, borderRadius: 999, border: "2px solid var(--accent)", animation: "dkpulse 2s ease-out infinite" } }), /* @__PURE__ */ React.createElement(DkIdenticon, { seed: inc.peerId, size: 72, radius: 18 })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 17, fontWeight: 700, color: "var(--text)" } }, name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--faint)", marginTop: 4, display: "flex", gap: 6, alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: inc.video ? "video" : "phone", size: 14, stroke: 2 }), T && (inc.video ? T.incomingVideo : T.incomingAudio) || "Incoming " + (inc.video ? "video" : "audio") + " call"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, justifyContent: "center", marginTop: 22 } }, /* @__PURE__ */ React.createElement(CallBtn, { icon: "phone", label: T && T.decline || "Decline", danger: true, onClick: ctl.reject }), /* @__PURE__ */ React.createElement(CallBtn, { icon: inc.video ? "video" : "phone", label: T && T.accept || "Accept", active: true, onClick: ctl.accept }))));
}
function CallBtn({ icon, label, onClick, active, danger, wide }) {
  const bg = danger ? "var(--danger)" : active ? "var(--accent)" : "var(--chip)";
  const fg = danger || active ? "#fff" : "var(--text)";
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick, style: {
    width: wide ? 76 : 56,
    height: 56,
    borderRadius: wide ? 18 : 999,
    cursor: "pointer",
    background: bg,
    color: fg,
    border: "1px solid " + (active || danger ? "transparent" : "var(--line)"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 22, stroke: 2 })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--faint)" } }, label));
}
function CallOverlay({ T, ctl, peers }) {
  const call = ctl.active;
  const [secs, setSecs] = React.useState(0);
  const [muted, setMuted] = React.useState(false);
  const [featured, setFeatured] = React.useState("remote");
  const connected = call && call.state === "connected";
  React.useEffect(() => {
    if (!connected)
      return;
    const id = setInterval(() => setSecs((s) => s + 1), 1e3);
    return () => clearInterval(id);
  }, [connected]);
  React.useEffect(() => {
    if (!call) {
      setSecs(0);
      setMuted(false);
    }
  }, [call]);
  if (!call)
    return null;
  const peer = (peers || []).find((p) => p.id === call.peerId) || { id: call.peerId };
  const name = peer.alias || peer.name || shortKey(call.peerId, 10, 6);
  const streamHasVideo = (s) => !!(s && s.getVideoTracks && s.getVideoTracks().length > 0);
  const video = call.video || ctl.sharing || streamHasVideo(ctl.remoteStream) || streamHasVideo(ctl.localStream);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  const stateLabel = connected ? mm + ":" + ss : call.state === "ringing" ? T && T.ringing || "ringing\u2026" : call.state === "connecting" ? T && T.connecting || "connecting\u2026" : call.state;
  const toggleMute = () => {
    const n = !muted;
    setMuted(n);
    ctl.setMuted(n);
  };
  const canShare = connected && typeof navigator !== "undefined" && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia;
  const controls = /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement(CallBtn, { icon: muted ? "micFill" : "mic", label: muted ? T && T.unmute || "unmute" : T && T.mute || "mute", active: muted, onClick: toggleMute }), canShare && /* @__PURE__ */ React.createElement(CallBtn, { icon: "monitor", label: ctl.sharing ? T && T.stopShare || "stop share" : T && T.share || "share", active: ctl.sharing, onClick: ctl.toggleShare }), /* @__PURE__ */ React.createElement(CallBtn, { icon: "phone", label: T && T.endCall || "end", danger: true, wide: true, onClick: ctl.hangup }));
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: 70, background: "var(--bg)", display: "flex", flexDirection: "column" } }, ctl.remoteStream && /* @__PURE__ */ React.createElement(AudioSink, { stream: ctl.remoteStream }), /* @__PURE__ */ React.createElement("div", { style: { height: 52, flexShrink: 0, display: "flex", alignItems: "center", gap: 10, padding: "0 18px", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement(Icon, { name: video ? "video" : "phone", size: 16, color: "var(--accent)", stroke: 2 }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 13, fontWeight: 700, color: "var(--text)" } }, name), /* @__PURE__ */ React.createElement(Tag, { tone: connected ? "ok" : "warn" }, stateLabel), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), connected && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 14, fontWeight: 700, color: "var(--text)", letterSpacing: 1 } }, mm, ":", ss)), video ? (() => {
    const tiles = [
      { key: "remote", stream: ctl.remoteStream, label: name, mirror: false },
      { key: "local", stream: ctl.localStream, label: ctl.sharing ? T && T.yourScreen || "Your screen" : T && T.you || "You", mirror: !ctl.sharing }
    ].filter((t) => streamHasVideo(t.stream));
    const feat = tiles.find((t) => t.key === featured) || tiles[0] || { key: "remote", stream: ctl.remoteStream, label: name };
    const others = tiles.filter((t) => t.key !== feat.key);
    return (
      // The thumbnail strip and the controls FLOAT over the video instead of
      // stacking under it. A phone camera is 9:16, so the featured tile is
      // height-limited — `object-fit: contain` already shows the whole frame,
      // but every pixel of chrome below the video shrinks the only dimension
      // that matters. Stacked, those two rows ate ~210px; in a 900px-tall
      // window that is a third of the portrait image. Overlaying them is also
      // what every other call app does.
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, position: "relative", padding: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", position: "relative", borderRadius: 14, overflow: "hidden", background: "#000", border: "1px solid var(--line)" } }, feat.stream ? /* @__PURE__ */ React.createElement(VideoSurface, { stream: feat.stream, muted: true, style: { width: "100%", height: "100%", objectFit: "contain", transform: feat.mirror ? "scaleX(-1)" : "none" } }) : /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(DkIdenticon, { seed: call.peerId, size: 92, radius: 22 })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 14, top: 12, padding: "4px 10px", borderRadius: 8, background: "rgba(0,0,0,.55)", color: "#fff", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 600 } }, feat.label), /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        background: "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,0))",
        pointerEvents: "none"
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: 16, pointerEvents: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 26px", borderRadius: 20, background: "color-mix(in oklab, var(--panel), transparent 8%)", border: "1px solid var(--line)" } }, controls))), others.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 16, bottom: 16, display: "flex", flexDirection: "column", gap: 10 } }, others.map((t) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: t.key,
          onClick: () => setFeatured(t.key),
          title: `Show ${t.label}`,
          style: {
            position: "relative",
            width: 150,
            height: 96,
            borderRadius: 10,
            overflow: "hidden",
            background: "#000",
            cursor: "pointer",
            padding: 0,
            border: "1px solid var(--line)",
            boxShadow: "0 4px 18px rgba(0,0,0,.45)"
          }
        },
        /* @__PURE__ */ React.createElement(VideoSurface, { stream: t.stream, muted: true, style: { width: "100%", height: "100%", objectFit: "contain", transform: t.mirror ? "scaleX(-1)" : "none" } }),
        /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 6, bottom: 5, padding: "2px 6px", borderRadius: 6, background: "rgba(0,0,0,.6)", color: "#fff", fontSize: 10, fontFamily: "var(--mono)" } }, t.label)
      )))))
    );
  })() : /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center" } }, !connected && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", width: 150, height: 150, borderRadius: 999, border: "2px solid var(--accent)", animation: "dkpulse 2s ease-out infinite" } }), /* @__PURE__ */ React.createElement(DkIdenticon, { seed: call.peerId, size: 108, radius: 26 })), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 22, fontWeight: 700, color: "var(--text)" } }, name), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--faint)" } }, stateLabel)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, controls)));
}
Object.assign(window, { useCallController, CallOverlay, IncomingCallModal });
function dkParseDeepLinkAddress() {
  try {
    const h = window.location.hash || "";
    const qi = h.indexOf("?");
    if (qi >= 0) {
      const a = new URLSearchParams(h.slice(qi + 1)).get("address");
      if (a && a.trim())
        return a.trim();
    }
    const a2 = new URLSearchParams(window.location.search || "").get("address");
    if (a2 && a2.trim())
      return a2.trim();
  } catch (e) {
  }
  return "";
}
const DK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "theme": "dark",
    "accent": "#7B6CF6",
    "density": "compact",
    "lang": "en",
    "startTab": "chat"
  }
);
function dkDetectLang() {
  try {
    const tags = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (const tag of tags) {
      const l = String(tag).toLowerCase();
      if (l.startsWith("zh"))
        return "zh";
      if (l.startsWith("en"))
        return "en";
    }
  } catch (e) {
  }
  return "en";
}
function dkTheme(theme, accent) {
  const base = {
    "--ui": "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
    "--mono": "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
    "--accent": accent
  };
  if (theme === "light")
    return {
      ...base,
      "--ident-l": "0.92",
      "--bg": "oklch(0.965 0.004 264)",
      "--panel": "#ffffff",
      "--panel-2": "oklch(0.975 0.004 264)",
      "--line": "oklch(0.9 0.006 264)",
      "--text": "oklch(0.26 0.013 264)",
      "--dim": "oklch(0.5 0.013 264)",
      "--faint": "oklch(0.62 0.011 264)",
      "--chip": "oklch(0.945 0.006 264)",
      "--online": "oklch(0.62 0.16 150)",
      "--off": "oklch(0.8 0.01 264)",
      "--warn": "oklch(0.66 0.15 60)",
      "--danger": "oklch(0.58 0.21 25)",
      "--bub-me": accent,
      "--bub-them": "oklch(0.97 0.004 264)",
      "--rail": "oklch(0.99 0.003 264)"
    };
  return {
    ...base,
    "--ident-l": "0.32",
    "--bg": "oklch(0.165 0.012 264)",
    "--panel": "oklch(0.205 0.013 264)",
    "--panel-2": "oklch(0.235 0.014 264)",
    "--line": "oklch(0.295 0.014 264)",
    "--text": "oklch(0.93 0.008 264)",
    "--dim": "oklch(0.68 0.012 264)",
    "--faint": "oklch(0.52 0.013 264)",
    "--chip": "oklch(0.27 0.014 264)",
    "--online": "oklch(0.78 0.17 150)",
    "--off": "oklch(0.42 0.01 264)",
    "--warn": "oklch(0.78 0.15 70)",
    "--danger": "oklch(0.68 0.2 22)",
    "--bub-me": accent,
    "--bub-them": "oklch(0.255 0.014 264)",
    "--rail": "oklch(0.185 0.013 264)"
  };
}
const STR = {
  en: {
    chat: "Chat",
    network: "Network",
    profile: "Profile",
    recommended: "Discover",
    registered: "Names",
    dirAdd: "Add",
    dirSent: "requested",
    dirOpenChat: "chat",
    dirMe: "me",
    dirSearch: "search name / userid\u2026",
    dirLoading: "loading directory\u2026",
    dirEmpty: "nobody matches",
    dirError: "Could not load the directory:",
    addPlaceholder: "carrier address or name.beagles.eth\u2026",
    add: "Add",
    search: "search peers / ip\u2026",
    addSending: "sending friend-request\u2026",
    addSent: "friend-request sent \u2014 delivered when they\u2019re online; appears here once they accept",
    addFailed: "could not send",
    requests: "Friend requests",
    accept: "accept",
    reject: "reject",
    peers: "Peers",
    call: "Voice call",
    alias: "Set alias",
    sendFile: "Send file",
    sendWebrtcFile: "Send file via WebRTC",
    block: "Block peer",
    remove: "Remove friend",
    receivedFile: "Received file",
    receivedClose: "Close",
    downloadFile: "Download",
    attach: "Attach file",
    message: "Message",
    send: "Send",
    pickPeer: "Select a peer to open the conversation",
    queued: "queued",
    sendingMsg: "sending",
    groupTag: "group",
    open: "open",
    retry: "Retry",
    cancel: "Cancel",
    friendsSettings: "Friends",
    autoAcceptLabel: "Auto-accept friend requests",
    autoAcceptSub: "Off: requests wait in the sidebar for your approval.",
    groupSenderUnknown: "The group relays only this display name. Register Beagle as a group agent (/agent add <beagle address> in the group) to receive full member identities you can add as friends.",
    pendingFriend: "Waiting for them to accept your friend request \u2014 messages will queue and deliver once they do.",
    cancelling: "Cancelling\u2026",
    cancelled: "Transfer cancelled",
    retrying: "Retrying\u2026",
    retried: "Transfer restarted",
    cancelFailed: "Cancel failed",
    retryFailed: "Retry failed",
    cancelMissing: "No active transfer was found. Refresh and try again.",
    retryMissing: "No retryable transfer or original file is unavailable.",
    myIp: "my ip",
    copyAddr: "copy address",
    peersOnline: "peers online",
    direct: "direct (LAN)",
    activeEgress: "active egress",
    directEgress: "direct",
    noProxy: "no proxy",
    wireLabel: "wire",
    lossless: "lossless",
    reqs: "requests",
    pending: "pending inbound",
    peerRouting: "Peer routing",
    colPeer: "peer",
    colVip: "virtual ip",
    colPath: "path",
    colWire: "wire",
    openChat: "Open chat",
    ping: "Ping",
    exitNodes: "Exit nodes",
    addExit: "add exit",
    up: "up",
    routing: "routing",
    routeThru: "route",
    egressVia: "all egress routed via",
    stopRouting: "stop",
    identity: "Identity",
    userId: "user id",
    carrierAddr: "carrier address",
    netKey: "network key",
    ensCard: "Name \xB7 beagles.eth",
    ensName: "name",
    ensPlaceholder: "yourname",
    ensRegister: "register",
    ensUpdate: "update",
    ensDone: "saved",
    ensEth: "ethereum",
    ensSol: "solana",
    ensBind: "bind",
    ensUnbind: "unbind",
    ensNotBound: "not bound",
    ensAvatar: "avatar",
    ensChoose: "choose",
    ensClear: "clear",
    ensNotSet: "not set",
    ensUpload: "upload",
    ensCustom: "custom image",
    ensTooBig: "image too large even after scaling",
    ensBadImage: "cannot read that image",
    ensPickPunk: "choose a punk",
    ensShuffle: "shuffle",
    pt_any: "any",
    pt_female: "female",
    pt_male: "male",
    pt_zombie: "zombie",
    pt_ape: "ape",
    pt_alien: "alien",
    linksCard: "Links",
    linkPlaceholder: "username or profile URL",
    save: "save",
    addr: "address",
    nameCard: "name card",
    pubMessage: "Message",
    pubRecommend: "Recommend",
    pubRecTitle: "send this card to\u2026",
    pubRecSent: "sent \u2713",
    updTitle: "Update available",
    updLater: "Later",
    updNow: "Update now",
    updRestart: "Restart",
    updBusy: "Updating\u2026 (about a minute)",
    updDone: "Updated \u2014 restart to apply.",
    updRestarting: "Restarting\u2026 this page reloads when it\u2019s back. (If beagle was started by hand in a terminal, run it again.)",
    updNpx: "Running via npx \u2014 restarting picks up the latest version automatically.",
    updDev: "Running from a source checkout \u2014 update with:",
    updLanNote: "agentnet (lan): one click reinstalls it and asks the running daemon to restart itself. Manual equivalent:",
    updCheck: "check for updates",
    updCheckLabel: "updates",
    updLatest: "up to date \u2713",
    updLanNow: "Update lan",
    updManualHint: "Run it in a terminal, then click Restart to apply.",
    updLanDone: "lan updated \u2014 daemon restarted with the new version \u2713",
    updLanNoRestart: "lan updated, but the daemon was not running (or refused) \u2014 the new version applies on its next start.",
    pubOpen: "View public profile",
    pubNone: "No public profile \u2014 this user has not registered a beagles.eth name.",
    ensNoEthWallet: "no Ethereum wallet extension found (MetaMask\u2026)",
    ensNoSolWallet: "no Solana wallet extension found (Phantom\u2026)",
    ensWalletOwned: "registered via your mobile wallet as",
    virtualIp: "virtual ip",
    version: "version",
    editProfile: "edit",
    verApp: "app",
    verDaemon: "daemon",
    verChannel: "channel",
    verInstalledHint: "installed on disk \u2014 restart the daemon so it can report what it is actually running",
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Copy failed",
    needProfile: "Set your name first \u2014 a friend request with no name is just a key.",
    dangerZone: "Danger zone",
    deleteNode: "Delete this node",
    deleteSub: "Permanently remove identity & keys from this device",
    delete: "delete",
    settings: "Settings",
    call: "Call",
    connected: "connected",
    mute: "mute",
    unmute: "unmute",
    speaker: "speaker",
    toVideo: "video",
    audioOnly: "audio",
    endCall: "end",
    you: "you",
    meeting: "Meeting",
    meetingRooms: "Meeting rooms",
    nextVersion: "next version",
    createRoom: "New room",
    meetingDesc: "Spin up audio & video rooms across servers and invite peers by virtual IP. Group calls, screen share, and shared exit routing land in the next release."
  },
  zh: {
    chat: "\u804A\u5929",
    network: "\u7F51\u7EDC",
    profile: "\u6211\u7684",
    recommended: "\u63A8\u8350",
    registered: "\u540D\u5F55",
    dirAdd: "\u52A0\u597D\u53CB",
    dirSent: "\u5DF2\u8BF7\u6C42",
    dirOpenChat: "\u4F1A\u8BDD",
    dirMe: "\u6211",
    dirSearch: "\u641C\u7D22\u540D\u5B57 / userid\u2026",
    dirLoading: "\u6B63\u5728\u52A0\u8F7D\u540D\u5355\u2026",
    dirEmpty: "\u6CA1\u6709\u5339\u914D\u7684\u4EBA",
    dirError: "\u540D\u5355\u52A0\u8F7D\u5931\u8D25\uFF1A",
    addPlaceholder: "carrier \u5730\u5740\u6216 \u540D\u5B57.beagles.eth\u2026",
    add: "\u6DFB\u52A0",
    search: "\u641C\u7D22\u597D\u53CB / IP\u2026",
    addSending: "\u6B63\u5728\u53D1\u9001\u597D\u53CB\u8BF7\u6C42\u2026",
    addSent: "\u597D\u53CB\u8BF7\u6C42\u5DF2\u53D1\u9001 \u2014 \u5BF9\u65B9\u4E0A\u7EBF\u540E\u9001\u8FBE\uFF0C\u63A5\u53D7\u540E\u51FA\u73B0\u5728\u5217\u8868",
    addFailed: "\u53D1\u9001\u5931\u8D25",
    requests: "\u597D\u53CB\u8BF7\u6C42",
    accept: "\u63A5\u53D7",
    reject: "\u62D2\u7EDD",
    peers: "\u597D\u53CB",
    call: "\u8BED\u97F3\u901A\u8BDD",
    alias: "\u8BBE\u7F6E\u5907\u6CE8",
    sendFile: "\u53D1\u9001\u6587\u4EF6",
    sendWebrtcFile: "\u901A\u8FC7 WebRTC \u53D1\u9001\u6587\u4EF6",
    block: "\u62C9\u9ED1",
    remove: "\u5220\u9664\u597D\u53CB",
    receivedFile: "\u6536\u5230\u6587\u4EF6",
    receivedClose: "\u5173\u95ED",
    downloadFile: "\u4E0B\u8F7D",
    attach: "\u9644\u4EF6",
    message: "\u6D88\u606F",
    send: "\u53D1\u9001",
    pickPeer: "\u9009\u62E9\u4E00\u4F4D\u597D\u53CB\u5F00\u59CB\u4F1A\u8BDD",
    queued: "\u5F85\u53D1\u9001",
    sendingMsg: "\u53D1\u9001\u4E2D",
    groupTag: "\u7FA4",
    open: "\u6253\u5F00",
    retry: "\u91CD\u8BD5",
    cancel: "\u53D6\u6D88",
    friendsSettings: "\u597D\u53CB",
    autoAcceptLabel: "\u81EA\u52A8\u63A5\u53D7\u597D\u53CB\u8BF7\u6C42",
    autoAcceptSub: "\u5173\u95ED\u540E\uFF0C\u597D\u53CB\u8BF7\u6C42\u4F1A\u7B49\u5F85\u4F60\u5728\u4FA7\u8FB9\u680F\u624B\u52A8\u786E\u8BA4\u3002",
    groupSenderUnknown: "\u7FA4\u670D\u52A1\u53EA\u8F6C\u53D1\u4E86\u663E\u793A\u540D\uFF0C\u62FF\u4E0D\u5230\u8BE5\u6210\u5458\u7684\u5B8C\u6574\u8EAB\u4EFD\u3002\u5728\u7FA4\u91CC\u6267\u884C /agent add <beagle \u5730\u5740> \u628A Beagle \u6CE8\u518C\u4E3A\u7FA4 agent \u540E\uFF0C\u5373\u53EF\u6536\u5230\u5B8C\u6574\u8EAB\u4EFD\u5E76\u4E00\u952E\u52A0\u597D\u53CB\u3002",
    pendingFriend: "\u7B49\u5F85\u5BF9\u65B9\u63A5\u53D7\u597D\u53CB\u8BF7\u6C42 \u2014 \u6D88\u606F\u4F1A\u5148\u6392\u961F\uFF0C\u5BF9\u65B9\u63A5\u53D7\u540E\u81EA\u52A8\u9001\u8FBE\u3002",
    cancelling: "\u6B63\u5728\u53D6\u6D88\u2026",
    cancelled: "\u5DF2\u53D6\u6D88\u4F20\u8F93",
    retrying: "\u6B63\u5728\u91CD\u8BD5\u2026",
    retried: "\u5DF2\u91CD\u65B0\u5F00\u59CB\u4F20\u8F93",
    cancelFailed: "\u53D6\u6D88\u5931\u8D25",
    retryFailed: "\u91CD\u8BD5\u5931\u8D25",
    cancelMissing: "\u6CA1\u6709\u627E\u5230\u6B63\u5728\u8FDB\u884C\u7684\u4F20\u8F93\uFF1B\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002",
    retryMissing: "\u6CA1\u6709\u53EF\u91CD\u8BD5\u7684\u4F20\u8F93\uFF0C\u6216\u539F\u6587\u4EF6\u5DF2\u4E0D\u53EF\u7528\u3002",
    myIp: "\u6211\u7684 IP",
    copyAddr: "\u590D\u5236\u5730\u5740",
    peersOnline: "\u5728\u7EBF\u597D\u53CB",
    direct: "\u76F4\u8FDE (\u5C40\u57DF\u7F51)",
    activeEgress: "\u5F53\u524D\u51FA\u53E3",
    directEgress: "\u76F4\u8FDE",
    noProxy: "\u65E0\u4EE3\u7406",
    wireLabel: "\u534F\u8BAE",
    lossless: "\u65E0\u635F",
    reqs: "\u8BF7\u6C42",
    pending: "\u5F85\u5904\u7406",
    peerRouting: "\u8282\u70B9\u8DEF\u7531",
    colPeer: "\u597D\u53CB",
    colVip: "\u865A\u62DF IP",
    colPath: "\u8DEF\u5F84",
    colWire: "\u534F\u8BAE",
    openChat: "\u6253\u5F00\u804A\u5929",
    ping: "Ping",
    exitNodes: "\u51FA\u53E3\u8282\u70B9",
    addExit: "\u6DFB\u52A0\u51FA\u53E3",
    up: "\u5728\u7EBF",
    routing: "\u4F7F\u7528\u4E2D",
    routeThru: "\u8DEF\u7531",
    egressVia: "\u5168\u90E8\u51FA\u53E3\u6D41\u91CF\u7ECF\u7531",
    stopRouting: "\u505C\u6B62",
    identity: "\u8EAB\u4EFD",
    userId: "\u7528\u6237 ID",
    carrierAddr: "Carrier \u5730\u5740",
    netKey: "\u7F51\u7EDC\u516C\u94A5",
    ensCard: "\u540D\u5B57 \xB7 beagles.eth",
    ensName: "\u540D\u5B57",
    ensPlaceholder: "\u4F60\u7684\u540D\u5B57",
    ensRegister: "\u6CE8\u518C",
    ensUpdate: "\u66F4\u65B0",
    ensDone: "\u5DF2\u4FDD\u5B58",
    ensEth: "ethereum",
    ensSol: "solana",
    ensBind: "\u7ED1\u5B9A",
    ensUnbind: "\u89E3\u7ED1",
    ensNotBound: "\u672A\u7ED1\u5B9A",
    ensAvatar: "\u5934\u50CF",
    ensChoose: "\u9009\u62E9",
    ensClear: "\u6E05\u9664",
    ensNotSet: "\u672A\u8BBE\u7F6E",
    ensUpload: "\u4E0A\u4F20",
    ensCustom: "\u81EA\u5B9A\u4E49\u56FE\u7247",
    ensTooBig: "\u56FE\u7247\u538B\u7F29\u540E\u4ECD\u8D85\u8FC7 100KB",
    ensBadImage: "\u65E0\u6CD5\u8BFB\u53D6\u8BE5\u56FE\u7247",
    ensPickPunk: "\u9009\u4E00\u4E2A punk",
    ensShuffle: "\u6362\u4E00\u6279",
    pt_any: "\u5168\u90E8",
    pt_female: "\u5973",
    pt_male: "\u7537",
    pt_zombie: "\u50F5\u5C38",
    pt_ape: "\u733F",
    pt_alien: "\u5916\u661F\u4EBA",
    linksCard: "\u793E\u4EA4\u8D26\u53F7",
    linkPlaceholder: "\u7528\u6237\u540D\u6216\u4E3B\u9875\u94FE\u63A5",
    save: "\u4FDD\u5B58",
    addr: "\u5730\u5740",
    nameCard: "\u540D\u7247",
    pubMessage: "\u53D1\u6D88\u606F",
    pubRecommend: "\u63A8\u8350",
    pubRecTitle: "\u628A\u540D\u7247\u53D1\u9001\u7ED9\u2026",
    pubRecSent: "\u5DF2\u53D1\u9001 \u2713",
    updTitle: "\u53D1\u73B0\u65B0\u7248\u672C",
    updLater: "\u7A0D\u540E",
    updNow: "\u7ACB\u5373\u66F4\u65B0",
    updRestart: "\u91CD\u542F",
    updBusy: "\u66F4\u65B0\u4E2D\u2026(\u7EA6\u4E00\u5206\u949F)",
    updDone: "\u66F4\u65B0\u5B8C\u6210\u2014\u2014\u91CD\u542F\u540E\u751F\u6548\u3002",
    updRestarting: "\u6B63\u5728\u91CD\u542F\u2026\u5B8C\u6210\u540E\u672C\u9875\u4F1A\u81EA\u52A8\u5237\u65B0\u3002(\u5982\u679C beagle \u662F\u5728\u7EC8\u7AEF\u91CC\u624B\u52A8\u542F\u52A8\u7684,\u8BF7\u91CD\u65B0\u8FD0\u884C\u4E00\u6B21\u3002)",
    updNpx: "\u4F60\u662F\u7528 npx \u8FD0\u884C\u7684\u2014\u2014\u91CD\u542F\u5373\u81EA\u52A8\u83B7\u53D6\u6700\u65B0\u7248\u3002",
    updDev: "\u5F53\u524D\u4ECE\u6E90\u7801\u76EE\u5F55\u8FD0\u884C,\u8BF7\u624B\u52A8\u66F4\u65B0:",
    updLanNote: "agentnet(lan):\u4E00\u952E\u91CD\u88C5\u5E76\u8BA9\u8FD0\u884C\u4E2D\u7684 daemon \u81EA\u6211\u91CD\u542F\u3002\u7B49\u4EF7\u624B\u52A8\u547D\u4EE4:",
    updCheck: "\u68C0\u67E5\u66F4\u65B0",
    updCheckLabel: "\u66F4\u65B0",
    updLatest: "\u5DF2\u662F\u6700\u65B0\u7248\u672C \u2713",
    updLanNow: "\u66F4\u65B0 lan",
    updManualHint: "\u5728\u7EC8\u7AEF\u91CC\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4,\u5B8C\u6210\u540E\u70B9\u300C\u91CD\u542F\u300D\u751F\u6548\u3002",
    updLanDone: "lan \u5DF2\u66F4\u65B0\u2014\u2014daemon \u5DF2\u7528\u65B0\u7248\u91CD\u542F \u2713",
    updLanNoRestart: "lan \u5DF2\u66F4\u65B0,\u4F46 daemon \u672A\u5728\u8FD0\u884C(\u6216\u91CD\u542F\u88AB\u62D2)\u2014\u2014\u4E0B\u6B21\u542F\u52A8\u65F6\u751F\u6548\u3002",
    pubOpen: "\u67E5\u770B\u516C\u5F00\u8D44\u6599",
    pubNone: "\u6682\u65E0\u516C\u5F00\u8D44\u6599\u2014\u2014\u5BF9\u65B9\u8FD8\u6CA1\u6709\u6CE8\u518C beagles.eth \u540D\u5B57\u3002",
    ensNoEthWallet: "\u672A\u68C0\u6D4B\u5230\u4EE5\u592A\u574A\u94B1\u5305\u63D2\u4EF6(MetaMask \u7B49)",
    ensNoSolWallet: "\u672A\u68C0\u6D4B\u5230 Solana \u94B1\u5305\u63D2\u4EF6(Phantom \u7B49)",
    ensWalletOwned: "\u5DF2\u901A\u8FC7\u624B\u673A\u94B1\u5305\u6CE8\u518C\u4E3A",
    virtualIp: "\u865A\u62DF IP",
    version: "\u7248\u672C",
    editProfile: "\u7F16\u8F91",
    verApp: "\u5E94\u7528",
    verDaemon: "\u5B88\u62A4\u8FDB\u7A0B",
    verChannel: "\u901A\u9053",
    verInstalledHint: "\u8FD9\u662F\u78C1\u76D8\u4E0A\u5DF2\u5B89\u88C5\u7684\u7248\u672C\uFF1B\u91CD\u542F\u5B88\u62A4\u8FDB\u7A0B\u540E\u624D\u80FD\u663E\u793A\u5B83\u771F\u6B63\u8FD0\u884C\u7684\u7248\u672C",
    copy: "\u590D\u5236",
    copied: "\u5DF2\u590D\u5236",
    copyFailed: "\u590D\u5236\u5931\u8D25",
    needProfile: "\u5148\u8BBE\u7F6E\u6635\u79F0 \u2014\u2014 \u6CA1\u6709\u540D\u5B57\u7684\u597D\u53CB\u8BF7\u6C42\u5C31\u53EA\u662F\u4E00\u4E32\u5BC6\u94A5\u3002",
    dangerZone: "\u5371\u9669\u64CD\u4F5C",
    deleteNode: "\u5220\u9664\u6B64\u8282\u70B9",
    deleteSub: "\u4ECE\u672C\u8BBE\u5907\u6C38\u4E45\u79FB\u9664\u8EAB\u4EFD\u4E0E\u5BC6\u94A5",
    delete: "\u5220\u9664",
    settings: "\u8BBE\u7F6E",
    call: "\u901A\u8BDD",
    connected: "\u5DF2\u8FDE\u63A5",
    mute: "\u9759\u97F3",
    unmute: "\u53D6\u6D88\u9759\u97F3",
    speaker: "\u626C\u58F0\u5668",
    toVideo: "\u89C6\u9891",
    audioOnly: "\u8BED\u97F3",
    endCall: "\u6302\u65AD",
    you: "\u6211",
    meeting: "\u4F1A\u8BAE",
    meetingRooms: "\u4F1A\u8BAE\u623F\u95F4",
    nextVersion: "\u4E0B\u4E2A\u7248\u672C",
    createRoom: "\u65B0\u5EFA\u623F\u95F4",
    meetingDesc: "\u8DE8\u670D\u52A1\u5668\u521B\u5EFA\u97F3\u89C6\u9891\u623F\u95F4\uFF0C\u901A\u8FC7\u865A\u62DF IP \u9080\u8BF7\u597D\u53CB\u3002\u7FA4\u7EC4\u901A\u8BDD\u3001\u5C4F\u5E55\u5171\u4EAB\u4E0E\u5171\u4EAB\u51FA\u53E3\u8DEF\u7531\u5C06\u5728\u4E0B\u4E2A\u7248\u672C\u4E0A\u7EBF\u3002"
  }
};
function RailBtn({ icon, label, active, soon, onClick }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, title: label, style: {
    width: 52,
    height: 52,
    borderRadius: 11,
    cursor: "pointer",
    fontFamily: "var(--mono)",
    position: "relative",
    border: "1px solid " + (active ? "var(--line)" : "transparent"),
    background: active ? "var(--panel-2)" : "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 3
  } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20, stroke: active ? 2.1 : 1.8, color: active ? "var(--accent)" : "var(--dim)" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, fontWeight: 600, letterSpacing: 0.2, color: active ? "var(--accent)" : "var(--faint)" } }, label), soon && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: 5, right: 6, width: 6, height: 6, borderRadius: 999, background: "var(--warn)" } }));
}
function DkUpdateModal({ T, info, onClose }) {
  const [phase, setPhase] = React.useState("idle");
  const [err, setErr] = React.useState(null);
  const behind = (info.updates || []).filter((u) => u.behind);
  const appBehind = behind.some((u) => u.pkg !== "@decentnetwork/lan");
  const lanBehind = behind.find((u) => u.pkg === "@decentnetwork/lan");
  const short = (pkg) => pkg.replace("@decentnetwork/", "");
  const doUpdate = () => {
    setPhase("running");
    setErr(null);
    fetch("/api/update-run", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }).then((r) => r.json()).then((d) => {
      if (d.ok)
        setPhase("done");
      else {
        setPhase("error");
        setErr(d.error || "update failed");
      }
    }).catch((e) => {
      setPhase("error");
      setErr(String(e && e.message || e));
    });
  };
  const doLanUpdate = () => {
    setPhase("running");
    setErr(null);
    fetch("/api/update-run", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ pkg: "lan" }) }).then((r) => r.json()).then((d) => {
      if (d.ok)
        setPhase(d.restarted ? "lan-done" : "lan-norestart");
      else {
        setPhase("error");
        setErr(d.error || "update failed");
      }
    }).catch((e) => {
      setPhase("error");
      setErr(String(e && e.message || e));
    });
  };
  const doRestart = () => {
    setPhase("restarting");
    fetch("/api/update-restart", { method: "POST" }).catch(() => {
    });
    const poll = setInterval(() => {
      fetch("/api/update-check").then((r) => {
        if (r.ok) {
          clearInterval(poll);
          window.location.reload();
        }
      }).catch(() => {
      });
    }, 1500);
  };
  const btn = (label, onClick, tone) => /* @__PURE__ */ React.createElement("button", { onClick, style: {
    padding: "7px 14px",
    borderRadius: 9,
    cursor: "pointer",
    fontFamily: "var(--ui)",
    fontSize: 12.5,
    border: tone ? "none" : "1px solid var(--line)",
    background: tone ? "var(--accent)" : "transparent",
    color: tone ? "#fff" : "var(--text)"
  } }, label);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: 95, background: "color-mix(in oklab, #000, transparent 38%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 430, maxWidth: "94vw", background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 16, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 13.5, fontWeight: 700, color: "var(--text)" } }, T.updTitle || "Update available"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, behind.map((u) => /* @__PURE__ */ React.createElement("div", { key: u.pkg, style: { display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--mono)", fontSize: 12.5 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 70, color: "var(--faint)" } }, short(u.pkg)), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--dim)" } }, u.current), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--faint)" } }, "\u2192"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent)", fontWeight: 700 } }, u.latest)))), phase === "idle" && appBehind && info.mode === "dev" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--dim)", lineHeight: 1.5 } }, T.updDev || "Running from a source checkout \u2014 update with:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("code", { style: { fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--text)" } }, "git pull && npm run build")), phase === "idle" && appBehind && info.mode === "npx" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--dim)", lineHeight: 1.5 } }, T.updNpx || "Running via npx \u2014 restarting picks up the latest version automatically."), lanBehind && phase === "idle" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--dim)", lineHeight: 1.5 } }, T.updLanNote || "agentnet (lan): one click reinstalls it and asks the running daemon to restart itself. Manual equivalent:", /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 6 } }, /* @__PURE__ */ React.createElement("code", { style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--text)", background: "var(--panel-2)", border: "1px solid var(--line)", borderRadius: 8, padding: "8px 10px", userSelect: "all", wordBreak: "break-all" } }, "npm i -g @decentnetwork/lan@latest && agentnet restart"), /* @__PURE__ */ React.createElement(Btn, { size: "sm", icon: "copy", title: T.copy || "Copy", onClick: () => dkCopy("npm i -g @decentnetwork/lan@latest && agentnet restart") }))), phase === "lan-done" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--online)" } }, T.updLanDone || "lan updated \u2014 daemon restarted with the new version \u2713"), phase === "lan-norestart" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--warn, #f59e0b)" } }, T.updLanNoRestart || "lan updated, but the daemon was not running (or refused) \u2014 the new version applies on its next start."), phase === "running" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--dim)" } }, T.updBusy || "Updating\u2026 (about a minute)"), phase === "done" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--online)" } }, T.updDone || "Updated \u2014 restart to apply."), phase === "restarting" && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12.5, color: "var(--dim)" } }, T.updRestarting || "Restarting\u2026 this page reloads when it\u2019s back. (If beagle was started by hand in a terminal, run it again.)"), phase === "error" && (() => {
    const m = /`([^`]+)`/.exec(err || "");
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 12, color: "var(--danger)", wordBreak: "break-word" } }, m ? err.replace("`" + m[1] + "`", "") : err), m && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("code", { style: { flex: 1, minWidth: 0, fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--text)", background: "var(--panel-2)", border: "1px solid var(--line)", borderRadius: 8, padding: "8px 10px", userSelect: "all", wordBreak: "break-all" } }, m[1]), /* @__PURE__ */ React.createElement(Btn, { size: "sm", icon: "copy", title: T.copy || "Copy", onClick: () => dkCopy(m[1]) })), m && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--ui)", fontSize: 11.5, color: "var(--dim)" } }, T.updManualHint || "Run it in a terminal, then click Restart to apply."));
  })(), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8 } }, (phase === "idle" || phase === "error" || phase === "lan-done" || phase === "lan-norestart") && btn(phase === "idle" ? T.updLater || "Later" : T.receivedClose || "Close", onClose), phase === "idle" && lanBehind && btn(T.updLanNow || "Update lan", doLanUpdate, !appBehind), phase === "idle" && appBehind && info.mode === "global" && btn(T.updNow || "Update now", doUpdate, true), phase === "idle" && appBehind && info.mode === "npx" && btn(T.updRestart || "Restart", doRestart, true), phase === "error" && btn(T.updRestart || "Restart", doRestart, true), phase === "done" && btn(T.updRestart || "Restart", doRestart, true))));
}
function DkApp() {
  const [t, setTweak] = useTweaks({ ...DK_DEFAULTS, lang: dkDetectLang() });
  const [tab, setTab] = React.useState(t.startTab || "chat");
  const [activeId, setActiveId] = React.useState(null);
  const data = useDaemonData();
  const me = data.me;
  const [upd, setUpd] = React.useState(null);
  React.useEffect(() => {
    let dead = false;
    const check = () => fetch("/api/update-check").then((r) => r.json()).then((d) => {
      if (dead || !d.ok)
        return;
      const behind = (d.updates || []).filter((u) => u.behind);
      if (!behind.length)
        return;
      const key = behind.map((u) => u.pkg + "@" + u.latest).join(",");
      if (localStorage.getItem("dk-upd-dismissed") === key)
        return;
      setUpd({ ...d, key });
    }).catch(() => {
    });
    check();
    const timer = setInterval(check, 6 * 3600 * 1e3);
    return () => {
      dead = true;
      clearInterval(timer);
    };
  }, []);
  const [backend, setBackend] = React.useState(null);
  const refreshBackend = React.useCallback(() => {
    dkGet("/api/backend").then((b) => {
      if (b && b.ok)
        setBackend(b);
    }).catch(() => {
    });
  }, []);
  React.useEffect(() => {
    refreshBackend();
    const ms = backend && backend.state === "releasing" ? 1500 : 8e3;
    const t2 = setInterval(refreshBackend, ms);
    return () => clearInterval(t2);
  }, [refreshBackend, backend && backend.state]);
  const armLan = React.useCallback(async () => {
    await dkPost("/api/lan-arm", {});
    refreshBackend();
  }, [refreshBackend]);
  const cancelLan = React.useCallback(async () => {
    await dkPost("/api/lan-cancel", {});
    refreshBackend();
  }, [refreshBackend]);
  React.useEffect(() => {
    const mine = window.__DK_UI_VERSION;
    const served = me && me.beagleVer;
    if (!mine || !served || mine === served)
      return;
    const key = "dk-reloaded-for-" + served;
    if (sessionStorage.getItem(key))
      return;
    sessionStorage.setItem(key, "1");
    window.location.reload();
  }, [me && me.beagleVer]);
  const peers = data.peers;
  const [pendingAddr, setPendingAddr] = React.useState(() => dkParseDeepLinkAddress());
  React.useEffect(() => {
    const onHash = () => {
      const a = dkParseDeepLinkAddress();
      if (a)
        setPendingAddr(a);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  React.useEffect(() => {
    if (!pendingAddr)
      return;
    setTab("chat");
    if (!peers || !peers.length)
      return;
    const hit = peers.find((p) => p.address && p.address === pendingAddr);
    if (hit) {
      setActiveId(hit.id);
      setPendingAddr("");
      try {
        window.history.replaceState(null, "", window.location.pathname);
      } catch (e) {
      }
    } else {
      try {
        window.history.replaceState(null, "", window.location.pathname);
      } catch (e) {
      }
    }
  }, [pendingAddr, peers]);
  const requests = data.requests;
  const exits = data.exits;
  const activeExit = data.activeExit;
  const [welcome, setWelcome] = React.useState(false);
  const [welcomeDone, setWelcomeDone] = React.useState(false);
  React.useEffect(() => {
    if (!data.loaded || welcomeDone)
      return;
    if (!me.onboarded && !String(me.name || "").trim())
      setWelcome(true);
  }, [data.loaded, me.onboarded, me.name, welcomeDone]);
  const T = STR[t.lang] || STR.en;
  const vars = dkTheme(t.theme, t.accent);
  const rowPad = t.density === "comfortable" ? "11px 12px" : "7px 10px";
  const callCtl = useCallController(me.userId, (peerId, video, direction) => {
    const text = `WebRTC ${video ? "video" : "audio"} call: ${direction}`;
    dkApi.logLocal(peerId, direction === "outgoing" ? "out" : "in", text).then(() => {
      data.loadThread(peerId);
      data.refresh();
    });
  });
  const onCall = (peerId, video) => callCtl.start(peerId, !!video);
  const rtcFileCtl = useRtcFileController(me.userId, (peerId, name, blob) => {
    if (!blob)
      return;
    dkApi.saveWebrtcFile(peerId, name, blob).then((r) => {
      if (!r || r.ok === false) {
        return dkApi.logLocal(peerId, "in", "received file via WebRTC: " + name + " (" + dkFileSize(blob.size) + ")");
      }
    }).then(() => {
      data.loadThread(peerId);
      data.refresh();
    });
  });
  React.useEffect(() => {
    if (!activeId && peers.length)
      setActiveId(peers[0].id);
  }, [peers, activeId]);
  React.useEffect(() => {
    if (!activeId)
      return;
    data.loadThread(activeId);
    dkApi.markRead(activeId).then(data.refresh);
    const iv = setInterval(() => {
      data.loadThread(activeId);
      dkApi.markRead(activeId);
    }, 2500);
    return () => clearInterval(iv);
  }, [activeId]);
  const onSelect = (id) => setActiveId(id);
  const onAct = (id, kind) => {
    const r = requests.find((x) => x.id === id);
    const uid = r && r.userid || id;
    (kind === "accept" ? dkApi.accept(uid) : dkApi.reject(uid)).then(data.refresh);
  };
  const onRemove = (peer) => {
    dkApi.remove(peer.id).then(data.refresh);
    if (peer.id === activeId)
      setActiveId(null);
  };
  const onAdd = (address) => {
    if (!address || !address.trim())
      return Promise.resolve({ ok: false, error: "empty address" });
    if (!String(me.name || "").trim()) {
      setWelcome(true);
      return Promise.resolve({ ok: false, error: T.needProfile || "set your name first" });
    }
    return dkApi.add(address.trim()).then((r) => {
      data.refresh();
      return r;
    });
  };
  const onSend = (text) => {
    if (!activeId || !text || !text.trim())
      return;
    dkApi.send(activeId, text.trim()).then(() => data.loadThread(activeId)).then(data.refresh);
  };
  const peerTakesRtcFile = (id) => {
    const p = (peers || []).find((x) => x.id === id || x.userId === id);
    const plat = String(p && p.platform || "").toLowerCase();
    return plat === "js" || plat === "browser" || plat === "web";
  };
  const onSendFile = (file, onProgress) => {
    if (!activeId || !file)
      return Promise.resolve({ ok: false });
    const peerId = activeId;
    const toxcore = () => dkApi.sendFile(peerId, file).then((rr) => {
      data.loadThread(peerId);
      data.refresh();
      return rr;
    });
    if (!peerTakesRtcFile(peerId))
      return toxcore();
    return rtcFileCtl.sendFile(peerId, file, onProgress).then((r) => {
      if (r && r.ok && r.via === "webrtc") {
        return fetch(
          "/api/webrtc-file-save?dir=out&userid=" + encodeURIComponent(peerId) + "&name=" + encodeURIComponent(file.name),
          { method: "POST", body: file }
        ).then(() => {
          data.loadThread(peerId);
          data.refresh();
          return { ok: true, via: "webrtc" };
        });
      }
      return toxcore();
    }).catch(() => toxcore());
  };
  const onSendRtcFile = (file, onProgress) => {
    if (!activeId || !file)
      return Promise.resolve({ ok: false, error: "no active peer or file" });
    const peerId = activeId;
    return rtcFileCtl.sendFile(peerId, file, onProgress).then((r) => {
      if (r && r.ok && r.via === "webrtc") {
        return fetch(
          "/api/webrtc-file-save?dir=out&userid=" + encodeURIComponent(peerId) + "&name=" + encodeURIComponent(file.name),
          { method: "POST", body: file }
        ).then(() => ({ ok: true, via: "webrtc" }));
      }
      return { ok: false, error: r && r.error || "WebRTC file send failed" };
    }).then((r) => {
      data.loadThread(peerId);
      data.refresh();
      return r;
    });
  };
  const onAlias = (peer) => {
    const a = window.prompt("Set alias for this peer (empty to clear):", peer.alias || "");
    if (a !== null)
      dkApi.alias(peer.id, a).then(data.refresh);
  };
  const onEdit = (name, description) => dkApi.setProfile(name, description).then(data.refresh);
  const onSetExit = () => {
  };
  const onOpenChat = (id) => {
    setActiveId(id);
    setTab("chat");
  };
  const onOpenNet = () => setTab("network");
  const nav = [
    { id: "chat", icon: "message", label: T.chat },
    { id: "recommended", icon: "sparkles", label: T.recommended },
    { id: "registered", icon: "at", label: T.registered },
    { id: "network", icon: "network", label: T.network },
    { id: "profile", icon: "userRound", label: T.profile }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: { ...vars, "--row-pad": rowPad, position: "fixed", inset: 0, display: "flex", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--ui)" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 68, flexShrink: 0, borderRight: "1px solid var(--line)", background: "var(--rail)", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 38, height: 38, borderRadius: 10, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 } }, /* @__PURE__ */ React.createElement(Icon, { name: "terminal", size: 20, color: "#fff", stroke: 2.2 })), nav.map((n) => /* @__PURE__ */ React.createElement(RailBtn, { key: n.id, icon: n.icon, label: n.label, active: tab === n.id, soon: n.soon, onClick: () => setTab(n.id) })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(DkAvatar, { peer: { ...me, id: me.userId, agent: false }, size: 36, radius: 9 }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 46, flexShrink: 0, borderBottom: "1px solid var(--line)", background: "var(--panel)", display: "flex", alignItems: "center", gap: 12, padding: "0 16px" } }, /* @__PURE__ */ React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "var(--accent)", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round", style: { display: "block", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("path", { d: "m4.5 17 6-6-6-6" }), /* @__PURE__ */ React.createElement("path", { d: "M12 18.5h7.5" })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 14, fontWeight: 700, letterSpacing: -0.3, color: "var(--text)" } }, "beagle"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)" } }, "\xB7 ", nav.find((n) => n.id === tab).label.toLowerCase()), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Tag, { tone: "accent" }, me.channel, " \xB7 lan ", me.lanVer), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 7, padding: "0 4px" } }, /* @__PURE__ */ React.createElement(StatusDot, { online: me.online }), /* @__PURE__ */ React.createElement(Mono, { size: 12.5, copy: me.ip }, me.ip)), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 22, background: "var(--line)" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(DkAvatar, { peer: { ...me, id: me.userId, agent: false }, size: 26, radius: 7 }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 12.5, fontWeight: 600, color: "var(--text)" } }, me.name))), tab === "chat" && /* @__PURE__ */ React.createElement(ChatTab, { T, lang: t.lang, peers, requests, activeId, thread: data.threads[activeId], onSelect, onAct, onAdd, onSend, onSendFile, onSendRtcFile, onAlias, onRemove, onOpenNet, onCall, onReloadThread: () => activeId && data.loadThread(activeId), prefillAddr: pendingAddr, onPrefillConsumed: () => setPendingAddr("") }), tab === "recommended" && /* @__PURE__ */ React.createElement(DiscoverTab, { T, kind: "recommended", peers, meId: me.userId, onAdd, onOpenChat }), tab === "registered" && /* @__PURE__ */ React.createElement(DiscoverTab, { T, kind: "registered", peers, meId: me.userId, onAdd, onOpenChat }), tab === "network" && /* @__PURE__ */ React.createElement(NetworkTab, { T, me, peers, exits, activeExit, reqCount: requests.length, onSetExit, onOpenChat, backend, onArmLan: armLan, onCancelLan: cancelLan }), tab === "profile" && /* @__PURE__ */ React.createElement(ProfileTab, { T, me, onEdit, t, setTweak })), welcome && /* @__PURE__ */ React.createElement(
    DkWelcome,
    {
      lang: t.lang,
      onLang: (v) => setTweak("lang", v),
      me,
      onSave: (p) => dkApi.setProfileFull(p).then(data.refresh),
      onAdd: (address) => dkApi.add(address).then((r) => {
        data.refresh();
        return r;
      }),
      onCreateIdentity: () => dkApi.createIdentity().then(data.refresh),
      onBrowse: () => setTab("registered"),
      onClose: () => {
        setWelcome(false);
        setWelcomeDone(true);
      }
    }
  ), /* @__PURE__ */ React.createElement(IncomingCallModal, { T, ctl: callCtl, peers }), /* @__PURE__ */ React.createElement(CallOverlay, { T, ctl: callCtl, peers }), /* @__PURE__ */ React.createElement(RtcFileInbox, { T, peers, ctl: rtcFileCtl }), upd && /* @__PURE__ */ React.createElement(
    DkUpdateModal,
    {
      T,
      info: upd,
      onClose: () => {
        localStorage.setItem("dk-upd-dismissed", upd.key);
        setUpd(null);
      }
    }
  ));
}
Object.assign(window, { DkUpdateModal });
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(DkApp, null));
