import { WebSocketServer } from "ws"

export const initws = (server) => {
    const wss = new WebSocketServer({server})
    wss.on("connection",(ws)=>{
        console.log("connected to ws")
    })
}