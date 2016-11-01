var httpServer = require('http-server');
var server = httpServer.createServer();
server.listen(8080);
process.send('listening');
