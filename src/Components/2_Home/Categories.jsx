import React, { useEffect, useState } from 'react';

import categories from '../../../public/img/Category/categories.json';
export default function Categories() {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState([]);

    useEffect(() => {
        // Set the initial state based on the currentActive value
        if (currentActive === "all") {
            setArr(categories.slice(0, 6)); // Display only the first 6 items for "All Projects"
        } else {
            const newArr = categories.filter((item) => {
                return item.category === currentActive;
            });
            setArr(newArr);
        }
    }, [currentActive]); // Re-run this effect whenever currentActive changes

    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);
    };

    return (
        <div>
            <div className="w-full flex justify-center items-center bg-gray-100">
                <div className="w-full flex flex-col justify-center items-center py-10">
                    <h1 className="text-3xl font-bold">Categories</h1>
                    <div className="flex justify-center items-start gap-4 mt-5 w-full px-10">
                        <section className="flex flex-col gap-2">
                            <button
                                onClick={() => {
                                    handleClick("all");
                                }}
                                className={`w-44 px-3 py-2 text-center text-lg capitalize rounded transition-opacity duration-300 ${currentActive === "all"
                                        ? "opacity-100 font-bold tracking-wider border-2 border-blue-500 dark:border-white"
                                        : "opacity-50 hover:opacity-100"
                                    } bg-zinc-800 text-white`}
                            >
                                all categories
                            </button>

                            <button
                                onClick={() => {
                                    handleClick("Living Room");
                                }}
                                className={`w-44 px-3 py-2 text-center text-lg capitalize rounded transition-opacity duration-300 ${currentActive === "Living Room"
                                        ? "opacity-100 font-bold tracking-wider border-2 border-blue-500 dark:border-white"
                                        : "opacity-50 hover:opacity-100"
                                    } bg-zinc-800 text-white`}
                            >
                                Living Room
                            </button>

                            <button
                                onClick={() => {
                                    handleClick("Bedroom");
                                }}
                                className={`w-44 px-3 py-2 text-center text-lg capitalize rounded transition-opacity duration-300 ${currentActive === "Bedroom"
                                        ? "opacity-100 font-bold tracking-wider border-2 border-blue-500 dark:border-white"
                                        : "opacity-50 hover:opacity-100"
                                    } bg-zinc-800 text-white`}
                            >
                                Bedroom
                            </button>

                            <button
                                onClick={() => {
                                    handleClick("Home Structure");
                                }}
                                className={`w-44 px-3 py-2 text-center text-lg capitalize rounded transition-opacity duration-300 ${currentActive === "Home Structure"
                                        ? "opacity-100 font-bold tracking-wider border-2 border-blue-500 dark:border-white"
                                        : "opacity-50 hover:opacity-100"
                                    } bg-zinc-800 text-white`}
                            >
                                Home Structure
                            </button>
                        </section>

                        <section className="grid grid-cols-3 gap-4 mt-5 w-full px-10">
                            {arr.map((cat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-5"
                                >
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-20 h-20"
                                    />
                                    <h2 className="text-xl font-semibold mt-2">
                                        {cat.name}
                                    </h2>
                                </div>
                            ))}
                        </section>
                    </div>
                    {currentActive === "all" && (
                        <a
                            href="#"
                            className="mt-5 text-blue-500 hover:underline"
                        >
                            View More Projects
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
