const http = require('http');
const app = require('./app');
const server = http.createServer(app);
server.listen(3002, () => {
    console.log('captain service is running on port 3002');
});