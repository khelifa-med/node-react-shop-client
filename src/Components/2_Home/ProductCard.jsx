import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux-toolkit/Slices/CartSlice';

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className='cursor-pointer w-full h-full group flex flex-col justify-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'>
            {/* Image and button container */}
            <div className="group relative w-full h-64 overflow-hidden rounded-lg">
                <img src={product.images[0]} alt={product.name} />
                <div className="absolute -bottom-20 w-full group-hover:bottom-0 transition-all duration-300 flex justify-center items-center">
                    <button
                        onClick={() => {
                            dispatch(addToCart(product));
                        }}
                        className='left-0 w-11/12 z-10 bg-stone-500 text-green-300 py-2 rounded hover:bg-stone-600 transition duration-300'
                    >
                        Add to Cart
                    </button>
                </div>

                {/* Icons */}
                <div className="absolute top-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button>
                        <FaRegHeart className='absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-300' />
                    </button>
                    <button>
                        <FaRegEye className='absolute top-2 right-8 text-gray-500 hover:text-gray-800 transition duration-300' />
                    </button>
                </div>
            </div>
            <div className="py-3 px-2 flex flex-col gap-2">
                <h3 className='text-gray-500'>{product.category}</h3>
                <div className="flex justify-between items-center">
                    <h1 className='font-bold'>{product.name}</h1>
                    <h4 className='font-bold text-lime-500'>$ {product.price}</h4>
                </div>
            </div>
        </div>
    );
}
