import React, { useContext, useState, useEffect } from 'react'
import chatContext from '../context/Context'
import close from '../assets/close.png'
import menu from '../assets/menu.png'
import UserCard from './UserCard'

function UserList() {
  const context = useContext(chatContext)
  const { userShow, setuserShow } = context
  console.log(userShow);
  return (
    <div className={userShow ? 'user-side-list' : 'user-list'}>
      <div className='menu'><img src={userShow ? close : menu} onClick={() => { setuserShow(!userShow) }} alt="" /></div>
      <div className='user-card-list'>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  )
}

export default UserList