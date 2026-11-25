var PeerWebRTC = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };

  // src/ui/peer-webrtc-entry.js
  var peer_webrtc_entry_exports = {};
  __export(peer_webrtc_entry_exports, {
    BeaglePushClient: () => BeaglePushClient,
    BroadcastChannelSignaling: () => BroadcastChannelSignaling,
    CARRIER_MAX_INVITE_DATA_LEN: () => CARRIER_MAX_INVITE_DATA_LEN,
    CallEngine: () => CallEngine2,
    CarrierSignaling: () => CarrierSignaling,
    Emitter: () => Emitter,
    RspTurnCredentials: () => RspTurnCredentials,
    SocketIoSignaling: () => SocketIoSignaling,
    byteLength: () => byteLength,
    decodeSignal: () => decodeSignal,
    decodeSignalBytesGuard: () => decodeSignalBytesGuard,
    encodeSignal: () => encodeSignal,
    encodeSignalBytes: () => encodeSignalBytes,
    fitSignalForInvite: () => fitSignalForInvite,
    looksLikeSignal: () => looksLikeSignal,
    mediaDirection: () => mediaDirection,
    orphanPayloadTypeLines: () => orphanPayloadTypeLines,
    sanitizeSdp: () => sanitizeSdp,
    shrinkSdpForInvite: () => shrinkSdpForInvite,
    videoIsSending: () => videoIsSending
  });

  // node_modules/@decentnetwork/peer-webrtc/dist/emitter.js
  var _handlers;
  var Emitter = class {
    constructor() {
      __privateAdd(this, _handlers, {});
    }
    on(event, handler) {
      var _a, _b;
      ((_b = (_a = __privateGet(this, _handlers))[event]) != null ? _b : _a[event] = /* @__PURE__ */ new Set()).add(handler);
      return () => this.off(event, handler);
    }
    off(event, handler) {
      var _a;
      (_a = __privateGet(this, _handlers)[event]) == null ? void 0 : _a.delete(handler);
    }
    once(event, handler) {
      const wrapped = (...args) => {
        this.off(event, wrapped);
        handler(...args);
      };
      return this.on(event, wrapped);
    }
    emit(event, ...args) {
      const set = __privateGet(this, _handlers)[event];
      if (!set)
        return;
      for (const handler of [...set]) {
        handler(...args);
      }
    }
    removeAll() {
      __privateSet(this, _handlers, {});
    }
  };
  _handlers = new WeakMap();

  // node_modules/@decentnetwork/peer-webrtc/dist/sdp.js
  var CARRIER_MAX_INVITE_DATA_LEN = 8192;
  function mediaSection(sdp, kind) {
    const norm = sdp.replace(/\r\n/g, "\n");
    const start = norm.indexOf(`m=${kind} `);
    if (start < 0)
      return void 0;
    const next = norm.indexOf("\nm=", start + 1);
    return next < 0 ? norm.slice(start) : norm.slice(start, next);
  }
  function mediaDirection(sdp, kind) {
    const block = mediaSection(sdp, kind);
    if (block === void 0)
      return void 0;
    for (const dir of ["sendrecv", "sendonly", "recvonly", "inactive"]) {
      if (block.includes(`a=${dir}`))
        return dir;
    }
    return "sendrecv";
  }
  function videoIsSending(sdp) {
    const dir = mediaDirection(sdp, "video");
    return dir === "sendrecv" || dir === "sendonly";
  }
  function byteLength(text) {
    return new TextEncoder().encode(text).length;
  }
  function videoPayloadTypes(lines) {
    const out = /* @__PURE__ */ new Map();
    for (const line of lines) {
      const m = /^a=rtpmap:(\d+)\s+([A-Za-z0-9-]+)\//.exec(line);
      if (m)
        out.set(m[1], { pt: m[1], name: m[2], fmtp: "" });
    }
    for (const line of lines) {
      const m = /^a=fmtp:(\d+)\s+(.*)$/.exec(line);
      const e = m && out.get(m[1]);
      if (e)
        e.fmtp = m[2];
    }
    return [...out.values()];
  }
  function payloadTypesToDrop(lines, drop) {
    const all = videoPayloadTypes(lines);
    const pts = new Set(all.filter((p) => p.name.toLowerCase() !== "rtx" && drop(p)).map((p) => p.pt));
    for (const p of all) {
      const apt = /(?:^|;|\s)apt=(\d+)/.exec(p.fmtp);
      if (p.name.toLowerCase() === "rtx" && apt && pts.has(apt[1]))
        pts.add(p.pt);
    }
    return pts;
  }
  function stripPayloadTypes(lines, pts) {
    if (pts.size === 0)
      return [...lines];
    const out = [];
    for (const line of lines) {
      if (line.startsWith("m=video ")) {
        const parts = line.split(" ");
        out.push([...parts.slice(0, 3), ...parts.slice(3).filter((pt) => !pts.has(pt))].join(" "));
        continue;
      }
      const m = /^a=(?:rtpmap|rtcp-fb|fmtp):(\d+)\b/.exec(line);
      if (m && pts.has(m[1]))
        continue;
      out.push(line);
    }
    return out;
  }
  function stripCandidates(lines) {
    return lines.filter((l) => !l.startsWith("a=candidate:") && !l.startsWith("a=end-of-candidates"));
  }
  var CODEC_REDUCTIONS = [
    // 1. Codecs the phones have never negotiated.
    (p) => /^(VP9|AV1|AV1X|H265|HEVC)$/i.test(p.name),
    // 2. Redundancy/FEC payloads — nice to have, not required to connect.
    (p) => /^(red|ulpfec|flexfec-03)$/i.test(p.name),
    // 3. Duplicate H264 profiles. Chrome offers six (baseline/main/high ×
    //    packetization-mode 0/1) at ~230 bytes each; the phones use constrained
    //    baseline (profile-level-id=42…) with packetization-mode=1. Keep those
    //    and VP8, drop the rest.
    (p) => /^H264$/i.test(p.name) && !(/profile-level-id=42/i.test(p.fmtp) && /packetization-mode=1/i.test(p.fmtp))
  ];
  function shrinkSdpForInvite(sdp, budget = CARRIER_MAX_INVITE_DATA_LEN, opts = {}) {
    if (byteLength(sdp) <= budget)
      return sdp;
    const crlf = sdp.includes("\r\n");
    const join = (l) => l.join(crlf ? "\r\n" : "\n");
    let lines = sdp.replace(/\r\n/g, "\n").split("\n");
    lines = stripCandidates(lines);
    if (byteLength(join(lines)) <= budget)
      return join(lines);
    if (opts.codecs !== false) {
      for (const reduction of CODEC_REDUCTIONS) {
        lines = stripPayloadTypes(lines, payloadTypesToDrop(lines, reduction));
        if (byteLength(join(lines)) <= budget)
          return join(lines);
      }
    }
    return join(lines);
  }
  function orphanPayloadTypeLines(sdp) {
    const out = [];
    let pts;
    for (const line of sdp.replace(/\r\n/g, "\n").split("\n")) {
      if (line.startsWith("m=")) {
        pts = new Set(line.split(" ").slice(3));
        continue;
      }
      const m = pts && /^a=(?:rtpmap|rtcp-fb|fmtp):(\d+)\b/.exec(line);
      if (m && !pts.has(m[1]))
        out.push(line);
    }
    return out;
  }
  function sanitizeSdp(sdp) {
    const orphans = orphanPayloadTypeLines(sdp);
    if (orphans.length === 0)
      return sdp;
    const drop = new Set(orphans);
    const crlf = sdp.includes("\r\n");
    const kept = sdp.replace(/\r\n/g, "\n").split("\n").filter((l) => !drop.has(l));
    return kept.join(crlf ? "\r\n" : "\n");
  }

  // node_modules/@decentnetwork/peer-webrtc/dist/signal.js
  var SDP_TYPES = /* @__PURE__ */ new Set([
    "offer",
    "answer",
    "candidate",
    "remove-candidates",
    "prAnswer",
    "bye",
    "action",
    "event"
  ]);
  function encodeSignal(signal) {
    const out = { type: signal.type };
    if (signal.sdp !== void 0)
      out.sdp = signal.sdp;
    if (signal.candidates !== void 0) {
      out.candidates = signal.candidates.map((c) => {
        var _a;
        const o = { sdp: c.sdp, sdpMLineIndex: c.sdpMLineIndex };
        o.sdpMid = (_a = c.sdpMid) != null ? _a : null;
        return o;
      });
    }
    if (signal.reason !== void 0)
      out.reason = signal.reason;
    if (signal.options !== void 0)
      out.options = signal.options;
    if (signal.action !== void 0)
      out.action = signal.action;
    out.callId = signal.callId;
    if (signal.event !== void 0)
      out.event = signal.event;
    return JSON.stringify(out);
  }
  function encodeSignalBytes(signal) {
    return new TextEncoder().encode(encodeSignal(signal));
  }
  function fitSignalForInvite(signal, budget = CARRIER_MAX_INVITE_DATA_LEN) {
    let bytes = encodeSignalBytes(signal).length;
    if (bytes <= budget)
      return { signal, bytes, shrunk: false };
    let out = signal;
    if (signal.sdp) {
      const envelope = bytes - byteLength(signal.sdp);
      out = {
        ...signal,
        sdp: shrinkSdpForInvite(signal.sdp, budget - envelope, { codecs: signal.type === "offer" })
      };
      bytes = encodeSignalBytes(out).length;
    }
    if (bytes > budget) {
      throw new Error(`RtcSignal "${signal.type}" is ${bytes}B after shrinking, over the ${budget}B invite cap \u2014 the peer would never receive it`);
    }
    return { signal: out, bytes, shrunk: true };
  }
  function decodeSignal(input) {
    const text = (typeof input === "string" ? input : new TextDecoder().decode(input)).replace(/\0+$/u, "").trim();
    const obj = JSON.parse(text);
    if (typeof obj.type !== "string" || !SDP_TYPES.has(obj.type)) {
      throw new Error(`RtcSignal: invalid or missing "type" (${String(obj.type)})`);
    }
    if (typeof obj.callId !== "string" || obj.callId.length === 0) {
      throw new Error('RtcSignal: missing "callId"');
    }
    const signal = { type: obj.type, callId: obj.callId };
    if (typeof obj.sdp === "string")
      signal.sdp = obj.sdp;
    const rawCandidates = Array.isArray(obj.candidates) ? obj.candidates : obj.candidate && typeof obj.candidate === "object" ? [obj.candidate] : void 0;
    if (rawCandidates) {
      signal.candidates = rawCandidates.map((x) => x && typeof x === "object" ? x : void 0).map((c) => ({ c, line: candidateLine(c) })).filter((e) => e.line !== void 0).map(({ c, line }) => ({
        sdp: line,
        sdpMLineIndex: typeof c.sdpMLineIndex === "number" ? c.sdpMLineIndex : 0,
        sdpMid: typeof c.sdpMid === "string" ? c.sdpMid : null
      }));
    }
    if (typeof obj.reason === "string")
      signal.reason = obj.reason;
    if (Array.isArray(obj.options)) {
      signal.options = obj.options.filter((o) => o === "audio" || o === "video" || o === "data");
    }
    if (obj.action === "accept" || obj.action === "reject")
      signal.action = obj.action;
    if (typeof obj.event === "string")
      signal.event = obj.event;
    return signal;
  }
  function candidateLine(c) {
    if (!c)
      return void 0;
    if (typeof c.sdp === "string")
      return c.sdp;
    if (typeof c.candidate === "string")
      return c.candidate;
    return void 0;
  }
  function looksLikeSignal(input) {
    const text = (typeof input === "string" ? input : new TextDecoder().decode(input)).replace(/\0+$/u, "").trimStart();
    return text.startsWith("{") && text.includes('"callId"') && text.includes('"type"');
  }

  // node_modules/@decentnetwork/peer-webrtc/dist/call-engine.js
  var DEFAULT_ICE_SERVERS = [
    { urls: "stun:stun.l.google.com:19302" }
  ];
  var LEAN_VIDEO_CODECS = /^video\/(H264|VP8|rtx|red|ulpfec)$/i;
  var ICE_RESTART_MAX = 3;
  var ICE_DISCONNECT_GRACE_MS = 4e3;
  var ICE_MEDIA_LOSS_GRACE_MS = 12e4;
  var DEFAULT_RING_TIMEOUT_MS = 6e4;
  var ENDED_CALL_MEMORY_MS = 12e4;
  var _opts, _iceServers, _sessions, _restartOffersEnabled, _endedCalls, _placeCall, placeCall_fn, _startRingTimer, startRingTimer_fn, _clearRingTimer, clearRingTimer_fn, _iceServersForCall, iceServersForCall_fn, _iceServersNow, iceServersNow_fn, _refreshIceServers, refreshIceServers_fn, _setOutgoingVideoTrack, setOutgoingVideoTrack_fn, _renegotiate, renegotiate_fn, _sendRenegotiationOffer, sendRenegotiationOffer_fn, _createOffer, createOffer_fn, _createAnswer, createAnswer_fn, _cleanOutbound, cleanOutbound_fn, _cleanInbound, cleanInbound_fn, _preferLeanVideoCodecs, preferLeanVideoCodecs_fn, _restartIce, restartIce_fn, _handleSignal, handleSignal_fn, _onOffer, onOffer_fn, _answerRenegotiation, answerRenegotiation_fn, _negotiationFailed, negotiationFailed_fn, _onAnswer, onAnswer_fn, _onCandidate, onCandidate_fn, _onBye, onBye_fn, _onAuxiliary, onAuxiliary_fn, _createSession, createSession_fn, _wirePeerConnection, wirePeerConnection_fn, _armMediaLoss, armMediaLoss_fn, _ensureRemoteStream, ensureRemoteStream_fn, _attachLocalMedia, attachLocalMedia_fn, _canTrickle, canTrickle_fn, _localSdpSent, localSdpSent_fn, _flushLocalCandidates, flushLocalCandidates_fn, _drainRemoteCandidates, drainRemoteCandidates_fn, _send, send_fn, _sendByeSafe, sendByeSafe_fn, _cleanup, cleanup_fn, _rememberEnded, rememberEnded_fn, _recentlyEnded, recentlyEnded_fn, _setState, setState_fn, _normId, normId_fn, _toInfo, _newCallId, newCallId_fn, _log, log_fn;
  var CallEngine = class extends Emitter {
    constructor(opts) {
      var _a, _b;
      super();
      __privateAdd(this, _placeCall);
      /** Start the caller's ring timer (see CallEngineOptions.ringTimeoutMs). */
      __privateAdd(this, _startRingTimer);
      __privateAdd(this, _clearRingTimer);
      /** ICE servers for a call about to start: the configured ones plus TURN. */
      __privateAdd(this, _iceServersForCall);
      /** The same, without waiting: cached TURN credential or the fallback. */
      __privateAdd(this, _iceServersNow);
      /** Incoming call: its RTCPeerConnection was made when the offer arrived,
       *  with whatever TURN credential was cached. Before the answer (so before
       *  ICE gathering) give it a fresh one if that changed anything. */
      __privateAdd(this, _refreshIceServers);
      /** Point the outgoing video sender at `track` (replaceTrack, no renegotiation
       *  needed if a sender exists), flip the transceiver to send, and refresh the
       *  local-preview stream. `track === null` removes the outgoing video. */
      __privateAdd(this, _setOutgoingVideoTrack);
      /** Create + send a fresh offer to renegotiate media (e.g. after adding a
       *  screen-share track). The peer applies it via #onOffer's renegotiation path. */
      __privateAdd(this, _renegotiate);
      __privateAdd(this, _sendRenegotiationOffer);
      /** createOffer with the lean codec set applied (see #preferLeanVideoCodecs)
       *  and the result sanitized (see #cleanOutbound). Every offer — initial,
       *  screen-share re-offer, ICE restart — goes through here. */
      __privateAdd(this, _createOffer);
      /** createAnswer with the lean codec set applied and the result sanitized. */
      __privateAdd(this, _createAnswer);
      /**
       * Strip orphan codec lines from a description WE produced, before it is
       * applied locally and before it is sent.
       *
       * Firefox's setCodecPreferences drops VP9/AV1 from the m=video line but
       * leaves their `a=fmtp:` / `a=rtcp-fb:` lines in place; Chrome's parser then
       * rejects the whole re-offer ("Failed to parse codecs correctly") and the
       * Firefox peer's screen share never shows up. Measured 2026-10-31 between
       * the Firefox extension and a Chrome desktop, both on 0.2.16. The sanitizer
       * is a no-op on a clean description (Chrome, Safari), so the same object
       * comes back untouched there.
       */
      __privateAdd(this, _cleanOutbound);
      /**
       * The same cleanup for a description the PEER sent, before setRemoteDescription:
       * Firefox extensions already in the field (AMO 1.4.14 ships 0.2.16) still
       * produce the orphan lines, and a receiver on this engine must accept them.
       */
      __privateAdd(this, _cleanInbound);
      /**
       * Restrict video to the codecs the peers actually negotiate, so the SDP fits
       * the 8192-byte Carrier invite channel. Chrome otherwise advertises VP9 and
       * AV1 with their profile/rtx/fmtp lines and the offer lands at 8.4-9.8 KB —
       * over the cap, rejected by the transport, invisible to the peer.
       *
       * setCodecPreferences (not SDP munging) keeps the browser the one producing a
       * valid, self-consistent description. No-ops wherever the API is missing.
       */
      __privateAdd(this, _preferLeanVideoCodecs);
      /** Recover a dead transport with an ICE restart (RFC 8445 §12): a re-offer
       *  carrying fresh ufrag/pwd, sent over the SAME renegotiation path that
       *  screen-share re-offers use — any peer that answers those (web, iOS,
       *  Android) cooperates with no new protocol. Only the ORIGINAL CALLER
       *  initiates, so both ends noticing the outage can't glare offers at each
       *  other; the callee just answers. */
      __privateAdd(this, _restartIce);
      // ---- internals -------------------------------------------------------
      __privateAdd(this, _handleSignal);
      __privateAdd(this, _onOffer);
      /** Apply a mid-call re-offer (renegotiation) and send the answer. */
      __privateAdd(this, _answerRenegotiation);
      __privateAdd(this, _negotiationFailed);
      __privateAdd(this, _onAnswer);
      __privateAdd(this, _onCandidate);
      __privateAdd(this, _onBye);
      __privateAdd(this, _onAuxiliary);
      __privateAdd(this, _createSession);
      __privateAdd(this, _wirePeerConnection);
      __privateAdd(this, _armMediaLoss);
      __privateAdd(this, _ensureRemoteStream);
      __privateAdd(this, _attachLocalMedia);
      /** May a local candidate go out now? Only once
       *  - the remote SDP is applied (iOS parity: the native SDK's hasReceivedSdp —
       *    the peer has a matching call), and
       *  - every local offer/answer we applied has been SENT: a candidate must
       *    never overtake the description it belongs to. */
      __privateAdd(this, _canTrickle);
      /** An offer/answer went out (or failed to): release the candidates held for it. */
      __privateAdd(this, _localSdpSent);
      /** Send queued local candidates, oldest first, one signal each (as before).
       *  One flush at a time; a candidate gathered meanwhile joins the queue and
       *  goes out in turn. A failed send is logged and the rest still go. */
      __privateAdd(this, _flushLocalCandidates);
      __privateAdd(this, _drainRemoteCandidates);
      __privateAdd(this, _send);
      __privateAdd(this, _sendByeSafe);
      __privateAdd(this, _cleanup);
      __privateAdd(this, _rememberEnded);
      __privateAdd(this, _recentlyEnded);
      __privateAdd(this, _setState);
      /** Canonical session key. callId is a UUID; iOS re-serializes it UPPERCASE
       *  (it parses our lowercase UUID into a `UUID` and echoes `.uuidString`), so
       *  the answer/candidates come back cased differently than the offer. Key and
       *  look up sessions case-insensitively — exactly as the native SDK does
       *  (`callId.lowercased()`). Without this, outgoing calls to iOS never match
       *  the answer → candidates never flush → ICE stalls at "connecting". */
      __privateAdd(this, _normId);
      __privateAdd(this, _newCallId);
      __privateAdd(this, _log);
      __privateAdd(this, _opts, void 0);
      __privateAdd(this, _iceServers, void 0);
      __privateAdd(this, _sessions, /* @__PURE__ */ new Map());
      /** See CallEngineOptions.iceRestartOffers — off by default for native-app safety. */
      __privateAdd(this, _restartOffersEnabled, void 0);
      /** Normalized callId → time it ended (see ENDED_CALL_MEMORY_MS). */
      __privateAdd(this, _endedCalls, /* @__PURE__ */ new Map());
      __privateAdd(this, _toInfo, (session) => ({
        callId: session.callId,
        peerId: session.peerId,
        direction: session.direction,
        audio: session.audio,
        video: session.video,
        data: session.data,
        state: session.state
      }));
      __privateSet(this, _opts, opts);
      __privateSet(this, _iceServers, (_a = opts.iceServers) != null ? _a : DEFAULT_ICE_SERVERS);
      __privateSet(this, _restartOffersEnabled, (_b = opts.iceRestartOffers) != null ? _b : false);
      opts.signaling.onSignal((peerId, signal) => {
        try {
          __privateMethod(this, _handleSignal, handleSignal_fn).call(this, peerId, signal);
        } catch (err) {
          __privateMethod(this, _log, log_fn).call(this, `handleSignal error: ${err.message}`);
        }
      });
    }
    /** Calls currently tracked by the engine. */
    get calls() {
      return [...__privateGet(this, _sessions).values()].map(__privateGet(this, _toInfo));
    }
    /** True while any call is active (useful for busy-signalling). */
    get isBusy() {
      for (const s of __privateGet(this, _sessions).values()) {
        if (!s.closed && s.state !== "ended" && s.state !== "failed")
          return true;
      }
      return false;
    }
    /**
     * Place an outgoing call. Acquires local media, sends an offer, and returns
     * the new callId. Emits "localStream" once media is up, "stateChanged" and
     * "remoteStream"/"ended" as the call progresses.
     */
    async call(peerId, kinds = {}) {
      var _a, _b, _c;
      const audio = (_a = kinds.audio) != null ? _a : true;
      const video = (_b = kinds.video) != null ? _b : false;
      const data = (_c = kinds.data) != null ? _c : false;
      const callId = __privateMethod(this, _newCallId, newCallId_fn).call(this);
      const iceServers = await __privateMethod(this, _iceServersForCall, iceServersForCall_fn).call(this);
      const session = __privateMethod(this, _createSession, createSession_fn).call(this, callId, peerId, "outgoing", { audio, video, data }, iceServers);
      __privateMethod(this, _startRingTimer, startRingTimer_fn).call(this, session);
      try {
        await __privateMethod(this, _placeCall, placeCall_fn).call(this, session);
      } catch (err) {
        if (!session.closed) {
          const unreachable = (err == null ? void 0 : err.sendFailed) === true;
          __privateMethod(this, _setState, setState_fn).call(this, session, unreachable ? "unreachable" : "failed");
          __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "close", unreachable ? "unreachable" : "failed");
        }
        throw err;
      }
      return callId;
    }
    /**
     * Accept an incoming call (one that surfaced via "incomingCall"). Acquires
     * local media, applies the stored offer, and sends the answer.
     */
    async accept(callId) {
      const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
      if (!session || session.direction !== "incoming" || !session.pendingOffer) {
        throw new Error(`accept: no pending incoming call ${callId}`);
      }
      await __privateMethod(this, _attachLocalMedia, attachLocalMedia_fn).call(this, session);
      await __privateMethod(this, _refreshIceServers, refreshIceServers_fn).call(this, session);
      await session.pc.setRemoteDescription({ type: "offer", sdp: __privateMethod(this, _cleanInbound, cleanInbound_fn).call(this, session.pendingOffer, "offer") });
      session.hasReceivedSdp = true;
      session.pendingOffer = void 0;
      await __privateMethod(this, _drainRemoteCandidates, drainRemoteCandidates_fn).call(this, session);
      const answer = await __privateMethod(this, _createAnswer, createAnswer_fn).call(this, session);
      session.localSdpUnsent++;
      try {
        await session.pc.setLocalDescription(answer);
        await __privateMethod(this, _send, send_fn).call(this, session.peerId, { type: "answer", sdp: answer.sdp, callId });
        try {
          await __privateMethod(this, _send, send_fn).call(this, session.peerId, { type: "action", action: "accept", callId });
        } catch {
        }
      } finally {
        __privateMethod(this, _localSdpSent, localSdpSent_fn).call(this, session);
      }
      __privateMethod(this, _setState, setState_fn).call(this, session, "connecting");
      await __privateMethod(this, _flushLocalCandidates, flushLocalCandidates_fn).call(this, session);
      __privateMethod(this, _log, log_fn).call(this, `accept callId=${callId}`);
    }
    /** Reject an incoming call (sends bye/declined). */
    async reject(callId) {
      const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
      if (!session)
        return;
      await __privateMethod(this, _sendByeSafe, sendByeSafe_fn).call(this, session, "declined");
      __privateMethod(this, _setState, setState_fn).call(this, session, "declined");
      __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "declined");
    }
    /** Hang up an active call (sends bye/normal). */
    async hangup(callId, reason = "normal") {
      const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
      if (!session)
        return;
      await __privateMethod(this, _sendByeSafe, sendByeSafe_fn).call(this, session, reason);
      __privateMethod(this, _cleanup, cleanup_fn).call(this, session, reason);
    }
    /** Enable/disable a local track kind on an active call (mute / camera off). */
    setLocalTrackEnabled(callId, kind, enabled) {
      const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
      if (!(session == null ? void 0 : session.localStream))
        return;
      for (const track of session.localStream.getTracks()) {
        if (track.kind === kind)
          track.enabled = enabled;
      }
    }
    /** Start sharing the screen on an active call. Captures the display, sends it
     *  as the outgoing video track (replacing the camera if any), and renegotiates
     *  so the peer receives it. Works even with no camera. Ending the OS "stop
     *  sharing" prompt reverts automatically. */
    async shareScreen(callId) {
      var _a, _b, _c;
      const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
      if (!session)
        throw new Error(`shareScreen: no call ${callId}`);
      if (!__privateGet(this, _opts).getDisplayMedia)
        throw new Error("screen share not supported here");
      const screen = await __privateGet(this, _opts).getDisplayMedia({ video: true, audio: false });
      const track = screen.getVideoTracks()[0];
      if (!track)
        return;
      if (!session.screenStream) {
        session.hadCamera = !!((_a = session.localStream) == null ? void 0 : _a.getVideoTracks().length);
        for (const t of (_c = (_b = session.localStream) == null ? void 0 : _b.getVideoTracks()) != null ? _c : [])
          t.stop();
      }
      session.screenStream = screen;
      await __privateMethod(this, _setOutgoingVideoTrack, setOutgoingVideoTrack_fn).call(this, session, track, screen);
      track.addEventListener("ended", () => {
        void this.stopScreenShare(callId);
      });
      try {
        await __privateMethod(this, _renegotiate, renegotiate_fn).call(this, session);
      } catch (err) {
        __privateMethod(this, _log, log_fn).call(this, `shareScreen renegotiation failed: ${err.message}`);
        await this.stopScreenShare(callId).catch(() => {
        });
        throw err;
      }
      __privateMethod(this, _log, log_fn).call(this, `shareScreen started for ${callId}`);
    }
    /** Stop screen sharing; re-acquire the camera if there was one. */
    async stopScreenShare(callId) {
      var _a;
      const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
      if (!(session == null ? void 0 : session.screenStream))
        return;
      for (const t of session.screenStream.getTracks())
        t.stop();
      session.screenStream = void 0;
      let cam;
      if (session.hadCamera && __privateGet(this, _opts).getLocalMedia) {
        cam = await __privateGet(this, _opts).getLocalMedia({ audio: false, video: true }).catch(() => void 0);
      }
      session.hadCamera = false;
      await __privateMethod(this, _setOutgoingVideoTrack, setOutgoingVideoTrack_fn).call(this, session, (_a = cam == null ? void 0 : cam.getVideoTracks()[0]) != null ? _a : null, cam);
      await __privateMethod(this, _renegotiate, renegotiate_fn).call(this, session).catch((err) => {
        __privateMethod(this, _log, log_fn).call(this, `stopScreenShare renegotiation failed: ${err.message}`);
      });
      __privateMethod(this, _log, log_fn).call(this, `shareScreen stopped for ${callId}`);
    }
    /** True when the call is currently sharing the screen. */
    isSharingScreen(callId) {
      var _a;
      return !!((_a = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId))) == null ? void 0 : _a.screenStream);
    }
    /** Silently drop a call WITHOUT signaling the peer — for a tab that lost
     *  the cross-tab answer race: another tab owns the call now, so sending
     *  reject/bye from this one would kill the live call. Local cleanup only. */
    discard(callId) {
      const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
      if (!session)
        return;
      __privateMethod(this, _log, log_fn).call(this, `discarding call ${callId} (claimed elsewhere)`);
      __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "close");
    }
    /** Tear down every call (e.g. on app shutdown). */
    dispose() {
      for (const session of [...__privateGet(this, _sessions).values()]) {
        __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "close");
      }
      this.removeAll();
    }
  };
  _opts = new WeakMap();
  _iceServers = new WeakMap();
  _sessions = new WeakMap();
  _restartOffersEnabled = new WeakMap();
  _endedCalls = new WeakMap();
  _placeCall = new WeakSet();
  placeCall_fn = async function(session) {
    var _a, _b;
    const { callId, peerId, audio, video, data } = session;
    await __privateMethod(this, _attachLocalMedia, attachLocalMedia_fn).call(this, session);
    if (session.closed)
      throw new Error(`call ${callId} ended before the offer was sent`);
    if (audio && !((_a = session.localStream) == null ? void 0 : _a.getAudioTracks().length)) {
      try {
        session.pc.addTransceiver("audio", { direction: "recvonly" });
      } catch {
      }
    }
    if (video && !((_b = session.localStream) == null ? void 0 : _b.getVideoTracks().length)) {
      try {
        session.pc.addTransceiver("video", { direction: "recvonly" });
      } catch {
      }
    }
    const offer = await __privateMethod(this, _createOffer, createOffer_fn).call(this, session);
    const options = [];
    if (audio)
      options.push("audio");
    if (video)
      options.push("video");
    if (data)
      options.push("data");
    session.localSdpUnsent++;
    try {
      await session.pc.setLocalDescription(offer);
      try {
        await __privateMethod(this, _send, send_fn).call(this, peerId, {
          type: "offer",
          sdp: offer.sdp,
          options,
          callId,
          event: void 0
        });
      } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err));
        e.sendFailed = true;
        throw e;
      }
    } finally {
      __privateMethod(this, _localSdpSent, localSdpSent_fn).call(this, session);
    }
    if (session.closed)
      return;
    if (!session.hasReceivedSdp)
      __privateMethod(this, _setState, setState_fn).call(this, session, session.remoteRang ? "remoteRinging" : "ringing");
    __privateMethod(this, _log, log_fn).call(this, `call \u2192 ${peerId} callId=${callId} audio=${audio} video=${video}`);
  };
  _startRingTimer = new WeakSet();
  startRingTimer_fn = function(session) {
    var _a, _b, _c;
    const ms = (_a = __privateGet(this, _opts).ringTimeoutMs) != null ? _a : DEFAULT_RING_TIMEOUT_MS;
    if (!(ms > 0))
      return;
    session.ringTimer = setTimeout(() => {
      session.ringTimer = void 0;
      if (session.closed || session.hasReceivedSdp)
        return;
      __privateMethod(this, _log, log_fn).call(this, `no answer from ${session.peerId} in ${ms}ms \u2014 ending call ${session.callId}`);
      __privateMethod(this, _setState, setState_fn).call(this, session, "noAnswer");
      void __privateMethod(this, _sendByeSafe, sendByeSafe_fn).call(this, session, "normal");
      __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "normal", "noAnswer");
    }, ms);
    (_c = (_b = session.ringTimer).unref) == null ? void 0 : _c.call(_b);
  };
  _clearRingTimer = new WeakSet();
  clearRingTimer_fn = function(session) {
    if (session.ringTimer) {
      clearTimeout(session.ringTimer);
      session.ringTimer = void 0;
    }
  };
  _iceServersForCall = new WeakSet();
  iceServersForCall_fn = async function() {
    const turn = __privateGet(this, _opts).turnServers;
    if (!turn)
      return __privateGet(this, _iceServers);
    let extra = [];
    try {
      extra = await turn.iceServers();
    } catch {
      extra = turn.currentIceServers();
    }
    return [...__privateGet(this, _iceServers), ...extra];
  };
  _iceServersNow = new WeakSet();
  iceServersNow_fn = function() {
    const turn = __privateGet(this, _opts).turnServers;
    return turn ? [...__privateGet(this, _iceServers), ...turn.currentIceServers()] : __privateGet(this, _iceServers);
  };
  _refreshIceServers = new WeakSet();
  refreshIceServers_fn = async function(session) {
    var _a;
    if (!__privateGet(this, _opts).turnServers)
      return;
    const iceServers = await __privateMethod(this, _iceServersForCall, iceServersForCall_fn).call(this);
    const pc = session.pc;
    if (typeof pc.setConfiguration !== "function")
      return;
    const current = typeof pc.getConfiguration === "function" ? pc.getConfiguration() : {};
    if (sameIceServers((_a = current.iceServers) != null ? _a : [], iceServers))
      return;
    try {
      pc.setConfiguration({ ...current, iceServers });
    } catch (err) {
      __privateMethod(this, _log, log_fn).call(this, `accept ${session.callId}: could not update ICE servers (${err.message}); keeping the cached/static ones`);
    }
  };
  _setOutgoingVideoTrack = new WeakSet();
  setOutgoingVideoTrack_fn = async function(session, track, stream) {
    var _a, _b, _c, _d;
    const transceivers = (_c = (_b = (_a = session.pc).getTransceivers) == null ? void 0 : _b.call(_a)) != null ? _c : [];
    const tr = (_d = transceivers.find((t) => {
      var _a2;
      return ((_a2 = t.sender.track) == null ? void 0 : _a2.kind) === "video";
    })) != null ? _d : transceivers.find((t) => {
      var _a2;
      return ((_a2 = t.receiver.track) == null ? void 0 : _a2.kind) === "video";
    });
    if (track) {
      let sending = false;
      if (tr) {
        try {
          await tr.sender.replaceTrack(track);
          if (tr.direction === "recvonly" || tr.direction === "inactive")
            tr.direction = "sendrecv";
          sending = tr.direction === "sendrecv" || tr.direction === "sendonly";
        } catch (err) {
          __privateMethod(this, _log, log_fn).call(this, `replaceTrack/direction failed: ${err.message}`);
        }
      }
      if (!sending) {
        __privateMethod(this, _log, log_fn).call(this, tr ? `video transceiver stuck at ${tr.direction}; addTrack fallback` : "no video m-line; addTrack");
        if (stream)
          session.pc.addTrack(track, stream);
        else
          session.pc.addTrack(track);
      }
    } else if (tr) {
      try {
        await tr.sender.replaceTrack(null);
        if (tr.direction === "sendrecv")
          tr.direction = "recvonly";
        else if (tr.direction === "sendonly")
          tr.direction = "inactive";
      } catch (err) {
        __privateMethod(this, _log, log_fn).call(this, `clear video track failed: ${err.message}`);
      }
    }
    session.localStream = stream;
    this.emit("localStream", session.callId, stream != null ? stream : new MediaStream());
  };
  _renegotiate = new WeakSet();
  renegotiate_fn = async function(session) {
    const offer = await __privateMethod(this, _createOffer, createOffer_fn).call(this, session);
    session.localSdpUnsent++;
    try {
      await session.pc.setLocalDescription(offer);
      await __privateMethod(this, _sendRenegotiationOffer, sendRenegotiationOffer_fn).call(this, session, offer);
    } finally {
      __privateMethod(this, _localSdpSent, localSdpSent_fn).call(this, session);
    }
  };
  _sendRenegotiationOffer = new WeakSet();
  sendRenegotiationOffer_fn = async function(session, offer) {
    var _a, _b;
    const options = [];
    if (session.audio)
      options.push("audio");
    if (session.video || session.screenStream)
      options.push("video");
    const sdp = (_a = offer.sdp) != null ? _a : "";
    __privateMethod(this, _log, log_fn).call(this, `renegotiate callId=${session.callId} video=${(_b = mediaDirection(sdp, "video")) != null ? _b : "none"} sdp=${byteLength(sdp)}B`);
    if (session.screenStream && !videoIsSending(sdp)) {
      __privateMethod(this, _log, log_fn).call(this, "renegotiate: WARNING share offer has no sending video m-line \u2014 peer will see black");
    }
    await __privateMethod(this, _send, send_fn).call(this, session.peerId, { type: "offer", sdp: offer.sdp, options, callId: session.callId });
  };
  _createOffer = new WeakSet();
  createOffer_fn = async function(session, opts) {
    __privateMethod(this, _preferLeanVideoCodecs, preferLeanVideoCodecs_fn).call(this, session.pc);
    return __privateMethod(this, _cleanOutbound, cleanOutbound_fn).call(this, await session.pc.createOffer(opts));
  };
  _createAnswer = new WeakSet();
  createAnswer_fn = async function(session) {
    __privateMethod(this, _preferLeanVideoCodecs, preferLeanVideoCodecs_fn).call(this, session.pc);
    return __privateMethod(this, _cleanOutbound, cleanOutbound_fn).call(this, await session.pc.createAnswer());
  };
  _cleanOutbound = new WeakSet();
  cleanOutbound_fn = function(desc) {
    var _a, _b;
    const raw = (_a = desc.sdp) != null ? _a : "";
    const sdp = sanitizeSdp(raw);
    if (sdp === raw)
      return desc;
    __privateMethod(this, _log, log_fn).call(this, `${(_b = desc.type) != null ? _b : "sdp"}: removed ${orphanPayloadTypeLines(raw).length} orphan codec line(s) from our own description`);
    return { type: desc.type, sdp };
  };
  _cleanInbound = new WeakSet();
  cleanInbound_fn = function(raw, what) {
    const sdp = sanitizeSdp(raw);
    if (sdp !== raw) {
      __privateMethod(this, _log, log_fn).call(this, `${what}: removed ${orphanPayloadTypeLines(raw).length} orphan codec line(s) from the peer's description`);
    }
    return sdp;
  };
  _preferLeanVideoCodecs = new WeakSet();
  preferLeanVideoCodecs_fn = function(pc) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (__privateGet(this, _opts).leanVideoCodecs === false)
      return;
    const caps = (_b = (_a = globalThis.RTCRtpSender) == null ? void 0 : _a.getCapabilities) == null ? void 0 : _b.call(_a, "video");
    if (!((_c = caps == null ? void 0 : caps.codecs) == null ? void 0 : _c.length))
      return;
    const keep = caps.codecs.filter((c) => LEAN_VIDEO_CODECS.test(c.mimeType));
    if (!keep.length || keep.length === caps.codecs.length)
      return;
    for (const t of (_e = (_d = pc.getTransceivers) == null ? void 0 : _d.call(pc)) != null ? _e : []) {
      const kind = (_j = (_g = (_f = t.receiver) == null ? void 0 : _f.track) == null ? void 0 : _g.kind) != null ? _j : (_i = (_h = t.sender) == null ? void 0 : _h.track) == null ? void 0 : _i.kind;
      if (kind !== "video" || typeof t.setCodecPreferences !== "function")
        continue;
      try {
        t.setCodecPreferences(keep);
      } catch {
      }
    }
  };
  _restartIce = new WeakSet();
  restartIce_fn = async function(session) {
    if (session.closed)
      return;
    session.restartAttempts += 1;
    __privateMethod(this, _log, log_fn).call(this, `ICE restart ${session.restartAttempts}/${ICE_RESTART_MAX} for call ${session.callId}`);
    try {
      const offer = await __privateMethod(this, _createOffer, createOffer_fn).call(this, session, { iceRestart: true });
      session.localSdpUnsent++;
      try {
        await session.pc.setLocalDescription(offer);
        const options = [];
        if (session.audio)
          options.push("audio");
        if (session.video || session.screenStream)
          options.push("video");
        await __privateMethod(this, _send, send_fn).call(this, session.peerId, { type: "offer", sdp: offer.sdp, options, callId: session.callId });
      } finally {
        __privateMethod(this, _localSdpSent, localSdpSent_fn).call(this, session);
      }
    } catch (err) {
      __privateMethod(this, _log, log_fn).call(this, `ICE restart failed: ${err.message}`);
    }
  };
  _handleSignal = new WeakSet();
  handleSignal_fn = function(peerId, signal) {
    switch (signal.type) {
      case "offer":
        __privateMethod(this, _onOffer, onOffer_fn).call(this, peerId, signal);
        return;
      case "answer":
        __privateMethod(this, _onAnswer, onAnswer_fn).call(this, peerId, signal);
        return;
      case "candidate":
        __privateMethod(this, _onCandidate, onCandidate_fn).call(this, peerId, signal);
        return;
      case "remove-candidates":
        __privateMethod(this, _log, log_fn).call(this, `remove-candidates from ${peerId} (ignored)`);
        return;
      case "bye":
        __privateMethod(this, _onBye, onBye_fn).call(this, peerId, signal);
        return;
      case "action":
      case "event":
      case "prAnswer":
        __privateMethod(this, _onAuxiliary, onAuxiliary_fn).call(this, peerId, signal);
        return;
    }
  };
  _onOffer = new WeakSet();
  onOffer_fn = function(peerId, signal) {
    if (!signal.sdp)
      return;
    const existing = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, signal.callId));
    if (existing) {
      if (existing.hasReceivedSdp)
        void __privateMethod(this, _answerRenegotiation, answerRenegotiation_fn).call(this, existing, signal.sdp);
      else
        existing.pendingOffer = signal.sdp;
      return;
    }
    if (__privateMethod(this, _recentlyEnded, recentlyEnded_fn).call(this, signal.callId)) {
      __privateMethod(this, _log, log_fn).call(this, `dropping offer for ended call ${signal.callId} from ${peerId}`);
      return;
    }
    const audio = signal.options ? signal.options.includes("audio") : true;
    const video = signal.options ? signal.options.includes("video") : false;
    const data = signal.options ? signal.options.includes("data") : false;
    const session = __privateMethod(this, _createSession, createSession_fn).call(this, signal.callId, peerId, "incoming", { audio, video, data }, __privateMethod(this, _iceServersNow, iceServersNow_fn).call(this));
    session.pendingOffer = signal.sdp;
    if (__privateGet(this, _opts).turnServers)
      void __privateGet(this, _opts).turnServers.iceServers();
    if (__privateGet(this, _opts).sendRinging !== false) {
      void __privateMethod(this, _send, send_fn).call(this, peerId, { type: "event", event: "ringing", callId: signal.callId }).catch(() => {
      });
    }
    this.emit("incomingCall", __privateGet(this, _toInfo).call(this, session));
    __privateMethod(this, _log, log_fn).call(this, `incoming call from ${peerId} callId=${signal.callId} audio=${audio} video=${video}`);
  };
  _answerRenegotiation = new WeakSet();
  answerRenegotiation_fn = async function(session, sdp) {
    try {
      await session.pc.setRemoteDescription({ type: "offer", sdp: __privateMethod(this, _cleanInbound, cleanInbound_fn).call(this, sdp, "offer") });
      const answer = await __privateMethod(this, _createAnswer, createAnswer_fn).call(this, session);
      session.localSdpUnsent++;
      try {
        await session.pc.setLocalDescription(answer);
        await __privateMethod(this, _send, send_fn).call(this, session.peerId, { type: "answer", sdp: answer.sdp, callId: session.callId });
      } finally {
        __privateMethod(this, _localSdpSent, localSdpSent_fn).call(this, session);
      }
    } catch (err) {
      __privateMethod(this, _negotiationFailed, negotiationFailed_fn).call(this, session, "re-offer", err);
    }
  };
  _negotiationFailed = new WeakSet();
  negotiationFailed_fn = function(session, what, err) {
    const error = err instanceof Error ? err : new Error(String(err));
    __privateMethod(this, _log, log_fn).call(this, `renegotiation failed (${what}) callId=${session.callId}: ${error.message}`);
    console.warn(`[peer-webrtc] could not apply the peer's ${what} for call ${session.callId}: ${error.message}`);
    this.emit("negotiationFailed", session.callId, error);
  };
  _onAnswer = new WeakSet();
  onAnswer_fn = function(peerId, signal) {
    const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, signal.callId));
    if (!session || !signal.sdp)
      return;
    session.peerId = peerId;
    void (async () => {
      try {
        await session.pc.setRemoteDescription({ type: "answer", sdp: __privateMethod(this, _cleanInbound, cleanInbound_fn).call(this, signal.sdp, "answer") });
        session.hasReceivedSdp = true;
        __privateMethod(this, _clearRingTimer, clearRingTimer_fn).call(this, session);
        if (session.state !== "connected")
          __privateMethod(this, _setState, setState_fn).call(this, session, "connecting");
        await __privateMethod(this, _drainRemoteCandidates, drainRemoteCandidates_fn).call(this, session);
        await __privateMethod(this, _flushLocalCandidates, flushLocalCandidates_fn).call(this, session);
      } catch (err) {
        __privateMethod(this, _negotiationFailed, negotiationFailed_fn).call(this, session, "answer", err);
      }
    })();
  };
  _onCandidate = new WeakSet();
  onCandidate_fn = function(peerId, signal) {
    var _a;
    const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, signal.callId));
    if (!session || !signal.candidates)
      return;
    for (const c of signal.candidates) {
      const init = {
        candidate: c.sdp,
        sdpMLineIndex: c.sdpMLineIndex,
        sdpMid: (_a = c.sdpMid) != null ? _a : void 0
      };
      if (session.pc.remoteDescription) {
        session.pc.addIceCandidate(init).catch((err) => __privateMethod(this, _log, log_fn).call(this, `addIceCandidate failed: ${err.message}`));
      } else {
        session.remoteCandidateQueue.push(init);
      }
    }
  };
  _onBye = new WeakSet();
  onBye_fn = function(peerId, signal) {
    var _a;
    const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, signal.callId));
    if (!session)
      return;
    const reason = (_a = signal.reason) != null ? _a : "normal";
    const state = reason === "busy" ? "busy" : reason === "declined" ? "declined" : "ended";
    __privateMethod(this, _setState, setState_fn).call(this, session, state);
    __privateMethod(this, _cleanup, cleanup_fn).call(this, session, reason);
    __privateMethod(this, _log, log_fn).call(this, `bye from ${peerId} callId=${signal.callId} reason=${reason}`);
  };
  _onAuxiliary = new WeakSet();
  onAuxiliary_fn = function(peerId, signal) {
    const session = __privateGet(this, _sessions).get(__privateMethod(this, _normId, normId_fn).call(this, signal.callId));
    if (!session)
      return;
    if (signal.type === "event") {
      const preAnswer = session.direction === "outgoing" && !session.hasReceivedSdp;
      if (signal.event === "ringing") {
        if (!preAnswer)
          return;
        session.remoteRang = true;
        if (session.state === "ringing")
          __privateMethod(this, _setState, setState_fn).call(this, session, "remoteRinging");
      } else if (signal.event === "online") {
        if (preAnswer && session.state === "ringing")
          __privateMethod(this, _setState, setState_fn).call(this, session, "remoteOnline");
      }
    } else if (signal.type === "action") {
      if (signal.action === "reject") {
        __privateMethod(this, _setState, setState_fn).call(this, session, "declined");
        __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "declined");
      }
    }
  };
  _createSession = new WeakSet();
  createSession_fn = function(callId, peerId, direction, kinds, iceServers = __privateGet(this, _iceServers)) {
    const pc = __privateGet(this, _opts).createPeerConnection({ iceServers });
    const session = {
      callId,
      peerId,
      direction,
      pc,
      audio: kinds.audio,
      video: kinds.video,
      data: kinds.data,
      state: "connecting",
      hasReceivedSdp: false,
      localCandidateQueue: [],
      localSdpUnsent: 0,
      remoteCandidateQueue: [],
      restartAttempts: 0,
      closed: false
    };
    __privateGet(this, _sessions).set(__privateMethod(this, _normId, normId_fn).call(this, callId), session);
    __privateMethod(this, _wirePeerConnection, wirePeerConnection_fn).call(this, session);
    return session;
  };
  _wirePeerConnection = new WeakSet();
  wirePeerConnection_fn = function(session) {
    const pc = session.pc;
    pc.onicecandidate = (ev) => {
      var _a, _b;
      if (!ev.candidate || !ev.candidate.candidate)
        return;
      const sig = {
        sdp: ev.candidate.candidate,
        sdpMLineIndex: (_a = ev.candidate.sdpMLineIndex) != null ? _a : 0,
        sdpMid: (_b = ev.candidate.sdpMid) != null ? _b : null
      };
      session.localCandidateQueue.push(sig);
      if (__privateMethod(this, _canTrickle, canTrickle_fn).call(this, session))
        void __privateMethod(this, _flushLocalCandidates, flushLocalCandidates_fn).call(this, session);
    };
    pc.ontrack = (ev) => {
      __privateMethod(this, _ensureRemoteStream, ensureRemoteStream_fn).call(this, session, ev.track);
      const snapshot = new MediaStream(session.remoteStream.getTracks());
      this.emit("remoteStream", session.callId, snapshot);
      ev.track.addEventListener("unmute", () => {
        if (!session.remoteStream)
          return;
        this.emit("remoteStream", session.callId, new MediaStream(session.remoteStream.getTracks()));
      });
    };
    pc.oniceconnectionstatechange = () => {
      switch (pc.iceConnectionState) {
        case "connected":
        case "completed":
          if (session.restartTimer) {
            clearTimeout(session.restartTimer);
            session.restartTimer = void 0;
          }
          clearTimeout(session.mediaLossTimer);
          session.mediaLossTimer = void 0;
          session.restartAttempts = 0;
          __privateMethod(this, _setState, setState_fn).call(this, session, "connected");
          break;
        case "disconnected":
          __privateMethod(this, _setState, setState_fn).call(this, session, "disconnected");
          __privateMethod(this, _armMediaLoss, armMediaLoss_fn).call(this, session);
          if (__privateGet(this, _restartOffersEnabled) && session.direction === "outgoing" && !session.restartTimer && session.restartAttempts < ICE_RESTART_MAX) {
            session.restartTimer = setTimeout(() => {
              session.restartTimer = void 0;
              const st = pc.iceConnectionState;
              if (!session.closed && (st === "disconnected" || st === "failed"))
                void __privateMethod(this, _restartIce, restartIce_fn).call(this, session);
            }, ICE_DISCONNECT_GRACE_MS);
          }
          break;
        case "failed":
          if (session.restartAttempts < ICE_RESTART_MAX) {
            __privateMethod(this, _setState, setState_fn).call(this, session, "disconnected");
            if (__privateGet(this, _restartOffersEnabled) && session.direction === "outgoing")
              void __privateMethod(this, _restartIce, restartIce_fn).call(this, session);
            __privateMethod(this, _armMediaLoss, armMediaLoss_fn).call(this, session);
          } else {
            __privateMethod(this, _setState, setState_fn).call(this, session, "failed");
            __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "close", "failed");
          }
          break;
        case "closed":
          if (!session.closed)
            __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "close");
          break;
        default:
          break;
      }
    };
  };
  _armMediaLoss = new WeakSet();
  armMediaLoss_fn = function(session) {
    if (session.mediaLossTimer)
      return;
    session.mediaLossTimer = setTimeout(() => {
      var _a;
      session.mediaLossTimer = void 0;
      if (session.closed)
        return;
      const state = (_a = session.pc) == null ? void 0 : _a.iceConnectionState;
      if (state === "connected" || state === "completed")
        return;
      __privateMethod(this, _setState, setState_fn).call(this, session, "failed");
      __privateMethod(this, _cleanup, cleanup_fn).call(this, session, "close", "failed");
    }, ICE_MEDIA_LOSS_GRACE_MS);
  };
  _ensureRemoteStream = new WeakSet();
  ensureRemoteStream_fn = function(session, track) {
    if (!session.remoteStream)
      session.remoteStream = new MediaStream();
    if (!session.remoteStream.getTracks().includes(track))
      session.remoteStream.addTrack(track);
    return session.remoteStream;
  };
  _attachLocalMedia = new WeakSet();
  attachLocalMedia_fn = async function(session) {
    if (session.localStream)
      return;
    if (!__privateGet(this, _opts).getLocalMedia || !session.audio && !session.video)
      return;
    let stream;
    try {
      stream = await __privateGet(this, _opts).getLocalMedia({ audio: session.audio, video: session.video });
    } catch (err) {
      __privateMethod(this, _log, log_fn).call(this, `getLocalMedia(audio:${session.audio},video:${session.video}) failed: ${err.message}`);
      if (session.video && session.audio) {
        try {
          stream = await __privateGet(this, _opts).getLocalMedia({ audio: true, video: false });
          __privateMethod(this, _log, log_fn).call(this, `local camera unavailable \u2014 sending audio only, still receiving video, call ${session.callId}`);
        } catch (err2) {
          __privateMethod(this, _log, log_fn).call(this, `audio-only fallback failed too: ${err2.message}`);
        }
      }
    }
    if (stream && session.closed) {
      for (const t of stream.getTracks()) {
        try {
          t.stop();
        } catch {
        }
      }
      return;
    }
    if (!stream) {
      __privateMethod(this, _log, log_fn).call(this, `no local media for ${session.callId}; connecting receive-only`);
      return;
    }
    session.localStream = stream;
    for (const track of stream.getTracks()) {
      session.pc.addTrack(track, stream);
    }
    this.emit("localStream", session.callId, stream);
  };
  _canTrickle = new WeakSet();
  canTrickle_fn = function(session) {
    return session.hasReceivedSdp && session.localSdpUnsent === 0 && !session.closed;
  };
  _localSdpSent = new WeakSet();
  localSdpSent_fn = function(session) {
    session.localSdpUnsent--;
    if (__privateMethod(this, _canTrickle, canTrickle_fn).call(this, session))
      void __privateMethod(this, _flushLocalCandidates, flushLocalCandidates_fn).call(this, session);
  };
  _flushLocalCandidates = new WeakSet();
  flushLocalCandidates_fn = async function(session) {
    if (session.flushingLocal)
      return;
    session.flushingLocal = true;
    try {
      while (__privateMethod(this, _canTrickle, canTrickle_fn).call(this, session) && session.localCandidateQueue.length > 0) {
        const sig = session.localCandidateQueue.shift();
        try {
          await __privateMethod(this, _send, send_fn).call(this, session.peerId, { type: "candidate", candidates: [sig], callId: session.callId });
        } catch {
        }
      }
    } finally {
      session.flushingLocal = false;
    }
  };
  _drainRemoteCandidates = new WeakSet();
  drainRemoteCandidates_fn = async function(session) {
    if (!session.pc.remoteDescription)
      return;
    const queued = session.remoteCandidateQueue.splice(0);
    for (const init of queued) {
      await session.pc.addIceCandidate(init).catch((err) => __privateMethod(this, _log, log_fn).call(this, `addIceCandidate (drain) failed: ${err.message}`));
    }
  };
  _send = new WeakSet();
  send_fn = async function(peerId, signal) {
    var _a;
    try {
      const budget = (_a = __privateGet(this, _opts).maxSignalBytes) != null ? _a : CARRIER_MAX_INVITE_DATA_LEN;
      const fitted = fitSignalForInvite(signal, budget);
      if (fitted.shrunk)
        __privateMethod(this, _log, log_fn).call(this, `signal ${signal.type} shrunk to ${fitted.bytes}B (cap ${budget}B)`);
      await __privateGet(this, _opts).signaling.send(peerId, fitted.signal);
    } catch (err) {
      __privateMethod(this, _log, log_fn).call(this, `signal send failed (${signal.type} \u2192 ${peerId}): ${err.message}`);
      throw err;
    }
  };
  _sendByeSafe = new WeakSet();
  sendByeSafe_fn = async function(session, reason) {
    try {
      await __privateGet(this, _opts).signaling.send(session.peerId, { type: "bye", reason, callId: session.callId });
    } catch (err) {
      __privateMethod(this, _log, log_fn).call(this, `bye send failed: ${err.message}`);
    }
  };
  _cleanup = new WeakSet();
  cleanup_fn = function(session, reason, endedReason) {
    var _a, _b;
    if (session.closed)
      return;
    session.closed = true;
    __privateMethod(this, _clearRingTimer, clearRingTimer_fn).call(this, session);
    __privateMethod(this, _rememberEnded, rememberEnded_fn).call(this, session.callId);
    if (session.restartTimer) {
      clearTimeout(session.restartTimer);
      session.restartTimer = void 0;
    }
    clearTimeout(session.mediaLossTimer);
    session.mediaLossTimer = void 0;
    try {
      session.pc.onicecandidate = null;
      session.pc.ontrack = null;
      session.pc.oniceconnectionstatechange = null;
      session.pc.close();
    } catch {
    }
    for (const track of (_b = (_a = session.localStream) == null ? void 0 : _a.getTracks()) != null ? _b : []) {
      try {
        track.stop();
      } catch {
      }
    }
    __privateGet(this, _sessions).delete(__privateMethod(this, _normId, normId_fn).call(this, session.callId));
    if (session.state !== "ended" && session.state !== "failed") {
      session.state = endedReason === "failed" ? "failed" : "ended";
    }
    this.emit("ended", session.callId, endedReason != null ? endedReason : reason);
  };
  _rememberEnded = new WeakSet();
  rememberEnded_fn = function(callId) {
    const now = Date.now();
    for (const [id, at] of __privateGet(this, _endedCalls)) {
      if (now - at > ENDED_CALL_MEMORY_MS)
        __privateGet(this, _endedCalls).delete(id);
    }
    __privateGet(this, _endedCalls).set(__privateMethod(this, _normId, normId_fn).call(this, callId), now);
  };
  _recentlyEnded = new WeakSet();
  recentlyEnded_fn = function(callId) {
    const at = __privateGet(this, _endedCalls).get(__privateMethod(this, _normId, normId_fn).call(this, callId));
    return at !== void 0 && Date.now() - at <= ENDED_CALL_MEMORY_MS;
  };
  _setState = new WeakSet();
  setState_fn = function(session, state) {
    if (session.state === state)
      return;
    session.state = state;
    this.emit("stateChanged", __privateGet(this, _toInfo).call(this, session), state);
  };
  _normId = new WeakSet();
  normId_fn = function(callId) {
    return callId.toLowerCase();
  };
  _toInfo = new WeakMap();
  _newCallId = new WeakSet();
  newCallId_fn = function() {
    if (__privateGet(this, _opts).generateCallId)
      return __privateGet(this, _opts).generateCallId();
    const c = globalThis.crypto;
    if (c && typeof c.randomUUID === "function")
      return c.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ch) => {
      const r = Math.floor(Math.random() * 16);
      const v = ch === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  };
  _log = new WeakSet();
  log_fn = function(msg) {
    var _a, _b;
    (_b = (_a = __privateGet(this, _opts)).logger) == null ? void 0 : _b.call(_a, `[peer-webrtc] ${msg}`);
  };
  function sameIceServers(a, b) {
    const key = (s) => {
      var _a;
      return `${[s.urls].flat().join(",")}|${(_a = s.username) != null ? _a : ""}`;
    };
    if (a.length !== b.length)
      return false;
    return a.every((s, i) => key(s) === key(b[i]));
  }

  // node_modules/@decentnetwork/peer-webrtc/node_modules/@decentnetwork/rendezvous-protocol/src/index.js
  var IDENTITY_METHODS = Object.freeze([
    "carrier-x25519",
    "ethereum-eip191",
    "solana-ed25519"
  ]);
  var PROOF_TYPES = Object.freeze([
    "carrier-x25519-hmac-sha256",
    "ethereum-eip191",
    "solana-ed25519"
  ]);
  var SIGNAL_TYPES = Object.freeze([
    "call.ringing",
    "call.accept",
    "call.reject",
    "call.cancel",
    "call.connected",
    "call.hangup",
    "webrtc.offer",
    "webrtc.answer",
    "webrtc.candidate",
    "webrtc.ice-restart"
  ]);
  var SIGNAL_ENCODINGS = Object.freeze(["json", "ciphertext.base64url"]);
  var SAFE_FIELD = /^[^\r\n\0]{1,512}$/;
  var CARRIER_ID = /^[1-9A-HJ-NP-Za-km-z]{32,52}$/;
  var ETHEREUM_ID = /^eip155:([1-9][0-9]*):(0x[0-9a-fA-F]{40})$/;
  var TURN_NONCE = /^[A-Za-z0-9_-]{16,128}$/;
  var SOLANA_ID = /^solana:([A-Za-z0-9_-]{1,32}):([1-9A-HJ-NP-Za-km-z]{32,50})$/;
  function safeField(value, name) {
    if (typeof value !== "string" || !SAFE_FIELD.test(value))
      throw new TypeError(`${name} is invalid`);
    return value;
  }
  function validateIdentity(identity) {
    if (!identity || typeof identity !== "object" || Array.isArray(identity))
      throw new TypeError("identity must be an object");
    const keys = Object.keys(identity).sort();
    if (keys.length !== 2 || keys[0] !== "id" || keys[1] !== "method")
      throw new TypeError("identity fields are invalid");
    if (!IDENTITY_METHODS.includes(identity.method))
      throw new TypeError("identity method is unsupported");
    safeField(identity.id, "identity id");
    if (identity.method === "carrier-x25519" && !CARRIER_ID.test(identity.id))
      throw new TypeError("Carrier userid is invalid");
    if (identity.method === "ethereum-eip191" && !ETHEREUM_ID.test(identity.id))
      throw new TypeError("Ethereum account id is invalid");
    if (identity.method === "solana-ed25519" && !SOLANA_ID.test(identity.id))
      throw new TypeError("Solana account id is invalid");
    return { method: identity.method, id: identity.id };
  }
  function canonicalIdentity(identity) {
    const checked = validateIdentity(identity);
    return `${checked.method}:${checked.id}`;
  }
  var TURN_AUTH_DOMAIN = "RSP-TURN/1";
  function turnCredentialSigningText({ nodeUrl, carrierServerKey = "", self, timestamp, nonce }) {
    if (!Number.isSafeInteger(timestamp) || timestamp < 0)
      throw new TypeError("timestamp is invalid");
    if (typeof nonce !== "string" || !TURN_NONCE.test(nonce))
      throw new TypeError("nonce is invalid");
    return [
      TURN_AUTH_DOMAIN,
      safeField(nodeUrl, "nodeUrl"),
      carrierServerKey === "" ? "" : safeField(carrierServerKey, "carrierServerKey"),
      canonicalIdentity(self),
      String(timestamp),
      nonce
    ].join("\n");
  }

  // node_modules/@decentnetwork/peer-webrtc/dist/turn.js
  var DEFAULT_MIN_VALIDITY_MS = 10 * 6e4;
  var DEFAULT_TIMEOUT_MS = 8e3;
  var DEFAULT_RETRY_AFTER_FAILURE_MS = 6e4;
  var ROUTE = "/v1/turn-credentials";
  var TurnFetchError = class extends Error {
    constructor(reason, status, code, serverTime, retryAfterMs) {
      super(reason);
      __publicField(this, "reason");
      __publicField(this, "status");
      __publicField(this, "code");
      __publicField(this, "serverTime");
      __publicField(this, "retryAfterMs");
      this.reason = reason;
      this.status = status;
      this.code = code;
      this.serverTime = serverTime;
      this.retryAfterMs = retryAfterMs;
    }
  };
  var _opts2, _base, _minValidityMs, _cached, _inflight, _clockOffsetMs, _quietUntil, _mint, mint_fn, _discover, discover_fn, _post, post_fn, _fetch, fetch_fn, _now, now_fn, _log2, log_fn2;
  var RspTurnCredentials = class {
    constructor(opts) {
      __privateAdd(this, _mint);
      __privateAdd(this, _discover);
      __privateAdd(this, _post);
      __privateAdd(this, _fetch);
      __privateAdd(this, _now);
      __privateAdd(this, _log2);
      __privateAdd(this, _opts2, void 0);
      __privateAdd(this, _base, void 0);
      __privateAdd(this, _minValidityMs, void 0);
      __privateAdd(this, _cached, void 0);
      __privateAdd(this, _inflight, void 0);
      /** Our clock minus the node's, learned from a 401 invalid_timestamp. */
      __privateAdd(this, _clockOffsetMs, 0);
      /** No new fetch before this time (after a failure). */
      __privateAdd(this, _quietUntil, 0);
      var _a;
      if (!(opts == null ? void 0 : opts.nodeUrl))
        throw new TypeError("nodeUrl is required");
      if (!opts.signer || typeof opts.signer.descriptor !== "function" || typeof opts.signer.signChallenge !== "function") {
        throw new TypeError("signer must implement descriptor() and signChallenge()");
      }
      __privateSet(this, _opts2, opts);
      __privateSet(this, _base, opts.nodeUrl.replace(/\/+$/, ""));
      __privateSet(this, _minValidityMs, (_a = opts.minValidityMs) != null ? _a : DEFAULT_MIN_VALIDITY_MS);
    }
    currentIceServers() {
      var _a;
      const c = __privateGet(this, _cached);
      if (c && c.expiresAt - __privateMethod(this, _now, now_fn).call(this) >= __privateGet(this, _minValidityMs))
        return [toIceServer(c)];
      return [...(_a = __privateGet(this, _opts2).fallback) != null ? _a : []];
    }
    async iceServers() {
      var _a, _b, _c;
      const c = __privateGet(this, _cached);
      if (c && c.expiresAt - __privateMethod(this, _now, now_fn).call(this) >= __privateGet(this, _minValidityMs))
        return [toIceServer(c)];
      if (__privateMethod(this, _now, now_fn).call(this) < __privateGet(this, _quietUntil))
        return [...(_a = __privateGet(this, _opts2).fallback) != null ? _a : []];
      (_b = __privateGet(this, _inflight)) != null ? _b : __privateSet(this, _inflight, __privateMethod(this, _mint, mint_fn).call(this).then((fresh) => {
        __privateSet(this, _cached, fresh);
        return fresh;
      }, (err) => {
        var _a2, _b2, _c2, _d;
        const reason = err instanceof TurnFetchError ? err.reason : `error: ${(_a2 = err == null ? void 0 : err.name) != null ? _a2 : "Error"}`;
        const backoff = Math.max((_b2 = __privateGet(this, _opts2).retryAfterFailureMs) != null ? _b2 : DEFAULT_RETRY_AFTER_FAILURE_MS, err instanceof TurnFetchError ? (_c2 = err.retryAfterMs) != null ? _c2 : 0 : 0);
        __privateSet(this, _quietUntil, __privateMethod(this, _now, now_fn).call(this) + backoff);
        const fallback = (_d = __privateGet(this, _opts2).fallback) != null ? _d : [];
        __privateMethod(this, _log2, log_fn2).call(this, `TURN credentials from ${__privateGet(this, _base)} unavailable (${reason}); ${fallback.length ? "using the static TURN entry" : "no fallback configured"}, next try in ${Math.round(backoff / 1e3)} s`);
        throw err;
      }).finally(() => {
        __privateSet(this, _inflight, void 0);
      }));
      try {
        return [toIceServer(await __privateGet(this, _inflight))];
      } catch {
        return [...(_c = __privateGet(this, _opts2).fallback) != null ? _c : []];
      }
    }
    /** Forget the cached credential (e.g. after the user switched identity). */
    clear() {
      __privateSet(this, _cached, void 0);
      __privateSet(this, _quietUntil, 0);
    }
  };
  _opts2 = new WeakMap();
  _base = new WeakMap();
  _minValidityMs = new WeakMap();
  _cached = new WeakMap();
  _inflight = new WeakMap();
  _clockOffsetMs = new WeakMap();
  _quietUntil = new WeakMap();
  _mint = new WeakSet();
  mint_fn = async function() {
    let staleRetried = false;
    let clockRetried = false;
    for (; ; ) {
      const discovery = await __privateMethod(this, _discover, discover_fn).call(this);
      try {
        return await __privateMethod(this, _post, post_fn).call(this, discovery);
      } catch (err) {
        if (!(err instanceof TurnFetchError))
          throw err;
        if (err.code === "stale_server_key" && !staleRetried) {
          staleRetried = true;
          continue;
        }
        if (err.code === "invalid_timestamp" && !clockRetried && err.serverTime !== void 0) {
          clockRetried = true;
          __privateSet(this, _clockOffsetMs, __privateMethod(this, _now, now_fn).call(this) - err.serverTime);
          __privateMethod(this, _log2, log_fn2).call(this, `TURN credentials: local clock off by ${Math.round(__privateGet(this, _clockOffsetMs) / 1e3)} s; retrying with the node's time`);
          continue;
        }
        throw err;
      }
    }
  };
  _discover = new WeakSet();
  discover_fn = async function() {
    const res = await __privateMethod(this, _fetch, fetch_fn).call(this, `${__privateGet(this, _base)}${ROUTE}`, { method: "GET", headers: { accept: "application/json" } });
    const body = await readJson(res);
    if (!res.ok)
      throw httpError("GET", res, body);
    const nodeUrl = body == null ? void 0 : body.nodeUrl;
    const carrierServerKey = body == null ? void 0 : body.carrierServerKey;
    if (typeof nodeUrl !== "string" || !nodeUrl || typeof carrierServerKey !== "string") {
      throw new TurnFetchError("GET: discovery reply is malformed", res.status);
    }
    return { nodeUrl, carrierServerKey };
  };
  _post = new WeakSet();
  post_fn = async function(discovery) {
    var _a, _b, _c;
    const self = await __privateGet(this, _opts2).signer.descriptor();
    const carrierServerKey = self.method === "carrier-x25519" ? discovery.carrierServerKey : "";
    const timestamp = __privateMethod(this, _now, now_fn).call(this) - __privateGet(this, _clockOffsetMs);
    const nonce = (_c = (_b = (_a = __privateGet(this, _opts2)).nonce) == null ? void 0 : _b.call(_a)) != null ? _c : randomNonce();
    const message = turnCredentialSigningText({ nodeUrl: discovery.nodeUrl, carrierServerKey, self, timestamp, nonce });
    const signed = await __privateGet(this, _opts2).signer.signChallenge({
      message,
      bytes: new TextEncoder().encode(message),
      hello: { carrierServerKey: discovery.carrierServerKey, nodeUrl: discovery.nodeUrl },
      request: { route: ROUTE }
    });
    if (!signed || typeof signed.type !== "string")
      throw new TurnFetchError("signer returned no proof");
    const proof = { type: signed.type, value: proofValue(signed.value) };
    const body = { self, timestamp, nonce, proof };
    if (carrierServerKey)
      body.carrierServerKey = carrierServerKey;
    const res = await __privateMethod(this, _fetch, fetch_fn).call(this, `${__privateGet(this, _base)}${ROUTE}`, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(body)
    });
    const reply = await readJson(res);
    if (!res.ok)
      throw httpError("POST", res, reply);
    const { urls, username, credential, expiresAt } = reply != null ? reply : {};
    if (!Array.isArray(urls) || urls.length === 0 || !urls.every((u) => typeof u === "string") || typeof username !== "string" || typeof credential !== "string" || !Number.isSafeInteger(expiresAt)) {
      throw new TurnFetchError("POST: credential reply is malformed", res.status);
    }
    return { urls: [...urls], username, credential, expiresAt };
  };
  _fetch = new WeakSet();
  fetch_fn = async function(url, init) {
    var _a, _b, _c;
    const f = (_a = __privateGet(this, _opts2).fetch) != null ? _a : globalThis.fetch;
    if (typeof f !== "function")
      throw new TurnFetchError("no fetch available");
    const controller = typeof AbortController === "function" ? new AbortController() : void 0;
    const timer = controller ? setTimeout(() => controller.abort(), (_b = __privateGet(this, _opts2).timeoutMs) != null ? _b : DEFAULT_TIMEOUT_MS) : void 0;
    try {
      return await f(url, { ...init, signal: controller == null ? void 0 : controller.signal, cache: "no-store" });
    } catch (err) {
      const aborted = (err == null ? void 0 : err.name) === "AbortError";
      throw new TurnFetchError(`${init.method}: ${aborted ? "timed out" : `network error (${(_c = err == null ? void 0 : err.name) != null ? _c : "Error"})`}`);
    } finally {
      if (timer)
        clearTimeout(timer);
    }
  };
  _now = new WeakSet();
  now_fn = function() {
    var _a, _b, _c;
    return (_c = (_b = (_a = __privateGet(this, _opts2)).now) == null ? void 0 : _b.call(_a)) != null ? _c : Date.now();
  };
  _log2 = new WeakSet();
  log_fn2 = function(message) {
    var _a, _b;
    try {
      (_b = (_a = __privateGet(this, _opts2)).log) == null ? void 0 : _b.call(_a, message);
    } catch {
    }
  };
  function toIceServer(c) {
    return { urls: [...c.urls], username: c.username, credential: c.credential };
  }
  async function readJson(res) {
    try {
      return await res.json();
    } catch {
      return void 0;
    }
  }
  function httpError(method, res, body) {
    var _a, _b, _c, _d, _e;
    const code = typeof ((_a = body == null ? void 0 : body.error) == null ? void 0 : _a.code) === "string" ? body.error.code : void 0;
    const header = Number((_c = (_b = res.headers) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b, "x-server-time"));
    const retryAfter = Number((_e = (_d = res.headers) == null ? void 0 : _d.get) == null ? void 0 : _e.call(_d, "retry-after"));
    return new TurnFetchError(`${method}: HTTP ${res.status}${code ? ` ${code}` : ""}`, res.status, code, Number.isSafeInteger(header) && header > 0 ? header : void 0, Number.isFinite(retryAfter) && retryAfter > 0 ? Math.min(retryAfter, 3600) * 1e3 : void 0);
  }
  function proofValue(value) {
    if (typeof value === "string")
      return value;
    if (value instanceof Uint8Array)
      return base64url(value);
    throw new TurnFetchError("signer proof must be a string or Uint8Array");
  }
  function randomNonce() {
    const bytes = new Uint8Array(24);
    globalThis.crypto.getRandomValues(bytes);
    return base64url(bytes);
  }
  function base64url(bytes) {
    let s = "";
    for (const b of bytes)
      s += String.fromCharCode(b);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  // node_modules/@decentnetwork/peer-webrtc/dist/signaling/broadcast.js
  var _selfId, _channel, _handler;
  var BroadcastChannelSignaling = class {
    constructor(selfId, channelName = "peer-webrtc-demo") {
      __privateAdd(this, _selfId, void 0);
      __privateAdd(this, _channel, void 0);
      __privateAdd(this, _handler, void 0);
      __privateSet(this, _selfId, selfId);
      __privateSet(this, _channel, new BroadcastChannel(channelName));
      __privateGet(this, _channel).onmessage = (ev) => {
        var _a;
        const msg = ev.data;
        if (!msg || msg.to !== __privateGet(this, _selfId) || msg.from === __privateGet(this, _selfId))
          return;
        (_a = __privateGet(this, _handler)) == null ? void 0 : _a.call(this, msg.from, msg.signal);
      };
    }
    send(peerId, signal) {
      const env = { from: __privateGet(this, _selfId), to: peerId, signal };
      __privateGet(this, _channel).postMessage(env);
    }
    onSignal(handler) {
      __privateSet(this, _handler, handler);
    }
    close() {
      __privateGet(this, _channel).close();
    }
  };
  _selfId = new WeakMap();
  _channel = new WeakMap();
  _handler = new WeakMap();

  // node_modules/@decentnetwork/peer-webrtc/dist/guard.js
  function decodeSignalBytesGuard(input) {
    try {
      return decodeSignal(input);
    } catch {
      return void 0;
    }
  }

  // node_modules/@decentnetwork/peer-webrtc/dist/signaling/carrier.js
  var DEFAULT_EXT = "carrier";
  var _peer, _ext;
  var CarrierSignaling = class {
    constructor(peer, opts = {}) {
      __privateAdd(this, _peer, void 0);
      __privateAdd(this, _ext, void 0);
      var _a;
      __privateSet(this, _peer, peer);
      __privateSet(this, _ext, (_a = opts.ext) != null ? _a : DEFAULT_EXT);
    }
    async send(peerId, signal) {
      await __privateGet(this, _peer).sendInvite(peerId, encodeSignalBytes(signal), { ext: __privateGet(this, _ext) });
    }
    onSignal(handler) {
      __privateGet(this, _peer).onInvite((evt) => {
        if (evt.ext !== void 0 && evt.ext !== __privateGet(this, _ext))
          return;
        if (!looksLikeSignal(evt.data))
          return;
        const signal = decodeSignalBytesGuard(evt.data);
        if (signal)
          handler(evt.pubkey, signal);
      });
    }
  };
  _peer = new WeakMap();
  _ext = new WeakMap();

  // node_modules/@decentnetwork/peer-webrtc/dist/signaling/socketio.js
  var _socket, _userId, _handler2, _rooms, _pending, _lastOffer, _wired, _roomKey, roomKey_fn, _ensureRoom, ensureRoom_fn, _emitMessage, emitMessage_fn, _wire, wire_fn;
  var SocketIoSignaling = class {
    constructor(socket, opts) {
      /** The socket.io ROOM key. The native Beagle apps join the room with the
       *  call's `UUID.uuidString`, which Swift renders UPPERCASE — so a lowercase
       *  `crypto.randomUUID()` from JS would land us in a DIFFERENT room and we'd
       *  never receive the peer's answer/candidates. Canonicalize to UPPERCASE to
       *  share the native peer's room. (The RtcSignal payload callId stays as-is;
       *  the CallEngine matches it case-insensitively.) */
      __privateAdd(this, _roomKey);
      __privateAdd(this, _ensureRoom);
      __privateAdd(this, _emitMessage);
      __privateAdd(this, _wire);
      __privateAdd(this, _socket, void 0);
      __privateAdd(this, _userId, void 0);
      __privateAdd(this, _handler2, void 0);
      /** Rooms we've asked to join (callId -> confirmed self-membership). */
      __privateAdd(this, _rooms, /* @__PURE__ */ new Map());
      /** Signals queued per room until the server confirms our membership. */
      __privateAdd(this, _pending, /* @__PURE__ */ new Map());
      /** Last offer per callId, RE-SENT when the peer joins the room — the callee
       *  (woken by a push) joins seconds after we sent the offer, and socket.io does
       *  NOT replay, so without this the peer never sees the offer and never
       *  answers (offline call stuck at "connecting"). */
      __privateAdd(this, _lastOffer, /* @__PURE__ */ new Map());
      /** The remote peer id per room, learned from inbound messages so a queued
       *  peer-greeting can be addressed. */
      __privateAdd(this, _wired, false);
      __privateSet(this, _socket, socket);
      __privateSet(this, _userId, opts.userId);
    }
    onSignal(handler) {
      __privateSet(this, _handler2, handler);
      __privateMethod(this, _wire, wire_fn).call(this);
    }
    /**
     * Deliver a signal to `peerId`. Joins the call's room (keyed by
     * `signal.callId`) on first use and queues until the server confirms
     * membership, then emits — mirroring the iOS provider, which queues until
     * `connectToRoom`.
     */
    send(peerId, signal) {
      var _a;
      __privateMethod(this, _wire, wire_fn).call(this);
      const callId = signal.callId;
      if (!callId) {
        __privateMethod(this, _emitMessage, emitMessage_fn).call(this, signal);
        return;
      }
      if (signal.type === "offer")
        __privateGet(this, _lastOffer).set(callId, signal);
      const room = __privateMethod(this, _ensureRoom, ensureRoom_fn).call(this, callId);
      if (room.joined) {
        __privateMethod(this, _emitMessage, emitMessage_fn).call(this, signal);
      } else {
        const q = (_a = __privateGet(this, _pending).get(callId)) != null ? _a : [];
        q.push(signal);
        __privateGet(this, _pending).set(callId, q);
      }
    }
    /**
     * Explicitly join the room for an INCOMING call (e.g. after a push
     * notification delivered the `callId`), so inbound signals for it are
     * received. Safe to call more than once.
     */
    joinCall(callId) {
      __privateMethod(this, _wire, wire_fn).call(this);
      __privateMethod(this, _ensureRoom, ensureRoom_fn).call(this, callId);
    }
    /** Leave a call's room (best-effort) and forget its queued state. */
    leaveCall(callId) {
      __privateGet(this, _rooms).delete(callId);
      __privateGet(this, _pending).delete(callId);
      __privateGet(this, _lastOffer).delete(callId);
      __privateGet(this, _socket).emit("leave-channel", { channel: __privateMethod(this, _roomKey, roomKey_fn).call(this, callId), sender: __privateGet(this, _userId) });
    }
  };
  _socket = new WeakMap();
  _userId = new WeakMap();
  _handler2 = new WeakMap();
  _rooms = new WeakMap();
  _pending = new WeakMap();
  _lastOffer = new WeakMap();
  _wired = new WeakMap();
  _roomKey = new WeakSet();
  roomKey_fn = function(callId) {
    return callId.toUpperCase();
  };
  _ensureRoom = new WeakSet();
  ensureRoom_fn = function(callId) {
    let room = __privateGet(this, _rooms).get(callId);
    if (!room) {
      room = { joined: false };
      __privateGet(this, _rooms).set(callId, room);
      __privateGet(this, _socket).emit("new-channel", { channel: __privateMethod(this, _roomKey, roomKey_fn).call(this, callId), sender: __privateGet(this, _userId) });
    }
    return room;
  };
  _emitMessage = new WeakSet();
  emitMessage_fn = function(signal) {
    __privateGet(this, _socket).emit("message", { data: encodeSignal(signal), sender: __privateGet(this, _userId) });
  };
  _wire = new WeakSet();
  wire_fn = function() {
    if (__privateGet(this, _wired))
      return;
    __privateSet(this, _wired, true);
    __privateGet(this, _socket).on("message", (...args) => {
      var _a;
      const payload = firstObject(args);
      if (!(payload == null ? void 0 : payload.data) || !payload.sender)
        return;
      if (payload.sender === __privateGet(this, _userId))
        return;
      const signal = decodeSignalBytesGuard(payload.data);
      if (signal)
        (_a = __privateGet(this, _handler2)) == null ? void 0 : _a.call(this, payload.sender, signal);
    });
    __privateGet(this, _socket).on("connectToRoom", (...args) => {
      const payload = firstObject(args);
      const sender = payload == null ? void 0 : payload.sender;
      if (!sender)
        return;
      if (sender === __privateGet(this, _userId)) {
        for (const [callId, room] of __privateGet(this, _rooms)) {
          room.joined = true;
          const q = __privateGet(this, _pending).get(callId);
          if (q && q.length) {
            for (const sig of q)
              __privateMethod(this, _emitMessage, emitMessage_fn).call(this, sig);
            __privateGet(this, _pending).delete(callId);
          }
        }
      } else {
        for (const callId of __privateGet(this, _rooms).keys()) {
          __privateMethod(this, _emitMessage, emitMessage_fn).call(this, { type: "event", callId, event: "online" });
          const offer = __privateGet(this, _lastOffer).get(callId);
          if (offer)
            __privateMethod(this, _emitMessage, emitMessage_fn).call(this, offer);
        }
      }
    });
    __privateGet(this, _socket).on("disconnectToRoom", (...args) => {
      const payload = firstObject(args);
      const sender = payload == null ? void 0 : payload.sender;
      if (sender && sender === __privateGet(this, _userId)) {
        for (const room of __privateGet(this, _rooms).values())
          room.joined = false;
      }
    });
  };
  function firstObject(args) {
    const first = args[0];
    return first && typeof first === "object" ? first : void 0;
  }

  // node_modules/@decentnetwork/peer-webrtc/dist/signaling/push.js
  var DEFAULT_ENDPOINTS = [
    "https://pushapi.beagle.chat/push-api/push-message",
    "https://www.callpass.cn/push-api/push-message",
    "https://tokyo.fi.chat:3004/push-api/push-message"
  ];
  var _appKey, _appName, _endpoints, _fetch2, _gateway, _env, _sendDirect, sendDirect_fn;
  var BeaglePushClient = class {
    constructor(opts) {
      __privateAdd(this, _sendDirect);
      __privateAdd(this, _appKey, void 0);
      __privateAdd(this, _appName, void 0);
      __privateAdd(this, _endpoints, void 0);
      __privateAdd(this, _fetch2, void 0);
      __privateAdd(this, _gateway, void 0);
      __privateAdd(this, _env, void 0);
      var _a, _b, _c;
      if (!opts.appKey && !opts.gateway)
        throw new Error("BeaglePushClient: pass a gateway, an appKey, or both");
      __privateSet(this, _appKey, opts.appKey || void 0);
      __privateSet(this, _appName, opts.appName);
      __privateSet(this, _endpoints, ((_a = opts.endpoints) == null ? void 0 : _a.length) ? opts.endpoints : DEFAULT_ENDPOINTS);
      __privateSet(this, _gateway, opts.gateway);
      __privateSet(this, _env, (_b = opts.env) != null ? _b : "prod");
      const f = (_c = opts.fetch) != null ? _c : globalThis.fetch;
      if (!f && __privateGet(this, _appKey))
        throw new Error("BeaglePushClient: no fetch available \u2014 pass opts.fetch");
      __privateSet(this, _fetch2, f);
    }
    /**
     * Ring an offline peer. `calleeUserId` is the destination (their Carrier user
     * id); the payload describes the call. Resolves `true` on success.
     */
    async sendCallPush(calleeUserId, payload) {
      return (await this.sendCall(calleeUserId, payload)).ok;
    }
    /**
     * {@link sendCallPush} with the route it took. Through the gateway first when
     * there is one: an answer from it is final (ok or not); only "not answered"
     * (connect error, timeout, 502/503/504) falls back to the direct call, and
     * only when this client has an appKey.
     */
    async sendCall(calleeUserId, payload) {
      var _a;
      let gateway;
      if (__privateGet(this, _gateway)) {
        try {
          gateway = await __privateGet(this, _gateway).send("call", [
            ["env", __privateGet(this, _env)],
            ["account", calleeUserId],
            ["payload", JSON.stringify(payload)],
            ["appName", __privateGet(this, _appName)]
          ]);
        } catch (err) {
          gateway = { answered: false, reason: (_a = err == null ? void 0 : err.message) != null ? _a : String(err) };
        }
        if (gateway.answered)
          return { ok: gateway.ok, via: "gateway", gateway };
      }
      if (!__privateGet(this, _appKey))
        return { ok: false, via: "none", ...gateway ? { gateway } : {} };
      const ok = await __privateMethod(this, _sendDirect, sendDirect_fn).call(this, calleeUserId, payload, __privateGet(this, _appKey));
      return { ok, via: ok ? "direct" : "none", ...gateway ? { gateway } : {} };
    }
    /** Convenience: ring `calleeUserId` for a call over `channel`. */
    ring(calleeUserId, args) {
      var _a;
      return this.sendCallPush(calleeUserId, {
        userId: args.callerUserId,
        hasVideo: args.hasVideo ? "true" : "false",
        callId: args.callId,
        callName: args.callerName,
        action: "call",
        channel: (_a = args.channel) != null ? _a : "socketio"
      });
    }
    /** Convenience: cancel a ring (e.g. caller hung up before answer). */
    cancel(calleeUserId, args) {
      var _a;
      return this.sendCallPush(calleeUserId, {
        userId: args.callerUserId,
        hasVideo: args.hasVideo ? "true" : "false",
        callId: args.callId,
        callName: args.callerName,
        action: "decline",
        channel: (_a = args.channel) != null ? _a : "socketio"
      });
    }
  };
  _appKey = new WeakMap();
  _appName = new WeakMap();
  _endpoints = new WeakMap();
  _fetch2 = new WeakMap();
  _gateway = new WeakMap();
  _env = new WeakMap();
  _sendDirect = new WeakSet();
  sendDirect_fn = async function(calleeUserId, payload, appKey) {
    var _a;
    const fetchFn = __privateGet(this, _fetch2);
    if (!fetchFn)
      return false;
    const params = new URLSearchParams({
      account: calleeUserId,
      payload: JSON.stringify(payload),
      appKey,
      appName: __privateGet(this, _appName)
    }).toString();
    for (const endpoint of __privateGet(this, _endpoints)) {
      try {
        const url = endpoint + (endpoint.includes("?") ? "&" : "?") + params;
        const res = await fetchFn(url, { method: "POST" });
        if (!res.ok)
          continue;
        const json = await res.json().catch(() => ({}));
        const code = json.code;
        const ok = code === void 0 || code === 0 || code === "0" || ((_a = json.data) == null ? void 0 : _a.success) === true;
        if (ok)
          return true;
      } catch {
      }
    }
    return false;
  };

  // src/ui/peer-webrtc-entry.js
  var isTurn = (s) => {
    var _a, _b;
    return [].concat((_b = (_a = s == null ? void 0 : s.urls) != null ? _a : s == null ? void 0 : s.url) != null ? _b : []).some((u) => /^turns?:/i.test(String(u)));
  };
  var CallEngine2 = class extends CallEngine {
    constructor(opts) {
      const turn = globalThis.__beagleTurnServers;
      super(turn && opts && !opts.turnServers ? { ...opts, iceServers: (opts.iceServers || []).filter((s) => !isTurn(s)), turnServers: turn } : opts);
    }
  };
  return __toCommonJS(peer_webrtc_entry_exports);
})();
