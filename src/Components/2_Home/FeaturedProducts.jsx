import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../../../public/img/Products/products.json';

export default function FeaturedProducts() {
    const [visibleCount, setVisibleCount] = useState(8); // State to control the number of visible items

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 8); // Show 8 more items when the button is clicked
    };

    return (
        <div className='w-full flex justify-center items-center bg-gray-100'>
            <div className="w-full flex flex-col justify-center items-center py-10">
                <h1 className="text-3xl font-bold mb-10">Featured Products</h1>

                {/* Grid container for 3 cards per row */}
                <div className="grid grid-cols-4 gap-4 justify-center items-start w-full px-10">
                    {
                        products.slice(0, visibleCount).map((product) => ( // Display only the visible items
                            <div key={product.id} className="">
                                <ProductCard
                                    product={product}
                                />
                            </div>

                        ))
                    }
                </div>

                {/* Show More button */}
                {visibleCount < products.length && ( // Show the button only if there are more items to display
                    <button
                        onClick={handleShowMore}
                        className="mt-5 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
}
