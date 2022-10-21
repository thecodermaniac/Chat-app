import React, { useContext, useState, useEffect } from 'react'
import axios from "axios";
import chatContext from '../context/Context'
import close from '../assets/close.png'
import menu from '../assets/menu.png'
import UserCard from './UserCard'

function UserList() {
  const context = useContext(chatContext)
  const { userShow, setuserShow, user } = context
  const [userarr, setarr] = useState()
  console.log(userShow);

  const userlist = async () => {
    let logged_user= JSON.parse(localStorage.getItem('userInfo'))
    const config = {
      headers: {
        "Authorization": `Bearer ${logged_user.token}`
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/api/user",
      config
    );
    setarr(data)
    console.log(userarr[0]);
  }
  useEffect(() => {
    // console.log(user.token);
    userlist()
  }, [])


  return (
    <div className={userShow ? 'user-side-list' : 'user-list'}>
      <div className='menu'><img src={userShow ? close : menu} onClick={() => { setuserShow(!userShow) }} alt="" /></div>
      <div className='user-card-list'>
        {userarr.map((val)=>{
          return <UserCard name={val.name} imgpath={val.pic} key={val._id}/>
        })}
      </div>
    </div>
  )
}

export default UserList