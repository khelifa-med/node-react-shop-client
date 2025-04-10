import React from 'react';
import products from '../../../public/img/Products/products.json';

export default function BestSeller() {
    return (
        <div className="w-full flex flex-col justify-center items-center p-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-10">Best Seller</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-10">
                {products.slice(0, 2).map((product) => (
                    <div
                        key={product.id}
                        className="relative group flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Product Image */}
                        <img
                            src={product.images[1]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-gray-300">{product.category}</h3>
                            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                            <p className="text-gray-200 mb-4 text-center">{product.description.slice(0, 200)}...</p>
                            <span className="text-lg font-semibold text-yellow-400">${product.price}</span>
                            <div className="mt-4">
                                <a
                                    href="#"
                                    className="px-6 py-2 bg-stone-600 text-white rounded hover:bg-green-400  transition"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
