import './App.css';
import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

var socket
function App() {
  const [message, setmessage] = useState({ type: "", msg: "" })
  const [receivedmsg, setreceivedmsg] = useState({ type: "", msg: "" })
  const [senderarr, setsenderarr] = useState([])
  useEffect(() => {
    socket = io('http://localhost:5000')
    socket.on('connect', () => {
      console.log('socket connected');
    })
  }, [])

  useEffect(() => {
    socket.on('receive event', send_msg => {
      console.log(send_msg);
      setreceivedmsg(receivedmsg.type="sender",receivedmsg.msg=send_msg)
      console.log(receivedmsg);
      let auxarr=senderarr
      auxarr.push(receivedmsg)
      setsenderarr(auxarr)
    })

  }, [])




  const handlechange = (e) => {

    setmessage({ ...message, type: 'receiver', msg: e.target.value })

  }

  const sendmessage = (e) => {
    e.preventDefault()
    if (message.length === 0) {
      console.log('write somthing');
    }
    else {
      socket.emit("send event", message.msg)
      console.log(message)
      let auxarr=senderarr
      auxarr.push(message)
      setsenderarr(auxarr)
      console.log(senderarr);
    }

  }
  return (
    <div className="chat-container">
      <div className="box">
        {senderarr.map((msgs, key) => {
          return (msgs.type === 'receiver' ? <div className='receiver' key={key}>{msgs.msg}</div> : <div className='sender' key={key}>{msgs.msg}</div>)
        })}
        <div className='sender'>wait sending</div>
      </div>

      <div className="message-form">
        <form>
          <input type="text" id="message-input" placeholder='Type your message' onChange={handlechange} />
          <button type="submit" onClick={sendmessage}>Send</button>
        </form>
      </div>
    </div>

  );
}

export default App;
