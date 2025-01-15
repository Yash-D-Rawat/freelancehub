import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEdit, FaPlus } from 'react-icons/fa';
function Profile() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-[#40AB7A] to-[#0A673B] p-10 text-white">
                <div className="flex items-center justify-between">
                    {/* Left: Profile Image & Info */}
                    <div className="flex items-center">
                        <div className="relative">
                            <img
                                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                alt="Profile"
                                className="w-36 h-36 rounded-full border-4 border-yellow-400 object-cover transform transition duration-500 hover:scale-110"
                            />
                            <div className="absolute top-0 right-0 bg-white rounded-full p-2 text-xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-yellow-300">
                                <FaEdit className="text-green-600" />
                            </div>
                        </div>
                        <div className="ml-8">
                            <h1 className="text-3xl font-bold transform transition duration-300 hover:scale-105">
                                John Doe
                            </h1>
                            <p className="text-xl text-white mt-2 font-semibold">
                                Web Developer | Graphic Designer
                            </p>
                            <div className="mt-4 flex space-x-4">
                                <button className="px-6 py-2 bg-[#ffa500] text-white rounded-xl hover:bg-yellow-500 transition duration-300 font-bold transform hover:scale-105">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="text-gray-200">
                        <p className="text-lg font-bold">
                            Email:{" "}
                            <a
                                href="mailto:johndoe@gmail.com"
                                className="text-white hover:text-gray-100 transition duration-300"
                            >
                                johndoe@gmail.com
                            </a>
                        </p>
                        <p className="text-lg mt-2 font-bold">
                            Phone:{" "}
                            <a
                                href="tel:+123456789"
                                className="text-white hover:text-gray-100 transition duration-300"
                            >
                                +123456789
                            </a>
                        </p>
                        <div className="mt-4 space-x-6 flex">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-blue-500 hover:text-blue-600 transition duration-300"
                            >
                                <FaLinkedin className="text-white" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-700 hover:text-gray-800 transition duration-300"
                            >
                                <FaGithub className="text-white" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-blue-400 hover:text-blue-500 transition duration-300"
                            >
                                <FaTwitter className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* About Section & Skills Section */}
            <section className="flex gap-8 mt-8 px-6">
                {/* About Me */}
                <div className="bg-white p-6 w-full md:w-1/2 rounded-2xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                    <h2 className="text-2xl text-[#2a5243] font-bold">About Me</h2>
                    <p className="mt-4 text-black">
                        I am a full-stack developer with over 5 years of experience building
                        responsive web applications. I specialize in front-end development,
                        working with technologies like React.js and Redux, and also have a
                        strong understanding of back-end technologies such as Node.js and
                        MongoDB. My passion for web design and user experience drives me to
                        create intuitive and visually appealing interfaces.
                    </p>
                </div>
                <div className="flex gap-8 w-full md:w-1/2">
                    {/* Skills & Expertise */}
                    <div className="bg-white p-6 w-full md:w-1/2 rounded-2xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                        <h2 className="text-2xl text-[#2a5243] font-bold">
                            Skills & Expertise
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <span className="bg-green-100 text-green-700 py-2 px-4 rounded-full text-sm transform transition duration-300 hover:scale-105">
                                React.js
                            </span>
                            <span className="bg-green-100 text-green-700 py-2 px-4 rounded-full text-sm transform transition duration-300 hover:scale-105">
                                Node.js
                            </span>
                            <span className="bg-green-100 text-green-700 py-2 px-4 rounded-full text-sm transform transition duration-300 hover:scale-105">
                                Figma
                            </span>
                            <span className="bg-green-100 text-green-700 py-2 px-4 rounded-full text-sm transform transition duration-300 hover:scale-105">
                                Canva
                            </span>
                        </div>
                        <button className="mt-6 px-3 py-2 font-bold bg-[#ffa500] text-white rounded-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            Add Skill
                        </button>
                    </div>
                    <div className="bg-white p-6 w-full md:w-1/2 rounded-2xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                        <h2 className="text-2xl text-[#2a5243] font-bold">
                            Certifications
                        </h2>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <span className="bg-yellow-100 text-yellow-700 py-2 px-4 rounded-full text-sm">
                                    Certified React Developer
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-yellow-100 text-yellow-700 py-2 px-4 rounded-full text-sm">
                                    UI/UX Design Specialist
                                </span>
                            </li>
                        </ul>
                        <button className="mt-6 px-6 py-2 font-bold bg-[#ffa500] text-white rounded-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            Add Certification
                        </button>
                    </div>
                </div>
            </section>

            {/* Work Experience Section & Client Feedback Section */}
            <section className="flex gap-8 mt-8 px-6">
                {/* Work Experience */}
                <div className="bg-white p-6 w-full md:w-1/2 rounded-2xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                    <h2 className="text-2xl text-[#2a5243] font-bold">Work Experience</h2>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="h-4 w-4 bg-green-500 rounded-full mt-1"></div>
                            <div>
                                <h4 className="text-xl font-semibold">Frontend Developer</h4>
                                <p className="text-gray-600">
                                    TCS, India | Jan 2021 - Dec 2022
                                </p>
                                <ul className="list-disc ml-6 mt-2 space-y-2">
                                    <li>Developed user interfaces with React.js</li>
                                    <li>Improved application performance</li>
                                    <li>Collaborated with cross-functional teams</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="h-4 w-4 bg-green-500 rounded-full mt-1"></div>
                            <div>
                                <h4 className="text-xl font-semibold">UI/UX Designer</h4>
                                <p className="text-gray-600">
                                    XYZ Corp, India | Jun 2019 - Dec 2020
                                </p>
                                <ul className="list-disc ml-6 mt-2 space-y-2">
                                    <li>Designed intuitive user interfaces</li>
                                    <li>Created wireframes and prototypes</li>
                                    <li>
                                        Worked closely with developers to implement designs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Feedback */}
                <div className="bg-white p-6 w-full md:w-1/2 rounded-2xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                    <h2 className="text-2xl text-[#2a5243] font-bold">Client Feedback</h2>
                    <div className="space-y-6 mt-6">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                                alt="Client"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h4 className="text-xl font-semibold">Jane Doe</h4>
                                <p className="mt-2 text-gray-600">
                                    Great experience working with John! The project was delivered
                                    on time and exceeded expectations.
                                </p>
                                <div className="mt-2">
                                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://tovanidesign.com/wp-content/uploads/2019/02/C-_Users_Chrystina_Dropbox_tovani-design_size-examples-of-portraits_for-web_1-1-aspect-ratio-prints-at-square-for-social-media-for-web-photo-by-chrysti-tovani.jpg"
                                alt="Client"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h4 className="text-xl font-semibold">Alex Smith</h4>
                                <p className="mt-2 text-gray-600">
                                    John's expertise in design and development made the project
                                    smooth and easy to work on.
                                </p>
                                <div className="mt-2">
                                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-white p-6 mt-8 rounded-2xl shadow-md mx-6 mb-6">
                <h2 className="text-2xl text-[#2a5243] font-bold">
                    Portfolio Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {/* Portfolio Card 1 */}
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <img
                            src="https://agentestudio.com/uploads/ckeditor/pictures/2525/content_atterley_after.png"
                            alt="Project Thumbnail"
                            className="w-full h-48 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold mt-4">
                            E-commerce Website Redesign
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Redesigned a Shopify store to improve UX and increase sales.
                        </p>
                        <div className="flex space-x-2 mt-2">
                            <span className="bg-green-500 text-white py-1 px-3 text-xs rounded-full">
                                React
                            </span>
                            <span className="bg-green-500 text-white py-1 px-3 text-xs rounded-full">
                                Shopify
                            </span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded-2xl hover:bg-yellow-500 transition duration-300">
                            View Project
                        </button>
                    </div>
                    {/* Portfolio Card 2 */}
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <img
                            src="https://i.ytimg.com/vi/S9NOXjdipl4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5kbDLrc6hzcf_27aVON0CBkEdRg"
                            alt="Project Thumbnail"
                            className="w-full h-48 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold mt-4">
                            Personal Portfolio Website
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Created a personal portfolio website to showcase skills and
                            projects.
                        </p>
                        <div className="flex space-x-2 mt-2">
                            <span className="bg-green-500 text-white py-1 px-3 text-xs rounded-full">
                                HTML
                            </span>
                            <span className="bg-green-500 text-white py-1 px-3 text-xs rounded-full">
                                CSS
                            </span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded-2xl hover:bg-yellow-500 transition duration-300">
                            View Project
                        </button>
                    </div>
                    {/* Portfolio Card 3 */}
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LjH8AqK29rmBo1gbyLHGT9JShpSsiVWW2g&s"
                            alt="Project Thumbnail"
                            className="w-full h-48 object-cover rounded-2xl"
                        />
                        <h3 className="text-xl font-semibold mt-4">
                            Mobile App UI/UX Design
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Designed the UI/UX for a mobile app aimed at fitness tracking.
                        </p>
                        <div className="flex space-x-2 mt-2">
                            <span className="bg-green-500 text-white py-1 px-3 text-xs rounded-full">
                                Figma
                            </span>
                            <span className="bg-green-500 text-white py-1 px-3 text-xs rounded-full">
                                UI/UX
                            </span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded-2xl hover:bg-yellow-500 transition duration-300">
                            View Project
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Profile;