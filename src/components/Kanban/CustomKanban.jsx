import React, { useState, useEffect } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { Box, Divider, Drawer } from '@mui/material';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { faBell, faGauge, faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const options = [
    { name: 'Overview', icon: faGauge },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'My Biddings', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Manaje Projects', icon: faCalendar },
];

export const CustomKanban = ({ handlepage, page }) => {
    const { theme, toggleTheme } = useTheme();
    const [cards, setCards] = useState(DEFAULT_CARDS);
    const [isFirstTime, setIsFirstTime] = useState(false);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250, backgroundColor: theme === 'dark' ? '#089451':'black', height: '100%' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className='flex items-center flex-col mt-10 gap-6 cursor-pointer'>
                {options.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 50,
                            delay: index * 0.2,
                        }}
                        onClick={() => { handlepage(item.name) }}
                        className={`flex items-center gap-3 ${(theme === 'dark' && page === item.name) ? 'bg-black' : (page === item.name ? 'bg-gradient-to-r from-[#40AB7A] to-[#0A673B]' : '')} px-4 py-2 rounded-lg`}
                    >
                        {item.icon && <FontAwesomeIcon icon={item.icon} style={{ color: '#FFA500' }} className='size-6' />}
                        <h1 className='text-white text-xl font-bold'>{item.name}</h1>
                    </motion.div>
                ))}
                <Divider style={{ backgroundColor: 'black' }} />
            </div>
        </Box>
    );
    useEffect(() => {
        const firstTime = localStorage.getItem("firstTimeUser");
        if (!firstTime) {
            setIsFirstTime(true);
            localStorage.setItem("firstTimeUser", "false");
        }
    }, []);

    const closeModal = () => setIsFirstTime(false);

    return (
        <motion.div
            className={`${theme === 'dark'? 'bg-black':'bg-white'} h-screen w-full md:w-[80%]  text-black relative p-5`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={`w-full  flex  md:flex-row justify-between items-center gap-4 md:gap-8 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>
                <div className='flex items-center gap-5'>
                    <IoMenu onClick={toggleDrawer(true)} className="md:hidden cursor-pointer text-2xl" />
                    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <img src="/images/yashavatar.png" alt="Avatar" className='rounded-full h-10' />
                    <h1 className='text-2xl font-bold hidden md:block'>Yash Rawat</h1>
                </div>
                <div className='flex items-center gap-4 md:w-[30%] justify-evenly'>
                    <button
                        className={`p-2 rounded-full border-2 bg-transparent ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'}`}
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <FontAwesomeIcon icon={faBell} className='text-xl hidden md:block' />
                    <span className='text-white font-semibold text-lg bg-gradient-to-r from-[#40AB7A] to-[#0A673B] px-3 py-2 rounded-lg'><Link to={'/joblisting'}>+ Find a Job</Link></span>
                </div>
            </div>
            <Board cards={cards} setCards={setCards} />
            <DeleteButton setCards={setCards} />
            {isFirstTime && <UserDirections closeModal={closeModal} />}
        </motion.div>
    );
};

const UserDirections = ({ closeModal }) => {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4`}>
            <div className="bg-black bg-opacity-75 p-8 rounded-md w-full max-w-lg md:w-1/3 relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white text-3xl p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
                    title="Close"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-bold text-white mb-6">Welcome to Your Kanban Board!</h2>
                <p className="text-white mb-4">
                    Here's how you can use the Kanban board:
                </p>
                <ul className="list-disc list-inside text-white mb-6 text-lg">
                    <li>
                        <strong>Add Tasks:</strong> Click on the "Add Task" button under each
                        column to create a new task.
                    </li>
                    <li>
                        <strong>Drag and Drop:</strong> Drag cards from one column to another to update the task's status.
                    </li>
                    <li>
                        <strong>Delete Tasks:</strong> Drag a card over the red "Delete" button to remove it.
                    </li>
                </ul>
                <p className="text-white text-lg">Enjoy organizing your tasks!</p>
            </div>
        </div>
    );
};

const Board = ({ cards, setCards }) => {
    return (
        <div className="flex gap-4 overflow-auto p-6 w-full">
            <Column
                title="Backlog"
                column="backlog"
                headingColor="text-gray-400"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="TODO"
                column="todo"
                headingColor="text-orange-400"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="In Progress"
                column="doing"
                headingColor="text-green-400"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Complete"
                column="done"
                headingColor="text-gray-700"
                cards={cards}
                setCards={setCards}
            />
        </div>
    );
};

const Column = ({ title, headingColor, cards, column, setCards }) => {
    const [active, setActive] = useState(false);

    const filteredCards = cards.filter((c) => c.column === column);

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    const handleDrop = (e) => {
        const cardId = e.dataTransfer.getData("cardId");
        setActive(false);

        const updatedCards = cards.map((card) => {
            if (card.id === cardId) {
                return { ...card, column };
            }
            return card;
        });

        setCards(updatedCards);
    };

    return (
        <motion.div
            className="flex flex-col flex-grow p-4 bg-gray-100 rounded shadow-md h-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <h2 className={'text-lg font-bold ${headingColor}'}>{title}</h2>
            <div
                className="flex flex-col gap-2 mt-4"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                {filteredCards.map((card) => (
                    <Card key={card.id} {...card} handleDragStart={handleDragStart} />
                ))}
                <AddCard column={column} setCards={setCards} />
            </div>
        </motion.div >
    );
};

const Card = ({ title, id, handleDragStart }) => {
    return (
        <motion.div
            draggable
            onDragStart={(e) => handleDragStart(e, { title, id })}
            className="cursor-grab p-3 bg-gray-300 rounded shadow-md hover:scale-105 transition-all"
        >
            <p className="text-sm text-black">{title}</p>
        </motion.div>
    );
};

const AddCard = ({ column, setCards }) => {
    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        setCards((prev) => [
            ...prev,
            { id: Math.random().toString(), title: text.trim(), column },
        ]);
        setText("");
        setAdding(false);
    };

    return adding ? (
        <form onSubmit={handleSubmit} className="mt-2">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a task"
                className="w-full p-2 bg-gray-200 text-black rounded"
            />
            <div className="flex justify-between mt-2">
                <button
                    type="button"
                    onClick={() => setAdding(false)}
                    className="text-sm text-gray-500 hover:text-black"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-3 py-1 text-sm text-white bg-orange-400 rounded hover:bg-orange-500"
                >
                    Add
                </button>
            </div>
        </form>
    ) : (
        <motion.button
            onClick={() => setAdding(true)}
            className="px-3 py-1 mt-2 text-sm text-gray-500 hover:text-black"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            + Add Task
        </motion.button>
    );
};

const DeleteButton = ({ setCards }) => {
    const [active, setActive] = useState(false);

    const handleDrop = (e) => {
        const cardId = e.dataTransfer.getData("cardId");
        setCards((prev) => prev.filter((card) => card.id !== cardId));
        setActive(false);
    };

    return (
        <motion.div
            onDragOver={(e) => {
                e.preventDefault();
                setActive(true);
            }}
            onDragLeave={() => setActive(false)}
            onDrop={handleDrop}
            className={`fixed bottom-12 right-8 flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-xl cursor-pointer hover:bg-red-700 transition-all ${active ? "bg-red-400" : "bg-red-600"
                }`}
            title="Delete Card"
        >
            {active ? (
                <FaFire className="text-3xl text-white animate-pulse" />
            ) : (
                <FiTrash className="text-3xl" />
            )}
        </motion.div>
    );
};

const DEFAULT_CARDS = [
    { id: "1", title: "Fix bug in Kanban board", column: "backlog" },
    { id: "2", title: "Write documentation", column: "todo" },
    { id: "3", title: "Implement drag-and-drop", column: "doing" },
    { id: "4", title: "Deploy to production", column: "done" },
    { id: "5", title: "Design UI for the app", column: "backlog" },
    { id: "6", title: "Set up CI/CD pipeline", column: "todo" },
    { id: "7", title: "Test user authentication", column: "doing" },
    { id: "8", title: "Write unit tests for API", column: "done" },
    { id: "9", title: "Create onboarding guide", column: "backlog" },
    { id: "10", title: "Conduct code review", column: "todo" },
    { id: "11", title: "Refactor UI components", column: "doing" },
    { id: "12", title: "Launch marketing campaign", column: "done" },
];

export default CustomKanban;