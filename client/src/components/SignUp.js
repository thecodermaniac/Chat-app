import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

function SignUp() {
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
    pic: ''
  })
  const handleclick = async (e) => {
    e.preventDefault()
    console.log('clicked signup');
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user",user,
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }


  const postDetails = (pics) => {
    if (pics === undefined) {
      console.log("please upload an image");
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chat-App");
      data.append("cloud_name", "db1grdyly");
      fetch("https://api.cloudinary.com/v1_1/db1grdyly/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json())
        .then((data) => {
          setuser({ ...user, pic: data.url.toString() })
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('error occured');
      return;
    }
  };
  return (
    <form>
      <label htmlFor="Name">Name</label>
      <input type="text" placeholder='Name' onChange={(e) => { setuser({ ...user, name: e.target.value }) }} />
      <label htmlFor="email">Email</label>
      <input type="email" onChange={(e) => { setuser({ ...user, email: e.target.value }) }} />
      <label htmlFor="password">Password</label>
      <input type="password" onChange={(e) => { setuser({ ...user, password: e.target.value }) }} />
      <label htmlFor="pic">Profile Pic</label>
      <input type="file"
        accept="image/*"
        onChange={(e) => postDetails(e.target.files[0])} />
      <button type='submit' onClick={handleclick}>SignUp</button>
    </form>
  )
}

export default SignUp