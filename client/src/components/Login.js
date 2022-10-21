import React from 'react'
import axios from "axios";
import { useState,useContext } from "react";
import chatContext from '../context/Context'
import { useHistory } from 'react-router-dom';

function Login() {
  const context = useContext(chatContext)
  const {setuser } = context
  const history =useHistory()
  const [loginuser, setloginuser] = useState({
    email: '',
    password: ''
  })
  const handleclick = async (e) => {
    e.preventDefault()
    console.log('clicked login');
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login", loginuser,
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setuser(JSON.parse(localStorage.getItem('userInfo')))
      history.push('/chat')
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" onChange={(e) => { setloginuser({ ...loginuser, email: e.target.value }) }} required={true} />
      <label htmlFor="password">Password</label>
      <input type="password" onChange={(e) => { setloginuser({ ...loginuser, password: e.target.value }) }} required={true} />
      <button type='submit' onClick={handleclick}>Go To Chat!</button>
    </form>
  )
}

export default Login