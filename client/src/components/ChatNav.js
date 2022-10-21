import React from 'react'
import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import chatContext from '../context/Context'

function ChatNav() {
    const context = useContext(chatContext)
    const history = useHistory()
    const { user, setuser } = context
    useEffect(() => {
        setuser(JSON.parse(localStorage.getItem('userInfo')))
        console.log(user);
    }, [])
    const handleclick = () => {
        localStorage.removeItem('userInfo')
        history.push('/home')
    }
    return (
        <div className='user-nav'>
            <div className='user-prof'>
                <p>{user?.name}</p>
                <img src={user?.pic} alt="" /></div>

            <button onClick={handleclick}>LogOut</button>
        </div>
    )
}

export default ChatNav