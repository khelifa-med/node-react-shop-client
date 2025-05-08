import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Form submitted:', formData);
        // Add your registration logic here
    };

    return (
        <div className="register">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lime-700 focus:outline-none"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lime-700 focus:outline-none"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lime-700 focus:outline-none"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lime-700 focus:outline-none"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-lime-700 text-white py-2 rounded-md shadow-md hover:bg-lime-600 transition duration-300"
                >
                    Register
                </button>
            </form>
            <p className="text-sm text-gray-700 mt-4 text-center">
                Already have an account?{' '}
                <span className="text-lime-700 cursor-pointer hover:underline">
                    Login
                </span>
            </p>
        </div>
    );
};

export default Register;