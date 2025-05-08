import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../Redux-toolkit/Slices/ProductsSlice';
import ProductCard from '../2_Home/ProductCard';

export default function ProductList() {
    const dispatch = useDispatch();

    // Get filtered products and status from the Redux store
    const products = useSelector((state) => state.products.filteredItems);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    // Fetch products when the component mounts
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <div className="w-full flex flex-col justify-center items-center bg-gray-100">
            {/* Product Grid */}
            <div className="w-full flex flex-col justify-center items-center py-10">
                {status === 'loading' && <p>Loading products...</p>}
                {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
                {status === 'succeeded' && (
                    <div className="grid grid-cols-4 gap-4 justify-center items-start w-full px-10">
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                product={item} // Pass the entire product object
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
