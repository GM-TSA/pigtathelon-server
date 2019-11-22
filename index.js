var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer();
server.listen(3000, function() { });

// create websocket server on same connection as httpServer
wss = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wss.on('request', function(request) {
    var socket = request.accept(null, request.origin);

    console.log("User connected");
    socket.sendUTF("Epic");

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    socket.on('message', function(message) {
        if (message.type === 'utf8') {
            // process WebSocket message
        }
    });

    socket.on('close', function(connection) {
        console.log("User disconnected");
    });
});