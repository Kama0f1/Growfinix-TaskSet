# Pulse Health Monitor

Pulse is a small Node.js web application with a status page and a `/health` endpoint. The status page checks the endpoint and displays whether the service is responding.

## Run locally

You need Node.js installed. From this folder, run:

```sh
npm start
```

Then open `http://localhost:3000`. The JSON health response is available at `http://localhost:3000/health`.

## Deploy with Railway

Connect the GitHub repository to a Railway service and set the service root directory to `/task3`. Railway can start the app with `npm start`. Generate a public domain in the service settings, then open that domain and add `/health` to view the JSON response.

## Notes

The page checks the service when it loads or when **Check Now** is pressed. It is a basic health check; it does not run scheduled checks or send alerts.
