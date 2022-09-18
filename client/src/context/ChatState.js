import { useState } from 'react'
import chatContext from './Context'

function ChatState(prop) {
    const [userShow, setuserShow] = useState(false)
    return (
        <chatContext.Provider value={{userShow,setuserShow}}>
            {prop.children}
        </chatContext.Provider>
    )
}

export default ChatState