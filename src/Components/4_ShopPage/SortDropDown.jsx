import React, { useState } from 'react';

export default function SortDropDown({ products, sortProducts }) {
    const [selectedOption, setSelectedOption] = useState('default');

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        let SortedProduct = [...products];

        switch (selectedValue) {
            case 'priceLowToHigh':
                SortedProduct.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighToLow':
                SortedProduct.sort((a, b) => b.price - a.price);
                break;
            case 'name-as':
                SortedProduct.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'bestSelling':
                SortedProduct.sort((a, b) => b.sales - a.sales);
                break;
            default:
                break;
        }

        // Call the parent function to update the sorted products
        sortProducts(SortedProduct);
    };

    return (
        <div className="sort-dropdown ">
            <select
                id="sortDropDown"
                value={selectedOption}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
                <option value="default">Sort by</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="name-as">Name: A to Z</option>
                <option value="bestSelling">Best Selling</option>
            </select>
        </div>
    );
}

