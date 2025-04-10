import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

export default function CartOffset() {
    // Access cart items from Redux
    const cart = useSelector((state) => state.cart.items) // Correctly access cart items
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
                <RiShoppingCartLine className="text-xl" />
            </button>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
            </span>

            {/* Cart Drawer */}
            {isCartOpen && (
                <div className="fixed top-0 right-0 w-full h-screen max-h-screen z-50">
                    <div className="bg-white z-[100] shadow-lg rounded-md p-6 max-w-sm h-full ml-auto relative">
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-11/12">
                                <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
                                <p className="text-sm text-gray-600 mb-4">You have {cart.length} items in your cart.</p>
                            </div>
                            <div className="w1/12">
                                <button
                                    onClick={handleCloseCart}
                                    className="bg-lime-200 h-10 w-10 flex justify-center items-center rounded-full shadow-md hover:bg-lime-300 transition duration-300 ease-in-out"
                                >
                                    <IoClose className="text-2xl hover:text-red-700" />
                                </button>
                            </div>
                        </div>

                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div>
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center mb-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                                        <div className="flex-grow">
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}