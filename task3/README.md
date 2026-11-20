# Project 3 — Pulse Cloud Health Monitor

A small Node.js service serves a status page and a `/health` endpoint. It listens on Railway's injected `PORT` and binds to `0.0.0.0`. The page checks the endpoint and displays the response status, check time, and process uptime.

## Run locally

```powershell
npm start
```

Open `http://localhost:3000`. Open `http://localhost:3000/health` to see the JSON health response.

## Deploy on Railway

1. Put this folder in a GitHub repository or use Railway's deploy-from-folder flow.
2. Create a Railway project and deploy this Node.js service. Set the service root directory to `task3` if importing the Growfinix repository.
3. Generate a public domain in the service settings.
4. Open the generated URL and `/health`. Capture both the dashboard and the JSON response.

## Explain it simply

The service has a health endpoint that returns a small JSON response. Railway starts the Node.js process and provides the port. The status page asks the endpoint whether the service is alive. This is a basic health check; it does not prove high availability or continuous monitoring. An external monitor could check `/health` on a schedule and send alerts.

## Evidence

Save screenshots of the Railway deployment/service status, the live dashboard, and `/health`. Only claim actual uptime or response-time measurements if you record the method and values yourself.
# Plan and cost

The current Railway Free plan is $0 and does not require a credit card. It includes $1 of monthly resource usage; the service can sleep when idle, and it stops if the included resource balance is exhausted. Keep the service on the Free plan and do not enter payment details. This small demo should be suitable for a short classroom demonstration, but check the current dashboard before deployment.
