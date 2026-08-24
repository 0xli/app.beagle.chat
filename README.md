# app.beagle.chat

Built output of **beagle-web** — Beagle Chat running entirely in a browser tab.
No install, no account: your Carrier keypair is generated in your browser,
stored there, and never sent to a server.

This repo holds only the built artifact (published to GitHub Pages).
Source lives in `0xli/decentlan-api`.

## What runs where

| Part | Where |
|---|---|
| UI + Carrier peer (identity, DHT announce, sessions, files) | **your browser** |
| WebSocket→TCP bridge (`wss://im.beagle.chat/relay-ws`) | a server, relaying **ciphertext only** |

A browser cannot open the raw UDP/TCP sockets Carrier needs, so the bridge pipes
the encrypted stream to a Carrier relay. Messages are end-to-end encrypted
between peers, so the bridge cannot read them.

## Rebuild

```bash
# in the beagle-web source tree
BRIDGE_URL="wss://im.beagle.chat/relay-ws" node scripts/build.mjs
rsync -a --delete public/ /path/to/this/repo/   # keep CNAME + .nojekyll
```
