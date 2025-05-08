import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import Register from './Register';


const Login = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State for Register modal
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOpenLogin = () => {
        setIsLoginOpen(true);
        setIsRegisterOpen(false); // Close Register modal if open
    };

    const handleOpenRegister = () => {
        setIsRegisterOpen(true);
        setIsLoginOpen(false); // Close Login modal if open
    };

    const handleCloseModal = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="">
            {/* User Icon */}
            <button
                className="bg-lime-100 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-200 transition duration-300 ease-in-out"
                onClick={handleOpenLogin}
            >
                <FaRegUser className="text-xl" />
            </button>

            {/* Login Modal */}
            {isLoginOpen && (
                <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold mb-4">Login</h1>
                            <button
                                onClick={handleCloseModal}
                                className="bg-lime-200 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-300 transition duration-300 ease-in-out"
                            >
                                <IoClose className="text-2xl hover:text-red-700" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            <button type="submit" className="bg-lime-200 p-2 rounded-md">Login</button>
                            <p className="text-sm text-gray-500">
                                Don't have an account?{' '}
                                <span
                                    onClick={handleOpenRegister}
                                    className="text-lime-500 cursor-pointer"
                                >
                                    Sign Up
                                </span>
                            </p>
                            <p className="text-sm text-gray-500">
                                Forgot Password?{' '}
                                <a href="#" className="text-lime-500">
                                    Reset
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {/* Register Modal */}
            {isRegisterOpen && (
                <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold mb-4">Register</h1>
                            <button
                                onClick={handleCloseModal}
                                className="bg-lime-200 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-300 transition duration-300 ease-in-out"
                            >
                                <IoClose className="text-2xl hover:text-red-700" />
                            </button>
                        </div>
                       
                        <Register/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;