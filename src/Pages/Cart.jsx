import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    deleteFromCart,
    clearFromCart,
    updateCartItemQuantity,
    saveShippingAddress,
    savePaymentMethod,
} from '../Redux-toolkit/Slices/CartSlice';
import { FaRegTrashAlt } from 'react-icons/fa';
import Modal from '../Components/5_ShippingAddress/Modal';
import ModalForm from '../Components/5_ShippingAddress/ModalForm';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const [discountCode, setDiscountCode] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [discountError, setDiscountError] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for shipping address
    const [shippingAddress, setShippingAddress] = useState({
        name: 'John Doe',
        address: '123 Main Street',
        city: 'New York',
        postalCode: '10001',
        country: 'USA',
    });

    const handleApplyDiscount = () => {
        if (discountCode === 'DISCOUNT10') {
            setAppliedDiscount(10);
            setDiscountError('');
        } else if (discountCode.trim() === '') {
            setDiscountError('Please enter a discount code.');
        } else {
            setDiscountError('Invalid discount code.');
            setAppliedDiscount(0); // Reset discount if invalid
        }
    };

    const handleCheckout = () => {
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }

        // Save shipping address and payment method to Redux
        dispatch(saveShippingAddress(shippingAddress));
        dispatch(savePaymentMethod(paymentMethod));

        // Navigate to the checkout page
        navigate('/checkout');
    };

    const discountedPrice = totalAmount - (totalAmount * appliedDiscount) / 100;

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen bg-gray-100 p-6 gap-6">
            {/* Left Section: Cart Items */}
            <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-lg text-gray-600">
                        Your cart is currently empty.{' '}
                        <a href="/shop" className="text-blue-500 underline">
                            Continue Shopping
                        </a>
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300 mb-6">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Subtotal</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td className="border border-gray-300 px-4 py-2 text-gray-700">{item.name}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                                            ${item.price.toFixed(2)}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() =>
                                                        dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 }))
                                                    }
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() =>
                                                        dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 }))
                                                    }
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-gray-700">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded mx-auto"
                                            />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <button
                                                onClick={() => dispatch(deleteFromCart(item))}
                                                className="p-2 rounded-md bg-white hover:bg-red-400 text-red-500 hover:text-white transition duration-300 ease-in-out"
                                            >
                                                <FaRegTrashAlt className="text-xl" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Right Section: Cart Summary */}
            <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Cart Summary</h2>

                {/* Discount Code Input */}
                <div className="mb-4">
                    <label htmlFor="discountCode" className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Code (Optional)
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            id="discountCode"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <button
                            onClick={handleApplyDiscount}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Apply
                        </button>
                    </div>
                    {discountError && <p className="text-red-500 text-sm mt-1">{discountError}</p>}
                </div>

                <p className="text-lg text-gray-700 mb-2">Subtotal: ${totalAmount.toFixed(2)}</p>
                {appliedDiscount > 0 && (
                    <p className="text-lg text-green-600 mb-2">
                        Discount Applied: {appliedDiscount}% (-${((totalAmount * appliedDiscount) / 100).toFixed(2)})
                    </p>
                )}
                <p className="text-lg font-semibold text-gray-800 mb-6">
                    Total: <span className="text-green-600">${discountedPrice.toFixed(2)}</span>
                </p>

                {/* Shipping Address */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">Shipping Address</h3>
                    <p className="text-gray-700">
                        {shippingAddress.name}, {shippingAddress.address}, {shippingAddress.city},{' '}
                        {shippingAddress.postalCode}, {shippingAddress.country}.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-blue-500 underline mt-2"
                    >
                        Change Address
                    </button>
                </div>

                {/* Modal for Changing Address */}
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <ModalForm
                        shippingAddress={shippingAddress}
                        setShippingAddress={setShippingAddress}
                        setModalOpen={setIsModalOpen}
                    />
                </Modal>

                {/* Payment Method */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">Select Payment Method</h3>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="Credit Card"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="form-radio"
                            />
                            Credit Card
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="PayPal"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="form-radio"
                            />
                            PayPal
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="Cash on Delivery"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="form-radio"
                            />
                            Cash on Delivery
                        </label>
                    </div>
                </div>

                {/* Checkout and Clear Cart Buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleCheckout}
                        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                    >
                        Checkout
                    </button>
                    <button
                        onClick={() => dispatch(clearFromCart())}
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;