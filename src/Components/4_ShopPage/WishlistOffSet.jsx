import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import { FaRegHeart } from "react-icons/fa6";

export default function WishlistOffSet() {
    // Fake cart data for testing


    const [isCartOpen, setIsCartOpen] = useState(false);

    // Handlers
    const handleOpenCart = () => setIsCartOpen(true);
    const handleCloseCart = () => setIsCartOpen(false);
  
    return (
        <div className="relative">
            {/* Cart Button */}
            <button
                className="bg-lime-100 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-200 transition duration-300 ease-in-out"
                onClick={handleOpenCart}
            >
                <FaRegHeart className="text-xl" />
            </button>

            {/* Cart Drawer */}
            {isCartOpen && (
                <div className="fixed top-0 right-0 w-full h-screen max-h-screen z-50 ">


                    <div className="bg-white z-[100] shadow-lg rounded-md p-6 max-w-sm h-full ml-auto relative">
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-11/12">
                                <h2 className="text-lg font-bold mb-4">My Wishlist</h2>
                                <p className="text-sm text-gray-600 mb-4">You have items in your Wishlist.</p>
                            </div>
                            <div className="w1/12">
                                <button
                                    onClick={handleCloseCart}
                                    className='bg-lime-200 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-300 transition duration-300 ease-in-out'>
                                    <IoClose className="text-2xl hover:text-red-700" />

                                </button>
                            </div>


                        </div>




                    </div>

                    <div className="h-full w-full z-[60] fixed top-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">

                    </div>
                </div>

            )}
        </div>
    );
}