
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const products = useSelector((state) => state.products.items);
    const [productDetails, setProductDetails] = useState(null);
    const [currentImage, setCurrentImage] = useState(null); // State to track the main image

    useEffect(() => {
        const newProduct = products.find((item) => item.id === parseInt(productId));
        if (newProduct) {
            setProductDetails(newProduct);
            setCurrentImage(newProduct.images[0]); // Set the first image as the default main image
        }
    }, [productId, products]);

    if (!productDetails) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-xl font-semibold">Product not found!</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-6">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Product Images */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-center p-6">
                        {/* Main Image */}
                        <div className="flex justify-center items-center w-full h-96 overflow-hidden rounded-lg shadow-md">
                            <img
                                src={currentImage}
                                alt={productDetails.name}
                                className="w-full h-96 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-2 mt-4">
                            {productDetails.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-16 h-16 object-cover rounded-md border border-gray-300 hover:border-red-500 cursor-pointer ${
                                        currentImage === image ? 'border-red-500' : ''
                                    }`}
                                    onClick={() => setCurrentImage(image)} // Update the main image on click
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 flex flex-col justify-between">
                        <h1 className="text-3xl font-bold text-gray-800">{productDetails.name}</h1>
                        <p className="text-gray-600 mt-4">{productDetails.description}</p>
                        <p className="text-2xl font-semibold text-red-500 mt-6">
                            ${productDetails.price.toFixed(2)}
                        </p>
                        <button className="bg-lemon-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-lemon-600 transition mt-6">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="p-6 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                    {productDetails.reviews.length > 0 ? (
                        <div className="space-y-4">
                            {productDetails.reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 p-4 rounded-md shadow-sm border border-gray-200"
                                >
                                    <p className="text-gray-800 font-semibold">{review.user}</p>
                                    <p className="text-yellow-500">
                                        {'★'.repeat(review.rating)}{' '}
                                        {'☆'.repeat(5 - review.rating)}
                                    </p>
                                    <p className="text-gray-600 mt-2">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;