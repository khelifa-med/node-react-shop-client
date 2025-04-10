import React from 'react'
import ProductList from '../Components/4_ShopPage/ProductList'

export default function Shop() {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full bg-gray-100'>
            <div className="w-11/12 h-11/12">
                <ProductList />
                
            </div>
        </div>
    )
}
