import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center bg-gray-300 ">
            {/* Top Section */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-6">
                {/* Brand Section */}
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Furniture</h1>
                    <p className="text-sm text-gray-500 italic py-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, facere aperiam! Laborum fugiat minima ad corrupti eum quidem,
                        aliquam, quod iusto reiciendis quisquam ipsum architecto, molestiae distinctio sunt nemo delectus.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold py-3">Quick Links</h1>
                    <ul className="list-none flex flex-col justify-center items-center gap-2">
                        <li className="hover:text-blue-600 cursor-pointer">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer">About</li>
                        <li className="hover:text-blue-600 cursor-pointer">Services</li>
                        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                        <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                        <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-blue-600 cursor-pointer">Terms of Service</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold py-3">Follow Us</h1>
                    <ul className="list-none flex flex-row justify-center items-center gap-4">
                        <li className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-stone-400 transform hover:scale-110 transition-all duration-300">
                            <FaFacebookF className="text-blue-600" />
                        </li>
                        <li className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-stone-400 transform hover:scale-110 transition-all duration-300">
                            <FaTwitter className="text-blue-400" />
                        </li>
                        <li className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-stone-400 transform hover:scale-110 transition-all duration-300">
                            <FaInstagram className="text-pink-600" />
                        </li>
                        <li className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-stone-400 transform hover:scale-110 transition-all duration-300">
                            <FaLinkedin className="text-blue-700" />
                        </li>
                        <li className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-stone-400 transform hover:scale-110 transition-all duration-300">
                            <FaGithub className="text-gray-800" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full flex flex-col md:flex-row justify-around items-center pt-10 mb-5  text-center text-sm text-gray-500">
                <p>© 2023 Furniture. All rights reserved.</p>
                <p>Designed by Qlick</p>
                <p>Developed by Qlick</p>
            </div>
        </footer>
    );
}
