import { useEffect, useRef, useState } from 'react'

function App() {
  const [messages, setMessages] = useState(["hello",'hii'])
  const [message,setMessage] = useState("")
  const wsRef = useRef<WebSocket>(null)


  const sendMessage = () => {
    if(wsRef.current == null){return}
    wsRef.current.send(JSON.stringify({
      type:"chat",
      payload:{
        message:message
      }
    }))
    setMessage("")
  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080')
    wsRef.current = ws
    ws.onmessage = (event) => {
      setMessages(m=>[...m,event.data])
    }
    ws.onopen=()=>{
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
    }
    return ()=>{
      ws.close()
    }

  },[])


  return (
   <div className='h-screen bg-gray-300 flex flex-col gap-10 text-white items-center'>
    <div className='h-[70vh] w-screen bg-red-600 flex flex-col items-start gap-1'>
      {
        messages.map((message,key) => {
          return <div className='bg-white rounded-xl px-3 py-1 text-black' key={key}>{message}</div>
        })
      }
    </div>
    <div>
      <input 
      className='bg-pink-500 rounded-xl w-full p-5 placeholder-amber-800'
      onChange={(e)=>setMessage(e.target.value)}
      value={message}
      type="text" placeholder='enter message...' />
    <button 
    className='bg-gray-500 text-white py-3 px-6 mt-2 rounded-2xl cursor-pointer'
    onClick={sendMessage}>send</button>
    </div>
   </div>
  )
}

export default App
