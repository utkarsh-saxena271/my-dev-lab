import { useEffect, useRef, useState } from "react"
import "./App.css"


const App = () => {
  const [socket, setSocket] = useState()
  const inputRef = useRef()

  const sendMessage = () => {
    if(!socket) return
    const message = inputRef.current.value
    // @ts-ignore
    socket.send(message)
  }
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws)
    ws.onmessage = (event) => {
      alert(event.data)
    }
    

  },[])

  return (
    <div>
      <input type="text" placeholder="message" ref={inputRef} />
      <button onClick={sendMessage}>
        send
      </button>
    </div>
  )
}

export default App