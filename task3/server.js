const http = require('node:http');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const startedAt = Date.now();
const port = Number(process.env.PORT || 3000);
const html = readFileSync(path.join(__dirname, 'index.html'));
const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    const body = JSON.stringify({ status: 'UP', service: 'cloud-health-monitor', checkedAt: new Date().toISOString(), uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000) });
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
    return res.end(body);
  }
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(html);
  }
  res.writeHead(404, { 'content-type': 'application/json' }); res.end(JSON.stringify({ error: 'Not found' }));
});
server.listen(port, '0.0.0.0', () => console.log(`Health monitor listening on ${port}`));
