import React from 'react';

export default function Order_complete({ order }) {
    if (!order) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">Order Complete</h1>
                <p className="text-lg text-gray-600 mt-4">No order details available.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-green-600 text-center mb-6">Order Complete</h1>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Thank you for your order! Your order has been successfully placed.
                </p>

                {/* Order Details */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h2>
                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-semibold text-gray-700">Shipping Address:</h3>
                        <p className="text-gray-600">{order.shippingAddress.name}</p>
                        <p className="text-gray-600">{order.shippingAddress.address}</p>
                        <p className="text-gray-600">
                            {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                        </p>
                        <p className="text-gray-600">{order.shippingAddress.country}</p>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">Payment Method:</h3>
                    <p className="text-gray-600">{order.paymentMethod}</p>
                </div>

                {/* Items Ordered */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">Items Ordered:</h3>
                    <ul className="divide-y divide-gray-200">
                        {order.cartItems.map((item) => (
                            <li key={item.id} className="py-4 flex justify-between items-center">
                                <div>
                                    <p className="text-gray-800 font-medium">{item.name}</p>
                                    <p className="text-gray-600 text-sm">
                                        ${item.price.toFixed(2)} x {item.quantity}
                                    </p>
                                </div>
                                <p className="text-gray-800 font-semibold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Total Amount */}
                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold text-gray-700">Total Amount:</h3>
                    <p className="text-2xl font-bold text-gray-800">${order.totalAmount.toFixed(2)}</p>
                </div>

                {/* Continue Shopping Button */}
                <div className="mt-8 text-center">
                    <a
                        href="/shop"
                        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
                    >
                        Continue Shopping
                    </a>
                </div>
            </div>
        </div>
    );
}
