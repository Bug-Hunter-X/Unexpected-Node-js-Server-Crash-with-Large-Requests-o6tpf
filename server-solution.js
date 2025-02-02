const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    let body = '';
    request.on('data', chunk => {
      body += chunk;
    });
    request.on('end', () => {
      try {
        const data = JSON.parse(body);
        // Process the request data
        response.writeHead(200);
        response.end(JSON.stringify({ message: 'Request processed successfully' }));
      } catch (error) {
        console.error('Error parsing JSON:', error);
        response.writeHead(400, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    request.on('error', (err) => {
      console.error('Request error:', err);
      response.writeHead(500, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Internal server error' }));
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});