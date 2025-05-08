import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, clearFromCart } from '../../Redux-toolkit/Slices/CartSlice';
import { FaRegEye, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CartOffset() {
    const dispatch = useDispatch();

    // Access cart items and total amount from Redux
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
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
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={handleCloseCart}
                >
                    <div
                        className="fixed top-0 right-0 w-full h-screen max-h-screen z-50 sm:w-96"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the cart
                    >
                        <div className="bg-white z-[100] shadow-lg rounded-md p-6 h-full ml-auto relative flex flex-col">
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
                                <>
                                    {/* Scrollable Cart Items */}
                                    <div className="flex-grow overflow-y-auto max-h-[60vh]">
                                        {cart.map((item) => (
                                            <div key={item.id} className="flex group  items-center mb-4">
                                                <img src={item.images[0]} alt={item.name} className="w-16 h-16 mr-4" />
                                                <div className="flex-grow">
                                                    <h3 className="font-semibold">{item.title}</h3>
                                                    <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        dispatch(deleteFromCart(item));
                                                    }}
                                                    className="text-red-500 opacity-0 group-hover:opacity-100 transition duration-300 mr-4">
                                                    <FaRegTrashAlt />
                                                </button>


                                            </div>
                                        ))}
                                    </div>

                                    {/* Fixed Buttons */}
                                    <div className="mt-4 border-t pt-4 sticky bottom-0 bg-white">
                                        <div className="mt-4">
                                            <h3 className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</h3>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300"
                                                onClick={() => dispatch(clearFromCart())}
                                            >
                                                Clear Cart
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                className="w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-600 transition duration-300"
                                                onClick={() => {
                                                    console.log('Proceeding to checkout');
                                                }}
                                            >
                                                <Link to="/cart" className="text-white font-bold">
                                                    Cart Page
                                                </Link>

                                            </button>
                                        </div>
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