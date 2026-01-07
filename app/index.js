const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>🚀 CI/CD Pipeline with Docker, Jenkins & Kubernetes</h1>');
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

