import React, { useState } from 'react';
import products from '../../../public/img/Products/products.json';
import ProductCard from '../2_Home/ProductCard';
import SortDropDown from './SortDropDown';

export default function ProductList() {
    // State to manage the sorted products
    const [sortedProducts, setSortedProducts] = useState(products);

    // Function to handle sorting
    const handleSortProducts = (sorted) => {
        setSortedProducts(sorted);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center bg-gray-100'>
            {/* Sort Dropdown */}
            <div className="flex justify-end items-center w-full px-10 py-5">
                <SortDropDown
                    products={products}
                    sortProducts={handleSortProducts}
                />
            </div>

            {/* Product Grid */}
            <div className="w-full flex flex-col justify-center items-center py-10">
                <div className="grid grid-cols-4 gap-4 justify-center items-start w-full px-10">
                    {sortedProducts.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item} // Pass the entire product object
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
