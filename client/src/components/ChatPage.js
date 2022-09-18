import React,{useContext,useState,useEffect} from 'react'
import ChatBox from './ChatBox'
import chatContext from '../context/Context'
import UserList from './UserList'

function ChatPage() {
  const context=useContext(chatContext)
  const {userShow,setuserShow}=context
  return (
    <section className='container-box'>
        <UserList/>
        <ChatBox/>
    </section>
  )
}

export default ChatPage