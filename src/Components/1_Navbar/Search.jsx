import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { searchProducts } from '../../Redux-toolkit/Slices/ProductsSlice'; // Import the searchProducts action

export default function Search() {
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle search input
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
    const dispatch = useDispatch(); // Initialize Redux dispatch

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen); // Toggle the search input visibility
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value); // Update the search term
        dispatch(searchProducts(value)); // Dispatch the searchProducts action
    };

    return (
        <div className="relative flex items-center">
            {/* Search Icon */}
            <button
                onClick={handleSearchToggle}
                className="bg-lime-100 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-200 transition duration-300 ease-in-out"
            >
                <FaSearch className="text-xl" />
            </button>

            {/* Search Input with Animation */}
            <div
                className={`absolute right-12 transition-all duration-300 ${
                    isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'
                }`}
            >
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="w-full border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-300 ease-in-out"
                />
            </div>
        </div>
    );
}
