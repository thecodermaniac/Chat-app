import React, { useContext, useState, useEffect } from 'react'
import ChatBox from './ChatBox'
import chatContext from '../context/Context'
import UserList from './UserList'
import ChatNav from './ChatNav'
import { useHistory } from 'react-router-dom'

function ChatPage() {
  const history= useHistory()
  const context = useContext(chatContext)
  const {user } = context
  useEffect(() => {
    if (!user) {
      history.push("/home")
    }
  }, [user])
  
  return (
    <>
      <ChatNav />
      <section className='container-box'>
        <UserList />
        <ChatBox />
      </section>
    </>
  )
}

export default ChatPage