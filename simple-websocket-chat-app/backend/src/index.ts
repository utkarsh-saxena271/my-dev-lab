import type { WebSocket } from "ws";
import { WebSocketServer } from "ws";

interface User{
    socket:WebSocket,
    room:string
}


const wss = new WebSocketServer({port:8080});

let userCount = 0;
let allsockets: User[] = []

wss.on("connection",(socket)=>{

    socket.on("message",(message : string)=>{
        const messageObj = JSON.parse(message)
        if(messageObj.type === "join"){
            allsockets.push({
                socket,
                room : messageObj.payload.roomId
            })
        }
        if(messageObj.type === "chat"){
            const currentUserRoom = allsockets.find((x)=>x.socket == socket);
            if(!currentUserRoom){return}
            for(let i = 0; i < allsockets.length; i++){
                if((allsockets[i] as unknown as User).room == currentUserRoom.room ){
                    (allsockets[i] as unknown as User).socket.send(messageObj.payload.message)
                }
            }
        }
    })

    socket.on("disconnect",()=>{

    })
})