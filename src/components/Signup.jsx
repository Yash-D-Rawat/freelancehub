import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const isEmailTaken = users.some((user) => user.email === formData.email);

      if (isEmailTaken) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This email is already registered. Please log in.',
        });
      } else {
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));
        Swal.fire({
          icon: 'success',
          title: 'Account Created',
          text: 'Your account has been created successfully!',
        }).then(() => {
          navigate('/login', { replace: true });
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-orange-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex overflow-hidden"
      >
        <div className="w-1/2 bg-gradient-to-b from-green-500 to-green-700 text-white p-10 hidden md:flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4">
            What Our Jobkeepers Say
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            "Searching and finding your dream job is now easier than ever. Just
            browse a job and apply if you need to."
          </p>
          <p className="font-bold">- Nishita Sanghavi</p>
          <p className="text-sm italic">UI Designer at Google</p>
        </div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-full md:w-1/2 p-10"
        >
          <h2 className="text-3xl font-bold text-black mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full mt-2 px-4 py-3 border rounded-lg"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600"
            >
              Create Account
            </motion.button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" replace className="text-green-600 font-bold hover:underline">
              Log in here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Signup;
