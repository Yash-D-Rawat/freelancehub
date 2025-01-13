import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

function Services() {
    const {theme} = useTheme()
    const services = [
        { title: 'Web Development', description: 'Custom websites tailored to your business needs. Fully responsive and optimized for performance across devices.', icon: '🌐' },
        { title: 'Graphic Design', description: 'Design stunning visuals and eye-catching graphics to communicate your brand effectively and professionally.', icon: '🎨' },
        { title: 'Content Writing', description: 'Provide compelling and well-crafted content for blogs, websites, and marketing materials that engage your audience.', icon: '✍️' },
        { title: 'Digital Marketing', description: 'Enhance your online presence with digital marketing strategies that help you grow your reach and audience engagement.', icon: '📈' },
        { title: 'Mobile App Development', description: 'Create intuitive mobile applications designed for seamless user experiences and optimal performance across platforms.', icon: '📱' },
        { title: 'UI/UX Design', description: 'Design user interfaces and experiences that are visually appealing, intuitive, and enhance overall usability and functionality.', icon: '🖌️' },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            {/* Heading */}
            <motion.h1
                className={`${theme === 'dark' ?'text-white':'text-gray-800'} text-4xl font-extrabold text-center mb-12 `}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Our Premium Services
            </motion.h1>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white p-8 rounded-xl shadow-lg transform transition duration-500 ease-in-out hover:shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.2,
                            scale: { type: 'spring', stiffness: 300, damping: 15 },
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05, // Scales the card on hover
                            transition: { duration: 0.3, delay: 0 }, // Smooth transition for scaling on hover
                        }}
    
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#40AB7A] to-[#0A673B] opacity-80 rounded-xl z-0"></div>
                        <div className="relative z-10">
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h2 className="text-3xl font-semibold text-white mb-4">{service.title}</h2>
                            <p className="text-white font-semibold leading-relaxed">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Services;
