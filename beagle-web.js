(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key2 of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from2[key2], enumerable: !(desc = __getOwnPropDesc(from2, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key2, value) => {
    __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value) {
      __privateSet(obj, member, value, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  });
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };

  // src/shims/buffer-global.js
  function bytesToHex(u8) {
    let s = "";
    for (let i = 0; i < u8.length; i++)
      s += HEX[u8[i]];
    return s;
  }
  function hexToBytes(hex2) {
    const out = new Uint8Array(hex2.length >> 1);
    for (let i = 0; i < out.length; i++)
      out[i] = parseInt(hex2.substr(i * 2, 2), 16);
    return out;
  }
  function b64ToBytes(b64) {
    const bin = atob(b64.replace(/-/g, "+").replace(/_/g, "/"));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++)
      out[i] = bin.charCodeAt(i);
    return out;
  }
  function bytesToB64(u8, url) {
    let bin = "";
    for (let i = 0; i < u8.length; i++)
      bin += String.fromCharCode(u8[i]);
    const b64 = btoa(bin);
    return url ? b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : b64;
  }
  function from(x, encoding) {
    if (typeof x === "string") {
      if (encoding === "hex")
        return new BeagleBuffer(hexToBytes(x).buffer);
      if (encoding === "base64" || encoding === "base64url")
        return new BeagleBuffer(b64ToBytes(x).buffer);
      return new BeagleBuffer(new TextEncoder().encode(x));
    }
    if (x instanceof Uint8Array)
      return new BeagleBuffer(x.buffer, x.byteOffset, x.byteLength);
    if (x instanceof ArrayBuffer)
      return new BeagleBuffer(x);
    if (Array.isArray(x))
      return new BeagleBuffer(x);
    return new BeagleBuffer(0);
  }
  var HEX, BeagleBuffer, Buffer2;
  var init_buffer_global = __esm({
    "src/shims/buffer-global.js"() {
      HEX = [];
      for (let i = 0; i < 256; i++)
        HEX[i] = i.toString(16).padStart(2, "0");
      BeagleBuffer = class extends Uint8Array {
        readUInt8(offset = 0) {
          return this[offset];
        }
        writeUInt8(value, offset = 0) {
          this[offset] = value & 255;
          return offset + 1;
        }
        readUInt16BE(offset = 0) {
          return this[offset] << 8 | this[offset + 1];
        }
        writeUInt16BE(value, offset = 0) {
          this[offset] = value >>> 8 & 255;
          this[offset + 1] = value & 255;
          return offset + 2;
        }
        readUInt32BE(offset = 0) {
          return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        }
        writeUInt32BE(value, offset = 0) {
          this[offset] = value >>> 24 & 255;
          this[offset + 1] = value >>> 16 & 255;
          this[offset + 2] = value >>> 8 & 255;
          this[offset + 3] = value & 255;
          return offset + 4;
        }
        equals(other) {
          if (!other || other.length !== this.length)
            return false;
          for (let i = 0; i < this.length; i++)
            if (this[i] !== other[i])
              return false;
          return true;
        }
        toString(encoding = "utf8", start = 0, end = this.length) {
          const view = this.subarray(start, end);
          switch (encoding) {
            case "hex":
              return bytesToHex(view);
            case "base64":
              return bytesToB64(view, false);
            case "base64url":
              return bytesToB64(view, true);
            case "utf8":
            case "utf-8":
            case "ascii":
            case void 0:
              return new TextDecoder().decode(view);
            default:
              return new TextDecoder().decode(view);
          }
        }
      };
      Buffer2 = {
        alloc: (n) => new BeagleBuffer(n),
        from,
        concat: (list, total) => {
          const len = total ?? list.reduce((n, b) => n + b.length, 0);
          const out = new BeagleBuffer(len);
          let at = 0;
          for (const b of list) {
            if (at + b.length > len) {
              out.set(b.subarray(0, len - at), at);
              break;
            }
            out.set(b, at);
            at += b.length;
          }
          return out;
        },
        isBuffer: (x) => x instanceof Uint8Array
      };
    }
  });

  // src/shims/process-global.js
  var process;
  var init_process_global = __esm({
    "src/shims/process-global.js"() {
      process = { env: {}, platform: "browser", version: "", pid: 1 };
    }
  });

  // node_modules/@noble/hashes/_u64.js
  function setU64FromNum(view, byteOffset, n, isLE) {
    const h = fromNumH(n);
    const l = fromNumL(n);
    view.setUint32(byteOffset, isLE ? l : h, isLE);
    view.setUint32(byteOffset + 4, isLE ? h : l, isLE);
  }
  var fromNumH, fromNumL;
  var init_u64 = __esm({
    "node_modules/@noble/hashes/_u64.js"() {
      init_buffer_global();
      init_process_global();
      fromNumH = (n) => n / 2 ** 32 | 0;
      fromNumL = (n) => n >>> 0;
    }
  });

  // node_modules/@noble/hashes/utils.js
  function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a && a.BYTES_PER_ELEMENT === 1;
  }
  function anumber(n, title = "") {
    if (typeof n !== "number")
      throw new TypeError(atitle(title) + "expected number, got " + typeof n);
    if (!Number.isSafeInteger(n) || n < 0)
      throw new RangeError(atitle(title) + "expected integer >= 0, got " + n);
    return n;
  }
  function abytes(value, length, title = "") {
    if (isBytes(value) && (length === void 0 || value.length === length))
      return value;
    if (length !== void 0)
      anumber(length, "length");
    const bytes = isBytes(value);
    const ofLen = length !== void 0 ? ` of length ${length}` : "";
    const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
    const message = atitle(title) + "expected Uint8Array" + ofLen + ", got " + got;
    if (!bytes)
      throw new TypeError(message);
    throw new RangeError(message);
  }
  function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("hash was destroyed");
    if (checkFinished && instance.finished)
      throw new Error("digest() was already called");
  }
  function aoutput(out, instance) {
    abytes(out, void 0, "output");
    const min = instance.outputLen;
    if (!(out.length >= min)) {
      throw new RangeError('"output" expected length >= ' + min);
    }
  }
  function clean(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  function checkOpts(defaults, opts, title = "opts") {
    aobject(defaults, "defaults");
    if (opts !== void 0)
      aobject(opts, title);
    const merged = Object.assign(defaults, opts);
    return merged;
  }
  function createHasher(hashCons, info = {}) {
    if (typeof hashCons !== "function")
      throw new TypeError('"hashCons" expected function, got type=' + typeof hashCons);
    info = checkOpts({}, info, "info");
    const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
    const tmp = hashCons(void 0);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.canXOF = tmp.canXOF;
    hashC.create = (opts) => hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
  }
  var atitle, aobject, oidNist;
  var init_utils = __esm({
    "node_modules/@noble/hashes/utils.js"() {
      init_buffer_global();
      init_process_global();
      atitle = (title) => title ? `"${title}" ` : "";
      aobject = (value, label) => {
        if (value === null || typeof value !== "object" || Array.isArray(value))
          throw new TypeError((label === "object" ? "" : `"${label}" `) + "expected object, got type=" + typeof value);
      };
      oidNist = (suffix) => ({
        // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
        // Larger suffix values would need base-128 OID encoding and a different length byte.
        oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix])
      });
    }
  });

  // node_modules/@noble/hashes/_md.js
  function Chi(a, b, c) {
    return a & b ^ ~a & c;
  }
  function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
  }
  var HashMD, SHA256_IV;
  var init_md = __esm({
    "node_modules/@noble/hashes/_md.js"() {
      init_buffer_global();
      init_process_global();
      init_u64();
      init_utils();
      HashMD = class {
        constructor(blockLen, outputLen, padOffset, isLE) {
          __publicField(this, "blockLen");
          __publicField(this, "outputLen");
          __publicField(this, "canXOF", false);
          __publicField(this, "padOffset");
          __publicField(this, "isLE");
          // For partial updates less than block size
          __publicField(this, "buffer");
          __publicField(this, "view");
          __publicField(this, "finished", false);
          __publicField(this, "length", 0);
          __publicField(this, "pos", 0);
          __publicField(this, "destroyed", false);
          this.blockLen = blockLen;
          this.outputLen = outputLen;
          this.padOffset = padOffset;
          this.isLE = isLE;
          this.buffer = new Uint8Array(blockLen);
          this.view = createView(this.buffer);
        }
        update(data) {
          aexists(this);
          abytes(data);
          const { view, buffer, blockLen } = this;
          const len = data.length;
          let processed = false;
          for (let pos = 0; pos < len; ) {
            const take = Math.min(blockLen - this.pos, len - pos);
            if (take === blockLen) {
              const dataView = createView(data);
              for (; blockLen <= len - pos; pos += blockLen)
                this.process(dataView, pos);
              processed = true;
              continue;
            }
            buffer.set(pos === 0 && take === len ? data : data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
              this.process(view, 0);
              this.pos = 0;
              processed = true;
            }
          }
          this.length += data.length;
          if (processed)
            this.roundClean();
          return this;
        }
        digestInto(out) {
          aexists(this);
          aoutput(out, this);
          this.finished = true;
          const { buffer, view, blockLen, isLE } = this;
          let { pos } = this;
          buffer[pos++] = 128;
          buffer.fill(0, pos);
          if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            buffer.fill(0);
          }
          setU64FromNum(view, blockLen - 8, this.length * 8, isLE);
          this.process(view, 0);
          this.roundClean();
          const oview = out === buffer ? view : createView(out);
          const len = this.outputLen;
          const outLen = len / 4;
          const state = this.get();
          if (len % 4 || outLen > state.length)
            throw new Error("invalid outputLen");
          for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
        }
        digest() {
          const { buffer, outputLen } = this;
          this.digestInto(buffer);
          const res = buffer.slice(0, outputLen);
          this.destroy();
          return res;
        }
        _cloneIntoMeta(to) {
          const { buffer, length, finished, destroyed, pos } = this;
          to.destroyed = destroyed;
          to.finished = finished;
          to.length = length;
          to.pos = pos;
          if (pos)
            to.buffer.set(buffer);
          return to;
        }
        clone() {
          return this._cloneInto();
        }
      };
      SHA256_IV = /* @__PURE__ */ Uint32Array.from([
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ]);
    }
  });

  // node_modules/@noble/hashes/sha2.js
  var SHA256_K, SHA256_W, SHA2_32B, _SHA256, sha256;
  var init_sha2 = __esm({
    "node_modules/@noble/hashes/sha2.js"() {
      init_buffer_global();
      init_process_global();
      init_md();
      init_utils();
      SHA256_K = /* @__PURE__ */ Uint32Array.from([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      SHA256_W = /* @__PURE__ */ new Uint32Array(64);
      SHA2_32B = class extends HashMD {
        constructor(outputLen, IV) {
          super(64, outputLen, 8, false);
          // We cannot use array here since array allows indexing by variable
          // which means optimizer/compiler cannot use registers.
          // Numeric initializers matter: starting the fields as `undefined` changes
          // V8's field representation and makes sha256 3x slower (measured).
          __publicField(this, "A", 0);
          __publicField(this, "B", 0);
          __publicField(this, "C", 0);
          __publicField(this, "D", 0);
          __publicField(this, "E", 0);
          __publicField(this, "F", 0);
          __publicField(this, "G", 0);
          __publicField(this, "H", 0);
          this.A = IV[0] | 0;
          this.B = IV[1] | 0;
          this.C = IV[2] | 0;
          this.D = IV[3] | 0;
          this.E = IV[4] | 0;
          this.F = IV[5] | 0;
          this.G = IV[6] | 0;
          this.H = IV[7] | 0;
        }
        get() {
          const { A, B, C, D, E, F, G, H } = this;
          return [A, B, C, D, E, F, G, H];
        }
        // prettier-ignore
        set(A, B, C, D, E, F, G, H) {
          this.A = A | 0;
          this.B = B | 0;
          this.C = C | 0;
          this.D = D | 0;
          this.E = E | 0;
          this.F = F | 0;
          this.G = G | 0;
          this.H = H | 0;
        }
        _cloneInto(to) {
          (to || (to = new this.constructor())).set(...this.get());
          return this._cloneIntoMeta(to);
        }
        process(view, offset) {
          for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
          for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
            const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
          }
          let { A, B, C, D, E, F, G, H } = this;
          for (let i = 0; i < 64; i++) {
            const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
          }
          A = A + this.A | 0;
          B = B + this.B | 0;
          C = C + this.C | 0;
          D = D + this.D | 0;
          E = E + this.E | 0;
          F = F + this.F | 0;
          G = G + this.G | 0;
          H = H + this.H | 0;
          this.set(A, B, C, D, E, F, G, H);
        }
        roundClean() {
          clean(SHA256_W);
        }
        destroy() {
          this.destroyed = true;
          this.set(0, 0, 0, 0, 0, 0, 0, 0);
          clean(this.buffer);
        }
      };
      _SHA256 = class extends SHA2_32B {
        constructor() {
          super(32, SHA256_IV);
        }
      };
      sha256 = /* @__PURE__ */ createHasher(
        () => new _SHA256(),
        /* @__PURE__ */ oidNist(1)
      );
    }
  });

  // src/shims/node-crypto.js
  var node_crypto_exports = {};
  __export(node_crypto_exports, {
    createHash: () => createHash,
    createHmac: () => createHmac,
    default: () => node_crypto_default,
    randomBytes: () => randomBytes
  });
  function randomBytes(n) {
    const out = new Uint8Array(n);
    crypto.getRandomValues(out);
    return out;
  }
  function createHash(algorithm) {
    const alg = String(algorithm).toLowerCase().replace("-", "");
    if (alg === "sha512")
      return new Sha512();
    if (alg === "sha256")
      return new Sha256();
    throw new Error(`node-crypto shim: unsupported hash '${algorithm}'`);
  }
  function createHmac(algorithm) {
    throw new Error(`node-crypto shim: createHmac('${algorithm}') reached \u2014 STUN/ICE is not available in the browser`);
  }
  var import_tweetnacl, _chunks, Sha512, _chunks2, Sha256, node_crypto_default;
  var init_node_crypto = __esm({
    "src/shims/node-crypto.js"() {
      init_buffer_global();
      init_process_global();
      import_tweetnacl = __toESM(require_nacl_fast());
      init_sha2();
      Sha512 = class {
        constructor() {
          __privateAdd(this, _chunks, []);
        }
        update(data) {
          __privateGet(this, _chunks).push(data instanceof Uint8Array ? data : new TextEncoder().encode(String(data)));
          return this;
        }
        digest() {
          const total = __privateGet(this, _chunks).reduce((n, c) => n + c.length, 0);
          const joined = new Uint8Array(total);
          let at = 0;
          for (const c of __privateGet(this, _chunks)) {
            joined.set(c, at);
            at += c.length;
          }
          return import_tweetnacl.default.hash(joined);
        }
      };
      _chunks = new WeakMap();
      Sha256 = class {
        constructor() {
          __privateAdd(this, _chunks2, []);
        }
        update(data) {
          __privateGet(this, _chunks2).push(data instanceof Uint8Array ? data : new TextEncoder().encode(String(data)));
          return this;
        }
        digest() {
          const total = __privateGet(this, _chunks2).reduce((n, c) => n + c.length, 0);
          const joined = new Uint8Array(total);
          let at = 0;
          for (const c of __privateGet(this, _chunks2)) {
            joined.set(c, at);
            at += c.length;
          }
          return sha256(joined);
        }
      };
      _chunks2 = new WeakMap();
      node_crypto_default = { randomBytes, createHash, createHmac };
    }
  });

  // node_modules/tweetnacl/nacl-fast.js
  var require_nacl_fast = __commonJS({
    "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
      init_buffer_global();
      init_process_global();
      (function(nacl14) {
        "use strict";
        var gf = function(init) {
          var i, r = new Float64Array(16);
          if (init)
            for (i = 0; i < init.length; i++)
              r[i] = init[i];
          return r;
        };
        var randombytes = function() {
          throw new Error("no PRNG");
        };
        var _0 = new Uint8Array(16);
        var _9 = new Uint8Array(32);
        _9[0] = 9;
        var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function ts64(x, i, h, l) {
          x[i] = h >> 24 & 255;
          x[i + 1] = h >> 16 & 255;
          x[i + 2] = h >> 8 & 255;
          x[i + 3] = h & 255;
          x[i + 4] = l >> 24 & 255;
          x[i + 5] = l >> 16 & 255;
          x[i + 6] = l >> 8 & 255;
          x[i + 7] = l & 255;
        }
        function vn(x, xi, y, yi, n) {
          var i, d = 0;
          for (i = 0; i < n; i++)
            d |= x[xi + i] ^ y[yi + i];
          return (1 & d - 1 >>> 8) - 1;
        }
        function crypto_verify_16(x, xi, y, yi) {
          return vn(x, xi, y, yi, 16);
        }
        function crypto_verify_32(x, xi, y, yi) {
          return vn(x, xi, y, yi, 32);
        }
        function core_salsa20(o, p, k, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
          for (var i = 0; i < 20; i += 2) {
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 32 - 7;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 32 - 13;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 32 - 7;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 32 - 13;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 32 - 7;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 32 - 13;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 32 - 7;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 32 - 13;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 32 - 7;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 32 - 13;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 32 - 7;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 32 - 13;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 32 - 7;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 32 - 13;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 32 - 7;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 32 - 13;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
          }
          x0 = x0 + j0 | 0;
          x1 = x1 + j1 | 0;
          x2 = x2 + j2 | 0;
          x3 = x3 + j3 | 0;
          x4 = x4 + j4 | 0;
          x5 = x5 + j5 | 0;
          x6 = x6 + j6 | 0;
          x7 = x7 + j7 | 0;
          x8 = x8 + j8 | 0;
          x9 = x9 + j9 | 0;
          x10 = x10 + j10 | 0;
          x11 = x11 + j11 | 0;
          x12 = x12 + j12 | 0;
          x13 = x13 + j13 | 0;
          x14 = x14 + j14 | 0;
          x15 = x15 + j15 | 0;
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x1 >>> 0 & 255;
          o[5] = x1 >>> 8 & 255;
          o[6] = x1 >>> 16 & 255;
          o[7] = x1 >>> 24 & 255;
          o[8] = x2 >>> 0 & 255;
          o[9] = x2 >>> 8 & 255;
          o[10] = x2 >>> 16 & 255;
          o[11] = x2 >>> 24 & 255;
          o[12] = x3 >>> 0 & 255;
          o[13] = x3 >>> 8 & 255;
          o[14] = x3 >>> 16 & 255;
          o[15] = x3 >>> 24 & 255;
          o[16] = x4 >>> 0 & 255;
          o[17] = x4 >>> 8 & 255;
          o[18] = x4 >>> 16 & 255;
          o[19] = x4 >>> 24 & 255;
          o[20] = x5 >>> 0 & 255;
          o[21] = x5 >>> 8 & 255;
          o[22] = x5 >>> 16 & 255;
          o[23] = x5 >>> 24 & 255;
          o[24] = x6 >>> 0 & 255;
          o[25] = x6 >>> 8 & 255;
          o[26] = x6 >>> 16 & 255;
          o[27] = x6 >>> 24 & 255;
          o[28] = x7 >>> 0 & 255;
          o[29] = x7 >>> 8 & 255;
          o[30] = x7 >>> 16 & 255;
          o[31] = x7 >>> 24 & 255;
          o[32] = x8 >>> 0 & 255;
          o[33] = x8 >>> 8 & 255;
          o[34] = x8 >>> 16 & 255;
          o[35] = x8 >>> 24 & 255;
          o[36] = x9 >>> 0 & 255;
          o[37] = x9 >>> 8 & 255;
          o[38] = x9 >>> 16 & 255;
          o[39] = x9 >>> 24 & 255;
          o[40] = x10 >>> 0 & 255;
          o[41] = x10 >>> 8 & 255;
          o[42] = x10 >>> 16 & 255;
          o[43] = x10 >>> 24 & 255;
          o[44] = x11 >>> 0 & 255;
          o[45] = x11 >>> 8 & 255;
          o[46] = x11 >>> 16 & 255;
          o[47] = x11 >>> 24 & 255;
          o[48] = x12 >>> 0 & 255;
          o[49] = x12 >>> 8 & 255;
          o[50] = x12 >>> 16 & 255;
          o[51] = x12 >>> 24 & 255;
          o[52] = x13 >>> 0 & 255;
          o[53] = x13 >>> 8 & 255;
          o[54] = x13 >>> 16 & 255;
          o[55] = x13 >>> 24 & 255;
          o[56] = x14 >>> 0 & 255;
          o[57] = x14 >>> 8 & 255;
          o[58] = x14 >>> 16 & 255;
          o[59] = x14 >>> 24 & 255;
          o[60] = x15 >>> 0 & 255;
          o[61] = x15 >>> 8 & 255;
          o[62] = x15 >>> 16 & 255;
          o[63] = x15 >>> 24 & 255;
        }
        function core_hsalsa20(o, p, k, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
          for (var i = 0; i < 20; i += 2) {
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 32 - 7;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 32 - 13;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 32 - 7;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 32 - 13;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 32 - 7;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 32 - 13;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 32 - 7;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 32 - 13;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 32 - 7;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 32 - 13;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 32 - 7;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 32 - 13;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 32 - 7;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 32 - 13;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 32 - 7;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 32 - 13;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
          }
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x5 >>> 0 & 255;
          o[5] = x5 >>> 8 & 255;
          o[6] = x5 >>> 16 & 255;
          o[7] = x5 >>> 24 & 255;
          o[8] = x10 >>> 0 & 255;
          o[9] = x10 >>> 8 & 255;
          o[10] = x10 >>> 16 & 255;
          o[11] = x10 >>> 24 & 255;
          o[12] = x15 >>> 0 & 255;
          o[13] = x15 >>> 8 & 255;
          o[14] = x15 >>> 16 & 255;
          o[15] = x15 >>> 24 & 255;
          o[16] = x6 >>> 0 & 255;
          o[17] = x6 >>> 8 & 255;
          o[18] = x6 >>> 16 & 255;
          o[19] = x6 >>> 24 & 255;
          o[20] = x7 >>> 0 & 255;
          o[21] = x7 >>> 8 & 255;
          o[22] = x7 >>> 16 & 255;
          o[23] = x7 >>> 24 & 255;
          o[24] = x8 >>> 0 & 255;
          o[25] = x8 >>> 8 & 255;
          o[26] = x8 >>> 16 & 255;
          o[27] = x8 >>> 24 & 255;
          o[28] = x9 >>> 0 & 255;
          o[29] = x9 >>> 8 & 255;
          o[30] = x9 >>> 16 & 255;
          o[31] = x9 >>> 24 & 255;
        }
        function crypto_core_salsa20(out, inp, k, c) {
          core_salsa20(out, inp, k, c);
        }
        function crypto_core_hsalsa20(out, inp, k, c) {
          core_hsalsa20(out, inp, k, c);
        }
        var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
          var z = new Uint8Array(16), x = new Uint8Array(64);
          var u, i;
          for (i = 0; i < 16; i++)
            z[i] = 0;
          for (i = 0; i < 8; i++)
            z[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < 64; i++)
              c[cpos + i] = m[mpos + i] ^ x[i];
            u = 1;
            for (i = 8; i < 16; i++) {
              u = u + (z[i] & 255) | 0;
              z[i] = u & 255;
              u >>>= 8;
            }
            b -= 64;
            cpos += 64;
            mpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < b; i++)
              c[cpos + i] = m[mpos + i] ^ x[i];
          }
          return 0;
        }
        function crypto_stream_salsa20(c, cpos, b, n, k) {
          var z = new Uint8Array(16), x = new Uint8Array(64);
          var u, i;
          for (i = 0; i < 16; i++)
            z[i] = 0;
          for (i = 0; i < 8; i++)
            z[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < 64; i++)
              c[cpos + i] = x[i];
            u = 1;
            for (i = 8; i < 16; i++) {
              u = u + (z[i] & 255) | 0;
              z[i] = u & 255;
              u >>>= 8;
            }
            b -= 64;
            cpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < b; i++)
              c[cpos + i] = x[i];
          }
          return 0;
        }
        function crypto_stream(c, cpos, d, n, k) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k, sigma);
          var sn = new Uint8Array(8);
          for (var i = 0; i < 8; i++)
            sn[i] = n[i + 16];
          return crypto_stream_salsa20(c, cpos, d, sn, s);
        }
        function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k, sigma);
          var sn = new Uint8Array(8);
          for (var i = 0; i < 8; i++)
            sn[i] = n[i + 16];
          return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
        }
        var poly1305 = function(key2) {
          this.buffer = new Uint8Array(16);
          this.r = new Uint16Array(10);
          this.h = new Uint16Array(10);
          this.pad = new Uint16Array(8);
          this.leftover = 0;
          this.fin = 0;
          var t0, t1, t2, t3, t4, t5, t6, t7;
          t0 = key2[0] & 255 | (key2[1] & 255) << 8;
          this.r[0] = t0 & 8191;
          t1 = key2[2] & 255 | (key2[3] & 255) << 8;
          this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
          t2 = key2[4] & 255 | (key2[5] & 255) << 8;
          this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
          t3 = key2[6] & 255 | (key2[7] & 255) << 8;
          this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
          t4 = key2[8] & 255 | (key2[9] & 255) << 8;
          this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
          this.r[5] = t4 >>> 1 & 8190;
          t5 = key2[10] & 255 | (key2[11] & 255) << 8;
          this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
          t6 = key2[12] & 255 | (key2[13] & 255) << 8;
          this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
          t7 = key2[14] & 255 | (key2[15] & 255) << 8;
          this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
          this.r[9] = t7 >>> 5 & 127;
          this.pad[0] = key2[16] & 255 | (key2[17] & 255) << 8;
          this.pad[1] = key2[18] & 255 | (key2[19] & 255) << 8;
          this.pad[2] = key2[20] & 255 | (key2[21] & 255) << 8;
          this.pad[3] = key2[22] & 255 | (key2[23] & 255) << 8;
          this.pad[4] = key2[24] & 255 | (key2[25] & 255) << 8;
          this.pad[5] = key2[26] & 255 | (key2[27] & 255) << 8;
          this.pad[6] = key2[28] & 255 | (key2[29] & 255) << 8;
          this.pad[7] = key2[30] & 255 | (key2[31] & 255) << 8;
        };
        poly1305.prototype.blocks = function(m, mpos, bytes) {
          var hibit = this.fin ? 0 : 1 << 11;
          var t0, t1, t2, t3, t4, t5, t6, t7, c;
          var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
          var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
          var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
          while (bytes >= 16) {
            t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
            h0 += t0 & 8191;
            t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 8191;
            t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 8191;
            t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 8191;
            t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 8191;
            h5 += t4 >>> 1 & 8191;
            t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 8191;
            t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 8191;
            t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 8191;
            h9 += t7 >>> 5 | hibit;
            c = 0;
            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 8191;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 8191;
            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 8191;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 8191;
            d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 8191;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 8191;
            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 8191;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 8191;
            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 8191;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 8191;
            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 8191;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 8191;
            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 8191;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 8191;
            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 8191;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 8191;
            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 8191;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 8191;
            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 8191;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 8191;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 8191;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
          }
          this.h[0] = h0;
          this.h[1] = h1;
          this.h[2] = h2;
          this.h[3] = h3;
          this.h[4] = h4;
          this.h[5] = h5;
          this.h[6] = h6;
          this.h[7] = h7;
          this.h[8] = h8;
          this.h[9] = h9;
        };
        poly1305.prototype.finish = function(mac, macpos) {
          var g = new Uint16Array(10);
          var c, mask, f, i;
          if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for (; i < 16; i++)
              this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
          }
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          for (i = 2; i < 10; i++) {
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 8191;
          }
          this.h[0] += c * 5;
          c = this.h[0] >>> 13;
          this.h[0] &= 8191;
          this.h[1] += c;
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          this.h[2] += c;
          g[0] = this.h[0] + 5;
          c = g[0] >>> 13;
          g[0] &= 8191;
          for (i = 1; i < 10; i++) {
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 8191;
          }
          g[9] -= 1 << 13;
          mask = (c ^ 1) - 1;
          for (i = 0; i < 10; i++)
            g[i] &= mask;
          mask = ~mask;
          for (i = 0; i < 10; i++)
            this.h[i] = this.h[i] & mask | g[i];
          this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
          this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
          this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
          this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
          this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
          this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
          this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
          this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
          f = this.h[0] + this.pad[0];
          this.h[0] = f & 65535;
          for (i = 1; i < 8; i++) {
            f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
            this.h[i] = f & 65535;
          }
          mac[macpos + 0] = this.h[0] >>> 0 & 255;
          mac[macpos + 1] = this.h[0] >>> 8 & 255;
          mac[macpos + 2] = this.h[1] >>> 0 & 255;
          mac[macpos + 3] = this.h[1] >>> 8 & 255;
          mac[macpos + 4] = this.h[2] >>> 0 & 255;
          mac[macpos + 5] = this.h[2] >>> 8 & 255;
          mac[macpos + 6] = this.h[3] >>> 0 & 255;
          mac[macpos + 7] = this.h[3] >>> 8 & 255;
          mac[macpos + 8] = this.h[4] >>> 0 & 255;
          mac[macpos + 9] = this.h[4] >>> 8 & 255;
          mac[macpos + 10] = this.h[5] >>> 0 & 255;
          mac[macpos + 11] = this.h[5] >>> 8 & 255;
          mac[macpos + 12] = this.h[6] >>> 0 & 255;
          mac[macpos + 13] = this.h[6] >>> 8 & 255;
          mac[macpos + 14] = this.h[7] >>> 0 & 255;
          mac[macpos + 15] = this.h[7] >>> 8 & 255;
        };
        poly1305.prototype.update = function(m, mpos, bytes) {
          var i, want;
          if (this.leftover) {
            want = 16 - this.leftover;
            if (want > bytes)
              want = bytes;
            for (i = 0; i < want; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16)
              return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
          }
          if (bytes >= 16) {
            want = bytes - bytes % 16;
            this.blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
          }
          if (bytes) {
            for (i = 0; i < bytes; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes;
          }
        };
        function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
          var s = new poly1305(k);
          s.update(m, mpos, n);
          s.finish(out, outpos);
          return 0;
        }
        function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
          var x = new Uint8Array(16);
          crypto_onetimeauth(x, 0, m, mpos, n, k);
          return crypto_verify_16(h, hpos, x, 0);
        }
        function crypto_secretbox(c, m, d, n, k) {
          var i;
          if (d < 32)
            return -1;
          crypto_stream_xor(c, 0, m, 0, d, n, k);
          crypto_onetimeauth(c, 16, c, 32, d - 32, c);
          for (i = 0; i < 16; i++)
            c[i] = 0;
          return 0;
        }
        function crypto_secretbox_open(m, c, d, n, k) {
          var i;
          var x = new Uint8Array(32);
          if (d < 32)
            return -1;
          crypto_stream(x, 0, 32, n, k);
          if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0)
            return -1;
          crypto_stream_xor(m, 0, c, 0, d, n, k);
          for (i = 0; i < 32; i++)
            m[i] = 0;
          return 0;
        }
        function set25519(r, a) {
          var i;
          for (i = 0; i < 16; i++)
            r[i] = a[i] | 0;
        }
        function car25519(o) {
          var i, v, c = 1;
          for (i = 0; i < 16; i++) {
            v = o[i] + c + 65535;
            c = Math.floor(v / 65536);
            o[i] = v - c * 65536;
          }
          o[0] += c - 1 + 37 * (c - 1);
        }
        function sel25519(p, q, b) {
          var t, c = ~(b - 1);
          for (var i = 0; i < 16; i++) {
            t = c & (p[i] ^ q[i]);
            p[i] ^= t;
            q[i] ^= t;
          }
        }
        function pack25519(o, n) {
          var i, j, b;
          var m = gf(), t = gf();
          for (i = 0; i < 16; i++)
            t[i] = n[i];
          car25519(t);
          car25519(t);
          car25519(t);
          for (j = 0; j < 2; j++) {
            m[0] = t[0] - 65517;
            for (i = 1; i < 15; i++) {
              m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
              m[i - 1] &= 65535;
            }
            m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 65535;
            sel25519(t, m, 1 - b);
          }
          for (i = 0; i < 16; i++) {
            o[2 * i] = t[i] & 255;
            o[2 * i + 1] = t[i] >> 8;
          }
        }
        function neq25519(a, b) {
          var c = new Uint8Array(32), d = new Uint8Array(32);
          pack25519(c, a);
          pack25519(d, b);
          return crypto_verify_32(c, 0, d, 0);
        }
        function par25519(a) {
          var d = new Uint8Array(32);
          pack25519(d, a);
          return d[0] & 1;
        }
        function unpack25519(o, n) {
          var i;
          for (i = 0; i < 16; i++)
            o[i] = n[2 * i] + (n[2 * i + 1] << 8);
          o[15] &= 32767;
        }
        function A(o, a, b) {
          for (var i = 0; i < 16; i++)
            o[i] = a[i] + b[i];
        }
        function Z(o, a, b) {
          for (var i = 0; i < 16; i++)
            o[i] = a[i] - b[i];
        }
        function M(o, a, b) {
          var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
          v = a[0];
          t0 += v * b0;
          t1 += v * b1;
          t2 += v * b2;
          t3 += v * b3;
          t4 += v * b4;
          t5 += v * b5;
          t6 += v * b6;
          t7 += v * b7;
          t8 += v * b8;
          t9 += v * b9;
          t10 += v * b10;
          t11 += v * b11;
          t12 += v * b12;
          t13 += v * b13;
          t14 += v * b14;
          t15 += v * b15;
          v = a[1];
          t1 += v * b0;
          t2 += v * b1;
          t3 += v * b2;
          t4 += v * b3;
          t5 += v * b4;
          t6 += v * b5;
          t7 += v * b6;
          t8 += v * b7;
          t9 += v * b8;
          t10 += v * b9;
          t11 += v * b10;
          t12 += v * b11;
          t13 += v * b12;
          t14 += v * b13;
          t15 += v * b14;
          t16 += v * b15;
          v = a[2];
          t2 += v * b0;
          t3 += v * b1;
          t4 += v * b2;
          t5 += v * b3;
          t6 += v * b4;
          t7 += v * b5;
          t8 += v * b6;
          t9 += v * b7;
          t10 += v * b8;
          t11 += v * b9;
          t12 += v * b10;
          t13 += v * b11;
          t14 += v * b12;
          t15 += v * b13;
          t16 += v * b14;
          t17 += v * b15;
          v = a[3];
          t3 += v * b0;
          t4 += v * b1;
          t5 += v * b2;
          t6 += v * b3;
          t7 += v * b4;
          t8 += v * b5;
          t9 += v * b6;
          t10 += v * b7;
          t11 += v * b8;
          t12 += v * b9;
          t13 += v * b10;
          t14 += v * b11;
          t15 += v * b12;
          t16 += v * b13;
          t17 += v * b14;
          t18 += v * b15;
          v = a[4];
          t4 += v * b0;
          t5 += v * b1;
          t6 += v * b2;
          t7 += v * b3;
          t8 += v * b4;
          t9 += v * b5;
          t10 += v * b6;
          t11 += v * b7;
          t12 += v * b8;
          t13 += v * b9;
          t14 += v * b10;
          t15 += v * b11;
          t16 += v * b12;
          t17 += v * b13;
          t18 += v * b14;
          t19 += v * b15;
          v = a[5];
          t5 += v * b0;
          t6 += v * b1;
          t7 += v * b2;
          t8 += v * b3;
          t9 += v * b4;
          t10 += v * b5;
          t11 += v * b6;
          t12 += v * b7;
          t13 += v * b8;
          t14 += v * b9;
          t15 += v * b10;
          t16 += v * b11;
          t17 += v * b12;
          t18 += v * b13;
          t19 += v * b14;
          t20 += v * b15;
          v = a[6];
          t6 += v * b0;
          t7 += v * b1;
          t8 += v * b2;
          t9 += v * b3;
          t10 += v * b4;
          t11 += v * b5;
          t12 += v * b6;
          t13 += v * b7;
          t14 += v * b8;
          t15 += v * b9;
          t16 += v * b10;
          t17 += v * b11;
          t18 += v * b12;
          t19 += v * b13;
          t20 += v * b14;
          t21 += v * b15;
          v = a[7];
          t7 += v * b0;
          t8 += v * b1;
          t9 += v * b2;
          t10 += v * b3;
          t11 += v * b4;
          t12 += v * b5;
          t13 += v * b6;
          t14 += v * b7;
          t15 += v * b8;
          t16 += v * b9;
          t17 += v * b10;
          t18 += v * b11;
          t19 += v * b12;
          t20 += v * b13;
          t21 += v * b14;
          t22 += v * b15;
          v = a[8];
          t8 += v * b0;
          t9 += v * b1;
          t10 += v * b2;
          t11 += v * b3;
          t12 += v * b4;
          t13 += v * b5;
          t14 += v * b6;
          t15 += v * b7;
          t16 += v * b8;
          t17 += v * b9;
          t18 += v * b10;
          t19 += v * b11;
          t20 += v * b12;
          t21 += v * b13;
          t22 += v * b14;
          t23 += v * b15;
          v = a[9];
          t9 += v * b0;
          t10 += v * b1;
          t11 += v * b2;
          t12 += v * b3;
          t13 += v * b4;
          t14 += v * b5;
          t15 += v * b6;
          t16 += v * b7;
          t17 += v * b8;
          t18 += v * b9;
          t19 += v * b10;
          t20 += v * b11;
          t21 += v * b12;
          t22 += v * b13;
          t23 += v * b14;
          t24 += v * b15;
          v = a[10];
          t10 += v * b0;
          t11 += v * b1;
          t12 += v * b2;
          t13 += v * b3;
          t14 += v * b4;
          t15 += v * b5;
          t16 += v * b6;
          t17 += v * b7;
          t18 += v * b8;
          t19 += v * b9;
          t20 += v * b10;
          t21 += v * b11;
          t22 += v * b12;
          t23 += v * b13;
          t24 += v * b14;
          t25 += v * b15;
          v = a[11];
          t11 += v * b0;
          t12 += v * b1;
          t13 += v * b2;
          t14 += v * b3;
          t15 += v * b4;
          t16 += v * b5;
          t17 += v * b6;
          t18 += v * b7;
          t19 += v * b8;
          t20 += v * b9;
          t21 += v * b10;
          t22 += v * b11;
          t23 += v * b12;
          t24 += v * b13;
          t25 += v * b14;
          t26 += v * b15;
          v = a[12];
          t12 += v * b0;
          t13 += v * b1;
          t14 += v * b2;
          t15 += v * b3;
          t16 += v * b4;
          t17 += v * b5;
          t18 += v * b6;
          t19 += v * b7;
          t20 += v * b8;
          t21 += v * b9;
          t22 += v * b10;
          t23 += v * b11;
          t24 += v * b12;
          t25 += v * b13;
          t26 += v * b14;
          t27 += v * b15;
          v = a[13];
          t13 += v * b0;
          t14 += v * b1;
          t15 += v * b2;
          t16 += v * b3;
          t17 += v * b4;
          t18 += v * b5;
          t19 += v * b6;
          t20 += v * b7;
          t21 += v * b8;
          t22 += v * b9;
          t23 += v * b10;
          t24 += v * b11;
          t25 += v * b12;
          t26 += v * b13;
          t27 += v * b14;
          t28 += v * b15;
          v = a[14];
          t14 += v * b0;
          t15 += v * b1;
          t16 += v * b2;
          t17 += v * b3;
          t18 += v * b4;
          t19 += v * b5;
          t20 += v * b6;
          t21 += v * b7;
          t22 += v * b8;
          t23 += v * b9;
          t24 += v * b10;
          t25 += v * b11;
          t26 += v * b12;
          t27 += v * b13;
          t28 += v * b14;
          t29 += v * b15;
          v = a[15];
          t15 += v * b0;
          t16 += v * b1;
          t17 += v * b2;
          t18 += v * b3;
          t19 += v * b4;
          t20 += v * b5;
          t21 += v * b6;
          t22 += v * b7;
          t23 += v * b8;
          t24 += v * b9;
          t25 += v * b10;
          t26 += v * b11;
          t27 += v * b12;
          t28 += v * b13;
          t29 += v * b14;
          t30 += v * b15;
          t0 += 38 * t16;
          t1 += 38 * t17;
          t2 += 38 * t18;
          t3 += 38 * t19;
          t4 += 38 * t20;
          t5 += 38 * t21;
          t6 += 38 * t22;
          t7 += 38 * t23;
          t8 += 38 * t24;
          t9 += 38 * t25;
          t10 += 38 * t26;
          t11 += 38 * t27;
          t12 += 38 * t28;
          t13 += 38 * t29;
          t14 += 38 * t30;
          c = 1;
          v = t0 + c + 65535;
          c = Math.floor(v / 65536);
          t0 = v - c * 65536;
          v = t1 + c + 65535;
          c = Math.floor(v / 65536);
          t1 = v - c * 65536;
          v = t2 + c + 65535;
          c = Math.floor(v / 65536);
          t2 = v - c * 65536;
          v = t3 + c + 65535;
          c = Math.floor(v / 65536);
          t3 = v - c * 65536;
          v = t4 + c + 65535;
          c = Math.floor(v / 65536);
          t4 = v - c * 65536;
          v = t5 + c + 65535;
          c = Math.floor(v / 65536);
          t5 = v - c * 65536;
          v = t6 + c + 65535;
          c = Math.floor(v / 65536);
          t6 = v - c * 65536;
          v = t7 + c + 65535;
          c = Math.floor(v / 65536);
          t7 = v - c * 65536;
          v = t8 + c + 65535;
          c = Math.floor(v / 65536);
          t8 = v - c * 65536;
          v = t9 + c + 65535;
          c = Math.floor(v / 65536);
          t9 = v - c * 65536;
          v = t10 + c + 65535;
          c = Math.floor(v / 65536);
          t10 = v - c * 65536;
          v = t11 + c + 65535;
          c = Math.floor(v / 65536);
          t11 = v - c * 65536;
          v = t12 + c + 65535;
          c = Math.floor(v / 65536);
          t12 = v - c * 65536;
          v = t13 + c + 65535;
          c = Math.floor(v / 65536);
          t13 = v - c * 65536;
          v = t14 + c + 65535;
          c = Math.floor(v / 65536);
          t14 = v - c * 65536;
          v = t15 + c + 65535;
          c = Math.floor(v / 65536);
          t15 = v - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          c = 1;
          v = t0 + c + 65535;
          c = Math.floor(v / 65536);
          t0 = v - c * 65536;
          v = t1 + c + 65535;
          c = Math.floor(v / 65536);
          t1 = v - c * 65536;
          v = t2 + c + 65535;
          c = Math.floor(v / 65536);
          t2 = v - c * 65536;
          v = t3 + c + 65535;
          c = Math.floor(v / 65536);
          t3 = v - c * 65536;
          v = t4 + c + 65535;
          c = Math.floor(v / 65536);
          t4 = v - c * 65536;
          v = t5 + c + 65535;
          c = Math.floor(v / 65536);
          t5 = v - c * 65536;
          v = t6 + c + 65535;
          c = Math.floor(v / 65536);
          t6 = v - c * 65536;
          v = t7 + c + 65535;
          c = Math.floor(v / 65536);
          t7 = v - c * 65536;
          v = t8 + c + 65535;
          c = Math.floor(v / 65536);
          t8 = v - c * 65536;
          v = t9 + c + 65535;
          c = Math.floor(v / 65536);
          t9 = v - c * 65536;
          v = t10 + c + 65535;
          c = Math.floor(v / 65536);
          t10 = v - c * 65536;
          v = t11 + c + 65535;
          c = Math.floor(v / 65536);
          t11 = v - c * 65536;
          v = t12 + c + 65535;
          c = Math.floor(v / 65536);
          t12 = v - c * 65536;
          v = t13 + c + 65535;
          c = Math.floor(v / 65536);
          t13 = v - c * 65536;
          v = t14 + c + 65535;
          c = Math.floor(v / 65536);
          t14 = v - c * 65536;
          v = t15 + c + 65535;
          c = Math.floor(v / 65536);
          t15 = v - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          o[0] = t0;
          o[1] = t1;
          o[2] = t2;
          o[3] = t3;
          o[4] = t4;
          o[5] = t5;
          o[6] = t6;
          o[7] = t7;
          o[8] = t8;
          o[9] = t9;
          o[10] = t10;
          o[11] = t11;
          o[12] = t12;
          o[13] = t13;
          o[14] = t14;
          o[15] = t15;
        }
        function S(o, a) {
          M(o, a, a);
        }
        function inv25519(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++)
            c[a] = i[a];
          for (a = 253; a >= 0; a--) {
            S(c, c);
            if (a !== 2 && a !== 4)
              M(c, c, i);
          }
          for (a = 0; a < 16; a++)
            o[a] = c[a];
        }
        function pow2523(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++)
            c[a] = i[a];
          for (a = 250; a >= 0; a--) {
            S(c, c);
            if (a !== 1)
              M(c, c, i);
          }
          for (a = 0; a < 16; a++)
            o[a] = c[a];
        }
        function crypto_scalarmult(q, n, p) {
          var z = new Uint8Array(32);
          var x = new Float64Array(80), r, i;
          var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
          for (i = 0; i < 31; i++)
            z[i] = n[i];
          z[31] = n[31] & 127 | 64;
          z[0] &= 248;
          unpack25519(x, p);
          for (i = 0; i < 16; i++) {
            b[i] = x[i];
            d[i] = a[i] = c[i] = 0;
          }
          a[0] = d[0] = 1;
          for (i = 254; i >= 0; --i) {
            r = z[i >>> 3] >>> (i & 7) & 1;
            sel25519(a, b, r);
            sel25519(c, d, r);
            A(e, a, c);
            Z(a, a, c);
            A(c, b, d);
            Z(b, b, d);
            S(d, e);
            S(f, a);
            M(a, c, a);
            M(c, b, e);
            A(e, a, c);
            Z(a, a, c);
            S(b, a);
            Z(c, d, f);
            M(a, c, _121665);
            A(a, a, d);
            M(c, c, a);
            M(a, d, f);
            M(d, b, x);
            S(b, e);
            sel25519(a, b, r);
            sel25519(c, d, r);
          }
          for (i = 0; i < 16; i++) {
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d[i];
          }
          var x32 = x.subarray(32);
          var x16 = x.subarray(16);
          inv25519(x32, x32);
          M(x16, x16, x32);
          pack25519(q, x16);
          return 0;
        }
        function crypto_scalarmult_base(q, n) {
          return crypto_scalarmult(q, n, _9);
        }
        function crypto_box_keypair(y, x) {
          randombytes(x, 32);
          return crypto_scalarmult_base(y, x);
        }
        function crypto_box_beforenm(k, y, x) {
          var s = new Uint8Array(32);
          crypto_scalarmult(s, x, y);
          return crypto_core_hsalsa20(k, _0, s, sigma);
        }
        var crypto_box_afternm = crypto_secretbox;
        var crypto_box_open_afternm = crypto_secretbox_open;
        function crypto_box(c, m, d, n, y, x) {
          var k = new Uint8Array(32);
          crypto_box_beforenm(k, y, x);
          return crypto_box_afternm(c, m, d, n, k);
        }
        function crypto_box_open(m, c, d, n, y, x) {
          var k = new Uint8Array(32);
          crypto_box_beforenm(k, y, x);
          return crypto_box_open_afternm(m, c, d, n, k);
        }
        var K = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        function crypto_hashblocks_hl(hh, hl, m, n) {
          var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
          var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
          var pos = 0;
          while (n >= 128) {
            for (i = 0; i < 16; i++) {
              j = 8 * i + pos;
              wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
              wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
            }
            for (i = 0; i < 80; i++) {
              bh0 = ah0;
              bh1 = ah1;
              bh2 = ah2;
              bh3 = ah3;
              bh4 = ah4;
              bh5 = ah5;
              bh6 = ah6;
              bh7 = ah7;
              bl0 = al0;
              bl1 = al1;
              bl2 = al2;
              bl3 = al3;
              bl4 = al4;
              bl5 = al5;
              bl6 = al6;
              bl7 = al7;
              h = ah7;
              l = al7;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d = h >>> 16;
              h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
              l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = ah4 & ah5 ^ ~ah4 & ah6;
              l = al4 & al5 ^ ~al4 & al6;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = K[i * 2];
              l = K[i * 2 + 1];
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = wh[i % 16];
              l = wl[i % 16];
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              th = c & 65535 | d << 16;
              tl = a & 65535 | b << 16;
              h = th;
              l = tl;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d = h >>> 16;
              h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
              l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
              l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              bh7 = c & 65535 | d << 16;
              bl7 = a & 65535 | b << 16;
              h = bh3;
              l = bl3;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d = h >>> 16;
              h = th;
              l = tl;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              bh3 = c & 65535 | d << 16;
              bl3 = a & 65535 | b << 16;
              ah1 = bh0;
              ah2 = bh1;
              ah3 = bh2;
              ah4 = bh3;
              ah5 = bh4;
              ah6 = bh5;
              ah7 = bh6;
              ah0 = bh7;
              al1 = bl0;
              al2 = bl1;
              al3 = bl2;
              al4 = bl3;
              al5 = bl4;
              al6 = bl5;
              al7 = bl6;
              al0 = bl7;
              if (i % 16 === 15) {
                for (j = 0; j < 16; j++) {
                  h = wh[j];
                  l = wl[j];
                  a = l & 65535;
                  b = l >>> 16;
                  c = h & 65535;
                  d = h >>> 16;
                  h = wh[(j + 9) % 16];
                  l = wl[(j + 9) % 16];
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d += h >>> 16;
                  th = wh[(j + 1) % 16];
                  tl = wl[(j + 1) % 16];
                  h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                  l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d += h >>> 16;
                  th = wh[(j + 14) % 16];
                  tl = wl[(j + 14) % 16];
                  h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                  l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  wh[j] = c & 65535 | d << 16;
                  wl[j] = a & 65535 | b << 16;
                }
              }
            }
            h = ah0;
            l = al0;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[0];
            l = hl[0];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[0] = ah0 = c & 65535 | d << 16;
            hl[0] = al0 = a & 65535 | b << 16;
            h = ah1;
            l = al1;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[1];
            l = hl[1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[1] = ah1 = c & 65535 | d << 16;
            hl[1] = al1 = a & 65535 | b << 16;
            h = ah2;
            l = al2;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[2];
            l = hl[2];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[2] = ah2 = c & 65535 | d << 16;
            hl[2] = al2 = a & 65535 | b << 16;
            h = ah3;
            l = al3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[3];
            l = hl[3];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[3] = ah3 = c & 65535 | d << 16;
            hl[3] = al3 = a & 65535 | b << 16;
            h = ah4;
            l = al4;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[4];
            l = hl[4];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[4] = ah4 = c & 65535 | d << 16;
            hl[4] = al4 = a & 65535 | b << 16;
            h = ah5;
            l = al5;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[5];
            l = hl[5];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[5] = ah5 = c & 65535 | d << 16;
            hl[5] = al5 = a & 65535 | b << 16;
            h = ah6;
            l = al6;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[6];
            l = hl[6];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[6] = ah6 = c & 65535 | d << 16;
            hl[6] = al6 = a & 65535 | b << 16;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[7];
            l = hl[7];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[7] = ah7 = c & 65535 | d << 16;
            hl[7] = al7 = a & 65535 | b << 16;
            pos += 128;
            n -= 128;
          }
          return n;
        }
        function crypto_hash(out, m, n) {
          var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
          hh[0] = 1779033703;
          hh[1] = 3144134277;
          hh[2] = 1013904242;
          hh[3] = 2773480762;
          hh[4] = 1359893119;
          hh[5] = 2600822924;
          hh[6] = 528734635;
          hh[7] = 1541459225;
          hl[0] = 4089235720;
          hl[1] = 2227873595;
          hl[2] = 4271175723;
          hl[3] = 1595750129;
          hl[4] = 2917565137;
          hl[5] = 725511199;
          hl[6] = 4215389547;
          hl[7] = 327033209;
          crypto_hashblocks_hl(hh, hl, m, n);
          n %= 128;
          for (i = 0; i < n; i++)
            x[i] = m[b - n + i];
          x[n] = 128;
          n = 256 - 128 * (n < 112 ? 1 : 0);
          x[n - 9] = 0;
          ts64(x, n - 8, b / 536870912 | 0, b << 3);
          crypto_hashblocks_hl(hh, hl, x, n);
          for (i = 0; i < 8; i++)
            ts64(out, 8 * i, hh[i], hl[i]);
          return 0;
        }
        function add(p, q) {
          var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
          Z(a, p[1], p[0]);
          Z(t, q[1], q[0]);
          M(a, a, t);
          A(b, p[0], p[1]);
          A(t, q[0], q[1]);
          M(b, b, t);
          M(c, p[3], q[3]);
          M(c, c, D2);
          M(d, p[2], q[2]);
          A(d, d, d);
          Z(e, b, a);
          Z(f, d, c);
          A(g, d, c);
          A(h, b, a);
          M(p[0], e, f);
          M(p[1], h, g);
          M(p[2], g, f);
          M(p[3], e, h);
        }
        function cswap(p, q, b) {
          var i;
          for (i = 0; i < 4; i++) {
            sel25519(p[i], q[i], b);
          }
        }
        function pack(r, p) {
          var tx2 = gf(), ty = gf(), zi = gf();
          inv25519(zi, p[2]);
          M(tx2, p[0], zi);
          M(ty, p[1], zi);
          pack25519(r, ty);
          r[31] ^= par25519(tx2) << 7;
        }
        function scalarmult(p, q, s) {
          var b, i;
          set25519(p[0], gf0);
          set25519(p[1], gf1);
          set25519(p[2], gf1);
          set25519(p[3], gf0);
          for (i = 255; i >= 0; --i) {
            b = s[i / 8 | 0] >> (i & 7) & 1;
            cswap(p, q, b);
            add(q, p);
            add(p, p);
            cswap(p, q, b);
          }
        }
        function scalarbase(p, s) {
          var q = [gf(), gf(), gf(), gf()];
          set25519(q[0], X);
          set25519(q[1], Y);
          set25519(q[2], gf1);
          M(q[3], X, Y);
          scalarmult(p, q, s);
        }
        function crypto_sign_keypair(pk, sk, seeded) {
          var d = new Uint8Array(64);
          var p = [gf(), gf(), gf(), gf()];
          var i;
          if (!seeded)
            randombytes(sk, 32);
          crypto_hash(d, sk, 32);
          d[0] &= 248;
          d[31] &= 127;
          d[31] |= 64;
          scalarbase(p, d);
          pack(pk, p);
          for (i = 0; i < 32; i++)
            sk[i + 32] = pk[i];
          return 0;
        }
        var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function modL(r, x) {
          var carry, i, j, k;
          for (i = 63; i >= 32; --i) {
            carry = 0;
            for (j = i - 32, k = i - 12; j < k; ++j) {
              x[j] += carry - 16 * x[i] * L[j - (i - 32)];
              carry = Math.floor((x[j] + 128) / 256);
              x[j] -= carry * 256;
            }
            x[j] += carry;
            x[i] = 0;
          }
          carry = 0;
          for (j = 0; j < 32; j++) {
            x[j] += carry - (x[31] >> 4) * L[j];
            carry = x[j] >> 8;
            x[j] &= 255;
          }
          for (j = 0; j < 32; j++)
            x[j] -= carry * L[j];
          for (i = 0; i < 32; i++) {
            x[i + 1] += x[i] >> 8;
            r[i] = x[i] & 255;
          }
        }
        function reduce(r) {
          var x = new Float64Array(64), i;
          for (i = 0; i < 64; i++)
            x[i] = r[i];
          for (i = 0; i < 64; i++)
            r[i] = 0;
          modL(r, x);
        }
        function crypto_sign(sm, m, n, sk) {
          var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
          var i, j, x = new Float64Array(64);
          var p = [gf(), gf(), gf(), gf()];
          crypto_hash(d, sk, 32);
          d[0] &= 248;
          d[31] &= 127;
          d[31] |= 64;
          var smlen = n + 64;
          for (i = 0; i < n; i++)
            sm[64 + i] = m[i];
          for (i = 0; i < 32; i++)
            sm[32 + i] = d[32 + i];
          crypto_hash(r, sm.subarray(32), n + 32);
          reduce(r);
          scalarbase(p, r);
          pack(sm, p);
          for (i = 32; i < 64; i++)
            sm[i] = sk[i];
          crypto_hash(h, sm, n + 64);
          reduce(h);
          for (i = 0; i < 64; i++)
            x[i] = 0;
          for (i = 0; i < 32; i++)
            x[i] = r[i];
          for (i = 0; i < 32; i++) {
            for (j = 0; j < 32; j++) {
              x[i + j] += h[i] * d[j];
            }
          }
          modL(sm.subarray(32), x);
          return smlen;
        }
        function unpackneg(r, p) {
          var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
          set25519(r[2], gf1);
          unpack25519(r[1], p);
          S(num, r[1]);
          M(den, num, D);
          Z(num, num, r[2]);
          A(den, r[2], den);
          S(den2, den);
          S(den4, den2);
          M(den6, den4, den2);
          M(t, den6, num);
          M(t, t, den);
          pow2523(t, t);
          M(t, t, num);
          M(t, t, den);
          M(t, t, den);
          M(r[0], t, den);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num))
            M(r[0], r[0], I);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num))
            return -1;
          if (par25519(r[0]) === p[31] >> 7)
            Z(r[0], gf0, r[0]);
          M(r[3], r[0], r[1]);
          return 0;
        }
        function crypto_sign_open(m, sm, n, pk) {
          var i;
          var t = new Uint8Array(32), h = new Uint8Array(64);
          var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
          if (n < 64)
            return -1;
          if (unpackneg(q, pk))
            return -1;
          for (i = 0; i < n; i++)
            m[i] = sm[i];
          for (i = 0; i < 32; i++)
            m[i + 32] = pk[i];
          crypto_hash(h, m, n);
          reduce(h);
          scalarmult(p, q, h);
          scalarbase(q, sm.subarray(32));
          add(p, q);
          pack(t, p);
          n -= 64;
          if (crypto_verify_32(sm, 0, t, 0)) {
            for (i = 0; i < n; i++)
              m[i] = 0;
            return -1;
          }
          for (i = 0; i < n; i++)
            m[i] = sm[i + 64];
          return n;
        }
        var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
        nacl14.lowlevel = {
          crypto_core_hsalsa20,
          crypto_stream_xor,
          crypto_stream,
          crypto_stream_salsa20_xor,
          crypto_stream_salsa20,
          crypto_onetimeauth,
          crypto_onetimeauth_verify,
          crypto_verify_16,
          crypto_verify_32,
          crypto_secretbox,
          crypto_secretbox_open,
          crypto_scalarmult,
          crypto_scalarmult_base,
          crypto_box_beforenm,
          crypto_box_afternm,
          crypto_box,
          crypto_box_open,
          crypto_box_keypair,
          crypto_hash,
          crypto_sign,
          crypto_sign_keypair,
          crypto_sign_open,
          crypto_secretbox_KEYBYTES,
          crypto_secretbox_NONCEBYTES,
          crypto_secretbox_ZEROBYTES,
          crypto_secretbox_BOXZEROBYTES,
          crypto_scalarmult_BYTES,
          crypto_scalarmult_SCALARBYTES,
          crypto_box_PUBLICKEYBYTES,
          crypto_box_SECRETKEYBYTES,
          crypto_box_BEFORENMBYTES,
          crypto_box_NONCEBYTES,
          crypto_box_ZEROBYTES,
          crypto_box_BOXZEROBYTES,
          crypto_sign_BYTES,
          crypto_sign_PUBLICKEYBYTES,
          crypto_sign_SECRETKEYBYTES,
          crypto_sign_SEEDBYTES,
          crypto_hash_BYTES,
          gf,
          D,
          L,
          pack25519,
          unpack25519,
          M,
          A,
          S,
          Z,
          pow2523,
          add,
          set25519,
          modL,
          scalarmult,
          scalarbase
        };
        function checkLengths(k, n) {
          if (k.length !== crypto_secretbox_KEYBYTES)
            throw new Error("bad key size");
          if (n.length !== crypto_secretbox_NONCEBYTES)
            throw new Error("bad nonce size");
        }
        function checkBoxLengths(pk, sk) {
          if (pk.length !== crypto_box_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          if (sk.length !== crypto_box_SECRETKEYBYTES)
            throw new Error("bad secret key size");
        }
        function checkArrayTypes() {
          for (var i = 0; i < arguments.length; i++) {
            if (!(arguments[i] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
          }
        }
        function cleanup(arr) {
          for (var i = 0; i < arr.length; i++)
            arr[i] = 0;
        }
        nacl14.randomBytes = function(n) {
          var b = new Uint8Array(n);
          randombytes(b, n);
          return b;
        };
        nacl14.secretbox = function(msg, nonce, key2) {
          checkArrayTypes(msg, nonce, key2);
          checkLengths(key2, nonce);
          var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
          var c = new Uint8Array(m.length);
          for (var i = 0; i < msg.length; i++)
            m[i + crypto_secretbox_ZEROBYTES] = msg[i];
          crypto_secretbox(c, m, m.length, nonce, key2);
          return c.subarray(crypto_secretbox_BOXZEROBYTES);
        };
        nacl14.secretbox.open = function(box, nonce, key2) {
          checkArrayTypes(box, nonce, key2);
          checkLengths(key2, nonce);
          var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
          var m = new Uint8Array(c.length);
          for (var i = 0; i < box.length; i++)
            c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
          if (c.length < 32)
            return null;
          if (crypto_secretbox_open(m, c, c.length, nonce, key2) !== 0)
            return null;
          return m.subarray(crypto_secretbox_ZEROBYTES);
        };
        nacl14.secretbox.keyLength = crypto_secretbox_KEYBYTES;
        nacl14.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
        nacl14.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
        nacl14.scalarMult = function(n, p) {
          checkArrayTypes(n, p);
          if (n.length !== crypto_scalarmult_SCALARBYTES)
            throw new Error("bad n size");
          if (p.length !== crypto_scalarmult_BYTES)
            throw new Error("bad p size");
          var q = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult(q, n, p);
          return q;
        };
        nacl14.scalarMult.base = function(n) {
          checkArrayTypes(n);
          if (n.length !== crypto_scalarmult_SCALARBYTES)
            throw new Error("bad n size");
          var q = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult_base(q, n);
          return q;
        };
        nacl14.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
        nacl14.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
        nacl14.box = function(msg, nonce, publicKey, secretKey) {
          var k = nacl14.box.before(publicKey, secretKey);
          return nacl14.secretbox(msg, nonce, k);
        };
        nacl14.box.before = function(publicKey, secretKey) {
          checkArrayTypes(publicKey, secretKey);
          checkBoxLengths(publicKey, secretKey);
          var k = new Uint8Array(crypto_box_BEFORENMBYTES);
          crypto_box_beforenm(k, publicKey, secretKey);
          return k;
        };
        nacl14.box.after = nacl14.secretbox;
        nacl14.box.open = function(msg, nonce, publicKey, secretKey) {
          var k = nacl14.box.before(publicKey, secretKey);
          return nacl14.secretbox.open(msg, nonce, k);
        };
        nacl14.box.open.after = nacl14.secretbox.open;
        nacl14.box.keyPair = function() {
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
          crypto_box_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl14.box.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_box_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          crypto_scalarmult_base(pk, secretKey);
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl14.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
        nacl14.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
        nacl14.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
        nacl14.box.nonceLength = crypto_box_NONCEBYTES;
        nacl14.box.overheadLength = nacl14.secretbox.overheadLength;
        nacl14.sign = function(msg, secretKey) {
          checkArrayTypes(msg, secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
          crypto_sign(signedMsg, msg, msg.length, secretKey);
          return signedMsg;
        };
        nacl14.sign.open = function(signedMsg, publicKey) {
          checkArrayTypes(signedMsg, publicKey);
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var tmp = new Uint8Array(signedMsg.length);
          var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
          if (mlen < 0)
            return null;
          var m = new Uint8Array(mlen);
          for (var i = 0; i < m.length; i++)
            m[i] = tmp[i];
          return m;
        };
        nacl14.sign.detached = function(msg, secretKey) {
          var signedMsg = nacl14.sign(msg, secretKey);
          var sig = new Uint8Array(crypto_sign_BYTES);
          for (var i = 0; i < sig.length; i++)
            sig[i] = signedMsg[i];
          return sig;
        };
        nacl14.sign.detached.verify = function(msg, sig, publicKey) {
          checkArrayTypes(msg, sig, publicKey);
          if (sig.length !== crypto_sign_BYTES)
            throw new Error("bad signature size");
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
          var m = new Uint8Array(crypto_sign_BYTES + msg.length);
          var i;
          for (i = 0; i < crypto_sign_BYTES; i++)
            sm[i] = sig[i];
          for (i = 0; i < msg.length; i++)
            sm[i + crypto_sign_BYTES] = msg[i];
          return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
        };
        nacl14.sign.keyPair = function() {
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          crypto_sign_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl14.sign.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          for (var i = 0; i < pk.length; i++)
            pk[i] = secretKey[32 + i];
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl14.sign.keyPair.fromSeed = function(seed) {
          checkArrayTypes(seed);
          if (seed.length !== crypto_sign_SEEDBYTES)
            throw new Error("bad seed size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          for (var i = 0; i < 32; i++)
            sk[i] = seed[i];
          crypto_sign_keypair(pk, sk, true);
          return { publicKey: pk, secretKey: sk };
        };
        nacl14.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
        nacl14.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
        nacl14.sign.seedLength = crypto_sign_SEEDBYTES;
        nacl14.sign.signatureLength = crypto_sign_BYTES;
        nacl14.hash = function(msg) {
          checkArrayTypes(msg);
          var h = new Uint8Array(crypto_hash_BYTES);
          crypto_hash(h, msg, msg.length);
          return h;
        };
        nacl14.hash.hashLength = crypto_hash_BYTES;
        nacl14.verify = function(x, y) {
          checkArrayTypes(x, y);
          if (x.length === 0 || y.length === 0)
            return false;
          if (x.length !== y.length)
            return false;
          return vn(x, 0, y, 0, x.length) === 0 ? true : false;
        };
        nacl14.setPRNG = function(fn) {
          randombytes = fn;
        };
        (function() {
          var crypto2 = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
          if (crypto2 && crypto2.getRandomValues) {
            var QUOTA = 65536;
            nacl14.setPRNG(function(x, n) {
              var i, v = new Uint8Array(n);
              for (i = 0; i < n; i += QUOTA) {
                crypto2.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
              }
              for (i = 0; i < n; i++)
                x[i] = v[i];
              cleanup(v);
            });
          } else if (typeof __require !== "undefined") {
            crypto2 = (init_node_crypto(), __toCommonJS(node_crypto_exports));
            if (crypto2 && crypto2.randomBytes) {
              nacl14.setPRNG(function(x, n) {
                var i, v = crypto2.randomBytes(n);
                for (i = 0; i < n; i++)
                  x[i] = v[i];
                cleanup(v);
              });
            }
          }
        })();
      })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
    }
  });

  // node_modules/@decentnetwork/peer/dist/utils/base58.js
  var base58_exports = {};
  __export(base58_exports, {
    base58ToBytes: () => base58ToBytes,
    bytesToBase58: () => bytesToBase58
  });
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
  var ALPHABET, BASE, indexes;
  var init_base58 = __esm({
    "node_modules/@decentnetwork/peer/dist/utils/base58.js"() {
      init_buffer_global();
      init_process_global();
      ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      BASE = BigInt(58);
      indexes = new Map([...ALPHABET].map((char, index) => [char, BigInt(index)]));
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/address.js
  function carrierAddressFromPublicKey(publicKey, nospam = 0) {
    if (publicKey.length !== CARRIER_PUBLIC_KEY_SIZE) {
      throw new Error(`Carrier public key must be ${CARRIER_PUBLIC_KEY_SIZE} bytes`);
    }
    const address = new Uint8Array(CARRIER_ADDRESS_SIZE);
    address.set(publicKey, 0);
    writeUint32LE(address, CARRIER_PUBLIC_KEY_SIZE, nospam);
    writeUint16LE(address, CARRIER_PUBLIC_KEY_SIZE + CARRIER_NOSPAM_SIZE, addressChecksum(address.subarray(0, -2)));
    return bytesToBase58(address);
  }
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
  function carrierIdFromPublicKey(publicKey) {
    if (publicKey.length !== CARRIER_PUBLIC_KEY_SIZE) {
      throw new Error(`Carrier public key must be ${CARRIER_PUBLIC_KEY_SIZE} bytes`);
    }
    return bytesToBase58(publicKey);
  }
  function addressChecksum(bytes) {
    const checksum = [0, 0];
    for (let i = 0; i < bytes.length; i++) {
      checksum[i % 2] ^= bytes[i];
    }
    return checksum[0] | checksum[1] << 8;
  }
  function writeUint16LE(bytes, offset, value) {
    bytes[offset] = value & 255;
    bytes[offset + 1] = value >>> 8 & 255;
  }
  function readUint16LE(bytes, offset) {
    return bytes[offset] | bytes[offset + 1] << 8;
  }
  function writeUint32LE(bytes, offset, value) {
    if (!Number.isInteger(value) || value < 0 || value > 4294967295) {
      throw new Error("Carrier nospam must be a uint32");
    }
    bytes[offset] = value & 255;
    bytes[offset + 1] = value >>> 8 & 255;
    bytes[offset + 2] = value >>> 16 & 255;
    bytes[offset + 3] = value >>> 24 & 255;
  }
  function readUint32LE(bytes, offset) {
    return (bytes[offset] | bytes[offset + 1] << 8 | bytes[offset + 2] << 16 | bytes[offset + 3] << 24) >>> 0;
  }
  var CARRIER_PUBLIC_KEY_SIZE, CARRIER_NOSPAM_SIZE, CARRIER_ADDRESS_CHECKSUM_SIZE, CARRIER_ADDRESS_SIZE;
  var init_address = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/address.js"() {
      init_buffer_global();
      init_process_global();
      init_base58();
      CARRIER_PUBLIC_KEY_SIZE = 32;
      CARRIER_NOSPAM_SIZE = 4;
      CARRIER_ADDRESS_CHECKSUM_SIZE = 2;
      CARRIER_ADDRESS_SIZE = CARRIER_PUBLIC_KEY_SIZE + CARRIER_NOSPAM_SIZE + CARRIER_ADDRESS_CHECKSUM_SIZE;
    }
  });

  // node_modules/curve25519-js/lib/index.js
  var require_lib = __commonJS({
    "node_modules/curve25519-js/lib/index.js"(exports) {
      "use strict";
      init_buffer_global();
      init_process_global();
      Object.defineProperty(exports, "__esModule", { value: true });
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      function gf(init) {
        var i, r = new Float64Array(16);
        if (init)
          for (i = 0; i < init.length; i++)
            r[i] = init[i];
        return r;
      }
      var gf0 = gf();
      var gf1 = gf([1]);
      var _121665 = gf([56129, 1]);
      var D = gf([
        30883,
        4953,
        19914,
        30187,
        55467,
        16705,
        2637,
        112,
        59544,
        30585,
        16505,
        36039,
        65139,
        11119,
        27886,
        20995
      ]);
      var D2 = gf([
        61785,
        9906,
        39828,
        60374,
        45398,
        33411,
        5274,
        224,
        53552,
        61171,
        33010,
        6542,
        64743,
        22239,
        55772,
        9222
      ]);
      var X = gf([
        54554,
        36645,
        11616,
        51542,
        42930,
        38181,
        51040,
        26924,
        56412,
        64982,
        57905,
        49316,
        21502,
        52590,
        14035,
        8553
      ]);
      var Y = gf([
        26200,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214
      ]);
      var I = gf([
        41136,
        18958,
        6951,
        50414,
        58488,
        44335,
        6150,
        12099,
        55207,
        15867,
        153,
        11085,
        57099,
        20417,
        9344,
        11139
      ]);
      function ts64(x, i, h, l) {
        x[i] = h >> 24 & 255;
        x[i + 1] = h >> 16 & 255;
        x[i + 2] = h >> 8 & 255;
        x[i + 3] = h & 255;
        x[i + 4] = l >> 24 & 255;
        x[i + 5] = l >> 16 & 255;
        x[i + 6] = l >> 8 & 255;
        x[i + 7] = l & 255;
      }
      function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for (i = 0; i < n; i++)
          d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
      }
      function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
      }
      function set25519(r, a) {
        var i;
        for (i = 0; i < 16; i++)
          r[i] = a[i] | 0;
      }
      function car25519(o) {
        var i, v, c = 1;
        for (i = 0; i < 16; i++) {
          v = o[i] + c + 65535;
          c = Math.floor(v / 65536);
          o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i = 0; i < 16; i++) {
          t = c & (p[i] ^ q[i]);
          p[i] ^= t;
          q[i] ^= t;
        }
      }
      function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for (i = 0; i < 16; i++)
          t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
          m[0] = t[0] - 65517;
          for (i = 1; i < 15; i++) {
            m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 65535;
          }
          m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
          b = m[15] >> 16 & 1;
          m[14] &= 65535;
          sel25519(t, m, 1 - b);
        }
        for (i = 0; i < 16; i++) {
          o[2 * i] = t[i] & 255;
          o[2 * i + 1] = t[i] >> 8;
        }
      }
      function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
      }
      function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
      }
      function unpack25519(o, n) {
        var i;
        for (i = 0; i < 16; i++)
          o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 32767;
      }
      function A(o, a, b) {
        for (var i = 0; i < 16; i++)
          o[i] = a[i] + b[i];
      }
      function Z(o, a, b) {
        for (var i = 0; i < 16; i++)
          o[i] = a[i] - b[i];
      }
      function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
      }
      function S(o, a) {
        M(o, a, a);
      }
      function inv25519(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
          c[a] = i[a];
        for (a = 253; a >= 0; a--) {
          S(c, c);
          if (a !== 2 && a !== 4)
            M(c, c, i);
        }
        for (a = 0; a < 16; a++)
          o[a] = c[a];
      }
      function pow2523(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
          c[a] = i[a];
        for (a = 250; a >= 0; a--) {
          S(c, c);
          if (a !== 1)
            M(c, c, i);
        }
        for (a = 0; a < 16; a++)
          o[a] = c[a];
      }
      function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for (i = 0; i < 31; i++)
          z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for (i = 0; i < 16; i++) {
          b[i] = x[i];
          d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for (i = 254; i >= 0; --i) {
          r = z[i >>> 3] >>> (i & 7) & 1;
          sel25519(a, b, r);
          sel25519(c, d, r);
          A(e, a, c);
          Z(a, a, c);
          A(c, b, d);
          Z(b, b, d);
          S(d, e);
          S(f, a);
          M(a, c, a);
          M(c, b, e);
          A(e, a, c);
          Z(a, a, c);
          S(b, a);
          Z(c, d, f);
          M(a, c, _121665);
          A(a, a, d);
          M(c, c, a);
          M(a, d, f);
          M(d, b, x);
          S(b, e);
          sel25519(a, b, r);
          sel25519(c, d, r);
        }
        for (i = 0; i < 16; i++) {
          x[i + 16] = a[i];
          x[i + 32] = c[i];
          x[i + 48] = b[i];
          x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i = 0; i < 16; i++) {
            j = 8 * i + pos;
            wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
            wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
          }
          for (i = 0; i < 80; i++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 65535 | d << 16;
            tl = a & 65535 | b << 16;
            h = th;
            l = tl;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 65535 | d << 16;
            bl7 = a & 65535 | b << 16;
            h = bh3;
            l = bl3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 65535 | d << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h = wh[j];
                l = wl[j];
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                h = wh[(j + 9) % 16];
                l = wl[(j + 9) % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j] = c & 65535 | d << 16;
                wl[j] = a & 65535 | b << 16;
              }
            }
          }
          h = ah0;
          l = al0;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[0];
          l = hl[0];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[0] = ah0 = c & 65535 | d << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h = ah1;
          l = al1;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[1];
          l = hl[1];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[1] = ah1 = c & 65535 | d << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h = ah2;
          l = al2;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[2];
          l = hl[2];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[2] = ah2 = c & 65535 | d << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h = ah3;
          l = al3;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[3];
          l = hl[3];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[3] = ah3 = c & 65535 | d << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h = ah4;
          l = al4;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[4];
          l = hl[4];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[4] = ah4 = c & 65535 | d << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h = ah5;
          l = al5;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[5];
          l = hl[5];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[5] = ah5 = c & 65535 | d << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h = ah6;
          l = al6;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[6];
          l = hl[6];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[6] = ah6 = c & 65535 | d << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[7];
          l = hl[7];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[7] = ah7 = c & 65535 | d << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i = 0; i < n; i++)
          x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i = 0; i < 8; i++)
          ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
      }
      function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
      }
      function cswap(p, q, b) {
        var i;
        for (i = 0; i < 4; i++) {
          sel25519(p[i], q[i], b);
        }
      }
      function pack(r, p) {
        var tx2 = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx2, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx2) << 7;
      }
      function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i = 255; i >= 0; --i) {
          b = s[i / 8 | 0] >> (i & 7) & 1;
          cswap(p, q, b);
          add(q, p);
          add(p, p);
          cswap(p, q, b);
        }
      }
      function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
      }
      var L = new Float64Array([
        237,
        211,
        245,
        92,
        26,
        99,
        18,
        88,
        214,
        156,
        247,
        162,
        222,
        249,
        222,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16
      ]);
      function modL(r, x) {
        var carry, i, j, k;
        for (i = 63; i >= 32; --i) {
          carry = 0;
          for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = x[j] + 128 >> 8;
            x[j] -= carry * 256;
          }
          x[j] += carry;
          x[i] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x[j] += carry - (x[31] >> 4) * L[j];
          carry = x[j] >> 8;
          x[j] &= 255;
        }
        for (j = 0; j < 32; j++)
          x[j] -= carry * L[j];
        for (i = 0; i < 32; i++) {
          x[i + 1] += x[i] >> 8;
          r[i] = x[i] & 255;
        }
      }
      function reduce(r) {
        var x = new Float64Array(64), i;
        for (i = 0; i < 64; i++)
          x[i] = r[i];
        for (i = 0; i < 64; i++)
          r[i] = 0;
        modL(r, x);
      }
      function crypto_sign_direct(sm, m, n, sk) {
        var h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        for (i = 0; i < n; i++)
          sm[64 + i] = m[i];
        for (i = 0; i < 32; i++)
          sm[32 + i] = sk[i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 0; i < 32; i++)
          sm[i + 32] = sk[32 + i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++)
          x[i] = 0;
        for (i = 0; i < 32; i++)
          x[i] = r[i];
        for (i = 0; i < 32; i++) {
          for (j = 0; j < 32; j++) {
            x[i + j] += h[i] * sk[j];
          }
        }
        modL(sm.subarray(32), x);
        return n + 64;
      }
      function crypto_sign_direct_rnd(sm, m, n, sk, rnd) {
        var h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        sm[0] = 254;
        for (i = 1; i < 32; i++)
          sm[i] = 255;
        for (i = 0; i < 32; i++)
          sm[32 + i] = sk[i];
        for (i = 0; i < n; i++)
          sm[64 + i] = m[i];
        for (i = 0; i < 64; i++)
          sm[n + 64 + i] = rnd[i];
        crypto_hash(r, sm, n + 128);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 0; i < 32; i++)
          sm[i + 32] = sk[32 + i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++)
          sm[n + 64 + i] = 0;
        for (i = 0; i < 64; i++)
          x[i] = 0;
        for (i = 0; i < 32; i++)
          x[i] = r[i];
        for (i = 0; i < 32; i++) {
          for (j = 0; j < 32; j++) {
            x[i + j] += h[i] * sk[j];
          }
        }
        modL(sm.subarray(32, n + 64), x);
        return n + 64;
      }
      function curve25519_sign(sm, m, n, sk, opt_rnd) {
        var edsk = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        for (var i = 0; i < 32; i++)
          edsk[i] = sk[i];
        edsk[0] &= 248;
        edsk[31] &= 127;
        edsk[31] |= 64;
        scalarbase(p, edsk);
        pack(edsk.subarray(32), p);
        var signBit = edsk[63] & 128;
        var smlen;
        if (opt_rnd) {
          smlen = crypto_sign_direct_rnd(sm, m, n, edsk, opt_rnd);
        } else {
          smlen = crypto_sign_direct(sm, m, n, edsk);
        }
        sm[63] |= signBit;
        return smlen;
      }
      function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          return -1;
        if (par25519(r[0]) === p[31] >> 7)
          Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m, sm, n, pk) {
        var i, mlen;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        mlen = -1;
        if (n < 64)
          return -1;
        if (unpackneg(q, pk))
          return -1;
        for (i = 0; i < n; i++)
          m[i] = sm[i];
        for (i = 0; i < 32; i++)
          m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i = 0; i < n; i++)
            m[i] = 0;
          return -1;
        }
        for (i = 0; i < n; i++)
          m[i] = sm[i + 64];
        mlen = n;
        return mlen;
      }
      function convertPublicKey(pk) {
        var z = new Uint8Array(32), x = gf(), a = gf(), b = gf();
        unpack25519(x, pk);
        A(a, x, gf1);
        Z(b, x, gf1);
        inv25519(a, a);
        M(a, a, b);
        pack25519(z, a);
        return z;
      }
      function curve25519_sign_open(m, sm, n, pk) {
        var edpk = convertPublicKey(pk);
        edpk[31] |= sm[63] & 128;
        sm[63] &= 127;
        return crypto_sign_open(m, sm, n, edpk);
      }
      function checkArrayTypes(...args) {
        var t, i;
        for (i = 0; i < arguments.length; i++) {
          if ((t = Object.prototype.toString.call(arguments[i])) !== "[object Uint8Array]")
            throw new TypeError("unexpected type " + t + ", use Uint8Array");
        }
      }
      function sharedKey(secretKey, publicKey) {
        checkArrayTypes(publicKey, secretKey);
        if (publicKey.length !== 32)
          throw new Error("wrong public key length");
        if (secretKey.length !== 32)
          throw new Error("wrong secret key length");
        var sharedKey2 = new Uint8Array(32);
        crypto_scalarmult(sharedKey2, secretKey, publicKey);
        return sharedKey2;
      }
      exports.sharedKey = sharedKey;
      function signMessage(secretKey, msg, opt_random) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== 32)
          throw new Error("wrong secret key length");
        if (opt_random) {
          checkArrayTypes(opt_random);
          if (opt_random.length !== 64)
            throw new Error("wrong random data length");
          var buf = new Uint8Array(128 + msg.length);
          curve25519_sign(buf, msg, msg.length, secretKey, opt_random);
          return new Uint8Array(buf.subarray(0, 64 + msg.length));
        } else {
          var signedMsg = new Uint8Array(64 + msg.length);
          curve25519_sign(signedMsg, msg, msg.length, secretKey);
          return signedMsg;
        }
      }
      exports.signMessage = signMessage;
      function openMessage(publicKey, signedMsg) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== 32)
          throw new Error("wrong public key length");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = curve25519_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0)
          return null;
        var m = new Uint8Array(mlen);
        for (var i = 0; i < m.length; i++)
          m[i] = tmp[i];
        return m;
      }
      exports.openMessage = openMessage;
      function sign(secretKey, msg, opt_random) {
        checkArrayTypes(secretKey, msg);
        if (secretKey.length !== 32)
          throw new Error("wrong secret key length");
        if (opt_random) {
          checkArrayTypes(opt_random);
          if (opt_random.length !== 64)
            throw new Error("wrong random data length");
        }
        var buf = new Uint8Array((opt_random ? 128 : 64) + msg.length);
        curve25519_sign(buf, msg, msg.length, secretKey, opt_random);
        var signature = new Uint8Array(64);
        for (var i = 0; i < signature.length; i++)
          signature[i] = buf[i];
        return signature;
      }
      exports.sign = sign;
      function verify(publicKey, msg, signature) {
        checkArrayTypes(msg, signature, publicKey);
        if (signature.length !== 64)
          throw new Error("wrong signature length");
        if (publicKey.length !== 32)
          throw new Error("wrong public key length");
        var sm = new Uint8Array(64 + msg.length);
        var m = new Uint8Array(64 + msg.length);
        var i;
        for (i = 0; i < 64; i++)
          sm[i] = signature[i];
        for (i = 0; i < msg.length; i++)
          sm[i + 64] = msg[i];
        return curve25519_sign_open(m, sm, sm.length, publicKey) >= 0;
      }
      exports.verify = verify;
      function generateKeyPair(seed) {
        checkArrayTypes(seed);
        if (seed.length !== 32)
          throw new Error("wrong seed length");
        var sk = new Uint8Array(32);
        var pk = new Uint8Array(32);
        for (var i = 0; i < 32; i++)
          sk[i] = seed[i];
        crypto_scalarmult_base(pk, sk);
        sk[0] &= 248;
        sk[31] &= 127;
        sk[31] |= 64;
        pk[31] &= 127;
        return {
          public: pk,
          private: sk
        };
      }
      exports.generateKeyPair = generateKeyPair;
      exports.default = {};
    }
  });

  // node_modules/@decentnetwork/peer/dist/crypto/sign.js
  function signDetached(secretKey, message) {
    if (secretKey.length !== import_tweetnacl2.default.box.secretKeyLength) {
      throw new Error(`secretKey must be ${import_tweetnacl2.default.box.secretKeyLength} bytes`);
    }
    const random = import_tweetnacl2.default.randomBytes(64);
    return (0, import_curve25519_js.sign)(secretKey, message, random);
  }
  var import_curve25519_js, import_tweetnacl2;
  var init_sign = __esm({
    "node_modules/@decentnetwork/peer/dist/crypto/sign.js"() {
      init_buffer_global();
      init_process_global();
      import_curve25519_js = __toESM(require_lib());
      import_tweetnacl2 = __toESM(require_nacl_fast());
    }
  });

  // node_modules/@decentnetwork/peer/dist/utils/bytes.js
  function bytesToHex2(bytes) {
    return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  function hexToBytes2(hex2) {
    if (hex2.length % 2 !== 0) {
      throw new Error("hex string must have an even length");
    }
    const bytes = new Uint8Array(hex2.length / 2);
    for (let i = 0; i < bytes.length; i++) {
      const value = Number.parseInt(hex2.slice(i * 2, i * 2 + 2), 16);
      if (Number.isNaN(value)) {
        throw new Error("invalid hex string");
      }
      bytes[i] = value;
    }
    return bytes;
  }
  function concatBytes(parts) {
    const total = parts.reduce((size, part) => size + part.length, 0);
    const out = new Uint8Array(total);
    let offset = 0;
    for (const part of parts) {
      out.set(part, offset);
      offset += part.length;
    }
    return out;
  }
  function randomBytes2(length) {
    return randomBytes(length);
  }
  var init_bytes = __esm({
    "node_modules/@decentnetwork/peer/dist/utils/bytes.js"() {
      init_buffer_global();
      init_process_global();
      init_node_crypto();
    }
  });

  // src/shims/node-events.js
  var _l, EventEmitter;
  var init_node_events = __esm({
    "src/shims/node-events.js"() {
      init_buffer_global();
      init_process_global();
      EventEmitter = class {
        constructor() {
          __privateAdd(this, _l, /* @__PURE__ */ new Map());
        }
        on(e, fn) {
          if (!__privateGet(this, _l).has(e))
            __privateGet(this, _l).set(e, /* @__PURE__ */ new Set());
          __privateGet(this, _l).get(e).add(fn);
          return this;
        }
        once(e, fn) {
          const w = (...a) => {
            this.off(e, w);
            fn(...a);
          };
          return this.on(e, w);
        }
        off(e, fn) {
          __privateGet(this, _l).get(e)?.delete(fn);
          return this;
        }
        removeListener(e, fn) {
          return this.off(e, fn);
        }
        removeAllListeners(e) {
          if (e)
            __privateGet(this, _l).delete(e);
          else
            __privateGet(this, _l).clear();
          return this;
        }
        listenerCount(e) {
          return __privateGet(this, _l).get(e)?.size ?? 0;
        }
        emit(e, ...a) {
          const set = __privateGet(this, _l).get(e);
          if (!set || set.size === 0)
            return false;
          for (const fn of [...set])
            fn(...a);
          return true;
        }
        setMaxListeners() {
          return this;
        }
      };
      _l = new WeakMap();
    }
  });

  // src/shims/node-stub.js
  var node_stub_exports = {};
  __export(node_stub_exports, {
    access: () => access,
    appendFile: () => appendFile,
    appendFileSync: () => appendFileSync,
    arch: () => arch,
    basename: () => basename,
    closeSync: () => closeSync,
    copyFile: () => copyFile,
    cpus: () => cpus,
    createReadStream: () => createReadStream,
    createWriteStream: () => createWriteStream,
    default: () => node_stub_default,
    dirname: () => dirname,
    execFile: () => execFile,
    execFileSync: () => execFileSync,
    execSync: () => execSync,
    existsSync: () => existsSync,
    extname: () => extname,
    freemem: () => freemem,
    ftruncateSync: () => ftruncateSync,
    homedir: () => homedir,
    hostname: () => hostname,
    join: () => join,
    mkdir: () => mkdir,
    mkdirSync: () => mkdirSync,
    networkInterfaces: () => networkInterfaces,
    open: () => open,
    openSync: () => openSync,
    opendir: () => opendir,
    platform: () => platform,
    readFile: () => readFile,
    readFileSync: () => readFileSync,
    readSync: () => readSync,
    readdir: () => readdir,
    readdirSync: () => readdirSync,
    realpathSync: () => realpathSync,
    release: () => release,
    rename: () => rename,
    renameSync: () => renameSync,
    resolve: () => resolve,
    rm: () => rm,
    rmSync: () => rmSync,
    sep: () => sep,
    spawn: () => spawn,
    spawnSync: () => spawnSync,
    stat: () => stat,
    statSync: () => statSync,
    tmpdir: () => tmpdir,
    totalmem: () => totalmem,
    truncate: () => truncate,
    type: () => type,
    unlink: () => unlink,
    unlinkSync: () => unlinkSync,
    writeFile: () => writeFile,
    writeFileSync: () => writeFileSync,
    writeSync: () => writeSync
  });
  var vfs, enoent, key, dirty, readFile, writeFile, appendFile, rename, mkdir, unlink, rm, readdir, access, copyFile, stat, truncate, opendir, open, existsSync, readFileSync, writeFileSync, appendFileSync, mkdirSync, unlinkSync, rmSync, renameSync, statSync, realpathSync, readdirSync, createReadStream, createWriteStream, openSync, readSync, writeSync, closeSync, ftruncateSync, homedir, tmpdir, platform, hostname, type, release, arch, cpus, totalmem, freemem, networkInterfaces, sep, join, resolve, dirname, basename, extname, spawn, spawnSync, execFile, execFileSync, execSync, node_stub_default;
  var init_node_stub = __esm({
    "src/shims/node-stub.js"() {
      init_buffer_global();
      init_process_global();
      vfs = globalThis.__beagleVfs ?? (globalThis.__beagleVfs = /* @__PURE__ */ new Map());
      enoent = (p) => Object.assign(new Error(`ENOENT: no such file '${p}'`), { code: "ENOENT" });
      key = (p) => String(p);
      dirty = () => {
        globalThis.__beagleVfsDirty?.();
      };
      readFile = async (p) => {
        const v = vfs.get(key(p));
        if (v === void 0)
          throw enoent(p);
        return v;
      };
      writeFile = async (p, data) => {
        vfs.set(key(p), typeof data === "string" ? data : new TextDecoder().decode(data));
        dirty();
      };
      appendFile = async (p, data) => {
        vfs.set(key(p), (vfs.get(key(p)) ?? "") + (typeof data === "string" ? data : new TextDecoder().decode(data)));
        dirty();
      };
      rename = async (from2, to) => {
        const v = vfs.get(key(from2));
        if (v === void 0)
          throw enoent(from2);
        vfs.set(key(to), v);
        vfs.delete(key(from2));
        dirty();
      };
      mkdir = async () => {
      };
      unlink = async (p) => {
        vfs.delete(key(p));
        dirty();
      };
      rm = async (p) => {
        vfs.delete(key(p));
        dirty();
      };
      readdir = async () => [];
      access = async (p) => {
        if (!vfs.has(key(p)))
          throw enoent(p);
      };
      copyFile = async (from2, to) => {
        const v = vfs.get(key(from2));
        if (v === void 0)
          throw enoent(from2);
        vfs.set(key(to), v);
        dirty();
      };
      stat = async (p) => {
        if (!vfs.has(key(p)))
          throw enoent(p);
        return { size: vfs.get(key(p)).length, isFile: () => true, isDirectory: () => false };
      };
      truncate = async () => {
      };
      opendir = async () => {
        throw enoent("opendir");
      };
      open = async () => {
        throw enoent("open");
      };
      existsSync = (p) => vfs.has(key(p));
      readFileSync = (p) => {
        const v = vfs.get(key(p));
        if (v === void 0)
          throw enoent(p);
        return v;
      };
      writeFileSync = (p, data) => {
        vfs.set(key(p), typeof data === "string" ? data : new TextDecoder().decode(data));
        dirty();
      };
      appendFileSync = (p, data) => {
        vfs.set(key(p), (vfs.get(key(p)) ?? "") + (typeof data === "string" ? data : String(data)));
      };
      mkdirSync = () => {
      };
      unlinkSync = (p) => {
        vfs.delete(key(p));
      };
      rmSync = (p) => {
        vfs.delete(key(p));
      };
      renameSync = (from2, to) => {
        const v = vfs.get(key(from2));
        if (v !== void 0) {
          vfs.set(key(to), v);
          vfs.delete(key(from2));
        }
      };
      statSync = (p) => {
        if (!vfs.has(key(p)))
          throw enoent(p);
        return { size: vfs.get(key(p)).length, isFile: () => true, isDirectory: () => false };
      };
      realpathSync = (p) => p;
      readdirSync = () => [];
      createReadStream = () => {
        throw enoent("stream");
      };
      createWriteStream = () => {
        throw enoent("stream");
      };
      openSync = () => {
        throw enoent("open");
      };
      readSync = () => 0;
      writeSync = () => 0;
      closeSync = () => {
      };
      ftruncateSync = () => {
      };
      homedir = () => "/browser";
      tmpdir = () => "/tmp";
      platform = () => "browser";
      hostname = () => "browser";
      type = () => "browser";
      release = () => "";
      arch = () => "wasm";
      cpus = () => [];
      totalmem = () => 0;
      freemem = () => 0;
      networkInterfaces = () => ({});
      sep = "/";
      join = (...p) => p.filter(Boolean).join("/").replace(/\/+/g, "/");
      resolve = (...p) => join(...p);
      dirname = (p) => String(p).split("/").slice(0, -1).join("/") || "/";
      basename = (p) => String(p).split("/").pop() || "";
      extname = (p) => {
        const b = basename(p);
        const i = b.lastIndexOf(".");
        return i > 0 ? b.slice(i) : "";
      };
      spawn = () => {
        throw new Error("no child_process in the browser");
      };
      spawnSync = () => ({ status: 1, stdout: "", stderr: "no child_process in the browser" });
      execFile = () => {
        throw new Error("no child_process in the browser");
      };
      execFileSync = () => {
        throw new Error("no child_process in the browser");
      };
      execSync = () => {
        throw new Error("no child_process in the browser");
      };
      node_stub_default = {
        readFile,
        writeFile,
        appendFile,
        rename,
        mkdir,
        unlink,
        rm,
        readdir,
        access,
        copyFile,
        stat,
        truncate,
        opendir,
        open,
        existsSync,
        readFileSync,
        writeFileSync,
        appendFileSync,
        mkdirSync,
        unlinkSync,
        rmSync,
        renameSync,
        statSync,
        realpathSync,
        readdirSync,
        createReadStream,
        createWriteStream,
        openSync,
        readSync,
        writeSync,
        closeSync,
        ftruncateSync,
        homedir,
        tmpdir,
        platform,
        hostname,
        type,
        release,
        arch,
        cpus,
        totalmem,
        freemem,
        networkInterfaces,
        sep,
        join,
        resolve,
        dirname,
        basename,
        extname,
        spawn,
        spawnSync,
        execFile,
        execFileSync,
        execSync
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/bootstrap.js
  var import_tweetnacl4, NET_PACKET_GET_NODES, NET_PACKET_SEND_NODES_IPV6, CARRIER_MAGIC, PUBLIC_KEY_SIZE, NONCE_SIZE, MAC_SIZE, SENDBACK_SIZE, MAX_SENT_NODES, _nodes, _keyPair, _transport, _sendGetNodes, sendGetNodes_fn, _createCarrierPacket, createCarrierPacket_fn, _createGetNodesPacket, createGetNodesPacket_fn, _parseSendNodes, parseSendNodes_fn, _stripCarrierMagic, stripCarrierMagic_fn, _parseNodes, parseNodes_fn, LegacyBootstrapClient;
  var init_bootstrap = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/bootstrap.js"() {
      init_buffer_global();
      init_process_global();
      init_base58();
      init_bytes();
      import_tweetnacl4 = __toESM(require_nacl_fast(), 1);
      NET_PACKET_GET_NODES = 2;
      NET_PACKET_SEND_NODES_IPV6 = 4;
      CARRIER_MAGIC = Uint8Array.of(105, 118, 101, 103);
      PUBLIC_KEY_SIZE = 32;
      NONCE_SIZE = 24;
      MAC_SIZE = 16;
      SENDBACK_SIZE = 8;
      MAX_SENT_NODES = 4;
      LegacyBootstrapClient = class {
        constructor(opts) {
          __privateAdd(this, _sendGetNodes);
          __privateAdd(this, _createCarrierPacket);
          __privateAdd(this, _createGetNodesPacket);
          __privateAdd(this, _parseSendNodes);
          __privateAdd(this, _stripCarrierMagic);
          __privateAdd(this, _parseNodes);
          __privateAdd(this, _nodes, void 0);
          __privateAdd(this, _keyPair, void 0);
          __privateAdd(this, _transport, void 0);
          __privateSet(this, _nodes, opts.nodes);
          __privateSet(this, _keyPair, opts.keyPair);
          __privateSet(this, _transport, opts.transport);
        }
        attempts() {
          return __privateGet(this, _nodes).map((node) => ({ node, status: "queued" }));
        }
        async join(timeoutMs = 3e4) {
          if (!__privateGet(this, _transport).bound) {
            throw new Error("UDP transport must be started before bootstrap join");
          }
          return new Promise((resolve2, reject) => {
            const sendbacks = /* @__PURE__ */ new Map();
            const timer = setTimeout(() => {
              cleanup();
              reject(new Error(`legacy bootstrap timed out after ${timeoutMs}ms`));
            }, timeoutMs);
            const cleanup = () => {
              clearTimeout(timer);
              __privateGet(this, _transport).off("datagram", onDatagram);
            };
            const onDatagram = (datagram) => {
              const parsed = __privateMethod(this, _parseSendNodes, parseSendNodes_fn).call(this, datagram.data, sendbacks);
              if (!parsed) {
                return;
              }
              cleanup();
              resolve2(parsed);
            };
            __privateGet(this, _transport).on("datagram", onDatagram);
            void __privateMethod(this, _sendGetNodes, sendGetNodes_fn).call(this, sendbacks).catch((error) => {
              cleanup();
              reject(error);
            });
          });
        }
      };
      _nodes = new WeakMap();
      _keyPair = new WeakMap();
      _transport = new WeakMap();
      _sendGetNodes = new WeakSet();
      sendGetNodes_fn = async function(sendbacks) {
        const FIRST_STAGGER_MS = Number.parseInt(process.env.DECENT_BOOTSTRAP_STAGGER_FIRST_MS ?? "800", 10);
        const STAGGER_MS = Number.parseInt(process.env.DECENT_BOOTSTRAP_STAGGER_MS ?? "150", 10);
        for (let i = 0; i < __privateGet(this, _nodes).length; i++) {
          const node = __privateGet(this, _nodes)[i];
          if (!node.pk) {
            throw new Error(`bootstrap node ${node.host}:${node.port} is missing pk`);
          }
          const publicKey = base58ToBytes(node.pk);
          if (publicKey.length !== PUBLIC_KEY_SIZE) {
            throw new Error(`bootstrap node ${node.host}:${node.port} public key decoded to ${publicKey.length} bytes`);
          }
          const sendback = randomBytes2(SENDBACK_SIZE);
          sendbacks.set(Buffer2.from(sendback).toString("hex"), node);
          const packet = __privateMethod(this, _createCarrierPacket, createCarrierPacket_fn).call(this, __privateMethod(this, _createGetNodesPacket, createGetNodesPacket_fn).call(this, publicKey, __privateGet(this, _keyPair).publicKey, sendback));
          await __privateGet(this, _transport).send(Buffer2.from(packet), node.host, node.port);
          if (i + 1 < __privateGet(this, _nodes).length) {
            const delay = i === 0 ? FIRST_STAGGER_MS : STAGGER_MS;
            await new Promise((resolve2) => setTimeout(resolve2, delay));
          }
        }
      };
      _createCarrierPacket = new WeakSet();
      createCarrierPacket_fn = function(dhtPacket) {
        return concatBytes([CARRIER_MAGIC, dhtPacket]);
      };
      _createGetNodesPacket = new WeakSet();
      createGetNodesPacket_fn = function(nodePublicKey, requestedNodeId, sendback) {
        const nonce = randomBytes2(NONCE_SIZE);
        const plain = concatBytes([requestedNodeId, sendback]);
        const sharedKey = import_tweetnacl4.default.box.before(nodePublicKey, __privateGet(this, _keyPair).secretKey);
        const encrypted = import_tweetnacl4.default.box.after(plain, nonce, sharedKey);
        return concatBytes([
          Uint8Array.of(NET_PACKET_GET_NODES),
          __privateGet(this, _keyPair).publicKey,
          nonce,
          encrypted
        ]);
      };
      _parseSendNodes = new WeakSet();
      parseSendNodes_fn = function(data, sendbacks) {
        data = __privateMethod(this, _stripCarrierMagic, stripCarrierMagic_fn).call(this, data);
        const minimumLength = 1 + PUBLIC_KEY_SIZE + NONCE_SIZE + 1 + SENDBACK_SIZE + MAC_SIZE;
        if (data.length < minimumLength || data[0] !== NET_PACKET_SEND_NODES_IPV6) {
          return void 0;
        }
        const remotePublicKey = data.slice(1, 1 + PUBLIC_KEY_SIZE);
        const nonce = data.slice(1 + PUBLIC_KEY_SIZE, 1 + PUBLIC_KEY_SIZE + NONCE_SIZE);
        const encrypted = data.slice(1 + PUBLIC_KEY_SIZE + NONCE_SIZE);
        const sharedKey = import_tweetnacl4.default.box.before(remotePublicKey, __privateGet(this, _keyPair).secretKey);
        const plain = import_tweetnacl4.default.box.open.after(encrypted, nonce, sharedKey);
        if (!plain || plain.length < 1 + SENDBACK_SIZE) {
          return void 0;
        }
        const numNodes = plain[0];
        if (numNodes > MAX_SENT_NODES) {
          return void 0;
        }
        const sendback = plain.slice(plain.length - SENDBACK_SIZE);
        const respondingNode = sendbacks.get(Buffer2.from(sendback).toString("hex"));
        if (!respondingNode) {
          return void 0;
        }
        const nodeData = plain.slice(1, plain.length - SENDBACK_SIZE);
        const discoveredNodes = __privateMethod(this, _parseNodes, parseNodes_fn).call(this, nodeData, numNodes);
        if (discoveredNodes.length !== numNodes) {
          return void 0;
        }
        return { respondingNode, discoveredNodes };
      };
      _stripCarrierMagic = new WeakSet();
      stripCarrierMagic_fn = function(data) {
        if (data.length >= CARRIER_MAGIC.length + 1 && data[0] === CARRIER_MAGIC[0] && data[1] === CARRIER_MAGIC[1] && data[2] === CARRIER_MAGIC[2] && data[3] === CARRIER_MAGIC[3]) {
          return data.slice(CARRIER_MAGIC.length);
        }
        return data;
      };
      _parseNodes = new WeakSet();
      parseNodes_fn = function(data, count) {
        const nodes = [];
        let offset = 0;
        for (let i = 0; i < count; i++) {
          const family = data[offset];
          offset += 1;
          let host2;
          let transport;
          if (family === 2 || family === 130) {
            if (offset + 4 + 2 + PUBLIC_KEY_SIZE > data.length) {
              return nodes;
            }
            host2 = [...data.slice(offset, offset + 4)].join(".");
            offset += 4;
            transport = family === 2 ? "udp4" : "tcp4";
          } else if (family === 10 || family === 138) {
            if (offset + 16 + 2 + PUBLIC_KEY_SIZE > data.length) {
              return nodes;
            }
            const parts = [];
            for (let part = 0; part < 8; part++) {
              parts.push((data[offset + part * 2] << 8 | data[offset + part * 2 + 1]).toString(16));
            }
            host2 = parts.join(":");
            offset += 16;
            transport = family === 10 ? "udp6" : "tcp6";
          } else {
            return nodes;
          }
          const port = data[offset] << 8 | data[offset + 1];
          offset += 2;
          const publicKey = data.slice(offset, offset + PUBLIC_KEY_SIZE);
          offset += PUBLIC_KEY_SIZE;
          nodes.push({ host: host2, port, publicKey, transport });
        }
        return nodes;
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/inline-file.js
  function decodeAndroidFileEnvelope(bytes) {
    if (bytes.length < 6 || bytes[0] !== 0 || bytes[1] !== 0)
      return void 0;
    const metaLen = (bytes[2] << 8 | bytes[3]) >>> 0;
    if (metaLen < 2 || metaLen > MAX_META_LEN || 4 + metaLen > bytes.length)
      return void 0;
    try {
      const json2 = new TextDecoder("utf-8", { fatal: true }).decode(bytes.subarray(4, 4 + metaLen));
      const meta = JSON.parse(json2);
      if (meta.type !== "file" || typeof meta.filename !== "string" || meta.filename.length === 0)
        return void 0;
      return {
        name: meta.filename,
        contentType: typeof meta.contentType === "string" ? meta.contentType : "application/octet-stream",
        data: bytes.slice(4 + metaLen),
        declaredSize: typeof meta.size === "number" ? meta.size : void 0
      };
    } catch {
      return void 0;
    }
  }
  function inlineFileTypeFor(name, contentType) {
    const mime = (contentType ?? "").toLowerCase();
    if (mime.startsWith("image/"))
      return "image";
    if (mime.startsWith("audio/"))
      return "audio";
    if (mime.startsWith("text/"))
      return "text";
    const dot = name.lastIndexOf(".");
    const ext = dot > 0 ? name.slice(dot).toLowerCase() : "";
    if ([".png", ".jpg", ".jpeg", ".gif", ".webp", ".heic", ".heif", ".bmp"].includes(ext))
      return "image";
    if ([".m4a", ".mp3", ".aac", ".wav", ".ogg"].includes(ext))
      return "audio";
    if ([".txt", ".md", ".log"].includes(ext))
      return "text";
    return "unknown";
  }
  var MAX_META_LEN;
  var init_inline_file = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/inline-file.js"() {
      init_buffer_global();
      init_process_global();
      MAX_META_LEN = 4096;
    }
  });

  // node_modules/flatbuffers/mjs/constants.js
  var SIZEOF_SHORT, SIZEOF_INT, FILE_IDENTIFIER_LENGTH, SIZE_PREFIX_LENGTH;
  var init_constants = __esm({
    "node_modules/flatbuffers/mjs/constants.js"() {
      init_buffer_global();
      init_process_global();
      SIZEOF_SHORT = 2;
      SIZEOF_INT = 4;
      FILE_IDENTIFIER_LENGTH = 4;
      SIZE_PREFIX_LENGTH = 4;
    }
  });

  // node_modules/flatbuffers/mjs/utils.js
  var int32, float32, float64, isLittleEndian;
  var init_utils2 = __esm({
    "node_modules/flatbuffers/mjs/utils.js"() {
      init_buffer_global();
      init_process_global();
      int32 = new Int32Array(2);
      float32 = new Float32Array(int32.buffer);
      float64 = new Float64Array(int32.buffer);
      isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
    }
  });

  // node_modules/flatbuffers/mjs/encoding.js
  var Encoding;
  var init_encoding = __esm({
    "node_modules/flatbuffers/mjs/encoding.js"() {
      init_buffer_global();
      init_process_global();
      (function(Encoding2) {
        Encoding2[Encoding2["UTF8_BYTES"] = 1] = "UTF8_BYTES";
        Encoding2[Encoding2["UTF16_STRING"] = 2] = "UTF16_STRING";
      })(Encoding || (Encoding = {}));
    }
  });

  // node_modules/flatbuffers/mjs/byte-buffer.js
  var ByteBuffer;
  var init_byte_buffer = __esm({
    "node_modules/flatbuffers/mjs/byte-buffer.js"() {
      init_buffer_global();
      init_process_global();
      init_constants();
      init_encoding();
      init_utils2();
      ByteBuffer = class _ByteBuffer {
        /**
         * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
         */
        constructor(bytes_) {
          this.bytes_ = bytes_;
          this.position_ = 0;
          this.text_decoder_ = new TextDecoder();
        }
        /**
         * Create and allocate a new ByteBuffer with a given size.
         */
        static allocate(byte_size) {
          return new _ByteBuffer(new Uint8Array(byte_size));
        }
        clear() {
          this.position_ = 0;
        }
        /**
         * Get the underlying `Uint8Array`.
         */
        bytes() {
          return this.bytes_;
        }
        /**
         * Get the buffer's position.
         */
        position() {
          return this.position_;
        }
        /**
         * Set the buffer's position.
         */
        setPosition(position) {
          this.position_ = position;
        }
        /**
         * Get the buffer's capacity.
         */
        capacity() {
          return this.bytes_.length;
        }
        readInt8(offset) {
          return this.readUint8(offset) << 24 >> 24;
        }
        readUint8(offset) {
          return this.bytes_[offset];
        }
        readInt16(offset) {
          return this.readUint16(offset) << 16 >> 16;
        }
        readUint16(offset) {
          return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
        }
        readInt32(offset) {
          return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
        }
        readUint32(offset) {
          return this.readInt32(offset) >>> 0;
        }
        readInt64(offset) {
          return BigInt.asIntN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
        }
        readUint64(offset) {
          return BigInt.asUintN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
        }
        readFloat32(offset) {
          int32[0] = this.readInt32(offset);
          return float32[0];
        }
        readFloat64(offset) {
          int32[isLittleEndian ? 0 : 1] = this.readInt32(offset);
          int32[isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
          return float64[0];
        }
        writeInt8(offset, value) {
          this.bytes_[offset] = value;
        }
        writeUint8(offset, value) {
          this.bytes_[offset] = value;
        }
        writeInt16(offset, value) {
          this.bytes_[offset] = value;
          this.bytes_[offset + 1] = value >> 8;
        }
        writeUint16(offset, value) {
          this.bytes_[offset] = value;
          this.bytes_[offset + 1] = value >> 8;
        }
        writeInt32(offset, value) {
          this.bytes_[offset] = value;
          this.bytes_[offset + 1] = value >> 8;
          this.bytes_[offset + 2] = value >> 16;
          this.bytes_[offset + 3] = value >> 24;
        }
        writeUint32(offset, value) {
          this.bytes_[offset] = value;
          this.bytes_[offset + 1] = value >> 8;
          this.bytes_[offset + 2] = value >> 16;
          this.bytes_[offset + 3] = value >> 24;
        }
        writeInt64(offset, value) {
          this.writeInt32(offset, Number(BigInt.asIntN(32, value)));
          this.writeInt32(offset + 4, Number(BigInt.asIntN(32, value >> BigInt(32))));
        }
        writeUint64(offset, value) {
          this.writeUint32(offset, Number(BigInt.asUintN(32, value)));
          this.writeUint32(offset + 4, Number(BigInt.asUintN(32, value >> BigInt(32))));
        }
        writeFloat32(offset, value) {
          float32[0] = value;
          this.writeInt32(offset, int32[0]);
        }
        writeFloat64(offset, value) {
          float64[0] = value;
          this.writeInt32(offset, int32[isLittleEndian ? 0 : 1]);
          this.writeInt32(offset + 4, int32[isLittleEndian ? 1 : 0]);
        }
        /**
         * Return the file identifier.   Behavior is undefined for FlatBuffers whose
         * schema does not include a file_identifier (likely points at padding or the
         * start of a the root vtable).
         */
        getBufferIdentifier() {
          if (this.bytes_.length < this.position_ + SIZEOF_INT + FILE_IDENTIFIER_LENGTH) {
            throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
          }
          let result = "";
          for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
            result += String.fromCharCode(this.readInt8(this.position_ + SIZEOF_INT + i));
          }
          return result;
        }
        /**
         * Look up a field in the vtable, return an offset into the object, or 0 if the
         * field is not present.
         */
        __offset(bb_pos, vtable_offset) {
          const vtable = bb_pos - this.readInt32(bb_pos);
          return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
        }
        /**
         * Initialize any Table-derived type to point to the union at the given offset.
         */
        __union(t, offset) {
          t.bb_pos = offset + this.readInt32(offset);
          t.bb = this;
          return t;
        }
        /**
         * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
         * This allocates a new string and converts to wide chars upon each access.
         *
         * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
         * "optionalEncoding" argument. This is useful for avoiding conversion when
         * the data will just be packaged back up in another FlatBuffer later on.
         *
         * @param offset
         * @param opt_encoding Defaults to UTF16_STRING
         */
        __string(offset, opt_encoding) {
          offset += this.readInt32(offset);
          const length = this.readInt32(offset);
          offset += SIZEOF_INT;
          const utf8bytes = this.bytes_.subarray(offset, offset + length);
          if (opt_encoding === Encoding.UTF8_BYTES)
            return utf8bytes;
          else
            return this.text_decoder_.decode(utf8bytes);
        }
        /**
         * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
         * if a string then return a new one
         *
         * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
         * makes the behaviour of __union_with_string different compared to __union
         */
        __union_with_string(o, offset) {
          if (typeof o === "string") {
            return this.__string(offset);
          }
          return this.__union(o, offset);
        }
        /**
         * Retrieve the relative offset stored at "offset"
         */
        __indirect(offset) {
          return offset + this.readInt32(offset);
        }
        /**
         * Get the start of data of a vector whose offset is stored at "offset" in this object.
         */
        __vector(offset) {
          return offset + this.readInt32(offset) + SIZEOF_INT;
        }
        /**
         * Get the length of a vector whose offset is stored at "offset" in this object.
         */
        __vector_len(offset) {
          return this.readInt32(offset + this.readInt32(offset));
        }
        __has_identifier(ident) {
          if (ident.length != FILE_IDENTIFIER_LENGTH) {
            throw new Error("FlatBuffers: file identifier must be length " + FILE_IDENTIFIER_LENGTH);
          }
          for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
            if (ident.charCodeAt(i) != this.readInt8(this.position() + SIZEOF_INT + i)) {
              return false;
            }
          }
          return true;
        }
        /**
         * A helper function for generating list for obj api
         */
        createScalarList(listAccessor, listLength) {
          const ret = [];
          for (let i = 0; i < listLength; ++i) {
            const val = listAccessor(i);
            if (val !== null) {
              ret.push(val);
            }
          }
          return ret;
        }
        /**
         * A helper function for generating list for obj api
         * @param listAccessor function that accepts an index and return data at that index
         * @param listLength listLength
         * @param res result list
         */
        createObjList(listAccessor, listLength) {
          const ret = [];
          for (let i = 0; i < listLength; ++i) {
            const val = listAccessor(i);
            if (val !== null) {
              ret.push(val.unpack());
            }
          }
          return ret;
        }
      };
    }
  });

  // node_modules/flatbuffers/mjs/builder.js
  var Builder;
  var init_builder = __esm({
    "node_modules/flatbuffers/mjs/builder.js"() {
      init_buffer_global();
      init_process_global();
      init_byte_buffer();
      init_constants();
      Builder = class _Builder {
        /**
         * Create a FlatBufferBuilder.
         */
        constructor(opt_initial_size) {
          this.minalign = 1;
          this.vtable = null;
          this.vtable_in_use = 0;
          this.isNested = false;
          this.object_start = 0;
          this.vtables = [];
          this.vector_num_elems = 0;
          this.force_defaults = false;
          this.string_maps = null;
          this.text_encoder = new TextEncoder();
          let initial_size;
          if (!opt_initial_size) {
            initial_size = 1024;
          } else {
            initial_size = opt_initial_size;
          }
          this.bb = ByteBuffer.allocate(initial_size);
          this.space = initial_size;
        }
        clear() {
          this.bb.clear();
          this.space = this.bb.capacity();
          this.minalign = 1;
          this.vtable = null;
          this.vtable_in_use = 0;
          this.isNested = false;
          this.object_start = 0;
          this.vtables = [];
          this.vector_num_elems = 0;
          this.force_defaults = false;
          this.string_maps = null;
        }
        /**
         * In order to save space, fields that are set to their default value
         * don't get serialized into the buffer. Forcing defaults provides a
         * way to manually disable this optimization.
         *
         * @param forceDefaults true always serializes default values
         */
        forceDefaults(forceDefaults) {
          this.force_defaults = forceDefaults;
        }
        /**
         * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
         * called finish(). The actual data starts at the ByteBuffer's current position,
         * not necessarily at 0.
         */
        dataBuffer() {
          return this.bb;
        }
        /**
         * Get the bytes representing the FlatBuffer. Only call this after you've
         * called finish().
         */
        asUint8Array() {
          return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
        }
        /**
         * Prepare to write an element of `size` after `additional_bytes` have been
         * written, e.g. if you write a string, you need to align such the int length
         * field is aligned to 4 bytes, and the string data follows it directly. If all
         * you need to do is alignment, `additional_bytes` will be 0.
         *
         * @param size This is the of the new element to write
         * @param additional_bytes The padding size
         */
        prep(size, additional_bytes) {
          if (size > this.minalign) {
            this.minalign = size;
          }
          const align_size = ~(this.bb.capacity() - this.space + additional_bytes) + 1 & size - 1;
          while (this.space < align_size + size + additional_bytes) {
            const old_buf_size = this.bb.capacity();
            this.bb = _Builder.growByteBuffer(this.bb);
            this.space += this.bb.capacity() - old_buf_size;
          }
          this.pad(align_size);
        }
        pad(byte_size) {
          for (let i = 0; i < byte_size; i++) {
            this.bb.writeInt8(--this.space, 0);
          }
        }
        writeInt8(value) {
          this.bb.writeInt8(this.space -= 1, value);
        }
        writeInt16(value) {
          this.bb.writeInt16(this.space -= 2, value);
        }
        writeInt32(value) {
          this.bb.writeInt32(this.space -= 4, value);
        }
        writeInt64(value) {
          this.bb.writeInt64(this.space -= 8, value);
        }
        writeFloat32(value) {
          this.bb.writeFloat32(this.space -= 4, value);
        }
        writeFloat64(value) {
          this.bb.writeFloat64(this.space -= 8, value);
        }
        /**
         * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
         * @param value The `int8` to add the buffer.
         */
        addInt8(value) {
          this.prep(1, 0);
          this.writeInt8(value);
        }
        /**
         * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
         * @param value The `int16` to add the buffer.
         */
        addInt16(value) {
          this.prep(2, 0);
          this.writeInt16(value);
        }
        /**
         * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
         * @param value The `int32` to add the buffer.
         */
        addInt32(value) {
          this.prep(4, 0);
          this.writeInt32(value);
        }
        /**
         * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
         * @param value The `int64` to add the buffer.
         */
        addInt64(value) {
          this.prep(8, 0);
          this.writeInt64(value);
        }
        /**
         * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
         * @param value The `float32` to add the buffer.
         */
        addFloat32(value) {
          this.prep(4, 0);
          this.writeFloat32(value);
        }
        /**
         * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
         * @param value The `float64` to add the buffer.
         */
        addFloat64(value) {
          this.prep(8, 0);
          this.writeFloat64(value);
        }
        addFieldInt8(voffset, value, defaultValue) {
          if (this.force_defaults || value != defaultValue) {
            this.addInt8(value);
            this.slot(voffset);
          }
        }
        addFieldInt16(voffset, value, defaultValue) {
          if (this.force_defaults || value != defaultValue) {
            this.addInt16(value);
            this.slot(voffset);
          }
        }
        addFieldInt32(voffset, value, defaultValue) {
          if (this.force_defaults || value != defaultValue) {
            this.addInt32(value);
            this.slot(voffset);
          }
        }
        addFieldInt64(voffset, value, defaultValue) {
          if (this.force_defaults || value !== defaultValue) {
            this.addInt64(value);
            this.slot(voffset);
          }
        }
        addFieldFloat32(voffset, value, defaultValue) {
          if (this.force_defaults || value != defaultValue) {
            this.addFloat32(value);
            this.slot(voffset);
          }
        }
        addFieldFloat64(voffset, value, defaultValue) {
          if (this.force_defaults || value != defaultValue) {
            this.addFloat64(value);
            this.slot(voffset);
          }
        }
        addFieldOffset(voffset, value, defaultValue) {
          if (this.force_defaults || value != defaultValue) {
            this.addOffset(value);
            this.slot(voffset);
          }
        }
        /**
         * Structs are stored inline, so nothing additional is being added. `d` is always 0.
         */
        addFieldStruct(voffset, value, defaultValue) {
          if (value != defaultValue) {
            this.nested(value);
            this.slot(voffset);
          }
        }
        /**
         * Structures are always stored inline, they need to be created right
         * where they're used.  You'll get this assertion failure if you
         * created it elsewhere.
         */
        nested(obj) {
          if (obj != this.offset()) {
            throw new TypeError("FlatBuffers: struct must be serialized inline.");
          }
        }
        /**
         * Should not be creating any other object, string or vector
         * while an object is being constructed
         */
        notNested() {
          if (this.isNested) {
            throw new TypeError("FlatBuffers: object serialization must not be nested.");
          }
        }
        /**
         * Set the current vtable at `voffset` to the current location in the buffer.
         */
        slot(voffset) {
          if (this.vtable !== null)
            this.vtable[voffset] = this.offset();
        }
        /**
         * @returns Offset relative to the end of the buffer.
         */
        offset() {
          return this.bb.capacity() - this.space;
        }
        /**
         * Doubles the size of the backing ByteBuffer and copies the old data towards
         * the end of the new buffer (since we build the buffer backwards).
         *
         * @param bb The current buffer with the existing data
         * @returns A new byte buffer with the old data copied
         * to it. The data is located at the end of the buffer.
         *
         * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
         * it a uint8Array we need to suppress the type check:
         * @suppress {checkTypes}
         */
        static growByteBuffer(bb) {
          const old_buf_size = bb.capacity();
          if (old_buf_size & 3221225472) {
            throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
          }
          const new_buf_size = old_buf_size << 1;
          const nbb = ByteBuffer.allocate(new_buf_size);
          nbb.setPosition(new_buf_size - old_buf_size);
          nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
          return nbb;
        }
        /**
         * Adds on offset, relative to where it will be written.
         *
         * @param offset The offset to add.
         */
        addOffset(offset) {
          this.prep(SIZEOF_INT, 0);
          this.writeInt32(this.offset() - offset + SIZEOF_INT);
        }
        /**
         * Start encoding a new object in the buffer.  Users will not usually need to
         * call this directly. The FlatBuffers compiler will generate helper methods
         * that call this method internally.
         */
        startObject(numfields) {
          this.notNested();
          if (this.vtable == null) {
            this.vtable = [];
          }
          this.vtable_in_use = numfields;
          for (let i = 0; i < numfields; i++) {
            this.vtable[i] = 0;
          }
          this.isNested = true;
          this.object_start = this.offset();
        }
        /**
         * Finish off writing the object that is under construction.
         *
         * @returns The offset to the object inside `dataBuffer`
         */
        endObject() {
          if (this.vtable == null || !this.isNested) {
            throw new Error("FlatBuffers: endObject called without startObject");
          }
          this.addInt32(0);
          const vtableloc = this.offset();
          let i = this.vtable_in_use - 1;
          for (; i >= 0 && this.vtable[i] == 0; i--) {
          }
          const trimmed_size = i + 1;
          for (; i >= 0; i--) {
            this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
          }
          const standard_fields = 2;
          this.addInt16(vtableloc - this.object_start);
          const len = (trimmed_size + standard_fields) * SIZEOF_SHORT;
          this.addInt16(len);
          let existing_vtable = 0;
          const vt1 = this.space;
          outer_loop:
            for (i = 0; i < this.vtables.length; i++) {
              const vt2 = this.bb.capacity() - this.vtables[i];
              if (len == this.bb.readInt16(vt2)) {
                for (let j = SIZEOF_SHORT; j < len; j += SIZEOF_SHORT) {
                  if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
                    continue outer_loop;
                  }
                }
                existing_vtable = this.vtables[i];
                break;
              }
            }
          if (existing_vtable) {
            this.space = this.bb.capacity() - vtableloc;
            this.bb.writeInt32(this.space, existing_vtable - vtableloc);
          } else {
            this.vtables.push(this.offset());
            this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
          }
          this.isNested = false;
          return vtableloc;
        }
        /**
         * Finalize a buffer, poiting to the given `root_table`.
         */
        finish(root_table, opt_file_identifier, opt_size_prefix) {
          const size_prefix = opt_size_prefix ? SIZE_PREFIX_LENGTH : 0;
          if (opt_file_identifier) {
            const file_identifier = opt_file_identifier;
            this.prep(this.minalign, SIZEOF_INT + FILE_IDENTIFIER_LENGTH + size_prefix);
            if (file_identifier.length != FILE_IDENTIFIER_LENGTH) {
              throw new TypeError("FlatBuffers: file identifier must be length " + FILE_IDENTIFIER_LENGTH);
            }
            for (let i = FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
              this.writeInt8(file_identifier.charCodeAt(i));
            }
          }
          this.prep(this.minalign, SIZEOF_INT + size_prefix);
          this.addOffset(root_table);
          if (size_prefix) {
            this.addInt32(this.bb.capacity() - this.space);
          }
          this.bb.setPosition(this.space);
        }
        /**
         * Finalize a size prefixed buffer, pointing to the given `root_table`.
         */
        finishSizePrefixed(root_table, opt_file_identifier) {
          this.finish(root_table, opt_file_identifier, true);
        }
        /**
         * This checks a required field has been set in a given table that has
         * just been constructed.
         */
        requiredField(table, field) {
          const table_start = this.bb.capacity() - table;
          const vtable_start = table_start - this.bb.readInt32(table_start);
          const ok = field < this.bb.readInt16(vtable_start) && this.bb.readInt16(vtable_start + field) != 0;
          if (!ok) {
            throw new TypeError("FlatBuffers: field " + field + " must be set");
          }
        }
        /**
         * Start a new array/vector of objects.  Users usually will not call
         * this directly. The FlatBuffers compiler will create a start/end
         * method for vector types in generated code.
         *
         * @param elem_size The size of each element in the array
         * @param num_elems The number of elements in the array
         * @param alignment The alignment of the array
         */
        startVector(elem_size, num_elems, alignment) {
          this.notNested();
          this.vector_num_elems = num_elems;
          this.prep(SIZEOF_INT, elem_size * num_elems);
          this.prep(alignment, elem_size * num_elems);
        }
        /**
         * Finish off the creation of an array and all its elements. The array must be
         * created with `startVector`.
         *
         * @returns The offset at which the newly created array
         * starts.
         */
        endVector() {
          this.writeInt32(this.vector_num_elems);
          return this.offset();
        }
        /**
         * Encode the string `s` in the buffer using UTF-8. If the string passed has
         * already been seen, we return the offset of the already written string
         *
         * @param s The string to encode
         * @return The offset in the buffer where the encoded string starts
         */
        createSharedString(s) {
          if (!s) {
            return 0;
          }
          if (!this.string_maps) {
            this.string_maps = /* @__PURE__ */ new Map();
          }
          if (this.string_maps.has(s)) {
            return this.string_maps.get(s);
          }
          const offset = this.createString(s);
          this.string_maps.set(s, offset);
          return offset;
        }
        /**
         * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
         * instead of a string, it is assumed to contain valid UTF-8 encoded data.
         *
         * @param s The string to encode
         * @return The offset in the buffer where the encoded string starts
         */
        createString(s) {
          if (s === null || s === void 0) {
            return 0;
          }
          let utf8;
          if (s instanceof Uint8Array) {
            utf8 = s;
          } else {
            utf8 = this.text_encoder.encode(s);
          }
          this.addInt8(0);
          this.startVector(1, utf8.length, 1);
          this.bb.setPosition(this.space -= utf8.length);
          this.bb.bytes().set(utf8, this.space);
          return this.endVector();
        }
        /**
         * Create a byte vector.
         *
         * @param v The bytes to add
         * @returns The offset in the buffer where the byte vector starts
         */
        createByteVector(v) {
          if (v === null || v === void 0) {
            return 0;
          }
          this.startVector(1, v.length, 1);
          this.bb.setPosition(this.space -= v.length);
          this.bb.bytes().set(v, this.space);
          return this.endVector();
        }
        /**
         * A helper function to pack an object
         *
         * @returns offset of obj
         */
        createObjectOffset(obj) {
          if (obj === null) {
            return 0;
          }
          if (typeof obj === "string") {
            return this.createString(obj);
          } else {
            return obj.pack(this);
          }
        }
        /**
         * A helper function to pack a list of object
         *
         * @returns list of offsets of each non null object
         */
        createObjectOffsetList(list) {
          const ret = [];
          for (let i = 0; i < list.length; ++i) {
            const val = list[i];
            if (val !== null) {
              ret.push(this.createObjectOffset(val));
            } else {
              throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
            }
          }
          return ret;
        }
        createStructOffsetList(list, startFunc) {
          startFunc(this, list.length);
          this.createObjectOffsetList(list.slice().reverse());
          return this.endVector();
        }
      };
    }
  });

  // node_modules/flatbuffers/mjs/flatbuffers.js
  var init_flatbuffers = __esm({
    "node_modules/flatbuffers/mjs/flatbuffers.js"() {
      init_buffer_global();
      init_process_global();
      init_constants();
      init_utils2();
      init_builder();
      init_byte_buffer();
      init_encoding();
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/packet.js
  function encodeUserInfoPacket(opts) {
    const builder = new Builder(256);
    const name = builder.createString(opts.name ?? "");
    const descr = builder.createString(opts.descr ?? "");
    const phone = builder.createString(opts.phone ?? "");
    const gender = builder.createString(opts.gender ?? "");
    const email = builder.createString(opts.email ?? "");
    const region = builder.createString(opts.region ?? "");
    const platform2 = opts.platform ? builder.createString(opts.platform) : 0;
    const osVersion = opts.osVersion ? builder.createString(opts.osVersion) : 0;
    const appVersion = opts.appVersion ? builder.createString(opts.appVersion) : 0;
    builder.startObject(11);
    if (appVersion)
      builder.addFieldOffset(10, appVersion, 0);
    if (osVersion)
      builder.addFieldOffset(9, osVersion, 0);
    if (platform2)
      builder.addFieldOffset(8, platform2, 0);
    if (opts.protoVersion)
      builder.addFieldInt32(7, opts.protoVersion >>> 0, 0);
    builder.addFieldOffset(6, region, 0);
    builder.addFieldOffset(5, email, 0);
    builder.addFieldOffset(4, gender, 0);
    builder.addFieldOffset(3, phone, 0);
    builder.addFieldOffset(2, descr, 0);
    builder.addFieldOffset(1, name, 0);
    if (opts.avatar) {
      builder.addFieldInt8(0, 1, 0);
    }
    const userinfo = builder.endObject();
    return finishCarrierPacket(builder, PACKET_TYPE_USERINFO, ANYBODY_USERINFO, userinfo);
  }
  function encodeFriendRequestPacket(opts) {
    const builder = new Builder(256);
    const name = builder.createString(opts.name ?? "");
    const descr = builder.createString(opts.descr ?? "");
    const hello = builder.createString(opts.hello ?? "");
    builder.startObject(3);
    builder.addFieldOffset(2, hello, 0);
    builder.addFieldOffset(1, descr, 0);
    builder.addFieldOffset(0, name, 0);
    const friendReq = builder.endObject();
    return finishCarrierPacket(builder, PACKET_TYPE_FRIEND_REQUEST, ANYBODY_FRIENDREQ, friendReq);
  }
  function encodeFriendMessagePacket(data, ext) {
    const builder = new Builder(256);
    const messageData = typeof data === "string" ? new TextEncoder().encode(data) : data;
    const msg = builder.createByteVector(messageData);
    const extOffset = ext ? builder.createString(ext) : 0;
    builder.startObject(2);
    builder.addFieldOffset(1, msg, 0);
    if (extOffset) {
      builder.addFieldOffset(0, extOffset, 0);
    }
    const friendMsg = builder.endObject();
    return finishCarrierPacket(builder, PACKET_TYPE_MESSAGE, ANYBODY_FRIENDMSG, friendMsg);
  }
  function encodeBulkMsgPacket(opts) {
    const builder = new Builder(opts.data.length + 128);
    const dataOffset = builder.createByteVector(opts.data);
    const extOffset = opts.ext ? builder.createString(opts.ext) : 0;
    builder.startObject(4);
    builder.addFieldOffset(3, dataOffset, 0);
    if (opts.tid !== 0n) {
      builder.addFieldInt64(2, opts.tid, BigInt(0));
    }
    if (opts.totalsz) {
      builder.addFieldInt32(1, opts.totalsz, 0);
    }
    if (extOffset) {
      builder.addFieldOffset(0, extOffset, 0);
    }
    const bulk = builder.endObject();
    return finishCarrierPacket(builder, PACKET_TYPE_BULKMSG, ANYBODY_BULKMSG, bulk);
  }
  function encodeInviteReqPacket(opts) {
    const builder = new Builder(opts.data.length + 128);
    const dataOffset = builder.createByteVector(opts.data);
    const bundleOffset = opts.bundle ? builder.createString(opts.bundle) : 0;
    const extOffset = opts.ext ? builder.createString(opts.ext) : 0;
    builder.startObject(5);
    builder.addFieldOffset(4, dataOffset, 0);
    if (opts.totalsz) {
      builder.addFieldInt32(3, opts.totalsz, 0);
    }
    if (bundleOffset) {
      builder.addFieldOffset(2, bundleOffset, 0);
    }
    if (opts.tid !== 0n) {
      builder.addFieldInt64(1, opts.tid, BigInt(0));
    }
    if (extOffset) {
      builder.addFieldOffset(0, extOffset, 0);
    }
    const ireq = builder.endObject();
    return finishCarrierPacket(builder, PACKET_TYPE_INVITE_REQUEST, ANYBODY_INVITEREQ, ireq);
  }
  function decodeCarrierPacket(bytes) {
    const bb = new ByteBuffer(bytes);
    const root = bb.readInt32(bb.position()) + bb.position();
    const packet = { bb, bb_pos: root };
    const type2 = readUint8Field(packet, 0);
    const bodyType = readUint8Field(packet, 1);
    const body2 = readTableField(packet, 2);
    if (!body2) {
      throw new Error("carrier packet body is missing");
    }
    if (type2 === PACKET_TYPE_USERINFO && bodyType === ANYBODY_USERINFO) {
      return {
        type: type2,
        avatar: readBoolField(body2, 0),
        name: readStringField(body2, 1) ?? "",
        descr: readStringField(body2, 2) ?? "",
        phone: readStringField(body2, 3) ?? "",
        gender: readStringField(body2, 4) ?? "",
        email: readStringField(body2, 5) ?? "",
        region: readStringField(body2, 6) ?? "",
        // Appended AgentNet fields — absent (default) from legacy peers.
        protoVersion: readUint32Field(body2, 7),
        platform: readStringField(body2, 8) ?? "",
        osVersion: readStringField(body2, 9) ?? "",
        appVersion: readStringField(body2, 10) ?? ""
      };
    }
    if (type2 === PACKET_TYPE_FRIEND_REQUEST && bodyType === ANYBODY_FRIENDREQ) {
      return {
        type: type2,
        name: readStringField(body2, 0) ?? "",
        descr: readStringField(body2, 1) ?? "",
        hello: readStringField(body2, 2) ?? ""
      };
    }
    if (type2 === PACKET_TYPE_MESSAGE && bodyType === ANYBODY_FRIENDMSG) {
      return {
        type: type2,
        ext: readStringField(body2, 0) ?? void 0,
        data: readByteVectorField(body2, 1) ?? new Uint8Array()
      };
    }
    if (type2 === PACKET_TYPE_BULKMSG && bodyType === ANYBODY_BULKMSG) {
      return {
        type: type2,
        ext: readStringField(body2, 0) ?? void 0,
        totalsz: readUint32Field(body2, 1),
        tid: readInt64Field(body2, 2),
        data: readByteVectorField(body2, 3) ?? new Uint8Array()
      };
    }
    if (type2 === PACKET_TYPE_INVITE_REQUEST && bodyType === ANYBODY_INVITEREQ) {
      return {
        type: type2,
        ext: readStringField(body2, 0) ?? void 0,
        tid: readInt64Field(body2, 1),
        bundle: readStringField(body2, 2) ?? void 0,
        totalsz: readUint32Field(body2, 3),
        data: readByteVectorField(body2, 4) ?? new Uint8Array()
      };
    }
    if (type2 === PACKET_TYPE_INVITE_RESPONSE && bodyType === ANYBODY_INVITERSP) {
      return {
        type: type2,
        ext: readStringField(body2, 0) ?? void 0,
        tid: readInt64Field(body2, 1),
        bundle: readStringField(body2, 2) ?? void 0,
        totalsz: readUint32Field(body2, 3),
        status: readInt32Field(body2, 4),
        reason: readStringField(body2, 5) ?? void 0,
        data: readByteVectorField(body2, 6) ?? new Uint8Array()
      };
    }
    throw new Error(`unsupported carrier packet type/body: ${type2}/${bodyType}`);
  }
  function finishCarrierPacket(builder, type2, bodyType, bodyOffset) {
    builder.startObject(3);
    builder.addFieldOffset(2, bodyOffset, 0);
    builder.addFieldInt8(1, bodyType, 0);
    builder.addFieldInt8(0, type2, 0);
    const packet = builder.endObject();
    builder.finish(packet);
    return builder.asUint8Array();
  }
  function readBoolField(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    return offset ? table.bb.readUint8(table.bb_pos + offset) !== 0 : false;
  }
  function readUint8Field(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    return offset ? table.bb.readUint8(table.bb_pos + offset) : 0;
  }
  function readUint32Field(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    return offset ? table.bb.readUint32(table.bb_pos + offset) : 0;
  }
  function readInt32Field(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    return offset ? table.bb.readInt32(table.bb_pos + offset) : 0;
  }
  function readInt64Field(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    return offset ? table.bb.readInt64(table.bb_pos + offset) : BigInt(0);
  }
  function readStringField(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    if (!offset) {
      return void 0;
    }
    return table.bb.__string(table.bb_pos + offset, Encoding.UTF16_STRING);
  }
  function readTableField(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    if (!offset) {
      return void 0;
    }
    const tableOffset = table.bb_pos + offset;
    return {
      bb: table.bb,
      bb_pos: tableOffset + table.bb.readInt32(tableOffset)
    };
  }
  function readByteVectorField(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    if (!offset) {
      return void 0;
    }
    const vector = table.bb.__vector(table.bb_pos + offset);
    const length = table.bb.__vector_len(table.bb_pos + offset);
    return table.bb.bytes().slice(vector, vector + length);
  }
  function encodeRetransmitRequest(low, high, have) {
    const out = [];
    let n = 1;
    const end = high + 1 >>> 0;
    for (let i = low >>> 0; i !== end; i = i + 1 >>> 0) {
      if (!have(i)) {
        out.push(n & 255);
        n = 0;
      }
      if (n === 255) {
        out.push(0);
        n = 1;
      } else {
        n++;
      }
    }
    return Uint8Array.from(out);
  }
  var PACKET_TYPE_USERINFO, PACKET_TYPE_FRIEND_REQUEST, PACKET_TYPE_MESSAGE, PACKET_TYPE_INVITE_REQUEST, PACKET_TYPE_INVITE_RESPONSE, PACKET_TYPE_BULKMSG, CARRIER_MAX_APP_MESSAGE_LEN, CARRIER_MAX_APP_BULKMSG_LEN, INVITE_DATA_UNIT, CARRIER_MAX_INVITE_DATA_LEN, CARRIER_EXTENSION_NAME, ANYBODY_USERINFO, ANYBODY_FRIENDREQ, ANYBODY_FRIENDMSG, ANYBODY_INVITEREQ, ANYBODY_INVITERSP, ANYBODY_BULKMSG;
  var init_packet = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/packet.js"() {
      init_buffer_global();
      init_process_global();
      init_flatbuffers();
      PACKET_TYPE_USERINFO = 3;
      PACKET_TYPE_FRIEND_REQUEST = 6;
      PACKET_TYPE_MESSAGE = 33;
      PACKET_TYPE_INVITE_REQUEST = 34;
      PACKET_TYPE_INVITE_RESPONSE = 35;
      PACKET_TYPE_BULKMSG = 36;
      CARRIER_MAX_APP_MESSAGE_LEN = 1024;
      CARRIER_MAX_APP_BULKMSG_LEN = 16 * 1024 * 1024;
      INVITE_DATA_UNIT = 1280;
      CARRIER_MAX_INVITE_DATA_LEN = 8192;
      CARRIER_EXTENSION_NAME = "carrier";
      ANYBODY_USERINFO = 1;
      ANYBODY_FRIENDREQ = 2;
      ANYBODY_FRIENDMSG = 3;
      ANYBODY_INVITEREQ = 4;
      ANYBODY_INVITERSP = 5;
      ANYBODY_BULKMSG = 6;
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/tox-onion.js
  function createOnionAnnounceRequest(opts) {
    ensureLen(opts.senderPublicKey, KEY_SIZE, "sender public key");
    ensureLen(opts.senderSecretKey, KEY_SIZE, "sender secret key");
    ensureLen(opts.nodePublicKey, KEY_SIZE, "node public key");
    ensureLen(opts.pingId, KEY_SIZE, "ping id");
    ensureLen(opts.searchPublicKey, KEY_SIZE, "search public key");
    ensureLen(opts.dataPublicKey, KEY_SIZE, "data public key");
    ensureLen(opts.sendBack, SEND_BACK_SIZE, "sendback");
    const nonce = randomBytes2(NONCE_SIZE2);
    const plain = concatBytes([
      opts.pingId,
      opts.searchPublicKey,
      opts.dataPublicKey,
      opts.sendBack
    ]);
    const encrypted = import_tweetnacl5.default.box(plain, nonce, opts.nodePublicKey, opts.senderSecretKey);
    return concatBytes([
      Uint8Array.of(NET_PACKET_ONION_ANNOUNCE_REQUEST),
      nonce,
      opts.senderPublicKey,
      encrypted
    ]);
  }
  function openOnionAnnounceResponse(packet, opts) {
    if (packet.length < 1 + SEND_BACK_SIZE + NONCE_SIZE2 + 1 + KEY_SIZE + 16) {
      return void 0;
    }
    if (packet[0] !== NET_PACKET_ONION_ANNOUNCE_RESPONSE) {
      return void 0;
    }
    const sendBack = packet.slice(1, 1 + SEND_BACK_SIZE);
    const nonce = packet.slice(1 + SEND_BACK_SIZE, 1 + SEND_BACK_SIZE + NONCE_SIZE2);
    const encrypted = packet.slice(1 + SEND_BACK_SIZE + NONCE_SIZE2);
    const plain = import_tweetnacl5.default.box.open(encrypted, nonce, opts.nodePublicKey, opts.requesterSecretKey);
    if (!plain || plain.length < 1 + KEY_SIZE) {
      return void 0;
    }
    return {
      sendBack,
      isStored: plain[0],
      pingOrDataPublicKey: plain.slice(1, 1 + KEY_SIZE),
      nodes: plain.slice(1 + KEY_SIZE)
    };
  }
  function createOnionDataRequest(opts) {
    ensureLen(opts.destinationPublicKey, KEY_SIZE, "destination public key");
    ensureLen(opts.routePublicKey, KEY_SIZE, "route public key");
    ensureLen(opts.nonce, NONCE_SIZE2, "nonce");
    if (opts.onionDataPacket.length === 0) {
      throw new Error("onion data payload must not be empty");
    }
    const temp = import_tweetnacl5.default.box.keyPair();
    const encrypted = import_tweetnacl5.default.box(opts.onionDataPacket, opts.nonce, opts.routePublicKey, temp.secretKey);
    return concatBytes([
      Uint8Array.of(NET_PACKET_ONION_DATA_REQUEST),
      opts.destinationPublicKey,
      opts.nonce,
      temp.publicKey,
      encrypted
    ]);
  }
  function createOnionDataPacket(opts) {
    ensureLen(opts.senderPublicKey, KEY_SIZE, "sender public key");
    ensureLen(opts.senderSecretKey, KEY_SIZE, "sender secret key");
    ensureLen(opts.receiverPublicKey, KEY_SIZE, "receiver public key");
    ensureLen(opts.nonce, NONCE_SIZE2, "nonce");
    if (!Number.isInteger(opts.innerPacketId) || opts.innerPacketId < 0 || opts.innerPacketId > 255) {
      throw new Error("inner packet id must be uint8");
    }
    const plain = concatBytes([Uint8Array.of(opts.innerPacketId), opts.innerPayload]);
    const encrypted = import_tweetnacl5.default.box(plain, opts.nonce, opts.receiverPublicKey, opts.senderSecretKey);
    return concatBytes([opts.senderPublicKey, encrypted]);
  }
  function createOnionRequest0(opts) {
    ensureLen(opts.nodeAPublicKey, KEY_SIZE, "node A public key");
    ensureLen(opts.nodeBPublicKey, KEY_SIZE, "node B public key");
    ensureLen(opts.nodeCPublicKey, KEY_SIZE, "node C public key");
    const nonce = randomBytes2(NONCE_SIZE2);
    const dPart = concatBytes([packIpPort(opts.nodeDHost, opts.nodeDPort), opts.payloadForNodeD]);
    const key2 = import_tweetnacl5.default.box.keyPair();
    const cEncrypted = import_tweetnacl5.default.box(dPart, nonce, opts.nodeCPublicKey, key2.secretKey);
    const cPart = concatBytes([
      packIpPort(opts.nodeCHost, opts.nodeCPort),
      key2.publicKey,
      cEncrypted
    ]);
    const key1 = import_tweetnacl5.default.box.keyPair();
    const bEncrypted = import_tweetnacl5.default.box(cPart, nonce, opts.nodeBPublicKey, key1.secretKey);
    const bPart = concatBytes([
      packIpPort(opts.nodeBHost, opts.nodeBPort),
      key1.publicKey,
      bEncrypted
    ]);
    const key0 = import_tweetnacl5.default.box.keyPair();
    const aEncrypted = import_tweetnacl5.default.box(bPart, nonce, opts.nodeAPublicKey, key0.secretKey);
    return concatBytes([
      Uint8Array.of(NET_PACKET_ONION_REQUEST_0),
      nonce,
      key0.publicKey,
      aEncrypted
    ]);
  }
  function createOnionRequest0Tcp(opts) {
    ensureLen(opts.nodeBPublicKey, KEY_SIZE, "node B public key");
    ensureLen(opts.nodeCPublicKey, KEY_SIZE, "node C public key");
    const nonce = randomBytes2(NONCE_SIZE2);
    const dPart = concatBytes([packIpPort(opts.nodeDHost, opts.nodeDPort), opts.payloadForNodeD]);
    const key2 = import_tweetnacl5.default.box.keyPair();
    const cEncrypted = import_tweetnacl5.default.box(dPart, nonce, opts.nodeCPublicKey, key2.secretKey);
    const cPart = concatBytes([
      packIpPort(opts.nodeCHost, opts.nodeCPort),
      key2.publicKey,
      cEncrypted
    ]);
    const key1 = import_tweetnacl5.default.box.keyPair();
    const bEncrypted = import_tweetnacl5.default.box(cPart, nonce, opts.nodeBPublicKey, key1.secretKey);
    return concatBytes([
      nonce,
      packIpPort(opts.nodeBHost, opts.nodeBPort),
      key1.publicKey,
      bEncrypted
    ]);
  }
  function openOnionDataResponse(packet, opts) {
    if (packet.length < 1 + NONCE_SIZE2 + KEY_SIZE + 16) {
      return void 0;
    }
    if (packet[0] !== NET_PACKET_ONION_DATA_RESPONSE) {
      return void 0;
    }
    const nonce = packet.slice(1, 1 + NONCE_SIZE2);
    const sourceTempPublicKey = packet.slice(1 + NONCE_SIZE2, 1 + NONCE_SIZE2 + KEY_SIZE);
    const encrypted = packet.slice(1 + NONCE_SIZE2 + KEY_SIZE);
    const plain = import_tweetnacl5.default.box.open(encrypted, nonce, sourceTempPublicKey, opts.dataSecretKey);
    if (!plain || plain.length < KEY_SIZE + 16) {
      return void 0;
    }
    return { nonce, sourceTempPublicKey, payload: plain };
  }
  function openOnionDataPacket(payload, opts) {
    if (payload.length < KEY_SIZE + 16 + 1) {
      return void 0;
    }
    const senderPublicKey = payload.slice(0, KEY_SIZE);
    const encrypted = payload.slice(KEY_SIZE);
    const plain = import_tweetnacl5.default.box.open(encrypted, opts.nonce, senderPublicKey, opts.receiverSecretKey);
    if (!plain || plain.length === 0) {
      return void 0;
    }
    return {
      senderPublicKey,
      innerPacketId: plain[0],
      innerPayload: plain.slice(1)
    };
  }
  function ensureLen(bytes, len, name) {
    if (bytes.length !== len) {
      throw new Error(`${name} must be ${len} bytes`);
    }
  }
  function packIpPort(host2, port) {
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      throw new Error("invalid port");
    }
    const out = new Uint8Array(PACKED_IP_PORT_SIZE);
    const ipv4 = host2.split(".");
    if (ipv4.length !== 4) {
      throw new Error("only IPv4 onion path packing is currently supported");
    }
    out[0] = 2;
    for (let i = 0; i < 4; i++) {
      const n = Number.parseInt(ipv4[i] ?? "", 10);
      if (!Number.isInteger(n) || n < 0 || n > 255) {
        throw new Error("invalid IPv4 host");
      }
      out[1 + i] = n;
    }
    out[17] = port >>> 8 & 255;
    out[18] = port & 255;
    return out;
  }
  var import_tweetnacl5, NET_PACKET_ONION_ANNOUNCE_REQUEST, NET_PACKET_ONION_ANNOUNCE_RESPONSE, NET_PACKET_ONION_DATA_REQUEST, NET_PACKET_ONION_DATA_RESPONSE, ONION_FRIEND_REQUEST_ID, NET_PACKET_ONION_REQUEST_0, KEY_SIZE, NONCE_SIZE2, SEND_BACK_SIZE, PACKED_IP_PORT_SIZE;
  var init_tox_onion = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/tox-onion.js"() {
      init_buffer_global();
      init_process_global();
      import_tweetnacl5 = __toESM(require_nacl_fast(), 1);
      init_bytes();
      NET_PACKET_ONION_ANNOUNCE_REQUEST = 131;
      NET_PACKET_ONION_ANNOUNCE_RESPONSE = 132;
      NET_PACKET_ONION_DATA_REQUEST = 133;
      NET_PACKET_ONION_DATA_RESPONSE = 134;
      ONION_FRIEND_REQUEST_ID = 32;
      NET_PACKET_ONION_REQUEST_0 = 128;
      KEY_SIZE = 32;
      NONCE_SIZE2 = 24;
      SEND_BACK_SIZE = 8;
      PACKED_IP_PORT_SIZE = 19;
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/tox-dht-crypto.js
  function createToxDhtCryptoRequest(opts) {
    if (opts.receiverPublicKey.length !== PUBLIC_KEY_SIZE2) {
      throw new Error(`receiver public key must be ${PUBLIC_KEY_SIZE2} bytes`);
    }
    if (!Number.isInteger(opts.requestId) || opts.requestId < 0 || opts.requestId > 255) {
      throw new Error("tox DHT crypto request id must be a uint8");
    }
    if (opts.data.length + 1 + MAC_SIZE2 > MAX_CRYPTO_REQUEST_SIZE) {
      throw new Error("tox DHT crypto request data is too large");
    }
    const nonce = randomBytes2(NONCE_SIZE3);
    const plain = concatBytes([Uint8Array.of(opts.requestId), opts.data]);
    const encrypted = import_tweetnacl6.default.box(plain, nonce, opts.receiverPublicKey, opts.sender.secretKey);
    return concatBytes([
      Uint8Array.of(NET_PACKET_CRYPTO),
      opts.receiverPublicKey,
      opts.sender.publicKey,
      nonce,
      encrypted
    ]);
  }
  function openToxDhtCryptoRequest(packet, self2) {
    if (packet.length <= 1 + PUBLIC_KEY_SIZE2 * 2 + NONCE_SIZE3 + MAC_SIZE2) {
      return void 0;
    }
    if (packet.length > MAX_CRYPTO_REQUEST_SIZE + MAC_SIZE2) {
      return void 0;
    }
    if (packet[0] !== NET_PACKET_CRYPTO) {
      return void 0;
    }
    const receiverPublicKey = packet.slice(1, 1 + PUBLIC_KEY_SIZE2);
    if (!bytesEqual(receiverPublicKey, self2.publicKey)) {
      return void 0;
    }
    const senderPublicKey = packet.slice(1 + PUBLIC_KEY_SIZE2, 1 + PUBLIC_KEY_SIZE2 * 2);
    const nonce = packet.slice(1 + PUBLIC_KEY_SIZE2 * 2, 1 + PUBLIC_KEY_SIZE2 * 2 + NONCE_SIZE3);
    const encrypted = packet.slice(1 + PUBLIC_KEY_SIZE2 * 2 + NONCE_SIZE3);
    const plain = import_tweetnacl6.default.box.open(encrypted, nonce, senderPublicKey, self2.secretKey);
    if (!plain || plain.length === 0) {
      return void 0;
    }
    return {
      receiverPublicKey,
      senderPublicKey,
      requestId: plain[0],
      data: plain.slice(1)
    };
  }
  function bytesEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      diff |= a[i] ^ b[i];
    }
    return diff === 0;
  }
  var import_tweetnacl6, NET_PACKET_CRYPTO, CRYPTO_PACKET_FRIEND_REQ, CRYPTO_PACKET_DHTPK, PUBLIC_KEY_SIZE2, NONCE_SIZE3, MAC_SIZE2, MAX_CRYPTO_REQUEST_SIZE;
  var init_tox_dht_crypto = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/tox-dht-crypto.js"() {
      init_buffer_global();
      init_process_global();
      import_tweetnacl6 = __toESM(require_nacl_fast(), 1);
      init_bytes();
      NET_PACKET_CRYPTO = 32;
      CRYPTO_PACKET_FRIEND_REQ = 32;
      CRYPTO_PACKET_DHTPK = 156;
      PUBLIC_KEY_SIZE2 = 32;
      NONCE_SIZE3 = 24;
      MAC_SIZE2 = 16;
      MAX_CRYPTO_REQUEST_SIZE = 1024;
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/dht-rpc.js
  function isDhtRpcType(t) {
    return t === NET_PACKET_PING_REQUEST || t === NET_PACKET_PING_RESPONSE || t === NET_PACKET_GET_NODES2 || t === NET_PACKET_SEND_NODES;
  }
  function encodeDhtRpc(type2, sender, recipientPublicKey, plain) {
    const nonce = randomBytes2(NONCE_SIZE4);
    const encrypted = import_tweetnacl7.default.box(plain, nonce, recipientPublicKey, sender.secretKey);
    return concatBytes([Uint8Array.of(type2), sender.publicKey, nonce, encrypted]);
  }
  function decodeDhtRpc(packet, ourSecretKey) {
    if (packet.length < 1 + KEY_SIZE2 + NONCE_SIZE4 + MAC_SIZE3)
      return void 0;
    const type2 = packet[0];
    if (!isDhtRpcType(type2))
      return void 0;
    const senderPublicKey = packet.slice(1, 1 + KEY_SIZE2);
    const nonce = packet.slice(1 + KEY_SIZE2, 1 + KEY_SIZE2 + NONCE_SIZE4);
    const encrypted = packet.slice(1 + KEY_SIZE2 + NONCE_SIZE4);
    const plain = import_tweetnacl7.default.box.open(encrypted, nonce, senderPublicKey, ourSecretKey);
    if (!plain)
      return void 0;
    return { type: type2, senderPublicKey, plain };
  }
  function buildPingPlain(type2, pingId) {
    return concatBytes([Uint8Array.of(type2), pingId.slice(0, 8)]);
  }
  function parsePingPlain(plain) {
    if (plain.length < 1 + 8)
      return void 0;
    return { innerType: plain[0], pingId: plain.slice(1, 9) };
  }
  function buildGetNodesPlain(targetPublicKey, pingId) {
    return concatBytes([targetPublicKey.slice(0, 32), pingId.slice(0, 8)]);
  }
  function parseGetNodesPlain(plain) {
    if (plain.length < 32 + 8)
      return void 0;
    return { target: plain.slice(0, 32), pingId: plain.slice(32, 40) };
  }
  function buildSendNodesPlain(packedNodes, count, pingId) {
    return concatBytes([Uint8Array.of(count & 255), packedNodes, pingId.slice(0, 8)]);
  }
  function parseSendNodesNodeBytes(plain) {
    if (plain.length < 1 + 8)
      return void 0;
    const count = plain[0];
    if (count === 0)
      return new Uint8Array(0);
    return plain.slice(1, plain.length - 8);
  }
  function packUdpNodeV4(host2, port, pk) {
    const parts = host2.split(".").map((p) => Number.parseInt(p, 10));
    if (parts.length !== 4 || parts.some((n) => !(n >= 0 && n <= 255)))
      return void 0;
    if (pk.length !== 32 || !(port > 0 && port <= 65535))
      return void 0;
    const out = new Uint8Array(1 + 4 + 2 + 32);
    out[0] = 2;
    out[1] = parts[0];
    out[2] = parts[1];
    out[3] = parts[2];
    out[4] = parts[3];
    out[5] = port >> 8 & 255;
    out[6] = port & 255;
    out.set(pk, 7);
    return out;
  }
  var import_tweetnacl7, NET_PACKET_PING_REQUEST, NET_PACKET_PING_RESPONSE, NET_PACKET_GET_NODES2, NET_PACKET_SEND_NODES, KEY_SIZE2, NONCE_SIZE4, MAC_SIZE3;
  var init_dht_rpc = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/dht-rpc.js"() {
      init_buffer_global();
      init_process_global();
      import_tweetnacl7 = __toESM(require_nacl_fast(), 1);
      init_bytes();
      NET_PACKET_PING_REQUEST = 0;
      NET_PACKET_PING_RESPONSE = 1;
      NET_PACKET_GET_NODES2 = 2;
      NET_PACKET_SEND_NODES = 4;
      KEY_SIZE2 = 32;
      NONCE_SIZE4 = 24;
      MAC_SIZE3 = 16;
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/reed-solomon.js
  function gmul(a, b) {
    if (a === 0 || b === 0)
      return 0;
    return EXP[LOG[a] + LOG[b]];
  }
  function ginv(a) {
    if (a === 0)
      throw new Error("gf inv of zero");
    return EXP[255 - LOG[a]];
  }
  function cauchyParityMatrix(k, m) {
    const rows = [];
    for (let i = 0; i < m; i++) {
      const row = new Uint8Array(k);
      const xi = k + i;
      for (let j = 0; j < k; j++) {
        row[j] = ginv(xi ^ j);
      }
      rows.push(row);
    }
    return rows;
  }
  function rsEncode(data, m) {
    const k = data.length;
    if (k === 0 || m === 0)
      return [];
    const len = data[0].length;
    const parity = cauchyParityMatrix(k, m);
    const out = [];
    for (let i = 0; i < m; i++) {
      const shard = new Uint8Array(len);
      const row = parity[i];
      for (let j = 0; j < k; j++) {
        const coeff = row[j];
        if (coeff === 0)
          continue;
        const src = data[j];
        const lc = LOG[coeff];
        for (let b = 0; b < len; b++) {
          const s = src[b];
          if (s !== 0)
            shard[b] ^= EXP[lc + LOG[s]];
        }
      }
      out.push(shard);
    }
    return out;
  }
  function invert(matrix, k) {
    const a = matrix.map((r) => Uint8Array.from(r));
    const inv = Array.from({ length: k }, (_, i) => {
      const r = new Uint8Array(k);
      r[i] = 1;
      return r;
    });
    for (let col = 0; col < k; col++) {
      let piv = col;
      while (piv < k && a[piv][col] === 0)
        piv++;
      if (piv === k)
        return null;
      if (piv !== col) {
        [a[piv], a[col]] = [a[col], a[piv]];
        [inv[piv], inv[col]] = [inv[col], inv[piv]];
      }
      const pv = a[col][col];
      const pvInv = ginv(pv);
      for (let j = 0; j < k; j++) {
        a[col][j] = gmul(a[col][j], pvInv);
        inv[col][j] = gmul(inv[col][j], pvInv);
      }
      for (let row = 0; row < k; row++) {
        if (row === col)
          continue;
        const f = a[row][col];
        if (f === 0)
          continue;
        const lf = LOG[f];
        for (let j = 0; j < k; j++) {
          if (a[col][j] !== 0)
            a[row][j] ^= EXP[lf + LOG[a[col][j]]];
          if (inv[col][j] !== 0)
            inv[row][j] ^= EXP[lf + LOG[inv[col][j]]];
        }
      }
    }
    return inv;
  }
  function rsDecode(shards, k, m, len) {
    if (shards.slice(0, k).every((s) => s !== null))
      return shards.slice(0, k);
    const parity = cauchyParityMatrix(k, m);
    const encRow = (idx) => {
      if (idx < k) {
        const r = new Uint8Array(k);
        r[idx] = 1;
        return r;
      }
      return parity[idx - k];
    };
    const subMatrix = [];
    const present = [];
    for (let idx = 0; idx < k + m && subMatrix.length < k; idx++) {
      const s = shards[idx];
      if (s) {
        subMatrix.push(encRow(idx));
        present.push(s);
      }
    }
    if (subMatrix.length < k)
      return null;
    const invMatrix = invert(subMatrix, k);
    if (!invMatrix)
      return null;
    const data = [];
    for (let i = 0; i < k; i++) {
      if (shards[i]) {
        data.push(shards[i]);
        continue;
      }
      const shard = new Uint8Array(len);
      const row = invMatrix[i];
      for (let j = 0; j < k; j++) {
        const coeff = row[j];
        if (coeff === 0)
          continue;
        const src = present[j];
        const lc = LOG[coeff];
        for (let b = 0; b < len; b++) {
          const sv = src[b];
          if (sv !== 0)
            shard[b] ^= EXP[lc + LOG[sv]];
        }
      }
      data.push(shard);
    }
    return data;
  }
  var EXP, LOG;
  var init_reed_solomon = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/reed-solomon.js"() {
      init_buffer_global();
      init_process_global();
      EXP = new Uint8Array(512);
      LOG = new Uint8Array(256);
      (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          EXP[i] = x;
          LOG[x] = i;
          x <<= 1;
          if (x & 256)
            x ^= 285;
        }
        for (let i = 255; i < 512; i++)
          EXP[i] = EXP[i - 255];
      })();
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/filetransfer.js
  function encodeFec(fileNumber, blockIndex, parityIndex, parity) {
    return concatBytes([Uint8Array.of(fileNumber & 255), u32be(blockIndex), Uint8Array.of(parityIndex & 255), parity]);
  }
  function parseFec(p) {
    if (p.length < 6)
      return void 0;
    return { fileNumber: p[0], blockIndex: readU32be(p, 1), parityIndex: p[5], parity: p.slice(6) };
  }
  function fecBlockK(blockIndex, totalChunks) {
    return Math.min(FEC_K, totalChunks - blockIndex * FEC_K);
  }
  function u32be(n) {
    const b = new Uint8Array(4);
    b[0] = n >>> 24 & 255;
    b[1] = n >>> 16 & 255;
    b[2] = n >>> 8 & 255;
    b[3] = n & 255;
    return b;
  }
  function u64be(n) {
    const b = new Uint8Array(8);
    let v = n;
    for (let i = 7; i >= 0; i--) {
      b[i] = Number(v & 0xffn);
      v >>= 8n;
    }
    return b;
  }
  function readU32be(b, o) {
    return (b[o] << 24 | b[o + 1] << 16 | b[o + 2] << 8 | b[o + 3]) >>> 0;
  }
  function readU64be(b, o) {
    let v = 0n;
    for (let i = 0; i < 8; i++)
      v = v << 8n | BigInt(b[o + i]);
    return v;
  }
  function encodeFileSendRequest(fileNumber, fileType, fileSize, fileId, filename) {
    const nameBytes = enc.encode(filename).slice(0, MAX_FILENAME_LENGTH);
    return concatBytes([Uint8Array.of(fileNumber & 255), u32be(fileType), u64be(fileSize), fileId.slice(0, FILE_ID_LENGTH), nameBytes]);
  }
  function parseFileSendRequest(p) {
    if (p.length < 1 + 4 + 8 + FILE_ID_LENGTH)
      return void 0;
    return {
      fileNumber: p[0],
      fileType: readU32be(p, 1),
      fileSize: readU64be(p, 5),
      fileId: p.slice(13, 13 + FILE_ID_LENGTH),
      filename: dec.decode(p.slice(13 + FILE_ID_LENGTH))
    };
  }
  function encodeFileControl(sendReceive, fileNumber, controlType, data) {
    const head = Uint8Array.of(sendReceive & 1, fileNumber & 255, controlType & 255);
    return data && data.length ? concatBytes([head, data]) : head;
  }
  function parseFileControl(p) {
    if (p.length < 3)
      return void 0;
    return { sendReceive: p[0], fileNumber: p[1], controlType: p[2], data: p.slice(3) };
  }
  function encodeFileData(fileNumber, offset, data) {
    return concatBytes([Uint8Array.of(fileNumber & 255), u32be(offset), data]);
  }
  function parseFileData(p) {
    if (p.length < 5)
      return void 0;
    return { fileNumber: p[0], offset: readU32be(p, 1), data: p.slice(5) };
  }
  var PACKET_ID_FILE_SENDREQUEST, PACKET_ID_FILE_CONTROL, PACKET_ID_FILE_DATA, PACKET_ID_FILE_FEC, FILE_ID_LENGTH, MAX_FILENAME_LENGTH, MAX_CONCURRENT_FILE_PIPES, MAX_FILE_DATA_SIZE, FEC_K, FEC_M_MIN, FEC_M_MAX, FEC_MARGIN, FEC_SAFETY, FEC_ACTIVE_WINDOW_MS, FILECONTROL, FILEKIND, WINDOW_CHUNKS, CWND_INIT_CHUNKS, CWND_MIN_CHUNKS, PACE_CYCLE_GAINS, PACE_BW_WINDOW, PACE_SAMPLE_MS, PACE_INIT_BPS, LAN_PACE_INIT_BPS, PACE_BURST_MS, LAN_SAMPLE_MAX_GAIN, LAN_STARTUP_MAX_GAIN, LAN_STARTUP_DELIVERY_GAIN, LAN_STARTUP_QUEUE_MS, LAN_STARTUP_HARD_QUEUE_MS, LAN_STARTUP_QUEUE_ROUNDS, LAN_STARTUP_KEEPUP, LAN_RECOVERY_GAIN, LAN_RECOVERY_QUEUE_MS, LAN_STARTUP_SLOW_ROUNDS, LAN_BDP_RTT_FLOOR_MS, LAN_CWND_INIT_CHUNKS, WATCHDOG_MS, WATCHDOG_MAX_MS, STALL_PROBE_THRESHOLD, FAST_RT_MIN_MS, ACK_THROTTLE_MS, REACK_MS, FINAL_ACK_GRACE_MS, SEND_GIVEUP_MS, PERSIST_INTERVAL_BYTES, enc, dec, hex, nowMs, chunkCount, _sending, _receiving, _resumeDir, _partPath, partPath_fn, _map, map_fn, _freeNumber, freeNumber_fn, _onSendRequest, onSendRequest_fn, _onControl, onControl_fn, _onData, onData_fn, _advanceContiguous, advanceContiguous_fn, _finishOrAck, finishOrAck_fn, _onFec, onFec_fn, _tryRecoverBlock, tryRecoverBlock_fn, _persistPartial, persistPartial_fn, _finishRecv, finishRecv_fn, _scheduleAck, scheduleAck_fn, _measureLoss, measureLoss_fn, _sendAck, sendAck_fn, _onAck, onAck_fn, _rewindRetransmit, rewindRetransmit_fn, _sendProbeChunk, sendProbeChunk_fn, _pump, pump_fn, _schedulePace, schedulePace_fn, _emitParity, emitParity_fn, _completeSend, completeSend_fn, _endSend, endSend_fn, _endRecv, endRecv_fn, FileTransferManager;
  var init_filetransfer = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/filetransfer.js"() {
      init_buffer_global();
      init_process_global();
      init_bytes();
      init_node_crypto();
      init_node_stub();
      init_node_stub();
      init_reed_solomon();
      PACKET_ID_FILE_SENDREQUEST = 80;
      PACKET_ID_FILE_CONTROL = 81;
      PACKET_ID_FILE_DATA = 82;
      PACKET_ID_FILE_FEC = 83;
      FILE_ID_LENGTH = 32;
      MAX_FILENAME_LENGTH = 255;
      MAX_CONCURRENT_FILE_PIPES = 256;
      MAX_FILE_DATA_SIZE = 1367;
      FEC_K = 16;
      FEC_M_MIN = 4;
      FEC_M_MAX = 16;
      FEC_MARGIN = 2;
      FEC_SAFETY = 1.15;
      FEC_ACTIVE_WINDOW_MS = 4e3;
      FILECONTROL = { ACCEPT: 0, PAUSE: 1, KILL: 2, SEEK: 3, ACK: 4 };
      FILEKIND = { DATA: 0, AVATAR: 1 };
      WINDOW_CHUNKS = 768;
      CWND_INIT_CHUNKS = 16;
      CWND_MIN_CHUNKS = 8;
      PACE_CYCLE_GAINS = [1.25, 0.8, 1, 1, 1, 1, 1, 1];
      PACE_BW_WINDOW = 10;
      PACE_SAMPLE_MS = 200;
      PACE_INIT_BPS = 12e4;
      LAN_PACE_INIT_BPS = 2e6;
      PACE_BURST_MS = 20;
      LAN_SAMPLE_MAX_GAIN = 1.25;
      LAN_STARTUP_MAX_GAIN = 1.15;
      LAN_STARTUP_DELIVERY_GAIN = 1.5;
      LAN_STARTUP_QUEUE_MS = 500;
      LAN_STARTUP_HARD_QUEUE_MS = 2e3;
      LAN_STARTUP_QUEUE_ROUNDS = 2;
      LAN_STARTUP_KEEPUP = 0.7;
      LAN_RECOVERY_GAIN = 1.2;
      LAN_RECOVERY_QUEUE_MS = 250;
      LAN_STARTUP_SLOW_ROUNDS = 15;
      LAN_BDP_RTT_FLOOR_MS = 50;
      LAN_CWND_INIT_CHUNKS = Math.ceil(LAN_PACE_INIT_BPS * (LAN_BDP_RTT_FLOOR_MS / 1e3) * 2 / MAX_FILE_DATA_SIZE);
      WATCHDOG_MS = 150;
      WATCHDOG_MAX_MS = 8e3;
      STALL_PROBE_THRESHOLD = 3;
      FAST_RT_MIN_MS = 40;
      ACK_THROTTLE_MS = 15;
      REACK_MS = 200;
      FINAL_ACK_GRACE_MS = 1e4;
      SEND_GIVEUP_MS = 6e4;
      PERSIST_INTERVAL_BYTES = 1024 * 1024;
      enc = new TextEncoder();
      dec = new TextDecoder();
      hex = (b) => Buffer2.from(b).toString("hex");
      nowMs = () => Date.now();
      chunkCount = (size) => size <= 0 ? 0 : Math.ceil(size / MAX_FILE_DATA_SIZE);
      FileTransferManager = class {
        constructor(send, emit, isLanPath = () => false, pathKind = (friendId) => this.isLanPath(friendId) ? "lan" : "relay", onDeadPath = () => {
        }) {
          __privateAdd(this, _partPath);
          __privateAdd(this, _map);
          __privateAdd(this, _freeNumber);
          __privateAdd(this, _onSendRequest);
          __privateAdd(this, _onControl);
          // ── receiver ──────────────────────────────────────────────────────
          __privateAdd(this, _onData);
          // Advance the contiguous prefix over received/recovered chunks, emitting
          // progress and flushing the resume file. Does not finish or ack.
          __privateAdd(this, _advanceContiguous);
          __privateAdd(this, _finishOrAck);
          // A parity shard arrived → store it and try to repair its block.
          __privateAdd(this, _onFec);
          // If FEC block `b` has at least K of its K+M shards (data + parity), rebuild
          // the missing data chunks LOCALLY — no retransmit, so the sender's window
          // never stalls waiting for the lost chunk.
          __privateAdd(this, _tryRecoverBlock);
          // Flush the newly-contiguous bytes to the resume file, throttled so we do at
          // most one append per PERSIST_INTERVAL_BYTES of progress (not per chunk).
          __privateAdd(this, _persistPartial);
          __privateAdd(this, _finishRecv);
          __privateAdd(this, _scheduleAck);
          // Raw network loss (0..100) behind the frontier: the fraction of chunk slots
          // between the contiguous prefix and the highest byte seen that have NOT arrived
          // over the network (netGot=0). FEC-recovered holes still count as losses here
          // (netGot stays 0), so the estimate doesn't collapse to zero the moment FEC
          // patches a block — which would starve parity and reopen the hole. Self-
          // correcting: under-provisioned parity leaves holes → the window fills with
          // gaps → the reported loss rises → the sender adds parity.
          __privateAdd(this, _measureLoss);
          __privateAdd(this, _sendAck);
          // ── sender ────────────────────────────────────────────────────────
          __privateAdd(this, _onAck);
          // Rewind for a go-back-N retransmit: move the send cursor back to the ack point
          // AND rewind the FEC high-water mark so the re-sent blocks get FRESH parity.
          // Without the parity rewind a lossy TAIL freezes forever — re-sending the
          // region drops new chunks faster than it fills the old holes, and the receiver
          // has no parity to recover them locally (parity was emitted once, long gone).
          // Re-emitting parity lets the receiver FEC-recover the holes, so the tail
          // converges instead of stalling at 93% (observed on 100 MB+ files).
          __privateAdd(this, _rewindRetransmit);
          // Zero-delivery probe: exactly one chunk at the ack frontier, no window
          // re-blast, no parity. Keeps a dead/black-holed path's cost near zero
          // (~1.4 KB per patience tick) so the shared relay socket still carries
          // ping/IP, while still being the precise retransmit for a lost hole.
          __privateAdd(this, _sendProbeChunk);
          // Single send loop. Awaits each send so net_crypto / the UDP socket applies
          // backpressure (fire-and-forget blasted the whole window into the macOS UDP
          // buffer at once → systematic overflow/drops the retransmit couldn't dig out
          // of → a big file "failed"). Sends from `nextSend`, which the ack handler and
          // watchdog rewind to `acked` to retransmit a hole (go-back-N). The fixed
          // window bounds in-flight bytes; throughput self-clocks to the path.
          __privateAdd(this, _pump);
          // Re-kick the pump after `waitMs`, when the token bucket will have refilled
          // enough for the next chunk. One timer at a time — pacing, not spinning.
          __privateAdd(this, _schedulePace);
          // Send M parity shards for each FEC block whose K data chunks have all been
          // sent (once per block). Parity is computed from the source file, so no state
          // is kept beyond the high-water block index.
          __privateAdd(this, _emitParity);
          __privateAdd(this, _completeSend);
          __privateAdd(this, _endSend);
          __privateAdd(this, _endRecv);
          __publicField(this, "send");
          __publicField(this, "emit");
          __publicField(this, "isLanPath");
          __publicField(this, "pathKind");
          __publicField(this, "onDeadPath");
          __privateAdd(this, _sending, /* @__PURE__ */ new Map());
          __privateAdd(this, _receiving, /* @__PURE__ */ new Map());
          // When set, incoming transfers persist their contiguous prefix here so a
          // dropped/restarted transfer resumes instead of restarting (断点续传).
          __privateAdd(this, _resumeDir, void 0);
          this.send = send;
          this.emit = emit;
          this.isLanPath = isLanPath;
          this.pathKind = pathKind;
          this.onDeadPath = onDeadPath;
        }
        /** Enable resumable receives: partials are persisted under `dir` and matched
         *  on re-offer by content-hash fileId. Unset = in-memory only (no resume). */
        setResumeDir(dir) {
          try {
            mkdirSync(dir, { recursive: true });
            __privateSet(this, _resumeDir, dir);
          } catch {
            __privateSet(this, _resumeDir, void 0);
          }
        }
        sendFile(friendId, data, opts) {
          const fileId = data.length > 0 ? new Uint8Array(createHash("sha256").update(data).digest()).slice(0, FILE_ID_LENGTH) : randomBytes2(FILE_ID_LENGTH);
          const fileNumber = __privateMethod(this, _freeNumber, freeNumber_fn).call(this, friendId, fileId[0] ?? 0);
          if (fileNumber < 0)
            return null;
          const req = encodeFileSendRequest(fileNumber, opts.kind ?? FILEKIND.DATA, BigInt(data.length), fileId, opts.name);
          const lanPath = this.isLanPath(friendId);
          const st = {
            fileNumber,
            fileId,
            name: opts.name,
            data,
            size: data.length,
            acked: 0,
            nextSend: 0,
            pumping: false,
            started: false,
            req,
            startMs: nowMs(),
            lastProgressAcked: 0,
            lastAckAdvanceMs: nowMs(),
            lastResendMs: 0,
            cwnd: lanPath ? LAN_CWND_INIT_CHUNKS : CWND_INIT_CHUNKS,
            stalls: 0,
            parityHighBlock: -1,
            lastLossMs: 0,
            lossEwma: 0,
            minRttMs: Infinity,
            srttMs: 0,
            probeOffset: -1,
            probeSentMs: 0,
            paceRateBps: lanPath ? LAN_PACE_INIT_BPS : PACE_INIT_BPS,
            paceTokens: 0,
            lastPaceMs: nowMs(),
            btlBwBps: 0,
            bwSamples: [],
            fullBwBps: 0,
            fullBwRounds: 0,
            startupQueueRounds: 0,
            bbrPhase: 0,
            roundCount: 0,
            rateMarkMs: nowMs(),
            rateMarkAcked: 0,
            lowRttCount: 0,
            lowRttMinMs: Infinity,
            lastCcLogMs: 0,
            lanPath,
            dbgLanNow: lanPath ? 1 : 0,
            dbgSampleMs: 0,
            dbgRoundRate: 0,
            dbgMeasuredRate: 0,
            dbgRawQueue: 0,
            dbgUnder: 0,
            dbgOvershot: 0
          };
          __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).set(fileNumber, st);
          void this.send(friendId, PACKET_ID_FILE_SENDREQUEST, req).catch(() => void 0);
          let offerSinceMs = nowMs();
          st.offerTimer = setInterval(() => {
            const cur = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).get(fileNumber);
            if (!cur || cur.started) {
              if (st.offerTimer)
                clearInterval(st.offerTimer);
              st.offerTimer = void 0;
              return;
            }
            if (nowMs() - offerSinceMs >= SEND_GIVEUP_MS) {
              __privateMethod(this, _endSend, endSend_fn).call(this, friendId, fileNumber);
              this.emit("file-cancel", { friendId, fileId: hex(fileId), sending: true, reason: "no-response" });
              return;
            }
            void this.send(friendId, PACKET_ID_FILE_SENDREQUEST, cur.req).catch(() => void 0);
          }, WATCHDOG_MS * 3);
          if (typeof st.offerTimer.unref === "function")
            st.offerTimer.unref();
          return hex(fileId);
        }
        accept(friendId, fileNumber) {
          const st = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(fileNumber);
          if (!st || st.done)
            return;
          void this.send(friendId, PACKET_ID_FILE_CONTROL, encodeFileControl(1, fileNumber, FILECONTROL.ACCEPT)).catch(() => void 0);
          __privateMethod(this, _sendAck, sendAck_fn).call(this, friendId, st);
          if (!st.reackTimer) {
            st.reackTimer = setInterval(() => {
              const cur = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(fileNumber);
              if (!cur || cur.done) {
                if (st.reackTimer)
                  clearInterval(st.reackTimer);
                st.reackTimer = void 0;
                return;
              }
              __privateMethod(this, _sendAck, sendAck_fn).call(this, friendId, cur);
            }, REACK_MS);
            if (typeof st.reackTimer.unref === "function")
              st.reackTimer.unref();
          }
        }
        cancel(friendId, fileNumber, isSending) {
          const inner = (isSending ? __privateGet(this, _sending) : __privateGet(this, _receiving)).get(friendId);
          const st = inner?.get(fileNumber);
          const fileId = st ? hex(st.fileId) : void 0;
          const sr = isSending ? 0 : 1;
          void this.send(friendId, PACKET_ID_FILE_CONTROL, encodeFileControl(sr, fileNumber, FILECONTROL.KILL)).catch(() => void 0);
          if (isSending)
            __privateMethod(this, _endSend, endSend_fn).call(this, friendId, fileNumber);
          else
            __privateMethod(this, _endRecv, endRecv_fn).call(this, friendId, fileNumber);
          if (fileId)
            this.emit("file-cancel", { friendId, fileId, sending: isSending, reason: "local" });
        }
        // Cancel by content fileId (hex) — the daemon/UI tracks transfers by fileId,
        // not the internal fileNumber, so it can stop a specific in-flight transfer.
        cancelByFileId(friendId, fileIdHex, isSending) {
          const want = fileIdHex.trim().toLowerCase();
          const inner = (isSending ? __privateGet(this, _sending) : __privateGet(this, _receiving)).get(friendId);
          if (!inner)
            return false;
          for (const [fileNumber, st] of inner) {
            if (hex(st.fileId) === want) {
              this.cancel(friendId, fileNumber, isSending);
              return true;
            }
          }
          return false;
        }
        /** Cancel in-flight sends matching both name and size.
         *  This is a conservative registry-desync fallback after fileId/hash lookup. */
        cancelSendsMatching(friendId, match) {
          const inner = __privateGet(this, _sending).get(friendId);
          if (!inner)
            return [];
          const candidates = [...inner].filter(([, st]) => st.size === match.size);
          const named = match.name ? candidates.filter(([, st]) => st.name === match.name) : [];
          const picked = named;
          const killed = [];
          for (const [fileNumber, st] of picked) {
            killed.push(hex(st.fileId));
            this.cancel(friendId, fileNumber, true);
          }
          return killed;
        }
        handlePacket(friendId, packetId, payload) {
          if (packetId === PACKET_ID_FILE_SENDREQUEST) {
            __privateMethod(this, _onSendRequest, onSendRequest_fn).call(this, friendId, payload);
            return true;
          }
          if (packetId === PACKET_ID_FILE_CONTROL) {
            __privateMethod(this, _onControl, onControl_fn).call(this, friendId, payload);
            return true;
          }
          if (packetId === PACKET_ID_FILE_DATA) {
            __privateMethod(this, _onData, onData_fn).call(this, friendId, payload);
            return true;
          }
          if (packetId === PACKET_ID_FILE_FEC) {
            __privateMethod(this, _onFec, onFec_fn).call(this, friendId, payload);
            return true;
          }
          return false;
        }
        clearFriend(friendId) {
          for (const st of __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).values()) {
            if (st.timer)
              clearInterval(st.timer);
            if (st.offerTimer)
              clearInterval(st.offerTimer);
          }
          for (const st of __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).values()) {
            if (st.ackTimer)
              clearTimeout(st.ackTimer);
            if (st.reackTimer)
              clearInterval(st.reackTimer);
          }
          __privateGet(this, _sending).delete(friendId);
          __privateGet(this, _receiving).delete(friendId);
        }
      };
      _sending = new WeakMap();
      _receiving = new WeakMap();
      _resumeDir = new WeakMap();
      _partPath = new WeakSet();
      partPath_fn = function(fileId) {
        return __privateGet(this, _resumeDir) ? join(__privateGet(this, _resumeDir), hex(fileId) + ".part") : void 0;
      };
      _map = new WeakSet();
      map_fn = function(m, friendId) {
        let inner = m.get(friendId);
        if (!inner) {
          inner = /* @__PURE__ */ new Map();
          m.set(friendId, inner);
        }
        return inner;
      };
      _freeNumber = new WeakSet();
      freeNumber_fn = function(friendId, preferred = 0) {
        const inner = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId);
        for (let n = 0; n < MAX_CONCURRENT_FILE_PIPES; n++) {
          const i = (preferred + n) % MAX_CONCURRENT_FILE_PIPES;
          if (!inner.has(i))
            return i;
        }
        return -1;
      };
      _onSendRequest = new WeakSet();
      onSendRequest_fn = function(friendId, payload) {
        const r = parseFileSendRequest(payload);
        if (!r)
          return;
        const size = Number(r.fileSize);
        const existing = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(r.fileNumber);
        if (existing && !existing.done) {
          __privateMethod(this, _sendAck, sendAck_fn).call(this, friendId, existing);
          return;
        }
        const st = {
          fileNumber: r.fileNumber,
          fileId: r.fileId,
          name: r.filename,
          size,
          buf: new Uint8Array(size),
          got: new Uint8Array(chunkCount(size)),
          netGot: new Uint8Array(chunkCount(size)),
          lossPctEwma: 0,
          contiguous: 0,
          maxByte: 0,
          persisted: 0,
          partPath: __privateMethod(this, _partPath, partPath_fn).call(this, r.fileId),
          fecParity: /* @__PURE__ */ new Map(),
          done: false,
          ackDirty: false
        };
        if (st.partPath && existsSync(st.partPath)) {
          try {
            const have = Math.min(statSync(st.partPath).size, size);
            const chunks = Math.floor(have / MAX_FILE_DATA_SIZE);
            const usable = Math.min(chunks * MAX_FILE_DATA_SIZE, size);
            if (usable > 0) {
              const partial = readFileSync(st.partPath);
              st.buf.set(partial.subarray(0, usable), 0);
              for (let i = 0; i < chunks; i++) {
                st.got[i] = 1;
                st.netGot[i] = 1;
              }
              st.contiguous = usable;
              st.maxByte = usable;
              st.persisted = usable;
              if (have > usable)
                writeFileSync(st.partPath, st.buf.subarray(0, usable));
            }
          } catch {
          }
        }
        __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).set(r.fileNumber, st);
        this.emit("file-offer", { friendId, fileNumber: r.fileNumber, fileId: hex(r.fileId), name: r.filename, size, kind: r.fileType });
        if (st.contiguous >= size) {
          __privateMethod(this, _finishRecv, finishRecv_fn).call(this, friendId, st);
          return;
        }
        if (size === 0)
          __privateMethod(this, _finishRecv, finishRecv_fn).call(this, friendId, st);
      };
      _onControl = new WeakSet();
      onControl_fn = function(friendId, payload) {
        const c = parseFileControl(payload);
        if (!c)
          return;
        if (c.sendReceive === 1) {
          const st = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).get(c.fileNumber);
          if (!st)
            return;
          if (c.controlType === FILECONTROL.ACCEPT || c.controlType === FILECONTROL.ACK) {
            if (!st.started) {
              st.started = true;
              if (st.offerTimer) {
                clearInterval(st.offerTimer);
                st.offerTimer = void 0;
              }
            }
          }
          if (c.controlType === FILECONTROL.ACCEPT) {
            __privateMethod(this, _pump, pump_fn).call(this, friendId, st);
          } else if (c.controlType === FILECONTROL.ACK) {
            __privateMethod(this, _onAck, onAck_fn).call(this, friendId, st, c.data);
          } else if (c.controlType === FILECONTROL.KILL) {
            __privateMethod(this, _endSend, endSend_fn).call(this, friendId, c.fileNumber);
            this.emit("file-cancel", { friendId, fileId: hex(st.fileId), sending: true });
          }
        } else {
          const st = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(c.fileNumber);
          if (!st)
            return;
          if (c.controlType === FILECONTROL.KILL) {
            __privateMethod(this, _endRecv, endRecv_fn).call(this, friendId, c.fileNumber);
            this.emit("file-cancel", { friendId, fileId: hex(st.fileId), sending: false });
          }
        }
      };
      _onData = new WeakSet();
      onData_fn = function(friendId, payload) {
        const d = parseFileData(payload);
        if (!d)
          return;
        const st = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(d.fileNumber);
        if (!st)
          return;
        if (st.done) {
          __privateMethod(this, _sendAck, sendAck_fn).call(this, friendId, st);
          return;
        }
        const { offset, data } = d;
        if (data.length === 0 || offset + data.length > st.size)
          return;
        const idx = Math.floor(offset / MAX_FILE_DATA_SIZE);
        if (offset % MAX_FILE_DATA_SIZE !== 0 || idx >= st.got.length)
          return;
        if (offset + data.length > st.maxByte)
          st.maxByte = offset + data.length;
        st.netGot[idx] = 1;
        if (!st.got[idx]) {
          st.buf.set(data, offset);
          st.got[idx] = 1;
          __privateMethod(this, _advanceContiguous, advanceContiguous_fn).call(this, friendId, st);
        }
        __privateMethod(this, _tryRecoverBlock, tryRecoverBlock_fn).call(this, friendId, st, Math.floor(idx / FEC_K));
        __privateMethod(this, _finishOrAck, finishOrAck_fn).call(this, friendId, st);
      };
      _advanceContiguous = new WeakSet();
      advanceContiguous_fn = function(friendId, st) {
        let i = Math.floor(st.contiguous / MAX_FILE_DATA_SIZE);
        while (i < st.got.length && st.got[i])
          i++;
        const nc = Math.min(i * MAX_FILE_DATA_SIZE, st.size);
        if (nc > st.contiguous) {
          st.contiguous = nc;
          this.emit("file-progress", { friendId, fileId: hex(st.fileId), received: st.contiguous, total: st.size });
          __privateMethod(this, _persistPartial, persistPartial_fn).call(this, st);
        }
      };
      _finishOrAck = new WeakSet();
      finishOrAck_fn = function(friendId, st) {
        if (st.done)
          return;
        if (st.contiguous >= st.size) {
          __privateMethod(this, _finishRecv, finishRecv_fn).call(this, friendId, st);
          return;
        }
        __privateMethod(this, _scheduleAck, scheduleAck_fn).call(this, friendId, st);
      };
      _onFec = new WeakSet();
      onFec_fn = function(friendId, payload) {
        const f = parseFec(payload);
        if (!f)
          return;
        const st = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(f.fileNumber);
        if (!st || st.done)
          return;
        if (f.parity.length !== MAX_FILE_DATA_SIZE || f.parityIndex >= FEC_M_MAX)
          return;
        let arr = st.fecParity.get(f.blockIndex);
        if (!arr) {
          arr = new Array(FEC_M_MAX).fill(void 0);
          st.fecParity.set(f.blockIndex, arr);
        }
        if (!arr[f.parityIndex])
          arr[f.parityIndex] = f.parity;
        __privateMethod(this, _tryRecoverBlock, tryRecoverBlock_fn).call(this, friendId, st, f.blockIndex);
        __privateMethod(this, _finishOrAck, finishOrAck_fn).call(this, friendId, st);
      };
      _tryRecoverBlock = new WeakSet();
      tryRecoverBlock_fn = function(friendId, st, b) {
        if (st.done || b < 0)
          return;
        const totalChunks = chunkCount(st.size);
        if (b * FEC_K >= totalChunks)
          return;
        const k = fecBlockK(b, totalChunks);
        const base = b * FEC_K;
        const missing = [];
        for (let i = 0; i < k; i++)
          if (!st.got[base + i])
            missing.push(i);
        if (missing.length === 0) {
          st.fecParity.delete(b);
          return;
        }
        const parityArr = st.fecParity.get(b);
        const parityPresent = parityArr ? parityArr.reduce((n, s) => n + (s ? 1 : 0), 0) : 0;
        if (k - missing.length + parityPresent < k)
          return;
        if (missing.length > parityPresent)
          return;
        const shards = [];
        for (let i = 0; i < k; i++) {
          if (st.got[base + i]) {
            const off = (base + i) * MAX_FILE_DATA_SIZE;
            const chunk = st.buf.subarray(off, Math.min(off + MAX_FILE_DATA_SIZE, st.size));
            if (chunk.length === MAX_FILE_DATA_SIZE)
              shards.push(chunk);
            else {
              const padded = new Uint8Array(MAX_FILE_DATA_SIZE);
              padded.set(chunk);
              shards.push(padded);
            }
          } else
            shards.push(null);
        }
        for (let pi = 0; pi < FEC_M_MAX; pi++)
          shards.push(parityArr?.[pi] ?? null);
        const recovered = rsDecode(shards, k, FEC_M_MAX, MAX_FILE_DATA_SIZE);
        if (!recovered)
          return;
        for (const i of missing) {
          const off = (base + i) * MAX_FILE_DATA_SIZE;
          const realLen = Math.min(MAX_FILE_DATA_SIZE, st.size - off);
          if (realLen <= 0)
            continue;
          st.buf.set(recovered[i].subarray(0, realLen), off);
          st.got[base + i] = 1;
          if (off + realLen > st.maxByte)
            st.maxByte = off + realLen;
        }
        st.fecParity.delete(b);
        __privateMethod(this, _advanceContiguous, advanceContiguous_fn).call(this, friendId, st);
      };
      _persistPartial = new WeakSet();
      persistPartial_fn = function(st, force = false) {
        if (!st.partPath)
          return;
        const pending = st.contiguous - st.persisted;
        if (pending <= 0)
          return;
        if (!force && pending < PERSIST_INTERVAL_BYTES)
          return;
        try {
          appendFileSync(st.partPath, st.buf.subarray(st.persisted, st.contiguous));
          st.persisted = st.contiguous;
        } catch {
        }
      };
      _finishRecv = new WeakSet();
      finishRecv_fn = function(friendId, st) {
        st.done = true;
        if (st.ackTimer) {
          clearTimeout(st.ackTimer);
          st.ackTimer = void 0;
        }
        if (st.reackTimer) {
          clearInterval(st.reackTimer);
          st.reackTimer = void 0;
        }
        __privateMethod(this, _sendAck, sendAck_fn).call(this, friendId, st);
        st.reackTimer = setInterval(() => {
          const cur = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(st.fileNumber);
          if (cur !== st) {
            if (st.reackTimer)
              clearInterval(st.reackTimer);
            st.reackTimer = void 0;
            return;
          }
          __privateMethod(this, _sendAck, sendAck_fn).call(this, friendId, st);
        }, REACK_MS);
        if (typeof st.reackTimer.unref === "function")
          st.reackTimer.unref();
        const data = st.buf;
        if (st.partPath) {
          try {
            unlinkSync(st.partPath);
          } catch {
          }
        }
        this.emit("file-complete", { friendId, fileId: hex(st.fileId), name: st.name, size: st.size, data });
        st.buf = new Uint8Array(0);
        st.got = new Uint8Array(0);
        const t = setTimeout(() => {
          const cur = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(st.fileNumber);
          if (cur === st) {
            if (st.reackTimer) {
              clearInterval(st.reackTimer);
              st.reackTimer = void 0;
            }
            __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).delete(st.fileNumber);
          }
        }, FINAL_ACK_GRACE_MS);
        if (typeof t.unref === "function")
          t.unref();
      };
      _scheduleAck = new WeakSet();
      scheduleAck_fn = function(friendId, st) {
        st.ackDirty = true;
        if (st.ackTimer)
          return;
        st.ackTimer = setTimeout(() => {
          st.ackTimer = void 0;
          if (st.ackDirty && !st.done)
            __privateMethod(this, _sendAck, sendAck_fn).call(this, friendId, st);
        }, ACK_THROTTLE_MS);
      };
      _measureLoss = new WeakSet();
      measureLoss_fn = function(st) {
        const lo = Math.floor(st.contiguous / MAX_FILE_DATA_SIZE);
        const hi = Math.min(st.got.length, Math.ceil(st.maxByte / MAX_FILE_DATA_SIZE));
        let span = 0, holes = 0;
        for (let i = lo; i < hi && span < 4096; i++) {
          span++;
          if (!st.netGot[i])
            holes++;
        }
        const inst = span > 0 ? holes / span : 0;
        st.lossPctEwma = st.lossPctEwma === 0 ? inst : 0.7 * st.lossPctEwma + 0.3 * inst;
        return Math.max(0, Math.min(100, Math.round(st.lossPctEwma * 100)));
      };
      _sendAck = new WeakSet();
      sendAck_fn = function(friendId, st) {
        st.ackDirty = false;
        const body2 = new Uint8Array(9);
        body2.set(u32be(st.contiguous), 0);
        body2.set(u32be(st.maxByte), 4);
        body2[8] = __privateMethod(this, _measureLoss, measureLoss_fn).call(this, st);
        void this.send(friendId, PACKET_ID_FILE_CONTROL, encodeFileControl(1, st.fileNumber, FILECONTROL.ACK, body2)).catch(() => void 0);
      };
      _onAck = new WeakSet();
      onAck_fn = function(friendId, st, data) {
        if (data.length < 4)
          return;
        const ackedOffset = readU32be(data, 0);
        const maxRecv = data.length >= 8 ? readU32be(data, 4) : ackedOffset;
        if (data.length >= 9) {
          const reported = data[8] / 100;
          st.lossEwma = 0.6 * st.lossEwma + 0.4 * reported;
        }
        if (ackedOffset > st.acked) {
          const nowT = nowMs();
          const resumedPrefix = st.acked === 0 && ackedOffset > st.nextSend;
          st.acked = Math.min(ackedOffset, st.size);
          st.lastAckAdvanceMs = nowT;
          st.stalls = 0;
          if (st.deadPathTripped)
            this.onDeadPath(friendId);
          if (st.nextSend < st.acked)
            st.nextSend = st.acked;
          if (resumedPrefix) {
            st.rateMarkMs = nowT;
            st.rateMarkAcked = st.acked;
            st.probeOffset = -1;
          }
          if (!resumedPrefix && st.probeOffset >= 0 && st.acked >= st.probeOffset) {
            const rtt = nowT - st.probeSentMs;
            st.probeOffset = -1;
            const pathKindAtProbe = this.pathKind(friendId);
            const lowSample = st.srttMs > 0 && rtt > 0 && rtt < st.srttMs * 0.4;
            if (lowSample) {
              st.lowRttCount++;
              st.lowRttMinMs = Math.min(st.lowRttMinMs, rtt);
            } else {
              st.lowRttCount = 0;
              st.lowRttMinMs = Infinity;
            }
            const promoteLowPath = pathKindAtProbe === "lan" && lowSample && st.lowRttCount >= 3;
            const acceptedRtt = promoteLowPath ? st.lowRttMinMs : rtt;
            if (promoteLowPath) {
              st.srttMs = acceptedRtt;
              st.minRttMs = acceptedRtt;
              st.lowRttCount = 0;
              st.lowRttMinMs = Infinity;
            }
            if ((!lowSample || promoteLowPath) && acceptedRtt > 0) {
              st.srttMs = st.srttMs === 0 ? acceptedRtt : 0.85 * st.srttMs + 0.15 * acceptedRtt;
              if (acceptedRtt < st.minRttMs)
                st.minRttMs = acceptedRtt;
              const sampleMs = nowT - st.rateMarkMs;
              if (sampleMs >= PACE_SAMPLE_MS) {
                st.roundCount++;
                const roundRate = (st.acked - st.rateMarkAcked) * 1e3 / sampleMs;
                st.rateMarkMs = nowT;
                st.rateMarkAcked = st.acked;
                const pathKind = pathKindAtProbe;
                const lanNow = pathKind === "lan";
                const udpDirectNow = pathKind === "udp-direct";
                const measuredRate = lanNow ? Math.min(roundRate, Math.max(PACE_INIT_BPS, st.paceRateBps * LAN_SAMPLE_MAX_GAIN)) : roundRate;
                st.dbgLanNow = lanNow ? 1 : 0;
                st.dbgSampleMs = Math.round(sampleMs);
                st.dbgRoundRate = Math.round(roundRate);
                st.dbgMeasuredRate = Math.round(measuredRate);
                st.dbgUnder = 0;
                st.dbgOvershot = 0;
                if (measuredRate > 0) {
                  st.bwSamples.push(measuredRate);
                  if (st.bwSamples.length > PACE_BW_WINDOW)
                    st.bwSamples.shift();
                  st.btlBwBps = Math.max(...st.bwSamples);
                }
                const lossMult = lanNow ? 1 : 1 / (1 - Math.min(0.5, st.lossEwma));
                if (lanNow && !st.lanPath) {
                  st.bbrPhase = 0;
                  st.fullBwRounds = 0;
                  st.startupQueueRounds = 0;
                  st.bwSamples = [];
                  st.btlBwBps = 0;
                  st.paceRateBps = Math.max(st.paceRateBps, LAN_PACE_INIT_BPS);
                  st.cwnd = Math.max(st.cwnd, LAN_CWND_INIT_CHUNKS);
                }
                st.lanPath = lanNow;
                const rawQueue = st.minRttMs !== Infinity ? acceptedRtt - st.minRttMs : 0;
                st.dbgRawQueue = Math.round(rawQueue);
                if (!lanNow && !udpDirectNow) {
                  st.bbrPhase = 2;
                  const gain = PACE_CYCLE_GAINS[st.roundCount % PACE_CYCLE_GAINS.length];
                  st.paceRateBps = Math.max(PACE_INIT_BPS, Math.min(PACE_INIT_BPS * 2, st.btlBwBps * gain * lossMult));
                } else if (udpDirectNow) {
                  if (st.bbrPhase === 0) {
                    if (st.fullBwBps === 0 || st.btlBwBps >= st.fullBwBps * 1.2) {
                      st.fullBwBps = st.btlBwBps;
                      st.fullBwRounds = 0;
                    } else {
                      st.fullBwRounds++;
                    }
                    if (st.fullBwRounds >= 3 || rawQueue > 350) {
                      st.bbrPhase = 2;
                    }
                    if (st.bbrPhase === 0) {
                      st.paceRateBps = Math.max(st.paceRateBps * 1.4, st.btlBwBps * 2 * lossMult);
                    } else {
                      st.paceRateBps = Math.max(PACE_INIT_BPS * 0.5, st.btlBwBps * lossMult);
                    }
                  } else {
                    const gain = PACE_CYCLE_GAINS[st.roundCount % PACE_CYCLE_GAINS.length];
                    st.paceRateBps = Math.max(PACE_INIT_BPS * 0.5, st.btlBwBps * gain * lossMult);
                  }
                } else if (st.bbrPhase === 0) {
                  if (measuredRate >= st.paceRateBps * LAN_STARTUP_KEEPUP) {
                    st.fullBwRounds = 0;
                  } else {
                    st.fullBwRounds++;
                  }
                  if (rawQueue > LAN_STARTUP_QUEUE_MS) {
                    st.startupQueueRounds++;
                  } else {
                    st.startupQueueRounds = 0;
                  }
                  const startupOvershot = rawQueue > LAN_STARTUP_HARD_QUEUE_MS || st.startupQueueRounds >= LAN_STARTUP_QUEUE_ROUNDS;
                  const startupUnderDelivering = st.fullBwRounds >= LAN_STARTUP_SLOW_ROUNDS;
                  st.dbgUnder = startupUnderDelivering ? 1 : 0;
                  st.dbgOvershot = startupOvershot ? 1 : 0;
                  if (startupUnderDelivering || startupOvershot) {
                    st.bbrPhase = 2;
                  }
                  if (startupUnderDelivering || startupOvershot) {
                    st.bwSamples = measuredRate > 0 ? [measuredRate] : [];
                    st.btlBwBps = measuredRate > 0 ? measuredRate : PACE_INIT_BPS;
                    st.startupQueueRounds = 0;
                    st.paceRateBps = Math.max(PACE_INIT_BPS, Math.min(st.paceRateBps * 0.8, st.btlBwBps * 1.1));
                  } else if (st.bbrPhase === 0) {
                    st.paceRateBps = Math.max(st.paceRateBps, Math.min(st.paceRateBps * LAN_STARTUP_MAX_GAIN, Math.max(PACE_INIT_BPS, measuredRate * LAN_STARTUP_DELIVERY_GAIN)));
                  } else {
                    st.paceRateBps = Math.max(PACE_INIT_BPS * 0.5, Math.min(st.paceRateBps, st.btlBwBps * lossMult));
                  }
                } else {
                  const gain = PACE_CYCLE_GAINS[st.roundCount % PACE_CYCLE_GAINS.length];
                  const cruiseRate = Math.max(PACE_INIT_BPS * 0.5, st.btlBwBps * gain * lossMult);
                  const healthyLan = lanNow && st.lossEwma < 0.02 && rawQueue < LAN_RECOVERY_QUEUE_MS;
                  st.paceRateBps = healthyLan ? Math.max(cruiseRate, Math.min(LAN_PACE_INIT_BPS, Math.max(st.paceRateBps * LAN_RECOVERY_GAIN, measuredRate * LAN_STARTUP_DELIVERY_GAIN))) : cruiseRate;
                }
                if (st.minRttMs !== Infinity && st.minRttMs > 0) {
                  st.paceRateBps = Math.min(st.paceRateBps, WINDOW_CHUNKS * MAX_FILE_DATA_SIZE / (st.minRttMs / 1e3));
                }
                const bdpRttMs = st.minRttMs !== Infinity && st.minRttMs > 0 ? lanNow ? Math.max(st.minRttMs, LAN_BDP_RTT_FLOOR_MS) : st.minRttMs : 0;
                const paceBdp = bdpRttMs > 0 ? st.paceRateBps * (bdpRttMs / 1e3) / MAX_FILE_DATA_SIZE : WINDOW_CHUNKS;
                const cwndFloor = lanNow ? CWND_INIT_CHUNKS : CWND_MIN_CHUNKS;
                st.cwnd = Math.max(cwndFloor, Math.min(WINDOW_CHUNKS, Math.ceil(paceBdp * 2)));
              }
            }
            if (process.env.DECENT_DEBUG && nowT - st.lastCcLogMs >= 1e3) {
              st.lastCcLogMs = nowT;
              const windowEnd = Math.min(st.acked + st.cwnd * MAX_FILE_DATA_SIZE, st.size);
              console.error(`[file-cc] friend=${friendId.slice(0, 8)} ack=${st.acked}/${st.size} rtt=${rtt}ms srtt=${st.srttMs.toFixed(1)}ms low=${st.lowRttCount} accepted=${!lowSample || promoteLowPath ? 1 : 0} pace=${Math.round(st.paceRateBps)}Bps bw=${Math.round(st.btlBwBps)}Bps cwnd=${st.cwnd} phase=${st.bbrPhase} slow=${st.fullBwRounds} loss=${(st.lossEwma * 100).toFixed(1)}% rounds=${st.roundCount} path=${pathKindAtProbe} lanNow=${st.dbgLanNow} lanPath=${st.lanPath ? 1 : 0} sampleMs=${st.dbgSampleMs} roundRate=${st.dbgRoundRate} measuredRate=${st.dbgMeasuredRate} rawQueue=${st.dbgRawQueue} startupQueueRounds=${st.startupQueueRounds} under=${st.dbgUnder} overshot=${st.dbgOvershot} rateMarkAcked=${st.rateMarkAcked} nextSend=${st.nextSend} windowEnd=${windowEnd} tokens=${Math.round(st.paceTokens)}`);
            }
          }
          if (st.acked - st.lastProgressAcked >= 16 * 1024 || st.acked >= st.size) {
            st.lastProgressAcked = st.acked;
            this.emit("file-progress", { friendId, fileId: hex(st.fileId), received: st.acked, total: st.size, sending: true });
          }
        } else if (maxRecv > st.acked + Math.max(4, st.cwnd >> 2) * MAX_FILE_DATA_SIZE && nowMs() - st.lastResendMs >= FAST_RT_MIN_MS) {
          st.lastResendMs = nowMs();
          st.lastLossMs = nowMs();
          __privateMethod(this, _rewindRetransmit, rewindRetransmit_fn).call(this, st);
        }
        if (st.acked >= st.size) {
          __privateMethod(this, _completeSend, completeSend_fn).call(this, friendId, st);
          return;
        }
        void __privateMethod(this, _pump, pump_fn).call(this, friendId, st);
      };
      _rewindRetransmit = new WeakSet();
      rewindRetransmit_fn = function(st) {
        if (st.nextSend > st.acked)
          st.nextSend = st.acked;
        const ackBlock = Math.floor(st.acked / MAX_FILE_DATA_SIZE / FEC_K);
        if (ackBlock - 1 < st.parityHighBlock)
          st.parityHighBlock = ackBlock - 1;
        st.lastLossMs = nowMs();
      };
      _sendProbeChunk = new WeakSet();
      sendProbeChunk_fn = async function(friendId, st) {
        const off = st.acked;
        const end = Math.min(off + MAX_FILE_DATA_SIZE, st.size);
        if (end <= off)
          return;
        if (st.nextSend < end)
          st.nextSend = end;
        try {
          await this.send(friendId, PACKET_ID_FILE_DATA, encodeFileData(st.fileNumber, off, st.data.subarray(off, end)));
        } catch {
        }
        if (process.env.DECENT_DEBUG || process.env.DECENT_DEBUG_VERBOSE) {
          console.error(`[file-ft] dead-path-probe friend=${friendId.slice(0, 8)} num=${st.fileNumber} stalls=${st.stalls} acked=${st.acked}/${st.size}`);
        }
      };
      _pump = new WeakSet();
      pump_fn = async function(friendId, st) {
        if (!st.timer) {
          let stalledSinceMs = nowMs();
          st.timer = setInterval(() => {
            const cur = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).get(st.fileNumber);
            if (!cur) {
              if (st.timer)
                clearInterval(st.timer);
              st.timer = void 0;
              return;
            }
            if (st.acked >= st.size)
              return;
            const rttFloor = st.srttMs > 0 ? st.srttMs * 3 : WATCHDOG_MS;
            const patience = Math.min(WATCHDOG_MAX_MS, Math.max(WATCHDOG_MS << Math.min(st.stalls, 4), rttFloor));
            if (nowMs() - st.lastAckAdvanceMs < patience) {
              stalledSinceMs = nowMs();
              return;
            }
            if (nowMs() - stalledSinceMs >= SEND_GIVEUP_MS) {
              __privateMethod(this, _endSend, endSend_fn).call(this, friendId, st.fileNumber);
              this.emit("file-cancel", { friendId, fileId: hex(st.fileId), sending: true, reason: "timeout" });
              return;
            }
            st.stalls++;
            st.cwnd = Math.max(CWND_MIN_CHUNKS, Math.floor(st.cwnd / 2));
            st.lastAckAdvanceMs = nowMs();
            st.lastResendMs = nowMs();
            if (st.stalls >= STALL_PROBE_THRESHOLD) {
              st.deadPathTripped = true;
              this.onDeadPath(friendId);
              void __privateMethod(this, _sendProbeChunk, sendProbeChunk_fn).call(this, friendId, st);
              return;
            }
            __privateMethod(this, _rewindRetransmit, rewindRetransmit_fn).call(this, st);
            void __privateMethod(this, _pump, pump_fn).call(this, friendId, st);
          }, WATCHDOG_MS);
          if (typeof st.timer.unref === "function")
            st.timer.unref();
        }
        if (st.pumping)
          return;
        st.pumping = true;
        try {
          while (__privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).has(st.fileNumber) && st.acked < st.size) {
            const windowEnd = Math.min(st.acked + st.cwnd * MAX_FILE_DATA_SIZE, st.size);
            if (st.nextSend >= windowEnd)
              break;
            const nowP = nowMs();
            st.paceTokens = Math.min(st.paceTokens + (nowP - st.lastPaceMs) / 1e3 * st.paceRateBps, st.paceRateBps * (PACE_BURST_MS / 1e3) + MAX_FILE_DATA_SIZE);
            st.lastPaceMs = nowP;
            if (st.paceTokens < MAX_FILE_DATA_SIZE) {
              const waitMs = Math.max(2, Math.ceil((MAX_FILE_DATA_SIZE - st.paceTokens) / st.paceRateBps * 1e3));
              __privateMethod(this, _schedulePace, schedulePace_fn).call(this, friendId, st, waitMs);
              break;
            }
            const off = st.nextSend;
            const end = Math.min(off + MAX_FILE_DATA_SIZE, st.size);
            try {
              await this.send(friendId, PACKET_ID_FILE_DATA, encodeFileData(st.fileNumber, off, st.data.subarray(off, end)));
            } catch (error) {
              if (process.env.DECENT_DEBUG || process.env.DECENT_DEBUG_VERBOSE) {
                console.error(`[file-ft] data-send-error friend=${friendId.slice(0, 8)} num=${st.fileNumber} off=${off} error=${error instanceof Error ? error.message : String(error)}`);
              }
              break;
            }
            st.paceTokens -= end - off;
            if (st.nextSend === off)
              st.nextSend = end;
            if (st.probeOffset < 0 && end > st.acked) {
              st.probeOffset = end;
              st.probeSentMs = nowMs();
            }
          }
          __privateMethod(this, _emitParity, emitParity_fn).call(this, friendId, st);
        } finally {
          st.pumping = false;
        }
      };
      _schedulePace = new WeakSet();
      schedulePace_fn = function(friendId, st, waitMs) {
        if (st.paceTimer)
          return;
        st.paceTimer = setTimeout(() => {
          st.paceTimer = void 0;
          if (__privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).has(st.fileNumber))
            void __privateMethod(this, _pump, pump_fn).call(this, friendId, st);
        }, waitMs);
        if (typeof st.paceTimer.unref === "function")
          st.paceTimer.unref();
      };
      _emitParity = new WeakSet();
      emitParity_fn = function(friendId, st) {
        const totalChunks = chunkCount(st.size);
        const totalBlocks = Math.ceil(totalChunks / FEC_K);
        const fecOn = nowMs() - st.lastLossMs < FEC_ACTIVE_WINDOW_MS;
        while (st.parityHighBlock + 1 < totalBlocks) {
          const b = st.parityHighBlock + 1;
          const kActual = fecBlockK(b, totalChunks);
          const blockEndByte = Math.min((b * FEC_K + kActual) * MAX_FILE_DATA_SIZE, st.size);
          if (st.nextSend < blockEndByte)
            break;
          if (!fecOn) {
            st.parityHighBlock = b;
            continue;
          }
          const p = Math.min(0.6, st.lossEwma);
          const mNeed = Math.ceil(kActual * p / (1 - p) * FEC_SAFETY) + FEC_MARGIN;
          const mSend = Math.max(FEC_M_MIN, Math.min(FEC_M_MAX, mNeed));
          const shards = [];
          for (let i = 0; i < kActual; i++) {
            const off = (b * FEC_K + i) * MAX_FILE_DATA_SIZE;
            const chunk = st.data.subarray(off, Math.min(off + MAX_FILE_DATA_SIZE, st.size));
            if (chunk.length === MAX_FILE_DATA_SIZE)
              shards.push(chunk);
            else {
              const padded = new Uint8Array(MAX_FILE_DATA_SIZE);
              padded.set(chunk);
              shards.push(padded);
            }
          }
          const parity = rsEncode(shards, mSend);
          for (let pi = 0; pi < parity.length; pi++) {
            void this.send(friendId, PACKET_ID_FILE_FEC, encodeFec(st.fileNumber, b, pi, parity[pi])).catch(() => void 0);
          }
          st.paceTokens -= parity.length * MAX_FILE_DATA_SIZE;
          st.parityHighBlock = b;
        }
      };
      _completeSend = new WeakSet();
      completeSend_fn = function(friendId, st) {
        const durationMs = nowMs() - st.startMs;
        const mbps = durationMs > 0 ? st.size / 1024 / 1024 / (durationMs / 1e3) : 0;
        __privateMethod(this, _endSend, endSend_fn).call(this, friendId, st.fileNumber);
        this.emit("file-progress", { friendId, fileId: hex(st.fileId), received: st.size, total: st.size, sending: true });
        this.emit("file-complete", { friendId, fileId: hex(st.fileId), name: st.name, size: st.size, sending: true, durationMs, mbps });
      };
      _endSend = new WeakSet();
      endSend_fn = function(friendId, fileNumber) {
        const st = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).get(fileNumber);
        if (st?.timer) {
          clearInterval(st.timer);
          st.timer = void 0;
        }
        if (st?.offerTimer) {
          clearInterval(st.offerTimer);
          st.offerTimer = void 0;
        }
        if (st?.paceTimer) {
          clearTimeout(st.paceTimer);
          st.paceTimer = void 0;
        }
        __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _sending), friendId).delete(fileNumber);
      };
      _endRecv = new WeakSet();
      endRecv_fn = function(friendId, fileNumber) {
        const st = __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).get(fileNumber);
        if (st?.ackTimer) {
          clearTimeout(st.ackTimer);
          st.ackTimer = void 0;
        }
        if (st?.reackTimer) {
          clearInterval(st.reackTimer);
          st.reackTimer = void 0;
        }
        __privateMethod(this, _map, map_fn).call(this, __privateGet(this, _receiving), friendId).delete(fileNumber);
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/dnft1.js
  function encodeDnft1Frame(packetId, payload) {
    const out = new Uint8Array(DNFT1_HEADER_LENGTH + payload.length);
    out.set(DNFT1_MAGIC, 0);
    out[6] = packetId & 255;
    const n = payload.length;
    out[7] = n >>> 24 & 255;
    out[8] = n >>> 16 & 255;
    out[9] = n >>> 8 & 255;
    out[10] = n & 255;
    out.set(payload, DNFT1_HEADER_LENGTH);
    return out;
  }
  function parseDnft1Frame(raw) {
    if (raw.length < DNFT1_HEADER_LENGTH)
      return null;
    for (let i = 0; i < DNFT1_MAGIC.length; i++) {
      if (raw[i] !== DNFT1_MAGIC[i])
        return null;
    }
    const packetId = raw[6];
    if (packetId < PACKET_ID_FILE_SENDREQUEST || packetId > PACKET_ID_FILE_FEC)
      return null;
    const length = (raw[7] << 24 | raw[8] << 16 | raw[9] << 8 | raw[10]) >>> 0;
    if (raw.length - DNFT1_HEADER_LENGTH < length)
      return null;
    return {
      packetId,
      payload: raw.subarray(DNFT1_HEADER_LENGTH, DNFT1_HEADER_LENGTH + length)
    };
  }
  var DNFT1_MAGIC, DNFT1_HEADER_LENGTH, _dnft1, _pinned, _unanswered, _Dnft1TransportPolicy, Dnft1TransportPolicy;
  var init_dnft1 = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/dnft1.js"() {
      init_buffer_global();
      init_process_global();
      init_filetransfer();
      DNFT1_MAGIC = Uint8Array.from([30, 68, 78, 70, 84, 49]);
      DNFT1_HEADER_LENGTH = 11;
      _Dnft1TransportPolicy = class _Dnft1TransportPolicy {
        constructor() {
          __privateAdd(this, _dnft1, /* @__PURE__ */ new Set());
          __privateAdd(this, _pinned, /* @__PURE__ */ new Set());
          __privateAdd(this, _unanswered, /* @__PURE__ */ new Map());
        }
        /** True when this friend's file packets should be sent as DNFT1 frames. */
        useDnft1(friendId) {
          return __privateGet(this, _dnft1).has(friendId);
        }
        /** True once a real inbound file packet has settled the transport. */
        isPinned(friendId) {
          return __privateGet(this, _pinned).has(friendId);
        }
        /**
         * Called for every outbound OFFER (packet 80). Returns true when this offer
         * flipped the transport — the caller should send THIS offer on the new one.
         */
        noteOfferSent(friendId) {
          if (__privateGet(this, _pinned).has(friendId))
            return false;
          const n = (__privateGet(this, _unanswered).get(friendId) ?? 0) + 1;
          if (n < _Dnft1TransportPolicy.UNANSWERED_OFFERS_BEFORE_SWITCH) {
            __privateGet(this, _unanswered).set(friendId, n);
            return false;
          }
          __privateGet(this, _unanswered).set(friendId, 0);
          if (__privateGet(this, _dnft1).has(friendId))
            __privateGet(this, _dnft1).delete(friendId);
          else
            __privateGet(this, _dnft1).add(friendId);
          return true;
        }
        /**
         * Called for every inbound file packet, with the transport it arrived on.
         * Pins the mode: the peer just proved which one it speaks.
         */
        noteInbound(friendId, viaDnft1) {
          __privateGet(this, _unanswered).delete(friendId);
          __privateGet(this, _pinned).add(friendId);
          if (viaDnft1)
            __privateGet(this, _dnft1).add(friendId);
          else
            __privateGet(this, _dnft1).delete(friendId);
        }
        /** Drop all state for a friend (removed, or session torn down). */
        forget(friendId) {
          __privateGet(this, _dnft1).delete(friendId);
          __privateGet(this, _pinned).delete(friendId);
          __privateGet(this, _unanswered).delete(friendId);
        }
      };
      _dnft1 = new WeakMap();
      _pinned = new WeakMap();
      _unanswered = new WeakMap();
      /** Consecutive unanswered offers before trying the other transport. */
      __publicField(_Dnft1TransportPolicy, "UNANSWERED_OFFERS_BEFORE_SWITCH", 3);
      Dnft1TransportPolicy = _Dnft1TransportPolicy;
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/net-crypto.js
  function createCookieRequest(opts) {
    if (opts.senderRealPublicKey.length !== KEY_SIZE3) {
      throw new Error("sender real public key must be 32 bytes");
    }
    if (opts.senderDhtPublicKey.length !== KEY_SIZE3) {
      throw new Error("sender dht public key must be 32 bytes");
    }
    if (opts.senderDhtSecretKey.length !== KEY_SIZE3) {
      throw new Error("sender dht secret key must be 32 bytes");
    }
    if (opts.receiverDhtPublicKey.length !== KEY_SIZE3) {
      throw new Error("receiver dht public key must be 32 bytes");
    }
    const plain = concatBytes([
      opts.senderRealPublicKey,
      opts.senderDhtPublicKey,
      writeUint64Le(opts.echo)
    ]);
    if (plain.length !== COOKIE_REQUEST_PLAIN_LENGTH) {
      throw new Error("cookie request plaintext size mismatch");
    }
    const nonce = randomBytes2(NONCE_SIZE5);
    const sharedKey = import_tweetnacl8.default.box.before(opts.receiverDhtPublicKey, opts.senderDhtSecretKey);
    const cipher = import_tweetnacl8.default.secretbox(plain, nonce, sharedKey);
    return concatBytes([
      Uint8Array.of(NET_PACKET_COOKIE_REQUEST),
      opts.senderDhtPublicKey,
      nonce,
      cipher
    ]);
  }
  function openCookieRequest(packet, opts) {
    if (packet.length !== COOKIE_REQUEST_LENGTH || packet[0] !== NET_PACKET_COOKIE_REQUEST) {
      return void 0;
    }
    const senderDhtPublicKey = packet.slice(1, 1 + KEY_SIZE3);
    const nonce = packet.slice(1 + KEY_SIZE3, 1 + KEY_SIZE3 + NONCE_SIZE5);
    const cipher = packet.slice(1 + KEY_SIZE3 + NONCE_SIZE5);
    const sharedKey = import_tweetnacl8.default.box.before(senderDhtPublicKey, opts.receiverDhtSecretKey);
    const plain = import_tweetnacl8.default.secretbox.open(cipher, nonce, sharedKey);
    if (!plain || plain.length !== COOKIE_REQUEST_PLAIN_LENGTH) {
      return void 0;
    }
    return {
      senderDhtPublicKey,
      senderRealPublicKey: plain.slice(0, KEY_SIZE3),
      echo: readUint64Le(plain, COOKIE_DATA_LENGTH)
    };
  }
  function createCookieResponse(opts) {
    const cookie = createCookie({
      symmetricKey: opts.receiverCookieSymmetricKey,
      realPublicKey: opts.request.senderRealPublicKey,
      dhtPublicKey: opts.request.senderDhtPublicKey
    });
    const plain = concatBytes([cookie, writeUint64Le(opts.request.echo)]);
    const nonce = randomBytes2(NONCE_SIZE5);
    const sharedKey = import_tweetnacl8.default.box.before(opts.request.senderDhtPublicKey, opts.receiverDhtSecretKey);
    const cipher = import_tweetnacl8.default.secretbox(plain, nonce, sharedKey);
    return concatBytes([Uint8Array.of(NET_PACKET_COOKIE_RESPONSE), nonce, cipher]);
  }
  function openCookieResponse(packet, opts) {
    if (packet.length !== COOKIE_RESPONSE_LENGTH || packet[0] !== NET_PACKET_COOKIE_RESPONSE) {
      return void 0;
    }
    const nonce = packet.slice(1, 1 + NONCE_SIZE5);
    const cipher = packet.slice(1 + NONCE_SIZE5);
    const sharedKey = import_tweetnacl8.default.box.before(opts.receiverDhtPublicKey, opts.senderDhtSecretKey);
    const plain = import_tweetnacl8.default.secretbox.open(cipher, nonce, sharedKey);
    if (!plain || plain.length !== COOKIE_RESPONSE_PLAIN_LENGTH) {
      return void 0;
    }
    return {
      cookie: plain.slice(0, COOKIE_LENGTH),
      echo: readUint64Le(plain, COOKIE_LENGTH)
    };
  }
  function openCookie(cookie, opts) {
    if (cookie.length !== COOKIE_LENGTH) {
      return void 0;
    }
    const nonce = cookie.slice(0, NONCE_SIZE5);
    const cipher = cookie.slice(NONCE_SIZE5);
    const plain = import_tweetnacl8.default.secretbox.open(cipher, nonce, opts.symmetricKey);
    if (!plain || plain.length !== COOKIE_CONTENTS_LENGTH) {
      return void 0;
    }
    return {
      timestamp: readUint64Le(plain, 0),
      realPublicKey: plain.slice(8, 8 + KEY_SIZE3),
      dhtPublicKey: plain.slice(8 + KEY_SIZE3, 8 + KEY_SIZE3 + KEY_SIZE3)
    };
  }
  function createCryptoHandshake(opts) {
    const innerNonce = randomBytes2(NONCE_SIZE5);
    const ownCookie = createCookie({
      symmetricKey: opts.localCookieSymmetricKey,
      realPublicKey: opts.receiverRealPublicKey,
      dhtPublicKey: opts.receiverDhtPublicKey ?? opts.receiverRealPublicKey
    });
    const innerPlain = concatBytes([
      opts.baseNonce,
      opts.sessionPublicKey,
      sha512(opts.recipientCookie),
      ownCookie
    ]);
    const sharedKey = import_tweetnacl8.default.box.before(opts.receiverRealPublicKey, opts.senderRealSecretKey);
    const innerCipher = import_tweetnacl8.default.secretbox(innerPlain, innerNonce, sharedKey);
    return concatBytes([Uint8Array.of(NET_PACKET_CRYPTO_HS), opts.recipientCookie, innerNonce, innerCipher]);
  }
  function openCryptoHandshake(packet, opts) {
    if (packet.length !== HANDSHAKE_LENGTH || packet[0] !== NET_PACKET_CRYPTO_HS) {
      return void 0;
    }
    const recipientCookie = packet.slice(1, 1 + COOKIE_LENGTH);
    const cookieParsed = openCookie(recipientCookie, { symmetricKey: opts.receiverCookieSymmetricKey });
    if (!cookieParsed) {
      return void 0;
    }
    const senderRealPublicKey = cookieParsed.realPublicKey;
    const senderDhtPublicKey = cookieParsed.dhtPublicKey;
    const nonce = packet.slice(1 + COOKIE_LENGTH, 1 + COOKIE_LENGTH + NONCE_SIZE5);
    const cipher = packet.slice(1 + COOKIE_LENGTH + NONCE_SIZE5);
    const sharedKey = import_tweetnacl8.default.box.before(senderRealPublicKey, opts.receiverRealSecretKey);
    const inner = import_tweetnacl8.default.secretbox.open(cipher, nonce, sharedKey);
    if (!inner || inner.length !== HANDSHAKE_INNER_LENGTH) {
      return void 0;
    }
    const baseNonce = inner.slice(0, NONCE_SIZE5);
    const sessionPublicKey = inner.slice(NONCE_SIZE5, NONCE_SIZE5 + KEY_SIZE3);
    const cookieHash = inner.slice(NONCE_SIZE5 + KEY_SIZE3, NONCE_SIZE5 + KEY_SIZE3 + 64);
    if (!bytesEqual2(cookieHash, sha512(recipientCookie))) {
      return void 0;
    }
    const embeddedCookie = inner.slice(NONCE_SIZE5 + KEY_SIZE3 + 64);
    return {
      recipientCookie,
      baseNonce,
      sessionPublicKey,
      cookieHash,
      embeddedCookie,
      senderRealPublicKey,
      senderDhtPublicKey
    };
  }
  function createCryptoDataPacket(opts) {
    if (opts.payload.length === 0 || opts.payload.length > MAX_CRYPTO_DATA_SIZE) {
      throw new Error(`crypto data payload must be 1..${MAX_CRYPTO_DATA_SIZE} bytes`);
    }
    const paddingLength = (MAX_CRYPTO_DATA_SIZE - opts.payload.length) % CRYPTO_MAX_PADDING;
    const plain = new Uint8Array(CRYPTO_DATA_PLAIN_HEADER_LENGTH + paddingLength + opts.payload.length);
    writeUint32BeInto(plain, 0, opts.bufferStart);
    writeUint32BeInto(plain, 4, opts.packetNumber);
    plain.set(opts.payload, CRYPTO_DATA_PLAIN_HEADER_LENGTH + paddingLength);
    const cipher = import_tweetnacl8.default.secretbox(plain, opts.sentNonce, opts.sessionSharedKey);
    const last2 = opts.sentNonce.slice(opts.sentNonce.length - 2);
    return concatBytes([Uint8Array.of(NET_PACKET_CRYPTO_DATA), last2, cipher]);
  }
  function openCryptoDataPacket(packet, opts) {
    if (packet.length <= CRYPTO_DATA_PACKET_MIN_SIZE || packet[0] !== NET_PACKET_CRYPTO_DATA) {
      return void 0;
    }
    const nonce = opts.recvBaseNonce.slice();
    const trackedLow = (nonce[nonce.length - 2] << 8 | nonce[nonce.length - 1]) >>> 0;
    const wireLow = (packet[1] << 8 | packet[2]) >>> 0;
    const diff = wireLow - trackedLow & 65535;
    if (diff < 32768) {
      addToNonceCounter(nonce, diff);
    } else {
      subFromNonceCounter(nonce, 65536 - diff);
    }
    const cipher = packet.slice(3);
    const plain = import_tweetnacl8.default.secretbox.open(cipher, nonce, opts.sessionSharedKey);
    if (!plain || plain.length <= CRYPTO_DATA_PLAIN_HEADER_LENGTH) {
      return void 0;
    }
    const bufferStart = readUint32Be(plain, 0);
    const packetNumber = readUint32Be(plain, 4);
    let payloadOffset = CRYPTO_DATA_PLAIN_HEADER_LENGTH;
    while (payloadOffset < plain.length && plain[payloadOffset] === 0) {
      payloadOffset += 1;
    }
    if (payloadOffset >= plain.length) {
      return void 0;
    }
    return {
      payload: plain.slice(payloadOffset),
      bufferStart,
      packetNumber,
      nonceLast2: (packet[1] << 8 | packet[2]) >>> 0,
      usedNonce: nonce
    };
  }
  function addToNonceCounter(nonce, count) {
    let carry = count >>> 0;
    for (let i = nonce.length - 1; i >= 0 && carry > 0; i--) {
      const sum = nonce[i] + (carry & 255);
      nonce[i] = sum & 255;
      carry = (carry >>> 8) + (sum > 255 ? 1 : 0);
    }
  }
  function subFromNonceCounter(nonce, count) {
    let borrow = count >>> 0;
    for (let i = nonce.length - 1; i >= 0 && borrow > 0; i--) {
      const sub = nonce[i] - (borrow & 255);
      nonce[i] = sub & 255;
      borrow = (borrow >>> 8) + (sub < 0 ? 1 : 0);
    }
  }
  function createCookie(opts) {
    const timestamp = BigInt(Math.floor(Date.now() / 1e3));
    const contents = concatBytes([
      writeUint64Le(timestamp),
      opts.realPublicKey,
      opts.dhtPublicKey
    ]);
    const nonce = randomBytes2(NONCE_SIZE5);
    const cipher = import_tweetnacl8.default.secretbox(contents, nonce, opts.symmetricKey);
    return concatBytes([nonce, cipher]);
  }
  function incrementNonce(nonce) {
    for (let i = nonce.length - 1; i >= 0; i--) {
      nonce[i] = nonce[i] + 1 & 255;
      if (nonce[i] !== 0) {
        break;
      }
    }
  }
  function sha512(data) {
    return new Uint8Array(createHash("sha512").update(data).digest());
  }
  function bytesEqual2(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      diff |= a[i] ^ b[i];
    }
    return diff === 0;
  }
  function writeUint64Le(value) {
    const bytes = new Uint8Array(8);
    let v = value;
    for (let i = 0; i < 8; i++) {
      bytes[i] = Number(v & 0xffn);
      v >>= 8n;
    }
    return bytes;
  }
  function readUint64Le(bytes, offset) {
    let value = 0n;
    for (let i = 7; i >= 0; i--) {
      value = value << 8n | BigInt(bytes[offset + i]);
    }
    return value;
  }
  function writeUint32BeInto(bytes, offset, value) {
    const v = value >>> 0;
    bytes[offset] = v >>> 24 & 255;
    bytes[offset + 1] = v >>> 16 & 255;
    bytes[offset + 2] = v >>> 8 & 255;
    bytes[offset + 3] = v & 255;
  }
  function readUint32Be(bytes, offset) {
    return (bytes[offset] << 24 >>> 0 | bytes[offset + 1] << 16 | bytes[offset + 2] << 8 | bytes[offset + 3]) >>> 0;
  }
  var import_tweetnacl8, NET_PACKET_COOKIE_REQUEST, NET_PACKET_COOKIE_RESPONSE, NET_PACKET_CRYPTO_HS, NET_PACKET_CRYPTO_DATA, KEY_SIZE3, NONCE_SIZE5, MAC_SIZE4, COOKIE_DATA_LENGTH, COOKIE_CONTENTS_LENGTH, COOKIE_LENGTH, COOKIE_REQUEST_PLAIN_LENGTH, COOKIE_REQUEST_LENGTH, COOKIE_RESPONSE_PLAIN_LENGTH, COOKIE_RESPONSE_LENGTH, HANDSHAKE_INNER_LENGTH, HANDSHAKE_LENGTH, MAX_CRYPTO_PACKET_SIZE, CRYPTO_DATA_PACKET_MIN_SIZE, MAX_CRYPTO_DATA_SIZE, CRYPTO_MAX_PADDING, CRYPTO_DATA_PLAIN_HEADER_LENGTH;
  var init_net_crypto = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/net-crypto.js"() {
      init_buffer_global();
      init_process_global();
      import_tweetnacl8 = __toESM(require_nacl_fast(), 1);
      init_node_crypto();
      init_bytes();
      NET_PACKET_COOKIE_REQUEST = 24;
      NET_PACKET_COOKIE_RESPONSE = 25;
      NET_PACKET_CRYPTO_HS = 26;
      NET_PACKET_CRYPTO_DATA = 27;
      KEY_SIZE3 = 32;
      NONCE_SIZE5 = 24;
      MAC_SIZE4 = 16;
      COOKIE_DATA_LENGTH = 64;
      COOKIE_CONTENTS_LENGTH = 8 + COOKIE_DATA_LENGTH;
      COOKIE_LENGTH = NONCE_SIZE5 + COOKIE_CONTENTS_LENGTH + MAC_SIZE4;
      COOKIE_REQUEST_PLAIN_LENGTH = COOKIE_DATA_LENGTH + 8;
      COOKIE_REQUEST_LENGTH = 1 + KEY_SIZE3 + NONCE_SIZE5 + COOKIE_REQUEST_PLAIN_LENGTH + MAC_SIZE4;
      COOKIE_RESPONSE_PLAIN_LENGTH = COOKIE_LENGTH + 8;
      COOKIE_RESPONSE_LENGTH = 1 + NONCE_SIZE5 + COOKIE_RESPONSE_PLAIN_LENGTH + MAC_SIZE4;
      HANDSHAKE_INNER_LENGTH = 24 + 32 + 64 + COOKIE_LENGTH;
      HANDSHAKE_LENGTH = 1 + COOKIE_LENGTH + NONCE_SIZE5 + HANDSHAKE_INNER_LENGTH + MAC_SIZE4;
      MAX_CRYPTO_PACKET_SIZE = 1400;
      CRYPTO_DATA_PACKET_MIN_SIZE = 1 + 2 + 4 + 4 + MAC_SIZE4;
      MAX_CRYPTO_DATA_SIZE = MAX_CRYPTO_PACKET_SIZE - CRYPTO_DATA_PACKET_MIN_SIZE;
      CRYPTO_MAX_PADDING = 8;
      CRYPTO_DATA_PLAIN_HEADER_LENGTH = 8;
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/express.js
  function encrypt(key2, plain) {
    const nonce = randomBytes2(NONCE_SIZE6);
    const cipher = import_tweetnacl9.default.secretbox(plain, nonce, key2);
    const out = new Uint8Array(nonce.length + cipher.length);
    out.set(nonce, 0);
    out.set(cipher, nonce.length);
    return out;
  }
  function decrypt(key2, encrypted) {
    if (encrypted.length < NONCE_SIZE6 + 16) {
      return void 0;
    }
    const nonce = encrypted.slice(0, NONCE_SIZE6);
    const cipher = encrypted.slice(NONCE_SIZE6);
    return import_tweetnacl9.default.secretbox.open(cipher, nonce, key2) ?? void 0;
  }
  function parseExpressResponseFrames(body2) {
    const out = [];
    let offset = 0;
    while (offset + 8 <= body2.length) {
      const magic = readUint32Be2(body2, offset);
      const len = readUint32Be2(body2, offset + 4);
      offset += 8;
      if (magic !== EXPRESS_MAGIC) {
        break;
      }
      if (len === 0 || offset + len > body2.length) {
        break;
      }
      out.push(body2.slice(offset, offset + len));
      offset += len;
    }
    return out;
  }
  function readUint32Be2(bytes, offset) {
    return (bytes[offset] << 24 | bytes[offset + 1] << 16 | bytes[offset + 2] << 8 | bytes[offset + 3]) >>> 0;
  }
  function decodePullMessage(bytes) {
    const bb = new ByteBuffer(bytes);
    const root = bb.readInt32(bb.position()) + bb.position();
    const table = { bb, bb_pos: root };
    const from2 = readStringField2(table, 1) ?? "";
    const typeNum = readUint8Field2(table, 2);
    const timestamp = Number(readUint64Field(table, 3));
    const payload = readByteVectorField2(table, 5) ?? new Uint8Array();
    const address = readStringField2(table, 4);
    if (!from2 || !Number.isFinite(timestamp)) {
      return void 0;
    }
    return {
      from: from2,
      type: String.fromCharCode(typeNum),
      timestamp,
      address,
      payload
    };
  }
  function readUint8Field2(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    return offset ? table.bb.readUint8(table.bb_pos + offset) : 0;
  }
  function readUint64Field(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    if (!offset) {
      return 0n;
    }
    const pos = table.bb_pos + offset;
    const low = BigInt(table.bb.readUint32(pos));
    const high = BigInt(table.bb.readUint32(pos + 4));
    return high << 32n | low;
  }
  function readStringField2(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    if (!offset) {
      return void 0;
    }
    return table.bb.__string(table.bb_pos + offset, Encoding.UTF16_STRING);
  }
  function readByteVectorField2(table, field) {
    const offset = table.bb.__offset(table.bb_pos, 4 + field * 2);
    if (!offset) {
      return void 0;
    }
    const vector = table.bb.__vector(table.bb_pos + offset);
    const length = table.bb.__vector_len(table.bb_pos + offset);
    return table.bb.bytes().slice(vector, vector + length);
  }
  var import_tweetnacl9, EXPRESS_MAGIC, NONCE_SIZE6, HTTP_TIMEOUT_MS, _nodes2, _selfKeyPair, _selfUserId, _selfAddress, _currNode, _callbacks, _debug, _postEncrypted, postEncrypted_fn, _deleteUntilOn, deleteUntilOn_fn, _withAnyNode, withAnyNode_fn, _http, http_fn, _debugLog, debugLog_fn, LegacyExpressClient;
  var init_express = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/express.js"() {
      init_buffer_global();
      init_process_global();
      init_flatbuffers();
      import_tweetnacl9 = __toESM(require_nacl_fast());
      init_base58();
      init_bytes();
      EXPRESS_MAGIC = 3396265365;
      NONCE_SIZE6 = 24;
      HTTP_TIMEOUT_MS = 15e3;
      LegacyExpressClient = class {
        constructor(opts) {
          __privateAdd(this, _postEncrypted);
          __privateAdd(this, _deleteUntilOn);
          __privateAdd(this, _withAnyNode);
          __privateAdd(this, _http);
          __privateAdd(this, _debugLog);
          __privateAdd(this, _nodes2, void 0);
          __privateAdd(this, _selfKeyPair, void 0);
          __privateAdd(this, _selfUserId, void 0);
          __privateAdd(this, _selfAddress, void 0);
          __privateAdd(this, _currNode, 0);
          __privateAdd(this, _callbacks, void 0);
          __privateAdd(this, _debug, process.env.DECENT_DEBUG === "1");
          __privateSet(this, _selfKeyPair, opts.selfKeyPair);
          __privateSet(this, _selfUserId, opts.selfUserId);
          __privateSet(this, _selfAddress, opts.selfAddress);
          __privateSet(this, _callbacks, opts.callbacks);
          __privateSet(this, _nodes2, opts.nodes.filter((node) => typeof node.pk === "string" && node.pk.length > 0).map((node) => {
            const expressPk = base58ToBytes(node.pk);
            if (expressPk.length !== 32) {
              throw new Error(`invalid express public key for ${node.host}:${node.port}`);
            }
            return {
              host: node.host,
              port: node.port,
              tls: node.tls !== false,
              // default HTTPS; opt into HTTP with tls:false
              sharedKey: import_tweetnacl9.default.box.before(expressPk, __privateGet(this, _selfKeyPair).secretKey)
            };
          }));
        }
        hasNodes() {
          return __privateGet(this, _nodes2).length > 0;
        }
        async sendOfflineFriendRequest(address, hello) {
          await __privateMethod(this, _postEncrypted, postEncrypted_fn).call(this, address, hello);
        }
        async sendOfflineText(friendUserId, carrierPacket) {
          const friendPk = base58ToBytes(friendUserId);
          if (friendPk.length !== 32) {
            throw new Error("friend user id must decode to 32-byte public key");
          }
          const friendSharedKey = import_tweetnacl9.default.box.before(friendPk, __privateGet(this, _selfKeyPair).secretKey);
          const friendEncrypted = encrypt(friendSharedKey, carrierPacket);
          await __privateMethod(this, _postEncrypted, postEncrypted_fn).call(this, friendUserId, friendEncrypted);
        }
        async pullOnce() {
          if (!__privateGet(this, _nodes2).length) {
            return;
          }
          for (const node of __privateGet(this, _nodes2)) {
            let body2;
            try {
              body2 = await __privateMethod(this, _http, http_fn).call(this, node, "GET", encodeURIComponent(__privateGet(this, _selfUserId)));
            } catch {
              continue;
            }
            const messages = parseExpressResponseFrames(body2);
            if (messages.length === 0) {
              continue;
            }
            __privateMethod(this, _debugLog, debugLog_fn).call(this, `pullOnce got ${messages.length} offline frame(s) from ${node.host}:${node.port}`);
            let lastTimestamp = 0;
            let requestCount = 0;
            let messageCount = 0;
            for (const encrypted of messages) {
              const plain = decrypt(node.sharedKey, encrypted);
              if (!plain) {
                continue;
              }
              const msg = decodePullMessage(plain);
              if (!msg) {
                continue;
              }
              lastTimestamp = Math.max(lastTimestamp, msg.timestamp);
              if (msg.type === "R") {
                if (!msg.address || msg.address !== __privateGet(this, _selfAddress)) {
                  __privateMethod(this, _debugLog, debugLog_fn).call(this, `drop offline request with unmatched address from ${msg.from}`);
                  continue;
                }
                __privateGet(this, _callbacks).onOfflineFriendRequest(msg.from, msg.payload, msg.timestamp);
                requestCount += 1;
                __privateMethod(this, _debugLog, debugLog_fn).call(this, `offline friend request from ${msg.from} ts=${msg.timestamp}`);
              } else if (msg.type === "M") {
                try {
                  const friendPk = base58ToBytes(msg.from);
                  if (friendPk.length !== 32) {
                    continue;
                  }
                  const friendSharedKey = import_tweetnacl9.default.box.before(friendPk, __privateGet(this, _selfKeyPair).secretKey);
                  const packet = decrypt(friendSharedKey, msg.payload);
                  if (!packet) {
                    continue;
                  }
                  __privateGet(this, _callbacks).onOfflineFriendMessage(msg.from, packet, msg.timestamp);
                  messageCount += 1;
                  __privateMethod(this, _debugLog, debugLog_fn).call(this, `offline message from ${msg.from} ts=${msg.timestamp}`);
                } catch {
                }
              }
            }
            if (lastTimestamp > 0) {
              __privateMethod(this, _debugLog, debugLog_fn).call(this, `pull processed from ${node.host}: requests=${requestCount} messages=${messageCount}; ack until ts=${lastTimestamp}`);
              await __privateMethod(this, _deleteUntilOn, deleteUntilOn_fn).call(this, node, lastTimestamp).catch(() => {
              });
            }
          }
        }
      };
      _nodes2 = new WeakMap();
      _selfKeyPair = new WeakMap();
      _selfUserId = new WeakMap();
      _selfAddress = new WeakMap();
      _currNode = new WeakMap();
      _callbacks = new WeakMap();
      _debug = new WeakMap();
      _postEncrypted = new WeakSet();
      postEncrypted_fn = async function(to, plainData) {
        await __privateMethod(this, _withAnyNode, withAnyNode_fn).call(this, async (node) => {
          const encrypted = encrypt(node.sharedKey, plainData);
          const path = `${encodeURIComponent(to)}/${encodeURIComponent(__privateGet(this, _selfUserId))}`;
          await __privateMethod(this, _http, http_fn).call(this, node, "POST", path, encrypted);
        });
      };
      _deleteUntilOn = new WeakSet();
      deleteUntilOn_fn = async function(node, timestamp) {
        const tsBytes = new TextEncoder().encode(String(timestamp));
        const encrypted = encrypt(node.sharedKey, tsBytes);
        const encoded = bytesToBase58(encrypted);
        const path = `${encodeURIComponent(__privateGet(this, _selfUserId))}?until=${encodeURIComponent(encoded)}`;
        await __privateMethod(this, _http, http_fn).call(this, node, "DELETE", path);
      };
      _withAnyNode = new WeakSet();
      withAnyNode_fn = async function(fn) {
        if (!__privateGet(this, _nodes2).length) {
          throw new Error("no express nodes configured");
        }
        let lastError;
        for (let i = 0; i < __privateGet(this, _nodes2).length; i++) {
          const idx = (__privateGet(this, _currNode) + i) % __privateGet(this, _nodes2).length;
          const node = __privateGet(this, _nodes2)[idx];
          try {
            const value = await fn(node);
            __privateSet(this, _currNode, idx);
            return value;
          } catch (error) {
            lastError = error;
          }
        }
        throw lastError instanceof Error ? lastError : new Error(String(lastError));
      };
      _http = new WeakSet();
      http_fn = async function(node, method, path, body2) {
        const scheme = node.tls ? "https" : "http";
        const url = `${scheme}://${node.host}:${node.port}/${path}`;
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), HTTP_TIMEOUT_MS);
        try {
          const response = await fetch(url, {
            method,
            body: body2 ? Buffer2.from(body2) : void 0,
            headers: body2 ? { "Content-Type": "application/binary" } : void 0,
            signal: controller.signal
          });
          if (method === "POST" && response.status !== 201 || method === "GET" && response.status !== 200 || method === "DELETE" && response.status !== 205) {
            throw new Error(`express ${method} ${node.host}:${node.port} failed status=${response.status}`);
          }
          const bytes = new Uint8Array(await response.arrayBuffer());
          return bytes;
        } finally {
          clearTimeout(timer);
        }
      };
      _debugLog = new WeakSet();
      debugLog_fn = function(message) {
        if (!__privateGet(this, _debug)) {
          return;
        }
        console.log(`[peer-debug:express] ${message}`);
      };
    }
  });

  // src/shims/node-net.js
  function configuredBridges() {
    let ls = null;
    try {
      ls = localStorage.getItem("beagleBridge");
    } catch {
    }
    const raw = globalThis.__BEAGLE_BRIDGE__ || ls || DEFAULT_BRIDGE;
    const list = Array.isArray(raw) ? raw : String(raw).split(",");
    const out = [];
    for (const item of list) {
      const t = String(item).trim();
      if (!t)
        continue;
      out.push(t.startsWith("ws") ? t : `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}${t}`);
    }
    return out.length ? out : [DEFAULT_BRIDGE];
  }
  function bridgeUrl(host2, port, attempt = 0) {
    const bridges = configuredBridges();
    const base = bridges[(bridgeCursor + attempt) % bridges.length];
    return `${base}?host=${encodeURIComponent(host2)}&port=${encodeURIComponent(port)}`;
  }
  function rotateBridge() {
    const n = configuredBridges().length;
    if (n > 1)
      bridgeCursor = (bridgeCursor + 1) % n;
  }
  function wsStat(k) {
    const s = globalThis.__beagleWsStats ?? (globalThis.__beagleWsStats = {
      opened: 0,
      upstream: 0,
      closed: 0,
      closedBeforeConnect: 0,
      errored: 0
    });
    s[k] = (s[k] || 0) + 1;
  }
  function createConnection(opts) {
    return new WsSocket(opts);
  }
  var DEFAULT_BRIDGE, bridgeCursor, bridgeTickets, _listeners, _ws, _destroyed, _connected, _attempt, _target, _open, open_fn, _emit, emit_fn, WsSocket, connect;
  var init_node_net = __esm({
    "src/shims/node-net.js"() {
      init_buffer_global();
      init_process_global();
      DEFAULT_BRIDGE = "/relay-ws";
      bridgeCursor = 0;
      bridgeTickets = /* @__PURE__ */ new Map();
      globalThis.__BEAGLE_BRIDGE_STATE__ = {
        /** The bridge this client is talking to right now, ws:// or wss://. */
        active() {
          const bs = configuredBridges();
          return bs[bridgeCursor % bs.length] || null;
        },
        /** Its https:// origin — the roster is a normal HTTP endpoint beside
         *  /relay-ws, not something carried over the relay socket. */
        httpBase() {
          const a = this.active();
          if (!a)
            return null;
          try {
            const u = new URL(a);
            return `${u.protocol === "wss:" ? "https:" : "http:"}//${u.host}`;
          } catch {
            return null;
          }
        },
        /** Proof we verified here. Null until a proof has been accepted. */
        ticket() {
          return bridgeTickets.get(this.active()) || null;
        }
      };
      WsSocket = class {
        constructor({ host: host2, port }) {
          /** Open against bridge #attempt; failover happens in onclose. */
          __privateAdd(this, _open);
          __privateAdd(this, _emit);
          __privateAdd(this, _listeners, /* @__PURE__ */ new Map());
          __privateAdd(this, _ws, void 0);
          __privateAdd(this, _destroyed, false);
          __privateAdd(this, _connected, false);
          __privateAdd(this, _attempt, 0);
          __privateAdd(this, _target, null);
          this.writableLength = 0;
          this.destroyed = false;
          __privateSet(this, _target, { host: host2, port });
          __privateMethod(this, _open, open_fn).call(this, 0);
        }
        on(event, fn) {
          if (!__privateGet(this, _listeners).has(event))
            __privateGet(this, _listeners).set(event, /* @__PURE__ */ new Set());
          __privateGet(this, _listeners).get(event).add(fn);
          return this;
        }
        once(event, fn) {
          fn.__once = true;
          return this.on(event, fn);
        }
        removeListener(event, fn) {
          __privateGet(this, _listeners).get(event)?.delete(fn);
          return this;
        }
        off(event, fn) {
          return this.removeListener(event, fn);
        }
        write(bytes) {
          if (__privateGet(this, _destroyed) || __privateGet(this, _ws).readyState !== WebSocket.OPEN)
            return false;
          const buf = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
          __privateGet(this, _ws).send(buf);
          this.writableLength = __privateGet(this, _ws).bufferedAmount;
          return true;
        }
        destroy() {
          if (__privateGet(this, _destroyed))
            return;
          __privateSet(this, _destroyed, true);
          this.destroyed = true;
          try {
            __privateGet(this, _ws).close();
          } catch {
          }
        }
        end() {
          this.destroy();
        }
      };
      _listeners = new WeakMap();
      _ws = new WeakMap();
      _destroyed = new WeakMap();
      _connected = new WeakMap();
      _attempt = new WeakMap();
      _target = new WeakMap();
      _open = new WeakSet();
      open_fn = function(attempt) {
        const { host: host2, port } = __privateGet(this, _target);
        __privateSet(this, _attempt, attempt);
        __privateSet(this, _ws, new WebSocket(bridgeUrl(host2, port, attempt)));
        __privateGet(this, _ws).binaryType = "arraybuffer";
        wsStat("opened");
        __privateGet(this, _ws).onopen = () => {
          const auth = globalThis.__BEAGLE_PEER_AUTH__;
          const pubkey = auth?.pubkey;
          if (!pubkey)
            return;
          const p = auth.profile || {};
          const base = configuredBridges()[(bridgeCursor + attempt) % configuredBridges().length];
          try {
            __privateGet(this, _ws).send(JSON.stringify({
              t: "hello",
              ver: 1,
              tox: pubkey,
              address: auth.address || void 0,
              name: p.name || void 0,
              descr: p.descr || void 0,
              punk: p.punk ?? void 0,
              listed: p.listed === false ? false : void 0,
              ticket: bridgeTickets.get(base) || void 0
            }));
          } catch {
          }
        };
        __privateGet(this, _ws).onmessage = (ev) => {
          if (typeof ev.data === "string") {
            let msg;
            try {
              msg = JSON.parse(ev.data);
            } catch {
              return;
            }
            if (msg.t === "connect") {
              __privateSet(this, _connected, true);
              wsStat("upstream");
              __privateMethod(this, _emit, emit_fn).call(this, "connect");
            } else if (msg.t === "ticket" && msg.ticket) {
              const bs = configuredBridges();
              bridgeTickets.set(bs[(bridgeCursor + __privateGet(this, _attempt)) % bs.length], msg.ticket);
            } else if (msg.t === "challenge") {
              const sig = globalThis.__BEAGLE_PEER_AUTH__?.sign?.(msg.origin, msg.n);
              if (sig) {
                try {
                  __privateGet(this, _ws).send(JSON.stringify({ t: "proof", sig }));
                } catch {
                }
              }
            } else if (msg.t === "error")
              __privateMethod(this, _emit, emit_fn).call(this, "error", new Error(msg.m || "bridge error"));
            return;
          }
          __privateMethod(this, _emit, emit_fn).call(this, "data", Buffer2.from(ev.data));
        };
        __privateGet(this, _ws).onerror = () => {
          wsStat("errored");
        };
        __privateGet(this, _ws).onclose = (ev) => {
          wsStat(__privateGet(this, _connected) ? "closed" : "closedBeforeConnect");
          if (ev && (ev.code === 4401 || ev.code === 4403)) {
            globalThis.__beagleBridgeDenial = {
              code: ev.code,
              reason: ev.reason || "",
              at: Date.now()
            };
          }
          const bridgeCount = configuredBridges().length;
          if (!__privateGet(this, _connected) && !__privateGet(this, _destroyed) && __privateGet(this, _attempt) + 1 < bridgeCount) {
            rotateBridge();
            __privateMethod(this, _open, open_fn).call(this, __privateGet(this, _attempt) + 1);
            return;
          }
          if (!__privateGet(this, _connected) && !__privateGet(this, _destroyed)) {
            __privateMethod(this, _emit, emit_fn).call(this, "error", new Error(
              ev && ev.code === 1013 ? "all bridges at capacity" : "bridge unreachable"
            ));
          }
          this.destroyed = true;
          __privateMethod(this, _emit, emit_fn).call(this, "close");
        };
      };
      _emit = new WeakSet();
      emit_fn = function(event, arg) {
        for (const fn of [...__privateGet(this, _listeners).get(event) ?? []]) {
          if (fn.__once)
            this.removeListener(event, fn);
          fn(arg);
        }
      };
      connect = createConnection;
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/tcp-relay.js
  var tcp_relay_exports = {};
  __export(tcp_relay_exports, {
    TCP_PACKET_CONNECTION_NOTIFICATION: () => TCP_PACKET_CONNECTION_NOTIFICATION,
    TCP_PACKET_DISCONNECT_NOTIFICATION: () => TCP_PACKET_DISCONNECT_NOTIFICATION,
    TCP_PACKET_ONION_REQUEST: () => TCP_PACKET_ONION_REQUEST,
    TCP_PACKET_ONION_RESPONSE: () => TCP_PACKET_ONION_RESPONSE,
    TCP_PACKET_OOB_RECV: () => TCP_PACKET_OOB_RECV,
    TCP_PACKET_OOB_SEND: () => TCP_PACKET_OOB_SEND,
    TCP_PACKET_PING: () => TCP_PACKET_PING,
    TCP_PACKET_PONG: () => TCP_PACKET_PONG,
    TCP_PACKET_ROUTING_REQUEST: () => TCP_PACKET_ROUTING_REQUEST,
    TCP_PACKET_ROUTING_RESPONSE: () => TCP_PACKET_ROUTING_RESPONSE,
    TcpRelayClient: () => TcpRelayClient
  });
  var import_tweetnacl10, KEY_SIZE4, NONCE_SIZE7, MAC_SIZE5, RELAY_SEND_BUFFER_CAP, TCP_HANDSHAKE_PLAIN_SIZE, TCP_CLIENT_HANDSHAKE_SIZE, TCP_SERVER_HANDSHAKE_SIZE, TCP_PACKET_ROUTING_REQUEST, TCP_PACKET_ROUTING_RESPONSE, TCP_PACKET_CONNECTION_NOTIFICATION, TCP_PACKET_DISCONNECT_NOTIFICATION, TCP_PACKET_PING, TCP_PACKET_PONG, TCP_PACKET_OOB_SEND, TCP_PACKET_OOB_RECV, TCP_PACKET_ONION_REQUEST, TCP_PACKET_ONION_RESPONSE, MAX_PACKET_SIZE, CARRIER_TCP_MAGIC, _opts, _socket, _state, _debug2, _tempKeyPair, _sentNonce, _recvNonce, _sessionKey, _rxBuf, _cidByFriend, _friendByCid, _routesRequested, _buildHandshake, buildHandshake_fn, _processHandshakeResponse, processHandshakeResponse_fn, _onData2, onData_fn2, _decryptFrame, decryptFrame_fn, _sendFrame, sendFrame_fn, _dispatch, dispatch_fn, _close, close_fn, _log, log_fn, TcpRelayClient;
  var init_tcp_relay = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/tcp-relay.js"() {
      init_buffer_global();
      init_process_global();
      import_tweetnacl10 = __toESM(require_nacl_fast());
      init_node_net();
      init_node_events();
      init_bytes();
      init_net_crypto();
      KEY_SIZE4 = 32;
      NONCE_SIZE7 = 24;
      MAC_SIZE5 = 16;
      RELAY_SEND_BUFFER_CAP = 64 * 1024;
      TCP_HANDSHAKE_PLAIN_SIZE = KEY_SIZE4 + NONCE_SIZE7;
      TCP_CLIENT_HANDSHAKE_SIZE = KEY_SIZE4 + NONCE_SIZE7 + TCP_HANDSHAKE_PLAIN_SIZE + MAC_SIZE5;
      TCP_SERVER_HANDSHAKE_SIZE = NONCE_SIZE7 + TCP_HANDSHAKE_PLAIN_SIZE + MAC_SIZE5;
      TCP_PACKET_ROUTING_REQUEST = 0;
      TCP_PACKET_ROUTING_RESPONSE = 1;
      TCP_PACKET_CONNECTION_NOTIFICATION = 2;
      TCP_PACKET_DISCONNECT_NOTIFICATION = 3;
      TCP_PACKET_PING = 4;
      TCP_PACKET_PONG = 5;
      TCP_PACKET_OOB_SEND = 6;
      TCP_PACKET_OOB_RECV = 7;
      TCP_PACKET_ONION_REQUEST = 8;
      TCP_PACKET_ONION_RESPONSE = 9;
      MAX_PACKET_SIZE = 2048;
      CARRIER_TCP_MAGIC = Uint8Array.of(105, 118, 101, 103);
      TcpRelayClient = class extends EventEmitter {
        // hex(friend pubkey)
        constructor(opts) {
          super();
          /**
           * Construct the 128-byte client handshake (toxcore TCP_client.c::generate_handshake).
           * Layout:
           *   [self_dht_pubkey (32)] [nonce (24)] [box(plain) (72)]
           * where plain = [temp_pubkey (32)] [sent_nonce (24)] encrypted with
           * shared(serverPublicKey, selfSecretKey) using the random nonce.
           */
          __privateAdd(this, _buildHandshake);
          /**
           * Decrypt the 96-byte server handshake response (toxcore TCP_client.c::handle_handshake).
           * Layout:
           *   [nonce (24)] [box(plain) (72)]
           * plain = [server_temp_pubkey (32)] [recv_nonce (24)]
           * Sets #recvNonce and derives the session key for the encrypted stream.
           */
          __privateAdd(this, _processHandshakeResponse);
          /**
           * Frame parser for everything after the handshake. Each frame is
           *   [4-byte 'iveg' magic][2-byte BE length][secretbox-encrypted body]
           * Bodies may straddle TCP read chunks — buffer until a complete frame
           * is available, then dispatch.
           */
          __privateAdd(this, _onData2);
          /** Decrypt one frame body using sessionKey + #recvNonce, then increment nonce. */
          __privateAdd(this, _decryptFrame);
          /** Encrypt a payload and write it as one framed packet. */
          __privateAdd(this, _sendFrame);
          /**
           * Dispatch a decrypted packet by leading byte. The toxcore wire format
           * uses the first byte as the packet type; values 0-9 are control
           * packets (see TCP_PACKET_* constants), and values 16+ are data
           * forwarded between routed peers — the byte itself is the connection_id.
           */
          __privateAdd(this, _dispatch);
          __privateAdd(this, _close);
          __privateAdd(this, _log);
          __privateAdd(this, _opts, void 0);
          __privateAdd(this, _socket, void 0);
          __privateAdd(this, _state, "disconnected");
          __privateAdd(this, _debug2, process.env.DECENT_DEBUG === "1");
          // Crypto state derived during handshake.
          __privateAdd(this, _tempKeyPair, void 0);
          __privateAdd(this, _sentNonce, void 0);
          // TX nonce — increments per outbound encrypted frame
          __privateAdd(this, _recvNonce, void 0);
          // RX nonce — increments per inbound encrypted frame
          __privateAdd(this, _sessionKey, void 0);
          // box.before(server_temp_pk, our_temp_sk), used as secretbox key
          // RX buffer for the framed encrypted stream.
          __privateAdd(this, _rxBuf, Buffer2.alloc(0));
          // Routing state — the relay assigns one connection_id per friend we
          // requested routing for, in [16, 255]. Map both ways so we can:
          //   - resolve inbound DATA(connection_id) to friend pubkey
          //   - resolve outbound sendToFriend(pubkey) to a connection_id
          __privateAdd(this, _cidByFriend, /* @__PURE__ */ new Map());
          // hex(friend pubkey) -> cid
          __privateAdd(this, _friendByCid, /* @__PURE__ */ new Map());
          // cid -> raw friend pubkey
          // Friends whose routing we've requested but the relay hasn't yet
          // sent CONNECTION_NOTIFICATION for. We dedupe re-requests via this set.
          __privateAdd(this, _routesRequested, /* @__PURE__ */ new Set());
          if (opts.serverPublicKey.length !== KEY_SIZE4) {
            throw new Error(`relay server public key must be ${KEY_SIZE4} bytes`);
          }
          __privateSet(this, _opts, opts);
        }
        state() {
          return __privateGet(this, _state);
        }
        /**
         * Open the TCP connection and perform the handshake. Resolves once the
         * relay is in "connected" state (handshake response decrypted, session
         * keys derived). Rejects on any failure during connect or handshake.
         */
        async connect(timeoutMs = 1e4) {
          if (__privateGet(this, _state) !== "disconnected" && __privateGet(this, _state) !== "closed") {
            throw new Error(`relay already ${__privateGet(this, _state)}`);
          }
          __privateSet(this, _state, "connecting");
          __privateMethod(this, _log, log_fn).call(this, `connecting to ${__privateGet(this, _opts).host}:${__privateGet(this, _opts).port}`);
          return new Promise((resolve2, reject) => {
            const sock = connect({ host: __privateGet(this, _opts).host, port: __privateGet(this, _opts).port });
            __privateSet(this, _socket, sock);
            let settled = false;
            const fail = (reason) => {
              if (settled)
                return;
              settled = true;
              __privateMethod(this, _close, close_fn).call(this, reason);
              reject(new Error(reason));
            };
            const ok = () => {
              if (settled)
                return;
              settled = true;
              resolve2();
            };
            const connectTimer = setTimeout(() => fail(`connect timeout after ${timeoutMs}ms`), timeoutMs);
            sock.once("error", (err) => {
              clearTimeout(connectTimer);
              fail(`socket error: ${err.message}`);
            });
            sock.once("close", () => {
              clearTimeout(connectTimer);
              if (!settled)
                fail("socket closed before handshake completed");
              else
                __privateMethod(this, _close, close_fn).call(this, "socket closed");
            });
            sock.once("connect", () => {
              clearTimeout(connectTimer);
              try {
                const handshake = __privateMethod(this, _buildHandshake, buildHandshake_fn).call(this);
                sock.write(handshake);
                __privateSet(this, _state, "handshake-sent");
                __privateMethod(this, _log, log_fn).call(this, `handshake sent (${handshake.length} bytes), waiting for server response`);
              } catch (err) {
                fail(`handshake build failed: ${err.message}`);
                return;
              }
              let handshakeBuf = Buffer2.alloc(0);
              const onHandshakeData = (chunk) => {
                handshakeBuf = Buffer2.concat([handshakeBuf, chunk]);
                if (handshakeBuf.length < TCP_SERVER_HANDSHAKE_SIZE) {
                  return;
                }
                const hs = handshakeBuf.subarray(0, TCP_SERVER_HANDSHAKE_SIZE);
                const remainder = handshakeBuf.subarray(TCP_SERVER_HANDSHAKE_SIZE);
                sock.removeListener("data", onHandshakeData);
                try {
                  __privateMethod(this, _processHandshakeResponse, processHandshakeResponse_fn).call(this, hs);
                } catch (err) {
                  fail(`handshake response decrypt failed: ${err.message}`);
                  return;
                }
                __privateSet(this, _state, "connected");
                __privateMethod(this, _log, log_fn).call(this, `handshake complete; session ready`);
                sock.on("data", (next) => __privateMethod(this, _onData2, onData_fn2).call(this, next));
                if (remainder.length > 0) {
                  __privateMethod(this, _onData2, onData_fn2).call(this, remainder);
                }
                this.emit("open");
                ok();
              };
              sock.on("data", onHandshakeData);
            });
          });
        }
        /**
         * Send ROUTING_REQUEST so the relay starts watching for `friendPublicKey`.
         * Idempotent — calling twice with the same key is a no-op (the relay
         * would otherwise allocate a duplicate cid). Use `forgetRoute` to
         * forcibly re-request.
         */
        requestRoute(friendPublicKey) {
          if (friendPublicKey.length !== KEY_SIZE4)
            return false;
          const friendHex = Buffer2.from(friendPublicKey).toString("hex");
          if (__privateGet(this, _routesRequested).has(friendHex) || __privateGet(this, _cidByFriend).has(friendHex)) {
            return true;
          }
          __privateGet(this, _routesRequested).add(friendHex);
          return __privateMethod(this, _sendFrame, sendFrame_fn).call(this, concatBytes([Uint8Array.of(TCP_PACKET_ROUTING_REQUEST), friendPublicKey]));
        }
        /** Returns true if we've received a CONNECTION_NOTIFICATION for this friend. */
        hasFriendOnline(friendPublicKey) {
          if (friendPublicKey.length !== KEY_SIZE4)
            return false;
          return __privateGet(this, _cidByFriend).has(Buffer2.from(friendPublicKey).toString("hex"));
        }
        /** Returns true if we've sent a ROUTING_REQUEST for this friend (regardless of online state). */
        hasRequestedRoute(friendPublicKey) {
          if (friendPublicKey.length !== KEY_SIZE4)
            return false;
          const friendHex = Buffer2.from(friendPublicKey).toString("hex");
          return __privateGet(this, _routesRequested).has(friendHex) || __privateGet(this, _cidByFriend).has(friendHex);
        }
        /**
         * Send a DATA payload to `friendPublicKey` over this relay. Returns
         * false if the friend hasn't been routed (no ROUTING_RESPONSE yet) or
         * if the relay says they're offline. Caller should treat false as
         * "try another transport".
         */
        sendToFriend(friendPublicKey, payload, droppable = false) {
          if (friendPublicKey.length !== KEY_SIZE4)
            return false;
          const cid = __privateGet(this, _cidByFriend).get(Buffer2.from(friendPublicKey).toString("hex"));
          if (cid === void 0)
            return false;
          return this.sendData(cid, payload, droppable);
        }
        /** Send a PING; relay echoes it as PONG. ping_id is opaque 8 bytes. */
        sendPing() {
          const pingId = randomBytes2(8);
          return __privateMethod(this, _sendFrame, sendFrame_fn).call(this, concatBytes([Uint8Array.of(TCP_PACKET_PING), pingId]));
        }
        /**
         * Send an onion request THROUGH this relay (toxcore TCP_client.c::
         * send_onion_request). `packet` is a create_onion_packet_tcp payload
         * (createOnionRequest0Tcp) — the relay acts as onion node A, forwards it to
         * node B over UDP, and routes the onion response back to us over this TCP
         * connection as TCP_PACKET_ONION_RESPONSE (surfaced via the "onionResponse"
         * event). This is the NAT-resilient announce / friend-lookup path.
         */
        sendOnionRequest(packet) {
          if (packet.length === 0)
            return false;
          return __privateMethod(this, _sendFrame, sendFrame_fn).call(this, concatBytes([Uint8Array.of(TCP_PACKET_ONION_REQUEST), packet]));
        }
        /** Send DATA payload to the friend at `connectionId`. */
        sendData(connectionId, payload, droppable = false) {
          if (connectionId < 16 || connectionId > 255)
            return false;
          if (payload.length === 0)
            return false;
          return __privateMethod(this, _sendFrame, sendFrame_fn).call(this, concatBytes([Uint8Array.of(connectionId), payload]), droppable);
        }
        /** Send OOB_SEND (used for delivering friend requests via TCP relay). */
        sendOob(receiverPublicKey, payload) {
          if (receiverPublicKey.length !== KEY_SIZE4)
            return false;
          return __privateMethod(this, _sendFrame, sendFrame_fn).call(this, concatBytes([Uint8Array.of(TCP_PACKET_OOB_SEND), receiverPublicKey, payload]));
        }
        close(reason = "explicit close") {
          __privateMethod(this, _close, close_fn).call(this, reason);
        }
        // Strongly-typed event helpers so callers get autocompletion.
        on(event, listener) {
          return super.on(event, listener);
        }
        once(event, listener) {
          return super.once(event, listener);
        }
        off(event, listener) {
          return super.off(event, listener);
        }
      };
      _opts = new WeakMap();
      _socket = new WeakMap();
      _state = new WeakMap();
      _debug2 = new WeakMap();
      _tempKeyPair = new WeakMap();
      _sentNonce = new WeakMap();
      _recvNonce = new WeakMap();
      _sessionKey = new WeakMap();
      _rxBuf = new WeakMap();
      _cidByFriend = new WeakMap();
      _friendByCid = new WeakMap();
      _routesRequested = new WeakMap();
      _buildHandshake = new WeakSet();
      buildHandshake_fn = function() {
        __privateSet(this, _tempKeyPair, (() => {
          const kp = import_tweetnacl10.default.box.keyPair();
          return { publicKey: kp.publicKey, secretKey: kp.secretKey };
        })());
        __privateSet(this, _sentNonce, randomBytes2(NONCE_SIZE7));
        const plain = concatBytes([__privateGet(this, _tempKeyPair).publicKey, __privateGet(this, _sentNonce)]);
        const handshakeNonce = randomBytes2(NONCE_SIZE7);
        const sharedKey = import_tweetnacl10.default.box.before(__privateGet(this, _opts).serverPublicKey, __privateGet(this, _opts).selfKeyPair.secretKey);
        const encrypted = import_tweetnacl10.default.box.after(plain, handshakeNonce, sharedKey);
        return concatBytes([__privateGet(this, _opts).selfKeyPair.publicKey, handshakeNonce, encrypted]);
      };
      _processHandshakeResponse = new WeakSet();
      processHandshakeResponse_fn = function(hs) {
        if (hs.length !== TCP_SERVER_HANDSHAKE_SIZE) {
          throw new Error(`handshake response must be ${TCP_SERVER_HANDSHAKE_SIZE} bytes`);
        }
        const nonce = hs.subarray(0, NONCE_SIZE7);
        const cipher = hs.subarray(NONCE_SIZE7);
        const sharedKey = import_tweetnacl10.default.box.before(__privateGet(this, _opts).serverPublicKey, __privateGet(this, _opts).selfKeyPair.secretKey);
        const plain = import_tweetnacl10.default.box.open.after(cipher, nonce, sharedKey);
        if (!plain || plain.length !== TCP_HANDSHAKE_PLAIN_SIZE) {
          throw new Error("handshake response decrypt failed");
        }
        const serverTempPub = plain.subarray(0, KEY_SIZE4);
        const recvNonce = plain.subarray(KEY_SIZE4, KEY_SIZE4 + NONCE_SIZE7);
        if (!__privateGet(this, _tempKeyPair)) {
          throw new Error("no temp keypair set");
        }
        __privateSet(this, _sessionKey, import_tweetnacl10.default.box.before(serverTempPub, __privateGet(this, _tempKeyPair).secretKey));
        __privateSet(this, _recvNonce, new Uint8Array(recvNonce));
        __privateGet(this, _tempKeyPair).secretKey.fill(0);
      };
      _onData2 = new WeakSet();
      onData_fn2 = function(chunk) {
        __privateSet(this, _rxBuf, __privateGet(this, _rxBuf).length === 0 ? chunk : Buffer2.concat([__privateGet(this, _rxBuf), chunk]));
        while (__privateGet(this, _rxBuf).length >= 4 + 2) {
          if (__privateGet(this, _rxBuf)[0] !== CARRIER_TCP_MAGIC[0] || __privateGet(this, _rxBuf)[1] !== CARRIER_TCP_MAGIC[1] || __privateGet(this, _rxBuf)[2] !== CARRIER_TCP_MAGIC[2] || __privateGet(this, _rxBuf)[3] !== CARRIER_TCP_MAGIC[3]) {
            __privateMethod(this, _close, close_fn).call(this, "missing/invalid iveg magic on TCP frame");
            return;
          }
          const frameLen = __privateGet(this, _rxBuf).readUInt16BE(4);
          if (frameLen === 0 || frameLen > MAX_PACKET_SIZE) {
            __privateMethod(this, _close, close_fn).call(this, `invalid frame length ${frameLen}`);
            return;
          }
          if (__privateGet(this, _rxBuf).length < 4 + 2 + frameLen) {
            return;
          }
          const cipher = __privateGet(this, _rxBuf).subarray(4 + 2, 4 + 2 + frameLen);
          __privateSet(this, _rxBuf, __privateGet(this, _rxBuf).subarray(4 + 2 + frameLen));
          const plain = __privateMethod(this, _decryptFrame, decryptFrame_fn).call(this, cipher);
          if (!plain) {
            __privateMethod(this, _close, close_fn).call(this, "frame decrypt failed");
            return;
          }
          __privateMethod(this, _dispatch, dispatch_fn).call(this, plain);
        }
      };
      _decryptFrame = new WeakSet();
      decryptFrame_fn = function(cipher) {
        if (!__privateGet(this, _sessionKey) || !__privateGet(this, _recvNonce))
          return void 0;
        const opened = import_tweetnacl10.default.secretbox.open(cipher, __privateGet(this, _recvNonce), __privateGet(this, _sessionKey));
        if (!opened)
          return void 0;
        incrementNonce(__privateGet(this, _recvNonce));
        return opened;
      };
      _sendFrame = new WeakSet();
      sendFrame_fn = function(payload, droppable = false) {
        if (__privateGet(this, _state) !== "connected" || !__privateGet(this, _sessionKey) || !__privateGet(this, _sentNonce) || !__privateGet(this, _socket)) {
          return false;
        }
        if (payload.length === 0 || payload.length > MAX_PACKET_SIZE - MAC_SIZE5) {
          return false;
        }
        if (droppable && __privateGet(this, _socket).writableLength > RELAY_SEND_BUFFER_CAP) {
          return false;
        }
        const cipher = import_tweetnacl10.default.secretbox(payload, __privateGet(this, _sentNonce), __privateGet(this, _sessionKey));
        incrementNonce(__privateGet(this, _sentNonce));
        const frame = Buffer2.alloc(4 + 2 + cipher.length);
        frame.set(CARRIER_TCP_MAGIC, 0);
        frame.writeUInt16BE(cipher.length, 4);
        frame.set(cipher, 4 + 2);
        return __privateGet(this, _socket).write(frame);
      };
      _dispatch = new WeakSet();
      dispatch_fn = function(plain) {
        if (plain.length === 0)
          return;
        const type2 = plain[0];
        const body2 = plain.subarray(1);
        switch (type2) {
          case TCP_PACKET_ROUTING_RESPONSE: {
            if (body2.length < 1 + KEY_SIZE4)
              return;
            const connectionId = body2[0];
            const friendKey = body2.subarray(1, 1 + KEY_SIZE4);
            if (connectionId !== 0) {
              const friendHex = Buffer2.from(friendKey).toString("hex");
              __privateGet(this, _cidByFriend).set(friendHex, connectionId);
              __privateGet(this, _friendByCid).set(connectionId, new Uint8Array(friendKey));
            }
            this.emit("routing", connectionId, friendKey);
            return;
          }
          case TCP_PACKET_CONNECTION_NOTIFICATION: {
            if (body2.length < 1)
              return;
            const cid = body2[0];
            const friendKey = __privateGet(this, _friendByCid).get(cid);
            if (friendKey) {
              this.emit("friendOnline", friendKey);
            }
            return;
          }
          case TCP_PACKET_DISCONNECT_NOTIFICATION: {
            if (body2.length < 1)
              return;
            const cid = body2[0];
            const friendKey = __privateGet(this, _friendByCid).get(cid);
            if (friendKey) {
              this.emit("friendOffline", friendKey);
            }
            return;
          }
          case TCP_PACKET_PING: {
            if (body2.length < 8)
              return;
            const pingId = body2.subarray(0, 8);
            __privateMethod(this, _sendFrame, sendFrame_fn).call(this, concatBytes([Uint8Array.of(TCP_PACKET_PONG), pingId]));
            return;
          }
          case TCP_PACKET_PONG: {
            if (body2.length < 8)
              return;
            let v = 0n;
            for (let i = 0; i < 8; i++)
              v = v << 8n | BigInt(body2[i]);
            this.emit("pong", v);
            return;
          }
          case TCP_PACKET_OOB_RECV: {
            if (body2.length < KEY_SIZE4)
              return;
            const sender = body2.subarray(0, KEY_SIZE4);
            const payload = body2.subarray(KEY_SIZE4);
            this.emit("oob", sender, payload);
            return;
          }
          case TCP_PACKET_ONION_RESPONSE: {
            if (body2.length === 0)
              return;
            this.emit("onionResponse", new Uint8Array(body2));
            return;
          }
          default: {
            if (type2 >= 16) {
              const friendKey = __privateGet(this, _friendByCid).get(type2);
              if (friendKey) {
                this.emit("peerData", friendKey, body2);
              }
              return;
            }
          }
        }
      };
      _close = new WeakSet();
      close_fn = function(reason) {
        if (__privateGet(this, _state) === "closed")
          return;
        __privateSet(this, _state, "closed");
        __privateMethod(this, _log, log_fn).call(this, `closing: ${reason}`);
        if (__privateGet(this, _socket)) {
          try {
            __privateGet(this, _socket).destroy();
          } catch {
          }
          __privateSet(this, _socket, void 0);
        }
        if (__privateGet(this, _sentNonce))
          __privateGet(this, _sentNonce).fill(0);
        if (__privateGet(this, _sessionKey))
          __privateGet(this, _sessionKey).fill(0);
        __privateSet(this, _sentNonce, void 0);
        __privateSet(this, _recvNonce, void 0);
        __privateSet(this, _sessionKey, void 0);
        __privateSet(this, _tempKeyPair, void 0);
        this.emit("close", reason);
      };
      _log = new WeakSet();
      log_fn = function(message) {
        if (!__privateGet(this, _debug2))
          return;
        const label = __privateGet(this, _opts).label ? `:${__privateGet(this, _opts).label}` : "";
        console.log(`[peer-debug:tcp-relay${label}] ${__privateGet(this, _opts).host}:${__privateGet(this, _opts).port} ${message}`);
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/tcp-relay-pool.js
  var ONION_RELAY_FANOUT, KEY_SIZE5, MAX_RELAY_CONNECTIONS, RECONNECT_BASE_MS, RECONNECT_MAX_MS, _opts2, _relays, _stopped, _wantedFriends, _onlineRelaysByFriend, _debug3, _openOne, openOne_fn, _scheduleReconnect, scheduleReconnect_fn, _emitStatus, emitStatus_fn, _log2, log_fn2, TcpRelayPool;
  var init_tcp_relay_pool = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/tcp-relay-pool.js"() {
      init_buffer_global();
      init_process_global();
      init_node_events();
      init_base58();
      init_tcp_relay();
      ONION_RELAY_FANOUT = (() => {
        const raw = Number(process.env.DECENT_ONION_RELAY_FANOUT);
        return Number.isInteger(raw) && raw >= 1 && raw <= 8 ? raw : 2;
      })();
      KEY_SIZE5 = 32;
      MAX_RELAY_CONNECTIONS = 8;
      RECONNECT_BASE_MS = 5e3;
      RECONNECT_MAX_MS = 12e4;
      TcpRelayPool = class extends EventEmitter {
        constructor(opts) {
          super();
          __privateAdd(this, _openOne);
          __privateAdd(this, _scheduleReconnect);
          __privateAdd(this, _emitStatus);
          __privateAdd(this, _log2);
          __privateAdd(this, _opts2, void 0);
          __privateAdd(this, _relays, []);
          __privateAdd(this, _stopped, false);
          // Friends we want routed on every connected relay. Re-asserted on
          // reconnect.
          __privateAdd(this, _wantedFriends, /* @__PURE__ */ new Map());
          // hex -> raw pubkey
          // Friend -> set of relay-indices currently reporting the friend online.
          // We emit `friendOnline` on first transition to size 1, `friendOffline`
          // on transition back to 0.
          __privateAdd(this, _onlineRelaysByFriend, /* @__PURE__ */ new Map());
          __privateAdd(this, _debug3, process.env.DECENT_DEBUG === "1");
          __privateSet(this, _opts2, opts);
        }
        /**
         * Initialize the pool. Selects up to `maxConnections` relays from the
         * supplied list (picks them in order; the operator can prioritize by
         * sorting). Returns the count of initial connections successfully
         * opened.
         */
        async start() {
          const max = Math.min(__privateGet(this, _opts2).maxConnections ?? MAX_RELAY_CONNECTIONS, __privateGet(this, _opts2).relays.length);
          for (let i = 0; i < max; i++) {
            const node = __privateGet(this, _opts2).relays[i];
            if (!node.pk)
              continue;
            let serverPk;
            try {
              serverPk = base58ToBytes(node.pk);
            } catch {
              continue;
            }
            if (serverPk.length !== KEY_SIZE5)
              continue;
            __privateGet(this, _relays).push({ node, serverPublicKey: serverPk, reconnectAttempt: 0 });
          }
          const results = await Promise.allSettled(__privateGet(this, _relays).map((_, idx) => __privateMethod(this, _openOne, openOne_fn).call(this, idx)));
          const opened = results.filter((r) => r.status === "fulfilled").length;
          __privateMethod(this, _emitStatus, emitStatus_fn).call(this);
          return opened;
        }
        /** Tear down all relay connections. */
        async stop() {
          __privateSet(this, _stopped, true);
          for (const r of __privateGet(this, _relays)) {
            if (r.reconnectTimer)
              clearTimeout(r.reconnectTimer);
            r.reconnectTimer = void 0;
            try {
              r.client?.close("pool stop");
            } catch {
            }
            r.client = void 0;
          }
          __privateSet(this, _relays, []);
          __privateGet(this, _wantedFriends).clear();
          __privateGet(this, _onlineRelaysByFriend).clear();
        }
        /**
         * Dynamically add a TCP relay to the pool — used when a friend's
         * DHT-PK extras advertise a relay address we weren't already on.
         * Without this, two peers on disjoint relay sets can never establish
         * a TCP path even if both relays are reachable. Idempotent: skips if
         * the host:port pair is already in the pool.
         *
         * Returns the index of the relay (existing or newly added).
         */
        addRelay(node) {
          if (__privateGet(this, _stopped))
            return -1;
          if (!node.pk)
            return -1;
          let serverPk;
          try {
            serverPk = base58ToBytes(node.pk);
          } catch {
            return -1;
          }
          if (serverPk.length !== KEY_SIZE5)
            return -1;
          for (let i = 0; i < __privateGet(this, _relays).length; i++) {
            const r = __privateGet(this, _relays)[i];
            if (r.node.host === node.host && r.node.port === node.port) {
              return i;
            }
          }
          const idx = __privateGet(this, _relays).length;
          __privateGet(this, _relays).push({ node, serverPublicKey: serverPk, reconnectAttempt: 0 });
          __privateMethod(this, _log2, log_fn2).call(this, `addRelay ${node.host}:${node.port} (idx=${idx})`);
          void __privateMethod(this, _openOne, openOne_fn).call(this, idx).catch(() => {
          });
          return idx;
        }
        /**
         * Ask every connected relay to route packets for this friend. Idempotent;
         * subsequent calls for an already-requested key are no-ops on each
         * underlying client.
         */
        requestRoute(friendPublicKey) {
          if (friendPublicKey.length !== KEY_SIZE5)
            return;
          const hex2 = Buffer2.from(friendPublicKey).toString("hex");
          __privateGet(this, _wantedFriends).set(hex2, new Uint8Array(friendPublicKey));
          for (const r of __privateGet(this, _relays)) {
            if (r.client?.state() === "connected") {
              r.client.requestRoute(friendPublicKey);
            }
          }
        }
        /** True if at least one relay reports this friend currently online. */
        isFriendOnline(friendPublicKey) {
          if (friendPublicKey.length !== KEY_SIZE5)
            return false;
          const set = __privateGet(this, _onlineRelaysByFriend).get(Buffer2.from(friendPublicKey).toString("hex"));
          return !!(set && set.size > 0);
        }
        /**
         * OOB_SEND — fire-and-forget delivery to any peer connected to any of
         * our relays, bypassing routing. Used for the initial cookie request
         * / cookie response / crypto handshake exchange before either side
         * has issued ROUTING_REQUEST. Mirrors toxcore's tcp_send_oob_packet
         * which net_crypto.c calls via send_oob_packet for the same purpose.
         * Returns the count of relays the OOB packet was written to.
         */
        sendOobToFriend(friendPublicKey, payload) {
          if (friendPublicKey.length !== KEY_SIZE5)
            return 0;
          let sent = 0;
          for (const r of __privateGet(this, _relays)) {
            if (r.client?.state() !== "connected")
              continue;
            if (r.client.sendOob(friendPublicKey, payload)) {
              sent += 1;
            }
          }
          return sent;
        }
        /**
         * Forward a DATA payload to a friend through any relay where they're
         * online. Returns the count of relays that accepted the write — 0 if
         * the friend isn't online on any TCP relay.
         */
        sendToFriend(friendPublicKey, payload, droppable = false) {
          if (friendPublicKey.length !== KEY_SIZE5)
            return 0;
          for (const r of __privateGet(this, _relays)) {
            if (r.client?.state() !== "connected")
              continue;
            if (!r.client.hasFriendOnline(friendPublicKey))
              continue;
            if (r.client.sendToFriend(friendPublicKey, payload, droppable)) {
              return 1;
            }
          }
          return 0;
        }
        /** Diagnostics. */
        connectedCount() {
          return __privateGet(this, _relays).filter((r) => r.client?.state() === "connected").length;
        }
        /**
         * Send an onion request through up to `fanout` connected relays.
         *
         * Each relay forwards the packet to node B over UDP and routes the onion
         * response back over TCP (surfaced via the pool's "onionResponse" event).
         * Returns how many relays accepted it (0 = none connected).
         *
         * **What fanout buys.** The SAME request is handed to several relays, so it
         * is redundancy, not extra reach: if one relay is unreachable, overloaded, or
         * simply cannot get to node B, another copy still arrives. The peer sees one
         * request either way — duplicates are dropped by the onion layer.
         *
         * **What it costs.** Linear in every resource this path spends: N relays
         * means N times the TCP traffic and N times the work at the relay end. It
         * does NOT multiply local crypto — the onion packet is built once and reused,
         * so the X25519 cost is paid once regardless of fanout.
         *
         * **Choosing a value.** `1` is cheapest and correct on a stable link where
         * the first relay is reliable; a lost request just waits for the next sweep.
         * `2` (the default) is the useful middle: it covers a single dead relay,
         * which is the common failure, at double the traffic on a path that is
         * already small. Above 3 the added redundancy is mostly wasted — you are
         * paying for the case where three independent relays fail at once, which in
         * practice means the network is down, not the relays.
         *
         * Override with `DECENT_ONION_RELAY_FANOUT`.
         */
        sendOnionRequest(packet, fanout = ONION_RELAY_FANOUT) {
          let sent = 0;
          for (const r of __privateGet(this, _relays)) {
            if (sent >= fanout)
              break;
            if (r.client?.state() === "connected" && r.client.sendOnionRequest(packet)) {
              sent += 1;
            }
          }
          return sent;
        }
        /**
         * Snapshot of currently-connected relays for inclusion in DHT-PK
         * announce extras. Mirrors toxcore's `tcp_copy_connected_relays`.
         * Returns up to `max` entries, each with the relay's public key and
         * its host:port — enough for the receiver to add the relay to its
         * own pool via TcpRelayPool.addRelay and start routing through it.
         */
        connectedRelays(max = 4) {
          const out = [];
          for (const r of __privateGet(this, _relays)) {
            if (out.length >= max)
              break;
            if (r.client?.state() === "connected") {
              out.push({
                host: r.node.host,
                port: r.node.port,
                serverPublicKey: r.serverPublicKey
              });
            }
          }
          return out;
        }
        on(event, listener) {
          return super.on(event, listener);
        }
        once(event, listener) {
          return super.once(event, listener);
        }
        off(event, listener) {
          return super.off(event, listener);
        }
      };
      _opts2 = new WeakMap();
      _relays = new WeakMap();
      _stopped = new WeakMap();
      _wantedFriends = new WeakMap();
      _onlineRelaysByFriend = new WeakMap();
      _debug3 = new WeakMap();
      _openOne = new WeakSet();
      openOne_fn = async function(idx) {
        if (__privateGet(this, _stopped))
          return;
        const managed = __privateGet(this, _relays)[idx];
        if (!managed)
          return;
        if (managed.client)
          return;
        const client = new TcpRelayClient({
          host: managed.node.host,
          port: managed.node.port,
          serverPublicKey: managed.serverPublicKey,
          selfKeyPair: __privateGet(this, _opts2).selfKeyPair,
          label: __privateGet(this, _opts2).label ? `${__privateGet(this, _opts2).label}#${idx}` : `relay#${idx}`
        });
        managed.client = client;
        client.on("open", () => {
          managed.reconnectAttempt = 0;
          __privateMethod(this, _log2, log_fn2).call(this, `relay ${idx} ${managed.node.host}:${managed.node.port} open`);
          for (const friend of __privateGet(this, _wantedFriends).values()) {
            client.requestRoute(friend);
          }
          __privateMethod(this, _emitStatus, emitStatus_fn).call(this);
        });
        client.on("close", (reason) => {
          __privateMethod(this, _log2, log_fn2).call(this, `relay ${idx} ${managed.node.host}:${managed.node.port} closed: ${reason}`);
          for (const [friendHex, set] of __privateGet(this, _onlineRelaysByFriend)) {
            if (set.delete(idx) && set.size === 0) {
              const raw = __privateGet(this, _wantedFriends).get(friendHex);
              if (raw)
                this.emit("friendOffline", raw);
              __privateGet(this, _onlineRelaysByFriend).delete(friendHex);
            }
          }
          managed.client = void 0;
          __privateMethod(this, _emitStatus, emitStatus_fn).call(this);
          __privateMethod(this, _scheduleReconnect, scheduleReconnect_fn).call(this, idx);
        });
        client.on("friendOnline", (friendKey) => {
          const hex2 = Buffer2.from(friendKey).toString("hex");
          let set = __privateGet(this, _onlineRelaysByFriend).get(hex2);
          if (!set) {
            set = /* @__PURE__ */ new Set();
            __privateGet(this, _onlineRelaysByFriend).set(hex2, set);
          }
          const wasEmpty = set.size === 0;
          set.add(idx);
          if (wasEmpty) {
            this.emit("friendOnline", new Uint8Array(friendKey));
          }
        });
        client.on("friendOffline", (friendKey) => {
          const hex2 = Buffer2.from(friendKey).toString("hex");
          const set = __privateGet(this, _onlineRelaysByFriend).get(hex2);
          if (!set)
            return;
          if (set.delete(idx) && set.size === 0) {
            __privateGet(this, _onlineRelaysByFriend).delete(hex2);
            this.emit("friendOffline", new Uint8Array(friendKey));
          }
        });
        client.on("peerData", (friendKey, payload) => {
          this.emit("peerData", new Uint8Array(friendKey), payload);
        });
        client.on("oob", (senderKey, payload) => {
          this.emit("oob", new Uint8Array(senderKey), payload);
        });
        client.on("onionResponse", (packet) => {
          this.emit("onionResponse", new Uint8Array(packet));
        });
        try {
          await client.connect(1e4);
        } catch (err) {
          __privateMethod(this, _log2, log_fn2).call(this, `relay ${idx} ${managed.node.host}:${managed.node.port} connect failed: ${err.message}`);
          managed.client = void 0;
          __privateMethod(this, _scheduleReconnect, scheduleReconnect_fn).call(this, idx);
          throw err;
        }
      };
      _scheduleReconnect = new WeakSet();
      scheduleReconnect_fn = function(idx) {
        if (__privateGet(this, _stopped))
          return;
        const managed = __privateGet(this, _relays)[idx];
        if (!managed)
          return;
        if (managed.reconnectTimer)
          return;
        managed.reconnectAttempt = Math.min(managed.reconnectAttempt + 1, 8);
        const delay = Math.min(RECONNECT_MAX_MS, RECONNECT_BASE_MS * Math.pow(1.5, managed.reconnectAttempt - 1));
        managed.reconnectTimer = setTimeout(() => {
          managed.reconnectTimer = void 0;
          void __privateMethod(this, _openOne, openOne_fn).call(this, idx).catch(() => {
          });
        }, delay);
        managed.reconnectTimer.unref?.();
        __privateMethod(this, _log2, log_fn2).call(this, `relay ${idx} ${managed.node.host}:${managed.node.port} reconnect in ${Math.round(delay)}ms (attempt ${managed.reconnectAttempt})`);
      };
      _emitStatus = new WeakSet();
      emitStatus_fn = function() {
        this.emit("status", this.connectedCount(), __privateGet(this, _relays).length);
      };
      _log2 = new WeakSet();
      log_fn2 = function(message) {
        if (!__privateGet(this, _debug3))
          return;
        const label = __privateGet(this, _opts2).label ? `:${__privateGet(this, _opts2).label}` : "";
        console.log(`[peer-debug:tcp-pool${label}] ${message}`);
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/runtime/errors.js
  var LegacyProtocolNotImplementedError;
  var init_errors = __esm({
    "node_modules/@decentnetwork/peer/dist/runtime/errors.js"() {
      init_buffer_global();
      init_process_global();
      LegacyProtocolNotImplementedError = class extends Error {
        constructor(area) {
          super(`${area} is not implemented: legacy Carrier/toxcore wire compatibility is still unresolved`);
          this.name = "LegacyProtocolNotImplementedError";
        }
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/compat/dht.js
  var LegacyDhtClient;
  var init_dht = __esm({
    "node_modules/@decentnetwork/peer/dist/compat/dht.js"() {
      init_buffer_global();
      init_process_global();
      init_errors();
      LegacyDhtClient = class {
        async lookup(pubkey) {
          if (!pubkey) {
            throw new Error("pubkey is required");
          }
          throw new LegacyProtocolNotImplementedError("Legacy DHT lookup");
        }
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/crypto/keypair.js
  async function loadOrCreateKeyPair(path) {
    try {
      const parsed = JSON.parse(await readFile(path, "utf8"));
      if (parsed.format !== "decent-peer-tox-keypair-v1") {
        throw new Error(`unsupported key file format: ${parsed.format}`);
      }
      const publicKey = hexToBytes2(parsed.publicKey);
      const secretKey = hexToBytes2(parsed.secretKey);
      if (publicKey.length !== import_tweetnacl11.default.box.publicKeyLength || secretKey.length !== import_tweetnacl11.default.box.secretKeyLength) {
        throw new Error("invalid key file key length");
      }
      return { publicKey, secretKey };
    } catch (error) {
      const nodeError = error;
      if (nodeError.code && nodeError.code !== "ENOENT") {
        throw error;
      }
    }
    const generated = import_tweetnacl11.default.box.keyPair();
    const keyPair = {
      publicKey: generated.publicKey,
      secretKey: generated.secretKey
    };
    await mkdir(dirname(path), { recursive: true });
    const stored = {
      format: "decent-peer-tox-keypair-v1",
      publicKey: bytesToHex2(keyPair.publicKey),
      secretKey: bytesToHex2(keyPair.secretKey)
    };
    await writeFile(path, `${JSON.stringify(stored, null, 2)}
`);
    return keyPair;
  }
  var import_tweetnacl11;
  var init_keypair = __esm({
    "node_modules/@decentnetwork/peer/dist/crypto/keypair.js"() {
      init_buffer_global();
      init_process_global();
      init_node_stub();
      init_node_stub();
      import_tweetnacl11 = __toESM(require_nacl_fast(), 1);
      init_bytes();
    }
  });

  // src/shims/node-dgram.js
  function createSocket() {
    return new FakeSocket();
  }
  var _l2, FakeSocket, node_dgram_default;
  var init_node_dgram = __esm({
    "src/shims/node-dgram.js"() {
      init_buffer_global();
      init_process_global();
      FakeSocket = class {
        constructor() {
          __privateAdd(this, _l2, /* @__PURE__ */ new Map());
          this.__isFakeUdp = true;
        }
        on(e, fn) {
          if (!__privateGet(this, _l2).has(e))
            __privateGet(this, _l2).set(e, /* @__PURE__ */ new Set());
          __privateGet(this, _l2).get(e).add(fn);
          return this;
        }
        once(e, fn) {
          const w = (...a) => {
            this.off(e, w);
            fn(...a);
          };
          return this.on(e, w);
        }
        off(e, fn) {
          __privateGet(this, _l2).get(e)?.delete(fn);
          return this;
        }
        removeListener(e, fn) {
          return this.off(e, fn);
        }
        removeAllListeners(e) {
          if (e)
            __privateGet(this, _l2).delete(e);
          else
            __privateGet(this, _l2).clear();
          return this;
        }
        emit(e, ...a) {
          const s = __privateGet(this, _l2).get(e);
          if (!s)
            return false;
          for (const fn of [...s])
            fn(...a);
          return true;
        }
        bind(_port, cb) {
          queueMicrotask(() => {
            this.emit("listening");
            if (cb)
              cb();
          });
          return this;
        }
        address() {
          return { address: "0.0.0.0", port: 0, family: "IPv4" };
        }
        // dgram.send has two overloads: send(msg, port, host, cb) and
        // send(msg, offset, length, port, host, cb). The SDK uses the 4-arg form, so
        // key off the LAST argument being the callback rather than a fixed position —
        // getting this wrong means the callback never fires and every send() await
        // hangs forever (which it did). The datagram itself goes nowhere: a browser
        // has no UDP, and the TCP-relay path carries the real traffic.
        send(...args) {
          const cb = args[args.length - 1];
          if (typeof cb === "function")
            queueMicrotask(() => cb(null));
          return true;
        }
        setBroadcast() {
        }
        setTTL() {
        }
        unref() {
          return this;
        }
        ref() {
          return this;
        }
        close(cb) {
          queueMicrotask(() => {
            this.emit("close");
            if (cb)
              cb();
          });
        }
      };
      _l2 = new WeakMap();
      node_dgram_default = { createSocket };
    }
  });

  // node_modules/@decentnetwork/peer/dist/transport/udp.js
  function looksLikeStun(data) {
    if (data.length < 8)
      return false;
    if ((data[0] & 192) !== 0)
      return false;
    return data[4] === STUN_MAGIC_COOKIE_BYTES[0] && data[5] === STUN_MAGIC_COOKIE_BYTES[1] && data[6] === STUN_MAGIC_COOKIE_BYTES[2] && data[7] === STUN_MAGIC_COOKIE_BYTES[3];
  }
  var STUN_MAGIC_COOKIE_BYTES, _socket2, _bound, _stunInterceptors, _turnRoutes, UdpTransport;
  var init_udp = __esm({
    "node_modules/@decentnetwork/peer/dist/transport/udp.js"() {
      init_buffer_global();
      init_process_global();
      init_node_dgram();
      init_node_events();
      STUN_MAGIC_COOKIE_BYTES = Uint8Array.of(33, 18, 164, 66);
      UdpTransport = class extends EventEmitter {
        constructor() {
          super();
          __privateAdd(this, _socket2, void 0);
          __privateAdd(this, _bound, false);
          __privateAdd(this, _stunInterceptors, []);
          __privateAdd(this, _turnRoutes, /* @__PURE__ */ new Map());
          this.setMaxListeners(100);
        }
        get bound() {
          return __privateGet(this, _bound);
        }
        async start(opts = {}) {
          if (__privateGet(this, _socket2)) {
            return;
          }
          const socket = node_dgram_default.createSocket("udp4");
          __privateSet(this, _socket2, socket);
          socket.on("message", (data, remote) => {
            if (__privateGet(this, _stunInterceptors).length > 0 && looksLikeStun(data)) {
              for (const intercept of __privateGet(this, _stunInterceptors)) {
                if (intercept(data, remote))
                  return;
              }
            }
            this.emit("datagram", { data, remote });
          });
          socket.on("error", (error) => this.emit("error", error));
          await new Promise((resolve2, reject) => {
            const cleanup = () => {
              socket.off("listening", onListening);
              socket.off("error", onError);
            };
            const onListening = () => {
              cleanup();
              __privateSet(this, _bound, true);
              try {
                socket.setSendBufferSize(4 * 1024 * 1024);
              } catch {
              }
              try {
                socket.setRecvBufferSize(4 * 1024 * 1024);
              } catch {
              }
              resolve2();
            };
            const onError = (error) => {
              cleanup();
              reject(error);
            };
            socket.once("listening", onListening);
            socket.once("error", onError);
            socket.bind(opts.port ?? 0, opts.host);
          });
        }
        async stop() {
          const socket = __privateGet(this, _socket2);
          if (!socket) {
            return;
          }
          __privateSet(this, _socket2, void 0);
          __privateSet(this, _bound, false);
          await new Promise((resolve2) => socket.close(() => resolve2()));
        }
        /**
         * The OS-assigned local UDP port (after bind). Useful so the peer layer
         * can recognize and skip its own address in friend endpoint candidates
         * (some toxcore peers echo our address back inside DHT-PK extras).
         */
        localPort() {
          try {
            const addr = __privateGet(this, _socket2)?.address();
            if (addr && typeof addr === "object" && "port" in addr) {
              return addr.port;
            }
          } catch {
          }
          return void 0;
        }
        async send(data, host2, port) {
          const socket = __privateGet(this, _socket2);
          if (!socket || !__privateGet(this, _bound)) {
            throw new Error("UDP transport is not started");
          }
          const route = __privateGet(this, _turnRoutes).get(`${host2}:${port}`);
          if (route) {
            route.send(data);
            return;
          }
          await new Promise((resolve2, reject) => {
            socket.send(data, port, host2, (error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve2();
            });
          });
        }
        /** Direct socket send, bypassing TURN routes. ICE/TURN use this so
         *  their own control packets (SEND-INDICATION, binding checks) don't
         *  recurse back through the route table. */
        async sendDirect(data, host2, port) {
          const socket = __privateGet(this, _socket2);
          if (!socket || !__privateGet(this, _bound)) {
            throw new Error("UDP transport is not started");
          }
          await new Promise((resolve2, reject) => {
            socket.send(data, port, host2, (error) => error ? reject(error) : resolve2());
          });
        }
        /** Synchronous fire-and-forget direct send (for hot TURN data path). */
        sendDirectSync(data, host2, port) {
          __privateGet(this, _socket2)?.send(data, port, host2);
        }
        addStunInterceptor(fn) {
          __privateGet(this, _stunInterceptors).push(fn);
        }
        removeStunInterceptor(fn) {
          __privateSet(this, _stunInterceptors, __privateGet(this, _stunInterceptors).filter((f) => f !== fn));
        }
        registerTurnRoute(host2, port, route) {
          __privateGet(this, _turnRoutes).set(`${host2}:${port}`, route);
        }
        unregisterTurnRoute(host2, port) {
          __privateGet(this, _turnRoutes).delete(`${host2}:${port}`);
        }
      };
      _socket2 = new WeakMap();
      _bound = new WeakMap();
      _stunInterceptors = new WeakMap();
      _turnRoutes = new WeakMap();
    }
  });

  // node_modules/@decentnetwork/peer/dist/stun.js
  function u16(n) {
    return Uint8Array.of(n >> 8 & 255, n & 255);
  }
  function u32(n) {
    return Uint8Array.of(n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255);
  }
  function padTo4(n) {
    return 4 - (n & 3) & 3;
  }
  function readU16(b, off) {
    return b[off] << 8 | b[off + 1];
  }
  function readU32(b, off) {
    return (b[off] << 24 >>> 0) + (b[off + 1] << 16 >>> 0) + (b[off + 2] << 8 >>> 0) + b[off + 3];
  }
  function newTransactionId() {
    return Uint8Array.from(randomBytes(12));
  }
  function encodeAttributes(attrs) {
    const parts = [];
    for (const attr of attrs) {
      parts.push(u16(attr.type));
      parts.push(u16(attr.value.length));
      parts.push(attr.value);
      const pad = padTo4(attr.value.length);
      if (pad > 0) {
        parts.push(new Uint8Array(pad));
      }
    }
    return concatBytes(parts);
  }
  function encodeStun(message, opts = {}) {
    let body2 = encodeAttributes(message.attributes);
    if (opts.integrityKey) {
      const reserved = 24;
      const lengthWithIntegrity = body2.length + reserved + (opts.fingerprint ? 8 : 0);
      const headerForHmac = concatBytes([
        u16(message.type),
        u16(body2.length + reserved),
        u32(STUN_MAGIC_COOKIE),
        message.transactionId
      ]);
      const hmacInput = concatBytes([headerForHmac, body2]);
      const hmac = createHmac("sha1", Buffer2.from(opts.integrityKey)).update(hmacInput).digest();
      body2 = concatBytes([
        body2,
        u16(STUN_ATTR_MESSAGE_INTEGRITY),
        u16(20),
        Uint8Array.from(hmac)
      ]);
    }
    if (opts.fingerprint) {
      const lengthWithFingerprint = body2.length + 8;
      const headerForCrc = concatBytes([
        u16(message.type),
        u16(lengthWithFingerprint),
        u32(STUN_MAGIC_COOKIE),
        message.transactionId
      ]);
      const crcInput = concatBytes([headerForCrc, body2]);
      const crc = crc32(crcInput) ^ FINGERPRINT_XOR;
      body2 = concatBytes([
        body2,
        u16(STUN_ATTR_FINGERPRINT),
        u16(4),
        u32(crc >>> 0)
      ]);
    }
    const header = concatBytes([
      u16(message.type),
      u16(body2.length),
      u32(STUN_MAGIC_COOKIE),
      message.transactionId
    ]);
    return concatBytes([header, body2]);
  }
  function decodeStun(data) {
    if (data.length < 20)
      return void 0;
    if ((data[0] & 192) !== 0)
      return void 0;
    const type2 = readU16(data, 0);
    const length = readU16(data, 2);
    const cookie = readU32(data, 4);
    if (cookie !== STUN_MAGIC_COOKIE)
      return void 0;
    if (data.length < 20 + length)
      return void 0;
    const transactionId = data.slice(8, 20);
    const attributes = [];
    let off = 20;
    const end = 20 + length;
    while (off + 4 <= end) {
      const attrType = readU16(data, off);
      const attrLen = readU16(data, off + 2);
      off += 4;
      if (off + attrLen > end)
        return void 0;
      attributes.push({ type: attrType, value: data.slice(off, off + attrLen) });
      off += attrLen + padTo4(attrLen);
    }
    return { type: type2, transactionId, attributes };
  }
  function findAttr(message, type2) {
    for (const a of message.attributes) {
      if (a.type === type2)
        return a.value;
    }
    return void 0;
  }
  function decodeXorMappedAddress(value, transactionId) {
    if (value.length < 4)
      return void 0;
    const family = value[1];
    const xPort = readU16(value, 2);
    const port = xPort ^ STUN_MAGIC_COOKIE >>> 16 & 65535;
    if (family === 1 && value.length >= 8) {
      const xAddr = value.slice(4, 8);
      const cookieBytes = u32(STUN_MAGIC_COOKIE);
      const a = xAddr.map((b, i) => b ^ cookieBytes[i]);
      return { family: 4, address: `${a[0]}.${a[1]}.${a[2]}.${a[3]}`, port };
    }
    if (family === 2 && value.length >= 20) {
      const xAddr = value.slice(4, 20);
      const xorKey = concatBytes([u32(STUN_MAGIC_COOKIE), transactionId]);
      const a = xAddr.map((b, i) => b ^ xorKey[i]);
      const parts = [];
      for (let i = 0; i < 16; i += 2) {
        parts.push((a[i] << 8 | a[i + 1]).toString(16));
      }
      return { family: 6, address: parts.join(":"), port };
    }
    return void 0;
  }
  function encodeXorMappedAddress(addr, transactionId) {
    if (addr.family === 4) {
      const octets = addr.address.split(".").map((s) => parseInt(s, 10));
      if (octets.length !== 4 || octets.some((o) => Number.isNaN(o))) {
        throw new Error(`Invalid IPv4 address: ${addr.address}`);
      }
      const cookieBytes = u32(STUN_MAGIC_COOKIE);
      const xAddr = Uint8Array.from(octets.map((b, i) => b ^ cookieBytes[i]));
      const xPort = addr.port ^ STUN_MAGIC_COOKIE >>> 16 & 65535;
      return concatBytes([Uint8Array.of(0, 1), u16(xPort), xAddr]);
    }
    throw new Error("IPv6 XOR-MAPPED-ADDRESS encode not implemented yet");
  }
  function decodeErrorCode(value) {
    if (value.length < 4)
      return void 0;
    const code = value[2] * 100 + value[3];
    const reason = Buffer2.from(value.slice(4)).toString("utf8");
    return { code, reason };
  }
  function longTermIntegrityKey(username, realm, password) {
    const md5 = createHash("md5");
    md5.update(`${username}:${realm}:${password}`);
    return Uint8Array.from(md5.digest());
  }
  function crc32(data) {
    let c = 4294967295;
    for (let i = 0; i < data.length; i++) {
      c = CRC32_TABLE[(c ^ data[i]) & 255] ^ c >>> 8;
    }
    return (c ^ 4294967295) >>> 0;
  }
  function buildBindingRequest(transactionId) {
    return encodeStun({
      type: STUN_BINDING_REQUEST,
      transactionId: transactionId ?? newTransactionId(),
      attributes: []
    });
  }
  var STUN_MAGIC_COOKIE, STUN_BINDING_REQUEST, STUN_BINDING_SUCCESS, TURN_ALLOCATE_REQUEST, TURN_ALLOCATE_SUCCESS, TURN_ALLOCATE_ERROR, TURN_REFRESH_REQUEST, TURN_REFRESH_SUCCESS, TURN_CREATE_PERMISSION_REQUEST, TURN_CREATE_PERMISSION_SUCCESS, TURN_SEND_INDICATION, TURN_DATA_INDICATION, STUN_ATTR_USERNAME, STUN_ATTR_MESSAGE_INTEGRITY, STUN_ATTR_ERROR_CODE, STUN_ATTR_REALM, STUN_ATTR_NONCE, STUN_ATTR_XOR_MAPPED_ADDRESS, STUN_ATTR_SOFTWARE, STUN_ATTR_FINGERPRINT, STUN_ATTR_LIFETIME, STUN_ATTR_XOR_PEER_ADDRESS, STUN_ATTR_DATA, STUN_ATTR_XOR_RELAYED_ADDRESS, STUN_ATTR_REQUESTED_TRANSPORT, FINGERPRINT_XOR, CRC32_TABLE;
  var init_stun = __esm({
    "node_modules/@decentnetwork/peer/dist/stun.js"() {
      init_buffer_global();
      init_process_global();
      init_node_crypto();
      init_bytes();
      STUN_MAGIC_COOKIE = 554869826;
      STUN_BINDING_REQUEST = 1;
      STUN_BINDING_SUCCESS = 257;
      TURN_ALLOCATE_REQUEST = 3;
      TURN_ALLOCATE_SUCCESS = 259;
      TURN_ALLOCATE_ERROR = 275;
      TURN_REFRESH_REQUEST = 4;
      TURN_REFRESH_SUCCESS = 260;
      TURN_CREATE_PERMISSION_REQUEST = 8;
      TURN_CREATE_PERMISSION_SUCCESS = 264;
      TURN_SEND_INDICATION = 22;
      TURN_DATA_INDICATION = 23;
      STUN_ATTR_USERNAME = 6;
      STUN_ATTR_MESSAGE_INTEGRITY = 8;
      STUN_ATTR_ERROR_CODE = 9;
      STUN_ATTR_REALM = 20;
      STUN_ATTR_NONCE = 21;
      STUN_ATTR_XOR_MAPPED_ADDRESS = 32;
      STUN_ATTR_SOFTWARE = 32802;
      STUN_ATTR_FINGERPRINT = 32808;
      STUN_ATTR_LIFETIME = 13;
      STUN_ATTR_XOR_PEER_ADDRESS = 18;
      STUN_ATTR_DATA = 19;
      STUN_ATTR_XOR_RELAYED_ADDRESS = 22;
      STUN_ATTR_REQUESTED_TRANSPORT = 25;
      FINGERPRINT_XOR = 1398035790;
      CRC32_TABLE = (() => {
        const t = new Uint32Array(256);
        for (let i = 0; i < 256; i++) {
          let c = i;
          for (let j = 0; j < 8; j++) {
            c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
          }
          t[i] = c >>> 0;
        }
        return t;
      })();
    }
  });

  // node_modules/@decentnetwork/peer/dist/turn.js
  function u32Bytes(n) {
    return Uint8Array.of(n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255);
  }
  function readU322(b) {
    return (b[0] << 24 >>> 0) + (b[1] << 16 >>> 0) + (b[2] << 8 >>> 0) + b[3];
  }
  var REQUEST_TIMEOUT_MS, REQUEST_RETRIES, SOFTWARE_NAME, _sock, _realm, _nonce, _integrityKey, _allocation, _pending, _onData3, _refreshTimer, _closed, _serverIp, _onMessage, _authedRequest, authedRequest_fn, _request, request_fn, _parseAllocateSuccess, parseAllocateSuccess_fn, _scheduleRefresh, scheduleRefresh_fn, TurnClient;
  var init_turn = __esm({
    "node_modules/@decentnetwork/peer/dist/turn.js"() {
      init_buffer_global();
      init_process_global();
      init_stun();
      REQUEST_TIMEOUT_MS = 3e3;
      REQUEST_RETRIES = 3;
      SOFTWARE_NAME = "decentnet-peer/0.1";
      TurnClient = class {
        constructor(opts) {
          /**
           * Send an authenticated request, honoring nonce rotation.
           *
           * 438 (Stale Nonce) is NOT a failure — it is the protocol's way of rotating
           * the nonce (RFC 5766 §4.3 / RFC 8489 §9.2): the error response carries the
           * NEW nonce (and possibly a new realm), and the client is expected to adopt
           * it and re-send the same request. coturn rotates every few hours; treating
           * the 438 as fatal tore down a healthy relay on every rotation and left the
           * refresh loop dead until the next #ensureTurnRelay (INBOX 2026-08-05).
           *
           * One retry only: a server that answers the fresh nonce with another 438 is
           * genuinely refusing us, and looping would spin.
           */
          __privateAdd(this, _authedRequest);
          __privateAdd(this, _request);
          __privateAdd(this, _parseAllocateSuccess);
          __privateAdd(this, _scheduleRefresh);
          __publicField(this, "creds");
          __privateAdd(this, _sock, void 0);
          __privateAdd(this, _realm, void 0);
          __privateAdd(this, _nonce, void 0);
          __privateAdd(this, _integrityKey, void 0);
          __privateAdd(this, _allocation, void 0);
          __privateAdd(this, _pending, /* @__PURE__ */ new Map());
          __privateAdd(this, _onData3, void 0);
          __privateAdd(this, _refreshTimer, void 0);
          __privateAdd(this, _closed, false);
          /**
           * The TURN server's resolved IP. We filter inbound datagrams by source
           * so a shared socket doesn't feed us unrelated traffic — but inbound
           * `rinfo.address` is always an IP, while `creds.host` may be a
           * hostname (e.g. "tokyo.fi.chat"). Resolve once and compare against
           * the IP. Until resolved, we fall back to txn-matching only.
           */
          __privateAdd(this, _serverIp, void 0);
          // -- internal helpers -----------------------------------------------------
          __privateAdd(this, _onMessage, (data, rinfo) => {
            if (rinfo.port !== this.creds.port)
              return;
            if (__privateGet(this, _serverIp) && rinfo.address !== __privateGet(this, _serverIp))
              return;
            const msg = decodeStun(data);
            if (!msg)
              return;
            if (msg.type === TURN_DATA_INDICATION) {
              const peerAttr = findAttr(msg, STUN_ATTR_XOR_PEER_ADDRESS);
              const dataAttr = findAttr(msg, STUN_ATTR_DATA);
              if (peerAttr && dataAttr && __privateGet(this, _onData3)) {
                const peer = decodeXorMappedAddress(peerAttr, msg.transactionId);
                if (peer)
                  __privateGet(this, _onData3).call(this, peer, dataAttr);
              }
              return;
            }
            const key2 = Buffer2.from(msg.transactionId).toString("hex");
            const resolve2 = __privateGet(this, _pending).get(key2);
            if (resolve2) {
              __privateGet(this, _pending).delete(key2);
              resolve2(msg);
            }
          });
          __privateSet(this, _sock, opts.sock);
          this.creds = opts.creds;
          __privateSet(this, _realm, opts.creds.realm);
          if (/^\d+\.\d+\.\d+\.\d+$/.test(opts.creds.host)) {
            __privateSet(this, _serverIp, opts.creds.host);
          }
          __privateGet(this, _sock).on("message", __privateGet(this, _onMessage));
        }
        /**
         * Perform the long-term-credential ALLOCATE dance. Returns the
         * server-reflexive (mapped) and relay-allocated addresses, plus the
         * allocation lifetime.
         */
        async allocate() {
          if (!__privateGet(this, _serverIp)) {
            try {
              const { lookup } = await import("dns/promises");
              const { address } = await lookup(this.creds.host, { family: 4 });
              __privateSet(this, _serverIp, address);
            } catch {
            }
          }
          const initialAttrs = [
            { type: STUN_ATTR_REQUESTED_TRANSPORT, value: Uint8Array.of(17, 0, 0, 0) },
            // 17 = UDP
            { type: STUN_ATTR_SOFTWARE, value: Buffer2.from(SOFTWARE_NAME, "utf8") }
          ];
          const first = await __privateMethod(this, _request, request_fn).call(this, TURN_ALLOCATE_REQUEST, initialAttrs);
          if (first.type === TURN_ALLOCATE_SUCCESS) {
            return __privateMethod(this, _parseAllocateSuccess, parseAllocateSuccess_fn).call(this, first);
          }
          if (first.type !== TURN_ALLOCATE_ERROR) {
            throw new Error(`unexpected ALLOCATE response type 0x${first.type.toString(16)}`);
          }
          const realmAttr = findAttr(first, STUN_ATTR_REALM);
          const nonceAttr = findAttr(first, STUN_ATTR_NONCE);
          if (!realmAttr || !nonceAttr) {
            const err = findAttr(first, STUN_ATTR_ERROR_CODE);
            const decoded = err ? decodeErrorCode(err) : void 0;
            throw new Error(`ALLOCATE 401 missing realm/nonce (code=${decoded?.code} reason=${decoded?.reason})`);
          }
          __privateSet(this, _realm, Buffer2.from(realmAttr).toString("utf8"));
          __privateSet(this, _nonce, nonceAttr);
          __privateSet(this, _integrityKey, longTermIntegrityKey(this.creds.username, __privateGet(this, _realm), this.creds.password));
          const authed = await __privateMethod(this, _authedRequest, authedRequest_fn).call(this, TURN_ALLOCATE_REQUEST, TURN_ALLOCATE_SUCCESS, [
            { type: STUN_ATTR_REQUESTED_TRANSPORT, value: Uint8Array.of(17, 0, 0, 0) },
            { type: STUN_ATTR_SOFTWARE, value: Buffer2.from(SOFTWARE_NAME, "utf8") }
          ]);
          if (authed.type !== TURN_ALLOCATE_SUCCESS) {
            const err = findAttr(authed, STUN_ATTR_ERROR_CODE);
            const decoded = err ? decodeErrorCode(err) : void 0;
            throw new Error(`ALLOCATE failed code=${decoded?.code} reason=${decoded?.reason}`);
          }
          const allocation = __privateMethod(this, _parseAllocateSuccess, parseAllocateSuccess_fn).call(this, authed);
          __privateSet(this, _allocation, allocation);
          __privateMethod(this, _scheduleRefresh, scheduleRefresh_fn).call(this, allocation.lifetime);
          return allocation;
        }
        /**
         * Tell the TURN server we want to send to / receive from `peer`.
         * Required before SEND-INDICATION will actually relay.
         */
        async createPermission(peer) {
          if (!__privateGet(this, _integrityKey) || !__privateGet(this, _nonce)) {
            throw new Error("createPermission called before allocate()");
          }
          const resp = await __privateMethod(this, _authedRequest, authedRequest_fn).call(this, TURN_CREATE_PERMISSION_REQUEST, TURN_CREATE_PERMISSION_SUCCESS, [
            { type: STUN_ATTR_XOR_PEER_ADDRESS, value: encodeXorMappedAddress(peer, newTransactionId()) }
          ]);
          if (resp.type !== TURN_CREATE_PERMISSION_SUCCESS) {
            const err = findAttr(resp, STUN_ATTR_ERROR_CODE);
            const decoded = err ? decodeErrorCode(err) : void 0;
            throw new Error(`CREATE-PERMISSION failed code=${decoded?.code} reason=${decoded?.reason}`);
          }
        }
        /**
         * Wrap `data` in a SEND-INDICATION and ship it to the TURN server.
         * Fire-and-forget — TURN indications never get a response.
         */
        sendTo(peer, data) {
          const txn = newTransactionId();
          const pkt = encodeStun({
            type: TURN_SEND_INDICATION,
            transactionId: txn,
            attributes: [
              { type: STUN_ATTR_XOR_PEER_ADDRESS, value: encodeXorMappedAddress(peer, txn) },
              { type: STUN_ATTR_DATA, value: data }
            ]
          });
          __privateGet(this, _sock).send(Buffer2.from(pkt), this.creds.port, this.creds.host);
        }
        onData(cb) {
          __privateSet(this, _onData3, cb);
        }
        async refresh() {
          if (!__privateGet(this, _integrityKey) || !__privateGet(this, _nonce)) {
            throw new Error("refresh called before allocate()");
          }
          const resp = await __privateMethod(this, _authedRequest, authedRequest_fn).call(this, TURN_REFRESH_REQUEST, TURN_REFRESH_SUCCESS, [
            { type: STUN_ATTR_LIFETIME, value: u32Bytes(600) }
          ]);
          if (resp.type !== TURN_REFRESH_SUCCESS) {
            __privateSet(this, _allocation, void 0);
            const err = findAttr(resp, STUN_ATTR_ERROR_CODE);
            const decoded = err ? decodeErrorCode(err) : void 0;
            throw new Error(`REFRESH failed code=${decoded?.code} reason=${decoded?.reason}`);
          }
          const lifetimeAttr = findAttr(resp, STUN_ATTR_LIFETIME);
          const lifetime = lifetimeAttr ? readU322(lifetimeAttr) : 600;
          if (__privateGet(this, _allocation))
            __privateGet(this, _allocation).lifetime = lifetime;
          __privateMethod(this, _scheduleRefresh, scheduleRefresh_fn).call(this, lifetime);
        }
        close() {
          __privateSet(this, _closed, true);
          if (__privateGet(this, _refreshTimer))
            clearTimeout(__privateGet(this, _refreshTimer));
          __privateGet(this, _sock).off("message", __privateGet(this, _onMessage));
        }
      };
      _sock = new WeakMap();
      _realm = new WeakMap();
      _nonce = new WeakMap();
      _integrityKey = new WeakMap();
      _allocation = new WeakMap();
      _pending = new WeakMap();
      _onData3 = new WeakMap();
      _refreshTimer = new WeakMap();
      _closed = new WeakMap();
      _serverIp = new WeakMap();
      _onMessage = new WeakMap();
      _authedRequest = new WeakSet();
      authedRequest_fn = async function(type2, successType, attrs) {
        const build = () => [
          ...attrs,
          { type: STUN_ATTR_USERNAME, value: Buffer2.from(this.creds.username, "utf8") },
          { type: STUN_ATTR_REALM, value: Buffer2.from(__privateGet(this, _realm), "utf8") },
          { type: STUN_ATTR_NONCE, value: __privateGet(this, _nonce) }
        ];
        const resp = await __privateMethod(this, _request, request_fn).call(this, type2, build());
        if (resp.type === successType)
          return resp;
        const err = findAttr(resp, STUN_ATTR_ERROR_CODE);
        const decoded = err ? decodeErrorCode(err) : void 0;
        if (decoded?.code !== 438)
          return resp;
        const newNonce = findAttr(resp, STUN_ATTR_NONCE);
        if (!newNonce)
          return resp;
        __privateSet(this, _nonce, newNonce);
        const newRealm = findAttr(resp, STUN_ATTR_REALM);
        if (newRealm) {
          const realm = Buffer2.from(newRealm).toString("utf8");
          if (realm !== __privateGet(this, _realm)) {
            __privateSet(this, _realm, realm);
            __privateSet(this, _integrityKey, longTermIntegrityKey(this.creds.username, __privateGet(this, _realm), this.creds.password));
          }
        }
        return __privateMethod(this, _request, request_fn).call(this, type2, build());
      };
      _request = new WeakSet();
      request_fn = async function(type2, attrs) {
        const txn = newTransactionId();
        const key2 = Buffer2.from(txn).toString("hex");
        const integrity = type2 !== TURN_ALLOCATE_REQUEST || __privateGet(this, _integrityKey) ? __privateGet(this, _integrityKey) : void 0;
        const pkt = encodeStun({ type: type2, transactionId: txn, attributes: attrs }, integrity ? { integrityKey: integrity, fingerprint: false } : { fingerprint: false });
        let lastError;
        for (let attempt = 0; attempt < REQUEST_RETRIES; attempt++) {
          const result = await new Promise((resolve2) => {
            const timeout = setTimeout(() => {
              __privateGet(this, _pending).delete(key2);
              resolve2(void 0);
            }, REQUEST_TIMEOUT_MS);
            __privateGet(this, _pending).set(key2, (msg) => {
              clearTimeout(timeout);
              resolve2(msg);
            });
            __privateGet(this, _sock).send(Buffer2.from(pkt), this.creds.port, this.creds.host, (err) => {
              if (err) {
                clearTimeout(timeout);
                __privateGet(this, _pending).delete(key2);
                lastError = err;
                resolve2(void 0);
              }
            });
          });
          if (result)
            return result;
        }
        throw new Error(`TURN request (type=0x${type2.toString(16)}) timed out: ${lastError?.message ?? "no response"}`);
      };
      _parseAllocateSuccess = new WeakSet();
      parseAllocateSuccess_fn = function(msg) {
        const relayAttr = findAttr(msg, STUN_ATTR_XOR_RELAYED_ADDRESS);
        if (!relayAttr)
          throw new Error("ALLOCATE success missing XOR-RELAYED-ADDRESS");
        const relayed = decodeXorMappedAddress(relayAttr, msg.transactionId);
        if (!relayed)
          throw new Error("ALLOCATE success has malformed XOR-RELAYED-ADDRESS");
        const mappedAttr = findAttr(
          msg,
          32
          /* XOR-MAPPED-ADDRESS */
        );
        const mapped = mappedAttr ? decodeXorMappedAddress(mappedAttr, msg.transactionId) : void 0;
        const lifetimeAttr = findAttr(msg, STUN_ATTR_LIFETIME);
        const lifetime = lifetimeAttr ? readU322(lifetimeAttr) : 600;
        return { relayedAddress: relayed, mappedAddress: mapped, lifetime };
      };
      _scheduleRefresh = new WeakSet();
      scheduleRefresh_fn = function(lifetime) {
        if (__privateGet(this, _refreshTimer))
          clearTimeout(__privateGet(this, _refreshTimer));
        if (__privateGet(this, _closed))
          return;
        const ms = Math.max(15e3, lifetime * 1e3 / 2);
        __privateSet(this, _refreshTimer, setTimeout(() => {
          this.refresh().catch((err) => {
            console.error("[turn] refresh failed:", err.message);
          });
        }, ms));
      };
    }
  });

  // node_modules/@decentnetwork/peer/dist/turn-creds.js
  function deriveCarrierTurnCreds(opts) {
    if (opts.bootnodePublicKey.length !== 32) {
      throw new Error(`bootnodePublicKey must be 32 bytes, got ${opts.bootnodePublicKey.length}`);
    }
    if (opts.ourSecretKey.length !== 32) {
      throw new Error(`ourSecretKey must be 32 bytes, got ${opts.ourSecretKey.length}`);
    }
    const sharedKey = import_tweetnacl12.default.box.before(opts.bootnodePublicKey, opts.ourSecretKey);
    const nonce = randomBytes2(24);
    const digest = createHmac("sha256", Buffer2.from(sharedKey)).update(nonce).digest();
    const nonceB58 = bytesToBase58(nonce);
    const passwordB58 = bytesToBase58(Uint8Array.from(digest));
    return {
      host: opts.bootnodeHost,
      port: CARRIER_TURN_PORT,
      realm: CARRIER_TURN_REALM,
      username: `${opts.ourUserid}@${nonceB58}.${CARRIER_TURN_USER_SUFFIX}`,
      password: passwordB58
    };
  }
  var import_tweetnacl12, CARRIER_TURN_PORT, CARRIER_TURN_REALM, CARRIER_TURN_USER_SUFFIX;
  var init_turn_creds = __esm({
    "node_modules/@decentnetwork/peer/dist/turn-creds.js"() {
      init_buffer_global();
      init_process_global();
      init_node_crypto();
      import_tweetnacl12 = __toESM(require_nacl_fast(), 1);
      init_base58();
      init_bytes();
      CARRIER_TURN_PORT = 3478;
      CARRIER_TURN_REALM = "elastos.org";
      CARRIER_TURN_USER_SUFFIX = "auth.tox";
    }
  });

  // node_modules/@decentnetwork/peer/dist/ice-servers.js
  function bootnodePublicKey(node) {
    if (node.pkBytes && node.pkBytes.length === 32)
      return node.pkBytes;
    if (!node.pk)
      throw new Error(`bootstrap node ${node.host} has no pk`);
    return base58ToBytes(node.pk);
  }
  function toTurnServerInfo(creds) {
    return {
      server: creds.host,
      port: creds.port,
      username: creds.username,
      password: creds.password,
      realm: creds.realm
    };
  }
  function getTurnServerInfoForBootnode(opts) {
    const creds = deriveCarrierTurnCreds({
      bootnodeHost: opts.bootnode.host,
      bootnodePublicKey: bootnodePublicKey(opts.bootnode),
      ourUserid: opts.ourUserid,
      ourSecretKey: opts.ourSecretKey
    });
    return toTurnServerInfo(creds);
  }
  function iceServersFromTurnInfo(info, opts) {
    const base = `${info.server}:${info.port}`;
    const auth = { username: info.username, credential: info.password };
    const out = [
      { urls: `stun:${base}`, ...auth },
      { urls: `turn:${base}`, ...auth }
    ];
    if (opts?.includeTcpTurn !== false) {
      out.push({ urls: `turn:${base}?transport=tcp`, ...auth });
    }
    return out;
  }
  function getIceServers(opts) {
    const limit = opts.limit ?? 3;
    const nodes = opts.bootstrapNodes.filter((n) => n?.host && (n.pk || n.pkBytes)).slice(0, limit);
    if (!nodes.length) {
      throw new Error("getIceServers: no bootstrap nodes with public keys");
    }
    const ice = [];
    for (const bootnode of nodes) {
      const info = getTurnServerInfoForBootnode({
        bootnode,
        ourUserid: opts.ourUserid,
        ourSecretKey: opts.ourSecretKey
      });
      ice.push(...iceServersFromTurnInfo(info, { includeTcpTurn: opts.includeTcpTurn }));
    }
    return ice;
  }
  var init_ice_servers = __esm({
    "node_modules/@decentnetwork/peer/dist/ice-servers.js"() {
      init_buffer_global();
      init_process_global();
      init_base58();
      init_turn_creds();
    }
  });

  // node_modules/@decentnetwork/peer/dist/transport/dgram-lifecycle.js
  async function createBoundUdp4Socket(createSocket2 = () => createSocket("udp4")) {
    const sock = createSocket2();
    try {
      await new Promise((resolve2, reject) => {
        const cleanup = () => {
          sock.off("error", onError);
        };
        const onError = (error) => {
          cleanup();
          reject(error);
        };
        sock.once("error", onError);
        sock.bind(0, () => {
          cleanup();
          resolve2();
        });
      });
      return sock;
    } catch (error) {
      await closeDgramSocket(sock);
      throw error;
    }
  }
  async function closeDgramSocket(sock, timeoutMs = 2e3) {
    if (!sock)
      return;
    await new Promise((resolve2) => {
      let done = false;
      let timer;
      const finish = () => {
        if (done)
          return;
        done = true;
        if (timer)
          clearTimeout(timer);
        sock.off("close", finish);
        resolve2();
      };
      timer = setTimeout(finish, timeoutMs);
      timer.unref?.();
      try {
        sock.once("close", finish);
        sock.close(finish);
      } catch {
        finish();
      }
    });
  }
  var init_dgram_lifecycle = __esm({
    "node_modules/@decentnetwork/peer/dist/transport/dgram-lifecycle.js"() {
      init_buffer_global();
      init_process_global();
      init_node_dgram();
    }
  });

  // node_modules/@decentnetwork/peer/dist/peer.js
  var peer_exports = {};
  __export(peer_exports, {
    Peer: () => Peer
  });
  function parsePunkField(value) {
    if (!value)
      return void 0;
    const n = Number(value.trim());
    if (!Number.isInteger(n) || n < 0 || n > 9999)
      return void 0;
    return n;
  }
  function decodeUtf8Best(payload) {
    if (payload.length === 0)
      return "";
    try {
      return new TextDecoder("utf-8", { fatal: false }).decode(payload);
    } catch {
      return "";
    }
  }
  function encodeTextAckEnvelope(envelope) {
    return TEXT_ACK_PREFIX + Buffer2.from(JSON.stringify(envelope), "utf8").toString("base64url");
  }
  function decodeTextAckEnvelope(text) {
    if (!text.startsWith(TEXT_ACK_PREFIX))
      return void 0;
    try {
      const raw = Buffer2.from(text.slice(TEXT_ACK_PREFIX.length), "base64url").toString("utf8");
      const parsed = JSON.parse(raw);
      if (parsed.t === "ack" && typeof parsed.id === "string" && parsed.id.length > 0) {
        return { t: "ack", id: parsed.id };
      }
      if (parsed.t === "msg" && typeof parsed.id === "string" && parsed.id.length > 0 && typeof parsed.text === "string") {
        return { t: "msg", id: parsed.id, text: parsed.text };
      }
    } catch {
      return void 0;
    }
    return void 0;
  }
  function createTextDeliveryId() {
    return `${Date.now().toString(36)}-${Buffer2.from(randomBytes2(12)).toString("base64url")}`;
  }
  function splitFriendRequestPayload(payload) {
    if (payload.length >= 4) {
      const withPrefix = payload.slice(4);
      try {
        const decoded = decodeCarrierPacket(withPrefix);
        if (decoded.type === PACKET_TYPE_FRIEND_REQUEST) {
          return {
            nospam: readUint32LE2(payload, 0),
            carrierPacket: withPrefix
          };
        }
      } catch {
      }
    }
    try {
      const decoded = decodeCarrierPacket(payload);
      if (decoded.type === PACKET_TYPE_FRIEND_REQUEST) {
        return {
          nospam: 0,
          carrierPacket: payload
        };
      }
    } catch {
      return void 0;
    }
    return void 0;
  }
  function dedupeNodes(nodes) {
    const byAddress = /* @__PURE__ */ new Map();
    for (const node of nodes) {
      byAddress.set(`${node.host}:${node.port}`, node);
    }
    return [...byAddress.values()];
  }
  function uint32ToLe(value) {
    if (!Number.isInteger(value) || value < 0 || value > 4294967295) {
      throw new Error("friend nospam must be uint32");
    }
    return new Uint8Array([
      value & 255,
      value >>> 8 & 255,
      value >>> 16 & 255,
      value >>> 24 & 255
    ]);
  }
  function readUint32LE2(bytes, offset) {
    return (bytes[offset] | bytes[offset + 1] << 8 | bytes[offset + 2] << 16 | bytes[offset + 3] << 24) >>> 0;
  }
  function readUint64BE(bytes, offset) {
    let v = 0n;
    for (let i = 0; i < 8; i++) {
      v = v << 8n | BigInt(bytes[offset + i] ?? 0);
    }
    return v;
  }
  function stripCarrierMagic(data) {
    if (data.length >= 5 && data[0] === 105 && data[1] === 118 && data[2] === 101 && data[3] === 103) {
      return data.slice(4);
    }
    return data;
  }
  function parsePackedNodes(data) {
    const nodes = [];
    let offset = 0;
    while (offset + 1 <= data.length) {
      const family = data[offset];
      offset += 1;
      let host2 = "";
      let isTcp = false;
      if (family === 2 || family === 130) {
        if (offset + 4 + 2 + 32 > data.length) {
          break;
        }
        host2 = [...data.slice(offset, offset + 4)].join(".");
        offset += 4;
        isTcp = family === 130;
      } else if (family === 10 || family === 138) {
        if (offset + 16 + 2 + 32 > data.length) {
          break;
        }
        const parts = [];
        for (let i = 0; i < 8; i++) {
          parts.push((data[offset + i * 2] << 8 | data[offset + i * 2 + 1]).toString(16));
        }
        host2 = parts.join(":");
        offset += 16;
        isTcp = family === 138;
      } else {
        break;
      }
      const port = data[offset] << 8 | data[offset + 1];
      offset += 2;
      const pk = carrierIdFromPublicKey(data.slice(offset, offset + 32));
      offset += 32;
      nodes.push({ host: host2, port, pk, isTcp });
    }
    return nodes;
  }
  function bytesEqual3(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      diff |= a[i] ^ b[i];
    }
    return diff === 0;
  }
  function createEphemeralKeyPair() {
    return import_tweetnacl13.default.box.keyPair();
  }
  function xorCloser(target, a, b) {
    const n = Math.min(target.length, a.length, b.length);
    for (let i = 0; i < n; i++) {
      const da = (a[i] ^ target[i]) & 255;
      const db = (b[i] ^ target[i]) & 255;
      if (da !== db)
        return da - db;
    }
    return 0;
  }
  function isAllZero(bytes) {
    for (let i = 0; i < bytes.length; i++) {
      if (bytes[i] !== 0) {
        return false;
      }
    }
    return true;
  }
  function isLikelyStableRelayPort(port) {
    return port >= 33445 && port <= 33449;
  }
  function relayPortScore(port) {
    return isLikelyStableRelayPort(port) ? 3 : 0;
  }
  function sleep(ms) {
    return new Promise((resolve2) => {
      setTimeout(resolve2, Math.max(0, ms));
    });
  }
  function randomBigUint64() {
    const bytes = randomBytes2(8);
    let v = 0n;
    for (let i = 7; i >= 0; i--) {
      v = v << 8n | BigInt(bytes[i]);
    }
    return v;
  }
  function ipv4ToInt(host2) {
    const parts = host2.split(".");
    if (parts.length !== 4)
      return void 0;
    const oct = parts.map((p) => Number.parseInt(p, 10));
    if (oct.some((n) => !Number.isInteger(n) || n < 0 || n > 255))
      return void 0;
    return (oct[0] << 24 | oct[1] << 16 | oct[2] << 8 | oct[3]) >>> 0;
  }
  function netmaskToInt(mask) {
    return ipv4ToInt(mask);
  }
  function getLocalIpv4Addresses() {
    const out = [];
    try {
      const ifaces = networkInterfaces();
      for (const list of Object.values(ifaces)) {
        if (!list)
          continue;
        for (const info of list) {
          if (info.family !== "IPv4" || info.internal)
            continue;
          out.push(info.address);
        }
      }
    } catch {
    }
    return out;
  }
  function getLocalIpv4Subnets() {
    const out = [];
    try {
      const ifaces = networkInterfaces();
      for (const list of Object.values(ifaces)) {
        if (!list)
          continue;
        for (const info of list) {
          if (info.family !== "IPv4" || info.internal)
            continue;
          const addr = ipv4ToInt(info.address);
          const mask = netmaskToInt(info.netmask);
          if (addr === void 0 || mask === void 0 || mask === 0)
            continue;
          out.push({ networkBits: (addr & mask) >>> 0, maskBits: mask });
        }
      }
    } catch {
    }
    return out;
  }
  function isInIpv4Subnet(host2, subnet) {
    const ip = ipv4ToInt(host2);
    if (ip === void 0)
      return false;
    return (ip & subnet.maskBits) >>> 0 === subnet.networkBits;
  }
  function isCgnatAddress(host2) {
    const o = host2.split(".");
    if (o.length !== 4)
      return false;
    const a = Number(o[0]);
    const b = Number(o[1]);
    return a === 100 && b >= 64 && b <= 127;
  }
  function getWslWindowsHostAddresses(localSubnets) {
    const now = Date.now();
    if (now - _wslHostCacheMs < 6e4)
      return [..._wslHostAddrsCache];
    _wslHostCacheMs = now;
    const found = /* @__PURE__ */ new Set();
    const ipconfig = "/mnt/c/Windows/System32/ipconfig.exe";
    if (process.platform !== "linux" || !existsSync(ipconfig)) {
      _wslHostAddrsCache = found;
      return [];
    }
    try {
      const output = execFileSync(ipconfig, [], {
        encoding: "utf8",
        timeout: 2e3,
        windowsHide: true,
        stdio: ["ignore", "pipe", "ignore"]
      });
      for (const match of output.matchAll(/IPv4[^:\r\n]*:\s*(\d+\.\d+\.\d+\.\d+)/gi)) {
        const host2 = match[1];
        if (!isPrivateAddress(host2) || isCgnatAddress(host2) || host2.startsWith("127.") || host2.startsWith("169.254."))
          continue;
        if (localSubnets.some((s) => isInIpv4Subnet(host2, s)))
          continue;
        found.add(host2);
      }
    } catch {
    }
    _wslHostAddrsCache = found;
    return [...found];
  }
  function refreshLanIfaceCache() {
    const now = Date.now();
    if (_lanIfaceCacheMs !== 0 && now - _lanIfaceCacheMs < 5e3)
      return;
    _lanIfaceCacheMs = now;
    const addrs = [];
    const subnets = [];
    const allOwn = /* @__PURE__ */ new Set();
    const ownVirtual = /* @__PURE__ */ new Set();
    try {
      for (const [name, list] of Object.entries(networkInterfaces())) {
        if (!list)
          continue;
        const virtual = VIRTUAL_IFACE_RE.test(name);
        for (const info of list) {
          if (info.family !== "IPv4")
            continue;
          allOwn.add(info.address);
          if (virtual)
            ownVirtual.add(info.address);
          if (virtual || info.internal || isCgnatAddress(info.address))
            continue;
          addrs.push(info.address);
          const addr = ipv4ToInt(info.address);
          const mask = netmaskToInt(info.netmask);
          if (addr !== void 0 && mask !== void 0 && mask !== 0) {
            subnets.push({ networkBits: (addr & mask) >>> 0, maskBits: mask });
          }
        }
      }
    } catch {
    }
    const wslHostAddrs = getWslWindowsHostAddresses(subnets);
    for (const host2 of wslHostAddrs)
      allOwn.add(host2);
    addrs.unshift(...wslHostAddrs);
    _lanAddrsCache = addrs;
    _lanSubnetsCache = subnets;
    _allOwnAddrsCache = allOwn;
    _ownVirtualAddrsCache = ownVirtual;
  }
  function isOwnAddress(host2) {
    refreshLanIfaceCache();
    return _allOwnAddrsCache.has(host2);
  }
  function isOwnVirtualAddress(host2) {
    refreshLanIfaceCache();
    return _ownVirtualAddrsCache.has(host2);
  }
  function getPhysicalLanAddresses() {
    refreshLanIfaceCache();
    return _lanAddrsCache;
  }
  function getPhysicalLanSubnets() {
    refreshLanIfaceCache();
    return _lanSubnetsCache;
  }
  function isPrivateAddress(host2) {
    if (!host2)
      return false;
    if (host2 === "localhost")
      return true;
    if (host2.includes(":")) {
      const lower = host2.toLowerCase();
      if (lower === "::1")
        return true;
      if (lower.startsWith("fe80:"))
        return true;
      if (lower.startsWith("fc") || lower.startsWith("fd"))
        return true;
      return false;
    }
    const parts = host2.split(".");
    if (parts.length !== 4)
      return false;
    const oct = parts.map((p) => Number.parseInt(p, 10));
    if (oct.some((n) => !Number.isInteger(n) || n < 0 || n > 255))
      return false;
    if (oct[0] === 10)
      return true;
    if (oct[0] === 127)
      return true;
    if (oct[0] === 169 && oct[1] === 254)
      return true;
    if (oct[0] === 172 && oct[1] >= 16 && oct[1] <= 31)
      return true;
    if (oct[0] === 192 && oct[1] === 168)
      return true;
    if (oct[0] === 100 && oct[1] >= 64 && oct[1] <= 127)
      return true;
    return false;
  }
  function readEnvInt(name, fallback) {
    const raw = process.env[name];
    if (!raw) {
      return fallback;
    }
    const parsed = Number.parseInt(raw, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
  }
  var import_tweetnacl13, TURN_RELAY_SERVERS, ANNOUNCE_WAIT_TIMEOUT_MS, MAX_FRIEND_ROUTE_ATTEMPTS, FRIEND_ROUTE_BATCH_SIZE, NODE_BLACKLIST_THRESHOLD, NODE_BLACKLIST_BASE_TTL_MS, NODE_BLACKLIST_MAX_TTL_MS, FRIEND_ANNOUNCE_ATTEMPTS, JOIN_ANNOUNCE_TIMEOUT_MS, SELF_ANNOUNCE_INTERVAL_MS, DHT_MAINTENANCE_INTERVAL_MS, MAX_KNOWN_NODES, MAX_SELF_ANNOUNCE_TARGETS, SELF_ANNOUNCE_ATTEMPTS, SELF_ANNOUNCE_BATCH_SIZE, ONION_DATA_ATTEMPTS, EXPRESS_PULL_INTERVAL_MS, FRIEND_PING_INTERVAL_MS, FRIEND_CONNECTION_LOOP_MS, DHT_PK_ANNOUNCE_COOLDOWN_MS, ONION_LOOKUP_MAX_BACKOFF_MS, FRIEND_TIMEOUT_MS, PROVEN_SESSION_HARD_TIMEOUT_MS, LAN_LOCK_STALE_MS, REHS_ACCEPT_COUNT, REHS_ACCEPT_MS, REHS_WINDOW_MS, REINIT_ON_DESYNC_MS, REINIT_STUCK_MS, RELAY_CONFIRM_WINDOW_MS, LAN_DISCOVERY_INTERVAL_MS, LAN_SWEEP_AFTER_MS, LAN_SWEEP_PORTS, LAN_SWEEP_EXTRA_HOSTS, LAN_SELF_PROBE_ENABLED, NET_PACKET_LAN_DISCOVERY, LAN_DISCOVERY_PORTS, PEER_NICKNAME, PEER_STATUS_MESSAGE, GREETING_TEXT, AGENTNET_PROTO_VERSION, PEER_PKG_VERSION, TEXT_ACK_PREFIX, TEXT_ACK_TIMEOUT_MS, TEXT_ACK_RETRY_MS, TEXT_AUTO_ACK_TIMEOUT_MS, PACKET_ID_REQUEST, PACKET_ID_KILL, PACKET_ID_ALIVE, PACKET_ID_SHARE_RELAYS, PACKET_ID_ONLINE, PACKET_ID_OFFLINE, PACKET_ID_NICKNAME, PACKET_ID_STATUSMESSAGE, PACKET_ID_USERSTATUS, PACKET_ID_TYPING, PACKET_ID_MESSAGE, PACKET_ID_ACTION, PACKET_ID_UDP_ENDPOINT, RECV_REQUEST_MIN_INTERVAL_MS, _opts3, _events, _fileRelayNegotiationUntil, _dnft12, _fileTransfer, _keyPair2, _udp, _turnClient, _turnSocket, _ourRelayAddr, _turnAllocating, _bootstrap, _dht, _knownNodes, _announceDataKey, _lastSelfAnnounceMs, _debug4, _debugVerbose, _packetTrace, _lastFriendRequestDispatch, _nodeHealth, _nodeBlacklist, _pendingFriendRequests, _friends, _textHandlers, _pendingTextAcks, _deliveredTextIds, _deliveredTextOrder, _friendStoreFile, _persistSeq, _cookieSymmetricKey, _friendSessions, _cryptoEndpointIndex, _express, _expressPollTimer, _tcpRelays, _selfAnnounceTimer, _friendConnectionTimer, _lanDiscoveryTimer, _lanProbeTargets, _ownHostProbeFriendId, _ownHostProbeUntilMs, _dhtMaintenanceTimer, _dhtPkSendCooldown, _onionLookupCooldown, _onionLookupMisses, _routeRequestCooldown, _announceRouteUsed, _friendDhtKeys, _friendRequestResendCooldown, _dhtPkConsecutiveFailures, _lastSelfAnnounceStoredCount, _diagTcpOnionSent, _diagTcpOnionRecv, _lastLoggedRoutesForFriend, _lastCookieSentKey, _lastEndpointSelectedKey, _cookieRetryCount, _tcpOnlyWarningShown, _noEndpointWarned, _initiateSkipLogged, _bulkAssembly, _inviteAssembly, _initiateDeferSinceMs, _lastDesyncDeleteMs, _srflxCache, _profileSentTo, _profileRetryAttempts, _profileRetryTimers, _greetingSentTo, _selfAnnouncePromise, _selfAnnouncePauseDepth, _started, _newSessionShell, newSessionShell_fn, _recordOutgoingFriendRequest, recordOutgoingFriendRequest_fn, _sendTextPlain, sendTextPlain_fn, _shouldRequireTextAck, shouldRequireTextAck_fn, _waitForTextAck, waitForTextAck_fn, _cancelTextAckWait, cancelTextAckWait_fn, _waitForFriendConnected, waitForFriendConnected_fn, _dispatchTextMessage, dispatchTextMessage_fn, _sendTextAck, sendTextAck_fn, _rememberDeliveredTextId, rememberDeliveredTextId_fn, _awaitTransportAck, awaitTransportAck_fn, _sendDnft1Frame, sendDnft1Frame_fn, _learnFriendDhtKey, learnFriendDhtKey_fn, _friendIdForPoolKey, friendIdForPoolKey_fn, _handleTcpDatagram, handleTcpDatagram_fn, _remoteIsTcp, remoteIsTcp_fn, _onDatagram, _handleOnionDhtPk, handleOnionDhtPk_fn, _emitFriendRequest, emitFriendRequest_fn, _emitOfflineFriendRequest, emitOfflineFriendRequest_fn, _emitOfflineFriendMessage, emitOfflineFriendMessage_fn, _discoverFriendRoutes, discoverFriendRoutes_fn, _discoverAndCacheFriendEndpoint, discoverAndCacheFriendEndpoint_fn, _announceSelfBestEffort, announceSelfBestEffort_fn, _ensureSelfAnnounceLoop, ensureSelfAnnounceLoop_fn, _ensureExpressPullLoop, ensureExpressPullLoop_fn, _ensureFriendConnectionLoop, ensureFriendConnectionLoop_fn, _doFriendConnections, doFriendConnections_fn, _deliverLosslessPayload, deliverLosslessPayload_fn, _drainRecvBufferContiguous, drainRecvBufferContiguous_fn, _forceAdvanceRecvBuffer, forceAdvanceRecvBuffer_fn, _requestMissingReliablePackets, requestMissingReliablePackets_fn, _sendRequestPacket, sendRequestPacket_fn, _assembleBulkMsg, assembleBulkMsg_fn, _assembleInvite, assembleInvite_fn, _tryEmitInlineFile, tryEmitInlineFile_fn, _tryEmitBinaryInlineFile, tryEmitBinaryInlineFile_fn, _handleRetransmitRequest, handleRetransmitRequest_fn, _resendReliablePacket, resendReliablePacket_fn, _sendMessengerPacket, sendMessengerPacket_fn, _sendToFriend, sendToFriend_fn, _scheduleProfileRetry, scheduleProfileRetry_fn, _sendProfileAndGreeting, sendProfileAndGreeting_fn, _cacheFriendRemote, cacheFriendRemote_fn, _isUnroutableSelfSource, isUnroutableSelfSource_fn, _adoptRemote, adoptRemote_fn, _rememberEndpointCandidate, rememberEndpointCandidate_fn, _gatherOwnSrflx, gatherOwnSrflx_fn, _ensureTurnRelay, ensureTurnRelay_fn, _sendViaRelay, sendViaRelay_fn, _sendUdpEndpointOffer, sendUdpEndpointOffer_fn, _handleUdpEndpointOffer, handleUdpEndpointOffer_fn, _collectSessionEndpointCandidates, collectSessionEndpointCandidates_fn, _initiateSession, initiateSession_fn, _sweepLanForCookieResponse, sweepLanForCookieResponse_fn, _dhtPingId, dhtPingId_fn, _closestKnownNodes, closestKnownNodes_fn, _friendByDhtPk, friendByDhtPk_fn, _handleDhtRpc, handleDhtRpc_fn, _refreshFriendDhtKeyFromDht, refreshFriendDhtKeyFromDht_fn, _sendDhtGetNodes, sendDhtGetNodes_fn, _sendDhtPing, sendDhtPing_fn, _ensureDhtMaintenanceLoop, ensureDhtMaintenanceLoop_fn, _doDhtMaintenance, doDhtMaintenance_fn, _sendOnionDhtPk, sendOnionDhtPk_fn, _setFriendOnline, setFriendOnline_fn, _setFriendOffline, setFriendOffline_fn, _sendAnnounceAndWait, sendAnnounceAndWait_fn, _waitForAnnounceResponse, waitForAnnounceResponse_fn, _sendPacket, sendPacket_fn, _sendThroughOnionPath, sendThroughOnionPath_fn, _onionCandidatePool, onionCandidatePool_fn, _selectTcpOnionHops, selectTcpOnionHops_fn, _selectOnionPath, selectOnionPath_fn, _sendDirectCryptoFriendRequest, sendDirectCryptoFriendRequest_fn, _debugLog2, debugLog_fn2, _debugVerboseLog, debugVerboseLog_fn, _tracePacket, tracePacket_fn, _recordNodeSuccess, recordNodeSuccess_fn, _recordNodeFailure, recordNodeFailure_fn, _isNodeBlacklisted, isNodeBlacklisted_fn, _nodeScore, nodeScore_fn, _pauseSelfAnnounce, pauseSelfAnnounce_fn, _runSelfAnnounce, runSelfAnnounce_fn, _loadPersistedFriends, loadPersistedFriends_fn, _persistFriends, persistFriends_fn, _Peer, Peer, VIRTUAL_IFACE_RE, _lanIfaceCacheMs, _lanAddrsCache, _lanSubnetsCache, _allOwnAddrsCache, _ownVirtualAddrsCache, _wslHostAddrsCache, _wslHostCacheMs;
  var init_peer = __esm({
    "node_modules/@decentnetwork/peer/dist/peer.js"() {
      init_buffer_global();
      init_process_global();
      init_node_events();
      init_node_stub();
      init_node_stub();
      init_node_stub();
      init_node_stub();
      init_node_stub();
      import_tweetnacl13 = __toESM(require_nacl_fast());
      init_address();
      init_bootstrap();
      init_inline_file();
      init_packet();
      init_tox_onion();
      init_tox_dht_crypto();
      init_dht_rpc();
      init_filetransfer();
      init_dnft1();
      init_net_crypto();
      init_express();
      init_tcp_relay_pool();
      init_dht();
      init_keypair();
      init_sign();
      init_base58();
      init_udp();
      init_bytes();
      init_stun();
      init_turn();
      init_ice_servers();
      init_dgram_lifecycle();
      TURN_RELAY_SERVERS = (() => {
        const raw = process.env.DECENT_TURN_SERVERS?.trim();
        if (!raw) {
          return [
            { host: "tokyo.fi.chat", port: 3478, username: "allcom", password: "allcompass" },
            { host: "gfax.cn", port: 3478, username: "allcom", password: "allcompass" }
          ];
        }
        return raw.split(",").map((entry) => entry.trim()).filter(Boolean).map((entry) => {
          const idx = entry.lastIndexOf(":");
          const host2 = idx === -1 ? entry : entry.slice(0, idx);
          const port = idx === -1 ? 3478 : Number.parseInt(entry.slice(idx + 1), 10);
          return {
            host: host2,
            port: Number.isFinite(port) && port > 0 ? port : 3478,
            username: "allcom",
            password: "allcompass"
          };
        });
      })();
      ANNOUNCE_WAIT_TIMEOUT_MS = readEnvInt("DECENT_ANNOUNCE_WAIT_TIMEOUT_MS", 4e3);
      MAX_FRIEND_ROUTE_ATTEMPTS = readEnvInt("DECENT_FRIEND_ROUTE_MAX_ATTEMPTS", 24);
      FRIEND_ROUTE_BATCH_SIZE = readEnvInt("DECENT_FRIEND_ROUTE_BATCH_SIZE", 8);
      NODE_BLACKLIST_THRESHOLD = readEnvInt("DECENT_NODE_BLACKLIST_THRESHOLD", 5);
      NODE_BLACKLIST_BASE_TTL_MS = readEnvInt("DECENT_NODE_BLACKLIST_BASE_TTL_MS", 6e4);
      NODE_BLACKLIST_MAX_TTL_MS = readEnvInt("DECENT_NODE_BLACKLIST_MAX_TTL_MS", 6e5);
      FRIEND_ANNOUNCE_ATTEMPTS = readEnvInt("DECENT_FRIEND_ANNOUNCE_ATTEMPTS", 1);
      JOIN_ANNOUNCE_TIMEOUT_MS = readEnvInt("DECENT_JOIN_ANNOUNCE_TIMEOUT_MS", 12e3);
      SELF_ANNOUNCE_INTERVAL_MS = readEnvInt("DECENT_SELF_ANNOUNCE_INTERVAL_MS", 2e4);
      DHT_MAINTENANCE_INTERVAL_MS = readEnvInt("DECENT_DHT_MAINTENANCE_INTERVAL_MS", 15e3);
      MAX_KNOWN_NODES = readEnvInt("DECENT_MAX_KNOWN_NODES", 400);
      MAX_SELF_ANNOUNCE_TARGETS = readEnvInt("DECENT_SELF_ANNOUNCE_TARGETS", 16);
      SELF_ANNOUNCE_ATTEMPTS = readEnvInt("DECENT_SELF_ANNOUNCE_ATTEMPTS", 1);
      SELF_ANNOUNCE_BATCH_SIZE = readEnvInt("DECENT_SELF_ANNOUNCE_BATCH_SIZE", 12);
      ONION_DATA_ATTEMPTS = readEnvInt("DECENT_ONION_DATA_ATTEMPTS", 5);
      EXPRESS_PULL_INTERVAL_MS = readEnvInt("DECENT_EXPRESS_PULL_INTERVAL_MS", 4e3);
      FRIEND_PING_INTERVAL_MS = readEnvInt("DECENT_FRIEND_PING_INTERVAL_MS", 4e3);
      FRIEND_CONNECTION_LOOP_MS = readEnvInt("DECENT_FRIEND_CONNECTION_LOOP_MS", 250);
      DHT_PK_ANNOUNCE_COOLDOWN_MS = readEnvInt("DECENT_DHT_PK_ANNOUNCE_COOLDOWN_MS", 25e3);
      ONION_LOOKUP_MAX_BACKOFF_MS = readEnvInt("DECENT_ONION_LOOKUP_MAX_BACKOFF_MS", 12e4);
      FRIEND_TIMEOUT_MS = readEnvInt("DECENT_FRIEND_TIMEOUT_MS", 32e3);
      PROVEN_SESSION_HARD_TIMEOUT_MS = readEnvInt("DECENT_PROVEN_SESSION_HARD_TIMEOUT_MS", 18e4);
      LAN_LOCK_STALE_MS = readEnvInt("DECENT_LAN_LOCK_STALE_MS", 12e3);
      REHS_ACCEPT_COUNT = readEnvInt("DECENT_REHS_ACCEPT_COUNT", 4);
      REHS_ACCEPT_MS = readEnvInt("DECENT_REHS_ACCEPT_MS", 2500);
      REHS_WINDOW_MS = readEnvInt("DECENT_REHS_WINDOW_MS", 8e3);
      REINIT_ON_DESYNC_MS = readEnvInt("DECENT_REINIT_ON_DESYNC_MS", 12e3);
      REINIT_STUCK_MS = readEnvInt("DECENT_REINIT_STUCK_MS", 2e4);
      RELAY_CONFIRM_WINDOW_MS = readEnvInt("DECENT_RELAY_CONFIRM_WINDOW_MS", 2e4);
      LAN_DISCOVERY_INTERVAL_MS = readEnvInt("DECENT_LAN_DISCOVERY_INTERVAL_MS", 1e4);
      LAN_SWEEP_AFTER_MS = readEnvInt("DECENT_LAN_SWEEP_AFTER_MS", 0);
      LAN_SWEEP_PORTS = (process.env.DECENT_LAN_SWEEP_PORTS ?? "33445").split(",").map((s) => Number.parseInt(s.trim(), 10)).filter((n) => Number.isFinite(n) && n > 0 && n <= 65535);
      LAN_SWEEP_EXTRA_HOSTS = (process.env.DECENT_LAN_SWEEP_EXTRA_HOSTS ?? "").split(",").map((s) => s.trim()).filter((s) => s.length > 0);
      LAN_SELF_PROBE_ENABLED = readEnvInt("DECENT_LAN_SELF_PROBE", 1) !== 0;
      NET_PACKET_LAN_DISCOVERY = 33;
      LAN_DISCOVERY_PORTS = (process.env.DECENT_LAN_DISCOVERY_PORTS ?? "33445,33446,33447,33448,33449").split(",").map((s) => Number.parseInt(s.trim(), 10)).filter((n) => Number.isFinite(n) && n > 0 && n <= 65535);
      PEER_NICKNAME = process.env.DECENT_PEER_NAME ?? "@decentnetwork/peer";
      PEER_STATUS_MESSAGE = process.env.DECENT_PEER_STATUS_MESSAGE ?? "decent peer";
      GREETING_TEXT = process.env.DECENT_GREETING_TEXT ?? "";
      AGENTNET_PROTO_VERSION = 2;
      PEER_PKG_VERSION = "0.1.112";
      TEXT_ACK_PREFIX = "DNPACK1:";
      TEXT_ACK_TIMEOUT_MS = readEnvInt("DECENT_TEXT_ACK_TIMEOUT_MS", 3e5);
      TEXT_ACK_RETRY_MS = readEnvInt("DECENT_TEXT_ACK_RETRY_MS", 5e3);
      TEXT_AUTO_ACK_TIMEOUT_MS = readEnvInt("DECENT_TEXT_AUTO_ACK_TIMEOUT_MS", 15e3);
      PACKET_ID_REQUEST = 1;
      PACKET_ID_KILL = 2;
      PACKET_ID_ALIVE = 16;
      PACKET_ID_SHARE_RELAYS = 17;
      PACKET_ID_ONLINE = 24;
      PACKET_ID_OFFLINE = 25;
      PACKET_ID_NICKNAME = 48;
      PACKET_ID_STATUSMESSAGE = 49;
      PACKET_ID_USERSTATUS = 50;
      PACKET_ID_TYPING = 51;
      PACKET_ID_MESSAGE = 64;
      PACKET_ID_ACTION = 65;
      PACKET_ID_UDP_ENDPOINT = 160;
      RECV_REQUEST_MIN_INTERVAL_MS = 200;
      _Peer = class _Peer {
        constructor(opts) {
          /** Lazy session shell used when we want to attach state before any handshake. */
          __privateAdd(this, _newSessionShell);
          __privateAdd(this, _recordOutgoingFriendRequest);
          /** What #sendTextPlain actually did with the message — callers that promise
           *  delivery semantics (inline files) need to know the path and, for the live
           *  path, where the send window stood after the last fragment. */
          __privateAdd(this, _sendTextPlain);
          __privateAdd(this, _shouldRequireTextAck);
          __privateAdd(this, _waitForTextAck);
          __privateAdd(this, _cancelTextAckWait);
          __privateAdd(this, _waitForFriendConnected);
          __privateAdd(this, _dispatchTextMessage);
          __privateAdd(this, _sendTextAck);
          __privateAdd(this, _rememberDeliveredTextId);
          /**
           * True once the friend's implicit acks (PACKET_ID_REQUEST walks) have moved
           * our reliable send window past `endPacketNumber` — i.e. every packet we had
           * sent by that point is confirmed received on their device. False when the
           * window doesn't drain in time or the session dies/rekeys under us (a new
           * session restarts the numbering, so the old position proves nothing).
           */
          __privateAdd(this, _awaitTransportAck);
          /**
           * Send one file-transfer packet as a DNFT1 frame inside a friend message —
           * the only route that reaches a native app's layer (its Carrier SDK
           * swallows packets 80-82 and drops 83). Payload bytes are unchanged; see
           * compat/dnft1.ts for the envelope and the iOS counterpart.
           *
           * Deliberately live-session only, and never express: express is
           * store-and-forward for chat, and 100 MB of file chunks has no business in
           * a mailbox. Control loss is already covered by the engine's offer/ack
           * retransmits, so a failed send here is a dropped packet the engine will
           * redo — not a lost transfer.
           */
          __privateAdd(this, _sendDnft1Frame);
          /**
           * Bridge for inbound TCP-relayed packets. The relay forwards the
           * exact bytes the friend sent (cookie request/response, handshake,
           * crypto data) — same wire format as UDP minus the iveg magic
           * prefix (the relay strips its own framing). We re-use the existing
           * UDP datagram dispatch by synthesizing a remote whose `address`
           * starts with `tcp:` so downstream code can recognize the origin
           * and avoid setting `session.remote` to a UDP-shaped value.
           */
          /** Record a friend's DHT pubkey: in-memory (survives session teardown) and
           *  persisted on the friend record (survives restarts, so start() can park
           *  relay routes under the right key before the friend announces again). */
          __privateAdd(this, _learnFriendDhtKey);
          /** Resolve a TCP-relay-pool key (the key the peer handshook the relay
           *  with) to OUR friend id. For JS peers the two coincide; native peers
           *  (iOS/Android) sit on relays under their DHT key — without this
           *  mapping, every pool event (friendOnline/friendOffline/inbound data
           *  bookkeeping) landed on a GHOST session keyed by the DHT key while the
           *  real session (keyed by identity) never saw route state change. */
          __privateAdd(this, _friendIdForPoolKey);
          __privateAdd(this, _handleTcpDatagram);
          /** True when the synthetic remote was constructed by #handleTcpDatagram. */
          __privateAdd(this, _remoteIsTcp);
          __privateAdd(this, _handleOnionDhtPk);
          __privateAdd(this, _emitFriendRequest);
          __privateAdd(this, _emitOfflineFriendRequest);
          __privateAdd(this, _emitOfflineFriendMessage);
          /**
           * @param userInitiated skips the budget. Adding a friend must not wait on a
           *   throttle meant for background upkeep.
           */
          __privateAdd(this, _discoverFriendRoutes);
          __privateAdd(this, _discoverAndCacheFriendEndpoint);
          __privateAdd(this, _announceSelfBestEffort);
          __privateAdd(this, _ensureSelfAnnounceLoop);
          __privateAdd(this, _ensureExpressPullLoop);
          __privateAdd(this, _ensureFriendConnectionLoop);
          __privateAdd(this, _doFriendConnections);
          /** Deliver ONE decrypted lossless payload to the application layer. Split
           *  out of the datagram handler so the receive reorder buffer can replay
           *  buffered packets through the exact same dispatch. `kind` is the first
           *  payload byte (never undefined here — the caller defaults it). */
          __privateAdd(this, _deliverLosslessPayload);
          /** Drain the receive reorder buffer forward from receiveBufferStart while it
           *  holds the next contiguous packet, delivering each in strict order. */
          __privateAdd(this, _drainRecvBufferContiguous);
          /** Safety valve: the reorder buffer grew past the window, so a packet below
           *  it is (almost certainly) a genuine loss that will never retransmit. Jump
           *  the low-water mark to the lowest buffered number — abandoning the gap
           *  (partial messages are dropped gracefully by the reassemblers) — rather
           *  than wedging every later packet (incl. chat) forever. */
          __privateAdd(this, _forceAdvanceRecvBuffer);
          /** Ask the sender to retransmit the packets missing below our highest
           *  buffered number. Encodes the toxcore PACKET_ID_REQUEST byte stream
           *  (the exact inverse of #handleRetransmitRequest): walk [low, high] and
           *  emit the running gap-counter at each MISSING number. Rate-limited. */
          __privateAdd(this, _requestMissingReliablePackets);
          /** Send a PACKET_ID_REQUEST. Like a retransmit (#resendReliablePacket) it
           *  rides the CURRENT nonce but does NOT consume a reliable send number —
           *  toxcore sends requests at buffer_end without storing them. */
          __privateAdd(this, _sendRequestPacket);
          /** Append a Carrier BULKMSG fragment and return the full reassembled message
           *  once every fragment has landed (undefined while pending).
           *
           *  The C SDK's send_bulk_message puts totalsz on the FIRST fragment (index 1)
           *  and sends the rest with totalsz 0, back-to-back with ascending reliable
           *  packet numbers. Over a dual/UDP path those fragments can arrive REORDERED —
           *  including the first (totalsz-bearing) one landing after later fragments. So
           *  we key fragments by their PACKET NUMBER (dedup + order), record totalsz
           *  whenever the first fragment shows up (in any order), and complete once we
           *  hold every byte — then concatenate in packet-number order. This tolerates
           *  reordering + duplicates WITHOUT stalling the reliable stream (a genuinely
           *  lost fragment just expires this one message after 60s, nothing else). */
          __privateAdd(this, _assembleBulkMsg);
          /** Append a Carrier invite fragment (INVITE_REQUEST/RESPONSE) and return the
           *  full reassembled payload once every fragment has landed. Like
           *  #assembleBulkMsg, fragments are keyed + ordered by PACKET NUMBER so a
           *  reordered multi-fragment WebRTC SDP (offer/answer >1280 bytes) reassembles
           *  correctly instead of scrambling — a scrambled SDP left calls stuck
           *  "connecting". Caps at CARRIER_MAX_INVITE_DATA_LEN (8192). Single-fragment
           *  invites (the common case) complete on the first call. */
          __privateAdd(this, _assembleInvite);
          /** iOS Beagle sends files inline as a JSON envelope over (bulk)messages:
           *  {"data":"<base64>","fileExtension":".jpg","fileName":"…","type":"image"}.
           *  Detect it, decode, and emit an inlineFile event instead of dumping
           *  base64 into the chat. Returns true when handled. */
          __privateAdd(this, _tryEmitInlineFile);
          /** Android Beagle sends files as a BINARY envelope over the (bulk)message
           *  channel — [uint32 BE metaLen][meta JSON][raw bytes], no base64. Raw file
           *  bytes do not survive a UTF-8 decode, so this sniff runs on the UNDECODED
           *  payload; before it existed such a message landed in the chat as a wall of
           *  U+FFFD mojibake with the file lost. Returns true when handled. */
          __privateAdd(this, _tryEmitBinaryInlineFile);
          /** Toxcore handle_request_packet: parse the peer's PACKET_ID_REQUEST and
           *  (a) implicitly ACK every walked packet number that isn't requested,
           *  (b) retransmit the requested ones from the send buffer. */
          __privateAdd(this, _handleRetransmitRequest);
          /** Re-send a parked reliable packet with its ORIGINAL packet number but
           *  the CURRENT nonce counter (toxcore retransmissions do the same — the
           *  receiver reconstructs the nonce from the wire bytes, while the packet
           *  number slots it into the gap in their receive window). */
          __privateAdd(this, _resendReliablePacket);
          __privateAdd(this, _sendMessengerPacket);
          /**
           * Send `packet` to `friendId` over whichever transport(s) are
           * available. Tries UDP first when `session.remote` is set, then TCP
           * relay if `session.hasTcpRoute` is true. Sending over both is fine
           * — net_crypto's packet number / buffer_start logic dedups on the
           * receiving end (toxcore does the same when both transports are up).
           * Throws only if zero transports succeeded.
           */
          __privateAdd(this, _sendToFriend);
          __privateAdd(this, _scheduleProfileRetry);
          __privateAdd(this, _sendProfileAndGreeting);
          __privateAdd(this, _cacheFriendRemote);
          /** Single choke point for setting session.remote (the direct-UDP send
           *  endpoint). Never downgrades off a LOCKED physical-LAN path to a non-LAN
           *  endpoint (public srflx / Tailscale-exit hairpin): the LAN lock
           *  (session.lanRemoteHost) is decided at candidate-learn / maintenance time —
           *  the only places allowed the getPhysicalLanSubnets() syscall — so this guard
           *  is just a string compare and is safe to call from the per-packet hot path.
           *  Replacing the per-packet getPhysicalLanSubnets() call here was the fix for
           *  the CCTV CPU regression. */
          /** True when replying to host:port would never reach a peer: the host is
           *  one of our own TUN/overlay addresses (replies re-enter the overlay
           *  router and loop), or it's literally our own UDP socket. A self
           *  PHYSICAL address with a DIFFERENT port is routable — that's a
           *  same-host peer (e.g. the iOS simulator running on this Mac). */
          __privateAdd(this, _isUnroutableSelfSource);
          /**
           * @param observed true when host:port is the source of a datagram we
           *   actually received, false when it is an address the peer advertised.
           *   The distinction matters for self-addresses — see
           *   {@link #isUnroutableSelfSource}.
           */
          __privateAdd(this, _adoptRemote);
          __privateAdd(this, _rememberEndpointCandidate);
          /**
           * Learn our own server-reflexive (public) UDP endpoint by sending a
           * STUN binding-request to a bootnode on its STUN port (3478) over the
           * SAME #udp socket net_crypto uses — so the reflexive port matches
           * where our crypto data will actually arrive. Cached briefly because
           * a cone NAT's mapping is stable for the socket's lifetime.
           *
           * Returns undefined if no bootnode answers within the timeout.
           */
          __privateAdd(this, _gatherOwnSrflx);
          __privateAdd(this, _ensureTurnRelay);
          /** Wrap + send a packet to a peer's TURN relay address via our own
           *  allocation. Mirrors #sendPacket's carrier-magic framing so the peer's
           *  #onDatagram processes it identically to a direct datagram. */
          __privateAdd(this, _sendViaRelay);
          __privateAdd(this, _sendUdpEndpointOffer);
          /**
           * A friend told us their public UDP endpoint. Feed it as a high-value
           * candidate and immediately spray a few raw punch datagrams at it to
           * open our own cone-NAT mapping toward their address:port, then kick a
           * session initiation (the higher-pubkey side sends the cookie request;
           * both sides' mappings are now open so it gets through). Mirrors the
           * proven standalone hole-punch.
           */
          __privateAdd(this, _handleUdpEndpointOffer);
          __privateAdd(this, _collectSessionEndpointCandidates);
          __privateAdd(this, _initiateSession);
          /**
           * Last-resort same-LAN discovery: when we've sent cookie requests to all
           * known candidates for a friend and haven't heard back, broadcast cookie
           * requests to every host in our local /24 subnets at toxcore's standard
           * UDP ports. Whichever host is the friend will receive, decrypt with its
           * DHT secret key, and respond — the existing cookie response handler
           * matches by echo, so the right reply wins automatically.
           *
           * Useful in the iOS Beagle case where the peer's DHT-PK extras don't
           * include the peer's own LAN IP and platform sandboxing prevents normal
           * LAN discovery broadcasts from arriving.
           */
          __privateAdd(this, _sweepLanForCookieResponse);
          // ===================== classic toxcore DHT (ping / get_nodes) ==========
          // Answering and issuing these makes a JS peer a real DHT node — the thing
          // native C++/iOS/Android Carrier clients rely on to find a friend's live UDP
          // ip:port and net_crypto to it directly. Previously peer.js was a DHT *client*
          // only (bootstrap get_nodes), so it was invisible: native peers couldn't find
          // our UDP endpoint and every session fell back to the slow TCP relay.
          __privateAdd(this, _dhtPingId);
          // The known nodes closest (XOR distance) to `target`, UDP-only, with a valid
          // 32-byte key — the candidates a get_nodes lookup should converge through.
          __privateAdd(this, _closestKnownNodes);
          __privateAdd(this, _friendByDhtPk);
          __privateAdd(this, _handleDhtRpc);
          /** A DHT packet arrived from `host:port` with `senderDhtPk` in the clear.
           *  If that source matches a LAN-discovery rescue probe we sent (or an
           *  endpoint candidate of a stranded friend), adopt the pk as the friend's
           *  CURRENT DHT key. Natives rotate their DHT keypair every app restart, so
           *  a peer that only holds the old key sends cookie requests the friend
           *  cannot decrypt — correct endpoint, silent drop, stuck forever.
           *
           *  Safety: only unestablished sessions are touched (a live session's key
           *  is by definition correct), and if the adopted key turns out to belong
           *  to a different node, the crypto handshake cannot complete against the
           *  friend's REAL key — the rescue just fails and normal retries continue. */
          __privateAdd(this, _refreshFriendDhtKeyFromDht);
          __privateAdd(this, _sendDhtGetNodes);
          __privateAdd(this, _sendDhtPing);
          __privateAdd(this, _ensureDhtMaintenanceLoop);
          __privateAdd(this, _doDhtMaintenance);
          /**
           * Send an onion DHT-PK announcement to a friend so they learn our DHT
           * public key + endpoint hints. This is the bidirectional partner of the
           * inbound dhtpk_update flow: without this, a peer who accepted our friend
           * request has no way to find our UDP endpoint and net_crypto cannot start
           * from their side.
           *
           * Packet layout matches toxcore Messenger.c:send_dht_public_key_to_friend
           * — onion data with innerPacketId = CRYPTO_PACKET_DHTPK (156), payload =
           *   noReplay (8 BE) || dhtPublicKey (32) || extra (packed nodes).
           */
          __privateAdd(this, _sendOnionDhtPk);
          __privateAdd(this, _setFriendOnline);
          __privateAdd(this, _setFriendOffline);
          __privateAdd(this, _sendAnnounceAndWait);
          __privateAdd(this, _waitForAnnounceResponse);
          __privateAdd(this, _sendPacket);
          __privateAdd(this, _sendThroughOnionPath);
          /** Ranked hop candidates for a path to nodeD. Shared by the 3-hop UDP
           *  selector and the 2-hop TCP one — a relay stands in for node A, so a
           *  relayed path needs one fewer usable node than a direct one. */
          __privateAdd(this, _onionCandidatePool);
          /** Two hops (B and C) for a relayed onion request. The relay is node A, so
           *  this succeeds on node sets too thin for a direct 3-hop path — which is
           *  the browser's normal state, and where every request used to fall through
           *  to a UDP send that goes nowhere. */
          __privateAdd(this, _selectTcpOnionHops);
          __privateAdd(this, _selectOnionPath);
          __privateAdd(this, _sendDirectCryptoFriendRequest);
          __privateAdd(this, _debugLog2);
          /**
           * Verbose debug log — DHT plumbing chatter (per-onion-hop sends, decrypt
           * failures from in-flight stale responses, isStored=0 announce results,
           * etc.). Off by default even with DECENT_DEBUG=1; only emitted when
           * DECENT_DEBUG_VERBOSE=1 is also set.
           */
          __privateAdd(this, _debugVerboseLog);
          __privateAdd(this, _tracePacket);
          __privateAdd(this, _recordNodeSuccess);
          __privateAdd(this, _recordNodeFailure);
          /**
           * True if this node is currently shadowbanned for repeated failures.
           * Self-expires after the TTL set in #recordNodeFailure. Used by every
           * candidate-selection site to skip dead bootstraps without needing to
           * remove them from #knownNodes (which would lose neighbor info on
           * restart).
           */
          __privateAdd(this, _isNodeBlacklisted);
          __privateAdd(this, _nodeScore);
          __privateAdd(this, _pauseSelfAnnounce);
          __privateAdd(this, _runSelfAnnounce);
          __privateAdd(this, _loadPersistedFriends);
          __privateAdd(this, _persistFriends);
          __privateAdd(this, _opts3, void 0);
          __privateAdd(this, _events, new EventEmitter());
          /** While negotiating a non-LAN file, temporarily stop sending this friend
           *  UDP control traffic. Peer <=0.1.94 routes FILE_CONTROL UDP-only whenever
           *  it has seen recent inbound UDP, even when that public/NAT path is one-way.
           *  Repeated relay-only offers let that 4s freshness expire, after which the
           *  old peer returns ACCEPT/ACK over its reliable TCP relay. */
          __privateAdd(this, _fileRelayNegotiationUntil, /* @__PURE__ */ new Map());
          // Toxcore-standard file transfer (wire-compatible with native Carrier/toxcore).
          /** Which transport carries each friend's file packets — raw messenger
           *  packets (JS peers) or DNFT1 frames inside friend messages (native peers,
           *  whose Carrier SDK swallows 80-82 and drops 83). See compat/dnft1.ts. */
          __privateAdd(this, _dnft12, new Dnft1TransportPolicy());
          __privateAdd(this, _fileTransfer, new FileTransferManager((friendId, packetId, payload) => {
            if (packetId === PACKET_ID_FILE_SENDREQUEST) {
              const session = __privateGet(this, _friendSessions).get(friendId);
              const lan = !!session?.lanRemoteHost && session.remote?.host === session.lanRemoteHost;
              if (!lan)
                __privateGet(this, _fileRelayNegotiationUntil).set(friendId, Date.now() + 6e3);
              __privateGet(this, _dnft12).noteOfferSent(friendId);
            }
            if (__privateGet(this, _dnft12).useDnft1(friendId)) {
              return __privateMethod(this, _sendDnft1Frame, sendDnft1Frame_fn).call(this, friendId, packetId, payload);
            }
            return __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, packetId, payload);
          }, (event, payload) => {
            __privateGet(this, _events).emit(event, payload);
          }, (friendId) => {
            const session = __privateGet(this, _friendSessions).get(friendId);
            return !!session?.lanRemoteHost && session.remote?.host === session.lanRemoteHost;
          }, (friendId) => {
            const session = __privateGet(this, _friendSessions).get(friendId);
            const realUdpRemote = session?.remote && !session.remote.host?.startsWith("tcp:") && session.remote.port !== 0;
            if (realUdpRemote && session.lanRemoteHost && session.remote?.host === session.lanRemoteHost)
              return "lan";
            if (realUdpRemote && session.lastUdpRecvMs !== void 0 && Date.now() - session.lastUdpRecvMs < 4e3)
              return "udp-direct";
            return "relay";
          }, (friendId) => {
            const session = __privateGet(this, _friendSessions).get(friendId);
            const lan = !!session?.lanRemoteHost && session.remote?.host === session.lanRemoteHost;
            if (!lan) {
              __privateGet(this, _fileRelayNegotiationUntil).set(friendId, Date.now() + 3e4);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `file dead-path failover: pinning ${friendId} file traffic to relay for 30s`);
            }
          }));
          __privateAdd(this, _keyPair2, void 0);
          __privateAdd(this, _udp, new UdpTransport());
          // TURN relay (stable fallback path). One node-level allocation on its own
          // dedicated UDP socket — kept separate from #udp so net_crypto/DHT and the
          // TURN control protocol never share a socket (no demux). Inbound relayed
          // data is injected into #onDatagram as if it arrived directly from the
          // peer's relay address; outbound to a peer's relay address goes through
          // #turnClient.sendTo. Lazily allocated on first need.
          __privateAdd(this, _turnClient, void 0);
          __privateAdd(this, _turnSocket, void 0);
          __privateAdd(this, _ourRelayAddr, void 0);
          __privateAdd(this, _turnAllocating, void 0);
          __privateAdd(this, _bootstrap, void 0);
          __privateAdd(this, _dht, new LegacyDhtClient());
          __privateAdd(this, _knownNodes, void 0);
          __privateAdd(this, _announceDataKey, void 0);
          __privateAdd(this, _lastSelfAnnounceMs, 0);
          // Env vars OR an explicit option. A browser has no process.env, so peer
          // debugging there was simply unreachable — which is why the browser client
          // has been a black box every time it misbehaved. The option is the only way
          // in from a page.
          __privateAdd(this, _debug4, process.env.DECENT_DEBUG === "1" || process.env.DECENT_DEBUG_VERBOSE === "1");
          __privateAdd(this, _debugVerbose, process.env.DECENT_DEBUG_VERBOSE === "1");
          __privateAdd(this, _packetTrace, process.env.DECENT_PACKET_TRACE === "1");
          __privateAdd(this, _lastFriendRequestDispatch, void 0);
          __privateAdd(this, _nodeHealth, /* @__PURE__ */ new Map());
          /**
           * Soft blacklist: nodeId -> expiry timestamp (ms). Populated by
           * #recordNodeFailure once a node has accumulated NODE_BLACKLIST_THRESHOLD
           * consecutive failures without a success. Cleared by #recordNodeSuccess
           * (any successful round-trip lifts the ban). Each candidate-selection
           * site filters via #isNodeBlacklisted before adding a node to its queue.
           */
          __privateAdd(this, _nodeBlacklist, /* @__PURE__ */ new Map());
          __privateAdd(this, _pendingFriendRequests, /* @__PURE__ */ new Map());
          __privateAdd(this, _friends, /* @__PURE__ */ new Map());
          __privateAdd(this, _textHandlers, /* @__PURE__ */ new Set());
          __privateAdd(this, _pendingTextAcks, /* @__PURE__ */ new Map());
          __privateAdd(this, _deliveredTextIds, /* @__PURE__ */ new Set());
          __privateAdd(this, _deliveredTextOrder, []);
          __privateAdd(this, _friendStoreFile, void 0);
          __privateAdd(this, _persistSeq, 0);
          // makes atomic friend-store temp filenames unique per write
          __privateAdd(this, _cookieSymmetricKey, void 0);
          __privateAdd(this, _friendSessions, /* @__PURE__ */ new Map());
          /** source "ip:port" → friendId, so an inbound crypto-data packet is decrypted
           *  against the right session FIRST instead of scanning every friend (O(N) nacl
           *  ops/packet starved high-rate CCTV forwarding). Self-correcting: stale
           *  entries just miss and fall back to the scan. */
          __privateAdd(this, _cryptoEndpointIndex, /* @__PURE__ */ new Map());
          __privateAdd(this, _express, void 0);
          __privateAdd(this, _expressPollTimer, void 0);
          /**
           * Pool of persistent TCP relay connections. Carrier bootstrap nodes
           * also serve as TCP relay servers (toxcore TCP_server.c) on the same
           * pubkey. iOS Beagle peers advertise *only* TCP relay endpoints in
           * their DHT-PK extras (the 0x82 = TCP_FAMILY_IPV4 entries we saw),
           * so without this pool we cannot interop with iOS at all when their
           * UDP path is closed by NAT.
           */
          __privateAdd(this, _tcpRelays, void 0);
          __privateAdd(this, _selfAnnounceTimer, void 0);
          __privateAdd(this, _friendConnectionTimer, void 0);
          __privateAdd(this, _lanDiscoveryTimer, void 0);
          /** Recent LAN-discovery probe targets ("host:port" → friend we probed for).
           *  When a DHT packet later arrives from one of these sources, its sender pk
           *  is that friend's CURRENT DHT key — see #refreshFriendDhtKeyFromDht. */
          __privateAdd(this, _lanProbeTargets, /* @__PURE__ */ new Map());
          /** Exclusive turn-taking for OWN-HOST probe targets. Own-host targets
           *  (our IPs + loopback at native ports) are shared by every stranded
           *  friend, so concurrent probes overwrite each other's #lanProbeTargets
           *  mapping and the reply gets credited to whoever probed last (observed
           *  live: the simulator's key landed on an unrelated friend). One friend
           *  holds the slot at a time; per-friend candidate probes are unaffected. */
          __privateAdd(this, _ownHostProbeFriendId, void 0);
          __privateAdd(this, _ownHostProbeUntilMs, 0);
          __privateAdd(this, _dhtMaintenanceTimer, void 0);
          // Per-friend last DHT-PK send time, keyed by friendId, used even when no
          // session entry exists yet so the connection loop does not flood DHT-PK
          // requests when route discovery keeps failing.
          __privateAdd(this, _dhtPkSendCooldown, /* @__PURE__ */ new Map());
          /** Last ONION-routed endpoint lookup per friend. Separate from
           *  #dhtPkSendCooldown: they are two different expensive operations for the
           *  same friend, and sharing one timestamp would let whichever ran first
           *  suppress the other for a full budget. */
          __privateAdd(this, _onionLookupCooldown, /* @__PURE__ */ new Map());
          /** Consecutive failed endpoint lookups per (friend,target). Kept for
           *  diagnostics — it no longer narrows the sweep (see the width comment in
           *  #discoverAndCacheFriendEndpoint for why that was reverted). */
          __privateAdd(this, _onionLookupMisses, /* @__PURE__ */ new Map());
          // Per-friend cooldown for re-asserting the TCP-relay route toward an
          // unconnected friend (the "accepted friend that never connects" wedge —
          // requestRoute only fired once at startup and was never retried).
          __privateAdd(this, _routeRequestCooldown, /* @__PURE__ */ new Map());
          // The onion route that carried the last successful announce exchange with
          // each announce node ("host:port" -> path | "direct"). A node's ping_id is
          // bound to the SOURCE ip:port it saw the request arrive from (the path's
          // exit hop, or us when direct). Step2 of a self-announce must therefore
          // travel the exact route step1 used — re-selecting a path (scores mutate
          // between calls) or falling back direct changes the source, the node
          // rejects the ping_id, and the announce NEVER stores (observed: zero
          // isStored=2 across an entire run — nobody could find us to learn our
          // announce data key).
          __privateAdd(this, _announceRouteUsed, /* @__PURE__ */ new Map());
          // Last-known DHT pubkey per friend (identity id -> dht pk). Sessions get
          // deleted on timeout, but relay ROUTING_REQUESTs must keep using the key
          // the friend handshakes relays with — for native peers that's the DHT key,
          // not the identity key. Without this survives-teardown copy, every re-link
          // attempt after a session teardown silently used the wrong key.
          __privateAdd(this, _friendDhtKeys, /* @__PURE__ */ new Map());
          // Per-friend cooldown for RE-SENDING the friend-request to a friend that's
          // never been accepted (still "requested"). On reconnect / restart we must
          // re-offer — the original request can be lost while the friend was offline.
          __privateAdd(this, _friendRequestResendCooldown, /* @__PURE__ */ new Map());
          // Per-friend consecutive "no routes available" count for DHT-PK so the
          // backoff grows if a friend stays unreachable, instead of retrying every
          // 25s forever for stale persisted entries.
          __privateAdd(this, _dhtPkConsecutiveFailures, /* @__PURE__ */ new Map());
          __privateAdd(this, _lastSelfAnnounceStoredCount, -1);
          // Diagnostics for the TCP-relay onion path (announce/discovery over TCP).
          // Surfaced in dhtHealth so `agentnet diag` shows whether it's active without
          // needing verbose logs: sent = onion requests handed to relays, recv = onion
          // responses routed back over TCP.
          __privateAdd(this, _diagTcpOnionSent, 0);
          __privateAdd(this, _diagTcpOnionRecv, 0);
          // Per-friend last-logged route count from #discoverFriendRoutes so we
          // only emit a "routes=N for friend=…" debug line when it changes.
          __privateAdd(this, _lastLoggedRoutesForFriend, /* @__PURE__ */ new Map());
          // Per-friend last "cookie_sent" key (friend+host+port) so retries to the
          // same endpoint don't spam debug; the first attempt and any change still log.
          __privateAdd(this, _lastCookieSentKey, /* @__PURE__ */ new Map());
          // Per-friend last endpoint we logged via "endpoint_selected" — same purpose
          // as #lastCookieSentKey but for the selection step. Without dedupe the log
          // line fired every loop tick because `session.remote` oscillates between
          // candidates as inbound DHT-PK extras arrive.
          __privateAdd(this, _lastEndpointSelectedKey, /* @__PURE__ */ new Map());
          // Per-friend consecutive cookie-request failures (no matching cookie
          // response received before the next attempt). Used to compute exponential
          // backoff so an unreachable persisted friend stops dominating the friend
          // connection loop with cookie-request bursts every 8 seconds.
          __privateAdd(this, _cookieRetryCount, /* @__PURE__ */ new Map());
          // Per-friend "we already warned this peer is TCP-only" set.
          __privateAdd(this, _tcpOnlyWarningShown, /* @__PURE__ */ new Set());
          // Per-friend "we already noted there's no known endpoint" set so the
          // #initiateSession path doesn't spam every connection-loop tick.
          __privateAdd(this, _noEndpointWarned, /* @__PURE__ */ new Set());
          // Per-friend "we already logged that we're deferring initiation to the
          // higher-pubkey peer" set. The connection loop re-enters
          // #initiateSession every few seconds for every friend; without this
          // dedupe, lower-pubkey side floods the log with "deferring to peer".
          __privateAdd(this, _initiateSkipLogged, /* @__PURE__ */ new Set());
          // In-flight Carrier BULKMSG reassemblies, keyed `${friendId}:${tid}`.
          // Fragments are appended in arrival order (the lossless stream keeps
          // them ordered) and the message completes when totalsz bytes arrived.
          // Mirrors the C SDK's bulkmsgs hashtable with its 60s assembly timeout.
          __privateAdd(this, _bulkAssembly, /* @__PURE__ */ new Map());
          // Reassembly buffer for multi-fragment Carrier invites (WebRTC signaling).
          // Keyed by `${friendId}:${tid}`; namespaced separately from #bulkAssembly so
          // a bulkmsg and an invite that happen to share a tid can't collide.
          __privateAdd(this, _inviteAssembly, /* @__PURE__ */ new Map());
          // When we FIRST deferred initiation to a higher-pubkey peer (per friend).
          // If the peer hasn't established within the grace window we break the
          // defer and initiate ourselves (see #initiateSession). Cleared whenever a
          // session establishes so each outage gets a fresh window.
          __privateAdd(this, _initiateDeferSinceMs, /* @__PURE__ */ new Map());
          // Per-friend last time we deleted a desynced session (rate-limit; survives the
          // session deletion, unlike a field on the session object itself).
          __privateAdd(this, _lastDesyncDeleteMs, /* @__PURE__ */ new Map());
          // Cached server-reflexive (public) UDP endpoint of our #udp socket,
          // learned via STUN. Cone-NAT mappings are stable for the socket
          // lifetime, so we only re-probe every ~60s. Used to tell friends where
          // to hole-punch us (PACKET_ID_UDP_ENDPOINT).
          __privateAdd(this, _srflxCache, void 0);
          // Per-friend tracking sets so we send our nickname/status/greeting once
          // per session rather than on every PACKET_ID_ONLINE arrival.
          __privateAdd(this, _profileSentTo, /* @__PURE__ */ new Set());
          __privateAdd(this, _profileRetryAttempts, /* @__PURE__ */ new Map());
          __privateAdd(this, _profileRetryTimers, /* @__PURE__ */ new Map());
          __privateAdd(this, _greetingSentTo, /* @__PURE__ */ new Set());
          __privateAdd(this, _selfAnnouncePromise, void 0);
          __privateAdd(this, _selfAnnouncePauseDepth, 0);
          __privateAdd(this, _started, false);
          __privateAdd(this, _onDatagram, ({ data, remote, viaRelay }) => {
            if (!__privateGet(this, _keyPair2)) {
              return;
            }
            const packet = stripCarrierMagic(data);
            if (packet.length === 0) {
              return;
            }
            __privateMethod(this, _tracePacket, tracePacket_fn).call(this, "rx", packet, { host: remote.address, port: remote.port });
            if (process.env.DECENT_ANNOUNCE_DEBUG === "1") {
              Promise.resolve().then(() => (init_node_stub(), node_stub_exports)).then((fs) => {
                try {
                  fs.appendFileSync("/tmp/decent-udp-rx.log", `${(/* @__PURE__ */ new Date()).toISOString()} from=${remote.address}:${remote.port} firstByte=0x${packet[0]?.toString(16) ?? "??"} len=${packet.length}
`);
                } catch {
                }
              }).catch(() => {
              });
            }
            if (packet[0] === NET_PACKET_LAN_DISCOVERY && packet.length === 33 && __privateGet(this, _keyPair2) && !__privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote)) {
              const announcedPk = packet.slice(1, 33);
              if (!Buffer2.from(announcedPk).equals(Buffer2.from(__privateGet(this, _keyPair2).publicKey))) {
                const announcerId = carrierIdFromPublicKey(announcedPk);
                void __privateMethod(this, _sendDhtPing, sendDhtPing_fn).call(this, { host: remote.address, port: remote.port, pk: announcerId, isTcp: false }).catch(() => void 0);
              }
              return;
            }
            if ((packet[0] === NET_PACKET_PING_REQUEST || packet[0] === NET_PACKET_PING_RESPONSE || packet[0] === NET_PACKET_GET_NODES2 || packet[0] === NET_PACKET_SEND_NODES) && !__privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote)) {
              __privateMethod(this, _handleDhtRpc, handleDhtRpc_fn).call(this, packet, remote);
              return;
            }
            if (packet[0] === NET_PACKET_CRYPTO) {
              const opened = openToxDhtCryptoRequest(packet, __privateGet(this, _keyPair2));
              if (!opened) {
                return;
              }
              if (opened.requestId === CRYPTO_PACKET_DHTPK) {
                __privateMethod(this, _handleOnionDhtPk, handleOnionDhtPk_fn).call(this, opened.senderPublicKey, opened.data);
                return;
              }
              if (opened.requestId !== CRYPTO_PACKET_FRIEND_REQ) {
                return;
              }
              const friendRequest = splitFriendRequestPayload(opened.data);
              if (!friendRequest) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `direct friend request payload decode failed from ${remote.address}:${remote.port}`);
                return;
              }
              __privateMethod(this, _emitFriendRequest, emitFriendRequest_fn).call(this, opened.senderPublicKey, friendRequest.carrierPacket, friendRequest.nospam);
              return;
            }
            if (packet[0] === NET_PACKET_COOKIE_REQUEST && __privateGet(this, _cookieSymmetricKey)) {
              const request = openCookieRequest(packet, {
                receiverDhtSecretKey: __privateGet(this, _keyPair2).secretKey
              });
              if (!request) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie request parse failed from ${remote.address}:${remote.port}`);
                return;
              }
              const senderId = carrierIdFromPublicKey(request.senderRealPublicKey);
              const fromTcp = __privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie request received from ${senderId} via ${remote.address}:${remote.port}${fromTcp ? " (tcp)" : ""}`);
              if (!fromTcp) {
                __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, senderId, remote.address, remote.port, request.senderRealPublicKey, request.senderDhtPublicKey);
              } else if (request.senderDhtPublicKey && request.senderDhtPublicKey.length === 32) {
                const session = __privateGet(this, _friendSessions).get(senderId);
                if (session && !(session.friendDhtPublicKey && Buffer2.from(session.friendDhtPublicKey).equals(Buffer2.from(request.senderDhtPublicKey)))) {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dht_key_from_tcp_cookie friend=${senderId} new=${carrierIdFromPublicKey(request.senderDhtPublicKey)}`);
                  session.friendDhtPublicKey = request.senderDhtPublicKey;
                }
                __privateMethod(this, _learnFriendDhtKey, learnFriendDhtKey_fn).call(this, senderId, request.senderDhtPublicKey);
              }
              const response = createCookieResponse({
                request,
                receiverDhtSecretKey: __privateGet(this, _keyPair2).secretKey,
                receiverCookieSymmetricKey: __privateGet(this, _cookieSymmetricKey)
              });
              if (fromTcp) {
                const sent = __privateGet(this, _tcpRelays)?.sendOobToFriend(request.senderDhtPublicKey, response) ?? 0;
                if (sent > 0) {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie response sent via tcp_oob to ${senderId} dhtpk=${carrierIdFromPublicKey(request.senderDhtPublicKey)} (relays=${sent})`);
                } else {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie response: no tcp relay accepted oob send for ${senderId}`);
                }
              } else if (__privateMethod(this, _isUnroutableSelfSource, isUnroutableSelfSource_fn).call(this, remote.address, remote.port, true)) {
                const sent = __privateGet(this, _tcpRelays)?.sendOobToFriend(request.senderDhtPublicKey, response) ?? 0;
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie response: source ${remote.address}:${remote.port} is an unroutable self-source \u2014 replied via tcp_oob instead (relays=${sent})`);
              } else {
                void __privateMethod(this, _sendPacket, sendPacket_fn).call(this, response, { host: remote.address, port: remote.port }).then(() => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie response sent to ${remote.address}:${remote.port}`);
                }).catch((error) => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie response send failed: ${error.message}`);
                });
              }
              return;
            }
            if (packet[0] === NET_PACKET_COOKIE_RESPONSE) {
              let matchedFriendId;
              let matchedSession;
              let opened;
              for (const [friendId, session] of __privateGet(this, _friendSessions)) {
                if (!session.friendRealPublicKey) {
                  continue;
                }
                const hasPending = session.pendingEcho !== void 0;
                const recent = session.recentEchoes;
                if (!hasPending && (!recent || recent.size === 0)) {
                  continue;
                }
                const responsePeerDhtKey = session.pendingCookiePeerDhtPublicKey ?? session.friendDhtPublicKey;
                if (!responsePeerDhtKey) {
                  continue;
                }
                const candidate = openCookieResponse(packet, {
                  receiverDhtPublicKey: responsePeerDhtKey,
                  senderDhtSecretKey: __privateGet(this, _keyPair2).secretKey
                });
                if (!candidate) {
                  continue;
                }
                const echoMatches = hasPending && candidate.echo === session.pendingEcho || recent !== void 0 && recent.has(candidate.echo);
                if (!echoMatches) {
                  continue;
                }
                matchedFriendId = friendId;
                matchedSession = session;
                opened = candidate;
                break;
              }
              if (!matchedFriendId || !matchedSession || !opened) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie response from ${remote.address}:${remote.port} ignored \u2014 no echo/key match`);
                return;
              }
              if (!matchedSession.friendRealPublicKey) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie response from ${remote.address}:${remote.port} ignored \u2014 missing friend real key`);
                return;
              }
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie_recv friend=${matchedFriendId} from=${remote.address}:${remote.port} sending_handshake=1`);
              __privateGet(this, _cookieRetryCount).delete(matchedFriendId);
              const handshake = createCryptoHandshake({
                recipientCookie: opened.cookie,
                baseNonce: matchedSession.ourBaseNonce,
                sessionPublicKey: matchedSession.ourSessionKeyPair.publicKey,
                senderRealSecretKey: __privateGet(this, _keyPair2).secretKey,
                senderRealPublicKey: __privateGet(this, _keyPair2).publicKey,
                senderDhtPublicKey: __privateGet(this, _keyPair2).publicKey,
                receiverRealPublicKey: matchedSession.friendRealPublicKey,
                receiverDhtPublicKey: matchedSession.friendDhtPublicKey ?? matchedSession.friendRealPublicKey,
                localCookieSymmetricKey: __privateGet(this, _cookieSymmetricKey)
              });
              matchedSession.handshakeSentMs = Date.now();
              matchedSession.pendingEcho = void 0;
              matchedSession.pendingCookiePeerDhtPublicKey = void 0;
              const fromTcp = __privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote);
              if (!fromTcp) {
                __privateMethod(this, _adoptRemote, adoptRemote_fn).call(this, matchedSession, remote.address, remote.port, true);
              } else {
                matchedSession.hasTcpRoute = true;
              }
              const sendHandshake = async () => {
                if (fromTcp) {
                  let dataOk = false;
                  try {
                    await __privateMethod(this, _sendToFriend, sendToFriend_fn).call(this, matchedFriendId, handshake);
                    dataOk = true;
                  } catch {
                  }
                  let oobSent = 0;
                  if (__privateGet(this, _tcpRelays) && matchedSession.friendDhtPublicKey) {
                    oobSent = __privateGet(this, _tcpRelays).sendOobToFriend(matchedSession.friendDhtPublicKey, handshake);
                  }
                  if (!dataOk && oobSent === 0) {
                    throw new Error("handshake send failed via both data and oob paths");
                  }
                  return `tcp:${matchedFriendId}${dataOk ? " (data)" : ""}${oobSent > 0 ? ` (oob\xD7${oobSent})` : ""}`;
                }
                await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, handshake, matchedSession.remote);
                return `${matchedSession.remote.host}:${matchedSession.remote.port}`;
              };
              void sendHandshake().then((dest) => {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `hs_sent friend=${matchedFriendId} to=${dest}`);
              }).catch((error) => {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto handshake send failed: ${error.message}`);
              });
              return;
            }
            if (packet[0] === NET_PACKET_CRYPTO_HS && __privateGet(this, _cookieSymmetricKey)) {
              const hs = openCryptoHandshake(packet, {
                receiverRealSecretKey: __privateGet(this, _keyPair2).secretKey,
                receiverCookieSymmetricKey: __privateGet(this, _cookieSymmetricKey)
              });
              if (!hs) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto handshake parse failed from ${remote.address}:${remote.port}`);
                return;
              }
              const friendId = carrierIdFromPublicKey(hs.senderRealPublicKey);
              let state = __privateGet(this, _friendSessions).get(friendId);
              const weInitiated = state !== void 0 && state.handshakeSentMs !== void 0;
              if (state && state.established && state.peerSessionPublicKey && bytesEqual3(state.peerSessionPublicKey, hs.sessionPublicKey)) {
                if (__privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote)) {
                  state.hasTcpRoute = true;
                } else {
                  __privateMethod(this, _adoptRemote, adoptRemote_fn).call(this, state, remote.address, remote.port, true);
                }
                const now = Date.now();
                const peerSendingUndecryptable = state.undecryptableRecvMs !== void 0 && now - state.undecryptableRecvMs < FRIEND_TIMEOUT_MS;
                const resyncDue = now - (state.lastResyncHandshakeMs ?? 0) > 2e3;
                if (resyncDue) {
                  state.lastResyncHandshakeMs = now;
                  const reply = createCryptoHandshake({
                    recipientCookie: hs.embeddedCookie,
                    baseNonce: state.ourBaseNonce,
                    sessionPublicKey: state.ourSessionKeyPair.publicKey,
                    senderRealSecretKey: __privateGet(this, _keyPair2).secretKey,
                    senderRealPublicKey: __privateGet(this, _keyPair2).publicKey,
                    senderDhtPublicKey: __privateGet(this, _keyPair2).publicKey,
                    receiverRealPublicKey: hs.senderRealPublicKey,
                    receiverDhtPublicKey: hs.senderDhtPublicKey,
                    localCookieSymmetricKey: __privateGet(this, _cookieSymmetricKey)
                  });
                  const sendResync = () => __privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote) ? Promise.resolve(__privateGet(this, _tcpRelays)?.sendOobToFriend(hs.senderDhtPublicKey, reply) ?? 0) : __privateMethod(this, _sendPacket, sendPacket_fn).call(this, reply, { host: remote.address, port: remote.port });
                  void sendResync().then(() => __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `hs_recv duplicate \u2014 re-sent our handshake to resync friend=${friendId} reason=${peerSendingUndecryptable ? "undecryptable-data" : "duplicate-handshake"}`)).catch((error) => __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `resync handshake failed for ${friendId}: ${error.message}`));
                  return;
                }
                __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `hs_recv duplicate friend=${friendId} remote=${remote.address}:${remote.port} (session preserved)`);
                return;
              }
              if (!state) {
                state = {
                  ourSessionKeyPair: createEphemeralKeyPair(),
                  ourBaseNonce: randomBytes2(24),
                  friendRealPublicKey: hs.senderRealPublicKey,
                  friendDhtPublicKey: hs.senderDhtPublicKey
                };
                __privateGet(this, _friendSessions).set(friendId, state);
              } else {
                if (!state.friendRealPublicKey)
                  state.friendRealPublicKey = hs.senderRealPublicKey;
                if (hs.senderDhtPublicKey && hs.senderDhtPublicKey.length === 32 && !(state.friendDhtPublicKey && Buffer2.from(state.friendDhtPublicKey).equals(Buffer2.from(hs.senderDhtPublicKey)))) {
                  if (state.friendDhtPublicKey) {
                    __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dht_key_from_hs friend=${friendId} new=${carrierIdFromPublicKey(hs.senderDhtPublicKey)}`);
                  }
                  state.friendDhtPublicKey = hs.senderDhtPublicKey;
                }
              }
              if (hs.senderDhtPublicKey && hs.senderDhtPublicKey.length === 32) {
                __privateMethod(this, _learnFriendDhtKey, learnFriendDhtKey_fn).call(this, friendId, hs.senderDhtPublicKey);
              }
              const wasEstablished = state.established === true;
              const prevPeerSessionPk = state.peerSessionPublicKey;
              const isNewSession = !prevPeerSessionPk || !bytesEqual3(prevPeerSessionPk, hs.sessionPublicKey);
              if (state.established && isNewSession && state.sessionEstablishedAtMs !== void 0) {
                const sinceEstablished = Date.now() - state.sessionEstablishedAtMs;
                const lastAlive = state.lastPingRecvMs ?? state.sessionEstablishedAtMs;
                const currentSessionAlive = Date.now() - lastAlive < FRIEND_TIMEOUT_MS;
                const peerReKeyed = state.undecryptableRecvMs !== void 0 && state.undecryptableRecvMs > (state.lastPingRecvMs ?? 0);
                const now = Date.now();
                const sameRehsKey = state.rehsSessionPublicKey !== void 0 && bytesEqual3(state.rehsSessionPublicKey, hs.sessionPublicKey);
                const rehsWindowExpired = state.rehsLastMs === void 0 || now - state.rehsLastMs > REHS_WINDOW_MS;
                if (!sameRehsKey || rehsWindowExpired) {
                  state.rehsSessionPublicKey = hs.sessionPublicKey.slice();
                  state.rehsCount = 1;
                  state.rehsFirstMs = now;
                } else {
                  state.rehsCount = (state.rehsCount ?? 0) + 1;
                }
                state.rehsLastMs = now;
                const rehsElapsed = now - (state.rehsFirstMs ?? now);
                const persistentRehs = (state.rehsCount ?? 0) >= REHS_ACCEPT_COUNT && rehsElapsed >= REHS_ACCEPT_MS && rehsElapsed <= REHS_WINDOW_MS;
                if (sinceEstablished > 1e3 && currentSessionAlive && !peerReKeyed && !persistentRehs) {
                  __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `hs_recv ignored friend=${friendId} (new session pubkey on live established session, ${sinceEstablished}ms after establish, attempts=${state.rehsCount ?? 0})`);
                  return;
                }
                if (persistentRehs) {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `hs_recv accepting persistent re-handshake friend=${friendId} (attempts=${state.rehsCount}, elapsed=${rehsElapsed}ms)`);
                }
                if (peerReKeyed) {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `hs_recv accepting re-handshake friend=${friendId} (peer re-keyed: undecryptable data since last good packet)`);
                }
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `hs_recv accepting re-handshake friend=${friendId} (current session wedged/dead, lastPingRecv=${state.lastPingRecvMs ? Date.now() - state.lastPingRecvMs + "ms ago" : "never"})`);
              }
              state.peerSessionPublicKey = hs.sessionPublicKey;
              state.peerBaseNonce = hs.baseNonce.slice();
              state.sessionSharedKey = import_tweetnacl13.default.box.before(hs.sessionPublicKey, state.ourSessionKeyPair.secretKey);
              state.established = true;
              state.sessionEstablishedAtMs = Date.now();
              state.rehsCount = void 0;
              state.rehsFirstMs = void 0;
              state.rehsLastMs = void 0;
              state.rehsSessionPublicKey = void 0;
              __privateGet(this, _initiateDeferSinceMs).delete(friendId);
              __privateGet(this, _initiateSkipLogged).delete(friendId);
              if (__privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote)) {
                state.hasTcpRoute = true;
              } else {
                __privateMethod(this, _adoptRemote, adoptRemote_fn).call(this, state, remote.address, remote.port, true);
              }
              if (isNewSession) {
                state.sendPacketNumber = 0;
                state.receiveBufferStart = 0;
                state.sendArray = void 0;
                state.sendBufferStartNum = void 0;
                state.recvBuffer = void 0;
                state.lastRecvRequestMs = void 0;
              } else {
                state.sendPacketNumber ?? (state.sendPacketNumber = 0);
                state.receiveBufferStart ?? (state.receiveBufferStart = 0);
              }
              if (isNewSession)
                state.lastPingRecvMs = void 0;
              state.pendingEcho = void 0;
              state.pendingCookiePeerDhtPublicKey = void 0;
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `hs_recv friend=${friendId} initiated=${weInitiated ? 1 : 0} remote=${remote.address}:${remote.port}`);
              if (!wasEstablished) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend_connected friend=${friendId} remote=${remote.address}:${remote.port}`);
                const r = state.remote;
                const remoteIsSameLan = !!r && isPrivateAddress(r.host) && !isCgnatAddress(r.host) && getPhysicalLanSubnets().some((s) => isInIpv4Subnet(r.host, s));
                const haveLanToOffer = getPhysicalLanAddresses().some((ip) => isPrivateAddress(ip) && !isCgnatAddress(ip));
                if (state.hasTcpRoute && !r || !remoteIsSameLan && haveLanToOffer) {
                  void __privateMethod(this, _sendUdpEndpointOffer, sendUdpEndpointOffer_fn).call(this, friendId).catch(() => void 0);
                }
              }
              const friend = __privateGet(this, _friends).get(friendId);
              if (friend) {
                __privateGet(this, _friends).set(friendId, {
                  ...friend,
                  status: "online",
                  acceptedAt: friend.acceptedAt ?? Date.now(),
                  remoteHost: remote.address,
                  remotePort: remote.port
                });
                __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
              }
              if (!wasEstablished) {
                __privateGet(this, _events).emit("friendConnection", {
                  pubkey: friendId,
                  status: "connected"
                });
              }
              if (!weInitiated) {
                const reply = createCryptoHandshake({
                  recipientCookie: hs.embeddedCookie,
                  baseNonce: state.ourBaseNonce,
                  sessionPublicKey: state.ourSessionKeyPair.publicKey,
                  senderRealSecretKey: __privateGet(this, _keyPair2).secretKey,
                  senderRealPublicKey: __privateGet(this, _keyPair2).publicKey,
                  senderDhtPublicKey: __privateGet(this, _keyPair2).publicKey,
                  receiverRealPublicKey: hs.senderRealPublicKey,
                  receiverDhtPublicKey: hs.senderDhtPublicKey,
                  localCookieSymmetricKey: __privateGet(this, _cookieSymmetricKey)
                });
                const replyFromTcp = __privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote);
                const sendReply = () => {
                  if (replyFromTcp) {
                    const sent = __privateGet(this, _tcpRelays)?.sendOobToFriend(hs.senderDhtPublicKey, reply) ?? 0;
                    return Promise.resolve(sent);
                  }
                  return __privateMethod(this, _sendPacket, sendPacket_fn).call(this, reply, { host: remote.address, port: remote.port });
                };
                void sendReply().then(() => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto handshake reply sent to ${friendId}${replyFromTcp ? " (tcp)" : ""}`);
                  void __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_ONLINE, new Uint8Array()).catch((error) => {
                    __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `send online packet failed: ${error.message}`);
                  });
                }).catch((error) => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto handshake reply failed: ${error.message}`);
                });
              } else {
                void __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_ONLINE, new Uint8Array()).catch((error) => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `send online packet failed: ${error.message}`);
                });
              }
              return;
            }
            if (packet[0] === NET_PACKET_CRYPTO_DATA) {
              const epKey = `${remote.address}:${remote.port}`;
              const hinted = __privateGet(this, _cryptoEndpointIndex).get(epKey);
              const ids = hinted !== void 0 ? [hinted, ...__privateGet(this, _friendSessions).keys()] : __privateGet(this, _friendSessions).keys();
              for (const friendId of ids) {
                const state = __privateGet(this, _friendSessions).get(friendId);
                if (!state || !state.sessionSharedKey || !state.peerBaseNonce) {
                  continue;
                }
                const opened = openCryptoDataPacket(packet, {
                  sessionSharedKey: state.sessionSharedKey,
                  recvBaseNonce: state.peerBaseNonce
                });
                if (!opened) {
                  continue;
                }
                if (hinted !== friendId) {
                  if (__privateGet(this, _cryptoEndpointIndex).size > 4096)
                    __privateGet(this, _cryptoEndpointIndex).clear();
                  __privateGet(this, _cryptoEndpointIndex).set(epKey, friendId);
                }
                const innerKind = opened.payload.length > 0 ? opened.payload[0] : -1;
                const isSingleTransportKind = __privateGet(this, _opts3).bulkDataPacketId !== void 0 && innerKind === __privateGet(this, _opts3).bulkDataPacketId || innerKind === PACKET_ID_FILE_DATA || innerKind === PACKET_ID_FILE_FEC;
                state.lastPingRecvMs = Date.now();
                state.rehsCount = void 0;
                state.rehsFirstMs = void 0;
                state.rehsLastMs = void 0;
                state.rehsSessionPublicKey = void 0;
                if (__privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote)) {
                  state.hasTcpRoute = true;
                } else if (viaRelay) {
                  if (!state.lastRelayRecvMs) {
                    __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `relay_confirmed friend=${friendId} via=${remote.address}:${remote.port} (TURN relay path live)`);
                  }
                  state.lastRelayRecvMs = Date.now();
                } else if (__privateMethod(this, _isUnroutableSelfSource, isUnroutableSelfSource_fn).call(this, remote.address, remote.port, true)) {
                } else {
                  __privateMethod(this, _adoptRemote, adoptRemote_fn).call(this, state, remote.address, remote.port, true);
                  if (!state.lanRemoteHost && isPrivateAddress(remote.address) && !isCgnatAddress(remote.address) && !__privateMethod(this, _isUnroutableSelfSource, isUnroutableSelfSource_fn).call(this, remote.address, remote.port, true)) {
                    state.lanRemoteHost = remote.address;
                    __privateMethod(this, _rememberEndpointCandidate, rememberEndpointCandidate_fn).call(this, state, remote.address, remote.port);
                    __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `lan_lock_confirmed friend=${friendId} host=${remote.address}:${remote.port} (decrypted UDP source)`);
                  }
                  if (!state.lastUdpRecvMs) {
                    __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `udp_confirmed friend=${friendId} via=${remote.address}:${remote.port} (direct UDP path live)`);
                  }
                  state.lastUdpRecvMs = Date.now();
                }
                if (!isSingleTransportKind && opened.packetNumber < (state.receiveBufferStart ?? 0)) {
                  let reorderable = false;
                  if (innerKind === PACKET_ID_MESSAGE) {
                    try {
                      const t = decodeCarrierPacket(opened.payload.slice(1)).type;
                      reorderable = t === PACKET_TYPE_BULKMSG || t === PACKET_TYPE_INVITE_REQUEST || t === PACKET_TYPE_INVITE_RESPONSE;
                    } catch {
                    }
                  }
                  if (!reorderable)
                    continue;
                }
                {
                  const trackedLow = (state.peerBaseNonce[state.peerBaseNonce.length - 2] << 8 | state.peerBaseNonce[state.peerBaseNonce.length - 1]) >>> 0;
                  const fwd = (opened.nonceLast2 - trackedLow & 65535) < 32768;
                  if (fwd) {
                    state.peerBaseNonce = opened.usedNonce.slice();
                    incrementNonce(state.peerBaseNonce);
                  }
                }
                const kind = opened.payload[0] ?? -1;
                const inner = opened.payload.slice(1);
                const consumesReliableNumber = kind !== PACKET_ID_REQUEST && kind < 192 && kind !== __privateGet(this, _opts3).bulkDataPacketId;
                if (consumesReliableNumber) {
                  state.receiveBufferStart = Math.max(state.receiveBufferStart ?? 0, opened.packetNumber + 1 >>> 0);
                }
                __privateMethod(this, _deliverLosslessPayload, deliverLosslessPayload_fn).call(this, friendId, state, kind, inner, remote, opened.packetNumber);
                return;
              }
              if (remote.address.startsWith("tcp:")) {
                let desyncFriendId = remote.address.slice(4);
                try {
                  desyncFriendId = __privateMethod(this, _friendIdForPoolKey, friendIdForPoolKey_fn).call(this, base58ToBytes(desyncFriendId));
                } catch {
                }
                const ds = __privateGet(this, _friendSessions).get(desyncFriendId);
                if (ds?.established) {
                  ds.undecryptableRecvMs = Date.now();
                  __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `undecryptable crypto data from ${desyncFriendId} (peer likely re-keyed)`);
                }
              }
              __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `crypto data received from ${remote.address}:${remote.port} but no session matched`);
              return;
            }
            if (packet[0] === NET_PACKET_ONION_DATA_RESPONSE && __privateGet(this, _announceDataKey)) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, "onion data response received");
              const routed = openOnionDataResponse(packet, {
                dataSecretKey: __privateGet(this, _announceDataKey).secretKey
              });
              if (!routed) {
                const pkPreview = Buffer2.from(packet.slice(25, 57)).toString("hex").slice(0, 16);
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion data response decrypt failed from=${remote.address}:${remote.port} len=${packet.length} ourDataPk=${Buffer2.from(__privateGet(this, _announceDataKey).publicKey).toString("hex").slice(0, 16)} pkAt25=${pkPreview}`);
                return;
              }
              const onionData = openOnionDataPacket(routed.payload, {
                receiverSecretKey: __privateGet(this, _keyPair2).secretKey,
                nonce: routed.nonce
              });
              if (!onionData) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, "onion friend request payload decrypt failed");
                return;
              }
              if (onionData.innerPacketId !== ONION_FRIEND_REQUEST_ID) {
                if (onionData.innerPacketId === CRYPTO_PACKET_DHTPK) {
                  __privateMethod(this, _handleOnionDhtPk, handleOnionDhtPk_fn).call(this, onionData.senderPublicKey, onionData.innerPayload);
                  return;
                }
                const previewLen = Math.min(48, onionData.innerPayload.length);
                const previewHex = Buffer2.from(onionData.innerPayload.slice(0, previewLen)).toString("hex");
                const senderId = carrierIdFromPublicKey(onionData.senderPublicKey);
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion data response ignored innerPacketId=${onionData.innerPacketId} sender=${senderId} payloadLen=${onionData.innerPayload.length} payloadPreviewHex=${previewHex}`);
                return;
              }
              const friendRequest = splitFriendRequestPayload(onionData.innerPayload);
              if (!friendRequest) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, "onion friend request payload decode failed");
                return;
              }
              __privateMethod(this, _emitFriendRequest, emitFriendRequest_fn).call(this, onionData.senderPublicKey, friendRequest.carrierPacket, friendRequest.nospam);
            }
          });
          __privateSet(this, _opts3, {
            ...opts,
            compatibilityMode: opts.compatibilityMode ?? "legacy"
          });
          if (opts.debug)
            __privateSet(this, _debug4, true);
          if (opts.debugVerbose) {
            __privateSet(this, _debug4, true);
            __privateSet(this, _debugVerbose, true);
          }
          __privateSet(this, _knownNodes, [...opts.bootstrapNodes]);
          __privateSet(this, _friendStoreFile, opts.friendStoreFile ?? `${opts.keyFile}.friends.json`);
          if (opts.fileResumeDir)
            __privateGet(this, _fileTransfer).setResumeDir(opts.fileResumeDir);
        }
        static async create(opts) {
          if (opts.compatibilityMode && opts.compatibilityMode !== "legacy") {
            throw new Error("Only legacy compatibility mode is supported in this skeleton");
          }
          if (!opts.bootstrapNodes.length) {
            throw new Error("At least one bootstrap node is required");
          }
          return new _Peer(opts);
        }
        async start() {
          if (__privateGet(this, _started)) {
            return;
          }
          __privateSet(this, _keyPair2, await loadOrCreateKeyPair(__privateGet(this, _opts3).keyFile));
          __privateSet(this, _bootstrap, new LegacyBootstrapClient({
            nodes: __privateGet(this, _opts3).bootstrapNodes,
            keyPair: __privateGet(this, _keyPair2),
            transport: __privateGet(this, _udp)
          }));
          {
            const announceKeyPath = join(dirname(__privateGet(this, _opts3).keyFile), "announce-data-key.json");
            __privateSet(this, _announceDataKey, await loadOrCreateKeyPair(announceKeyPath));
          }
          __privateSet(this, _cookieSymmetricKey, randomBytes2(32));
          await __privateMethod(this, _loadPersistedFriends, loadPersistedFriends_fn).call(this);
          if (__privateGet(this, _opts3).expressNodes && __privateGet(this, _opts3).expressNodes.length > 0) {
            __privateSet(this, _express, new LegacyExpressClient({
              nodes: __privateGet(this, _opts3).expressNodes,
              selfKeyPair: __privateGet(this, _keyPair2),
              selfUserId: this.userid(),
              selfAddress: this.address(),
              callbacks: {
                onOfflineFriendRequest: (fromUserId, packet) => {
                  __privateMethod(this, _emitOfflineFriendRequest, emitOfflineFriendRequest_fn).call(this, fromUserId, packet);
                },
                onOfflineFriendMessage: (fromUserId, packet) => {
                  __privateMethod(this, _emitOfflineFriendMessage, emitOfflineFriendMessage_fn).call(this, fromUserId, packet);
                }
              }
            }));
          }
          __privateGet(this, _udp).on("datagram", __privateGet(this, _onDatagram));
          await __privateGet(this, _udp).start({ port: __privateGet(this, _opts3).udpPort });
          if (__privateGet(this, _opts3).bootstrapNodes.length > 0) {
            const maxRelays = Number.parseInt(process.env.DECENT_TCP_MAX_RELAYS ?? "3", 10);
            __privateSet(this, _tcpRelays, new TcpRelayPool({
              relays: __privateGet(this, _opts3).bootstrapNodes,
              selfKeyPair: __privateGet(this, _keyPair2),
              maxConnections: maxRelays,
              label: __privateGet(this, _opts3).debugLabel
            }));
            __privateGet(this, _tcpRelays).on("peerData", (friendKey, payload) => {
              __privateMethod(this, _handleTcpDatagram, handleTcpDatagram_fn).call(this, friendKey, payload);
            });
            __privateGet(this, _tcpRelays).on("friendOnline", (friendKey) => {
              const friendId = __privateMethod(this, _friendIdForPoolKey, friendIdForPoolKey_fn).call(this, friendKey);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `tcp_relay friend_online ${carrierIdFromPublicKey(friendKey)} (friend=${friendId})`);
              const session = __privateGet(this, _friendSessions).get(friendId) ?? __privateMethod(this, _newSessionShell, newSessionShell_fn).call(this);
              session.hasTcpRoute = true;
              if (friendId === carrierIdFromPublicKey(friendKey)) {
                session.friendRealPublicKey ?? (session.friendRealPublicKey = new Uint8Array(friendKey));
              } else {
                session.friendDhtPublicKey ?? (session.friendDhtPublicKey = new Uint8Array(friendKey));
              }
              __privateGet(this, _friendSessions).set(friendId, session);
              if (!session.established) {
                __privateGet(this, _cookieRetryCount).delete(friendId);
                void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch(() => {
                });
              }
            });
            __privateGet(this, _tcpRelays).on("friendOffline", (friendKey) => {
              const friendId = __privateMethod(this, _friendIdForPoolKey, friendIdForPoolKey_fn).call(this, friendKey);
              const session = __privateGet(this, _friendSessions).get(friendId);
              if (session) {
                session.hasTcpRoute = false;
              }
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `tcp_relay friend_offline ${carrierIdFromPublicKey(friendKey)} (friend=${friendId})`);
              __privateGet(this, _tcpRelays)?.requestRoute(friendKey);
            });
            __privateGet(this, _tcpRelays).on("status", (connected, total) => {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `tcp_pool ${connected}/${total} relays connected`);
            });
            __privateGet(this, _tcpRelays).on("oob", (senderKey, payload) => {
              if (payload.length === 0)
                return;
              const kind = payload[0];
              if (kind !== NET_PACKET_COOKIE_REQUEST && kind !== NET_PACKET_COOKIE_RESPONSE && kind !== NET_PACKET_CRYPTO_HS) {
                return;
              }
              const senderId = carrierIdFromPublicKey(senderKey);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `tcp_oob_recv from ${senderId} kind=0x${kind.toString(16)} len=${payload.length}`);
              __privateGet(this, _tcpRelays)?.requestRoute(senderKey);
              __privateMethod(this, _handleTcpDatagram, handleTcpDatagram_fn).call(this, senderKey, payload);
            });
            __privateGet(this, _tcpRelays).on("onionResponse", (packet) => {
              if (packet.length === 0)
                return;
              __privateSet(this, _diagTcpOnionRecv, __privateGet(this, _diagTcpOnionRecv) + 1);
              __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `tcp onion response received (${packet.length} bytes, type=${packet[0]})`);
              __privateGet(this, _udp).emit("datagram", {
                data: Buffer2.from(packet),
                remote: { address: "tcp-relay", port: 0 },
                viaRelay: true
              });
            });
            void __privateGet(this, _tcpRelays).start().catch((error) => {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `tcp pool initial start failed: ${error.message}`);
            });
            for (const [friendId, friend] of __privateGet(this, _friends).entries()) {
              try {
                const pk = base58ToBytes(friend.pubkey);
                if (pk.length === 32)
                  __privateGet(this, _tcpRelays).requestRoute(pk);
              } catch {
              }
              if (friend.dhtPubkey && friend.dhtPubkey !== friend.pubkey) {
                try {
                  const dhtPk = base58ToBytes(friend.dhtPubkey);
                  if (dhtPk.length === 32) {
                    __privateGet(this, _friendDhtKeys).set(friendId, dhtPk);
                    __privateGet(this, _tcpRelays).requestRoute(dhtPk);
                  }
                } catch {
                }
              }
            }
          }
          __privateMethod(this, _ensureFriendConnectionLoop, ensureFriendConnectionLoop_fn).call(this);
          __privateSet(this, _started, true);
        }
        async stop() {
          for (const timer of __privateGet(this, _profileRetryTimers).values())
            clearTimeout(timer);
          __privateGet(this, _profileRetryTimers).clear();
          __privateGet(this, _profileRetryAttempts).clear();
          __privateGet(this, _fileRelayNegotiationUntil).clear();
          if (__privateGet(this, _expressPollTimer)) {
            clearInterval(__privateGet(this, _expressPollTimer));
            __privateSet(this, _expressPollTimer, void 0);
          }
          if (__privateGet(this, _selfAnnounceTimer)) {
            clearInterval(__privateGet(this, _selfAnnounceTimer));
            __privateSet(this, _selfAnnounceTimer, void 0);
          }
          if (__privateGet(this, _dhtMaintenanceTimer)) {
            clearInterval(__privateGet(this, _dhtMaintenanceTimer));
            __privateSet(this, _dhtMaintenanceTimer, void 0);
          }
          if (__privateGet(this, _friendConnectionTimer)) {
            clearInterval(__privateGet(this, _friendConnectionTimer));
            __privateSet(this, _friendConnectionTimer, void 0);
          }
          const establishedFriends = [...__privateGet(this, _friendSessions).entries()].filter(([, session]) => session.established).map(([friendId]) => friendId);
          if (establishedFriends.length > 0) {
            await Promise.allSettled(establishedFriends.map((friendId) => __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_KILL, new Uint8Array())));
            await sleep(250);
          }
          if (__privateGet(this, _tcpRelays)) {
            await __privateGet(this, _tcpRelays).stop().catch(() => {
            });
            __privateSet(this, _tcpRelays, void 0);
          }
          __privateGet(this, _udp).off("datagram", __privateGet(this, _onDatagram));
          await __privateGet(this, _udp).stop();
          __privateGet(this, _turnClient)?.close();
          await closeDgramSocket(__privateGet(this, _turnSocket));
          __privateSet(this, _turnClient, void 0);
          __privateSet(this, _turnSocket, void 0);
          __privateSet(this, _ourRelayAddr, void 0);
          __privateSet(this, _started, false);
        }
        pubkey() {
          if (!__privateGet(this, _keyPair2)) {
            throw new Error("Peer is not started");
          }
          return bytesToHex2(__privateGet(this, _keyPair2).publicKey);
        }
        userid() {
          if (!__privateGet(this, _keyPair2)) {
            throw new Error("Peer is not started");
          }
          return carrierIdFromPublicKey(__privateGet(this, _keyPair2).publicKey);
        }
        /**
         * Sign `message` with this identity's private key (XEdDSA over the X25519
         * key). The signature verifies against the userid — `verifyDetached(
         * base58Decode(userid), message, sig)` — so a relying party that knows only
         * the userid can prove the signer holds the matching key. Used by "Sign in
         * with Decent". Returns a detached 64-byte signature.
         */
        sign(message) {
          if (!__privateGet(this, _keyPair2)) {
            throw new Error("Peer is not started");
          }
          return signDetached(__privateGet(this, _keyPair2).secretKey, message);
        }
        address() {
          if (!__privateGet(this, _keyPair2)) {
            throw new Error("Peer is not started");
          }
          return carrierAddressFromPublicKey(__privateGet(this, _keyPair2).publicKey);
        }
        /**
         * Carrier bootstrap TURN credentials — peer analogue of Android
         * CarrierExtension.getTurnServerInfo() / carrier_get_turn_server().
         * Uses the first configured bootstrap node with a public key (fresh nonce
         * each call). For WebRTC, prefer {@link getIceServers}.
         */
        getTurnServerInfo(bootnodeIndex = 0) {
          if (!__privateGet(this, _keyPair2)) {
            throw new Error("Peer is not started");
          }
          const nodes = __privateGet(this, _opts3).bootstrapNodes.filter((n) => n?.host && (n.pk || n.pkBytes));
          const bootnode = nodes[bootnodeIndex] ?? nodes[0];
          if (!bootnode) {
            throw new Error("getTurnServerInfo: no bootstrap nodes configured");
          }
          return getTurnServerInfoForBootnode({
            bootnode,
            ourUserid: this.userid(),
            ourSecretKey: __privateGet(this, _keyPair2).secretKey
          });
        }
        /**
         * RTCIceServer list for browser / native WebRTC, matching Android
         * WebrtcClient.getIceServers() (Carrier bootstrap STUN+TURN, not tokyo).
         */
        getIceServers(opts) {
          if (!__privateGet(this, _keyPair2)) {
            throw new Error("Peer is not started");
          }
          return getIceServers({
            bootstrapNodes: __privateGet(this, _opts3).bootstrapNodes,
            ourUserid: this.userid(),
            ourSecretKey: __privateGet(this, _keyPair2).secretKey,
            limit: opts?.limit,
            includeTcpTurn: opts?.includeTcpTurn
          });
        }
        async joinNetwork() {
          if (!__privateGet(this, _bootstrap)) {
            throw new Error("Peer is not started");
          }
          if (__privateGet(this, _opts3).tcpOnlyBootstrap) {
            const seed = __privateGet(this, _opts3).bootstrapNodes ?? [];
            if (seed.length === 0) {
              throw new Error("tcpOnlyBootstrap needs at least one bootstrap node to seed from");
            }
            __privateSet(this, _knownNodes, dedupeNodes([...seed]));
            await __privateMethod(this, _runSelfAnnounce, runSelfAnnounce_fn).call(this, false, Date.now() + JOIN_ANNOUNCE_TIMEOUT_MS);
            __privateMethod(this, _ensureSelfAnnounceLoop, ensureSelfAnnounceLoop_fn).call(this);
            __privateMethod(this, _ensureDhtMaintenanceLoop, ensureDhtMaintenanceLoop_fn).call(this);
            __privateMethod(this, _ensureFriendConnectionLoop, ensureFriendConnectionLoop_fn).call(this);
            __privateMethod(this, _ensureExpressPullLoop, ensureExpressPullLoop_fn).call(this);
            void __privateMethod(this, _doFriendConnections, doFriendConnections_fn).call(this).catch((error) => {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `initial friend connection cycle failed: ${error.message}`);
            });
            const first = seed[0];
            return {
              respondingNode: first,
              discoveredNodes: []
            };
          }
          const result = await __privateGet(this, _bootstrap).join();
          __privateMethod(this, _recordNodeSuccess, recordNodeSuccess_fn).call(this, `${result.respondingNode.host}:${result.respondingNode.port}`);
          const discovered = result.discoveredNodes.map((node) => ({
            host: node.host,
            port: node.port,
            pk: carrierIdFromPublicKey(node.publicKey)
          }));
          __privateSet(this, _knownNodes, dedupeNodes([result.respondingNode, ...discovered, ...__privateGet(this, _opts3).bootstrapNodes]));
          await __privateMethod(this, _runSelfAnnounce, runSelfAnnounce_fn).call(this, false, Date.now() + JOIN_ANNOUNCE_TIMEOUT_MS);
          __privateMethod(this, _ensureSelfAnnounceLoop, ensureSelfAnnounceLoop_fn).call(this);
          __privateMethod(this, _ensureDhtMaintenanceLoop, ensureDhtMaintenanceLoop_fn).call(this);
          __privateMethod(this, _ensureFriendConnectionLoop, ensureFriendConnectionLoop_fn).call(this);
          __privateMethod(this, _ensureExpressPullLoop, ensureExpressPullLoop_fn).call(this);
          void __privateMethod(this, _doFriendConnections, doFriendConnections_fn).call(this).catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `initial friend connection cycle failed: ${error.message}`);
          });
          return result;
        }
        async lookup(pubkey) {
          return __privateGet(this, _dht).lookup(pubkey);
        }
        async announceSelf(timeoutMs = 15e3) {
          return __privateMethod(this, _runSelfAnnounce, runSelfAnnounce_fn).call(this, true, Date.now() + timeoutMs);
        }
        /**
         * Aggregate DHT health snapshot — surfaces the layers that have to
         * work for UDP holepunch / route discovery to succeed.
         *   bootstrapsConfigured  – nodes the SDK is allowed to talk to
         *   knownNodesCount       – nodes discovered or persisted in our DHT view
         *   lastSelfAnnounceMs    – last time we ran a self-announce sweep
         *   selfAnnounceStoredOn  – how many nodes acknowledged STORING our
         *                            announce last time. **If 0, our outbound
         *                            DHT is broken** — peers can't find us,
         *                            #discoverFriendRoutes returns nothing,
         *                            UDP holepunch is impossible. Most common
         *                            failure mode when sessions stay on
         *                            tcp-relay forever.
         *   udpLocalPort          – the OS-assigned UDP port (null = no socket)
         *   tcpRelayConnected     – fallback relay path; if >0, sessions get
         *                            through even when DHT is dead.
         */
        dhtHealth() {
          const relays = __privateGet(this, _tcpRelays)?.connectedRelays(99) ?? [];
          return {
            bootstrapsConfigured: __privateGet(this, _opts3).bootstrapNodes.length,
            knownNodesCount: __privateGet(this, _knownNodes).length,
            lastSelfAnnounceMs: __privateGet(this, _lastSelfAnnounceMs),
            selfAnnounceStoredOn: __privateGet(this, _lastSelfAnnounceStoredCount),
            udpLocalPort: __privateGet(this, _udp)?.localPort() ?? null,
            tcpRelayConnected: relays.length,
            tcpOnionSent: __privateGet(this, _diagTcpOnionSent),
            tcpOnionRecv: __privateGet(this, _diagTcpOnionRecv),
            tcpRelayEndpoints: relays.map((r) => ({ host: r.host, port: r.port }))
          };
        }
        addKnownNodes(nodes) {
          const merged = dedupeNodes([...nodes, ...__privateGet(this, _knownNodes)]);
          if (merged.length > MAX_KNOWN_NODES) {
            const kept = merged.slice(0, MAX_KNOWN_NODES);
            const keptIds = new Set(kept.map((node) => `${node.host}:${node.port}`));
            for (const bn of __privateGet(this, _opts3).bootstrapNodes) {
              if (!keptIds.has(`${bn.host}:${bn.port}`))
                kept.push(bn);
            }
            __privateSet(this, _knownNodes, kept);
          } else {
            __privateSet(this, _knownNodes, merged);
          }
        }
        knownNodes() {
          return [...__privateGet(this, _knownNodes)];
        }
        async sendFriendRequest(pubkey, hello) {
          if (!__privateGet(this, _keyPair2) || !__privateGet(this, _announceDataKey)) {
            throw new Error("Peer is not started");
          }
          const friendAddress = parseCarrierAddress(pubkey);
          const friendId = carrierIdFromPublicKey(friendAddress.publicKey);
          const existing = __privateGet(this, _friends).get(friendId);
          if (existing?.acceptedAt) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend request skipped \u2014 ${friendId} already accepted at ${new Date(existing.acceptedAt).toISOString()}`);
            __privateSet(this, _lastFriendRequestDispatch, {
              transport: "onion",
              routes: 0,
              targets: 0
            });
            void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch(() => {
            });
            return;
          }
          const resumeSelfAnnounce = __privateMethod(this, _pauseSelfAnnounce, pauseSelfAnnounce_fn).call(this);
          try {
            if (__privateGet(this, _selfAnnouncePromise)) {
              await __privateGet(this, _selfAnnouncePromise).catch(() => {
              });
            }
            const announceDeadline = Date.now() + 8e3;
            while (__privateGet(this, _lastSelfAnnounceStoredCount) === 0 && Date.now() < announceDeadline) {
              await __privateMethod(this, _announceSelfBestEffort, announceSelfBestEffort_fn).call(this, true, Math.min(Date.now() + 3e3, announceDeadline));
              if (__privateGet(this, _lastSelfAnnounceStoredCount) > 0)
                break;
              await sleep(500);
            }
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend-request: announce stored on ${__privateGet(this, _lastSelfAnnounceStoredCount)} node(s) before send`);
            const appPayload = encodeFriendRequestPacket({
              name: __privateGet(this, _opts3).nickname ?? PEER_NICKNAME,
              descr: (__privateGet(this, _opts3).statusMessage ?? PEER_STATUS_MESSAGE) || "decent peer",
              hello: hello ?? ""
            });
            const friendReqPayload = concatBytes([
              uint32ToLe(friendAddress.nospam),
              appPayload
            ]);
            const routes = await __privateMethod(this, _discoverFriendRoutes, discoverFriendRoutes_fn).call(this, friendAddress.publicKey, true);
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend route discovery done routes=${routes.length}`);
            if (routes.length === 0) {
              try {
                await __privateMethod(this, _sendDirectCryptoFriendRequest, sendDirectCryptoFriendRequest_fn).call(this, friendAddress.publicKey, friendReqPayload);
              } catch (error) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `direct crypto friend-request to ${friendId} failed: ${error.message}`);
              }
              __privateSet(this, _lastFriendRequestDispatch, {
                transport: "direct",
                routes: 0,
                targets: __privateGet(this, _knownNodes).length > 0 ? __privateGet(this, _knownNodes).length : __privateGet(this, _opts3).bootstrapNodes.length
              });
              __privateMethod(this, _recordOutgoingFriendRequest, recordOutgoingFriendRequest_fn).call(this, friendId, pubkey, friendAddress.nospam, hello);
              if (__privateGet(this, _express)?.hasNodes()) {
                void __privateGet(this, _express).sendOfflineFriendRequest(pubkey, appPayload).then(() => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `offline_fr_post ok to ${pubkey}`);
                }).catch((error) => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `offline friend request dispatch failed: ${error.message}`);
                });
              }
              return;
            }
            let sent = 0;
            const errors = [];
            for (const route of routes) {
              try {
                const nonce = randomBytes2(24);
                const onionData = createOnionDataPacket({
                  senderPublicKey: __privateGet(this, _keyPair2).publicKey,
                  senderSecretKey: __privateGet(this, _keyPair2).secretKey,
                  receiverPublicKey: friendAddress.publicKey,
                  nonce,
                  innerPacketId: ONION_FRIEND_REQUEST_ID,
                  innerPayload: friendReqPayload
                });
                const dataRequest = createOnionDataRequest({
                  destinationPublicKey: friendAddress.publicKey,
                  routePublicKey: route.routePublicKey,
                  nonce,
                  onionDataPacket: onionData
                });
                for (let attempt = 0; attempt < ONION_DATA_ATTEMPTS; attempt++) {
                  await __privateMethod(this, _sendThroughOnionPath, sendThroughOnionPath_fn).call(this, dataRequest, route.node, attempt);
                  sent += 1;
                  await sleep(150);
                }
              } catch (error) {
                errors.push(`${route.node.host}:${route.node.port} ${error.message}`);
              }
            }
            __privateMethod(this, _recordOutgoingFriendRequest, recordOutgoingFriendRequest_fn).call(this, friendId, pubkey, friendAddress.nospam, hello);
            let expressOk = false;
            if (__privateGet(this, _express)?.hasNodes()) {
              try {
                await __privateGet(this, _express).sendOfflineFriendRequest(pubkey, appPayload);
                expressOk = true;
              } catch (error) {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `offline friend request dispatch failed: ${error.message}`);
              }
            }
            if (sent === 0 && !expressOk) {
              throw new Error(`friend request dispatch failed: ${errors.join("; ")}`);
            }
            __privateSet(this, _lastFriendRequestDispatch, {
              transport: sent > 0 ? "onion" : "direct",
              routes: routes.length,
              targets: sent
            });
          } finally {
            resumeSelfAnnounce();
          }
        }
        lastFriendRequestDispatch() {
          return __privateGet(this, _lastFriendRequestDispatch);
        }
        async acceptFriendRequest(pubkey) {
          const request = __privateGet(this, _pendingFriendRequests).get(pubkey);
          if (!request) {
            throw new Error("No pending friend request from this peer");
          }
          __privateGet(this, _pendingFriendRequests).delete(pubkey);
          __privateGet(this, _friends).set(pubkey, {
            pubkey,
            userid: request.userid,
            address: request.address,
            nospam: request.nospam,
            name: request.name,
            description: request.description,
            hello: request.hello,
            status: "offline",
            acceptedAt: Date.now()
          });
          __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
          __privateGet(this, _events).emit("friendConnection", {
            pubkey,
            status: "disconnected"
          });
          if (__privateGet(this, _tcpRelays)) {
            try {
              const pk = base58ToBytes(pubkey);
              if (pk.length === 32)
                __privateGet(this, _tcpRelays).requestRoute(pk);
            } catch {
            }
          }
          void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, pubkey).catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `accept friend: initiate session failed for ${pubkey}: ${error.message}`);
          });
        }
        rejectFriendRequest(pubkey) {
          __privateGet(this, _pendingFriendRequests).delete(pubkey);
        }
        /**
         * Drop a friend entirely: tear down any active net_crypto session, forget
         * their cached endpoint, clear retry/backoff bookkeeping, and persist the
         * shrunk friend list to disk. Use this to remove stale persisted entries
         * (e.g. an old simulator pubkey) that are still hogging the friend
         * connection loop with cookie requests no peer is going to answer.
         *
         * `pubkey` accepts either the friend's userid (base58 of the real public
         * key) or full Carrier address — both resolve to the same friendId.
         */
        removeFriend(pubkey) {
          let friendId = pubkey;
          try {
            friendId = carrierIdFromAddress(pubkey);
          } catch {
          }
          const existed = __privateGet(this, _friends).delete(friendId);
          __privateGet(this, _friendSessions).delete(friendId);
          __privateGet(this, _fileRelayNegotiationUntil).delete(friendId);
          __privateGet(this, _dnft12).forget(friendId);
          __privateGet(this, _pendingFriendRequests).delete(friendId);
          __privateGet(this, _cookieRetryCount).delete(friendId);
          __privateGet(this, _lastCookieSentKey).delete(friendId);
          __privateGet(this, _lastEndpointSelectedKey).delete(friendId);
          __privateGet(this, _lastLoggedRoutesForFriend).delete(friendId);
          __privateGet(this, _dhtPkSendCooldown).delete(friendId);
          __privateGet(this, _dhtPkConsecutiveFailures).delete(friendId);
          __privateGet(this, _tcpOnlyWarningShown).delete(friendId);
          __privateGet(this, _noEndpointWarned).delete(friendId);
          __privateGet(this, _profileSentTo).delete(friendId);
          const profileRetry = __privateGet(this, _profileRetryTimers).get(friendId);
          if (profileRetry)
            clearTimeout(profileRetry);
          __privateGet(this, _profileRetryTimers).delete(friendId);
          __privateGet(this, _profileRetryAttempts).delete(friendId);
          __privateGet(this, _greetingSentTo).delete(friendId);
          if (existed) {
            __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `removed friend ${friendId}`);
          }
          return existed;
        }
        async sendText(pubkey, text) {
          if (text.length > 0 && !text.startsWith(TEXT_ACK_PREFIX) && __privateMethod(this, _shouldRequireTextAck, shouldRequireTextAck_fn).call(this, pubkey)) {
            await this.sendTextUntilAck(pubkey, text, {
              timeoutMs: TEXT_AUTO_ACK_TIMEOUT_MS,
              retryIntervalMs: Math.min(TEXT_ACK_RETRY_MS, TEXT_AUTO_ACK_TIMEOUT_MS)
            });
            return;
          }
          await __privateMethod(this, _sendTextPlain, sendTextPlain_fn).call(this, pubkey, text);
        }
        /**
         * Send text and keep retransmitting until the peer explicitly ACKs it.
         *
         * The ACK means the far side's SDK durably received the message — it is
         * sent BEFORE the peer's onText handlers run, so a peer that is busy in
         * application code (a model call, a disk-bound job) still ACKs instantly.
         * It does NOT mean the application processed the message; if you need that,
         * have the far side send an application-level reply. Pass a stable
         * deliveryId when retrying an item from an application outbox across
         * process restarts.
         */
        async sendTextUntilAck(pubkey, text, opts = {}) {
          const deliveryId = opts.deliveryId ?? createTextDeliveryId();
          const retryIntervalMs = Math.max(250, opts.retryIntervalMs ?? TEXT_ACK_RETRY_MS);
          const timeoutMs = Math.max(retryIntervalMs, opts.timeoutMs ?? TEXT_ACK_TIMEOUT_MS);
          const envelope = encodeTextAckEnvelope({ t: "msg", id: deliveryId, text });
          const started = Date.now();
          let lastError;
          while (Date.now() - started < timeoutMs) {
            const remaining = Math.max(1, timeoutMs - (Date.now() - started));
            const waitMs = Math.min(retryIntervalMs, remaining);
            const ackPromise = __privateMethod(this, _waitForTextAck, waitForTextAck_fn).call(this, deliveryId, waitMs);
            try {
              await __privateMethod(this, _sendTextPlain, sendTextPlain_fn).call(this, pubkey, envelope);
            } catch (error) {
              __privateMethod(this, _cancelTextAckWait, cancelTextAckWait_fn).call(this, deliveryId);
              lastError = error;
              await sleep(waitMs);
              continue;
            }
            if (await ackPromise) {
              return { deliveryId };
            }
          }
          __privateMethod(this, _cancelTextAckWait, cancelTextAckWait_fn).call(this, deliveryId);
          throw lastError ?? new Error(`text delivery ACK timed out for ${pubkey}`);
        }
        waitForFriendConnected(pubkey, timeoutMs = 3e4) {
          return __privateMethod(this, _waitForFriendConnected, waitForFriendConnected_fn).call(this, pubkey, timeoutMs);
        }
        onFriendRequest(cb) {
          __privateGet(this, _events).on("friendRequest", cb);
        }
        onText(cb) {
          __privateGet(this, _textHandlers).add(cb);
        }
        /** @internal Test seam: deliver a text message exactly as if it arrived off
         *  the wire. Exists so the ACK-before-handlers ordering is testable without
         *  a network — do not use outside tests. */
        _testDispatchTextMessage(msg) {
          return __privateMethod(this, _dispatchTextMessage, dispatchTextMessage_fn).call(this, msg);
        }
        /** Files received inline over (bulk)messages — the iOS/C Carrier apps'
         *  native way of sending images/audio online (FileModel JSON envelope). */
        onInlineFile(cb) {
          __privateGet(this, _events).on("inlineFile", cb);
        }
        /**
         * Send a file INLINE over the message channel the way iOS/C Carrier apps
         * do: a FileModel JSON envelope ({data: base64, fileExtension, fileName,
         * type}) carried as a (bulk)message. This is the ONLY file path a native
         * Beagle client can receive online — the toxcore file transfer (80-82)
         * used by sendFile() is invisible to the Carrier C SDK. Best for images
         * and small files; the hard protocol cap is ~5MB (base64-inflated), keep
         * real use well below it.
         */
        async sendInlineFile(pubkey, opts) {
          const dot = opts.name.lastIndexOf(".");
          const ext = dot > 0 ? opts.name.slice(dot).toLowerCase() : "";
          const base = dot > 0 ? opts.name.slice(0, dot) : opts.name;
          const type2 = opts.fileType ?? inlineFileTypeFor(opts.name);
          const envelope = JSON.stringify({
            data: Buffer2.from(opts.data).toString("base64"),
            fileExtension: ext,
            fileName: base,
            type: type2
          });
          if (envelope.length > CARRIER_MAX_APP_BULKMSG_LEN) {
            throw new Error(`inline file too large for the message channel (${envelope.length} bytes encoded, max ${CARRIER_MAX_APP_BULKMSG_LEN})`);
          }
          const deliveryTimeoutMs = opts.deliveryTimeoutMs ?? Math.min(18e4, 2e4 + Math.ceil(envelope.length / 50));
          if (__privateMethod(this, _shouldRequireTextAck, shouldRequireTextAck_fn).call(this, pubkey)) {
            await this.sendTextUntilAck(pubkey, envelope, {
              timeoutMs: deliveryTimeoutMs,
              retryIntervalMs: Math.max(TEXT_ACK_RETRY_MS, Math.ceil(envelope.length / 100))
            });
            return { delivery: "acked" };
          }
          const outcome = await __privateMethod(this, _sendTextPlain, sendTextPlain_fn).call(this, pubkey, envelope);
          if (outcome.via === "offline")
            return { delivery: "offline" };
          if (outcome.endPacketNumber === void 0)
            return { delivery: "accepted" };
          const acked = await __privateMethod(this, _awaitTransportAck, awaitTransportAck_fn).call(this, pubkey, outcome.endPacketNumber, deliveryTimeoutMs);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `inline file "${opts.name}" to ${pubkey}: transport ${acked ? "ACKED" : `NOT confirmed within ${deliveryTimeoutMs}ms`}`);
          return { delivery: acked ? "acked" : "accepted" };
        }
        /**
         * True when this friend is a NATIVE Carrier client (iOS/Android/C SDK): its
         * DHT/relay key differs from its identity key, where a JS peer announces its
         * identity key as its DHT key. Natives cannot see the toxcore file-transfer
         * protocol (sendFile) — the inline envelope is their only file path — and
         * they never speak the JS text-ACK scheme.
         */
        isNativeFriend(pubkey) {
          const friend = __privateGet(this, _friends).get(pubkey);
          return !!(friend?.dhtPubkey && friend.dhtPubkey !== friend.pubkey);
        }
        /** Fired when a peer sends a Carrier friend-invite (PACKET_TYPE_INVITE_REQUEST).
         *  This is the channel the iOS/Android WebRTC SDK uses for call signaling —
         *  each RtcSignal arrives as an "invite" with ext="carrier" and `data` the
         *  reassembled JSON. */
        onInvite(cb) {
          __privateGet(this, _events).on("invite", cb);
        }
        /** Fired when a peer replies to one of our invites (PACKET_TYPE_INVITE_RESPONSE).
         *  Not used by the one-way WebRTC signaling flow, but surfaced for peers that
         *  do reply. */
        onInviteResponse(cb) {
          __privateGet(this, _events).on("inviteResponse", cb);
        }
        /**
         * Send a Carrier friend-invite to a peer — the transport the iOS/Android
         * Elastos WebRTC SDK listens on (CarrierExtension.registerExtension). Used
         * for realtime call signaling: pass the RtcSignal JSON as `data` and the
         * remote's registerExtension handler fires with it.
         *
         * Wire-compatible with carrier_invite_friend: sends PACKET_TYPE_INVITE_REQUEST
         * packets over the reliable message channel, `ext` = "carrier" by default,
         * fragmented into INVITE_DATA_UNIT (1280-byte) chunks sharing one tid (first
         * fragment carries totalsz + optional bundle). Signaling is realtime, so this
         * requires a live session and does NOT fall back to offline express — a call
         * signal to an unreachable peer should fail fast, not queue.
         *
         * @returns the tid used (lets callers correlate a later invite-response).
         */
        async sendInvite(pubkey, data, opts = {}) {
          const friend = __privateGet(this, _friends).get(pubkey);
          if (!friend) {
            throw new Error(`Not a friend: ${pubkey}`);
          }
          const payload = typeof data === "string" ? new TextEncoder().encode(data) : data;
          if (payload.length === 0 || payload.length > CARRIER_MAX_INVITE_DATA_LEN) {
            throw new Error(`invite data must be 1..${CARRIER_MAX_INVITE_DATA_LEN} bytes (got ${payload.length})`);
          }
          const ext = opts.ext === null ? void 0 : opts.ext ?? CARRIER_EXTENSION_NAME;
          const bundle = opts.bundle;
          const establishTimeoutMs = opts.establishTimeoutMs ?? 5e3;
          let session = __privateGet(this, _friendSessions).get(pubkey);
          if (!session?.established && establishTimeoutMs > 0) {
            await __privateMethod(this, _initiateSession, initiateSession_fn).call(this, pubkey).catch(() => {
            });
            const established = await __privateMethod(this, _waitForFriendConnected, waitForFriendConnected_fn).call(this, pubkey, establishTimeoutMs).catch(() => false);
            if (established)
              session = __privateGet(this, _friendSessions).get(pubkey);
          }
          if (!session?.established || !session.sessionSharedKey || !session.ourBaseNonce || !(session.remote || session.hasTcpRoute)) {
            throw new Error(`cannot send invite: no live session to ${pubkey} (peer offline?)`);
          }
          const tid = BigInt(Date.now()) << 20n ^ BigInt(Math.floor(Math.random() * 1048575)) | 1n;
          const bundleLen = bundle ? new TextEncoder().encode(bundle).length : 0;
          let off = 0;
          let first = true;
          while (off < payload.length) {
            const unit = first && bundle ? INVITE_DATA_UNIT - bundleLen : INVITE_DATA_UNIT;
            const end = Math.min(off + unit, payload.length);
            const p = encodeInviteReqPacket({
              ext,
              tid,
              bundle: first ? bundle : void 0,
              totalsz: first ? payload.length : 0,
              data: payload.subarray(off, end)
            });
            await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, pubkey, PACKET_ID_MESSAGE, p);
            off = end;
            first = false;
          }
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `invite sent to ${pubkey}: ext="${ext ?? ""}" (${payload.length} bytes, tid=${tid})`);
          return tid;
        }
        /**
         * Send an application-defined custom packet to a friend. `id` selects the
         * channel and its delivery class by toxcore range: **160–191 lossless**
         * (reliable, ordered) or **192–254 lossy** (best-effort). Apps layered on
         * the peer use this to run their own protocols alongside chat without
         * collision — e.g. decentlan sends IP traffic on `192`. Throws if `pubkey`
         * is not a friend or the session has no transport (fail-fast; callers that
         * want offline delivery should use a message instead).
         */
        async sendCustomPacket(pubkey, id, data) {
          if (!Number.isInteger(id) || id < 160 || id > 254) {
            throw new Error(`custom packet id must be 160-254 (lossless 160-191 / lossy 192-254), got ${id}`);
          }
          if (!__privateGet(this, _friends).get(pubkey)) {
            throw new Error(`Not a friend: ${pubkey}`);
          }
          await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, pubkey, id, data);
        }
        /**
         * Receive application custom packets (toxcore lossless 160–191 / lossy
         * 192–254). SDK-internal IDs are never delivered here. See
         * {@link sendCustomPacket}.
         */
        onCustomPacket(cb) {
          __privateGet(this, _events).on("customPacket", cb);
        }
        // ───────────────────── file transfer (toxcore-standard, native-ready) ─────
        /**
         * Offer a file to a friend (by userid). Returns the fileId (hex) or null if
         * the friend has no free transfer slot. The recipient gets an `onFile` offer;
         * once they `acceptFile`, chunks stream over the reliable net_crypto channel.
         */
        sendFile(userid, data, opts) {
          if (!__privateGet(this, _friends).get(userid))
            throw new Error(`Not a friend: ${userid}`);
          return __privateGet(this, _fileTransfer).sendFile(userid, data, opts);
        }
        /** Accept an incoming file offer (the `fileNumber` from the onFile event). */
        acceptFile(userid, fileNumber) {
          __privateGet(this, _fileTransfer).accept(userid, fileNumber);
        }
        /** Cancel a transfer (isSending = true if we're the sender). */
        cancelFile(userid, fileNumber, isSending = false) {
          __privateGet(this, _fileTransfer).cancel(userid, fileNumber, isSending);
        }
        /** Cancel an in-flight transfer by its content fileId (hex). Returns true if found. */
        cancelFileById(userid, fileId, isSending = false) {
          return __privateGet(this, _fileTransfer).cancelByFileId(userid, fileId, isSending);
        }
        /** Cancel in-flight sends that match size/name (registry-desync fallback). */
        cancelSendsMatching(userid, match) {
          return __privateGet(this, _fileTransfer).cancelSendsMatching(userid, match);
        }
        /** Incoming file offer: { friendId, fileNumber, fileId, name, size, kind }. */
        onFile(cb) {
          __privateGet(this, _events).on("file-offer", cb);
        }
        /** Transfer progress: { friendId, fileId, received, total, sending? }. */
        onFileProgress(cb) {
          __privateGet(this, _events).on("file-progress", cb);
        }
        /** Transfer complete: { friendId, fileId, name, size, data?, sending? } (data present on the receiver). */
        onFileComplete(cb) {
          __privateGet(this, _events).on("file-complete", cb);
        }
        /** Transfer cancelled by the peer: { friendId, fileId, sending }. */
        onFileCancel(cb) {
          __privateGet(this, _events).on("file-cancel", cb);
        }
        onFriendConnection(cb) {
          __privateGet(this, _events).on("friendConnection", cb);
        }
        onFriendInfo(cb) {
          __privateGet(this, _events).on("friendInfo", cb);
        }
        friends() {
          return [...__privateGet(this, _friends).values()].map((f) => {
            if (f.address)
              return f;
            try {
              return { ...f, address: carrierAddressFromPublicKey(base58ToBytes(f.pubkey), f.nospam ?? 0) };
            } catch {
              return f;
            }
          });
        }
        /**
         * Read-only snapshot of the live net_crypto session state for a
         * friend, or null if no session has been established yet. Lets
         * callers see whether a peer is reachable via direct UDP, only via
         * TCP relay, or not at all — the answer is the difference between
         * ~80ms RTT (UDP) and ~500ms+ RTT (relay) in practice, so the
         * caller (e.g. `agentnet diag`) can show an operator where their
         * latency is coming from. Returns:
         *
         *   established  — handshake complete on this side
         *   udpRemote    — direct UDP endpoint we've seen the peer at,
         *                  if any; null means UDP holepunch hasn't
         *                  succeeded (yet) so traffic falls back to TCP
         *                  relay
         *   hasTcpRoute  — true when a TCP relay has reported a route to
         *                  the peer
         *   transport    — convenience derived field: which path the next
         *                  outbound packet will actually use
         *   lastPingRecvMs — for staleness; if older than ~32s the session
         *                    is on its way to timeout
         */
        sessionStatus(pubkey) {
          const s = __privateGet(this, _friendSessions).get(pubkey);
          if (!s)
            return null;
          const friend = __privateGet(this, _friends).get(pubkey);
          const realUdp = s.remote && !s.remote.host?.startsWith("tcp:") && s.remote.port !== 0 ? { host: s.remote.host, port: s.remote.port } : null;
          const transport = realUdp ? s.hasTcpRoute ? "both" : "udp" : s.hasTcpRoute ? "tcp-relay" : "none";
          const friendUdp = friend?.remoteHost && friend.remotePort && !friend.remoteHost.startsWith("tcp:") && friend.remotePort !== 0 ? { host: friend.remoteHost, port: friend.remotePort } : null;
          return {
            established: s.established === true,
            udpRemote: realUdp,
            hasTcpRoute: s.hasTcpRoute === true,
            transport,
            lastPingRecvMs: s.lastPingRecvMs ?? null,
            ourLocalUdpPort: __privateGet(this, _udp)?.localPort() ?? null,
            friendUdpEndpoint: friendUdp,
            endpointCandidatesCount: s.endpointCandidates?.length ?? 0,
            endpointCandidates: (s.endpointCandidates ?? []).map((c) => `${c.host}:${c.port}`),
            cookieRequestSentMs: s.cookieRequestSentMs ?? null,
            lanRemoteHost: s.lanRemoteHost ?? null
          };
        }
        waitForFriendRequest(timeoutMs = 3e4) {
          return new Promise((resolve2, reject) => {
            const timer = setTimeout(() => {
              cleanup();
              reject(new Error(`timed out waiting for friend request after ${timeoutMs}ms`));
            }, timeoutMs);
            const onRequest = (request) => {
              cleanup();
              resolve2(request);
            };
            const cleanup = () => {
              clearTimeout(timer);
              __privateGet(this, _events).off("friendRequest", onRequest);
            };
            __privateGet(this, _events).on("friendRequest", onRequest);
          });
        }
        /**
         * After a friend sends us PACKET_ID_ONLINE, push our nickname + status
         * message so their UI replaces "unknown" with our actual display name,
         * and optionally fire off a configured greeting message. Idempotent —
         * tracked per friend so we don't spam every keepalive cycle.
         *
         * Sends are sequenced with small delays so the receiving peer's UI layer
         * doesn't process three messenger packets in the same render frame —
         * iOS Beagle 1.8.6 has a SwiftUI use-after-free in
         * `_UIHostingView.beginTransaction()` when nickname / status / message
         * arrive in rapid succession at session establishment, observed as
         * EXC_BAD_ACCESS in the iOS app's main thread.
         */
        /**
         * Update our own profile (display name / status-message description) at
         * runtime and re-push it to friends. `name` maps to the toxcore nickname
         * (PACKET_ID_NICKNAME) and the Carrier USERINFO `name`; `description` maps to
         * the USERINFO descr / status message. Re-arms the per-friend "profile sent"
         * flag so every friend receives the update, and proactively pushes to anyone
         * currently online. The greeting is NOT re-sent (its flag is left intact).
         */
        setUserInfo(info) {
          const opts = __privateGet(this, _opts3);
          if (info.name !== void 0)
            opts.nickname = info.name;
          if (info.description !== void 0)
            opts.statusMessage = info.description;
          if (info.punkId !== void 0)
            opts.punkId = info.punkId ?? void 0;
          __privateGet(this, _profileSentTo).clear();
          for (const timer of __privateGet(this, _profileRetryTimers).values())
            clearTimeout(timer);
          __privateGet(this, _profileRetryTimers).clear();
          __privateGet(this, _profileRetryAttempts).clear();
          for (const [friendId, s] of __privateGet(this, _friendSessions).entries()) {
            if (s.established)
              __privateMethod(this, _sendProfileAndGreeting, sendProfileAndGreeting_fn).call(this, friendId);
          }
        }
        /** Our current display name + status-message description. */
        userInfo() {
          const opts = __privateGet(this, _opts3);
          return {
            name: opts.nickname ?? PEER_NICKNAME,
            description: opts.statusMessage ?? PEER_STATUS_MESSAGE,
            // Reported so "what am I actually advertising" is answerable without
            // reading a packet capture — the UI surfaces this as `me.advertised`.
            punkId: opts.punkId
          };
        }
        /**
         * Tell a friend our public UDP endpoint over the (already-working,
         * possibly tcp-relay) messenger channel, so they can hole-punch to us.
         * This is the out-of-band substitute for the broken DHT/onion-announce
         * endpoint discovery. Both peers do this symmetrically; on receipt each
         * feeds the other's endpoint into endpointCandidates and punches.
         */
        /**
         * Lazily allocate our node-level TURN relay on its own dedicated UDP
         * socket. Returns our public relay address (on the TURN server) which we
         * advertise to peers so they can reach us via the relay even when direct
         * UDP can't be punched. Relayed data is injected into #onDatagram tagged
         * `viaRelay` so it updates the relay freshness, not the direct endpoint.
         */
        /**
         * Test-only seam for scripts/turn-socket-leak-selftest.mjs: drive one TURN
         * allocation attempt directly instead of waiting out the 120s-per-friend
         * relay keepalive that reaches this path in production. Not public API.
         */
        async __testForceTurnAllocation() {
          return __privateMethod(this, _ensureTurnRelay, ensureTurnRelay_fn).call(this).catch(() => void 0);
        }
      };
      _opts3 = new WeakMap();
      _events = new WeakMap();
      _fileRelayNegotiationUntil = new WeakMap();
      _dnft12 = new WeakMap();
      _fileTransfer = new WeakMap();
      _keyPair2 = new WeakMap();
      _udp = new WeakMap();
      _turnClient = new WeakMap();
      _turnSocket = new WeakMap();
      _ourRelayAddr = new WeakMap();
      _turnAllocating = new WeakMap();
      _bootstrap = new WeakMap();
      _dht = new WeakMap();
      _knownNodes = new WeakMap();
      _announceDataKey = new WeakMap();
      _lastSelfAnnounceMs = new WeakMap();
      _debug4 = new WeakMap();
      _debugVerbose = new WeakMap();
      _packetTrace = new WeakMap();
      _lastFriendRequestDispatch = new WeakMap();
      _nodeHealth = new WeakMap();
      _nodeBlacklist = new WeakMap();
      _pendingFriendRequests = new WeakMap();
      _friends = new WeakMap();
      _textHandlers = new WeakMap();
      _pendingTextAcks = new WeakMap();
      _deliveredTextIds = new WeakMap();
      _deliveredTextOrder = new WeakMap();
      _friendStoreFile = new WeakMap();
      _persistSeq = new WeakMap();
      _cookieSymmetricKey = new WeakMap();
      _friendSessions = new WeakMap();
      _cryptoEndpointIndex = new WeakMap();
      _express = new WeakMap();
      _expressPollTimer = new WeakMap();
      _tcpRelays = new WeakMap();
      _selfAnnounceTimer = new WeakMap();
      _friendConnectionTimer = new WeakMap();
      _lanDiscoveryTimer = new WeakMap();
      _lanProbeTargets = new WeakMap();
      _ownHostProbeFriendId = new WeakMap();
      _ownHostProbeUntilMs = new WeakMap();
      _dhtMaintenanceTimer = new WeakMap();
      _dhtPkSendCooldown = new WeakMap();
      _onionLookupCooldown = new WeakMap();
      _onionLookupMisses = new WeakMap();
      _routeRequestCooldown = new WeakMap();
      _announceRouteUsed = new WeakMap();
      _friendDhtKeys = new WeakMap();
      _friendRequestResendCooldown = new WeakMap();
      _dhtPkConsecutiveFailures = new WeakMap();
      _lastSelfAnnounceStoredCount = new WeakMap();
      _diagTcpOnionSent = new WeakMap();
      _diagTcpOnionRecv = new WeakMap();
      _lastLoggedRoutesForFriend = new WeakMap();
      _lastCookieSentKey = new WeakMap();
      _lastEndpointSelectedKey = new WeakMap();
      _cookieRetryCount = new WeakMap();
      _tcpOnlyWarningShown = new WeakMap();
      _noEndpointWarned = new WeakMap();
      _initiateSkipLogged = new WeakMap();
      _bulkAssembly = new WeakMap();
      _inviteAssembly = new WeakMap();
      _initiateDeferSinceMs = new WeakMap();
      _lastDesyncDeleteMs = new WeakMap();
      _srflxCache = new WeakMap();
      _profileSentTo = new WeakMap();
      _profileRetryAttempts = new WeakMap();
      _profileRetryTimers = new WeakMap();
      _greetingSentTo = new WeakMap();
      _selfAnnouncePromise = new WeakMap();
      _selfAnnouncePauseDepth = new WeakMap();
      _started = new WeakMap();
      _newSessionShell = new WeakSet();
      newSessionShell_fn = function() {
        return {
          ourSessionKeyPair: createEphemeralKeyPair(),
          ourBaseNonce: randomBytes2(24)
        };
      };
      _recordOutgoingFriendRequest = new WeakSet();
      recordOutgoingFriendRequest_fn = function(friendId, address, nospam, hello) {
        const existing = __privateGet(this, _friends).get(friendId);
        if (existing?.status === "online" || existing?.acceptedAt) {
          return;
        }
        __privateGet(this, _friends).set(friendId, {
          ...existing,
          pubkey: friendId,
          userid: friendId,
          address,
          nospam,
          hello: hello ?? existing?.hello,
          status: existing?.status ?? "requested",
          requestedAt: existing?.requestedAt ?? Date.now()
        });
        __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
        if (__privateGet(this, _tcpRelays)) {
          try {
            const pk = parseCarrierAddress(address).publicKey;
            __privateGet(this, _tcpRelays).requestRoute(pk);
          } catch {
          }
        }
      };
      _sendTextPlain = new WeakSet();
      sendTextPlain_fn = async function(pubkey, text) {
        const friend = __privateGet(this, _friends).get(pubkey);
        if (!friend) {
          throw new Error(`Not a friend: ${pubkey}`);
        }
        let session = __privateGet(this, _friendSessions).get(pubkey);
        if (!session?.established) {
          await __privateMethod(this, _initiateSession, initiateSession_fn).call(this, pubkey).catch(() => {
          });
          const established = await __privateMethod(this, _waitForFriendConnected, waitForFriendConnected_fn).call(this, pubkey, 5e3).catch(() => false);
          if (established) {
            session = __privateGet(this, _friendSessions).get(pubkey);
          }
        }
        const packet = encodeFriendMessagePacket(text);
        const rawText = new TextEncoder().encode(text);
        let livePackets;
        if (rawText.length > CARRIER_MAX_APP_MESSAGE_LEN) {
          if (rawText.length > CARRIER_MAX_APP_BULKMSG_LEN) {
            throw new Error(`message exceeds bulk limit (${rawText.length} > ${CARRIER_MAX_APP_BULKMSG_LEN})`);
          }
          const tid = BigInt(Date.now()) << 20n ^ BigInt(Math.floor(Math.random() * 1048575));
          livePackets = [];
          for (let off = 0; off < rawText.length; off += CARRIER_MAX_APP_MESSAGE_LEN) {
            livePackets.push(encodeBulkMsgPacket({
              totalsz: off === 0 ? rawText.length : 0,
              tid,
              data: rawText.subarray(off, Math.min(off + CARRIER_MAX_APP_MESSAGE_LEN, rawText.length))
            }));
          }
        } else {
          livePackets = [packet];
        }
        const provenInbound = session?.lastPingRecvMs !== void 0 && Date.now() - session.lastPingRecvMs < FRIEND_TIMEOUT_MS;
        const liveSession = session?.established && session.sessionSharedKey && session.ourBaseNonce && (session.remote || session.hasTcpRoute) && provenInbound;
        if (liveSession) {
          try {
            for (const p of livePackets) {
              await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, pubkey, PACKET_ID_MESSAGE, p);
            }
            return { via: "online", endPacketNumber: __privateGet(this, _friendSessions).get(pubkey)?.sendPacketNumber };
          } catch (error) {
            const emsg = error.message;
            if (/1\.\.1373 bytes|payload must be 1/i.test(emsg)) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `sendText: oversized payload for ${pubkey} (${emsg}) \u2014 NOT queuing to express (would flood); caller must chunk`);
              throw error;
            }
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `sendText: in-session send failed for ${pubkey}, falling back to express: ${emsg}`);
          }
        }
        if (text.length === 0) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `sendText: empty connection-kick to ${pubkey} with no live session \u2014 dropping (not flooding express)`);
          return { via: "online" };
        }
        if (__privateGet(this, _express)?.hasNodes() && !__privateGet(this, _opts3).expressControlPlaneOnly) {
          await __privateGet(this, _express).sendOfflineText(pubkey, packet);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `sendText: queued via express for ${pubkey}`);
          return { via: "offline" };
        }
        throw new Error("friend is offline and no express node is configured");
      };
      _shouldRequireTextAck = new WeakSet();
      shouldRequireTextAck_fn = function(pubkey) {
        const friend = __privateGet(this, _friends).get(pubkey);
        if ((friend?.protoVersion ?? 0) >= 2)
          return true;
        return __privateGet(this, _opts3).expressControlPlaneOnly === true;
      };
      _waitForTextAck = new WeakSet();
      waitForTextAck_fn = function(deliveryId, timeoutMs) {
        return new Promise((resolve2) => {
          const timer = setTimeout(() => {
            __privateGet(this, _pendingTextAcks).delete(deliveryId);
            resolve2(false);
          }, timeoutMs);
          timer.unref?.();
          __privateGet(this, _pendingTextAcks).set(deliveryId, {
            resolve: () => {
              clearTimeout(timer);
              __privateGet(this, _pendingTextAcks).delete(deliveryId);
              resolve2(true);
            },
            reject: () => {
              clearTimeout(timer);
              __privateGet(this, _pendingTextAcks).delete(deliveryId);
              resolve2(false);
            }
          });
        });
      };
      _cancelTextAckWait = new WeakSet();
      cancelTextAckWait_fn = function(deliveryId) {
        __privateGet(this, _pendingTextAcks).get(deliveryId)?.reject(new Error("text delivery ACK wait cancelled"));
      };
      _waitForFriendConnected = new WeakSet();
      waitForFriendConnected_fn = function(pubkey, timeoutMs) {
        const session = __privateGet(this, _friendSessions).get(pubkey);
        if (session?.established) {
          return Promise.resolve(true);
        }
        return new Promise((resolve2) => {
          const timer = setTimeout(() => {
            __privateGet(this, _events).off("friendConnection", onConnection);
            resolve2(false);
          }, timeoutMs);
          const onConnection = (ev) => {
            if (ev.pubkey === pubkey && ev.status === "connected") {
              clearTimeout(timer);
              __privateGet(this, _events).off("friendConnection", onConnection);
              resolve2(true);
            }
          };
          __privateGet(this, _events).on("friendConnection", onConnection);
        });
      };
      _dispatchTextMessage = new WeakSet();
      dispatchTextMessage_fn = async function(msg) {
        const envelope = decodeTextAckEnvelope(msg.text);
        if (envelope?.t === "ack") {
          __privateGet(this, _pendingTextAcks).get(envelope.id)?.resolve();
          return;
        }
        let deliveryId;
        let text = msg.text;
        if (envelope?.t === "msg") {
          deliveryId = envelope.id;
          text = envelope.text;
          if (__privateGet(this, _deliveredTextIds).has(deliveryId)) {
            await __privateMethod(this, _sendTextAck, sendTextAck_fn).call(this, msg.pubkey, deliveryId);
            return;
          }
        }
        if (__privateGet(this, _textHandlers).size === 0) {
          if (deliveryId)
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `text delivery ${deliveryId} from ${msg.pubkey} has no onText handlers; not ACKing`);
          return;
        }
        const ack = deliveryId ? async () => {
          await __privateMethod(this, _sendTextAck, sendTextAck_fn).call(this, msg.pubkey, deliveryId);
        } : void 0;
        const delivered = { ...msg, text, deliveryId, ack };
        if (deliveryId) {
          __privateMethod(this, _rememberDeliveredTextId, rememberDeliveredTextId_fn).call(this, deliveryId);
          void ack?.();
        }
        try {
          for (const handler of __privateGet(this, _textHandlers)) {
            await handler(delivered);
          }
        } catch (error) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `text handler failed for ${msg.pubkey}: ${error.message}`);
        }
      };
      _sendTextAck = new WeakSet();
      sendTextAck_fn = async function(pubkey, deliveryId) {
        try {
          await this.sendText(pubkey, encodeTextAckEnvelope({ t: "ack", id: deliveryId }));
        } catch (error) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `text ACK send failed for ${pubkey}: ${error.message}`);
        }
      };
      _rememberDeliveredTextId = new WeakSet();
      rememberDeliveredTextId_fn = function(deliveryId) {
        if (__privateGet(this, _deliveredTextIds).has(deliveryId))
          return;
        __privateGet(this, _deliveredTextIds).add(deliveryId);
        __privateGet(this, _deliveredTextOrder).push(deliveryId);
        while (__privateGet(this, _deliveredTextOrder).length > 4096) {
          const old = __privateGet(this, _deliveredTextOrder).shift();
          if (old)
            __privateGet(this, _deliveredTextIds).delete(old);
        }
      };
      _awaitTransportAck = new WeakSet();
      awaitTransportAck_fn = async function(pubkey, endPacketNumber, timeoutMs) {
        const watched = __privateGet(this, _friendSessions).get(pubkey);
        if (!watched)
          return false;
        const deadline = Date.now() + timeoutMs;
        for (; ; ) {
          const session = __privateGet(this, _friendSessions).get(pubkey);
          if (session !== watched || !session.established)
            return false;
          const start = session.sendBufferStartNum;
          if (start !== void 0) {
            const pending = endPacketNumber - start >>> 0;
            if (pending === 0 || pending > 2147483648)
              return true;
          } else if (!session.sendArray || session.sendArray.size === 0) {
            return true;
          }
          if (Date.now() >= deadline)
            return false;
          await sleep(250);
        }
      };
      _sendDnft1Frame = new WeakSet();
      sendDnft1Frame_fn = async function(friendId, packetId, payload) {
        const frame = encodeDnft1Frame(packetId, payload);
        if (frame.length <= CARRIER_MAX_APP_MESSAGE_LEN) {
          await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_MESSAGE, encodeFriendMessagePacket(frame));
          return;
        }
        const tid = BigInt(Date.now()) << 20n ^ BigInt(Math.floor(Math.random() * 1048575));
        for (let off = 0; off < frame.length; off += CARRIER_MAX_APP_MESSAGE_LEN) {
          const end = Math.min(off + CARRIER_MAX_APP_MESSAGE_LEN, frame.length);
          await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_MESSAGE, encodeBulkMsgPacket({
            totalsz: off === 0 ? frame.length : 0,
            tid,
            data: frame.subarray(off, end)
          }));
        }
      };
      _learnFriendDhtKey = new WeakSet();
      learnFriendDhtKey_fn = function(friendId, dhtPublicKey) {
        if (dhtPublicKey.length !== 32)
          return;
        __privateGet(this, _friendDhtKeys).set(friendId, new Uint8Array(dhtPublicKey));
        const friend = __privateGet(this, _friends).get(friendId);
        if (friend) {
          const b58 = carrierIdFromPublicKey(dhtPublicKey);
          if (friend.dhtPubkey !== b58) {
            __privateGet(this, _friends).set(friendId, { ...friend, dhtPubkey: b58 });
            __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
          }
        }
      };
      _friendIdForPoolKey = new WeakSet();
      friendIdForPoolKey_fn = function(poolKey) {
        const asId = carrierIdFromPublicKey(poolKey);
        if (__privateGet(this, _friends).has(asId))
          return asId;
        for (const [friendId, dhtPk] of __privateGet(this, _friendDhtKeys)) {
          if (bytesEqual3(dhtPk, poolKey))
            return friendId;
        }
        return asId;
      };
      _handleTcpDatagram = new WeakSet();
      handleTcpDatagram_fn = function(friendKey, payload) {
        const poolId = carrierIdFromPublicKey(friendKey);
        const friendId = __privateMethod(this, _friendIdForPoolKey, friendIdForPoolKey_fn).call(this, friendKey);
        let session = __privateGet(this, _friendSessions).get(friendId);
        if (!session) {
          session = __privateMethod(this, _newSessionShell, newSessionShell_fn).call(this);
          __privateGet(this, _friendSessions).set(friendId, session);
        }
        session.hasTcpRoute = true;
        if (friendId !== poolId) {
          session.friendDhtPublicKey ?? (session.friendDhtPublicKey = new Uint8Array(friendKey));
        } else {
          session.friendRealPublicKey ?? (session.friendRealPublicKey = new Uint8Array(friendKey));
        }
        __privateGet(this, _onDatagram).call(this, {
          data: Buffer2.from(payload),
          remote: { address: `tcp:${poolId}`, port: 0 }
        });
      };
      _remoteIsTcp = new WeakSet();
      remoteIsTcp_fn = function(remote) {
        return remote.address.startsWith("tcp:");
      };
      _onDatagram = new WeakMap();
      _handleOnionDhtPk = new WeakSet();
      handleOnionDhtPk_fn = function(senderPublicKey, payload) {
        const senderId = carrierIdFromPublicKey(senderPublicKey);
        if (payload.length < 8 + 32) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion dhtpk payload too short from ${senderId}: len=${payload.length}`);
          return;
        }
        const noReplay = readUint64BE(payload, 0);
        const friendDhtPublicKey = payload.slice(8, 40);
        const extra = payload.slice(40);
        const extraPreview = Buffer2.from(extra.slice(0, Math.min(48, extra.length))).toString("hex");
        let extraNodes = parsePackedNodes(extra);
        if (extraNodes.length === 0 && __privateGet(this, _keyPair2) && extra.length > 24 + 16) {
          const nonce = extra.slice(0, 24);
          const encrypted = extra.slice(24);
          const openedBySender = import_tweetnacl13.default.box.open(encrypted, nonce, senderPublicKey, __privateGet(this, _keyPair2).secretKey);
          if (openedBySender) {
            const decryptedNodes = parsePackedNodes(openedBySender);
            if (decryptedNodes.length > 0) {
              extraNodes = decryptedNodes;
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion dhtpk decrypted extra using sender key; nodes=${decryptedNodes.length}`);
            }
          }
          if (extraNodes.length === 0) {
            const openedByDhtPk = import_tweetnacl13.default.box.open(encrypted, nonce, friendDhtPublicKey, __privateGet(this, _keyPair2).secretKey);
            if (openedByDhtPk) {
              const decryptedNodes = parsePackedNodes(openedByDhtPk);
              if (decryptedNodes.length > 0) {
                extraNodes = decryptedNodes;
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion dhtpk decrypted extra using dht key; nodes=${decryptedNodes.length}`);
              }
            }
          }
        }
        const friend = __privateGet(this, _friends).get(senderId);
        if (!friend) {
          return;
        }
        let session = __privateGet(this, _friendSessions).get(senderId);
        if (!session) {
          session = {
            ourSessionKeyPair: createEphemeralKeyPair(),
            ourBaseNonce: randomBytes2(24)
          };
          __privateGet(this, _friendSessions).set(senderId, session);
        }
        if (session.lastDhtPkNoReplay !== void 0 && noReplay <= session.lastDhtPkNoReplay) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion dhtpk replay/old packet ignored from ${senderId} noReplay=${noReplay.toString()}`);
          return;
        }
        session.lastDhtPkNoReplay = noReplay;
        session.friendRealPublicKey ?? (session.friendRealPublicKey = senderPublicKey);
        session.friendDhtPublicKey = friendDhtPublicKey;
        __privateMethod(this, _learnFriendDhtKey, learnFriendDhtKey_fn).call(this, senderId, friendDhtPublicKey);
        if (friend.status === "requested" && !friend.acceptedAt) {
          __privateGet(this, _friends).set(senderId, {
            ...friend,
            status: "offline",
            acceptedAt: Date.now()
          });
          __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend ${senderId} accepted (proof: dhtpk_update); will stop re-sending friend request`);
        }
        const friendDhtId = carrierIdFromPublicKey(friendDhtPublicKey);
        const knownMatch = __privateGet(this, _knownNodes).find((node) => node.pk === friendDhtId || node.pk === senderId);
        if (knownMatch) {
          __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, senderId, knownMatch.host, knownMatch.port, senderPublicKey, friendDhtPublicKey);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion dhtpk matched known node for ${senderId} at ${knownMatch.host}:${knownMatch.port}`);
        }
        if (!__privateGet(this, _friendSessions).get(senderId)?.established) {
          __privateGet(this, _cookieRetryCount).delete(senderId);
        }
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dhtpk_update friend=${senderId} noReplay=${noReplay.toString()} dhtpk=${carrierIdFromPublicKey(friendDhtPublicKey)} extraLen=${extra.length} extraNodes=${extraNodes.length} extraPreviewHex=${extraPreview}`);
        if (extraNodes.length > 0) {
          for (const candidate of extraNodes) {
            if (candidate.isTcp) {
              if (__privateGet(this, _tcpRelays)) {
                __privateGet(this, _tcpRelays).addRelay(candidate);
                __privateGet(this, _tcpRelays).requestRoute(friendDhtPublicKey);
              }
            } else {
              __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, senderId, candidate.host, candidate.port, senderPublicKey, friendDhtPublicKey);
            }
          }
        }
        void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, senderId).catch((error) => {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `onion dhtpk initiate session failed for ${senderId}: ${error.message}`);
        });
        void __privateMethod(this, _discoverAndCacheFriendEndpoint, discoverAndCacheFriendEndpoint_fn).call(this, senderId, friendDhtPublicKey).then((found) => {
          if (!found) {
            return __privateMethod(this, _discoverAndCacheFriendEndpoint, discoverAndCacheFriendEndpoint_fn).call(this, senderId, senderPublicKey);
          }
          return Promise.resolve(true);
        }).then((found) => {
          if (!found) {
            return;
          }
          void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, senderId).catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend endpoint discovery initiate failed for ${senderId}: ${error.message}`);
          });
        }).catch((error) => {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend endpoint discovery failed for ${senderId}: ${error.message}`);
        });
      };
      _emitFriendRequest = new WeakSet();
      emitFriendRequest_fn = function(senderPublicKey, carrierPacket, nospam) {
        let hello = "";
        let name = "";
        let description = "";
        try {
          const decoded = decodeCarrierPacket(carrierPacket);
          if (decoded.type !== PACKET_TYPE_FRIEND_REQUEST) {
            return;
          }
          hello = decoded.hello;
          name = decoded.name;
          description = decoded.descr;
        } catch {
          return;
        }
        const userid = carrierIdFromPublicKey(senderPublicKey);
        if (__privateGet(this, _friends).has(userid)) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend request from existing friend ${userid} treated as reconnection signal`);
          void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, userid).catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `reconnect initiate session failed for ${userid}: ${error.message}`);
          });
          return;
        }
        if (__privateGet(this, _pendingFriendRequests).has(userid)) {
          return;
        }
        const request = {
          pubkey: userid,
          userid,
          nospam,
          address: carrierAddressFromPublicKey(senderPublicKey, nospam),
          name,
          description,
          hello
        };
        __privateGet(this, _pendingFriendRequests).set(userid, request);
        __privateGet(this, _events).emit("friendInfo", {
          pubkey: userid,
          userid,
          name,
          description
        });
        __privateGet(this, _events).emit("friendRequest", request);
      };
      _emitOfflineFriendRequest = new WeakSet();
      emitOfflineFriendRequest_fn = function(fromUserId, packet) {
        let helloText = "";
        let name = "";
        let description = "";
        try {
          const decoded = decodeCarrierPacket(packet);
          if (decoded.type !== PACKET_TYPE_FRIEND_REQUEST) {
            return;
          }
          helloText = decoded.hello;
          name = decoded.name;
          description = decoded.descr;
        } catch {
          return;
        }
        const existingFriend = __privateGet(this, _friends).get(fromUserId);
        if (existingFriend?.acceptedAt || existingFriend?.status === "online") {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `ignoring offline friend-request from already-accepted friend ${fromUserId}`);
          return;
        }
        if (__privateGet(this, _pendingFriendRequests).has(fromUserId)) {
          return;
        }
        const request = {
          pubkey: fromUserId,
          userid: fromUserId,
          name,
          description,
          hello: helloText
        };
        __privateGet(this, _pendingFriendRequests).set(fromUserId, request);
        __privateGet(this, _events).emit("friendInfo", {
          pubkey: fromUserId,
          userid: fromUserId,
          name,
          description
        });
        __privateGet(this, _events).emit("friendRequest", request);
      };
      _emitOfflineFriendMessage = new WeakSet();
      emitOfflineFriendMessage_fn = function(fromUserId, packet) {
        try {
          const decoded = decodeCarrierPacket(packet);
          if (decoded.type !== PACKET_TYPE_MESSAGE) {
            return;
          }
          const text = new TextDecoder().decode(decoded.data);
          const friend = __privateGet(this, _friends).get(fromUserId);
          if (friend && friend.status === "requested" && !friend.acceptedAt) {
            __privateGet(this, _friends).set(fromUserId, {
              ...friend,
              status: "offline",
              acceptedAt: Date.now()
            });
            __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `offline message from ${fromUserId} treated as implicit accept of our friend request; friend is now accepted, queueing DHT-PK announce`);
            try {
              const realPk = base58ToBytes(fromUserId);
              if (realPk.length === 32) {
                __privateGet(this, _dhtPkSendCooldown).delete(fromUserId);
                void __privateMethod(this, _sendOnionDhtPk, sendOnionDhtPk_fn).call(this, realPk).catch(() => {
                });
              }
            } catch {
            }
          }
          if (__privateMethod(this, _tryEmitBinaryInlineFile, tryEmitBinaryInlineFile_fn).call(this, fromUserId, decoded.data, "offline"))
            return;
          if (parseDnft1Frame(decoded.data)) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `ignoring DNFT1 frame from ${fromUserId} on the express path`);
            return;
          }
          if (__privateMethod(this, _tryEmitInlineFile, tryEmitInlineFile_fn).call(this, fromUserId, text, "offline"))
            return;
          void __privateMethod(this, _dispatchTextMessage, dispatchTextMessage_fn).call(this, { pubkey: fromUserId, text, via: "offline" });
        } catch {
        }
      };
      _discoverFriendRoutes = new WeakSet();
      discoverFriendRoutes_fn = async function(friendPublicKey, userInitiated = false) {
        if (!__privateGet(this, _keyPair2)) {
          throw new Error("Peer is not started");
        }
        const routeKey = `routes:${carrierIdFromPublicKey(friendPublicKey)}`;
        if (!userInitiated) {
          const misses = __privateGet(this, _onionLookupMisses).get(routeKey) ?? 0;
          const budget = Math.min(DHT_PK_ANNOUNCE_COOLDOWN_MS * Math.max(1, misses), ONION_LOOKUP_MAX_BACKOFF_MS);
          const since = Date.now() - (__privateGet(this, _onionLookupCooldown).get(routeKey) ?? 0);
          if (since < budget) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `route discovery for ${routeKey} skipped: ${Math.round(since / 1e3)}s since last (budget ${Math.round(budget / 1e3)}s, misses ${misses})`);
            return [];
          }
          __privateGet(this, _onionLookupCooldown).set(routeKey, Date.now());
        }
        const searchKey = createEphemeralKeyPair();
        const routes = [];
        const routeSeen = /* @__PURE__ */ new Set();
        const pkCache = /* @__PURE__ */ new Map();
        const nodePkBytes = (node) => {
          if (!node.pk)
            return null;
          let v = pkCache.get(node.pk);
          if (v === void 0) {
            try {
              const b = base58ToBytes(node.pk);
              v = b.length === 32 ? b : null;
            } catch {
              v = null;
            }
            pkCache.set(node.pk, v);
          }
          return v;
        };
        const xorCloser2 = (a, b) => {
          for (let i = 0; i < 32; i++) {
            const da = a[i] ^ friendPublicKey[i];
            const db = b[i] ^ friendPublicKey[i];
            if (da !== db)
              return da - db;
          }
          return 0;
        };
        const byDistance = (x, y) => {
          const px = nodePkBytes(x);
          const py = nodePkBytes(y);
          if (!px || !py)
            return px ? -1 : py ? 1 : 0;
          const c = xorCloser2(px, py);
          if (c !== 0)
            return c;
          return __privateMethod(this, _nodeScore, nodeScore_fn).call(this, `${y.host}:${y.port}`) - __privateMethod(this, _nodeScore, nodeScore_fn).call(this, `${x.host}:${x.port}`);
        };
        const bootstrapIdSet = new Set(__privateGet(this, _opts3).bootstrapNodes.map((n) => `${n.host}:${n.port}`));
        const queue = dedupeNodes(__privateGet(this, _knownNodes).length > 0 ? __privateGet(this, _knownNodes) : __privateGet(this, _opts3).bootstrapNodes).filter((n) => !__privateMethod(this, _isNodeBlacklisted, isNodeBlacklisted_fn).call(this, `${n.host}:${n.port}`)).sort(byDistance);
        const friendId = carrierIdFromPublicKey(friendPublicKey);
        const visited = /* @__PURE__ */ new Set();
        let attempts = 0;
        const maxAttempts = MAX_FRIEND_ROUTE_ATTEMPTS;
        while (queue.length > 0 && attempts < maxAttempts && routes.length < 8) {
          const batch = [];
          const takeInto = (node) => {
            const nodeId = `${node.host}:${node.port}`;
            if (visited.has(nodeId))
              return false;
            const nodePk = nodePkBytes(node);
            if (!nodePk) {
              visited.add(nodeId);
              return false;
            }
            visited.add(nodeId);
            attempts += 1;
            batch.push({ node, nodePk, sendBack: randomBytes2(8) });
            return true;
          };
          if (attempts === 0) {
            let bootstrapsTaken = 0;
            for (const node of queue) {
              if (bootstrapsTaken >= 2 || attempts >= maxAttempts)
                break;
              if (bootstrapIdSet.has(`${node.host}:${node.port}`) && takeInto(node))
                bootstrapsTaken++;
            }
          }
          queue.sort(byDistance);
          while (queue.length > 0 && batch.length < FRIEND_ROUTE_BATCH_SIZE && attempts < maxAttempts) {
            takeInto(queue.shift());
          }
          if (batch.length === 0) {
            break;
          }
          const zeroPing = new Uint8Array(32);
          const settled = await Promise.allSettled(batch.map((c) => __privateMethod(this, _sendAnnounceAndWait, sendAnnounceAndWait_fn).call(this, {
            node: c.node,
            nodePublicKey: c.nodePk,
            senderPublicKey: searchKey.publicKey,
            senderSecretKey: searchKey.secretKey,
            pingId: zeroPing,
            searchPublicKey: friendPublicKey,
            dataPublicKey: new Uint8Array(32),
            sendBack: c.sendBack,
            allowDirectFallback: true,
            attempts: FRIEND_ANNOUNCE_ATTEMPTS
          })));
          for (let i = 0; i < batch.length; i++) {
            const candidate = batch[i];
            const result = settled[i];
            const nodeId = `${candidate.node.host}:${candidate.node.port}`;
            const response1 = result.status === "fulfilled" ? result.value : void 0;
            if (!response1) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `announce step1 no response from ${nodeId}`);
              continue;
            }
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `announce step1 response from ${nodeId} isStored=${response1.isStored}`);
            if (response1.isStored === 1) {
              const routeKey2 = `${nodeId}:${Buffer2.from(response1.pingOrDataPublicKey).toString("hex")}`;
              if (!routeSeen.has(routeKey2)) {
                routeSeen.add(routeKey2);
                routes.push({
                  node: candidate.node,
                  routePublicKey: response1.pingOrDataPublicKey
                });
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `route discovered via ${nodeId}`);
              }
            }
            const discovered = parsePackedNodes(response1.nodes);
            if (discovered.length > 0) {
              __privateSet(this, _knownNodes, dedupeNodes([...__privateGet(this, _knownNodes), ...discovered]));
              for (const discoveredNode of discovered) {
                if (discoveredNode.pk === friendId) {
                  __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, friendId, discoveredNode.host, discoveredNode.port, friendPublicKey, friendPublicKey);
                }
                const discoveredId = `${discoveredNode.host}:${discoveredNode.port}`;
                if (!visited.has(discoveredId) && !__privateMethod(this, _isNodeBlacklisted, isNodeBlacklisted_fn).call(this, discoveredId)) {
                  queue.push(discoveredNode);
                }
              }
            }
          }
        }
        if (!userInitiated) {
          if (routes.length > 0)
            __privateGet(this, _onionLookupMisses).delete(routeKey);
          else
            __privateGet(this, _onionLookupMisses).set(routeKey, (__privateGet(this, _onionLookupMisses).get(routeKey) ?? 0) + 1);
        }
        return routes;
      };
      _discoverAndCacheFriendEndpoint = new WeakSet();
      discoverAndCacheFriendEndpoint_fn = async function(friendId, searchPublicKey) {
        if (!__privateGet(this, _keyPair2)) {
          return false;
        }
        const targetId = carrierIdFromPublicKey(searchPublicKey);
        const budgetKey = `${friendId}:${targetId}`;
        const lastLookup = __privateGet(this, _onionLookupCooldown).get(budgetKey) ?? 0;
        const sinceLast = Date.now() - lastLookup;
        const misses = __privateGet(this, _onionLookupMisses).get(budgetKey) ?? 0;
        const budget = Math.min(DHT_PK_ANNOUNCE_COOLDOWN_MS * Math.max(1, misses), ONION_LOOKUP_MAX_BACKOFF_MS);
        if (sinceLast < budget) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `endpoint lookup for ${friendId} skipped: ${Math.round(sinceLast / 1e3)}s since last (budget ${Math.round(budget / 1e3)}s, misses ${misses})`);
          return false;
        }
        __privateGet(this, _onionLookupCooldown).set(budgetKey, Date.now());
        const width = Math.max(8, Math.min(24, MAX_FRIEND_ROUTE_ATTEMPTS));
        const queue = dedupeNodes(__privateGet(this, _knownNodes).length > 0 ? __privateGet(this, _knownNodes) : __privateGet(this, _opts3).bootstrapNodes).filter((n) => !__privateMethod(this, _isNodeBlacklisted, isNodeBlacklisted_fn).call(this, `${n.host}:${n.port}`)).sort((a, b) => __privateMethod(this, _nodeScore, nodeScore_fn).call(this, `${b.host}:${b.port}`) - __privateMethod(this, _nodeScore, nodeScore_fn).call(this, `${a.host}:${a.port}`)).slice(0, width);
        const directKnown = queue.find((node) => node.pk === targetId);
        if (directKnown) {
          __privateGet(this, _onionLookupMisses).delete(budgetKey);
          __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, friendId, directKnown.host, directKnown.port);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend endpoint matched known node for ${friendId} at ${directKnown.host}:${directKnown.port}`);
          return true;
        }
        const visited = /* @__PURE__ */ new Set();
        for (const node of queue) {
          const nodeId = `${node.host}:${node.port}`;
          if (visited.has(nodeId) || !node.pk) {
            continue;
          }
          visited.add(nodeId);
          let nodePk;
          try {
            nodePk = base58ToBytes(node.pk);
          } catch {
            continue;
          }
          if (nodePk.length !== 32) {
            continue;
          }
          const sendBack = randomBytes2(8);
          const response1 = await __privateMethod(this, _sendAnnounceAndWait, sendAnnounceAndWait_fn).call(this, {
            node,
            nodePublicKey: nodePk,
            senderPublicKey: __privateGet(this, _keyPair2).publicKey,
            senderSecretKey: __privateGet(this, _keyPair2).secretKey,
            pingId: new Uint8Array(32),
            searchPublicKey,
            dataPublicKey: new Uint8Array(32),
            sendBack,
            allowDirectFallback: true,
            attempts: 1
          });
          if (!response1) {
            continue;
          }
          const response2 = await __privateMethod(this, _sendAnnounceAndWait, sendAnnounceAndWait_fn).call(this, {
            node,
            nodePublicKey: nodePk,
            senderPublicKey: __privateGet(this, _keyPair2).publicKey,
            senderSecretKey: __privateGet(this, _keyPair2).secretKey,
            pingId: response1.pingOrDataPublicKey,
            searchPublicKey,
            dataPublicKey: new Uint8Array(32),
            sendBack,
            allowDirectFallback: true,
            attempts: 1
          });
          const responses = response2 ? [response1, response2] : [response1];
          const discovered = responses.flatMap((resp) => parsePackedNodes(resp.nodes));
          if (discovered.length > 0) {
            __privateSet(this, _knownNodes, dedupeNodes([...__privateGet(this, _knownNodes), ...discovered]));
          }
          const exact = discovered.find((n) => n.pk === targetId);
          if (exact) {
            __privateGet(this, _onionLookupMisses).delete(budgetKey);
            __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, friendId, exact.host, exact.port);
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend endpoint discovered for ${friendId} at ${exact.host}:${exact.port}`);
            return true;
          }
        }
        __privateGet(this, _onionLookupMisses).set(budgetKey, (__privateGet(this, _onionLookupMisses).get(budgetKey) ?? 0) + 1);
        return false;
      };
      _announceSelfBestEffort = new WeakSet();
      announceSelfBestEffort_fn = async function(force = false, deadlineMs = Number.POSITIVE_INFINITY) {
        if (!__privateGet(this, _keyPair2) || !__privateGet(this, _announceDataKey)) {
          return [];
        }
        const now = Date.now();
        if (!force && now - __privateGet(this, _lastSelfAnnounceMs) < 12e3) {
          return [];
        }
        __privateSet(this, _lastSelfAnnounceMs, now);
        const storedNodes = [];
        const selfPk = __privateGet(this, _keyPair2).publicKey;
        const zeroPing = new Uint8Array(32);
        const visited = /* @__PURE__ */ new Set();
        const queue = [];
        const enqueueNodes = (nodes) => {
          for (const node of nodes) {
            if (!node.pk)
              continue;
            const id = `${node.host}:${node.port}`;
            if (visited.has(id) || __privateMethod(this, _isNodeBlacklisted, isNodeBlacklisted_fn).call(this, id))
              continue;
            if (queue.some((q) => `${q.node.host}:${q.node.port}` === id))
              continue;
            let nodePk;
            try {
              nodePk = base58ToBytes(node.pk);
            } catch {
              continue;
            }
            if (nodePk.length !== 32)
              continue;
            queue.push({ node, nodePk, sendBack: randomBytes2(8) });
          }
          queue.sort((x, y) => xorCloser(selfPk, x.nodePk, y.nodePk));
        };
        enqueueNodes(__privateGet(this, _knownNodes).length > 0 ? __privateGet(this, _knownNodes) : __privateGet(this, _opts3).bootstrapNodes);
        __privateSet(this, _lastSelfAnnounceStoredCount, 0);
        const STORE_TARGET = 4;
        let waves = 0;
        while (queue.length > 0 && storedNodes.length < STORE_TARGET && waves < 16) {
          if (Date.now() >= deadlineMs) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, "self announce stopped at deadline");
            __privateSet(this, _lastSelfAnnounceStoredCount, storedNodes.length);
            return storedNodes;
          }
          waves += 1;
          const wave = [];
          if (waves === 1) {
            const bootstrapIdSet = new Set(__privateGet(this, _opts3).bootstrapNodes.map((n) => `${n.host}:${n.port}`));
            for (let qi = 0; qi < queue.length && wave.length < bootstrapIdSet.size; ) {
              const c = queue[qi];
              const id = `${c.node.host}:${c.node.port}`;
              if (bootstrapIdSet.has(id) && !visited.has(id)) {
                visited.add(id);
                wave.push(c);
                queue.splice(qi, 1);
              } else {
                qi++;
              }
            }
          }
          while (queue.length > 0 && wave.length < SELF_ANNOUNCE_BATCH_SIZE) {
            const c = queue.shift();
            const id = `${c.node.host}:${c.node.port}`;
            if (visited.has(id))
              continue;
            visited.add(id);
            wave.push(c);
          }
          if (wave.length === 0)
            break;
          const step1Settled = await Promise.allSettled(wave.map((c) => __privateMethod(this, _sendAnnounceAndWait, sendAnnounceAndWait_fn).call(this, {
            node: c.node,
            nodePublicKey: c.nodePk,
            senderPublicKey: __privateGet(this, _keyPair2).publicKey,
            senderSecretKey: __privateGet(this, _keyPair2).secretKey,
            pingId: zeroPing,
            searchPublicKey: __privateGet(this, _keyPair2).publicKey,
            dataPublicKey: __privateGet(this, _announceDataKey).publicKey,
            sendBack: c.sendBack,
            allowDirectFallback: true,
            attempts: SELF_ANNOUNCE_ATTEMPTS
          })));
          const step1Hits = [];
          for (let j = 0; j < wave.length; j++) {
            const r = step1Settled[j];
            const c = wave[j];
            const resp1 = r.status === "fulfilled" ? r.value : void 0;
            if (!resp1) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `self announce step1 no response from ${c.node.host}:${c.node.port}`);
              try {
                const fs = await Promise.resolve().then(() => (init_node_stub(), node_stub_exports));
                fs.appendFileSync("/tmp/decent-announce.log", `${(/* @__PURE__ */ new Date()).toISOString()} step1 from=${c.node.host}:${c.node.port} NO_RESPONSE
`);
              } catch {
              }
              continue;
            }
            if (process.env.DECENT_ANNOUNCE_DEBUG === "1")
              try {
                const fs = await Promise.resolve().then(() => (init_node_stub(), node_stub_exports));
                fs.appendFileSync("/tmp/decent-announce.log", `${(/* @__PURE__ */ new Date()).toISOString()} step1 from=${c.node.host}:${c.node.port} isStored=${resp1.isStored}
`);
              } catch {
              }
            step1Hits.push({ c, resp1 });
          }
          const step2Settled = await Promise.allSettled(step1Hits.map(({ c, resp1 }) => __privateMethod(this, _sendAnnounceAndWait, sendAnnounceAndWait_fn).call(this, {
            node: c.node,
            nodePublicKey: c.nodePk,
            senderPublicKey: __privateGet(this, _keyPair2).publicKey,
            senderSecretKey: __privateGet(this, _keyPair2).secretKey,
            pingId: resp1.pingOrDataPublicKey,
            searchPublicKey: __privateGet(this, _keyPair2).publicKey,
            dataPublicKey: __privateGet(this, _announceDataKey).publicKey,
            sendBack: c.sendBack,
            allowDirectFallback: true,
            attempts: SELF_ANNOUNCE_ATTEMPTS,
            // ping_id is source-bound: step2 must exit from the same hop
            // step1 did or the node rejects it and nothing ever stores.
            reuseRoute: true
          })));
          for (let j = 0; j < step1Hits.length; j++) {
            const { c, resp1 } = step1Hits[j];
            const r2 = step2Settled[j];
            const resp2 = r2.status === "fulfilled" ? r2.value : void 0;
            const final = resp2 ?? resp1;
            if (process.env.DECENT_ANNOUNCE_DEBUG === "1")
              try {
                const fs = await Promise.resolve().then(() => (init_node_stub(), node_stub_exports));
                fs.appendFileSync("/tmp/decent-announce.log", `${(/* @__PURE__ */ new Date()).toISOString()} step2 from=${c.node.host}:${c.node.port} ${resp2 ? "isStored=" + resp2.isStored : "NO_RESPONSE"}
`);
              } catch {
              }
            if (final.isStored === 2) {
              storedNodes.push(c.node);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `self announce STORED on ${c.node.host}:${c.node.port} (total ${storedNodes.length})`);
              __privateSet(this, _lastSelfAnnounceStoredCount, storedNodes.length);
            }
            const discovered = parsePackedNodes(final.nodes);
            if (discovered.length > 0) {
              __privateSet(this, _knownNodes, dedupeNodes([...__privateGet(this, _knownNodes), ...discovered]));
              enqueueNodes(discovered);
            }
          }
        }
        __privateSet(this, _lastSelfAnnounceStoredCount, storedNodes.length);
        return storedNodes;
      };
      _ensureSelfAnnounceLoop = new WeakSet();
      ensureSelfAnnounceLoop_fn = function() {
        if (__privateGet(this, _selfAnnounceTimer) || SELF_ANNOUNCE_INTERVAL_MS <= 0) {
          return;
        }
        __privateSet(this, _selfAnnounceTimer, setInterval(() => {
          if (__privateGet(this, _selfAnnouncePauseDepth) > 0) {
            return;
          }
          if (__privateGet(this, _selfAnnouncePromise)) {
            return;
          }
          void __privateMethod(this, _runSelfAnnounce, runSelfAnnounce_fn).call(this, false, Date.now() + JOIN_ANNOUNCE_TIMEOUT_MS).catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `background self announce failed: ${error.message}`);
          });
        }, SELF_ANNOUNCE_INTERVAL_MS));
        __privateGet(this, _selfAnnounceTimer).unref?.();
      };
      _ensureExpressPullLoop = new WeakSet();
      ensureExpressPullLoop_fn = function() {
        if (!__privateGet(this, _express)?.hasNodes() || __privateGet(this, _expressPollTimer) || EXPRESS_PULL_INTERVAL_MS <= 0) {
          return;
        }
        const pull = () => {
          void __privateGet(this, _express)?.pullOnce().catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `express pull failed: ${error.message}`);
          });
        };
        pull();
        __privateSet(this, _expressPollTimer, setInterval(pull, EXPRESS_PULL_INTERVAL_MS));
        __privateGet(this, _expressPollTimer).unref?.();
      };
      _ensureFriendConnectionLoop = new WeakSet();
      ensureFriendConnectionLoop_fn = function() {
        if (__privateGet(this, _friendConnectionTimer)) {
          return;
        }
        __privateSet(this, _friendConnectionTimer, setInterval(() => {
          void __privateMethod(this, _doFriendConnections, doFriendConnections_fn).call(this).catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend connection loop failed: ${error.message}`);
          });
        }, FRIEND_CONNECTION_LOOP_MS));
        __privateGet(this, _friendConnectionTimer).unref?.();
      };
      _doFriendConnections = new WeakSet();
      doFriendConnections_fn = async function() {
        const now = Date.now();
        for (const [friendId, friend] of __privateGet(this, _friends).entries()) {
          const session = __privateGet(this, _friendSessions).get(friendId);
          if (session?.established) {
            const lastAlive = session.lastPingRecvMs ?? session.sessionEstablishedAtMs ?? now;
            const silentFor = now - lastAlive;
            const proven = session.lastPingRecvMs !== void 0;
            const recentUndecryptable = session.undecryptableRecvMs !== void 0 && session.undecryptableRecvMs > lastAlive && now - session.undecryptableRecvMs <= REINIT_STUCK_MS;
            const rekeyStuck = recentUndecryptable && silentFor > REINIT_ON_DESYNC_MS;
            if (session.remote && !session.remote.host.startsWith("tcp:") && session.lastUdpRecvMs === void 0 && isPrivateAddress(session.remote.host) && !isCgnatAddress(session.remote.host) && !getPhysicalLanSubnets().some((sub) => isInIpv4Subnet(session.remote.host, sub))) {
              const dead = session.remote;
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `clearing unreachable remote ${dead.host}:${dead.port} for ${friendId} \u2014 private, off our LANs, and never received UDP from it`);
              session.remote = void 0;
              session.lanRemoteHost = void 0;
              session.endpointCandidates = (session.endpointCandidates ?? []).filter((c) => !(c.host === dead.host && c.port === dead.port));
            }
            const relayOnly = !session.remote || session.remote.host.startsWith("tcp:");
            const pathless = relayOnly && !session.hasTcpRoute;
            const deadline = proven && !pathless ? PROVEN_SESSION_HARD_TIMEOUT_MS : FRIEND_TIMEOUT_MS;
            if (rekeyStuck) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `session re-key desync for ${friendId} (no good decrypt in ${silentFor}ms; undecryptable packets still arriving) \u2014 tearing down to re-handshake`);
              __privateGet(this, _friendSessions).delete(friendId);
              __privateMethod(this, _setFriendOffline, setFriendOffline_fn).call(this, friendId);
              try {
                const pk = base58ToBytes(friend.pubkey);
                if (pk.length === 32)
                  __privateGet(this, _tcpRelays)?.requestRoute(pk);
                const dhtPk = __privateGet(this, _friendDhtKeys).get(friendId);
                if (dhtPk && dhtPk.length === 32)
                  __privateGet(this, _tcpRelays)?.requestRoute(dhtPk);
              } catch {
              }
              continue;
            } else if (proven && !pathless && silentFor > FRIEND_TIMEOUT_MS && silentFor <= deadline) {
              __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `session blackout-grace ${friendId} (silent ${silentFor}ms, proven \u2014 keeping keys, not re-handshaking)`);
            } else if (silentFor > deadline) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `session timeout for ${friendId} (no ping in ${silentFor}ms, proven=${proven}; lastPingRecv=${session.lastPingRecvMs ?? "never"}) \u2014 tearing down to re-handshake`);
              __privateGet(this, _friendSessions).delete(friendId);
              __privateMethod(this, _setFriendOffline, setFriendOffline_fn).call(this, friendId);
              try {
                const pk = base58ToBytes(friend.pubkey);
                if (pk.length === 32)
                  __privateGet(this, _tcpRelays)?.requestRoute(pk);
                const dhtPk = __privateGet(this, _friendDhtKeys).get(friendId);
                if (dhtPk && dhtPk.length === 32)
                  __privateGet(this, _tcpRelays)?.requestRoute(dhtPk);
              } catch {
              }
              continue;
            }
            if (!session.lastPingSentMs || now - session.lastPingSentMs > FRIEND_PING_INTERVAL_MS) {
              await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_ALIVE, new Uint8Array()).catch(() => {
              });
            }
            if (session.remote && friend.status !== "online") {
              __privateMethod(this, _setFriendOnline, setFriendOnline_fn).call(this, friendId, session.remote.host, session.remote.port);
            }
            if (session.established && session.hasTcpRoute) {
              const RELAY_KEEPALIVE_MS = 12e4;
              if (now - (session.lastRelayKeepaliveMs ?? 0) > RELAY_KEEPALIVE_MS) {
                session.lastRelayKeepaliveMs = now;
                void __privateMethod(this, _sendUdpEndpointOffer, sendUdpEndpointOffer_fn).call(this, friendId).catch(() => void 0);
                if (session.relayRemote && __privateGet(this, _turnClient)) {
                  const rr = session.relayRemote;
                  void __privateGet(this, _turnClient).createPermission({ family: 4, address: rr.host, port: rr.port }).then(() => {
                    session.relayPermittedAtMs = Date.now();
                  }).catch(() => void 0);
                }
              }
            }
            const udpConfirmed = session.lastUdpRecvMs !== void 0 && now - session.lastUdpRecvMs < 4e3;
            if (!udpConfirmed && session.hasTcpRoute) {
              const UDP_RETRY_INTERVAL_MS = 3e3;
              const lastTry = session.lastUdpRetryMs ?? 0;
              if (now - lastTry > UDP_RETRY_INTERVAL_MS) {
                session.lastUdpRetryMs = now;
                void __privateMethod(this, _sendUdpEndpointOffer, sendUdpEndpointOffer_fn).call(this, friendId).catch(() => void 0);
                let friendRealPk = session.friendRealPublicKey;
                if (!friendRealPk && friend.address) {
                  try {
                    friendRealPk = parseCarrierAddress(friend.address).publicKey;
                  } catch {
                  }
                }
                if (!friendRealPk && friend.pubkey) {
                  try {
                    friendRealPk = base58ToBytes(friend.pubkey);
                  } catch {
                  }
                }
                if (friendRealPk && friendRealPk.length === 32) {
                  const lastAnnounce = __privateGet(this, _dhtPkSendCooldown).get(friendId) ?? 0;
                  if (now - lastAnnounce > DHT_PK_ANNOUNCE_COOLDOWN_MS) {
                    __privateGet(this, _dhtPkSendCooldown).set(friendId, now);
                    void __privateMethod(this, _sendOnionDhtPk, sendOnionDhtPk_fn).call(this, friendRealPk).catch((error) => {
                      __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `UDP retry: dhtpk_send for ${friendId} failed: ${error.message}`);
                    });
                  }
                  const dhtPk = session.friendDhtPublicKey;
                  const searchKey = dhtPk ?? friendRealPk;
                  if (searchKey && searchKey.length === 32) {
                    void __privateMethod(this, _discoverAndCacheFriendEndpoint, discoverAndCacheFriendEndpoint_fn).call(this, friendId, searchKey).then((found) => {
                      if (found) {
                        return __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch(() => void 0);
                      }
                    }).catch(() => void 0);
                  }
                  if (friend.remoteHost && friend.remotePort) {
                    void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch(() => void 0);
                  }
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `UDP retry attempt for ${friendId} (currently on TCP relay, search=${dhtPk ? "dht-pk" : "real-pk"})`);
                }
              }
            }
            continue;
          }
          const lastDhtPkSent = __privateGet(this, _dhtPkSendCooldown).get(friendId) ?? 0;
          if (now - lastDhtPkSent > DHT_PK_ANNOUNCE_COOLDOWN_MS) {
            let friendRealPk = session?.friendRealPublicKey;
            if (!friendRealPk && friend.address) {
              try {
                friendRealPk = parseCarrierAddress(friend.address).publicKey;
              } catch {
              }
            }
            if (!friendRealPk && friend.pubkey) {
              try {
                friendRealPk = base58ToBytes(friend.pubkey);
              } catch {
              }
            }
            if (friendRealPk && friendRealPk.length === 32) {
              __privateGet(this, _dhtPkSendCooldown).set(friendId, now);
              void __privateMethod(this, _sendOnionDhtPk, sendOnionDhtPk_fn).call(this, friendRealPk).catch((error) => {
                __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dhtpk_send for ${friendId} failed: ${error.message}`);
              });
            }
          }
          const haveEndpoint = friend.remoteHost && friend.remotePort || session?.remote || session?.hasTcpRoute;
          {
            const lastRouteReq = __privateGet(this, _routeRequestCooldown).get(friendId) ?? 0;
            if (__privateGet(this, _tcpRelays) && now - lastRouteReq > 15e3) {
              try {
                const pk = base58ToBytes(friend.pubkey);
                const dhtPk = __privateGet(this, _friendSessions).get(friendId)?.friendDhtPublicKey ?? __privateGet(this, _friendDhtKeys).get(friendId);
                if (dhtPk && dhtPk.length === 32) {
                  __privateGet(this, _tcpRelays).requestRoute(dhtPk);
                }
                if (pk.length === 32) {
                  __privateGet(this, _tcpRelays).requestRoute(pk);
                  __privateGet(this, _routeRequestCooldown).set(friendId, now);
                  __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `re-requesting relay route for unconnected friend ${friendId}${dhtPk ? " (+dht key)" : ""}`);
                }
              } catch {
              }
            }
          }
          if (!haveEndpoint) {
            if (!friend.acceptedAt && friend.address) {
              const lastFr = __privateGet(this, _friendRequestResendCooldown).get(friendId) ?? 0;
              if (now - lastFr > 6e4) {
                __privateGet(this, _friendRequestResendCooldown).set(friendId, now);
                void this.sendFriendRequest(friend.address, friend.hello).catch((error) => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `re-send friend-request to ${friendId} failed: ${error.message}`);
                });
              }
            }
            const dhtPk = session?.friendDhtPublicKey;
            if (dhtPk) {
              const found = await __privateMethod(this, _discoverAndCacheFriendEndpoint, discoverAndCacheFriendEndpoint_fn).call(this, friendId, dhtPk).catch(() => false);
              if (found) {
                void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch((error) => {
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend connection loop: initiate after discovery failed for ${friendId}: ${error.message}`);
                });
              }
            }
            continue;
          }
          const lastAttempt = session?.cookieRequestSentMs ?? session?.handshakeSentMs ?? 0;
          const failures = __privateGet(this, _cookieRetryCount).get(friendId) ?? 0;
          const baseCooldownMs = 8e3;
          const maxCooldownMs = 12e4;
          const cooldownMs = Math.min(maxCooldownMs, baseCooldownMs * Math.pow(1.5, failures));
          if (now - lastAttempt < cooldownMs) {
            continue;
          }
          const sweepBaseMs = 3e4;
          const sweepMaxMs = 3e5;
          const sweepCooldownMs = Math.min(sweepMaxMs, sweepBaseMs * Math.pow(1.5, Math.max(0, failures - 1)));
          if (LAN_SWEEP_AFTER_MS > 0 && failures < 8 && session?.pendingEcho !== void 0 && session.cookieRequestSentMs && now - session.cookieRequestSentMs > LAN_SWEEP_AFTER_MS && (session.lastLanSweepMs === void 0 || now - session.lastLanSweepMs > sweepCooldownMs)) {
            session.lastLanSweepMs = now;
            void __privateMethod(this, _sweepLanForCookieResponse, sweepLanForCookieResponse_fn).call(this, friendId).catch((error) => {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `lan sweep failed for ${friendId}: ${error.message}`);
            });
            continue;
          }
          if (session && !session.established) {
            session.pendingEcho = void 0;
            session.handshakeSentMs = void 0;
          }
          void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch((error) => {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `friend connection loop: initiate failed for ${friendId}: ${error.message}`);
          });
        }
      };
      _deliverLosslessPayload = new WeakSet();
      deliverLosslessPayload_fn = function(friendId, state, kind, inner, remote, packetNumber = 0) {
        if (kind === PACKET_ID_FILE_CONTROL)
          __privateGet(this, _fileRelayNegotiationUntil).delete(friendId);
        if (kind >= PACKET_ID_FILE_SENDREQUEST && kind <= PACKET_ID_FILE_FEC) {
          __privateGet(this, _dnft12).noteInbound(friendId, false);
        }
        if (__privateGet(this, _fileTransfer).handlePacket(friendId, kind, inner))
          return;
        if (kind === PACKET_ID_ONLINE) {
          __privateMethod(this, _setFriendOnline, setFriendOnline_fn).call(this, friendId, remote.address, remote.port);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto online packet received from ${friendId}`);
          __privateMethod(this, _sendProfileAndGreeting, sendProfileAndGreeting_fn).call(this, friendId);
          return;
        }
        if (kind === PACKET_ID_OFFLINE) {
          __privateMethod(this, _setFriendOffline, setFriendOffline_fn).call(this, friendId);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto offline packet received from ${friendId}`);
          return;
        }
        if (kind === PACKET_ID_KILL) {
          __privateGet(this, _friendSessions).delete(friendId);
          __privateMethod(this, _setFriendOffline, setFriendOffline_fn).call(this, friendId);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto kill received from ${friendId}, session torn down`);
          return;
        }
        if (kind === PACKET_ID_ALIVE) {
          __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `crypto alive (keepalive) received from ${friendId}`);
          return;
        }
        if (kind === PACKET_ID_UDP_ENDPOINT) {
          __privateMethod(this, _handleUdpEndpointOffer, handleUdpEndpointOffer_fn).call(this, friendId, inner);
          return;
        }
        if (kind === PACKET_ID_REQUEST) {
          __privateMethod(this, _handleRetransmitRequest, handleRetransmitRequest_fn).call(this, friendId, state, inner);
          return;
        }
        if (kind === PACKET_ID_SHARE_RELAYS) {
          __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `crypto share-relays from ${friendId} (TCP relay client not implemented)`);
          return;
        }
        if (kind === PACKET_ID_NICKNAME) {
          const name = decodeUtf8Best(inner);
          const friend = __privateGet(this, _friends).get(friendId);
          if (friend && name && friend.name !== name) {
            __privateGet(this, _friends).set(friendId, { ...friend, name });
            __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
            __privateGet(this, _events).emit("friendInfo", {
              pubkey: friendId,
              userid: friend.userid ?? friendId,
              name,
              description: friend.description
            });
          }
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto nickname received from ${friendId}: "${name}"`);
          return;
        }
        if (kind === PACKET_ID_STATUSMESSAGE) {
          let userInfoName;
          let userInfoDescr;
          let userInfoPunk;
          let clientMeta;
          try {
            const decoded = decodeCarrierPacket(inner);
            if (decoded.type === PACKET_TYPE_USERINFO) {
              userInfoName = decoded.name;
              userInfoDescr = decoded.descr;
              userInfoPunk = parsePunkField(decoded.gender);
              if (decoded.protoVersion || decoded.platform || decoded.appVersion) {
                clientMeta = {
                  protoVersion: decoded.protoVersion,
                  platform: decoded.platform,
                  osVersion: decoded.osVersion,
                  appVersion: decoded.appVersion
                };
              }
            }
          } catch {
          }
          if (userInfoName !== void 0 || userInfoDescr !== void 0) {
            const friend = __privateGet(this, _friends).get(friendId);
            const newName = userInfoName && userInfoName.length > 0 ? userInfoName : friend?.name;
            const newDescr = userInfoDescr ?? friend?.description;
            const newPunk = userInfoPunk ?? friend?.punkId;
            const metaChanged = friend != null && clientMeta != null && (friend.protoVersion !== clientMeta.protoVersion || friend.platform !== clientMeta.platform || friend.osVersion !== clientMeta.osVersion || friend.appVersion !== clientMeta.appVersion);
            if (friend && (friend.name !== newName || friend.description !== newDescr || friend.punkId !== newPunk || metaChanged)) {
              __privateGet(this, _friends).set(friendId, { ...friend, name: newName, description: newDescr, punkId: newPunk, ...clientMeta ?? {} });
              __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
              __privateGet(this, _events).emit("friendInfo", {
                pubkey: friendId,
                userid: friend.userid ?? friendId,
                name: newName,
                description: newDescr,
                punkId: newPunk,
                ...clientMeta ?? {}
              });
            }
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto userinfo received from ${friendId}: name="${userInfoName ?? ""}" descr="${userInfoDescr ?? ""}"${clientMeta ? ` proto=${clientMeta.protoVersion} platform=${clientMeta.platform} app=${clientMeta.appVersion}` : ""}`);
          } else {
            const status = decodeUtf8Best(inner);
            const friend = __privateGet(this, _friends).get(friendId);
            if (friend && status && friend.description !== status) {
              __privateGet(this, _friends).set(friendId, { ...friend, description: status });
              __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
            }
            __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `crypto status message (raw) received from ${friendId}: "${status}"`);
          }
          return;
        }
        if (kind === PACKET_ID_USERSTATUS) {
          __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `crypto user-status received from ${friendId} (${inner[0] ?? "?"})`);
          return;
        }
        if (kind === PACKET_ID_TYPING) {
          __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `crypto typing received from ${friendId} (${inner[0] ?? "?"})`);
          return;
        }
        if (kind === PACKET_ID_MESSAGE || kind === PACKET_ID_ACTION) {
          __privateMethod(this, _setFriendOnline, setFriendOnline_fn).call(this, friendId, remote.address, remote.port);
          let text;
          let carrier;
          try {
            carrier = decodeCarrierPacket(inner);
          } catch {
          }
          if (carrier?.type === PACKET_TYPE_INVITE_REQUEST) {
            const complete = __privateMethod(this, _assembleInvite, assembleInvite_fn).call(this, friendId, carrier, packetNumber);
            if (!complete)
              return;
            __privateGet(this, _events).emit("invite", {
              pubkey: friendId,
              ext: carrier.ext,
              bundle: carrier.bundle,
              data: complete
            });
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `invite from ${friendId}: ext="${carrier.ext ?? ""}" (${complete.length} bytes)`);
            return;
          }
          if (carrier?.type === PACKET_TYPE_INVITE_RESPONSE) {
            const complete = carrier.status === 0 ? __privateMethod(this, _assembleInvite, assembleInvite_fn).call(this, friendId, carrier, packetNumber) : new Uint8Array();
            if (carrier.status === 0 && !complete)
              return;
            __privateGet(this, _events).emit("inviteResponse", {
              pubkey: friendId,
              ext: carrier.ext,
              bundle: carrier.bundle,
              status: carrier.status,
              reason: carrier.reason,
              data: complete ?? new Uint8Array()
            });
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `invite-response from ${friendId}: status=${carrier.status} ext="${carrier.ext ?? ""}"`);
            return;
          }
          let raw;
          if (carrier?.type === PACKET_TYPE_BULKMSG) {
            const complete = __privateMethod(this, _assembleBulkMsg, assembleBulkMsg_fn).call(this, friendId, carrier, packetNumber);
            if (!complete)
              return;
            raw = complete;
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `bulkmsg complete from ${friendId} (${complete.length} bytes)`);
          } else if (carrier?.type === PACKET_TYPE_MESSAGE) {
            raw = carrier.data;
          } else {
            raw = inner;
          }
          const ft = parseDnft1Frame(raw);
          if (ft) {
            __privateGet(this, _dnft12).noteInbound(friendId, true);
            if (ft.packetId === PACKET_ID_FILE_CONTROL)
              __privateGet(this, _fileRelayNegotiationUntil).delete(friendId);
            __privateGet(this, _fileTransfer).handlePacket(friendId, ft.packetId, ft.payload);
            return;
          }
          if (__privateMethod(this, _tryEmitBinaryInlineFile, tryEmitBinaryInlineFile_fn).call(this, friendId, raw, "online"))
            return;
          text = decodeUtf8Best(raw);
          text = text?.replace(/\0+$/u, "");
          if (!text) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto message packet decode failed from ${friendId}`);
            return;
          }
          if (__privateMethod(this, _tryEmitInlineFile, tryEmitInlineFile_fn).call(this, friendId, text, "online"))
            return;
          void __privateMethod(this, _dispatchTextMessage, dispatchTextMessage_fn).call(this, {
            pubkey: friendId,
            text,
            via: "online"
          });
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `crypto ${kind === PACKET_ID_ACTION ? "action" : "message"} from ${friendId}: "${text}"`);
          return;
        }
        if (kind >= 160 && kind <= 254) {
          __privateMethod(this, _setFriendOnline, setFriendOnline_fn).call(this, friendId, remote.address, remote.port);
          __privateGet(this, _events).emit("customPacket", {
            pubkey: friendId,
            id: kind,
            data: inner
          });
          return;
        }
        __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `unknown messenger packet kind ${kind} from ${friendId}`);
      };
      _drainRecvBufferContiguous = new WeakSet();
      drainRecvBufferContiguous_fn = function(friendId, state, remote) {
        const buf = state.recvBuffer;
        if (!buf)
          return;
        for (let held = buf.get(state.receiveBufferStart ?? 0); held; held = buf.get(state.receiveBufferStart ?? 0)) {
          buf.delete(state.receiveBufferStart ?? 0);
          state.receiveBufferStart = (state.receiveBufferStart ?? 0) + 1 >>> 0;
          __privateMethod(this, _deliverLosslessPayload, deliverLosslessPayload_fn).call(this, friendId, state, held.kind, held.inner, remote);
        }
      };
      _forceAdvanceRecvBuffer = new WeakSet();
      forceAdvanceRecvBuffer_fn = function(friendId, state, remote) {
        const buf = state.recvBuffer;
        if (!buf || buf.size === 0)
          return;
        const expected = state.receiveBufferStart ?? 0;
        let lowest = expected;
        let bestDist = Infinity;
        for (const n of buf.keys()) {
          const d = n - expected >>> 0;
          if (d < bestDist) {
            bestDist = d;
            lowest = n;
          }
        }
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `recv reorder overflow from ${friendId}: abandoning gap [${expected}..${lowest}), ${buf.size} held`);
        state.receiveBufferStart = lowest;
        __privateMethod(this, _drainRecvBufferContiguous, drainRecvBufferContiguous_fn).call(this, friendId, state, remote);
      };
      _requestMissingReliablePackets = new WeakSet();
      requestMissingReliablePackets_fn = function(friendId, state) {
        const buf = state.recvBuffer;
        if (!buf || buf.size === 0)
          return;
        const now = Date.now();
        if (state.lastRecvRequestMs && now - state.lastRecvRequestMs < RECV_REQUEST_MIN_INTERVAL_MS)
          return;
        const low = state.receiveBufferStart ?? 0;
        let high = low;
        let bestDist = -1;
        for (const n of buf.keys()) {
          const d = n - low >>> 0;
          if (d > bestDist) {
            bestDist = d;
            high = n;
          }
        }
        const bytes = encodeRetransmitRequest(low, high, (n) => buf.has(n));
        if (bytes.length === 0)
          return;
        state.lastRecvRequestMs = now;
        void __privateMethod(this, _sendRequestPacket, sendRequestPacket_fn).call(this, friendId, state, bytes).catch(() => {
        });
      };
      _sendRequestPacket = new WeakSet();
      sendRequestPacket_fn = async function(friendId, state, requestBytes) {
        if (!state.established || !state.sessionSharedKey || !state.ourBaseNonce)
          return;
        if (!state.remote && !state.hasTcpRoute)
          return;
        const payload = concatBytes([Uint8Array.of(PACKET_ID_REQUEST), requestBytes]);
        const encrypted = createCryptoDataPacket({
          sessionSharedKey: state.sessionSharedKey,
          sentNonce: state.ourBaseNonce,
          bufferStart: state.receiveBufferStart ?? 0,
          packetNumber: state.sendPacketNumber ?? 0,
          payload
        });
        incrementNonce(state.ourBaseNonce);
        await __privateMethod(this, _sendToFriend, sendToFriend_fn).call(this, friendId, encrypted, state, false, false);
      };
      _assembleBulkMsg = new WeakSet();
      assembleBulkMsg_fn = function(friendId, frag, packetNumber) {
        const now = Date.now();
        for (const [key3, entry2] of __privateGet(this, _bulkAssembly)) {
          if (entry2.expireAtMs < now)
            __privateGet(this, _bulkAssembly).delete(key3);
        }
        const key2 = `${friendId}:${frag.tid.toString()}`;
        let entry = __privateGet(this, _bulkAssembly).get(key2);
        if (!entry) {
          entry = { total: 0, frags: /* @__PURE__ */ new Map(), got: 0, expireAtMs: now + 6e4 };
          __privateGet(this, _bulkAssembly).set(key2, entry);
        }
        if (frag.totalsz > 0) {
          if (frag.totalsz > CARRIER_MAX_APP_BULKMSG_LEN) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `bulkmsg from ${friendId} totalsz ${frag.totalsz} exceeds cap \u2014 dropped`);
            __privateGet(this, _bulkAssembly).delete(key2);
            return void 0;
          }
          entry.total = frag.totalsz;
        }
        if (frag.data.length > 0 && !entry.frags.has(packetNumber)) {
          entry.frags.set(packetNumber, frag.data);
          entry.got += frag.data.length;
        }
        if (entry.total === 0 || entry.got < entry.total)
          return void 0;
        __privateGet(this, _bulkAssembly).delete(key2);
        if (entry.got > entry.total) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `bulkmsg from ${friendId} got ${entry.got} > total ${entry.total} \u2014 dropped`);
          return void 0;
        }
        const nums = [...entry.frags.keys()].sort((a, b) => a - b);
        return concatBytes(nums.map((n) => entry.frags.get(n)));
      };
      _assembleInvite = new WeakSet();
      assembleInvite_fn = function(friendId, frag, packetNumber) {
        const now = Date.now();
        for (const [key3, entry2] of __privateGet(this, _inviteAssembly)) {
          if (entry2.expireAtMs < now)
            __privateGet(this, _inviteAssembly).delete(key3);
        }
        const key2 = `${friendId}:${frag.tid.toString()}`;
        let entry = __privateGet(this, _inviteAssembly).get(key2);
        if (!entry) {
          entry = { total: 0, frags: /* @__PURE__ */ new Map(), got: 0, expireAtMs: now + 6e4 };
          __privateGet(this, _inviteAssembly).set(key2, entry);
        }
        if (frag.totalsz > 0) {
          if (frag.totalsz > CARRIER_MAX_INVITE_DATA_LEN) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `invite from ${friendId} totalsz ${frag.totalsz} exceeds cap \u2014 dropped`);
            __privateGet(this, _inviteAssembly).delete(key2);
            return void 0;
          }
          entry.total = frag.totalsz;
        }
        if (frag.data.length > 0 && !entry.frags.has(packetNumber)) {
          entry.frags.set(packetNumber, frag.data);
          entry.got += frag.data.length;
        }
        if (entry.total === 0 || entry.got < entry.total)
          return void 0;
        __privateGet(this, _inviteAssembly).delete(key2);
        if (entry.got > entry.total) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `invite from ${friendId} got ${entry.got} > total ${entry.total} \u2014 dropped`);
          return void 0;
        }
        const nums = [...entry.frags.keys()].sort((a, b) => a - b);
        return concatBytes(nums.map((n) => entry.frags.get(n)));
      };
      _tryEmitInlineFile = new WeakSet();
      tryEmitInlineFile_fn = function(friendId, text, via) {
        const trimmed = text.replaceAll("\0", "").trim();
        if (!trimmed.startsWith("{") || !trimmed.includes('"fileName"') || !trimmed.includes('"data"')) {
          return false;
        }
        try {
          const parsed = JSON.parse(trimmed);
          if (typeof parsed.data !== "string" || typeof parsed.fileName !== "string")
            return false;
          const data = Uint8Array.from(Buffer2.from(parsed.data, "base64"));
          const ext = parsed.fileExtension ?? "";
          const name = parsed.fileName.endsWith(ext) ? parsed.fileName : parsed.fileName + ext;
          __privateGet(this, _events).emit("inlineFile", {
            pubkey: friendId,
            name,
            fileType: parsed.type,
            data,
            via
          });
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `inline file from ${friendId}: "${name}" (${data.length} bytes, ${via})`);
          return true;
        } catch {
          return false;
        }
      };
      _tryEmitBinaryInlineFile = new WeakSet();
      tryEmitBinaryInlineFile_fn = function(friendId, bytes, via) {
        const envelope = decodeAndroidFileEnvelope(bytes);
        if (!envelope)
          return false;
        if (envelope.declaredSize !== void 0 && envelope.declaredSize !== envelope.data.length) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `inline file from ${friendId}: declared ${envelope.declaredSize}B, got ${envelope.data.length}B`);
        }
        __privateGet(this, _events).emit("inlineFile", {
          pubkey: friendId,
          name: envelope.name,
          fileType: inlineFileTypeFor(envelope.name, envelope.contentType),
          data: envelope.data,
          via
        });
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `inline file (Android envelope) from ${friendId}: "${envelope.name}" (${envelope.data.length} bytes, ${via})`);
        return true;
      };
      _handleRetransmitRequest = new WeakSet();
      handleRetransmitRequest_fn = function(friendId, session, data) {
        const start = session.sendBufferStartNum;
        const end = session.sendPacketNumber;
        if (start === void 0 || end === void 0 || !session.sendArray || session.sendArray.size === 0) {
          return;
        }
        let cursor = 0;
        let n = 1;
        const requested = [];
        for (let i = start; i !== end; i = i + 1 >>> 0) {
          if (cursor >= data.length)
            break;
          if (n === data[cursor]) {
            requested.push(i);
            cursor++;
            n = 0;
          } else {
            session.sendArray.delete(i);
          }
          if (n === 255) {
            n = 1;
            if (data[cursor] !== 0)
              return;
            cursor++;
          } else {
            n++;
          }
        }
        let s = start;
        while (s !== end && !session.sendArray.has(s))
          s = s + 1 >>> 0;
        session.sendBufferStartNum = s;
        if (requested.length === 0)
          return;
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `retransmit request from ${friendId}: resending ${requested.length} packet(s) [${requested.slice(0, 8).join(",")}${requested.length > 8 ? ",\u2026" : ""}]`);
        void (async () => {
          for (const num of requested) {
            const payload = session.sendArray?.get(num);
            if (!payload)
              continue;
            try {
              await __privateMethod(this, _resendReliablePacket, resendReliablePacket_fn).call(this, friendId, session, num, payload);
            } catch {
            }
          }
        })();
      };
      _resendReliablePacket = new WeakSet();
      resendReliablePacket_fn = async function(friendId, session, packetNumber, payload) {
        if (!session.established || !session.sessionSharedKey || !session.ourBaseNonce)
          return;
        const encrypted = createCryptoDataPacket({
          sessionSharedKey: session.sessionSharedKey,
          sentNonce: session.ourBaseNonce,
          bufferStart: session.receiveBufferStart ?? 0,
          packetNumber,
          payload
        });
        incrementNonce(session.ourBaseNonce);
        await __privateMethod(this, _sendToFriend, sendToFriend_fn).call(this, friendId, encrypted, session, false, false);
      };
      _sendMessengerPacket = new WeakSet();
      sendMessengerPacket_fn = async function(friendId, kind, data) {
        const session = __privateGet(this, _friendSessions).get(friendId);
        if (!session?.established || !session.sessionSharedKey || !session.ourBaseNonce) {
          throw new Error(`friend session unavailable for ${friendId}`);
        }
        if (!session.remote && !session.hasTcpRoute) {
          throw new Error(`friend session has no transport for ${friendId}`);
        }
        const payload = concatBytes([Uint8Array.of(kind & 255), data]);
        const packetNumber = session.sendPacketNumber ?? 0;
        const encrypted = createCryptoDataPacket({
          sessionSharedKey: session.sessionSharedKey,
          sentNonce: session.ourBaseNonce,
          bufferStart: session.receiveBufferStart ?? 0,
          packetNumber,
          payload
        });
        incrementNonce(session.ourBaseNonce);
        const isFileTransfer = kind === PACKET_ID_FILE_SENDREQUEST || kind === PACKET_ID_FILE_CONTROL || kind === PACKET_ID_FILE_DATA || kind === PACKET_ID_FILE_FEC;
        const isFileBulk = kind === PACKET_ID_FILE_DATA || kind === PACKET_ID_FILE_FEC;
        const isBulkData = __privateGet(this, _opts3).bulkDataPacketId !== void 0 && kind === __privateGet(this, _opts3).bulkDataPacketId || isFileBulk;
        const isDroppable = isBulkData && !isFileTransfer || kind >= 192;
        if (!isDroppable) {
          session.sendPacketNumber = packetNumber + 1 >>> 0;
          session.sendArray ?? (session.sendArray = /* @__PURE__ */ new Map());
          session.sendBufferStartNum ?? (session.sendBufferStartNum = packetNumber);
          session.sendArray.set(packetNumber, payload);
          while (session.sendArray.size > 8192 && session.sendBufferStartNum !== session.sendPacketNumber) {
            session.sendArray.delete(session.sendBufferStartNum);
            session.sendBufferStartNum = session.sendBufferStartNum + 1 >>> 0;
          }
        }
        session.lastPingSentMs = Date.now();
        await __privateMethod(this, _sendToFriend, sendToFriend_fn).call(this, friendId, encrypted, session, isBulkData, isFileTransfer);
      };
      _sendToFriend = new WeakSet();
      sendToFriend_fn = async function(friendId, packet, session, isBulkData = false, reliableOnRelay = false) {
        const s = session ?? __privateGet(this, _friendSessions).get(friendId);
        let udpOk = false;
        let tcpOk = false;
        let firstError;
        const realUdpRemote = s?.remote && !s.remote.host?.startsWith("tcp:") && s.remote.port !== 0;
        const udpFresh = !!realUdpRemote && s?.lastUdpRecvMs !== void 0 && Date.now() - s.lastUdpRecvMs < 4e3;
        const forceFileRelay = (__privateGet(this, _fileRelayNegotiationUntil).get(friendId) ?? 0) > Date.now() && !(s?.lanRemoteHost && s.remote?.host === s.lanRemoteHost);
        const tryUdp = !forceFileRelay && realUdpRemote && (isBulkData ? udpFresh : true);
        if (tryUdp && s?.remote) {
          try {
            await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, packet, s.remote);
            udpOk = true;
          } catch (error) {
            firstError = error;
          }
        }
        if (isBulkData && udpFresh && udpOk) {
          return;
        }
        let relayOk = false;
        if (s?.relayRemote && s.relayPermitted) {
          relayOk = __privateMethod(this, _sendViaRelay, sendViaRelay_fn).call(this, packet, s.relayRemote);
          const relayConfirmed = s.lastRelayRecvMs !== void 0 && Date.now() - s.lastRelayRecvMs < RELAY_CONFIRM_WINDOW_MS;
          if (isBulkData && relayOk && relayConfirmed) {
            return;
          }
        }
        if (__privateGet(this, _tcpRelays)) {
          const tcpKey = s?.friendDhtPublicKey ?? s?.friendRealPublicKey;
          if (tcpKey) {
            const sent = __privateGet(this, _tcpRelays).sendToFriend(tcpKey, packet, isBulkData && !reliableOnRelay);
            if (sent > 0) {
              tcpOk = true;
            }
          }
        }
        if (!udpOk && !relayOk && !tcpOk) {
          throw firstError ?? new Error(`no transport accepted send for ${friendId}`);
        }
      };
      _scheduleProfileRetry = new WeakSet();
      scheduleProfileRetry_fn = function(friendId) {
        if (__privateGet(this, _profileRetryTimers).has(friendId))
          return;
        const session = __privateGet(this, _friendSessions).get(friendId);
        if (!__privateGet(this, _started) || !session?.established)
          return;
        const attempt = (__privateGet(this, _profileRetryAttempts).get(friendId) ?? 0) + 1;
        __privateGet(this, _profileRetryAttempts).set(friendId, attempt);
        const delayMs = Math.min(3e4, 1e3 * 2 ** Math.min(attempt - 1, 5));
        const timer = setTimeout(() => {
          __privateGet(this, _profileRetryTimers).delete(friendId);
          if (__privateGet(this, _started) && __privateGet(this, _friendSessions).get(friendId)?.established) {
            __privateMethod(this, _sendProfileAndGreeting, sendProfileAndGreeting_fn).call(this, friendId);
          }
        }, delayMs);
        timer.unref?.();
        __privateGet(this, _profileRetryTimers).set(friendId, timer);
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `profile retry ${attempt} for ${friendId} scheduled in ${delayMs}ms`);
      };
      _sendProfileAndGreeting = new WeakSet();
      sendProfileAndGreeting_fn = function(friendId) {
        if (!__privateGet(this, _profileSentTo).has(friendId)) {
          __privateGet(this, _profileSentTo).add(friendId);
          void (async () => {
            try {
              const nick = __privateGet(this, _opts3).nickname ?? PEER_NICKNAME;
              const descr = __privateGet(this, _opts3).statusMessage ?? PEER_STATUS_MESSAGE;
              const nameBytes = new TextEncoder().encode(nick);
              await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_NICKNAME, nameBytes);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `nickname "${nick}" sent to ${friendId}`);
              await sleep(250);
              const userInfo = encodeUserInfoPacket({
                name: nick,
                descr,
                // AgentNet client metadata (appended userinfo fields 7-10). Old
                // peers ignore them; updated peers negotiate capabilities + display
                // the friend's platform/build.
                protoVersion: AGENTNET_PROTO_VERSION,
                platform: __privateGet(this, _opts3).platform ?? process.platform,
                osVersion: __privateGet(this, _opts3).osVersion ?? `node-${process.versions?.node ?? ""}`,
                appVersion: __privateGet(this, _opts3).appVersion ?? `peer-${PEER_PKG_VERSION}`,
                // The avatar, in the field Beagle uses for it (see punkId on
                // FriendInfoEvent). OMITTED when we have none, never sent as "":
                // an empty string would clear an avatar the friend already
                // resolved. Without this, iOS shows us no picture at all.
                ...__privateGet(this, _opts3).punkId != null ? { gender: String(__privateGet(this, _opts3).punkId) } : {}
              });
              await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_STATUSMESSAGE, userInfo);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `userinfo sent to ${friendId} (name="${nick}", descr="${descr}", proto=${AGENTNET_PROTO_VERSION}, platform=${__privateGet(this, _opts3).platform ?? process.platform})`);
              __privateGet(this, _profileRetryAttempts).delete(friendId);
            } catch (error) {
              __privateGet(this, _profileSentTo).delete(friendId);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `send profile failed for ${friendId}: ${error.message}`);
              __privateMethod(this, _scheduleProfileRetry, scheduleProfileRetry_fn).call(this, friendId);
            }
          })();
        }
        if (GREETING_TEXT && !__privateGet(this, _greetingSentTo).has(friendId)) {
          __privateGet(this, _greetingSentTo).add(friendId);
          void (async () => {
            try {
              await sleep(700);
              const carrierMsg = encodeFriendMessagePacket(GREETING_TEXT);
              await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_MESSAGE, carrierMsg);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `greeting "${GREETING_TEXT}" sent to ${friendId}`);
            } catch (error) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `send greeting failed for ${friendId}: ${error.message}`);
            }
          })();
        }
      };
      _cacheFriendRemote = new WeakSet();
      cacheFriendRemote_fn = function(friendId, host2, port, realPublicKey, dhtPublicKey) {
        const friend = __privateGet(this, _friends).get(friendId);
        if (!friend) {
          return;
        }
        if (__privateMethod(this, _isUnroutableSelfSource, isUnroutableSelfSource_fn).call(this, host2, port, false)) {
          return;
        }
        if (friend.remoteHost !== host2 || friend.remotePort !== port) {
          __privateGet(this, _friends).set(friendId, {
            ...friend,
            remoteHost: host2,
            remotePort: port
          });
        }
        let session = __privateGet(this, _friendSessions).get(friendId);
        if (!session) {
          session = {
            ourSessionKeyPair: createEphemeralKeyPair(),
            ourBaseNonce: randomBytes2(24)
          };
          __privateGet(this, _friendSessions).set(friendId, session);
        }
        __privateMethod(this, _adoptRemote, adoptRemote_fn).call(this, session, host2, port);
        __privateMethod(this, _rememberEndpointCandidate, rememberEndpointCandidate_fn).call(this, session, host2, port);
        if (realPublicKey && !session.friendRealPublicKey) {
          session.friendRealPublicKey = realPublicKey;
        }
        if (dhtPublicKey) {
          session.friendDhtPublicKey = dhtPublicKey;
          __privateMethod(this, _learnFriendDhtKey, learnFriendDhtKey_fn).call(this, friendId, dhtPublicKey);
        }
      };
      _isUnroutableSelfSource = new WeakSet();
      isUnroutableSelfSource_fn = function(host2, port, observed) {
        if (isOwnVirtualAddress(host2))
          return true;
        if (!isOwnAddress(host2))
          return false;
        const ourPort = __privateGet(this, _udp)?.localPort();
        if (ourPort !== void 0 && port === ourPort)
          return true;
        return !observed;
      };
      _adoptRemote = new WeakSet();
      adoptRemote_fn = function(session, host2, port, observed = false) {
        if (__privateMethod(this, _isUnroutableSelfSource, isUnroutableSelfSource_fn).call(this, host2, port, observed)) {
          return;
        }
        if (!observed && isPrivateAddress(host2) && !isCgnatAddress(host2) && !getPhysicalLanSubnets().some((sub) => isInIpv4Subnet(host2, sub))) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `ignoring advertised private endpoint ${host2}:${port} \u2014 not on any of our LANs`);
          return;
        }
        if (session.lanRemoteHost && session.remote?.host === session.lanRemoteHost && host2 !== session.lanRemoteHost && // Same-host exception: a peer on THIS machine (iOS Simulator) moves
        // with us when our DHCP address changes — the old LAN lock target is
        // dead and the peer now answers from our own current address (or
        // loopback). Refusing that move pins the session to the dead IP
        // forever. isOwnAddress is cached; no syscall on the hot path.
        !(host2 === "127.0.0.1" || isOwnAddress(host2))) {
          return;
        }
        session.remote = { host: host2, port };
      };
      _rememberEndpointCandidate = new WeakSet();
      rememberEndpointCandidate_fn = function(session, host2, port) {
        const now = Date.now();
        const next = (session.endpointCandidates ?? []).filter((candidate) => !(candidate.host === host2 && candidate.port === port));
        next.unshift({ host: host2, port, updatedMs: now });
        session.endpointCandidates = next.sort((a, b) => b.updatedMs - a.updatedMs).slice(0, 12);
        if (isPrivateAddress(host2) && !isCgnatAddress(host2) && getPhysicalLanSubnets().some((s) => isInIpv4Subnet(host2, s))) {
          session.lanRemoteHost = host2;
        }
      };
      _gatherOwnSrflx = new WeakSet();
      gatherOwnSrflx_fn = async function() {
        const CACHE_MS = 5e3;
        const now = Date.now();
        if (__privateGet(this, _srflxCache) && now - __privateGet(this, _srflxCache).atMs < CACHE_MS) {
          return __privateGet(this, _srflxCache).addr;
        }
        const bootnodes = __privateGet(this, _opts3).bootstrapNodes;
        if (!bootnodes || bootnodes.length === 0)
          return void 0;
        for (const bn of bootnodes.slice(0, 3)) {
          const req = buildBindingRequest();
          const txnHex = Buffer2.from(req.slice(8, 20)).toString("hex");
          const addr = await new Promise((resolve2) => {
            const interceptor = (data, rinfo) => {
              if (rinfo.address !== bn.host || rinfo.port !== 3478)
                return false;
              const msg = decodeStun(data);
              if (!msg || msg.type !== STUN_BINDING_SUCCESS)
                return false;
              if (Buffer2.from(msg.transactionId).toString("hex") !== txnHex)
                return false;
              const xma = findAttr(msg, STUN_ATTR_XOR_MAPPED_ADDRESS);
              const parsed = xma ? decodeXorMappedAddress(xma, msg.transactionId) : void 0;
              __privateGet(this, _udp).removeStunInterceptor(interceptor);
              clearTimeout(timer);
              resolve2(parsed ? { host: parsed.address, port: parsed.port } : void 0);
              return true;
            };
            const timer = setTimeout(() => {
              __privateGet(this, _udp).removeStunInterceptor(interceptor);
              resolve2(void 0);
            }, 2e3);
            __privateGet(this, _udp).addStunInterceptor(interceptor);
            __privateGet(this, _udp).sendDirect(Buffer2.from(req), bn.host, 3478).catch(() => {
              __privateGet(this, _udp).removeStunInterceptor(interceptor);
              clearTimeout(timer);
              resolve2(void 0);
            });
          });
          if (addr) {
            __privateSet(this, _srflxCache, { addr, atMs: now });
            return addr;
          }
        }
        return void 0;
      };
      _ensureTurnRelay = new WeakSet();
      ensureTurnRelay_fn = async function() {
        if (__privateGet(this, _ourRelayAddr))
          return __privateGet(this, _ourRelayAddr);
        if (__privateGet(this, _turnAllocating))
          return __privateGet(this, _turnAllocating);
        __privateSet(this, _turnAllocating, (async () => {
          for (const srv of TURN_RELAY_SERVERS) {
            let sock;
            let client;
            try {
              sock = await createBoundUdp4Socket();
              sock.on("error", (e) => __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `turn socket error (${srv.host}): ${e.message}`));
              client = new TurnClient({
                sock,
                creds: { host: srv.host, port: srv.port, realm: "", username: srv.username, password: srv.password }
              });
              const alloc = await client.allocate();
              client.onData((peer, data) => {
                __privateGet(this, _onDatagram).call(this, {
                  data: Buffer2.from(data),
                  remote: { address: peer.address, port: peer.port },
                  viaRelay: true
                });
              });
              __privateSet(this, _turnSocket, sock);
              __privateSet(this, _turnClient, client);
              sock = void 0;
              client = void 0;
              __privateSet(this, _ourRelayAddr, { host: alloc.relayedAddress.address, port: alloc.relayedAddress.port });
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `turn relay allocated on ${srv.host}: ${__privateGet(this, _ourRelayAddr).host}:${__privateGet(this, _ourRelayAddr).port}`);
              return __privateGet(this, _ourRelayAddr);
            } catch (error) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `turn relay allocate failed on ${srv.host}: ${error.message}`);
              client?.close();
              await closeDgramSocket(sock);
            }
          }
          return void 0;
        })());
        const result = await __privateGet(this, _turnAllocating);
        __privateSet(this, _turnAllocating, void 0);
        return result;
      };
      _sendViaRelay = new WeakSet();
      sendViaRelay_fn = function(packet, relay) {
        if (!__privateGet(this, _turnClient))
          return false;
        const wrapped = concatBytes([Uint8Array.of(105, 118, 101, 103), packet]);
        try {
          __privateGet(this, _turnClient).sendTo({ family: 4, address: relay.host, port: relay.port }, wrapped);
          return true;
        } catch {
          return false;
        }
      };
      _sendUdpEndpointOffer = new WeakSet();
      sendUdpEndpointOffer_fn = async function(friendId) {
        const session = __privateGet(this, _friendSessions).get(friendId);
        if (!session?.established)
          return;
        const srflx = await __privateMethod(this, _gatherOwnSrflx, gatherOwnSrflx_fn).call(this);
        if (!srflx)
          return;
        const octets = srflx.host.split(".").map((s) => parseInt(s, 10));
        if (octets.length !== 4 || octets.some((o) => Number.isNaN(o)))
          return;
        const relay = await __privateMethod(this, _ensureTurnRelay, ensureTurnRelay_fn).call(this).catch(() => void 0);
        const relayOctets = relay ? relay.host.split(".").map((s) => parseInt(s, 10)) : void 0;
        const relayValid = relayOctets && relayOctets.length === 4 && !relayOctets.some((o) => Number.isNaN(o));
        const lanIp = getPhysicalLanAddresses().find((ip) => isPrivateAddress(ip));
        const lanOctets = lanIp ? lanIp.split(".").map((s) => parseInt(s, 10)) : void 0;
        const lanPort = lanIp && _wslHostAddrsCache.has(lanIp) ? srflx.port : __privateGet(this, _udp).localPort() ?? 0;
        const lanValid = !!lanOctets && lanOctets.length === 4 && !lanOctets.some((o) => Number.isNaN(o)) && lanPort > 0;
        const size = lanValid ? 18 : relayValid ? 12 : 6;
        const payload = new Uint8Array(size);
        payload.set(octets, 0);
        payload[4] = srflx.port >> 8 & 255;
        payload[5] = srflx.port & 255;
        if (relayValid && relay && size >= 12) {
          payload.set(relayOctets, 6);
          payload[10] = relay.port >> 8 & 255;
          payload[11] = relay.port & 255;
        }
        if (lanValid) {
          payload.set(lanOctets, 12);
          payload[16] = lanPort >> 8 & 255;
          payload[17] = lanPort & 255;
        }
        try {
          await __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_UDP_ENDPOINT, payload);
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `udp-endpoint offer sent to ${friendId}: direct=${srflx.host}:${srflx.port}` + (relayValid && relay ? ` relay=${relay.host}:${relay.port}` : "") + (lanValid ? ` lan=${lanIp}:${lanPort}` : ""));
        } catch {
        }
      };
      _handleUdpEndpointOffer = new WeakSet();
      handleUdpEndpointOffer_fn = function(friendId, payload) {
        if (payload.length < 6)
          return;
        const host2 = `${payload[0]}.${payload[1]}.${payload[2]}.${payload[3]}`;
        const port = (payload[4] << 8 | payload[5]) >>> 0;
        if (port === 0)
          return;
        const session = __privateGet(this, _friendSessions).get(friendId);
        if (!session)
          return;
        if (payload.length >= 12) {
          const relayHost = `${payload[6]}.${payload[7]}.${payload[8]}.${payload[9]}`;
          const relayPort = (payload[10] << 8 | payload[11]) >>> 0;
          if (relayPort !== 0) {
            const changed = session.relayRemote?.host !== relayHost || session.relayRemote?.port !== relayPort;
            session.relayRemote = { host: relayHost, port: relayPort };
            if (changed)
              session.relayPermitted = false;
            const permitAgeMs = Date.now() - (session.relayPermittedAtMs ?? 0);
            if (!session.relayPermitted || permitAgeMs > 9e4) {
              void __privateMethod(this, _ensureTurnRelay, ensureTurnRelay_fn).call(this).then(() => __privateGet(this, _turnClient)?.createPermission({ family: 4, address: relayHost, port: relayPort })).then(() => {
                const first = !session.relayPermitted;
                session.relayPermitted = true;
                session.relayPermittedAtMs = Date.now();
                if (first)
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `turn permission created for ${friendId} relay ${relayHost}:${relayPort}`);
              }).catch(() => void 0);
            }
          }
        }
        if (payload.length >= 18) {
          const lanHost = `${payload[12]}.${payload[13]}.${payload[14]}.${payload[15]}`;
          const lanPort = (payload[16] << 8 | payload[17]) >>> 0;
          const srflxHost = __privateGet(this, _srflxCache)?.addr.host;
          const weAreBehindNat = !!srflxHost && !getPhysicalLanAddresses().includes(srflxHost);
          const samePublicNat = weAreBehindNat && srflxHost === host2;
          const sameLan = lanPort !== 0 && isPrivateAddress(lanHost) && !isCgnatAddress(lanHost) && (getPhysicalLanSubnets().some((s) => isInIpv4Subnet(lanHost, s)) || samePublicNat) && !(getPhysicalLanAddresses().includes(lanHost) && __privateGet(this, _udp).localPort() === lanPort);
          if (sameLan) {
            __privateMethod(this, _rememberEndpointCandidate, rememberEndpointCandidate_fn).call(this, session, lanHost, lanPort);
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `udp-endpoint LAN candidate from ${friendId}: ${lanHost}:${lanPort} (same subnet) \u2014 punching`);
            const lanPunch = Uint8Array.of(242);
            let ln = 0;
            const lanTimer = setInterval(() => {
              __privateGet(this, _udp).sendDirectSync(Buffer2.from(lanPunch), lanHost, lanPort);
              if (++ln >= 6)
                clearInterval(lanTimer);
            }, 120);
            const cur = session.remote?.host;
            const onSameLanAlready = !!cur && !cur.startsWith("tcp:") && isPrivateAddress(cur) && !isCgnatAddress(cur) && getPhysicalLanSubnets().some((s) => isInIpv4Subnet(cur, s));
            if (!onSameLanAlready) {
              session.remote = { host: lanHost, port: lanPort };
            }
            session.lanRemoteHost = lanHost;
            if (session.established) {
              void __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_ALIVE, new Uint8Array()).catch(() => void 0);
            } else {
              void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch(() => void 0);
            }
          }
        }
        if (getLocalIpv4Addresses().includes(host2) && __privateGet(this, _udp).localPort() === port)
          return;
        __privateMethod(this, _rememberEndpointCandidate, rememberEndpointCandidate_fn).call(this, session, host2, port);
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `udp-endpoint offer from ${friendId}: ${host2}:${port} \u2014 punching`);
        const punch = Uint8Array.of(242);
        let n = 0;
        const punchTimer = setInterval(() => {
          __privateGet(this, _udp).sendDirectSync(Buffer2.from(punch), host2, port);
          if (++n >= 6)
            clearInterval(punchTimer);
        }, 120);
        const haveRealUdp = session.remote && !session.remote.host?.startsWith("tcp:") && session.remote.port !== 0;
        const haveLanCandidate = (session.endpointCandidates ?? []).some((c) => isPrivateAddress(c.host) && !isCgnatAddress(c.host) && getPhysicalLanSubnets().some((s) => isInIpv4Subnet(c.host, s)));
        if (!haveRealUdp && !haveLanCandidate) {
          __privateMethod(this, _adoptRemote, adoptRemote_fn).call(this, session, host2, port);
        }
        if (session.established) {
          void __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_ALIVE, new Uint8Array()).catch(() => void 0);
        } else {
          void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch(() => void 0);
        }
      };
      _collectSessionEndpointCandidates = new WeakSet();
      collectSessionEndpointCandidates_fn = function(friendId, friend, session) {
        const sameLan = [];
        const publicCandidates = [];
        const otherPrivate = [];
        const localSubnets = getLocalIpv4Subnets();
        const ourLocalIps = getLocalIpv4Addresses();
        const ourLocalPort = __privateGet(this, _udp).localPort();
        const seen = /* @__PURE__ */ new Set();
        const totalCount = () => sameLan.length + publicCandidates.length + otherPrivate.length;
        const push = (host2, port) => {
          if (!host2 || !port) {
            return;
          }
          if (ourLocalPort === port && ourLocalIps.includes(host2)) {
            return;
          }
          const key2 = `${host2}:${port}`;
          if (seen.has(key2)) {
            return;
          }
          seen.add(key2);
          if (isPrivateAddress(host2)) {
            if (localSubnets.some((subnet) => isInIpv4Subnet(host2, subnet))) {
              sameLan.push({ host: host2, port });
            } else {
              otherPrivate.push({ host: host2, port });
            }
          } else {
            publicCandidates.push({ host: host2, port });
          }
        };
        push(session?.remote?.host, session?.remote?.port);
        push(friend.remoteHost, friend.remotePort);
        for (const host2 of LAN_SWEEP_EXTRA_HOSTS) {
          for (const port of LAN_SWEEP_PORTS) {
            const key2 = `${host2}:${port}`;
            if (seen.has(key2))
              continue;
            seen.add(key2);
            sameLan.push({ host: host2, port });
          }
        }
        for (const candidate of session?.endpointCandidates ?? []) {
          push(candidate.host, candidate.port);
          if (totalCount() >= 8) {
            return [...sameLan, ...publicCandidates, ...otherPrivate].slice(0, 8);
          }
        }
        const dhtId = session?.friendDhtPublicKey ? carrierIdFromPublicKey(session.friendDhtPublicKey) : void 0;
        for (const node of __privateGet(this, _knownNodes)) {
          if (node.pk !== friendId && (!dhtId || node.pk !== dhtId)) {
            continue;
          }
          push(node.host, node.port);
          if (totalCount() >= 8) {
            break;
          }
        }
        return [...sameLan, ...publicCandidates, ...otherPrivate].slice(0, 8);
      };
      _initiateSession = new WeakSet();
      initiateSession_fn = async function(friendId) {
        if (!__privateGet(this, _keyPair2) || !__privateGet(this, _cookieSymmetricKey)) {
          return false;
        }
        const friend = __privateGet(this, _friends).get(friendId);
        if (!friend) {
          return false;
        }
        let session = __privateGet(this, _friendSessions).get(friendId);
        if (session?.established) {
          return true;
        }
        if (session && session.pendingEcho !== void 0) {
          return false;
        }
        if (session && session.handshakeSentMs && Date.now() - session.handshakeSentMs < 6e3) {
          return false;
        }
        let friendRealPk = session?.friendRealPublicKey;
        if (!friendRealPk && friend.address) {
          try {
            friendRealPk = parseCarrierAddress(friend.address).publicKey;
          } catch (error) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `initiate session: parse address failed for ${friendId}: ${error.message}`);
            return false;
          }
        }
        if (!friendRealPk && friend.pubkey) {
          try {
            friendRealPk = base58ToBytes(friend.pubkey);
          } catch {
          }
        }
        if (!friendRealPk || friendRealPk.length !== 32) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `initiate session: cannot resolve pubkey for ${friendId}`);
          return false;
        }
        let pkCmp = 0;
        for (let i = 0; i < 32; i++) {
          const a = __privateGet(this, _keyPair2).publicKey[i];
          const b = friendRealPk[i];
          if (a !== b) {
            pkCmp = a - b;
            break;
          }
        }
        if (pkCmp < 0) {
          const firstDefer = __privateGet(this, _initiateDeferSinceMs).get(friendId);
          const now = Date.now();
          if (firstDefer === void 0) {
            __privateGet(this, _initiateDeferSinceMs).set(friendId, now);
          }
          if (firstDefer === void 0 || now - firstDefer < 3e4) {
            if (!__privateGet(this, _initiateSkipLogged).has(friendId)) {
              __privateGet(this, _initiateSkipLogged).add(friendId);
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `initiate session: deferring to higher-pubkey peer ${friendId}`);
            }
            return false;
          }
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `initiate session: higher-pubkey peer ${friendId} hasn't established in ${Math.round((now - firstDefer) / 1e3)}s \u2014 breaking defer, initiating`);
        }
        const friendDhtPk = session?.friendDhtPublicKey ?? friendRealPk;
        const connectCandidates = __privateMethod(this, _collectSessionEndpointCandidates, collectSessionEndpointCandidates_fn).call(this, friendId, friend, session);
        const dhtKeyForTcp = session?.friendDhtPublicKey ?? __privateGet(this, _friendDhtKeys).get(friendId);
        const tcpAvailable = !!__privateGet(this, _tcpRelays)?.isFriendOnline(friendRealPk) || !!dhtKeyForTcp && !!__privateGet(this, _tcpRelays)?.isFriendOnline(dhtKeyForTcp);
        if (connectCandidates.length === 0 && !tcpAvailable) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `initiate session: no known endpoint for ${friendId} yet`);
          return false;
        }
        if (!session) {
          session = {
            ourSessionKeyPair: createEphemeralKeyPair(),
            ourBaseNonce: randomBytes2(24)
          };
          __privateGet(this, _friendSessions).set(friendId, session);
        }
        session.friendRealPublicKey = friendRealPk;
        session.friendDhtPublicKey = friendDhtPk;
        if (tcpAvailable)
          session.hasTcpRoute = true;
        if (connectCandidates.length > 0) {
          __privateMethod(this, _adoptRemote, adoptRemote_fn).call(this, session, connectCandidates[0].host, connectCandidates[0].port);
          const endpointKey = `${connectCandidates[0].host}:${connectCandidates[0].port}`;
          if (__privateGet(this, _lastEndpointSelectedKey).get(friendId) !== endpointKey) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `endpoint_selected friend=${friendId} endpoint=${endpointKey}`);
            __privateGet(this, _lastEndpointSelectedKey).set(friendId, endpointKey);
          } else {
            __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `endpoint_selected friend=${friendId} endpoint=${endpointKey} (unchanged)`);
          }
          __privateMethod(this, _rememberEndpointCandidate, rememberEndpointCandidate_fn).call(this, session, connectCandidates[0].host, connectCandidates[0].port);
        } else if (tcpAvailable) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `endpoint_selected friend=${friendId} endpoint=tcp-relay (no UDP path)`);
        }
        const echo = randomBigUint64();
        session.pendingEcho = echo;
        session.pendingCookiePeerDhtPublicKey = friendDhtPk;
        session.cookieRequestSentMs = Date.now();
        if (!session.recentEchoes)
          session.recentEchoes = /* @__PURE__ */ new Map();
        session.recentEchoes.set(echo, Date.now());
        const cutoff = Date.now() - 3e4;
        for (const [k, t] of session.recentEchoes) {
          if (t < cutoff)
            session.recentEchoes.delete(k);
        }
        const packet = createCookieRequest({
          senderRealPublicKey: __privateGet(this, _keyPair2).publicKey,
          senderDhtPublicKey: __privateGet(this, _keyPair2).publicKey,
          senderDhtSecretKey: __privateGet(this, _keyPair2).secretKey,
          receiverDhtPublicKey: friendDhtPk,
          echo
        });
        try {
          let sent = 0;
          let tcpSent = 0;
          for (const candidate of connectCandidates) {
            try {
              await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, packet, candidate);
              sent += 1;
            } catch {
            }
          }
          let selfSent = 0;
          if (LAN_SELF_PROBE_ENABLED && (__privateGet(this, _cookieRetryCount).get(friendId) ?? 0) >= 1) {
            const ourLocalPort = __privateGet(this, _udp).localPort();
            const lanDiscovery = new Uint8Array(33);
            lanDiscovery[0] = NET_PACKET_LAN_DISCOVERY;
            lanDiscovery.set(__privateGet(this, _keyPair2).publicKey, 1);
            const probeNow = Date.now();
            for (const [k, v] of __privateGet(this, _lanProbeTargets)) {
              if (probeNow - v.sentMs > 3e5)
                __privateGet(this, _lanProbeTargets).delete(k);
            }
            const probe = async (host2, port, alsoCookie) => {
              const key2 = `${host2}:${port}`;
              __privateGet(this, _lanProbeTargets).set(key2, { friendId, sentMs: probeNow });
              try {
                await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, lanDiscovery, { host: host2, port });
                if (alsoCookie) {
                  await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, packet, { host: host2, port });
                  selfSent += 1;
                }
              } catch {
              }
            };
            const tried = /* @__PURE__ */ new Set();
            for (const candidate of connectCandidates) {
              const key2 = `${candidate.host}:${candidate.port}`;
              if (tried.has(key2))
                continue;
              tried.add(key2);
              await probe(candidate.host, candidate.port, false);
            }
            if (__privateGet(this, _ownHostProbeFriendId) === friendId || probeNow >= __privateGet(this, _ownHostProbeUntilMs)) {
              __privateSet(this, _ownHostProbeFriendId, friendId);
              __privateSet(this, _ownHostProbeUntilMs, probeNow + 1e4);
              for (const host2 of [...getLocalIpv4Addresses(), "127.0.0.1"]) {
                if (isOwnVirtualAddress(host2))
                  continue;
                for (const port of LAN_SWEEP_PORTS) {
                  if (port === ourLocalPort)
                    continue;
                  const key2 = `${host2}:${port}`;
                  if (tried.has(key2))
                    continue;
                  tried.add(key2);
                  await probe(host2, port, true);
                }
              }
            }
          }
          if (__privateGet(this, _tcpRelays)) {
            const tcpKey = session.friendDhtPublicKey ?? friendRealPk;
            if (__privateGet(this, _tcpRelays).isFriendOnline(tcpKey) || __privateGet(this, _tcpRelays).isFriendOnline(friendRealPk)) {
              tcpSent = __privateGet(this, _tcpRelays).sendToFriend(tcpKey, packet);
              if (tcpSent === 0 && tcpKey !== friendRealPk) {
                tcpSent = __privateGet(this, _tcpRelays).sendToFriend(friendRealPk, packet);
              }
            }
            if (tcpSent === 0) {
              tcpSent = __privateGet(this, _tcpRelays).sendOobToFriend(tcpKey, packet);
            }
          }
          if (sent === 0 && tcpSent === 0 && selfSent === 0) {
            throw new Error("no cookie request packet was sent");
          }
          __privateGet(this, _cookieRetryCount).set(friendId, (__privateGet(this, _cookieRetryCount).get(friendId) ?? 0) + 1);
          const primaryDesc = connectCandidates.length > 0 ? `${connectCandidates[0].host}:${connectCandidates[0].port}` : `tcp-relay`;
          const cookieKey = `${primaryDesc}|udp=${sent}|tcp=${tcpSent}|self=${selfSent}`;
          if (__privateGet(this, _lastCookieSentKey).get(friendId) !== cookieKey) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie_sent friend=${friendId} udp=${sent} tcp=${tcpSent} self=${selfSent} primary=${primaryDesc}`);
            __privateGet(this, _lastCookieSentKey).set(friendId, cookieKey);
          } else {
            __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `cookie_sent friend=${friendId} udp=${sent} tcp=${tcpSent} self=${selfSent} primary=${primaryDesc} (retry ${__privateGet(this, _cookieRetryCount).get(friendId)})`);
          }
          return true;
        } catch (error) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `cookie request send failed for ${friendId}: ${error.message}`);
          __privateGet(this, _cookieRetryCount).set(friendId, (__privateGet(this, _cookieRetryCount).get(friendId) ?? 0) + 1);
          session.pendingEcho = void 0;
          session.pendingCookiePeerDhtPublicKey = void 0;
          return false;
        }
      };
      _sweepLanForCookieResponse = new WeakSet();
      sweepLanForCookieResponse_fn = async function(friendId) {
        if (!__privateGet(this, _keyPair2))
          return;
        const session = __privateGet(this, _friendSessions).get(friendId);
        if (!session?.pendingEcho || !session.friendDhtPublicKey)
          return;
        if (LAN_SWEEP_AFTER_MS <= 0)
          return;
        const packet = createCookieRequest({
          senderRealPublicKey: __privateGet(this, _keyPair2).publicKey,
          senderDhtPublicKey: __privateGet(this, _keyPair2).publicKey,
          senderDhtSecretKey: __privateGet(this, _keyPair2).secretKey,
          receiverDhtPublicKey: session.friendDhtPublicKey,
          echo: session.pendingEcho
        });
        const subnets = getLocalIpv4Subnets();
        const ourLocalIps = getLocalIpv4Addresses();
        const ourLocalPort = __privateGet(this, _udp).localPort();
        let probes = 0;
        for (const host2 of LAN_SWEEP_EXTRA_HOSTS) {
          for (const port of LAN_SWEEP_PORTS) {
            if (port === ourLocalPort && ourLocalIps.includes(host2))
              continue;
            try {
              await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, packet, { host: host2, port });
              probes += 1;
            } catch {
            }
          }
        }
        for (const subnet of subnets) {
          const network = subnet.networkBits;
          const mask = subnet.maskBits;
          const broadcast = (network | ~mask >>> 0) >>> 0;
          if ((~mask >>> 0 & 4294967295) > 511)
            continue;
          for (let addr = network + 1 >>> 0; addr < broadcast; addr = addr + 1 >>> 0) {
            const host2 = `${addr >>> 24 & 255}.${addr >>> 16 & 255}.${addr >>> 8 & 255}.${addr & 255}`;
            for (const port of LAN_SWEEP_PORTS) {
              if (ourLocalPort === port && ourLocalIps.includes(host2))
                continue;
              try {
                await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, packet, { host: host2, port });
                probes += 1;
              } catch {
              }
            }
          }
        }
        if (probes > 0) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `lan_sweep friend=${friendId} probes=${probes}`);
        }
      };
      _dhtPingId = new WeakSet();
      dhtPingId_fn = function() {
        return randomBytes2(8);
      };
      _closestKnownNodes = new WeakSet();
      closestKnownNodes_fn = function(target, limit) {
        const withPk = [];
        for (const node of __privateGet(this, _knownNodes)) {
          if (!node.pk || node.isTcp)
            continue;
          let pk = node.pkBytes;
          if (!pk) {
            try {
              pk = base58ToBytes(node.pk);
            } catch {
              continue;
            }
            if (pk.length !== 32)
              continue;
            node.pkBytes = pk;
          }
          withPk.push({ node, pk });
        }
        withPk.sort((a, b) => xorCloser(target, a.pk, b.pk));
        return withPk.slice(0, limit).map((e) => e.node);
      };
      _friendByDhtPk = new WeakSet();
      friendByDhtPk_fn = function(dhtPkBase58) {
        for (const [friendId, session] of __privateGet(this, _friendSessions).entries()) {
          const dpk = session.friendDhtPublicKey;
          if (dpk && carrierIdFromPublicKey(dpk) === dhtPkBase58) {
            return { friendId, realPk: session.friendRealPublicKey ?? dpk };
          }
        }
        return void 0;
      };
      _handleDhtRpc = new WeakSet();
      handleDhtRpc_fn = function(packet, remote) {
        if (!__privateGet(this, _keyPair2))
          return;
        const decoded = decodeDhtRpc(packet, __privateGet(this, _keyPair2).secretKey);
        if (!decoded)
          return;
        const senderId = carrierIdFromPublicKey(decoded.senderPublicKey);
        if (remote.port > 0 && !__privateMethod(this, _remoteIsTcp, remoteIsTcp_fn).call(this, remote)) {
          this.addKnownNodes([{ host: remote.address, port: remote.port, pk: senderId, isTcp: false }]);
          __privateMethod(this, _refreshFriendDhtKeyFromDht, refreshFriendDhtKeyFromDht_fn).call(this, decoded.senderPublicKey, senderId, remote.address, remote.port);
        }
        if (decoded.type === NET_PACKET_PING_REQUEST) {
          const ping = parsePingPlain(decoded.plain);
          if (!ping)
            return;
          const plain = buildPingPlain(NET_PACKET_PING_RESPONSE, ping.pingId);
          const resp = encodeDhtRpc(NET_PACKET_PING_RESPONSE, __privateGet(this, _keyPair2), decoded.senderPublicKey, plain);
          void __privateMethod(this, _sendPacket, sendPacket_fn).call(this, resp, { host: remote.address, port: remote.port }).catch(() => void 0);
          return;
        }
        if (decoded.type === NET_PACKET_PING_RESPONSE) {
          return;
        }
        if (decoded.type === NET_PACKET_GET_NODES2) {
          const gn = parseGetNodesPlain(decoded.plain);
          if (!gn)
            return;
          const packedParts = [];
          let count = 0;
          for (const node of __privateMethod(this, _closestKnownNodes, closestKnownNodes_fn).call(this, gn.target, 4)) {
            if (!node.pk)
              continue;
            let pk;
            try {
              pk = base58ToBytes(node.pk);
            } catch {
              continue;
            }
            const packed = packUdpNodeV4(node.host, node.port, pk);
            if (packed) {
              packedParts.push(packed);
              count++;
            }
          }
          const nodesBytes = packedParts.length ? concatBytes(packedParts) : new Uint8Array(0);
          const plain = buildSendNodesPlain(nodesBytes, count, gn.pingId);
          const resp = encodeDhtRpc(NET_PACKET_SEND_NODES, __privateGet(this, _keyPair2), decoded.senderPublicKey, plain);
          void __privateMethod(this, _sendPacket, sendPacket_fn).call(this, resp, { host: remote.address, port: remote.port }).catch(() => void 0);
          return;
        }
        if (decoded.type === NET_PACKET_SEND_NODES) {
          const nodeBytes = parseSendNodesNodeBytes(decoded.plain);
          if (!nodeBytes || nodeBytes.length === 0)
            return;
          const nodes = parsePackedNodes(nodeBytes).filter((n) => !n.isTcp);
          if (nodes.length)
            this.addKnownNodes(nodes);
          for (const node of nodes) {
            if (!node.pk)
              continue;
            const match = __privateMethod(this, _friendByDhtPk, friendByDhtPk_fn).call(this, node.pk);
            if (!match)
              continue;
            try {
              __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, match.friendId, node.host, node.port, match.realPk, base58ToBytes(node.pk));
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dht_search found UDP endpoint for ${match.friendId} at ${node.host}:${node.port}`);
              void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, match.friendId).catch(() => void 0);
            } catch {
            }
          }
          return;
        }
      };
      _refreshFriendDhtKeyFromDht = new WeakSet();
      refreshFriendDhtKeyFromDht_fn = function(senderDhtPk, senderId, host2, port) {
        const key2 = `${host2}:${port}`;
        let friendId;
        const probed = __privateGet(this, _lanProbeTargets).get(key2);
        if (probed && Date.now() - probed.sentMs < 3e5) {
          friendId = probed.friendId;
        } else {
          for (const [fid, session2] of __privateGet(this, _friendSessions)) {
            if (session2.established)
              continue;
            if (session2.endpointCandidates?.some((c) => c.host === host2 && c.port === port)) {
              friendId = fid;
              break;
            }
          }
        }
        if (!friendId)
          return;
        for (const [fid, s] of __privateGet(this, _friendSessions)) {
          if (fid === friendId || !s.established || !s.friendDhtPublicKey)
            continue;
          if (Buffer2.from(s.friendDhtPublicKey).equals(Buffer2.from(senderDhtPk)))
            return;
        }
        const byDht = __privateMethod(this, _friendByDhtPk, friendByDhtPk_fn).call(this, senderId);
        if (byDht && byDht.friendId !== friendId) {
          const otherSession = __privateGet(this, _friendSessions).get(byDht.friendId);
          if (otherSession?.established)
            return;
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dht_key_steal ${senderId} from=${byDht.friendId} to=${friendId} (other unestablished)`);
          if (otherSession?.friendDhtPublicKey && Buffer2.from(otherSession.friendDhtPublicKey).equals(Buffer2.from(senderDhtPk))) {
            otherSession.friendDhtPublicKey = void 0;
          }
          __privateGet(this, _friendDhtKeys).delete(byDht.friendId);
        }
        if (senderId === friendId)
          return;
        const session = __privateGet(this, _friendSessions).get(friendId);
        if (!session || session.established)
          return;
        const current = session.friendDhtPublicKey;
        if (current && Buffer2.from(current).equals(Buffer2.from(senderDhtPk)))
          return;
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dht_key_refreshed friend=${friendId} via=${key2} old=${current ? carrierIdFromPublicKey(current) : "none"} new=${senderId}`);
        __privateMethod(this, _cacheFriendRemote, cacheFriendRemote_fn).call(this, friendId, host2, port, void 0, senderDhtPk);
        __privateGet(this, _cookieRetryCount).delete(friendId);
        void __privateMethod(this, _initiateSession, initiateSession_fn).call(this, friendId).catch(() => void 0);
      };
      _sendDhtGetNodes = new WeakSet();
      sendDhtGetNodes_fn = async function(node, targetPublicKey) {
        if (!__privateGet(this, _keyPair2) || !node.pk || node.isTcp)
          return;
        let recipientPk;
        try {
          recipientPk = base58ToBytes(node.pk);
        } catch {
          return;
        }
        if (recipientPk.length !== 32)
          return;
        const plain = buildGetNodesPlain(targetPublicKey, __privateMethod(this, _dhtPingId, dhtPingId_fn).call(this));
        const pkt = encodeDhtRpc(NET_PACKET_GET_NODES2, __privateGet(this, _keyPair2), recipientPk, plain);
        await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, pkt, { host: node.host, port: node.port }).catch(() => void 0);
      };
      _sendDhtPing = new WeakSet();
      sendDhtPing_fn = async function(node) {
        if (!__privateGet(this, _keyPair2) || !node.pk || node.isTcp)
          return;
        let recipientPk;
        try {
          recipientPk = base58ToBytes(node.pk);
        } catch {
          return;
        }
        if (recipientPk.length !== 32)
          return;
        const plain = buildPingPlain(NET_PACKET_PING_REQUEST, __privateMethod(this, _dhtPingId, dhtPingId_fn).call(this));
        const pkt = encodeDhtRpc(NET_PACKET_PING_REQUEST, __privateGet(this, _keyPair2), recipientPk, plain);
        await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, pkt, { host: node.host, port: node.port }).catch(() => void 0);
      };
      _ensureDhtMaintenanceLoop = new WeakSet();
      ensureDhtMaintenanceLoop_fn = function() {
        if (__privateGet(this, _dhtMaintenanceTimer) || DHT_MAINTENANCE_INTERVAL_MS <= 0)
          return;
        __privateSet(this, _dhtMaintenanceTimer, setInterval(() => {
          void __privateMethod(this, _doDhtMaintenance, doDhtMaintenance_fn).call(this).catch(() => void 0);
        }, DHT_MAINTENANCE_INTERVAL_MS));
        if (typeof __privateGet(this, _dhtMaintenanceTimer).unref === "function")
          __privateGet(this, _dhtMaintenanceTimer).unref();
        void __privateMethod(this, _doDhtMaintenance, doDhtMaintenance_fn).call(this).catch(() => void 0);
        for (const delay of [1200, 3e3, 5500, 9e3, 13e3]) {
          const t = setTimeout(() => void __privateMethod(this, _doDhtMaintenance, doDhtMaintenance_fn).call(this).catch(() => void 0), delay);
          if (typeof t.unref === "function")
            t.unref();
        }
        for (const delay of [1e4, 18e3]) {
          const a = setTimeout(() => void __privateMethod(this, _runSelfAnnounce, runSelfAnnounce_fn).call(this, true, Date.now() + 8e3).catch(() => void 0), delay);
          if (typeof a.unref === "function")
            a.unref();
        }
      };
      _doDhtMaintenance = new WeakSet();
      doDhtMaintenance_fn = async function() {
        if (!__privateGet(this, _keyPair2))
          return;
        const selfPk = __privateGet(this, _keyPair2).publicKey;
        for (const node of __privateMethod(this, _closestKnownNodes, closestKnownNodes_fn).call(this, selfPk, 8)) {
          void __privateMethod(this, _sendDhtGetNodes, sendDhtGetNodes_fn).call(this, node, selfPk);
        }
        const small = __privateGet(this, _knownNodes).length < 150;
        const randomSearches = __privateGet(this, _knownNodes).length < 60 ? 6 : small ? 4 : 2;
        for (let i = 0; i < randomSearches; i++) {
          const target = randomBytes2(32);
          for (const node of __privateMethod(this, _closestKnownNodes, closestKnownNodes_fn).call(this, target, small ? 6 : 4)) {
            void __privateMethod(this, _sendDhtGetNodes, sendDhtGetNodes_fn).call(this, node, target);
          }
        }
        for (const [, session] of __privateGet(this, _friendSessions).entries()) {
          const dpk = session.friendDhtPublicKey;
          if (!dpk)
            continue;
          const udpConfirmed = session.lastUdpRecvMs !== void 0 && Date.now() - session.lastUdpRecvMs < 8e3;
          if (udpConfirmed)
            continue;
          for (const node of __privateMethod(this, _closestKnownNodes, closestKnownNodes_fn).call(this, dpk, 6)) {
            void __privateMethod(this, _sendDhtGetNodes, sendDhtGetNodes_fn).call(this, node, dpk);
          }
        }
        for (const node of __privateGet(this, _knownNodes).slice(0, 8)) {
          if (!node.isTcp)
            void __privateMethod(this, _sendDhtPing, sendDhtPing_fn).call(this, node);
        }
        const haveLan = getPhysicalLanAddresses().some((ip) => isPrivateAddress(ip) && !isCgnatAddress(ip));
        if (haveLan) {
          for (const [friendId, session] of __privateGet(this, _friendSessions).entries()) {
            if (!session.established)
              continue;
            if (session.lanRemoteHost && session.remote?.host === session.lanRemoteHost && session.lastUdpRecvMs !== void 0 && Date.now() - session.lastUdpRecvMs > LAN_LOCK_STALE_MS) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `lan_lock_released friend=${friendId} host=${session.lanRemoteHost} (no direct UDP recv for >${LAN_LOCK_STALE_MS}ms)`);
              session.lanRemoteHost = void 0;
            }
            const r = session.remote;
            const remoteIsSameLan = !!r && isPrivateAddress(r.host) && !isCgnatAddress(r.host) && getPhysicalLanSubnets().some((s) => isInIpv4Subnet(r.host, s));
            if (remoteIsSameLan) {
              session.lanRemoteHost = r.host;
            }
            if (!remoteIsSameLan) {
              const lanCand = (session.endpointCandidates ?? []).find((c) => isPrivateAddress(c.host) && !isCgnatAddress(c.host) && getPhysicalLanSubnets().some((s) => isInIpv4Subnet(c.host, s)));
              if (lanCand) {
                session.remote = { host: lanCand.host, port: lanCand.port };
                session.lanRemoteHost = lanCand.host;
                void __privateMethod(this, _sendMessengerPacket, sendMessengerPacket_fn).call(this, friendId, PACKET_ID_ALIVE, new Uint8Array()).catch(() => void 0);
              }
              void __privateMethod(this, _sendUdpEndpointOffer, sendUdpEndpointOffer_fn).call(this, friendId).catch(() => void 0);
            }
          }
        }
      };
      _sendOnionDhtPk = new WeakSet();
      sendOnionDhtPk_fn = async function(friendRealPublicKey) {
        if (!__privateGet(this, _keyPair2))
          return false;
        const friendId = carrierIdFromPublicKey(friendRealPublicKey);
        const routes = await __privateMethod(this, _discoverFriendRoutes, discoverFriendRoutes_fn).call(this, friendRealPublicKey).catch(() => []);
        if (routes.length === 0) {
          const failures = (__privateGet(this, _dhtPkConsecutiveFailures).get(friendId) ?? 0) + 1;
          __privateGet(this, _dhtPkConsecutiveFailures).set(friendId, failures);
          if (failures === 1) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dhtpk_send no routes available for ${friendId} (consecutive_failures=1)`);
          } else {
            __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `dhtpk_send no routes available for ${friendId} (consecutive_failures=${failures})`);
          }
          return false;
        }
        __privateGet(this, _dhtPkConsecutiveFailures).delete(friendId);
        const noReplay = BigInt(Math.floor(Date.now() / 1e3));
        const noReplayBytes = new Uint8Array(8);
        {
          let v = noReplay;
          for (let i = 7; i >= 0; i--) {
            noReplayBytes[i] = Number(v & 0xffn);
            v >>= 8n;
          }
        }
        const packed = [];
        const ourUdpPort = __privateGet(this, _udp)?.localPort();
        if (ourUdpPort && ourUdpPort > 0) {
          const ourDhtPk = __privateGet(this, _keyPair2)?.publicKey;
          if (ourDhtPk && ourDhtPk.length === 32) {
            try {
              const seenIps = /* @__PURE__ */ new Set();
              for (const address of getPhysicalLanAddresses()) {
                {
                  if (seenIps.has(address))
                    continue;
                  seenIps.add(address);
                  const parts = address.split(".").map((p) => Number.parseInt(p, 10));
                  if (parts.length !== 4 || parts.some((n) => !(n >= 0 && n <= 255)))
                    continue;
                  const entry = new Uint8Array(1 + 4 + 2 + 32);
                  entry[0] = 2;
                  entry[1] = parts[0];
                  entry[2] = parts[1];
                  entry[3] = parts[2];
                  entry[4] = parts[3];
                  entry[5] = ourUdpPort >> 8 & 255;
                  entry[6] = ourUdpPort & 255;
                  entry.set(ourDhtPk, 7);
                  packed.push(entry);
                }
              }
              try {
                const srflx = await __privateMethod(this, _gatherOwnSrflx, gatherOwnSrflx_fn).call(this);
                if (srflx && srflx.port > 0 && !seenIps.has(srflx.host)) {
                  const parts = srflx.host.split(".").map((p) => Number.parseInt(p, 10));
                  if (parts.length === 4 && !parts.some((n) => !(n >= 0 && n <= 255))) {
                    const entry = new Uint8Array(1 + 4 + 2 + 32);
                    entry[0] = 2;
                    entry[1] = parts[0];
                    entry[2] = parts[1];
                    entry[3] = parts[2];
                    entry[4] = parts[3];
                    entry[5] = srflx.port >> 8 & 255;
                    entry[6] = srflx.port & 255;
                    entry.set(ourDhtPk, 7);
                    packed.push(entry);
                  }
                }
              } catch {
              }
            } catch {
            }
          }
        }
        if (__privateGet(this, _tcpRelays)) {
          const relays = __privateGet(this, _tcpRelays).connectedRelays(3);
          for (const r of relays) {
            const parts = r.host.split(".").map((p) => Number.parseInt(p, 10));
            if (parts.length !== 4 || parts.some((n) => !(n >= 0 && n <= 255)))
              continue;
            const entry = new Uint8Array(1 + 4 + 2 + 32);
            entry[0] = 130;
            entry[1] = parts[0];
            entry[2] = parts[1];
            entry[3] = parts[2];
            entry[4] = parts[3];
            entry[5] = r.port >> 8 & 255;
            entry[6] = r.port & 255;
            entry.set(r.serverPublicKey, 7);
            packed.push(entry);
          }
        }
        const extras = packed.length > 0 ? concatBytes(packed) : new Uint8Array(0);
        const innerPayload = concatBytes([
          noReplayBytes,
          __privateGet(this, _keyPair2).publicKey,
          extras
        ]);
        let sent = 0;
        for (const route of routes) {
          try {
            const nonce = randomBytes2(24);
            const onionData = createOnionDataPacket({
              senderPublicKey: __privateGet(this, _keyPair2).publicKey,
              senderSecretKey: __privateGet(this, _keyPair2).secretKey,
              receiverPublicKey: friendRealPublicKey,
              nonce,
              innerPacketId: CRYPTO_PACKET_DHTPK,
              innerPayload
            });
            const dataRequest = createOnionDataRequest({
              destinationPublicKey: friendRealPublicKey,
              routePublicKey: route.routePublicKey,
              nonce,
              onionDataPacket: onionData
            });
            await __privateMethod(this, _sendThroughOnionPath, sendThroughOnionPath_fn).call(this, dataRequest, route.node, sent);
            sent += 1;
            if (sent >= 4)
              break;
          } catch (error) {
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dhtpk_send route failed via ${route.node.host}:${route.node.port}: ${error.message}`);
          }
        }
        if (sent > 0) {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `dhtpk_sent friend=${friendId} routes=${sent} noReplay=${noReplay.toString()}`);
        }
        return sent > 0;
      };
      _setFriendOnline = new WeakSet();
      setFriendOnline_fn = function(friendId, remoteHost, remotePort) {
        const friend = __privateGet(this, _friends).get(friendId);
        if (!friend) {
          return;
        }
        const isSynthetic = remoteHost.startsWith("tcp:") || remotePort === 0;
        const persistedHost = isSynthetic ? friend.remoteHost : remoteHost;
        const persistedPort = isSynthetic ? friend.remotePort : remotePort;
        const changed = friend.status !== "online" || friend.remoteHost !== persistedHost || friend.remotePort !== persistedPort;
        __privateGet(this, _friends).set(friendId, {
          ...friend,
          status: "online",
          remoteHost: persistedHost,
          remotePort: persistedPort
        });
        if (changed) {
          __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
          __privateGet(this, _events).emit("friendConnection", {
            pubkey: friendId,
            status: "connected"
          });
        }
      };
      _setFriendOffline = new WeakSet();
      setFriendOffline_fn = function(friendId) {
        __privateGet(this, _profileSentTo).delete(friendId);
        const profileRetry = __privateGet(this, _profileRetryTimers).get(friendId);
        if (profileRetry)
          clearTimeout(profileRetry);
        __privateGet(this, _profileRetryTimers).delete(friendId);
        __privateGet(this, _profileRetryAttempts).delete(friendId);
        const friend = __privateGet(this, _friends).get(friendId);
        if (!friend) {
          return;
        }
        if (friend.status === "offline") {
          return;
        }
        __privateGet(this, _friends).set(friendId, {
          ...friend,
          status: "offline"
        });
        __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
        __privateGet(this, _events).emit("friendConnection", {
          pubkey: friendId,
          status: "disconnected"
        });
      };
      _sendAnnounceAndWait = new WeakSet();
      sendAnnounceAndWait_fn = async function(opts) {
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `announce request target=${opts.node.host}:${opts.node.port} searchEqSender=${bytesEqual3(opts.searchPublicKey, opts.senderPublicKey)} dataKeyZero=${isAllZero(opts.dataPublicKey)}`);
        const request = createOnionAnnounceRequest({
          senderPublicKey: opts.senderPublicKey,
          senderSecretKey: opts.senderSecretKey,
          nodePublicKey: opts.nodePublicKey,
          pingId: opts.pingId,
          searchPublicKey: opts.searchPublicKey,
          dataPublicKey: opts.dataPublicKey,
          sendBack: opts.sendBack
        });
        const nodeId = `${opts.node.host}:${opts.node.port}`;
        const pinnedRoute = opts.reuseRoute ? __privateGet(this, _announceRouteUsed).get(nodeId) : void 0;
        const exchange = async (forcedPath) => {
          const waiter = __privateMethod(this, _waitForAnnounceResponse, waitForAnnounceResponse_fn).call(this, opts.node, opts.sendBack, {
            requesterSecretKey: opts.senderSecretKey,
            nodePublicKey: opts.nodePublicKey
          });
          const routeUsed = await __privateMethod(this, _sendThroughOnionPath, sendThroughOnionPath_fn).call(this, request, opts.node, 0, forcedPath);
          const response = await waiter;
          if (response) {
            __privateMethod(this, _recordNodeSuccess, recordNodeSuccess_fn).call(this, nodeId);
            __privateGet(this, _announceRouteUsed).set(nodeId, routeUsed);
            return response;
          }
          __privateMethod(this, _recordNodeFailure, recordNodeFailure_fn).call(this, nodeId);
          return void 0;
        };
        if (pinnedRoute) {
          const pinnedAttempts = Math.max(1, opts.attempts ?? 3);
          for (let attempt = 0; attempt < pinnedAttempts; attempt++) {
            const response = await exchange(pinnedRoute);
            if (response)
              return response;
          }
          return void 0;
        }
        const attempts = opts.attempts ?? 3;
        for (let attempt = 0; attempt < attempts; attempt++) {
          const waiter = __privateMethod(this, _waitForAnnounceResponse, waitForAnnounceResponse_fn).call(this, opts.node, opts.sendBack, {
            requesterSecretKey: opts.senderSecretKey,
            nodePublicKey: opts.nodePublicKey
          });
          const routeUsed = await __privateMethod(this, _sendThroughOnionPath, sendThroughOnionPath_fn).call(this, request, opts.node, attempt);
          const response = await waiter;
          if (response) {
            __privateMethod(this, _recordNodeSuccess, recordNodeSuccess_fn).call(this, nodeId);
            __privateGet(this, _announceRouteUsed).set(nodeId, routeUsed);
            return response;
          }
          __privateMethod(this, _recordNodeFailure, recordNodeFailure_fn).call(this, nodeId);
        }
        if (opts.allowDirectFallback) {
          const response = await exchange("direct");
          if (response)
            return response;
        }
        return void 0;
      };
      _waitForAnnounceResponse = new WeakSet();
      waitForAnnounceResponse_fn = async function(node, sendBack, openOpts) {
        return new Promise((resolve2) => {
          const timeout = setTimeout(() => {
            cleanup();
            resolve2(void 0);
          }, ANNOUNCE_WAIT_TIMEOUT_MS);
          const onDatagram = ({ data, remote }) => {
            const source = `${remote.address}:${remote.port}`;
            const packet = stripCarrierMagic(data);
            if (packet.length === 0 || packet[0] !== NET_PACKET_ONION_ANNOUNCE_RESPONSE) {
              return;
            }
            const SEND_BACK_OFFSET = 1;
            const SEND_BACK_LEN = 8;
            if (packet.length < SEND_BACK_OFFSET + SEND_BACK_LEN) {
              return;
            }
            const incoming = packet.subarray(SEND_BACK_OFFSET, SEND_BACK_OFFSET + SEND_BACK_LEN);
            if (!bytesEqual3(incoming, sendBack)) {
              return;
            }
            const opened = openOnionAnnounceResponse(packet, openOpts);
            if (!opened) {
              __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `announce response decrypt failed from ${source}`);
              return;
            }
            __privateMethod(this, _recordNodeSuccess, recordNodeSuccess_fn).call(this, source);
            __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `announce response accepted from ${source}`);
            cleanup();
            resolve2(opened);
          };
          const cleanup = () => {
            clearTimeout(timeout);
            __privateGet(this, _udp).off("datagram", onDatagram);
          };
          __privateGet(this, _udp).on("datagram", onDatagram);
        });
      };
      _sendPacket = new WeakSet();
      sendPacket_fn = async function(packet, node) {
        __privateMethod(this, _tracePacket, tracePacket_fn).call(this, "tx", packet, node);
        const wrapped = concatBytes([Uint8Array.of(105, 118, 101, 103), packet]);
        await __privateGet(this, _udp).send(Buffer2.from(wrapped), node.host, node.port);
      };
      _sendThroughOnionPath = new WeakSet();
      sendThroughOnionPath_fn = async function(payloadForNodeD, nodeD, pathOffset = 0, forcedPath) {
        const path = forcedPath === "direct" ? void 0 : forcedPath ?? __privateMethod(this, _selectOnionPath, selectOnionPath_fn).call(this, nodeD, pathOffset);
        if (!path) {
          if (__privateGet(this, _tcpRelays) && __privateGet(this, _tcpRelays).connectedCount() > 0) {
            const hops = __privateMethod(this, _selectTcpOnionHops, selectTcpOnionHops_fn).call(this, nodeD, pathOffset);
            if (hops) {
              try {
                const tcpPacket = createOnionRequest0Tcp({
                  nodeBHost: hops.nodeB.host,
                  nodeBPort: hops.nodeB.port,
                  nodeBPublicKey: hops.nodeB.publicKey,
                  nodeCHost: hops.nodeC.host,
                  nodeCPort: hops.nodeC.port,
                  nodeCPublicKey: hops.nodeC.publicKey,
                  nodeDHost: nodeD.host,
                  nodeDPort: nodeD.port,
                  payloadForNodeD
                });
                const sent = __privateGet(this, _tcpRelays).sendOnionRequest(tcpPacket);
                if (sent > 0) {
                  __privateSet(this, _diagTcpOnionSent, __privateGet(this, _diagTcpOnionSent) + 1);
                  __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `no 3-hop path for ${nodeD.host}:${nodeD.port} \u2014 relayed 2-hop onion via ${sent} relay(s) (B=${hops.nodeB.host} C=${hops.nodeC.host})`);
                  return "direct";
                }
              } catch {
              }
            }
          }
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `no onion path for ${nodeD.host}:${nodeD.port}, sending direct`);
          await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, payloadForNodeD, nodeD);
          return "direct";
        }
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `sending onion initial via ${path.nodeA.node.host}:${path.nodeA.node.port} to ${nodeD.host}:${nodeD.port}`);
        const packet = createOnionRequest0({
          nodeAPublicKey: path.nodeA.publicKey,
          nodeBHost: path.nodeB.host,
          nodeBPort: path.nodeB.port,
          nodeBPublicKey: path.nodeB.publicKey,
          nodeCHost: path.nodeC.host,
          nodeCPort: path.nodeC.port,
          nodeCPublicKey: path.nodeC.publicKey,
          nodeDHost: nodeD.host,
          nodeDPort: nodeD.port,
          payloadForNodeD
        });
        await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, packet, path.nodeA.node);
        if (__privateGet(this, _tcpRelays) && __privateGet(this, _tcpRelays).connectedCount() > 0) {
          try {
            const tcpPacket = createOnionRequest0Tcp({
              nodeBHost: path.nodeB.host,
              nodeBPort: path.nodeB.port,
              nodeBPublicKey: path.nodeB.publicKey,
              nodeCHost: path.nodeC.host,
              nodeCPort: path.nodeC.port,
              nodeCPublicKey: path.nodeC.publicKey,
              nodeDHost: nodeD.host,
              nodeDPort: nodeD.port,
              payloadForNodeD
            });
            const sent = __privateGet(this, _tcpRelays).sendOnionRequest(tcpPacket);
            if (sent > 0) {
              __privateSet(this, _diagTcpOnionSent, __privateGet(this, _diagTcpOnionSent) + 1);
              __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `tcp onion request sent via ${sent} relay(s) to ${nodeD.host}:${nodeD.port} (B=${path.nodeB.host} C=${path.nodeC.host})`);
            }
          } catch {
          }
        }
        return path;
      };
      _onionCandidatePool = new WeakSet();
      onionCandidatePool_fn = function(nodeD) {
        const nodeDId = `${nodeD.host}:${nodeD.port}`;
        const candidates = [];
        const bootstrapIds = new Set(__privateGet(this, _opts3).bootstrapNodes.map((node) => `${node.host}:${node.port}`));
        const seenHosts = /* @__PURE__ */ new Set();
        const seenPublicKeys = /* @__PURE__ */ new Set();
        for (const node of dedupeNodes([...__privateGet(this, _opts3).bootstrapNodes, ...__privateGet(this, _knownNodes)])) {
          if (!node.pk) {
            continue;
          }
          const id = `${node.host}:${node.port}`;
          if (id === nodeDId || node.host === nodeD.host || seenHosts.has(node.host)) {
            continue;
          }
          if (isPrivateAddress(node.host) || isCgnatAddress(node.host) || isOwnAddress(node.host)) {
            continue;
          }
          if (__privateMethod(this, _isNodeBlacklisted, isNodeBlacklisted_fn).call(this, id)) {
            continue;
          }
          try {
            const pk = base58ToBytes(node.pk);
            const pkHex = Buffer2.from(pk).toString("hex");
            if (pk.length === 32 && !seenPublicKeys.has(pkHex)) {
              seenHosts.add(node.host);
              seenPublicKeys.add(pkHex);
              candidates.push({
                node,
                publicKey: pk,
                score: __privateMethod(this, _nodeScore, nodeScore_fn).call(this, id) + relayPortScore(node.port) + (bootstrapIds.has(id) ? 4 : 0)
              });
            }
          } catch {
          }
        }
        candidates.sort((a, b) => b.score - a.score);
        const preferredRelays = candidates.filter((item) => isLikelyStableRelayPort(item.node.port));
        const healthy = preferredRelays.filter((item) => item.score > -2);
        return healthy.length >= 3 ? healthy : preferredRelays.length >= 3 ? preferredRelays : candidates;
      };
      _selectTcpOnionHops = new WeakSet();
      selectTcpOnionHops_fn = function(nodeD, pathOffset = 0) {
        const pool = __privateMethod(this, _onionCandidatePool, onionCandidatePool_fn).call(this, nodeD);
        if (pool.length < 2)
          return void 0;
        const i1 = pathOffset % pool.length;
        const i2 = (pathOffset + 1) % pool.length;
        if (i1 === i2)
          return void 0;
        const hop = (x) => ({
          node: x.node,
          host: x.node.host,
          port: x.node.port,
          publicKey: x.publicKey
        });
        return { nodeB: hop(pool[i1]), nodeC: hop(pool[i2]) };
      };
      _selectOnionPath = new WeakSet();
      selectOnionPath_fn = function(nodeD, pathOffset = 0) {
        const pool = __privateMethod(this, _onionCandidatePool, onionCandidatePool_fn).call(this, nodeD);
        if (pool.length < 3) {
          return void 0;
        }
        const count = pool.length;
        const i0 = pathOffset % count;
        const i1 = (pathOffset + 1) % count;
        const i2 = (pathOffset + 2) % count;
        return {
          nodeA: pool[i0],
          nodeB: {
            node: pool[i1].node,
            host: pool[i1].node.host,
            port: pool[i1].node.port,
            publicKey: pool[i1].publicKey
          },
          nodeC: {
            node: pool[i2].node,
            host: pool[i2].node.host,
            port: pool[i2].node.port,
            publicKey: pool[i2].publicKey
          }
        };
      };
      _sendDirectCryptoFriendRequest = new WeakSet();
      sendDirectCryptoFriendRequest_fn = async function(friendPublicKey, friendReqPayload) {
        if (!__privateGet(this, _keyPair2)) {
          throw new Error("Peer is not started");
        }
        const cryptoPacket = createToxDhtCryptoRequest({
          sender: __privateGet(this, _keyPair2),
          receiverPublicKey: friendPublicKey,
          requestId: CRYPTO_PACKET_FRIEND_REQ,
          data: friendReqPayload
        });
        const targets = dedupeNodes(__privateGet(this, _knownNodes).length > 0 ? __privateGet(this, _knownNodes) : __privateGet(this, _opts3).bootstrapNodes);
        let sent = 0;
        for (const node of targets) {
          try {
            await __privateMethod(this, _sendPacket, sendPacket_fn).call(this, cryptoPacket, node);
            sent += 1;
          } catch {
          }
        }
        if (sent === 0) {
          throw new Error("friend request dispatch failed: no packet was sent");
        }
        __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `direct friend request sent via ${sent} targets`);
      };
      _debugLog2 = new WeakSet();
      debugLog_fn2 = function(message) {
        if (!__privateGet(this, _debug4)) {
          return;
        }
        const label = __privateGet(this, _opts3).debugLabel ? `:${__privateGet(this, _opts3).debugLabel}` : "";
        console.log(`[peer-debug${label}] ${message}`);
      };
      _debugVerboseLog = new WeakSet();
      debugVerboseLog_fn = function(message) {
        if (!__privateGet(this, _debugVerbose)) {
          return;
        }
        const label = __privateGet(this, _opts3).debugLabel ? `:${__privateGet(this, _opts3).debugLabel}` : "";
        console.log(`[peer-debug${label}] ${message}`);
      };
      _tracePacket = new WeakSet();
      tracePacket_fn = function(direction, packet, remote) {
        if (!__privateGet(this, _packetTrace) || packet.length === 0) {
          return;
        }
        const type2 = packet[0];
        const label = __privateGet(this, _opts3).debugLabel ? `:${__privateGet(this, _opts3).debugLabel}` : "";
        console.log(`[peer-packet${label}] ${direction} type=0x${type2.toString(16).padStart(2, "0")} len=${packet.length} peer=${remote.host}:${remote.port}`);
      };
      _recordNodeSuccess = new WeakSet();
      recordNodeSuccess_fn = function(nodeId) {
        const prev = __privateGet(this, _nodeHealth).get(nodeId) ?? { ok: 0, fail: 0, lastOkMs: 0 };
        __privateGet(this, _nodeHealth).set(nodeId, {
          ok: prev.ok + 1,
          fail: prev.fail,
          lastOkMs: Date.now()
        });
        __privateGet(this, _nodeBlacklist).delete(nodeId);
      };
      _recordNodeFailure = new WeakSet();
      recordNodeFailure_fn = function(nodeId) {
        const prev = __privateGet(this, _nodeHealth).get(nodeId) ?? { ok: 0, fail: 0, lastOkMs: 0 };
        const next = {
          ok: prev.ok,
          fail: prev.fail + 1,
          lastOkMs: prev.lastOkMs
        };
        __privateGet(this, _nodeHealth).set(nodeId, next);
        const consecutive = next.fail - next.ok;
        if (consecutive >= NODE_BLACKLIST_THRESHOLD) {
          const ttl = Math.min(NODE_BLACKLIST_MAX_TTL_MS, NODE_BLACKLIST_BASE_TTL_MS * Math.pow(1.5, consecutive - NODE_BLACKLIST_THRESHOLD));
          __privateGet(this, _nodeBlacklist).set(nodeId, Date.now() + ttl);
          __privateMethod(this, _debugVerboseLog, debugVerboseLog_fn).call(this, `node ${nodeId} blacklisted for ${Math.round(ttl / 1e3)}s after ${consecutive} consecutive fails`);
        }
      };
      _isNodeBlacklisted = new WeakSet();
      isNodeBlacklisted_fn = function(nodeId) {
        const expiry = __privateGet(this, _nodeBlacklist).get(nodeId);
        if (expiry === void 0)
          return false;
        if (Date.now() > expiry) {
          __privateGet(this, _nodeBlacklist).delete(nodeId);
          return false;
        }
        return true;
      };
      _nodeScore = new WeakSet();
      nodeScore_fn = function(nodeId) {
        const h = __privateGet(this, _nodeHealth).get(nodeId);
        if (!h) {
          return 0;
        }
        const recentBonus = Date.now() - h.lastOkMs < 6e4 ? 2 : 0;
        return h.ok * 2 - h.fail + recentBonus;
      };
      _pauseSelfAnnounce = new WeakSet();
      pauseSelfAnnounce_fn = function() {
        __privateSet(this, _selfAnnouncePauseDepth, __privateGet(this, _selfAnnouncePauseDepth) + 1);
        return () => {
          __privateSet(this, _selfAnnouncePauseDepth, Math.max(0, __privateGet(this, _selfAnnouncePauseDepth) - 1));
        };
      };
      _runSelfAnnounce = new WeakSet();
      runSelfAnnounce_fn = async function(force, deadlineMs) {
        if (__privateGet(this, _selfAnnouncePromise)) {
          await __privateGet(this, _selfAnnouncePromise).catch(() => {
          });
        }
        __privateSet(this, _selfAnnouncePromise, __privateMethod(this, _announceSelfBestEffort, announceSelfBestEffort_fn).call(this, force, deadlineMs));
        try {
          const result = await __privateGet(this, _selfAnnouncePromise);
          return result ?? [];
        } finally {
          __privateSet(this, _selfAnnouncePromise, void 0);
        }
      };
      _loadPersistedFriends = new WeakSet();
      loadPersistedFriends_fn = async function() {
        if (!__privateGet(this, _friendStoreFile)) {
          return;
        }
        try {
          const raw = await readFile(__privateGet(this, _friendStoreFile), "utf8");
          const parsed = JSON.parse(raw);
          if (!Array.isArray(parsed)) {
            return;
          }
          for (const record of parsed) {
            if (!record || typeof record.pubkey !== "string" || !record.pubkey) {
              continue;
            }
            const trusted = record.acceptedAt ? record : {
              ...record,
              remoteHost: void 0,
              remotePort: void 0,
              status: record.status === "online" ? "offline" : record.status
            };
            if (trusted.remoteHost && isOwnVirtualAddress(trusted.remoteHost)) {
              trusted.remoteHost = void 0;
              trusted.remotePort = void 0;
            }
            __privateGet(this, _friends).set(record.pubkey, trusted);
          }
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `loaded ${__privateGet(this, _friends).size} persisted friends`);
        } catch (error) {
          const isParse = error instanceof SyntaxError;
          if (isParse) {
            try {
              const raw = await readFile(__privateGet(this, _friendStoreFile), "utf8");
              const end = raw.indexOf("]");
              if (end !== -1) {
                const recovered = JSON.parse(raw.slice(0, end + 1));
                if (Array.isArray(recovered)) {
                  for (const record of recovered) {
                    if (record && typeof record.pubkey === "string" && record.pubkey) {
                      __privateGet(this, _friends).set(record.pubkey, record);
                    }
                  }
                  __privateMethod(this, _persistFriends, persistFriends_fn).call(this);
                }
              }
            } catch {
            }
            console.error(`[peer] friend store ${__privateGet(this, _friendStoreFile)} was corrupt (${error.message}); recovered ${__privateGet(this, _friends).size} friend(s).`);
          }
        }
      };
      _persistFriends = new WeakSet();
      persistFriends_fn = function() {
        if (!__privateGet(this, _friendStoreFile)) {
          return;
        }
        const file = __privateGet(this, _friendStoreFile);
        const payload = JSON.stringify([...__privateGet(this, _friends).values()], null, 2);
        const tmp = `${file}.tmp.${process.pid}.${__privateWrapper(this, _persistSeq)._++}`;
        void mkdir(dirname(file), { recursive: true }).then(() => writeFile(tmp, payload, "utf8")).then(() => rename(tmp, file)).catch((error) => {
          __privateMethod(this, _debugLog2, debugLog_fn2).call(this, `persist friends failed: ${error.message}`);
        });
      };
      Peer = _Peer;
      VIRTUAL_IFACE_RE = /^(utun|tun|tap|wg|tailscale|zt|ham|agentnet|awdl|llw|gif|stf|bridge|br-|virbr|cni|flannel|weave|kube|vnet|vnic|vmnet|veth|docker)/i;
      _lanIfaceCacheMs = 0;
      _lanAddrsCache = [];
      _lanSubnetsCache = [];
      _allOwnAddrsCache = /* @__PURE__ */ new Set();
      _ownVirtualAddrsCache = /* @__PURE__ */ new Set();
      _wslHostAddrsCache = /* @__PURE__ */ new Set();
      _wslHostCacheMs = 0;
    }
  });

  // src/web-entry.js
  init_buffer_global();
  init_process_global();

  // src/identity.js
  init_buffer_global();
  init_process_global();
  var import_tweetnacl3 = __toESM(require_nacl_fast(), 1);
  init_address();
  init_sign();
  init_bytes();
  var KEYFILE_FORMAT = "decent-peer-tox-keypair-v1";
  function createIdentity() {
    const kp = import_tweetnacl3.default.box.keyPair();
    return { publicKey: kp.publicKey, secretKey: kp.secretKey };
  }
  function describeIdentity(keyPair, nospam = 0) {
    return {
      userid: carrierIdFromPublicKey(keyPair.publicKey),
      address: carrierAddressFromPublicKey(keyPair.publicKey, nospam)
    };
  }
  function exportIdentity(keyPair) {
    return {
      format: KEYFILE_FORMAT,
      publicKey: bytesToHex2(keyPair.publicKey),
      secretKey: bytesToHex2(keyPair.secretKey)
    };
  }
  function importIdentity(parsed) {
    if (!parsed || parsed.format !== KEYFILE_FORMAT) {
      throw new Error(`unsupported key file format: ${parsed?.format}`);
    }
    const publicKey = hexToBytes2(parsed.publicKey);
    const secretKey = hexToBytes2(parsed.secretKey);
    if (publicKey.length !== import_tweetnacl3.default.box.publicKeyLength || secretKey.length !== import_tweetnacl3.default.box.secretKeyLength) {
      throw new Error("invalid key file key length");
    }
    return { publicKey, secretKey };
  }
  function signBridgeProof(keyPair, origin, nonce) {
    const message = new TextEncoder().encode(`decent-bridge
${origin}
${nonce}`);
    return signDetached(keyPair.secretKey, message);
  }
  function signLaunch(keyPair, origin, ts) {
    const message = new TextEncoder().encode(`decent-launch
${origin}
${ts}`);
    return signDetached(keyPair.secretKey, message);
  }

  // src/web-entry.js
  init_bytes();

  // src/store.js
  init_buffer_global();
  init_process_global();
  var DB_NAME = "beagle-web";
  var DB_VERSION = 2;
  var KV = "kv";
  var FRIENDS = "friends";
  var MESSAGES = "messages";
  var dbPromise = null;
  var STORES = [KV, FRIENDS, MESSAGES];
  var missingStores = (db) => STORES.filter((n) => !db.objectStoreNames.contains(n));
  function recreate() {
    return new Promise((resolve2, reject) => {
      const del = indexedDB.deleteDatabase(DB_NAME);
      const go = () => {
        dbPromise = null;
        openDB().then(resolve2, reject);
      };
      del.onsuccess = go;
      del.onerror = () => reject(del.error || new Error("could not delete the database"));
      del.onblocked = () => setTimeout(go, 1e3);
    });
  }
  function openDB() {
    if (dbPromise)
      return dbPromise;
    dbPromise = new Promise((resolve2, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      const timer = setTimeout(
        () => reject(new Error("IndexedDB open did not settle in 10s")),
        1e4
      );
      const finish = (fn, v) => {
        clearTimeout(timer);
        fn(v);
      };
      req.onblocked = () => finish(reject, new Error("IndexedDB open blocked by another tab"));
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(KV))
          db.createObjectStore(KV);
        if (!db.objectStoreNames.contains(FRIENDS))
          db.createObjectStore(FRIENDS, { keyPath: "userid" });
        if (!db.objectStoreNames.contains(MESSAGES)) {
          const s = db.createObjectStore(MESSAGES, { keyPath: "id", autoIncrement: true });
          s.createIndex("peer_ts", ["peer", "ts"]);
        }
      };
      req.onsuccess = () => {
        const db = req.result;
        const missing = missingStores(db);
        if (missing.length) {
          try {
            db.close();
          } catch {
          }
          clearTimeout(timer);
          recreate().then(resolve2, reject);
          return;
        }
        finish(resolve2, db);
      };
      req.onerror = () => finish(reject, req.error || new Error("IndexedDB unavailable"));
    }).catch((err) => {
      dbPromise = null;
      throw err;
    });
    return dbPromise;
  }
  var TX_TIMEOUT_MS = 4e3;
  var BOOT_TIMEOUT_MS = 1500;
  var storageWedged = (() => {
    try {
      return new URLSearchParams(location.search).get("nostore") === "1";
    } catch {
      return false;
    }
  })();
  var memKv = /* @__PURE__ */ new Map();
  var memMsgs = [];
  var memSeq = 1;
  async function withStore(op, fallback) {
    if (storageWedged)
      return fallback();
    try {
      return await op();
    } catch (err) {
      storageWedged = true;
      return fallback();
    }
  }
  function tx(db, store, mode, fn, timeoutMs = TX_TIMEOUT_MS) {
    return new Promise((resolve2, reject) => {
      let done = false;
      const settle = (fn2, v) => {
        if (!done) {
          done = true;
          clearTimeout(timer);
          fn2(v);
        }
      };
      const timer = setTimeout(
        () => settle(reject, new Error(`IndexedDB ${mode} on '${store}' did not settle in ${timeoutMs}ms`)),
        timeoutMs
      );
      let t, req;
      try {
        t = db.transaction(store, mode);
        req = fn(t.objectStore(store));
      } catch (err) {
        settle(reject, err);
        return;
      }
      t.onerror = () => settle(reject, t.error || new Error("IndexedDB transaction failed"));
      t.onabort = () => settle(reject, t.error || new Error("IndexedDB transaction aborted (storage blocked or full?)"));
      t.oncomplete = () => settle(resolve2, req && req.result);
    });
  }
  async function kvGet(key2, { timeoutMs } = {}) {
    return withStore(
      async () => tx(await openDB(), KV, "readonly", (s) => s.get(key2), timeoutMs),
      () => memKv.get(key2)
    );
  }
  async function kvGetSafe(key2, fallback = null, onFail) {
    if (storageWedged)
      return fallback;
    try {
      return await kvGet(key2, { timeoutMs: BOOT_TIMEOUT_MS }) ?? fallback;
    } catch (err) {
      storageWedged = true;
      onFail?.(err);
      return fallback;
    }
  }
  async function kvPut(key2, value, { timeoutMs } = {}) {
    return withStore(
      async () => tx(await openDB(), KV, "readwrite", (s) => s.put(value, key2), timeoutMs),
      () => {
        memKv.set(key2, value);
      }
    );
  }
  async function listFriends() {
    try {
      const db = await openDB();
      return await tx(db, FRIENDS, "readonly", (s) => s.getAll()) || [];
    } catch {
      storageWedged = true;
      return [];
    }
  }
  async function appendMessage(msg) {
    if (!storageWedged) {
      try {
        return await tx(await openDB(), MESSAGES, "readwrite", (s) => s.add(msg));
      } catch {
        storageWedged = true;
      }
    }
    const id = `mem-${memSeq++}`;
    memMsgs.push({ ...msg, id });
    if (memMsgs.length > 5e3)
      memMsgs.splice(0, memMsgs.length - 5e3);
    return id;
  }
  async function historyFor(peer, limit = 200) {
    if (storageWedged) {
      return memMsgs.filter((m) => m.peer === peer).slice(-limit);
    }
    try {
      const db = await openDB();
      const all = await tx(db, MESSAGES, "readonly", (s) => s.index("peer_ts").getAll(IDBKeyRange.bound([peer, 0], [peer, Number.MAX_SAFE_INTEGER])));
      return (all || []).slice(-limit);
    } catch {
      storageWedged = true;
      return [];
    }
  }
  async function messageStats() {
    let all = storageWedged ? memMsgs : void 0;
    try {
      if (all === void 0) {
        const db = await openDB();
        all = await tx(db, MESSAGES, "readonly", (s) => s.getAll());
      }
    } catch {
      storageWedged = true;
      all = null;
    }
    if (all === null)
      all = memMsgs;
    const byPeer = /* @__PURE__ */ new Map();
    for (const m of all || []) {
      let e = byPeer.get(m.peer);
      if (!e) {
        e = { unread: 0, lastMessage: null };
        byPeer.set(m.peer, e);
      }
      const preview = m.text || (m.file ? `[file] ${m.file.name}` : "");
      if (!e.lastMessage || m.ts >= e.lastMessage.ts)
        e.lastMessage = { dir: m.dir, text: preview, ts: m.ts };
      if (m.dir === "in" && !m.read)
        e.unread += 1;
    }
    return byPeer;
  }
  async function queuedOutgoing(peer) {
    try {
      const all = await historyFor(peer, 1e3);
      return (all || []).filter((m) => m.dir === "out" && !m.file && (m.status === "queued" || m.status === "sending"));
    } catch {
      return [];
    }
  }
  async function queuedPeers() {
    try {
      const db = await openDB();
      const all = await tx(db, MESSAGES, "readonly", (s) => s.getAll());
      const peers = /* @__PURE__ */ new Set();
      for (const m of all || []) {
        if (m.dir === "out" && !m.file && (m.status === "queued" || m.status === "sending"))
          peers.add(m.peer);
      }
      return [...peers];
    } catch {
      storageWedged = true;
      return [];
    }
  }
  async function usedFileNames() {
    let all;
    try {
      const db = await openDB();
      all = await tx(db, MESSAGES, "readonly", (s) => s.getAll());
    } catch {
      storageWedged = true;
      return /* @__PURE__ */ new Set();
    }
    const names = /* @__PURE__ */ new Set();
    for (const m of all || [])
      if (m.file?.name)
        names.add(m.file.name);
    return names;
  }
  async function updateMessage(id, patch) {
    if (storageWedged) {
      const m = memMsgs.find((x) => x.id === id);
      if (m) {
        Object.assign(m, patch);
        if (patch.file && m.file)
          m.file = { ...m.file, ...patch.file };
      }
      return;
    }
    const db = await openDB().catch(() => null);
    if (!db) {
      storageWedged = true;
      return;
    }
    await tx(db, MESSAGES, "readwrite", (s) => {
      const g = s.get(id);
      g.onsuccess = () => {
        const v = g.result;
        if (!v)
          return;
        Object.assign(v, patch);
        if (patch.file && v.file)
          v.file = { ...v.file, ...patch.file };
        s.put(v);
      };
      return g;
    }).catch(() => {
      storageWedged = true;
    });
  }
  async function markRead(peer) {
    if (storageWedged) {
      for (const m of memMsgs)
        if (m.peer === peer && m.dir === "in")
          m.read = true;
      return;
    }
    const db = await openDB().catch(() => null);
    if (!db) {
      storageWedged = true;
      return;
    }
    await tx(db, MESSAGES, "readwrite", (s) => {
      const req = s.index("peer_ts").openCursor(
        IDBKeyRange.bound([peer, 0], [peer, Number.MAX_SAFE_INTEGER])
      );
      req.onsuccess = () => {
        const cur = req.result;
        if (!cur)
          return;
        const v = cur.value;
        if (v.dir === "in" && !v.read) {
          v.read = true;
          cur.update(v);
        }
        cur.continue();
      };
      return req;
    });
  }
  async function requestPersistence() {
    if (!navigator.storage?.persist)
      return { supported: false, persisted: false };
    const already = await navigator.storage.persisted();
    const persisted = already || await navigator.storage.persist();
    let quota = null;
    try {
      quota = await navigator.storage.estimate();
    } catch {
    }
    return { supported: true, persisted, quota };
  }

  // src/tab-lock.js
  init_buffer_global();
  init_process_global();
  var LOCK = "beagle-peer";
  var CHANNEL = "beagle-web";
  var HANDOVER_TIMEOUT_MS = 3e3;
  var FLASH_MS = 700;
  var FLASH_TIMES = 10;
  var flashing = null;
  function flashTab() {
    const icon = document.querySelector('link[rel~="icon"]');
    if (flashing) {
      clearInterval(flashing.timer);
      flashing.restore();
    }
    const wasTitle = document.title;
    const wasIcon = icon ? icon.getAttribute("href") : null;
    const dot = "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#7c5cff"/></svg>'
    );
    const restore = () => {
      document.title = wasTitle;
      if (icon && wasIcon != null)
        icon.setAttribute("href", wasIcon);
      flashing = null;
    };
    let n = 0;
    const tick = () => {
      const on = n % 2 === 0;
      document.title = on ? "\u{1F44B} Beagle is here" : wasTitle;
      if (icon)
        icon.setAttribute("href", on ? dot : wasIcon ?? "");
      if (++n >= FLASH_TIMES) {
        clearInterval(flashing.timer);
        restore();
      }
    };
    flashing = { timer: setInterval(tick, FLASH_MS), restore };
    tick();
  }
  function createTabLock({ onAcquired, onLost } = {}) {
    if (!navigator.locks) {
      const reason = "navigator.locks unavailable (needs a secure context) \u2014 single-tab ownership is not enforced here";
      return {
        supported: false,
        held: true,
        unenforced: true,
        async acquire() {
          onAcquired?.();
          return { held: true, unenforced: true, reason };
        },
        async takeover() {
          onAcquired?.();
          return { held: true, unenforced: true, reason, via: "unenforced" };
        },
        async locate() {
          return { asked: false, acknowledged: false, reason };
        },
        waitForLock() {
        },
        release() {
        }
      };
    }
    const bc = new BroadcastChannel(CHANNEL);
    let releaseLock = null;
    let held = false;
    bc.onmessage = (ev) => {
      if (ev.data?.type === "request-release" && held) {
        release2("handover");
        bc.postMessage({ type: "released" });
      }
      if (ev.data?.type === "focus-request" && held) {
        try {
          window.focus();
        } catch {
        }
        flashTab();
        bc.postMessage({ type: "focused" });
      }
    };
    function hold(lock, resolve2) {
      if (!lock) {
        resolve2({ held: false, reason: "held by another tab" });
        return;
      }
      held = true;
      onAcquired?.();
      resolve2({ held: true });
      return new Promise((done) => {
        releaseLock = done;
      });
    }
    function release2(reason = "released") {
      if (!held)
        return;
      held = false;
      releaseLock?.();
      releaseLock = null;
      onLost?.(reason);
    }
    async function acquire({ steal = false } = {}) {
      return new Promise((resolve2) => {
        const opts = steal ? { steal: true } : { ifAvailable: true };
        navigator.locks.request(LOCK, opts, (lock) => hold(lock, resolve2)).catch((err) => {
          if (err?.name === "AbortError") {
            release2("stolen");
            return;
          }
          resolve2({ held: false, reason: String(err?.message || err) });
        });
      });
    }
    async function takeover() {
      const releasedCleanly = new Promise((resolve2) => {
        const onMsg = (ev) => {
          if (ev.data?.type === "released") {
            bc.removeEventListener("message", onMsg);
            resolve2(true);
          }
        };
        bc.addEventListener("message", onMsg);
        setTimeout(() => {
          bc.removeEventListener("message", onMsg);
          resolve2(false);
        }, HANDOVER_TIMEOUT_MS);
      });
      bc.postMessage({ type: "request-release" });
      const clean2 = await releasedCleanly;
      const result = await acquire({ steal: !clean2 });
      return { ...result, via: clean2 ? "handover" : "steal" };
    }
    async function locate() {
      const answered = new Promise((resolve2) => {
        const onMsg = (ev) => {
          if (ev.data?.type === "focused") {
            bc.removeEventListener("message", onMsg);
            resolve2(true);
          }
        };
        bc.addEventListener("message", onMsg);
        setTimeout(() => {
          bc.removeEventListener("message", onMsg);
          resolve2(false);
        }, 1200);
      });
      bc.postMessage({ type: "focus-request" });
      return { asked: true, acknowledged: await answered };
    }
    function waitForLock() {
      navigator.locks.request(LOCK, (lock) => new Promise((done) => {
        if (!lock) {
          done();
          return;
        }
        held = true;
        releaseLock = done;
        onAcquired?.();
      })).catch((err) => {
        if (err?.name === "AbortError") {
          release2("stolen");
          waitForLock();
        }
      });
    }
    return {
      supported: true,
      get held() {
        return held;
      },
      acquire,
      waitForLock,
      takeover,
      locate,
      release: release2
    };
  }

  // src/backend-c.js
  init_buffer_global();
  init_process_global();
  init_peer();
  init_address();
  init_sign();
  init_bytes();

  // src/express-client.js
  init_buffer_global();
  init_process_global();
  init_express();
  function normalizeExpressNodes(entries) {
    return (entries || []).map((e) => ({
      host: e.ipv4 ?? e.host,
      port: Number(e.port),
      pk: e.publicKey ?? e.pk,
      // Defaults to HTTPS in the SDK; a browser has no other option anyway.
      tls: e.tls !== false
    }));
  }
  async function fetchExpressNodes(configUrl = "https://beagle.chat/assets/bgservers.json") {
    const res = await fetch(configUrl, { cache: "no-store" });
    if (!res.ok)
      throw new Error(`bgservers.json: HTTP ${res.status}`);
    const cfg = await res.json();
    return normalizeExpressNodes(cfg.expressNodes);
  }

  // src/backend-c.js
  var PENDING_KEY = "pending-requests";
  var PROFILE_KEY = "profile";
  var AUTOACCEPT_KEY = "autoaccept";
  var ALIAS_KEY = "friend-aliases";
  var CONFIRMED_KEY = "confirmed-friends";
  var VFS_KEY = "peer-vfs";
  var KEY_FILE = "/browser/keypair.json";
  var CONFIG_URL = "https://beagle.chat/assets/bgservers.json";
  async function loadBootstrapNodes() {
    const cfg = await (await fetch(CONFIG_URL, { cache: "no-store" })).json();
    return (cfg.bootstrapNodes ?? []).map((n) => ({
      host: n.ipv4,
      port: Number(n.port),
      pk: n.publicKey
    }));
  }
  async function seedVfs() {
    const snapshot = await kvGetSafe(VFS_KEY, null) || {};
    const vfs2 = globalThis.__beagleVfs ?? (globalThis.__beagleVfs = /* @__PURE__ */ new Map());
    for (const [path, content] of Object.entries(snapshot))
      vfs2.set(path, content);
    return vfs2;
  }
  function installVfsPersistence() {
    const vfs2 = globalThis.__beagleVfs ?? (globalThis.__beagleVfs = /* @__PURE__ */ new Map());
    let timer = null;
    globalThis.__beagleVfsDirty = () => {
      if (timer)
        return;
      timer = setTimeout(async () => {
        timer = null;
        const obj = {};
        for (const [k, v] of vfs2)
          if (!k.includes(".tmp."))
            obj[k] = v;
        try {
          await kvPut(VFS_KEY, obj);
        } catch {
        }
      }, 400);
    };
  }
  async function createBackendC({ keyPair, onEvent, profile: sharedProfile, ephemeral }) {
    const self2 = { ...describeIdentity(keyPair), ephemeral: !!ephemeral };
    const profile = sharedProfile || await kvGetSafe(PROFILE_KEY, null) || { name: "", description: "" };
    let autoAccept = await kvGetSafe(AUTOACCEPT_KEY, false) ?? false;
    let pending = await kvGetSafe(PENDING_KEY, null) || [];
    const aliases = await kvGetSafe(ALIAS_KEY, null) || {};
    const savePending = () => kvPut(PENDING_KEY, pending);
    const saveAliases = () => kvPut(ALIAS_KEY, aliases);
    async function recordMessage(peer2, dir, text, via, file, status) {
      const msg = { peer: peer2, dir, text, via, ts: Date.now(), read: dir === "out" };
      if (status)
        msg.status = status;
      if (file)
        msg.file = file;
      const id = await appendMessage(msg);
      msg.id = id;
      onEvent?.({ type: "message", msg });
      return msg;
    }
    await seedVfs();
    installVfsPersistence();
    let bootstrapNodes = [];
    try {
      bootstrapNodes = await loadBootstrapNodes();
    } catch (err) {
      onEvent?.({ type: "config-error", error: String(err?.message || err) });
    }
    let expressNodes = [];
    try {
      expressNodes = await fetchExpressNodes();
    } catch (err) {
      onEvent?.({ type: "config-error", error: "expressNodes: " + String(err?.message || err) });
    }
    const peer = await Peer.create({
      keyFile: KEY_FILE,
      keyPair,
      bootstrapNodes,
      expressNodes,
      tcpOnlyBootstrap: true,
      nickname: profile.name || void 0,
      statusMessage: profile.description || void 0,
      // Advertised at startup, not only when the profile is edited — otherwise
      // a returning user's friends never see the avatar they picked last time.
      punkId: profile.punkId ?? void 0,
      platform: "js",
      appVersion: "beagle-web",
      debugLabel: "browser",
      // ?peerdebug=1 turns on the SDK's own logging. It is gated on env vars
      // otherwise, which a browser does not have — so until now the peer was
      // unobservable here and every fault had to be inferred from counters.
      debug: (() => {
        try {
          return new URLSearchParams(location.search).get("peerdebug") === "1";
        } catch {
          return false;
        }
      })()
    });
    peer.onFriendRequest((req) => {
      void (async () => {
        const userid = req.userid || req.pubkey;
        if (autoAccept) {
          try {
            await peer.acceptFriendRequest(userid);
          } catch {
          }
          onEvent?.({ type: "friend-added", userid });
          return;
        }
        if (!pending.some((p) => p.userid === userid)) {
          pending.push({
            userid,
            name: req.name || "",
            descr: req.description || "",
            hello: req.hello || "",
            ts: Date.now()
          });
          await savePending();
          onEvent?.({ type: "friend-request", req: { userid, name: req.name, descr: req.description, hello: req.hello } });
        }
      })();
    });
    peer.onText((msg) => {
      confirm(msg.pubkey);
      void recordMessage(msg.pubkey, "in", msg.text, "online");
      void scheduleFlush(msg.pubkey);
    });
    const sendChains = /* @__PURE__ */ new Map();
    const scheduleFlush = (uid) => {
      const prev = sendChains.get(uid) ?? Promise.resolve();
      const job = prev.then(() => flushOutbox(uid).catch(() => {
      }));
      sendChains.set(uid, job.catch(() => {
      }));
      return job;
    };
    const flushOutbox = async (uid, skipId) => {
      for (const m of await queuedOutgoing(uid)) {
        if (skipId != null && m.id === skipId)
          continue;
        try {
          await peer.sendText(uid, m.text);
          confirm(uid);
          await updateMessage(m.id, { status: "sent" });
          onEvent?.({ type: "message-sent", userid: uid, id: m.id });
        } catch (err) {
          await updateMessage(m.id, { status: "queued" });
          return false;
        }
      }
      return true;
    };
    peer.onFriendConnection((ev) => {
      onEvent?.({ type: "friend-connection", userid: ev.pubkey, status: ev.status });
      if (ev.status === "connected")
        void scheduleFlush(ev.pubkey);
    });
    peer.onFriendInfo((ev) => {
      confirm(ev.pubkey);
      onEvent?.({ type: "friend-info", userid: ev.pubkey, name: ev.name, punkId: ev.punkId ?? null });
    });
    const fileBytes = /* @__PURE__ */ new Map();
    const takenNames = /* @__PURE__ */ new Set();
    try {
      for (const n of await usedFileNames())
        takenNames.add(n);
    } catch {
    }
    const sendingMsgByFileId = /* @__PURE__ */ new Map();
    const loadFile = async (name) => fileBytes.get(name) ?? await kvGet(`file:${name}`) ?? null;
    const uniqueName = (name) => {
      if (!takenNames.has(name)) {
        takenNames.add(name);
        return name;
      }
      const dot = name.lastIndexOf(".");
      const base = dot > 0 ? name.slice(0, dot) : name;
      const ext = dot > 0 ? name.slice(dot) : "";
      for (let i = 1; ; i++) {
        const cand = `${base} (${i})${ext}`;
        if (!takenNames.has(cand)) {
          takenNames.add(cand);
          return cand;
        }
      }
    };
    const stashFile = async (name, data) => {
      fileBytes.set(name, data);
      try {
        await kvPut(`file:${name}`, data);
      } catch (err) {
        onEvent?.({ type: "file-persist-skip", name, error: String(err?.message || err) });
      }
    };
    peer.onFile((offer) => {
      onEvent?.({
        type: "file-offer",
        userid: offer.friendId,
        name: offer.name,
        size: offer.size
      });
      try {
        peer.acceptFile(offer.friendId, offer.fileNumber);
        onEvent?.({ type: "file-accepted", userid: offer.friendId, name: offer.name });
      } catch (err) {
        onEvent?.({
          type: "file-accept-failed",
          userid: offer.friendId,
          name: offer.name,
          error: String(err?.message || err)
        });
      }
    });
    peer.onFileProgress((p) => {
      if (!p.sending) {
        onEvent?.({ type: "file-receiving", userid: p.friendId, received: p.received, total: p.total });
        return;
      }
      const id = sendingMsgByFileId.get(p.fileId);
      if (id != null)
        void updateMessage(id, { file: { sent: p.received, status: "sending" } });
    });
    peer.onFileCancel?.((p) => {
      onEvent?.({ type: "file-cancelled", userid: p.friendId, sending: !!p.sending });
    });
    peer.onFileComplete((p) => {
      confirm(p.friendId);
      if (p.sending) {
        const id = sendingMsgByFileId.get(p.fileId);
        if (id != null) {
          void updateMessage(id, { file: { status: "sent", sent: p.size } });
          sendingMsgByFileId.delete(p.fileId);
        }
        onEvent?.({ type: "file-sent", userid: p.friendId, name: p.name });
        return;
      }
      const rname = uniqueName(p.name);
      void (async () => {
        if (p.data)
          await stashFile(rname, p.data);
        else
          onEvent?.({ type: "file-complete-no-data", userid: p.friendId, name: p.name, size: p.size });
        await recordMessage(p.friendId, "in", "", "online", { name: rname, size: p.size, status: "received" });
        onEvent?.({ type: "file-received", userid: p.friendId, name: rname, size: p.size });
      })();
    });
    const dec2 = new TextDecoder();
    const callSignals = [];
    let callSeq = 0;
    const CHUNK_TTL_MS = 6e4;
    const chunkBuf = /* @__PURE__ */ new Map();
    const chunkSignal = (payload, cap) => {
      const enc2 = new TextEncoder();
      const id = Math.random().toString(36).slice(2, 10);
      const envelope = (i, n, d) => JSON.stringify({ _bc: 1, id, i, n, d });
      let slice = cap - 200;
      while (slice > 64 && enc2.encode(envelope(0, 9, payload.slice(0, slice))).length > cap) {
        slice = Math.floor(slice * 0.8);
      }
      const parts = [];
      for (let o = 0; o < payload.length; o += slice)
        parts.push(payload.slice(o, o + slice));
      return parts.map((d, i) => envelope(i, parts.length, d));
    };
    const onInvite = (evt) => {
      if (evt.ext && evt.ext !== "carrier")
        return;
      let data;
      try {
        data = dec2.decode(evt.data);
      } catch {
        return;
      }
      if (data.startsWith('{"_bc"')) {
        let c;
        try {
          c = JSON.parse(data);
        } catch {
          return;
        }
        if (!c || c._bc !== 1 || typeof c.id !== "string" || typeof c.d !== "string")
          return;
        const now = Date.now();
        for (const [k, v] of chunkBuf)
          if (now - v.at > CHUNK_TTL_MS)
            chunkBuf.delete(k);
        if (chunkBuf.size > 32)
          return;
        let e = chunkBuf.get(c.id);
        if (!e) {
          e = { n: c.n, parts: new Array(c.n), at: now };
          chunkBuf.set(c.id, e);
        }
        if (c.i < 0 || c.i >= e.n)
          return;
        e.parts[c.i] = c.d;
        if (e.parts.some((p) => p === void 0)) {
          onEvent?.({ type: "call-signal-chunk", userid: evt.pubkey, have: e.parts.filter((p) => p !== void 0).length, of: e.n });
          return;
        }
        chunkBuf.delete(c.id);
        data = e.parts.join("");
        onEvent?.({ type: "call-signal-reassembled", userid: evt.pubkey, parts: e.n, bytes: data.length });
      }
      callSignals.push({ seq: ++callSeq, pubkey: evt.pubkey, userid: evt.pubkey, data });
      if (callSignals.length > 256)
        callSignals.splice(0, callSignals.length - 256);
      onEvent?.({ type: "call-signal", userid: evt.pubkey });
    };
    peer.onInvite(onInvite);
    peer.onInviteResponse(onInvite);
    await peer.start();
    let joined = false;
    void peer.joinNetwork().then(() => {
      joined = true;
      onEvent?.({ type: "joined" });
    }).catch((err) => onEvent?.({ type: "join-error", error: String(err?.message || err) }));
    const dht = () => {
      try {
        return peer.dhtHealth();
      } catch {
        return {};
      }
    };
    const outgoing = /* @__PURE__ */ new Map();
    const confirmed = new Set(await kvGetSafe(CONFIRMED_KEY, null) || []);
    const confirm = (uid) => {
      if (!uid || confirmed.has(uid))
        return;
      confirmed.add(uid);
      outgoing.delete(uid);
      void kvPut(CONFIRMED_KEY, [...confirmed]).catch(() => {
      });
      onEvent?.({ type: "friend-confirmed", userid: uid });
    };
    const isOnline = (uid) => {
      try {
        const st = peer.sessionStatus(uid);
        return !!(st && st.established && (st.udpRemote || st.hasTcpRoute));
      } catch {
        return false;
      }
    };
    const SWEEP_MS = 8e3;
    let sweeping = false;
    const sweepTimer = setInterval(() => {
      if (sweeping)
        return;
      sweeping = true;
      void (async () => {
        try {
          const waiting = await queuedPeers();
          if (!waiting.length)
            return;
          const reachable = waiting.filter((uid) => isOnline(uid));
          onEvent?.({ type: "outbox-sweep", waiting: waiting.length, reachable: reachable.length });
          for (const uid of reachable)
            await scheduleFlush(uid);
        } finally {
          sweeping = false;
        }
      })();
    }, SWEEP_MS);
    const friendView = (f, stats) => {
      const uid = f.userid || f.pubkey;
      const s = stats?.get(uid);
      const pending2 = f.status === "requested" && !f.acceptedAt || outgoing.has(uid) && !confirmed.has(uid);
      return {
        userid: uid,
        address: f.address,
        name: aliases[uid] || f.name || "",
        alias: aliases[uid] || "",
        status: pending2 ? "requested" : isOnline(uid) ? "online" : "offline",
        // Advertised client metadata (userinfo extension). The UI uses this to
        // decide whether a peer can take a WebRTC DataChannel file — a phone
        // cannot, and treats the offer as an incoming CALL.
        platform: f.platform || "",
        appVersion: f.appVersion || "",
        // The avatar they advertised over Carrier, in the userinfo `gender`
        // field. Peer-to-peer, so it works for a friend who never registered a
        // beagles.eth name — which until now meant an identicon and nothing else.
        punkId: f.punkId ?? null,
        unread: s?.unread ?? 0,
        lastMessage: s?.lastMessage ?? null
      };
    };
    const friendList = async () => {
      const stats = await messageStats();
      const known = peer.friends().filter((f) => f.status !== "removed");
      const list = known.map((f) => friendView(f, stats));
      const seen = new Set(list.map((f) => f.userid));
      for (const [uid, o] of outgoing) {
        if (seen.has(uid))
          continue;
        list.push(friendView(
          { userid: uid, address: o.address, status: "requested", requestedAt: o.requestedAt },
          stats
        ));
      }
      return list;
    };
    async function call2(req) {
      const ok = (data) => ({ ok: true, data });
      const fail = (error) => ({ ok: false, error });
      switch (req.op) {
        case "ping":
          return ok({ pong: true });
        case "session-status":
          try {
            return ok(peer.sessionStatus(req.userid));
          } catch (e) {
            return fail(String(e));
          }
        case "diag":
          return ok({
            identity: { userid: self2.userid, address: self2.address },
            backend: "browser",
            transport: "tcp-relay",
            online: joined,
            dht: dht(),
            friends: await friendList(),
            // What the peer will actually put in a friend-request packet and push
            // to friends on connect. Reported separately from the stored profile
            // so a setUserInfo that silently failed is visible, not assumed.
            advertised: (() => {
              try {
                return peer.userInfo();
              } catch {
                return null;
              }
            })(),
            ephemeral: !!self2.ephemeral
          });
        case "launch-token": {
          const target = String(req.origin ?? "");
          let ok2;
          try {
            const u = new URL(target);
            ok2 = (u.protocol === "http:" || u.protocol === "https:") && u.origin === target;
          } catch {
            ok2 = false;
          }
          if (!ok2)
            return fail("launch-token requires a valid origin");
          const ts = Date.now();
          return ok({
            v: 1,
            userid: self2.userid,
            address: self2.address,
            name: profile.name || "",
            punkId: profile.punkId ?? null,
            ts,
            sig: bytesToHex2(signLaunch(keyPair, target, ts))
          });
        }
        case "sign": {
          if (typeof req.text !== "string")
            return fail("sign requires text");
          const sig = signDetached(keyPair.secretKey, new TextEncoder().encode(req.text));
          return ok({ userid: self2.userid, sig: btoa(String.fromCharCode(...sig)) });
        }
        case "set-profile":
          profile.name = req.name ?? profile.name;
          profile.description = req.description ?? profile.description;
          if (req.punkId !== void 0)
            profile.punkId = req.punkId === null ? null : Number(req.punkId);
          if (req.avatarDataUrl !== void 0)
            profile.avatarDataUrl = req.avatarDataUrl || null;
          if (req.onboarded !== void 0)
            profile.onboarded = !!req.onboarded;
          await kvPut(PROFILE_KEY, profile);
          try {
            peer.setUserInfo({ name: profile.name, description: profile.description, punkId: profile.punkId ?? null });
          } catch {
          }
          return ok(profile);
        case "friend-request": {
          if (!req.address)
            return fail("friend-request requires an address");
          let userid;
          try {
            userid = carrierIdFromAddress(req.address);
          } catch {
            return fail("that does not look like a Carrier address");
          }
          outgoing.set(userid, { address: req.address, requestedAt: Date.now() });
          void peer.sendFriendRequest(req.address, req.hello ?? "hi").then(() => onEvent?.({ type: "friend-request-sent", userid })).catch((err) => onEvent?.({
            type: "friend-request-failed",
            userid,
            error: String(err?.message || err)
          }));
          return ok({ userid, via: "onion", queued: true });
        }
        case "friends-pending":
          return ok({ pending });
        case "friends-accept": {
          const idx = pending.findIndex((p) => p.userid === req.userid);
          if (idx < 0)
            return fail("no such pending request");
          const [entry] = pending.splice(idx, 1);
          try {
            await peer.acceptFriendRequest(req.userid);
          } catch (err) {
            pending.splice(idx, 0, entry);
            return fail(String(err?.message || err));
          }
          void savePending();
          onEvent?.({ type: "friend-accepted", userid: req.userid });
          return ok({ userid: req.userid });
        }
        case "friends-reject": {
          pending = pending.filter((p) => p.userid !== req.userid);
          try {
            peer.rejectFriendRequest(req.userid);
          } catch {
          }
          void savePending();
          return ok({ userid: req.userid });
        }
        case "friends-autoaccept":
          autoAccept = !!req.enabled;
          await kvPut(AUTOACCEPT_KEY, autoAccept);
          return ok({ enabled: autoAccept });
        case "friends-list":
          return ok({ friends: await friendList() });
        case "friend-remove": {
          try {
            peer.removeFriend(req.userid);
          } catch {
          }
          return ok({ removed: req.userid });
        }
        case "friend-set-alias": {
          aliases[req.userid] = req.alias;
          void saveAliases();
          const f = peer.friends().find((x) => (x.userid || x.pubkey) === req.userid);
          return ok(f ? friendView(f) : { userid: req.userid, alias: req.alias });
        }
        case "chat-send": {
          if (!req.userid || typeof req.text !== "string")
            return fail("chat-send requires userid and text");
          const msg = await recordMessage(req.userid, "out", req.text, "online", null, "sending");
          const prev = sendChains.get(req.userid) ?? Promise.resolve();
          const job = prev.then(async () => {
            const drained = await flushOutbox(req.userid, msg.id).catch(() => false);
            if (!drained) {
              await updateMessage(msg.id, { status: "queued" });
              onEvent?.({ type: "message-queued", userid: req.userid });
              return;
            }
            try {
              await peer.sendText(req.userid, req.text);
              confirm(req.userid);
              await updateMessage(msg.id, { status: "sent" });
            } catch (err) {
              await updateMessage(msg.id, { status: "queued", error: String(err?.message || err) });
              onEvent?.({ type: "message-queued", userid: req.userid, error: String(err?.message || err) });
            }
          });
          sendChains.set(req.userid, job.catch(() => {
          }));
          return ok({ via: "online", ts: msg.ts, id: msg.id, status: "sending" });
        }
        case "chat-retry": {
          if (req.id == null || !req.userid || typeof req.text !== "string")
            return fail("chat-retry requires id, userid and text");
          await updateMessage(req.id, { status: "sending", error: null });
          void peer.sendText(req.userid, req.text).then(() => updateMessage(req.id, { status: "sent" })).catch((err) => updateMessage(req.id, { status: "queued", error: String(err?.message || err) }));
          return ok({ id: req.id, status: "sending" });
        }
        case "chat-history":
          return ok({ messages: await historyFor(req.userid, req.limit ?? 200) });
        case "chat-log-local":
          return ok(await recordMessage(req.userid, req.dir === "out" ? "out" : "in", req.text ?? "", "local"));
        case "chat-mark-read":
          if (req.userid)
            await markRead(req.userid);
          return ok({ userid: req.userid });
        case "file-send": {
          if (!req.userid || !req.data)
            return fail("file-send requires userid and data");
          const wire = req.name || "file";
          const name = uniqueName(wire);
          try {
            const fileId = peer.sendFile(req.userid, req.data, { name: wire });
            if (!fileId)
              return fail("no live session \u2014 file not sent (peer offline?)");
            void stashFile(name, req.data);
            const m = await recordMessage(req.userid, "out", "", "online", { name, size: req.data.length, status: "sending", sent: 0 });
            sendingMsgByFileId.set(fileId, m.id);
            return ok({ fileId, name });
          } catch (err) {
            return fail(String(err?.message || err));
          }
        }
        case "webrtc-file-save": {
          if (!req.data)
            return fail("webrtc-file-save requires data");
          const wname = uniqueName(req.name || "file");
          void stashFile(wname, req.data);
          const outgoing2 = req.dir === "out";
          if (req.userid) {
            await recordMessage(
              req.userid,
              outgoing2 ? "out" : "in",
              "",
              "online",
              { name: wname, size: req.data.length, status: outgoing2 ? "sent" : "received" }
            );
          }
          return ok({ name: wname, size: req.data.length });
        }
        case "file-get": {
          const bytes = await loadFile(req.name);
          if (!bytes)
            return fail("file not found");
          return ok({ bytes });
        }
        case "call-signal": {
          if (!req.userid || req.data == null)
            return fail("call-signal requires userid and data");
          const CAP = 8192;
          const enc2 = new TextEncoder();
          let payload = req.data;
          const sizeOf = (d) => typeof d === "string" ? enc2.encode(d).length : d.byteLength ?? d.length ?? 0;
          if (typeof payload === "string" && sizeOf(payload) > CAP) {
            try {
              const sig = JSON.parse(payload);
              if (typeof sig.sdp === "string") {
                sig.sdp = sig.sdp.split(/\r?\n/).filter((l) => !/^a=(candidate:|end-of-candidates)/i.test(l)).join("\r\n");
                const trimmed = JSON.stringify(sig);
                if (sizeOf(trimmed) <= CAP) {
                  onEvent?.({ type: "call-sdp-trimmed", from: sizeOf(payload), to: sizeOf(trimmed) });
                  payload = trimmed;
                }
              }
            } catch {
            }
          }
          if (sizeOf(payload) > CAP && typeof payload === "string") {
            const parts = chunkSignal(payload, CAP);
            onEvent?.({ type: "call-signal-chunking", bytes: sizeOf(payload), parts: parts.length });
            try {
              for (const part of parts) {
                await peer.sendInvite(req.userid, part, { ext: "carrier", establishTimeoutMs: 8e3 });
              }
              return ok({ sent: true, chunks: parts.length });
            } catch (err) {
              return fail(String(err?.message || err));
            }
          }
          if (sizeOf(payload) > CAP) {
            return fail(`call signal is ${sizeOf(payload)} bytes, over the ${CAP}-byte Carrier invite cap`);
          }
          try {
            await peer.sendInvite(req.userid, payload, { ext: "carrier", establishTimeoutMs: 8e3 });
            return ok({ sent: true });
          } catch (err) {
            return fail(String(err?.message || err));
          }
        }
        case "call-poll": {
          const since = Number(req.since) || 0;
          const signals = callSignals.filter((s) => s.seq > since);
          const cursor = signals.length ? signals[signals.length - 1].seq : since;
          return ok({ signals: signals.map((s) => ({ userid: s.userid, pubkey: s.pubkey, data: s.data })), cursor });
        }
        case "file-delete":
        case "file-cancel":
        case "file-retry":
        case "file-log-local":
          return fail(`${req.op} needs the WebRTC layer (next milestone)`);
        default:
          return fail(`unknown op: ${req.op}`);
      }
    }
    return {
      kind: "browser",
      hasVirtualLan: false,
      identity: self2,
      expressNodes: bootstrapNodes,
      call: call2,
      // The live profile. The router needs the CURRENT object, not a snapshot
      // taken at boot — set-profile mutates this one, so a copy handed out at
      // startup would make an edited name silently revert on the next poll.
      profile: () => profile,
      async stop() {
        clearInterval(sweepTimer);
        try {
          await peer.stop();
        } catch {
        }
      }
    };
  }

  // src/api-router.js
  init_buffer_global();
  init_process_global();

  // src/punks.js
  init_buffer_global();
  init_process_global();
  var ZERO = "0".repeat(32);
  var CONFIG_URL2 = "https://beagle.chat/assets/bgservers.json";
  var API_TIMEOUT_MS = 4e3;
  var apiPromise = null;
  function apiBase() {
    if (!apiPromise) {
      apiPromise = fetch(CONFIG_URL2, { cache: "no-store" }).then((r) => r.ok ? r.json() : null).then((cfg) => {
        const u = cfg?.punksApi?.[0]?.url;
        return typeof u === "string" && u ? u.replace(/\/+$/, "") : null;
      }).catch(() => null);
    }
    return apiPromise;
  }
  async function apiGet(path) {
    const base = await apiBase();
    if (!base)
      return null;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), API_TIMEOUT_MS);
    try {
      const r = await fetch(base + path, { signal: ctl.signal });
      return r.ok ? await r.json() : null;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  }
  var mainPromise = null;
  var rarePromise = null;
  var main = null;
  var rare = null;
  function loadMain() {
    if (!mainPromise) {
      mainPromise = fetch("punks.json", { cache: "force-cache" }).then((r) => r.ok ? r.json() : Promise.reject(new Error(`punks.json HTTP ${r.status}`))).then((d) => {
        main = d;
        return d;
      }).catch((err) => {
        mainPromise = null;
        throw err;
      });
    }
    return mainPromise;
  }
  function loadRare() {
    if (!rarePromise) {
      rarePromise = fetch("punks-rare.json", { cache: "force-cache" }).then((r) => r.ok ? r.json() : Promise.reject(new Error(`punks-rare.json HTTP ${r.status}`))).then((d) => {
        rare = d;
        return d;
      }).catch((err) => {
        rarePromise = null;
        throw err;
      });
    }
    return rarePromise;
  }
  function hashAt(id) {
    if (!main || id < 0 || id >= 1e4)
      return null;
    const h = main.h.slice(id * 32, id * 32 + 32);
    return h === ZERO ? null : h;
  }
  function punkTypeOf(id) {
    if (!main)
      return "";
    const i = Number(main.t[id]);
    return main.types[i] || "";
  }
  async function punkById(id) {
    const n = Number(id);
    if (!Number.isInteger(n) || n < 0 || n > 9999)
      return null;
    const live = await apiGet(`/api/punks/${n}`);
    if (live && live.image)
      return { id: n, image: live.image, type: live.type || "" };
    await loadMain();
    const h = hashAt(n);
    if (h)
      return { id: n, image: main.prefix + h, type: punkTypeOf(n) };
    await loadRare();
    const uri = rare && rare[n];
    return uri ? { id: n, image: uri, type: punkTypeOf(n) } : null;
  }
  async function punkList({ type: type2 = "any", limit = 24 } = {}) {
    const want0 = String(type2 || "any").toLowerCase();
    const live = await apiGet(`/api/punks/filter/${encodeURIComponent(want0)}/any?limit=${limit}`);
    if (Array.isArray(live) && live.length) {
      return live.filter((p) => p && p.image).map((p) => ({ id: Number(p.id), image: p.image, type: p.type || "" }));
    }
    await loadMain();
    const want = String(type2 || "any").toLowerCase();
    const pool = [];
    for (let i = 0; i < 1e4; i++) {
      if (want !== "any" && punkTypeOf(i).toLowerCase() !== want)
        continue;
      pool.push(i);
    }
    const n = Math.min(limit, pool.length);
    for (let i = 0; i < n; i++) {
      const j = i + Math.floor(Math.random() * (pool.length - i));
      const tmp = pool[i];
      pool[i] = pool[j];
      pool[j] = tmp;
    }
    const out = [];
    for (let i = 0; i < n; i++) {
      const p = await punkById(pool[i]);
      if (p)
        out.push(p);
    }
    return out;
  }

  // src/api-router.js
  var ENS_NAMES = "https://ens-gateway.beaglechat.workers.dev/names";
  function looksLikeName(raw) {
    const s = String(raw ?? "").trim();
    return !!s && (s.includes(".") || s.includes(" ") || s.length < 40);
  }
  async function resolveBeaglesName(raw) {
    const full = raw.includes(".") ? raw : `${raw}.beagles.eth`;
    const norm = (s) => s.toLowerCase().replace(/\s+/g, "");
    let names;
    try {
      const res = await fetch(ENS_NAMES, { cache: "no-store" });
      if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
      names = await res.json();
    } catch (err) {
      throw new Error(`name directory unreachable: ${err.message}`);
    }
    const hit = Object.entries(names ?? {}).find(([k]) => norm(k) === norm(full));
    if (!hit)
      throw new Error(`'${full}' is not registered on beagles.eth`);
    const carrier = hit[1]?.texts?.carrierAddress;
    if (!carrier)
      throw new Error(`'${full}' has no carrierAddress on record`);
    return carrier;
  }
  var json = (data, status = 200) => new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" }
  });
  var _iceCache = null;
  async function iceServers() {
    if (_iceCache)
      return _iceCache;
    try {
      const cfg = await (await fetch("https://beagle.chat/assets/bgservers.json", { cache: "no-store" })).json();
      _iceCache = (cfg.iceServers ?? []).map((s) => ({
        urls: s.urls || s.url,
        ...s.username ? { username: s.username } : {},
        ...s.credential ? { credential: s.credential } : {}
      })).filter((s) => s.urls);
    } catch {
      _iceCache = [{ urls: "stun:stun.l.google.com:19302" }];
    }
    return _iceCache;
  }
  var _ensCache = null;
  var _ensAt = 0;
  var ENS_TTL_MS = 5 * 6e4;
  async function ensNames() {
    if (_ensCache && Date.now() - _ensAt < ENS_TTL_MS)
      return _ensCache;
    try {
      const res = await fetch(ENS_NAMES, { cache: "no-store" });
      if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
      const raw = await res.json();
      const byUserid = /* @__PURE__ */ new Map();
      const recByUserid = /* @__PURE__ */ new Map();
      const list = [];
      for (const [ensName, rec] of Object.entries(raw ?? {})) {
        const t = rec?.texts ?? {};
        const entry = {
          ens: ensName,
          name: t.displayName || ensName.replace(/\.beagles\.eth$/, ""),
          description: t.description || "",
          userid: t.carrierUserId || "",
          address: t.carrierAddress || "",
          punkId: rec?.nft === "CryptoPunks" ? rec?.nftid ?? null : null,
          avatarUrl: t.avatar || null
        };
        if (entry.userid) {
          byUserid.set(entry.userid, entry);
          recByUserid.set(entry.userid, { name: ensName, ...rec });
        }
        list.push(entry);
      }
      _ensCache = { byUserid, recByUserid, list };
      _ensAt = Date.now();
    } catch {
      if (!_ensCache)
        _ensCache = { byUserid: /* @__PURE__ */ new Map(), recByUserid: /* @__PURE__ */ new Map(), list: [] };
    }
    return _ensCache;
  }
  var UNSUPPORTED = /* @__PURE__ */ new Set([
    "/api/update-check",
    "/api/update-run",
    "/api/update-restart",
    "/api/file-reveal",
    "/api/lan-arm",
    "/api/lan-cancel",
    "/api/routes",
    "/api/dora",
    "/api/connect-approve",
    // Registration/write endpoints need a signed write to the gateway — not yet
    // implemented in the browser client, so they stay explicit no-ops.
    "/api/ens-register",
    "/api/ens-avatar",
    "/api/ens-avatar-upload",
    "/api/ens-bind-wallet",
    "/api/ens-social"
  ]);
  function meFrom(diag, profile, autoAccept, ens) {
    const id = diag?.identity ?? {};
    const mine = ens?.byUserid.get(id.userid);
    return {
      userId: id.userid ?? "",
      carrier: id.address ?? "",
      // Local profile name wins; otherwise fall back to the beagles.eth display
      // name so a registered user's own name/avatar shows without setting one.
      name: profile?.name || mine?.name || "",
      description: profile?.description || mine?.description || "",
      // A locally-picked punk wins over the published one, same rule as the name.
      // Until beagles.eth registration works from the browser this is what makes
      // the avatar visible at all — in this client. See onboarding.jsx.
      punkId: profile?.punkId ?? mine?.punkId ?? null,
      listed: profile?.listed !== false,
      // An uploaded picture is this client's own, so it outranks anything
      // published — same precedence as the name.
      avatarDataUrl: profile?.avatarDataUrl ?? null,
      // First-run state: the welcome flow runs until a name has been set, since
      // a nameless peer's friend request shows the other side nothing but a key.
      onboarded: !!profile?.onboarded,
      // What the running peer advertises, straight from the SDK.
      advertised: diag?.advertised ?? null,
      hasIdentity: !!id.userid,
      // Carried through from the early router: a session whose key never
      // reached storage stays flagged once the peer is up, or the warning would
      // vanish the moment the backend took over.
      ephemeral: !!diag?.ephemeral,
      avatarUrl: profile?.avatarDataUrl ?? mine?.avatarUrl ?? null,
      ens: mine?.ens ?? "",
      handle: "",
      ip: "",
      // no TUN in a browser
      online: !!diag?.online,
      backend: "browser",
      autoAccept: !!autoAccept,
      isExit: false,
      exitRegion: "",
      netKey: diag?.transport ?? "",
      wire: diag?.transport ?? "",
      beagleVer: "web",
      lanVer: "",
      peerVer: "",
      webrtcVer: "",
      channel: "web",
      beagles: [],
      verFromBackend: false
    };
  }
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
  function mimeFor(name) {
    const ext = (String(name || "").split(".").pop() || "").toLowerCase();
    return MIME[ext] || "application/octet-stream";
  }
  function shortClock(ts) {
    if (!ts)
      return "";
    const d = new Date(ts);
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }
  function peerFrom(f, ens) {
    const dir = ens?.byUserid.get(f.userid);
    const lm = f.lastMessage;
    const realName = f.name && f.name !== f.userid ? f.name : "";
    const display = f.alias || dir?.name || realName || "";
    return {
      id: f.userid,
      userId: f.userid,
      userid: f.userid,
      name: display,
      alias: display,
      address: f.address ?? dir?.address ?? "",
      description: f.description ?? dir?.description ?? "",
      online: f.status === "online",
      pending: f.status === "requested",
      ip: "",
      ens: dir?.ens ?? "",
      // Advertised client, so the UI can pick a file transport the peer supports.
      platform: f.platform ?? "",
      appVersion: f.appVersion ?? "",
      avatarUrl: dir?.avatarUrl ?? null,
      // What they advertised over Carrier wins over the directory: it is what
      // they are using on their device right now, it needs no gateway, and it
      // is the only one a friend who never registered a name will ever have.
      punkId: f.punkId ?? dir?.punkId ?? null,
      points: 0,
      agent: "",
      wire: "",
      type: "friend",
      // Sidebar activity — mirrors the daemon's friends-list shape so the list
      // reacts to send/receive: unread badge, last-message preview, timestamp.
      unread: f.unread ?? 0,
      lastMsg: lm ? (lm.dir === "out" ? "you: " : "") + (lm.text ?? "") : "",
      lastTime: shortClock(lm?.ts),
      // The raw stamp too: lastTime is formatted for display and cannot be
      // ordered, which is why the sidebar never reordered on new activity.
      lastTs: lm?.ts ?? 0
    };
  }
  function createEarlyRouter({ getIdentity, profile, persist, createIdentity: createIdentity2, storageOk }) {
    return async function route(path, init) {
      const method = (init?.method || "GET").toUpperCase();
      const url = new URL(path, location.origin);
      const p = url.pathname;
      if (UNSUPPORTED.has(p))
        return json({ ok: false, unsupported: true, error: "not available in the browser client" });
      const punkOne = /^\/api\/punk\/(\d{1,5})$/.exec(p);
      if (method === "GET" && punkOne) {
        try {
          const punk = await punkById(punkOne[1]);
          return punk ? json({ ok: true, punk }) : json({ ok: false, error: "no such punk" }, 404);
        } catch (err) {
          return json({ ok: false, error: String(err?.message || err) }, 502);
        }
      }
      switch (`${method} ${p}`) {
        case "GET /api/backend":
          return json({ ok: true, kind: "browser", hasVirtualLan: false, state: "starting", switchable: false, releaseSecondsLeft: 0, command: "" });
        case "GET /api/desktop":
        case "GET /api/state": {
          const identity = getIdentity();
          const me = meFrom({ identity: identity ?? {}, online: false, transport: "tcp-relay" }, profile, false, await ensNames());
          me.hasIdentity = !!identity;
          me.ephemeral = !!identity?.ephemeral || storageOk?.() === false;
          return p === "/api/state" ? json({ me, friends: [], pending: [] }) : json({ me, peers: [], requests: [], exits: [], activeExit: null });
        }
        case "GET /api/identity-export": {
          try {
            const blob = host.exportBlob();
            if (!blob?.secretKey)
              return json({ ok: false, error: "no identity yet" });
            return json({ ok: true, data: blob });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) });
          }
        }
        case "POST /api/identity-import": {
          try {
            const id = await host.importBlob(body?.keyfile ?? body);
            return json({ ok: true, data: { userId: id.userid, carrier: id.address } });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) });
          }
        }
        case "POST /api/create-identity": {
          try {
            const id = await createIdentity2();
            return json({ ok: true, data: { userId: id.userid, carrier: id.address, ephemeral: !!id.ephemeral } });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) }, 500);
          }
        }
        case "POST /api/chat-retry":
          return json(await call("chat-retry", { id: body.id, userid: body.userid, text: body.text }));
        case "POST /api/set-profile": {
          let body2 = {};
          if (typeof init?.body === "string") {
            try {
              body2 = JSON.parse(init.body);
            } catch {
              body2 = {};
            }
          }
          if (body2.name !== void 0)
            profile.name = body2.name;
          if (body2.description !== void 0)
            profile.description = body2.description;
          if (body2.punkId !== void 0)
            profile.punkId = body2.punkId === null ? null : Number(body2.punkId);
          if (body2.listed !== void 0)
            profile.listed = body2.listed !== false;
          if (body2.avatarDataUrl !== void 0)
            profile.avatarDataUrl = body2.avatarDataUrl || null;
          if (body2.onboarded !== void 0)
            profile.onboarded = !!body2.onboarded;
          try {
            await persist(profile);
          } catch {
          }
          return json({ ok: true, data: profile });
        }
        case "GET /api/punk-list": {
          const type2 = (url.searchParams.get("type") || "any").toLowerCase().replace(/[^a-z]/g, "") || "any";
          const limit = Math.min(60, Math.max(1, Number(url.searchParams.get("limit")) || 24));
          try {
            return json({ ok: true, list: await punkList({ type: type2, limit }) });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) }, 502);
          }
        }
        case "GET /api/chat-history":
          return json({ chats: {} });
        default:
          return json({ ok: false, booting: true, error: "peer is still starting" }, 503);
      }
    };
  }
  function createReadOnlyRouter({ getIdentity, profile, storageOk, askOwner }) {
    return async function route(path, init) {
      const method = (init?.method || "GET").toUpperCase();
      const url = new URL(path, location.origin);
      const p = url.pathname;
      if (UNSUPPORTED.has(p))
        return json({ ok: false, unsupported: true, error: "not available in the browser client" });
      const punkOne = /^\/api\/punk\/(\d{1,5})$/.exec(p);
      if (method === "GET" && punkOne) {
        try {
          const punk = await punkById(punkOne[1]);
          return punk ? json({ ok: true, punk }) : json({ ok: false, error: "no such punk" }, 404);
        } catch (err) {
          return json({ ok: false, error: String(err?.message || err) }, 502);
        }
      }
      switch (`${method} ${p}`) {
        case "GET /api/backend":
          return json({ ok: true, kind: "browser", hasVirtualLan: false, state: "readonly", switchable: false, releaseSecondsLeft: 0, command: "" });
        case "GET /api/desktop":
        case "GET /api/state": {
          const fromOwner = await askOwner?.("desktop");
          const identity = getIdentity();
          const ens = await ensNames();
          const me = fromOwner?.me ? { ...fromOwner.me } : meFrom({ identity: identity ?? {}, online: false, transport: "tcp-relay" }, profile, false, ens);
          me.hasIdentity = !!identity;
          me.ephemeral = !!identity?.ephemeral || storageOk?.() === false;
          me.readOnly = true;
          const peers = fromOwner?.peers ?? [];
          return p === "/api/state" ? json({ me, friends: peers, pending: [], readOnly: true, locked: true }) : json({ me, peers, requests: fromOwner?.requests ?? [], exits: [], activeExit: null, readOnly: true, locked: true });
        }
        case "GET /api/friends-list": {
          const fromOwner = await askOwner?.("desktop");
          if (fromOwner?.peers)
            return json({ friends: fromOwner.peers });
          const ens = await ensNames();
          const stored = (await listFriends()).filter((f) => f.status !== "removed");
          return json({ friends: stored.map((f) => peerFrom({ ...f, status: "offline" }, ens)) });
        }
        case "GET /api/chat-history": {
          const peer = url.searchParams.get("peer") || void 0;
          if (!peer)
            return json({ chats: {} });
          return json({ chats: { [peer]: await historyFor(peer, 500) } });
        }
        case "GET /api/punk-list": {
          const type2 = (url.searchParams.get("type") || "any").toLowerCase().replace(/[^a-z]/g, "") || "any";
          const limit = Math.min(60, Math.max(1, Number(url.searchParams.get("limit")) || 24));
          try {
            return json({ ok: true, list: await punkList({ type: type2, limit }) });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) }, 502);
          }
        }
        default:
          if (method === "GET")
            return json({ ok: true, readOnly: true, items: [], list: [] });
          return json({
            ok: false,
            readOnly: true,
            error: "Beagle is running in another tab \u2014 this one can read, but not send."
          }, 409);
      }
    };
  }
  function createApiRouter(backend, getProfile) {
    return async function route(path, init) {
      const method = (init?.method || "GET").toUpperCase();
      const url = new URL(path, location.origin);
      const p = url.pathname;
      if (UNSUPPORTED.has(p))
        return json({ ok: false, unsupported: true, error: "not available in the browser client" });
      const raw = init?.body;
      let body2 = {};
      if (typeof raw === "string") {
        try {
          body2 = JSON.parse(raw);
        } catch {
          body2 = {};
        }
      }
      const call2 = (op, extra = {}) => backend.call({ op, ...extra });
      const punkOne = /^\/api\/punk\/(\d{1,5})$/.exec(p);
      if (method === "GET" && punkOne) {
        try {
          const punk = await punkById(punkOne[1]);
          return punk ? json({ ok: true, punk }) : json({ ok: false, error: "no such punk" }, 404);
        } catch (err) {
          return json({ ok: false, error: String(err?.message || err) }, 502);
        }
      }
      switch (`${method} ${p}`) {
        case "GET /api/backend":
          return json({ ok: true, kind: "browser", hasVirtualLan: false, state: "browser", switchable: false, releaseSecondsLeft: 0, command: "" });
        case "GET /api/desktop":
        case "GET /api/diag":
          return json(await call2("diag"));
        case "GET /api/state": {
          const [diag, pend, flist, ens] = await Promise.all([
            call2("diag"),
            call2("friends-pending"),
            call2("friends-list"),
            ensNames()
          ]);
          const profile = getProfile();
          const me = meFrom(diag.data, profile, diag.data?.autoAccept, ens);
          const peers = (flist.data?.friends ?? []).filter((f) => f.status !== "removed").map((f) => peerFrom(f, ens));
          const requests = (pend.data?.pending ?? []).map((r, i) => {
            const dir = ens.byUserid.get(r.userid);
            const who = r.name || dir?.name || "";
            return {
              id: r.userid || r.address || `r${i}`,
              carrier: r.address || r.userid || "",
              userid: r.userid || "",
              userId: r.userid || "",
              name: who,
              descr: r.descr || "",
              ens: dir?.ens || "",
              punkId: dir?.punkId ?? null,
              avatarUrl: dir?.avatarUrl ?? null,
              hello: r.hello || "",
              via: who || (r.hello ? `"${r.hello}"` : "carrier"),
              time: shortClock(r.ts),
              ts: r.ts
            };
          });
          return p === "/api/state" ? json({ me, friends: peers, pending: requests }) : json({ me, peers, requests, exits: [], activeExit: null });
        }
        case "GET /api/friends-list": {
          const [r, ens] = await Promise.all([call2("friends-list"), ensNames()]);
          return json({ friends: (r.data?.friends ?? []).map((f) => peerFrom(f, ens)) });
        }
        case "GET /api/bridge-roster": {
          const st = globalThis.__BEAGLE_BRIDGE_STATE__;
          const base = st?.httpBase?.();
          const ticket = st?.ticket?.();
          if (!base)
            return json({ ok: false, error: "no bridge configured" });
          if (!ticket) {
            return json({ ok: true, list: [], pending: true, bridge: base });
          }
          try {
            const res = await fetch(`${base}/roster`, {
              headers: { authorization: `Bearer ${ticket}` },
              cache: "no-store"
            });
            if (!res.ok)
              return json({ ok: false, error: `bridge roster ${res.status}` });
            const d = await res.json();
            return json({
              ok: true,
              bridge: d.bridge || base,
              online: d.online || 0,
              list: (d.peers || []).map((p2) => ({ ...p2, punkId: p2.punk ?? null }))
            });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) });
          }
        }
        case "GET /api/discover-registered": {
          const ens = await ensNames();
          return json({ ok: true, list: ens.list.filter((e) => e.userid) });
        }
        case "GET /api/discover-recommended": {
          try {
            const res = await fetch("https://points.beagle.chat/leaderboard", { cache: "no-store" });
            if (res.ok) {
              const d = await res.json();
              const list = d.list || d || [];
              if (Array.isArray(list) && list.length)
                return json({ ok: true, list });
            }
          } catch {
          }
          const ens = await ensNames();
          return json({ ok: true, list: ens.list.filter((e) => e.userid) });
        }
        case "GET /api/ens-name": {
          const [ens, diag] = await Promise.all([ensNames(), call2("diag")]);
          const uid = diag.data?.identity?.userid;
          const rec = uid ? ens.recByUserid.get(uid) : null;
          return json({ ok: true, registered: !!rec, record: rec || null, mineOwned: !!rec });
        }
        case "GET /api/ens-profile": {
          const ens = await ensNames();
          const uid = url.searchParams.get("userid");
          const qname = url.searchParams.get("name");
          let rec = uid ? ens.recByUserid.get(uid) : null;
          if (!rec && qname) {
            const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, "");
            const hit = ens.list.find((e) => norm(e.name) === norm(qname));
            if (hit)
              rec = ens.recByUserid.get(hit.userid);
          }
          const t = rec?.texts ?? {};
          return json({
            ok: true,
            registered: !!rec,
            record: rec || null,
            profile: rec ? {
              avatarUrl: t.avatar || null,
              punkId: rec.nft === "CryptoPunks" ? rec.nftid ?? null : null,
              displayName: t.displayName || "",
              description: t.description || ""
            } : null
          });
        }
        case "GET /api/chat-history": {
          const peer = url.searchParams.get("peer") || void 0;
          const r = await call2("chat-history", { userid: peer });
          const messages = r.data?.messages ?? [];
          return json({ chats: peer ? { [peer]: messages } : {} });
        }
        case "POST /api/chat-send":
          return json(await call2("chat-send", { userid: body2.userid, text: body2.text }));
        case "POST /api/chat-log-local":
          return json(await call2("chat-log-local", { userid: body2.userid, dir: body2.dir, text: body2.text }));
        case "POST /api/chat-mark-read":
          return json(await call2("chat-mark-read", { userid: body2.userid }));
        case "POST /api/add": {
          let address = String(body2.address ?? "").trim();
          if (looksLikeName(address)) {
            try {
              address = await resolveBeaglesName(address);
            } catch (err) {
              return json({ ok: false, error: err.message }, 400);
            }
          }
          return json(await call2("friend-request", { address, hello: body2.hello }));
        }
        case "POST /api/launch-token": {
          const r = await call2("launch-token", { origin: body2.origin });
          return r.ok ? json({ ok: true, ...r.data ?? {} }) : json({ ok: false, error: r.error });
        }
        case "POST /api/accept":
          return json(await call2("friends-accept", { userid: body2.userid }));
        case "POST /api/reject":
          return json(await call2("friends-reject", { userid: body2.userid }));
        case "POST /api/autoaccept":
          return json(await call2("friends-autoaccept", { enabled: body2.enabled }));
        case "POST /api/friend-remove":
          return json(await call2("friend-remove", { userid: body2.userid }));
        case "POST /api/friend-alias":
          return json(await call2("friend-set-alias", { userid: body2.userid, alias: body2.alias }));
        case "GET /api/identity-export": {
          try {
            const blob = host.exportBlob();
            if (!blob?.secretKey)
              return json({ ok: false, error: "no identity yet" });
            return json({ ok: true, data: blob });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) });
          }
        }
        case "POST /api/identity-import": {
          try {
            const id = await host.importBlob(body2?.keyfile ?? body2);
            return json({ ok: true, data: { userId: id.userid, carrier: id.address } });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) });
          }
        }
        case "POST /api/create-identity": {
          const d = await call2("diag");
          return json({ ok: true, data: { userId: d.data?.identity?.userid ?? "", carrier: d.data?.identity?.address ?? "" } });
        }
        case "POST /api/set-profile":
          return json(await call2("set-profile", {
            name: body2.name,
            description: body2.description,
            punkId: body2.punkId,
            onboarded: body2.onboarded,
            avatarDataUrl: body2.avatarDataUrl
          }));
        case "POST /api/file-send": {
          const userid = url.searchParams.get("userid");
          const name = url.searchParams.get("name") || "file";
          if (!userid || !raw)
            return json({ ok: false, error: "file-send requires userid and a body" }, 400);
          const buf = raw instanceof ArrayBuffer ? raw : await new Response(raw).arrayBuffer();
          return json(await call2("file-send", { userid, name, data: new Uint8Array(buf) }));
        }
        case "POST /api/webrtc-file-save": {
          const userid = url.searchParams.get("userid");
          const name = url.searchParams.get("name") || "file";
          const dir = url.searchParams.get("dir") === "out" ? "out" : "in";
          if (!raw)
            return json({ ok: false, error: "webrtc-file-save requires a body" }, 400);
          const buf = raw instanceof ArrayBuffer ? raw : await new Response(raw).arrayBuffer();
          return json(await call2("webrtc-file-save", { userid, name, dir, data: new Uint8Array(buf) }));
        }
        case "GET /api/file-download": {
          const name = url.searchParams.get("name");
          const r = await call2("file-get", { name });
          if (!r.ok || !r.data?.bytes)
            return new Response("not found", { status: 404 });
          const dl = url.searchParams.get("dl") === "1";
          return new Response(r.data.bytes, {
            headers: {
              "content-type": mimeFor(name),
              "content-disposition": `${dl ? "attachment" : "inline"}; filename="${encodeURIComponent(name || "file")}"`
            }
          });
        }
        case "GET /api/punk-list": {
          const type2 = (url.searchParams.get("type") || "any").toLowerCase().replace(/[^a-z]/g, "") || "any";
          const limit = Math.min(60, Math.max(1, Number(url.searchParams.get("limit")) || 24));
          try {
            return json({ ok: true, list: await punkList({ type: type2, limit }) });
          } catch (err) {
            return json({ ok: false, error: String(err?.message || err) }, 502);
          }
        }
        case "GET /api/call-ice-servers":
          return json({ ok: true, iceServers: await iceServers() });
        case "GET /api/call-poll": {
          const since = url.searchParams.get("since");
          const r = await call2("call-poll", { since });
          return json(r.data ?? { signals: [], cursor: 0 });
        }
        case "POST /api/call-signal":
          return json(await call2("call-signal", { userid: body2.userid, data: body2.data }));
        default:
          return json({ ok: false, error: `no browser handler for ${method} ${p}` }, 404);
      }
    };
  }
  var RELAY_PROXY_PREFIX = "/relay";
  function rewriteRelayUrl(url, relayHosts2) {
    try {
      const u = new URL(url, location.origin);
      if (u.origin === location.origin)
        return url;
      if (!relayHosts2.has(u.hostname))
        return url;
      return `${location.origin}${RELAY_PROXY_PREFIX}${u.pathname}${u.search}`;
    } catch {
      return url;
    }
  }
  function installFetchPatch(readyPromise, relayHosts2 = /* @__PURE__ */ new Set()) {
    const nativeFetch = window.fetch.bind(window);
    window.fetch = async (input, init) => {
      let url = typeof input === "string" ? input : input?.url ?? "";
      if (relayHosts2.size) {
        const rewritten = rewriteRelayUrl(url, relayHosts2);
        if (rewritten !== url)
          return nativeFetch(rewritten, init);
      }
      if (!url.startsWith("/api/") && !url.includes(`${location.origin}/api/`)) {
        return nativeFetch(input, init);
      }
      const route = await readyPromise;
      const path = url.startsWith("/") ? url : new URL(url).pathname + new URL(url).search;
      try {
        return await route(path, init ?? (typeof input === "object" ? input : void 0));
      } catch (err) {
        return json({ ok: false, error: String(err?.message || err) }, 500);
      }
    };
  }

  // src/web-entry.js
  var IDENTITY_KEY = "identity";
  var PROFILE_KEY2 = "profile";
  var ACTION_CHANNEL = "beagle-web-actions";
  var ACTION_BOOT_WAIT_MS = 25e3;
  var resolveReady;
  var ready = new Promise((r) => {
    resolveReady = r;
  });
  var relayHosts = /* @__PURE__ */ new Set();
  installFetchPatch(ready, relayHosts);
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch((err) => console.warn("sw register failed", err));
  }
  fetchExpressNodes().then((nodes) => nodes.forEach((n) => relayHosts.add(n.host))).catch(() => {
  });
  async function loadIdentity(onStorageFail) {
    const stored = await kvGetSafe(IDENTITY_KEY, null, onStorageFail);
    if (!stored)
      return null;
    try {
      return importIdentity(stored);
    } catch (err) {
      console.warn("stored identity unreadable; a new one will be minted:", err.message);
      return null;
    }
  }
  var app = {
    events: [],
    async boot() {
      this.storageOk = true;
      const noteStorageFail = (err) => {
        if (!this.storageOk)
          return;
        this.storageOk = false;
        this.events.push({ type: "storage-unavailable", error: String(err?.message || err) });
      };
      const keyPair = await loadIdentity(noteStorageFail);
      this.keyPair = keyPair;
      this.identity = keyPair ? describeIdentity(keyPair) : null;
      this.persistence = null;
      requestPersistence().then((r) => {
        this.persistence = r;
      }).catch(() => {
      });
      this.lock = createTabLock({
        onAcquired: () => {
          if (!this.readOnly)
            return;
          this.readOnly = false;
          this.routers.early = null;
          this.lockState = { held: true, via: "queued" };
          this.bringUp?.();
        },
        onLost: (r) => {
          this.routers = { early: null, full: null };
          this.lockState = { held: false, reason: r || "taken by another tab" };
          this.onLockLost?.(r);
          this.serveReadOnly?.();
        }
      });
      this.routers = { early: null, full: null };
      resolveReady((path, init) => {
        const r = this.routers.full || this.routers.early;
        if (r)
          return r(path, init);
        const locked = this.lockState && this.lockState.held === false;
        return new Response(
          JSON.stringify(locked ? { ok: false, locked: true, error: "another tab owns this identity" } : { ok: false, starting: true, error: "still starting" }),
          { status: locked ? 409 : 503, headers: { "content-type": "application/json" } }
        );
      });
      try {
        performance.mark("beagle:api-ready");
      } catch {
      }
      this.lockState = await this.lock.acquire();
      const profile = { name: "", description: "" };
      this.profile = profile;
      const host2 = this;
      globalThis.__BEAGLE_PEER_AUTH__ = {
        get pubkey() {
          return host2.keyPair ? bytesToHex2(host2.keyPair.publicKey) : null;
        },
        // The bridge can derive a userid from the proven key, but NOT an
        // address: that carries this identity's nospam, which only we know.
        // Sent so a roster entry can actually be added as a friend.
        get address() {
          return host2.identity?.address ?? null;
        },
        get profile() {
          return {
            name: profile.name || "",
            descr: profile.description || "",
            punk: profile.punkId ?? null,
            listed: profile.listed !== false
          };
        },
        /** Detached XEdDSA over the bridge's nonce. Null when there is no
         *  identity yet, which the shim treats as "connect anonymously". */
        sign(origin, nonce) {
          if (!host2.keyPair)
            return null;
          return bytesToHex2(signBridgeProof(host2.keyPair, origin, nonce));
        }
      };
      const profileLoaded = kvGetSafe(PROFILE_KEY2, null, noteStorageFail).then((stored) => {
        if (stored)
          Object.assign(profile, stored);
      }).catch(() => {
      });
      let started = null;
      const startBackend = (kp) => {
        const pk = bytesToHex2(kp.publicKey);
        if (started && started.pk === pk)
          return started.promise;
        const promise = startBackendOnce(kp);
        started = { pk, promise };
        return promise;
      };
      const startBackendOnce = (kp) => createBackendC({
        keyPair: kp,
        ephemeral: this.storageOk === false,
        profile,
        // one shared record — see createEarlyRouter
        onEvent: (e) => {
          this.events.push(e);
          this.onEvent?.(e);
        }
      }).then((backend) => {
        this.backend = backend;
        this.routers.full = createApiRouter(backend, () => backend.profile());
        backend.call({ op: "set-profile", name: profile.name, description: profile.description }).catch(() => {
        });
        try {
          performance.mark("beagle:peer-ready");
        } catch {
        }
        this.onEvent?.({ type: "backend-ready" });
      }).catch((err) => {
        this.events.push({ type: "backend-failed", error: String(err?.message || err) });
      });
      this.mintIdentity = async () => {
        if (this.identity)
          return this.identity;
        const kp = createIdentity();
        let ephemeral = false;
        try {
          await kvPut(IDENTITY_KEY, exportIdentity(kp), { timeoutMs: BOOT_TIMEOUT_MS });
        } catch (err) {
          ephemeral = true;
          this.storageOk = false;
          this.events.push({ type: "identity-not-persisted", error: String(err?.message || err) });
        }
        this.keyPair = kp;
        this.identity = { ...describeIdentity(kp), ephemeral };
        startBackend(kp);
        return this.identity;
      };
      this.bringUp = () => {
        if (this.routers.early)
          return;
        this.routers.early = createEarlyRouter({
          getIdentity: () => this.identity,
          profile,
          persist: (p) => kvPut(PROFILE_KEY2, p, { timeoutMs: BOOT_TIMEOUT_MS }),
          createIdentity: () => this.mintIdentity(),
          storageOk: () => this.storageOk !== false
        });
        if (this.keyPair)
          profileLoaded.then(() => startBackend(this.keyPair));
        this.serveActions();
      };
      if (this.lockState.held)
        this.bringUp();
      else
        this.serveReadOnly();
      return this.status();
    },
    status() {
      return {
        identity: this.identity,
        storageOk: this.storageOk !== false,
        // Did the relay path ever actually work? `opened` counts bridge sockets,
        // `upstream` counts the ones where the TCP relay behind the bridge
        // connected. opened>0 with upstream=0 is the signature of a browser or
        // network that permits the WebSocket but kills what rides on it — onion
        // traffic still works, net_crypto sessions never form, so every message
        // queues while calls appear to ring.
        relaySockets: globalThis.__beagleWsStats ?? null,
        persistence: this.persistence,
        lock: { supported: this.lock?.supported, ...this.lockState },
        secureContext: window.isSecureContext,
        backend: this.backend ? { kind: this.backend.kind, relayNodes: this.backend.expressNodes.length } : null,
        events: this.events.slice(-5)
      };
    },
    /** Take ownership from the tab that has it, then actually come into
     *  service — re-acquiring the lock without installing the routers would
     *  leave the tab just as dead as before. */
    async takeover() {
      this.lockState = await this.lock.takeover();
      if (this.lockState.held) {
        this.routers.early = null;
        this.bringUp?.();
      }
      return this.lockState;
    },
    /** A tab that does not own the identity still shows everything.
     *
     *  It used to render a full-screen block, which was wrong twice over: the
     *  friends, the messages and the profile all live in IndexedDB and are
     *  shared by every tab of this origin, so there was nothing to hide — and a
     *  user who opened a second tab got a dead app instead of their data. Only
     *  SENDING needs the single peer. So this tab reads, and refuses to write. */
    serveReadOnly() {
      if (this.routers.early || this.routers.full)
        return;
      this.readOnly = true;
      this.routers.early = createReadOnlyRouter({
        getIdentity: () => this.identity,
        profile: this.profile,
        storageOk: () => this.storageOk !== false,
        askOwner: (what) => this.askOwner(what)
      });
      this.lock.waitForLock?.();
    },
    /** Ask the tab that owns the identity to come forward, instead of taking it.
     *  Usually the better answer: the other tab is already connected. */
    async locate() {
      return this.lock.locate ? this.lock.locate() : { asked: false, acknowledged: false };
    },
    /** Answer requests from the /connect popup.
     *
     *  Sign-in is read-only, so the popup does it alone. Sending a friend
     *  request is not: it needs a live peer, and a second peer on one identity
     *  scrambles the first one's session state. So the popup asks, and the tab
     *  that already owns the identity does the work.
     *
     *  This channel carries no authority. The popup got the user's consent on a
     *  screen naming the requesting site; anything arriving here has already
     *  been approved by a human, and everything it can ask for is something the
     *  same person could do with two clicks in the UI. */
    /** Ask the tab holding the peer for something only a live peer knows.
     *  Resolves null when nobody answers, and every caller must cope with that:
     *  the owner can be reloading, or gone. */
    askOwner(what, timeoutMs = 1200) {
      if (typeof BroadcastChannel === "undefined")
        return Promise.resolve(null);
      return new Promise((resolve2) => {
        const bc = new BroadcastChannel(ACTION_CHANNEL);
        const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const done = (v) => {
          clearTimeout(timer);
          bc.close();
          resolve2(v);
        };
        const timer = setTimeout(() => done(null), timeoutMs);
        bc.onmessage = (ev) => {
          if (ev.data?.type === "state-result" && ev.data.id === id)
            done(ev.data.data ?? null);
        };
        bc.postMessage({ type: "state-request", id, what });
      });
    },
    serveActions() {
      if (this.actions || typeof BroadcastChannel === "undefined")
        return;
      const bc = new BroadcastChannel(ACTION_CHANNEL);
      this.actions = bc;
      bc.onmessage = async (ev) => {
        const d = ev.data;
        if (d?.type === "state-request" && d.id) {
          let data = null;
          try {
            data = await fetch("/api/desktop").then((x) => x.json());
          } catch {
          }
          bc.postMessage({ type: "state-result", id: d.id, data });
          return;
        }
        if (d?.type !== "add-friend" || !d.id)
          return;
        const done = (ok, error) => bc.postMessage({ type: "add-friend-result", id: d.id, ok, error });
        const send = () => fetch("/api/add", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ address: String(d.address || ""), hello: String(d.hello || "") })
        }).then((x) => x.json());
        try {
          let r = await send();
          const deadline = Date.now() + ACTION_BOOT_WAIT_MS;
          while (r?.booting && Date.now() < deadline) {
            await new Promise((f) => setTimeout(f, 1e3));
            r = await send();
          }
          if (r?.booting) {
            done(false, "Beagle is still connecting \u2014 try again in a moment.");
            return;
          }
          done(r?.ok !== false, r?.error);
        } catch (err) {
          done(false, String(err?.message || err));
        }
      };
    },
    /**
     * Prove the browser can complete a real Tox TCP-relay handshake through the
     * bridge. This is the step that turns the tab from a send-only express
     * client into an actual Carrier peer.
     */
    async testRelay(host2 = "144.202.113.167", port = 33445) {
      const { TcpRelayClient: TcpRelayClient2 } = await Promise.resolve().then(() => (init_tcp_relay(), tcp_relay_exports));
      const { base58ToBytes: base58ToBytes2 } = await Promise.resolve().then(() => (init_base58(), base58_exports));
      const cfg = await (await fetch("https://beagle.chat/assets/bgservers.json")).json();
      const entry = (cfg.bootstrapNodes ?? []).find((n) => n.ipv4 === host2);
      if (!entry)
        return { ok: false, error: `no published pk for ${host2}` };
      const t0 = Date.now();
      let client;
      try {
        client = new TcpRelayClient2({
          host: host2,
          port,
          serverPublicKey: base58ToBytes2(entry.publicKey),
          selfKeyPair: this.keyPair,
          label: `${host2}:${port}`
        });
        await client.connect(1e4);
        const pinged = client.sendPing();
        return { ok: true, ms: Date.now() - t0, state: client.state(), pinged };
      } catch (err) {
        return { ok: false, error: String(err?.message || err), ms: Date.now() - t0 };
      } finally {
        setTimeout(() => {
          try {
            client?.close("probe done");
          } catch {
          }
        }, 500);
      }
    },
    exportBlob() {
      return exportIdentity(this.keyPair);
    },
    /** Replace this browser's identity with one from a key file.
     *
     *  Deliberately does NOT try to hot-swap the running backend: the peer, its
     *  friend list and every open relay socket are bound to the old key. It
     *  writes the new key and the caller reloads, which is the only way to get a
     *  coherent client and is cheap on a page that boots in seconds. */
    async importBlob(parsed) {
      const kp = importIdentity(parsed);
      await kvPut(IDENTITY_KEY, exportIdentity(kp), { timeoutMs: BOOT_TIMEOUT_MS });
      return describeIdentity(kp);
    },
    /**
     * The decisive experiment: can the SDK's full Peer run in a browser with no
     * UDP and no filesystem, falling through to the TCP relay for everything?
     * Tox supports TCP-only clients, so this is plausible — but Peer has no
     * tcp-only switch, so it has to be measured, not assumed.
     */
    async testPeer({ timeoutMs = 25e3 } = {}) {
      try {
        (globalThis.process ?? (globalThis.process = { env: {} })).env.DECENT_DEBUG = "1";
      } catch {
      }
      const t0 = Date.now();
      const trace = [];
      const step = (name, extra) => trace.push({ name, ms: Date.now() - t0, ...extra ?? {} });
      try {
        const { Peer: Peer2 } = await Promise.resolve().then(() => (init_peer(), peer_exports));
        step("module loaded");
        const cfg = await (await fetch("https://beagle.chat/assets/bgservers.json")).json();
        const bootstrapNodes = (cfg.bootstrapNodes ?? []).map((n) => ({
          host: n.ipv4,
          port: Number(n.port),
          pk: n.publicKey
        }));
        step("config", { nodes: bootstrapNodes.length });
        const peer = await Peer2.create({ keyFile: "/browser/keypair.json", bootstrapNodes, tcpOnlyBootstrap: true, debugLabel: "browser" });
        step("Peer.create");
        await peer.start();
        step("start", { userid: peer.userid() });
        await new Promise((r) => setTimeout(r, 4e3));
        step("relay pool warmup", { dht: JSON.stringify(peer.dhtHealth?.() ?? {}).slice(0, 160) });
        const announced = await Promise.race([
          peer.announceSelf(timeoutMs),
          new Promise((_, rej) => setTimeout(() => rej(new Error("announce timeout")), timeoutMs))
        ]);
        step("announceSelf", { nodes: Array.isArray(announced) ? announced.length : 0 });
        this.peer = peer;
        return { ok: true, trace, dht: peer.dhtHealth?.() };
      } catch (err) {
        return { ok: false, error: String(err?.message || err), trace };
      }
    }
  };
  window.BeagleWeb = app;
  window.__beagleBoot = app.boot();
})();
