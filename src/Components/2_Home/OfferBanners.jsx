import React from 'react'

export default function
    () {
    return (
        <div className="w-full flex flex-col justify-center items-center p-10">
            <h1 className="text-3xl font-bold mb-10">Offer Banners </h1>
            <div className='w-full flex justify-center items-center gap-4 bg-gray-100'>
                <div className="flex-1 relative">
                    <div className="">
                        <img src="./img/Hero_banner/01.jpg" className='w-full h-full' />
                    </div>
                    <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
                        <h1 className="text-2xl font-bold">Get 50% off</h1>
                        <p className="text-gray-300">On all products</p>
                        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Shop Now</button>
                    </div>  
                </div>

                <div className="flex-1 relative">
                    <div className="">
                        <img src="./img/Hero_banner/04.jpg" className='w-full h-full' />
                    </div>

                    <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
                        <h1 className="text-2xl font-bold">Get 50% off</h1>
                        <p className="text-gray-300">On all products</p>
                        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Shop Now</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}
