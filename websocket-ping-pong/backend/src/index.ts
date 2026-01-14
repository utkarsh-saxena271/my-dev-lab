import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on("connection",(socket)=>{
    console.log("connected")
    socket.on("message",(e)=>{
        if(e.toString() === "ping")
            socket.send("pong")
    })
})



// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });

//   ws.send('something');
// });