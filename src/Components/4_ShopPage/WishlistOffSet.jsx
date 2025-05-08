import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaRegHeart } from "react-icons/fa6";
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../../Redux-toolkit/Slices/WishlistSlice';

export default function WishlistOffSet() {
    const dispatch = useDispatch();

    // Access wishlist items from Redux
    const wishlist = useSelector((state) => state.wishlist.items);



    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    // Handlers
    const handleOpenWishlist = () => setIsWishlistOpen(true);
    const handleCloseWishlist = () => setIsWishlistOpen(false);

    return (
        <div className="relative">
            {/* Wishlist Button */}
            <button
                className="bg-lime-100 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-200 transition duration-300 ease-in-out"
                onClick={handleOpenWishlist}
            >
                <FaRegHeart className="text-xl" />
            </button>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlist.length}
            </span>

            {/* Wishlist Drawer */}
            {isWishlistOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleCloseWishlist}>
                    <div
                        className="fixed top-0 right-0 w-full h-screen max-h-screen z-50 sm:w-96"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the wishlist
                    >
                        <div className="bg-white z-[100] shadow-lg rounded-md p-6 h-full ml-auto relative flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <div className="w-11/12">
                                    <h2 className="text-lg font-bold mb-4">My Wishlist</h2>
                                    <p className="text-sm text-gray-600 mb-4">
                                        You have {wishlist.length} items in your wishlist.
                                    </p>
                                </div>
                                <div className="w1/12">
                                    <button
                                        onClick={handleCloseWishlist}
                                        className="bg-lime-200 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-300 transition duration-300 ease-in-out"
                                    >
                                        <IoClose className="text-2xl hover:text-red-700" />
                                    </button>
                                </div>
                            </div>

                            {wishlist.length === 0 ? (
                                <p>Your wishlist is empty.</p>
                            ) : (
                                <>
                                    {/* Scrollable Wishlist Items */}
                                    <div className="flex-grow overflow-y-auto max-h-[60vh]">
                                        {wishlist.map((item) => (
                                            <div key={item.id} className="flex group  items-center mb-4">
                                                <img src={item.images[0]} alt={item.name} className="w-16 h-16 mr-4" />
                                                <div className="flex-grow">
                                                    <h3 className="font-semibold">{item.name}</h3>
                                                    <p>${item.price.toFixed(2)}</p>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        dispatch(removeFromWishlist(item));
                                                    }}
                                                    className="text-red-500 opacity-0 group-hover:opacity-100 transition duration-300 mr-4">
                                                
                                                    <FaRegTrashAlt />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Clear Wishlist Button */}
                                    <div className="mt-4">
                                        <button
                                            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300"
                                            onClick={() => dispatch(clearWishlist())}
                                        >
                                            Clear Wishlist
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}