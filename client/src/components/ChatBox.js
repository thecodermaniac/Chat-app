import React,{useContext,useState,useEffect} from 'react'
import chatContext from '../context/Context'
import close from '../assets/close.png'
import menu from '../assets/menu.png'
function ChatBox() {
  const context=useContext(chatContext)
  const {userShow,setuserShow}=context
  return (
    <div className='chat-box'>ChatBox
    <div className='menu'><img src={userShow? close:menu} onClick={()=>{setuserShow(!userShow)}} alt="" /></div>
    </div>
  )
}

export default ChatBox