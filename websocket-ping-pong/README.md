# Websocket Ping Pong

A basic implementation of websocket, where

- when the client and server are connected and the client sends a ***ping*** to the server.
- the server responds with a ***pong***
---

Server Logic
---
```typescript
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
```