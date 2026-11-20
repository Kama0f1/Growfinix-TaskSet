# Project 2 — Serverless Study Tip API

A tiny Vercel Function returns one study tip as JSON. The page calls `GET /api/tip` and displays the response. No database, API key, or third-party service is used.

## Deploy

Import this folder as its own Vercel project. It contains a static page and the function in `api/tip.js`; Vercel detects the function route. Deploy, open the site, and press **Get a study tip**. Also open `<your-deployment-url>/api/tip` to see the raw JSON response.

## Explain it simply

A browser request reaches `/api/tip`. The cloud platform starts or reuses a small function, the function creates a JSON response, and the request ends. The function does not keep a user session or save data between requests. This is a serverless computing example: the platform manages the server runtime.

## Evidence

Capture the page after receiving a tip and the raw JSON endpoint. Report response time only if you measure it and state how you measured it.
