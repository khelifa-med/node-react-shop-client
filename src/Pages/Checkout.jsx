// Checkout.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearFromCart, saveShippingAddress, savePaymentMethod } from '../Redux-toolkit/Slices/CartSlice';

const Checkout = ({ setOrder }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    // Fetch saved shipping address and payment method from Redux store
    const savedShippingAddress = useSelector((state) => state.cart.shippingAddress) || {
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    };
    const savedPaymentMethod = useSelector((state) => state.cart.paymentMethod) || '';

    const [shippingAddress, setShippingAddress] = useState(savedShippingAddress);
    const [paymentMethod, setPaymentMethod] = useState(savedPaymentMethod);

    const handleConfirmOrder = () => {
        const orderDetails = {
            cartItems,
            totalAmount,
            shippingAddress,
            paymentMethod,
        };
        setOrder(orderDetails); // Save the order details
        dispatch(clearFromCart()); // Clear the cart
        navigate('/order-complete'); // Redirect to order confirmation page
    };

    const handleCancelOrder = () => {
        dispatch(clearFromCart()); // Clear the cart
        navigate('/order-cancelled'); // Redirect to order cancellation page
    };

    const handleSaveChanges = () => {
        // Save updated shipping address and payment method to Redux
        dispatch(saveShippingAddress(shippingAddress));
        dispatch(savePaymentMethod(paymentMethod));
        alert('Shipping address and payment method updated!');
    };

    const handleBackToCart = () => {
        navigate('/cart'); // Navigate back to the cart page
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen bg-gray-100 p-6 gap-6">
            {/* Left Section: Shipping Information Form */}
            <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Shipping Information</h1>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={shippingAddress.name}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                        className="border rounded px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={shippingAddress.address}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                        className="border rounded px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                        className="border rounded px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Postal Code"
                        value={shippingAddress.postalCode}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                        className="border rounded px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        value={shippingAddress.country}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                        className="border rounded px-4 py-2"
                        required
                    />
                </form>
            </div>

            {/* Right Section: Payment Method and Actions */}
            <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Method</h2>
                <div className="mb-6">
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="border rounded px-4 py-2 w-full"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>
                </div>

                {/* Total Amount */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">Total Amount</h3>
                    <p className="text-lg font-semibold text-gray-800">
                        ${totalAmount.toFixed(2)}
                    </p>
                </div>

                {/* Save Changes Button */}
                <div className="mb-6">
                    <button
                        onClick={handleSaveChanges}
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Save Changes
                    </button>
                </div>

                {/* Confirm, Cancel, and Back to Cart Buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleConfirmOrder}
                        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                    >
                        Confirm Order
                    </button>
                    <button
                        onClick={handleCancelOrder}
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                    >
                        Cancel Order
                    </button>
                    <button
                        onClick={handleBackToCart}
                        className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
                    >
                        Back to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;