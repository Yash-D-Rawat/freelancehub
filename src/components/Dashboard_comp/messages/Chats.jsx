import React, { useEffect, useRef } from 'react';
import { FaCamera, FaMicrophone, FaMoon, FaPhoneAlt, FaSmile, FaSun, FaArrowLeft } from 'react-icons/fa';
import { CiMenuKebab } from 'react-icons/ci';
import { motion, AnimatePresence } from 'framer-motion';
import { statusList } from '../../data/Overview_data';
import { useTheme } from '../../../Context/ThemeContext';

function Chats({ select, setShowChat }) {
    const messagesEndRef = useRef(null);
    const client = statusList[select];
    const messages = client.messages;
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        };
        const timeoutId = setTimeout(scrollToBottom, 700);
        return () => clearTimeout(timeoutId);
    }, [select, messages]);

    return (
        <div className="w-full md:w-[70%] h-full">
            <AnimatePresence mode="wait">
                <motion.div
                    className="w-full flex items-center justify-between p-3 md:px-9 md:py-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    key={`header-${select}`}
                >
                    <div className="flex gap-3 items-center">
                        <FaArrowLeft className="cursor-pointer sm:hidden" onClick={() => setShowChat(false)} />
                        <img src="images/soham.jpeg" alt="" className={`rounded-full h-14 ${theme === 'dark' ? 'border-white' : 'border-[#e8e8e8]'} border-[4px]`} />
                        <div>
                            <h1 className={`${theme === 'dark' ? 'text-white' : ''} font-semibold text-2xl`}>{client.name}</h1>
                            <p className={`${client.status === 'online' ? 'text-[#00bf63]' : ''}`}>{client.status}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button
                            className={`p-2 rounded-full border-2 bg-transparent ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'}`}
                            onClick={toggleTheme}
                        >
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>
                        <FaPhoneAlt className={`size-6 text-black ${theme === 'dark' ? 'text-white' : ''}`} />
                        <CiMenuKebab className={`size-7 text-black ${theme === 'dark' ? 'text-white' : ''}`} />
                    </div>
                </motion.div>

                <motion.div
                    className={`w-full p-7 overflow-y-auto h-[75%] no-scrollbar ${theme === 'dark' ? 'bg-[#2E2E2E]' : 'bg-[#F7F7F7]'} rounded-lg`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key={`messages-${select}`}
                >
                    {messages.map((item, index) => {
                        let temp = item.hasOwnProperty('me');
                        return (
                            <motion.div
                                key={index}
                                className={`w-full flex flex-col ${temp ? 'items-end' : 'items-start'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className={`relative w-[70%] md:w-[40%] p-4 rounded-xl text-white font-semibold ${temp ? 'bg-[#FFA500]' : 'bg-[#089451]'} shadow-[0_4px_8px_rgba(0,0,0,0.5)]`}>
                                    <img src="/images/soham.jpeg" alt="" className={`absolute -top-[17%] ${temp ? '-right-[5%]' : '-left-[5%]'} rounded-full h-10`} />
                                    {temp && item.me}
                                    {!temp && item.contact}
                                </div>
                                <span className={`px-4 ${theme === 'dark' ? 'text-white' : ''}`}>{item.time}</span>
                            </motion.div>
                        );
                    })}
                    <div ref={messagesEndRef} />
                </motion.div>
            </AnimatePresence>

            <div className="flex items-center md:p-4 w-full p-2 justify-between">
                <div className="flex items-center md:w-[70%] md:gap-7">
                    <FaSmile className="text-gray-500 mr-3 cursor-pointer size-5" />
                    <input
                        type="text"
                        placeholder="Type a message...."
                        className="py-2 px-5 flex-grow rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#089451]"
                    />
                </div>
                <div className="flex items-center md:gap-5">
                    <FaMicrophone className="text-[#C7D0D8] mx-3 cursor-pointer" size={24} />
                    <FaCamera className="text-[#C7D0D8] cursor-pointer" size={24} />
                </div>
            </div>
        </div>
    );
}

export default Chats;
