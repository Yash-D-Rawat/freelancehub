import React, { useState } from 'react'
import ChatList from './ChatList'
import Chats from './Chats'

function Messages() {
    const [select, setselect] = useState(0)
  return (
    <div className='flex w-full justify-around'>
        
        <ChatList select = {select} setselect = {setselect}/>
        <Chats select = {select}/>
    </div>
  )
}

export default Messages