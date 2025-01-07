import { Divider } from '@mui/material';
import React from 'react';
import { chatlistdata } from '../../data/Overview_data';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1, // Delay for staggered appearance
        },
    }),
};

function ChatList({ select, setselect }) {
    return (
        <div className='w-[28%] p-10 overflow-y-auto no-scrollbar overflow-hidden border-r-2'>
            <div className='relative w-full mb-6'>
                <input
                    type="text"
                    placeholder="Search..."
                    className='w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#089451] focus:border-transparent'
                />
                <FaSearch className='absolute left-3 top-[35%] text-gray-500' />
            </div>
            {chatlistdata.map((item, index) => (
                <motion.div
                    onClick={() => { setselect(index); }}
                    key={index}
                    className='w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    <div className={`rounded-lg py-3 px-2 ${index === select ? 'bg-[#E8E8E8]' : ''} flex gap-2 items-center justify-start my-1 w-full`}>
                        <img src="/images/soham.jpeg" alt="" className='rounded-full h-12' />
                        <div className='w-full'>
                            <h1 className='font-bold text-lg'>{item.name}</h1>
                            <p className={`truncate w-[90%] ${item.color} font-bold text-sm`}>{item.latestMessage}</p>
                        </div>
                    </div>
                    <Divider />
                </motion.div>
            ))}
        </div>
    );
}

export default ChatList;
