import React, { useState } from 'react';
import ChatList from './ChatList';
import Chats from './Chats';

function Messages() {
  const [select, setSelect] = useState(0);
  const [showChat, setShowChat] = useState(false); // New state to toggle visibility

  return (
    <div className="flex w-full md:w-[80%] justify-around">
      <div className='w-full sm:hidden'>
        {!showChat && (
          <ChatList select={select} setSelect={setSelect} setShowChat={setShowChat} />
        )}
        {showChat && (
          <Chats select={select} setShowChat={setShowChat} />
        )}
      </div>
      <div className='sm:flex md:w-full justify-around hidden'>

        <ChatList select={select} setSelect={setSelect} setShowChat={setShowChat}/>
        <Chats select={select} setShowChat={setShowChat} />
      </div>
    </div>
  );
}

export default Messages;
