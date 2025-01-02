import React from "react";
import { motion } from "framer-motion";

function Services() {
    const services = [
        { title: 'Web Development', description: 'Get custom websites designed and developed to meet your business needs. Responsive and optimized for performance.', icon: '🌐' },
        { title: 'Graphic Design', description: 'Create stunning visuals and graphics.', icon: '🎨' },
        { title: 'Content Writing', description: 'Deliver compelling and engaging content.', icon: '✍️' },
        { title: 'Digital Marketing', description: 'Boost your online presence and reach.', icon: '📈' },
        { title: 'Mobile App Development', description: 'Develop user-friendly mobile apps.', icon: '📱' },
        { title: 'UI/UX Design', description: 'Design seamless user experiences.', icon: '🖌️' },
    ];

    return (
        <div className="w-[90%] flex flex-col justify-center items-center my-14 px-6">
            {/* Heading */}
            <motion.h1
                className="text-4xl font-bold mb-10"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Explore Our Services
            </motion.h1>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-[10%] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="text-5xl mb-4 p-5">{service.icon}</div>
                        <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                        <p className="text-gray-600 text-2xl">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Services;
