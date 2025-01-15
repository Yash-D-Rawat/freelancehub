import React from 'react'

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About Us Section */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        About Us
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
                        We connect talented freelancers with businesses around the globe,
                        providing a platform to showcase skills, build connections, and grow
                        professionally. Join us and be part of a thriving community.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        Quick Links
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {[
                            "Home",
                            "Find Jobs",
                            "My Projects",
                            "Proposals",
                            "Earnings",
                            "Calendar",
                            "Help & Support",
                            "Contact Us",
                        ].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm flex items-center gap-2 group transition-all duration-300 hover:text-green-400"
                                >
                                    <span
                                        className="inline-block w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300"
                                    ></span>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        Legal
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy"].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm flex items-center gap-2 group transition-all duration-300 hover:text-green-400"
                                >
                                    <span
                                        className="inline-block w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300"
                                    ></span>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        Contact Us
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <li>
                            Email:{" "}
                            <a
                                href="mailto:support@freelancerhub.in"
                                className="hover:text-green-400 transition-all duration-300"
                            >
                                support@freelancerhub.in
                            </a>
                        </li>
                        <li>
                            Phone:{" "}
                            <a
                                href="tel:+911234567890"
                                className="hover:text-green-400 transition-all duration-300"
                            >
                                +91-12345-67890
                            </a>
                        </li>
                        <li>Address: Freelancer Hub, Tower B, Gurugram, India</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
                {/* Social Media Icons */}
                <div className="flex justify-center w-full sm:w-auto space-x-6">
                    {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
                        <a
                            key={platform}
                            href="#"
                            className="text-2xl p-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white hover:scale-110 transition-transform duration-300 shadow-md shadow-green-500/30"
                            aria-label={platform}
                        >
                            <i className={`fab fa-${platform.toLowerCase()}`}></i>
        </a>
      ))}
            </div>

            {/* Newsletter Subscription */}
            <form className="flex w-full sm:w-auto items-center">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-2/5 flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:ring-2 focus:ring-green-400 outline-none"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-r-lg hover:scale-105 transition-transform duration-300"
                >
                    Subscribe
                </button>
            </form>
        </div>

  {/* App Promotion Section */ }
    <div className="text-center mt-12">
        <p className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
            Work on the go! Download our app and manage projects anytime, anywhere.
        </p>
        <div className="flex justify-center space-x-6 mt-6">
            <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-lg hover:scale-105 shadow-lg shadow-green-500/30 transition-transform duration-300">
                Google Play
            </button>
            <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-lg hover:scale-105 shadow-lg shadow-green-500/30 transition-transform duration-300">
                App Store
            </button>
        </div>
    </div>

    {/* Copyright */ }
    <p className="text-center text-sm mt-8 text-gray-400">
        © 2025 Freelancer Hub. All Rights Reserved.
    </p>
</footer >
  );
}

export default Footer