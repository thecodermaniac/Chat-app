import React from 'react'

function UserCard({ name, imgpath }) {
  return (
    <div className='user-card'>
      <p>{name}</p>
      <img src={imgpath} alt="" />
    </div>
  )
}

export default UserCard