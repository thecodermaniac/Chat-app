import React from 'react'

function SignUp() {
  const handleclick=(e)=>{
    e.preventDefault()
    console.log('clicked signup');
      }
  return (
    <form>
      <label htmlFor="Name">Name</label>
      <input type="text" placeholder='Name' />
      <label htmlFor="email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" />
      <label htmlFor="pic">Profile Pic</label>
      <input type="file" />
      <button type='submit' onClick={handleclick}>SignUp</button>
    </form>
  )
}

export default SignUp