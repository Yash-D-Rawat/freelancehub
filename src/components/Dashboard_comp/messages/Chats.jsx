import React, { useEffect, useRef } from 'react';
import { FaCamera, FaMicrophone, FaPhoneAlt, FaSmile } from 'react-icons/fa';
import { CiMenuKebab } from 'react-icons/ci';
import { motion, AnimatePresence } from 'framer-motion';
import { statusList } from '../../data/Overview_data';

function Chats({ select }) {
    const messagesEndRef = useRef(null);
    let client = statusList[select];
    let messages = client.messages;

    useEffect(() => {
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        };

        // Timeout to ensure the DOM is updated after animation
        const timeoutId = setTimeout(scrollToBottom, 700); // Wait for animation to complete (matching transition duration)

        return () => clearTimeout(timeoutId); // Cleanup timeout
    }, [select, messages]); // Depend on `select` and `messages` to re-trigger on chat change

    return (
        <div className='w-[70%]'>
            
            <AnimatePresence mode='wait'>
                <motion.div
                    className='w-full flex items-center justify-between px-9 py-6'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    key={`header-${select}`} // Unique key for header
                >
                    <div className='flex gap-3 items-center'>
                        <img src="images/soham.jpeg" alt="" className='rounded-full h-14' />
                        <div>
                            <h1 className='font-semibold text-2xl'>{client.name}</h1>
                            <p className={`${client.status === 'online' ? 'text-[#00bf63]' : ''}`}>{client.status}</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <FaPhoneAlt className='size-6 text-black' />
                        <CiMenuKebab className='size-7 text-black' />
                    </div>
                </motion.div>

                <motion.div
                    className='w-full p-7 overflow-y-auto h-[75%] no-scrollbar bg-[#f7f7f7] rounded-lg'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key={`messages-${select}`} // Unique key for messages
                >
                    {messages.map((item, index) => {
                        let temp = item.hasOwnProperty('me');
                        return (
                            <motion.div
                                key={index}
                                className={`w-full flex flex-col ${temp ? 'items-end' : 'items-start'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation for each message
                            >
                                <div className={`relative w-[40%] p-4 rounded-xl text-white font-semibold ${temp ? 'bg-[#FFA500]' : 'bg-[#089451]'} shadow-[0_4px_8px_rgba(0,0,0,0.5)]`}>
                                    <img src="/images/soham.jpeg" alt="" className={`absolute -top-[17%] ${temp ? '-right-[5%]' : '-left-[5%]'} rounded-full h-10`} />
                                    {temp && item.me}
                                    {!temp && item.contact}
                                </div>

                                <span className='px-4'>{item.time}</span>
                            </motion.div>
                        );
                    })}
                    {/* Dummy div to scroll into view */}
                    <div ref={messagesEndRef} />
                </motion.div>
            </AnimatePresence>

            <div className="flex items-center p-4 w-full justify-between">
                <div className='flex items-center w-[70%] gap-7'>
                    {/* Smiley Icon */}
                    <FaSmile className="text-gray-500 mr-3 cursor-pointer size-5" />

                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Type a message...."
                        className="p-2 flex-grow rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#089451]"
                    />
                </div>

                <div className='flex items-center gap-5'>
                    {/* Microphone Icon */}
                    <FaMicrophone className="text-[#C7D0D8] mx-3 cursor-pointer" size={24} />

                    {/* Camera Icon */}
                    <FaCamera className="text-[#C7D0D8] cursor-pointer" size={24} />
                </div>
            </div>

        </div>
    );
}

export default Chats;
