const http = require('http');

// Define men products
const menProducts = [
    { id: 1, name: 'Men Product 1' },
    { id: 2, name: 'Men Product 2' },
    { id: 3, name: 'Men Product 3' },
    { id: 4, name: 'Men Product 4' },
    { id: 5, name: 'Men Product 5' },
    { id: 6, name: 'Men Product 6' },
    { id: 7, name: 'Men Product 7' },
    { id: 8, name: 'Men Product 8' },
    { id: 9, name: 'Men Product 9' },
    { id: 10, name: 'Men Product 10' },
];

const womenProducts = [
    { id: 1, name: 'Women Product 1' },
    { id: 2, name: 'Women Product 2' },
    { id: 3, name: 'Women Product 3' },
    { id: 4, name: 'Women Product 4' },
    { id: 5, name: 'Women Product 5' },
    { id: 6, name: 'Women Product 6' },
    { id: 7, name: 'Women Product 7' },
    { id: 8, name: 'Women Product 8' },
    { id: 9, name: 'Women Product 9' },
    { id: 10, name: 'Women Product 10' },
];

// Define men products
const server = http.createServer((req, res) => {
    // Handle different routes based on the requested URL
    if (req.url === '/') {
        // Handle the root route '/'
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url === '/men') {
        // Handle the '/men' route
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts));
    } else {
        // Handle any other route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});