import React from 'react';

export default function NewsLetter() {
    return (
        <div className="w-full flex flex-col justify-center items-center p-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-10">Newsletter</h1>
            <div className="w-full md:w-8/12 lg:w-6/12 flex flex-col justify-center items-center bg-gradient-to-r from-stone-500 to-stone-700 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Stay Updated!</h2>
                <p className="text-lg w-6/12 mb-6 text-center opacity-80">
                    Subscribe to our newsletter for the latest updates, exclusive offers, and more.
                </p>
                <div className="w-full flex flex-col md:flex-row items-center justify-around">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="text-xl p-3 w-full md:w-6/12  bg-transparent border-b-2 outline-none rounded text-gray-800"
                    />
                    <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded hover:bg-stone-400 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
