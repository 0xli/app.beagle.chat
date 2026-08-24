var ChatComponents = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@decentnetwork/chat-components/dist/index.js
  var dist_exports = {};
  __export(dist_exports, {
    FORM_FENCE: () => FORM_FENCE,
    INPUT_TYPES: () => INPUT_TYPES,
    INTERACTION_FENCE: () => INTERACTION_FENCE,
    MAX_ACCEPT: () => MAX_ACCEPT,
    MAX_COMPONENTS: () => MAX_COMPONENTS,
    MAX_CUSTOM_ID_LEN: () => MAX_CUSTOM_ID_LEN,
    MAX_ID_LEN: () => MAX_ID_LEN,
    MAX_LABEL_LEN: () => MAX_LABEL_LEN,
    MAX_OPTIONS: () => MAX_OPTIONS,
    MAX_PAYLOAD_CHARS: () => MAX_PAYLOAD_CHARS,
    MAX_VALUE_LEN: () => MAX_VALUE_LEN,
    WIRE_VERSION: () => WIRE_VERSION,
    answers: () => answers,
    buildInteraction: () => buildInteraction,
    encodeForm: () => encodeForm,
    encodeInteraction: () => encodeInteraction,
    parseForm: () => parseForm,
    parseInteraction: () => parseInteraction,
    readMessage: () => readMessage
  });
  var WIRE_VERSION = 1;
  var FORM_FENCE = "decent-form";
  var INTERACTION_FENCE = "decent-interaction";
  var MAX_COMPONENTS = 12;
  var MAX_OPTIONS = 40;
  var MAX_LABEL_LEN = 120;
  var MAX_ID_LEN = 64;
  var MAX_VALUE_LEN = 512;
  var MAX_CUSTOM_ID_LEN = 128;
  var MAX_PAYLOAD_CHARS = 64 * 1024;
  var RENDERABLE = /* @__PURE__ */ new Set([
    "select",
    "submit",
    "text",
    "attachment"
  ]);
  var MAX_ACCEPT = 12;
  var INPUT_TYPES = /* @__PURE__ */ new Set([
    "select",
    "text",
    "attachment"
  ]);
  var str = (v, max) => {
    if (typeof v !== "string")
      return void 0;
    const s = v.trim();
    if (!s || s.length > max)
      return void 0;
    return s;
  };
  function parseForm(raw) {
    var _a;
    if (!raw || typeof raw !== "object")
      return null;
    const o = raw;
    if (o.v !== WIRE_VERSION)
      return null;
    const customId = str(o.custom_id, MAX_CUSTOM_ID_LEN);
    if (!customId)
      return null;
    if (!Array.isArray(o.components))
      return null;
    const seen = /* @__PURE__ */ new Set();
    const out = [];
    for (const entry of o.components.slice(0, MAX_COMPONENTS)) {
      if (!entry || typeof entry !== "object")
        continue;
      const c = entry;
      const type = typeof c.type === "string" ? c.type : "";
      if (!RENDERABLE.has(type))
        continue;
      const id = str(c.id, MAX_ID_LEN);
      if (!id || seen.has(id))
        continue;
      seen.add(id);
      const component = { type, id };
      const label = str(c.label, MAX_LABEL_LEN);
      if (label)
        component.label = label;
      if (c.required === true)
        component.required = true;
      const placeholder = str(c.placeholder, MAX_LABEL_LEN);
      if (placeholder)
        component.placeholder = placeholder;
      if (type === "select") {
        if (!Array.isArray(c.options))
          continue;
        const options = [];
        const seenValues = /* @__PURE__ */ new Set();
        for (const rawOpt of c.options.slice(0, MAX_OPTIONS)) {
          if (!rawOpt || typeof rawOpt !== "object")
            continue;
          const opt = rawOpt;
          const value = str(opt.value, MAX_VALUE_LEN);
          if (!value || seenValues.has(value))
            continue;
          seenValues.add(value);
          options.push({ label: (_a = str(opt.label, MAX_LABEL_LEN)) != null ? _a : value, value });
        }
        if (!options.length)
          continue;
        component.options = options;
        const def = str(c.default, MAX_VALUE_LEN);
        if (def && options.some((o2) => o2.value === def))
          component.default = def;
      }
      if (type === "text") {
        const def = str(c.default, MAX_VALUE_LEN);
        if (def)
          component.default = def;
      }
      if (type === "attachment") {
        if (Array.isArray(c.accept)) {
          const accept = c.accept.slice(0, MAX_ACCEPT).map((a) => str(a, MAX_LABEL_LEN)).filter((a) => a !== void 0);
          if (accept.length)
            component.accept = accept;
        }
        if (typeof c.max_bytes === "number" && Number.isFinite(c.max_bytes) && c.max_bytes > 0) {
          component.max_bytes = Math.floor(c.max_bytes);
        }
      }
      out.push(component);
    }
    if (!out.some((c) => c.type === "submit"))
      return null;
    if (!out.some((c) => INPUT_TYPES.has(c.type)))
      return null;
    return { custom_id: customId, components: out };
  }
  function parseInteraction(raw) {
    if (!raw || typeof raw !== "object")
      return null;
    const o = raw;
    if (o.v !== WIRE_VERSION)
      return null;
    const customId = str(o.custom_id, MAX_CUSTOM_ID_LEN);
    const component = str(o.component, MAX_ID_LEN);
    if (!customId || !component)
      return null;
    const values = {};
    if (o.values && typeof o.values === "object") {
      for (const [k, v] of Object.entries(o.values).slice(0, MAX_COMPONENTS)) {
        const key = str(k, MAX_ID_LEN);
        if (!key)
          continue;
        if (typeof v === "string") {
          values[key] = v.slice(0, MAX_VALUE_LEN);
          continue;
        }
        if (v && typeof v === "object") {
          const f = v;
          const fileId = str(f.fileId, 128);
          const name = str(f.name, MAX_LABEL_LEN);
          const size = typeof f.size === "number" && Number.isFinite(f.size) ? f.size : void 0;
          if (fileId && name && size !== void 0)
            values[key] = { fileId, name, size };
        }
      }
    }
    return { custom_id: customId, component, values };
  }
  function buildInteraction(customId, component, values) {
    const clean = {};
    for (const [k, v] of Object.entries(values)) {
      const key = str(k, MAX_ID_LEN);
      if (!key)
        continue;
      if (typeof v === "string") {
        clean[key] = v.slice(0, MAX_VALUE_LEN);
        continue;
      }
      const fileId = str(v == null ? void 0 : v.fileId, 128);
      const name = str(v == null ? void 0 : v.name, MAX_LABEL_LEN);
      if (fileId && name && typeof (v == null ? void 0 : v.size) === "number" && Number.isFinite(v.size)) {
        clean[key] = { fileId, name, size: v.size };
      }
    }
    return { custom_id: customId.slice(0, MAX_CUSTOM_ID_LEN), component: component.slice(0, MAX_ID_LEN), values: clean };
  }
  function fence(kind, payload) {
    return `\`\`\`${kind}
${JSON.stringify(payload)}
\`\`\``;
  }
  function encodeForm(text, form) {
    if (!text.trim())
      throw new Error("a form message needs human-readable text: it is the fallback");
    return `${text.trim()}

${fence(FORM_FENCE, { v: WIRE_VERSION, ...form })}`;
  }
  function encodeInteraction(interaction, summary) {
    const head = (summary != null ? summary : defaultSummary(interaction)).trim();
    return `${head}

${fence(INTERACTION_FENCE, { v: WIRE_VERSION, ...interaction })}`;
  }
  function defaultSummary(interaction) {
    const parts = Object.entries(interaction.values).map(([k, v]) => typeof v === "string" ? `${k}: ${v}` : `${k}: ${v.name}`);
    return parts.length ? parts.join("\uFF0C") : "(\u5DF2\u63D0\u4EA4)";
  }
  function extract(text, kind) {
    const open = `\`\`\`${kind}`;
    const start = text.indexOf(open);
    if (start < 0)
      return null;
    const bodyStart = text.indexOf("\n", start + open.length);
    if (bodyStart < 0)
      return null;
    const end = text.indexOf("```", bodyStart);
    if (end < 0)
      return null;
    const json = text.slice(bodyStart + 1, end);
    if (json.length > MAX_PAYLOAD_CHARS)
      return null;
    const rest = (text.slice(0, start) + text.slice(end + 3)).trim();
    return { json, rest };
  }
  function parseJson(json) {
    try {
      return JSON.parse(json);
    } catch {
      return null;
    }
  }
  function readMessage(text) {
    const raw = typeof text === "string" ? text : "";
    const formBlock = extract(raw, FORM_FENCE);
    if (formBlock) {
      const form = parseForm(parseJson(formBlock.json));
      return { text: formBlock.rest, form, interaction: null };
    }
    const interactionBlock = extract(raw, INTERACTION_FENCE);
    if (interactionBlock) {
      return {
        text: interactionBlock.rest,
        form: null,
        interaction: parseInteraction(parseJson(interactionBlock.json))
      };
    }
    return { text: raw, form: null, interaction: null };
  }
  function answers(texts) {
    const out = /* @__PURE__ */ new Map();
    for (const t of texts) {
      const it = readMessage(t).interaction;
      if (it && !out.has(it.custom_id))
        out.set(it.custom_id, it);
    }
    return out;
  }
  return __toCommonJS(dist_exports);
})();
