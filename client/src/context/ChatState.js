import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import chatContext from './Context'

function ChatState(prop) {
    const history = useHistory()
    const [userShow, setuserShow] = useState(false)
    const [user, setuser] = useState()
    useEffect(() => {
        setuser(JSON.parse(localStorage.getItem('userInfo')))
        history.push('/chat')
        if (!localStorage.getItem('userInfo')) {
            history.push('/home')
        }
    }, [history])

    return (
        <chatContext.Provider value={{ userShow, setuserShow, user,setuser}}>
            {prop.children}
        </chatContext.Provider>
    )
}

export default ChatState