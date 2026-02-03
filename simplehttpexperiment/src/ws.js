import { WebSocketServer } from "ws"

export const initws = (server) => {
    const wss = new WebSocketServer({server})

wss.on("connection", (socket)=>{
    socket.on("error", console.error)

    socket.on("message", function message(data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data,{binary : isBinary})
            }
        })
    })
    socket.send('Hello! Message From Server!!');
})
}