import React from 'react'

function Login() {
  const handleclick=(e)=>{
e.preventDefault()
console.log('clicked login');
  }
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" />
      <button type='submit' onClick={handleclick}>Go To Chat!</button>
    </form>
  )
}

export default Login