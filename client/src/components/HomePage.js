import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

function HomePage() {
  const [showLogin, setShowLogin] = useState(true)
  console.log(showLogin);
  return (
    <>
      <div className='heading'><p>We Chat</p></div>
      <section className='content'>
        <div className='tab-selection'>
          <button className={showLogin ? 'tab-button-on' : 'tab-button-off'} onClick={() => { setShowLogin(!showLogin) }}>Login</button>
          <button className={showLogin ? 'tab-button-off' : 'tab-button-on'} onClick={() => { setShowLogin(!showLogin) }} >SignUp</button>
        </div>
      </section>
      <section className='content'>
          {showLogin ? <Login /> : <SignUp />}
      </section>
    </>
  )
}

export default HomePage