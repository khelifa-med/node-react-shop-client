import React from 'react'
import Hero from '../Components/2_Home/Hero'
import Categories from '../Components/2_Home/Categories'
import FeaturedProducts from '../Components/2_Home/FeaturedProducts'
import OfferBanners from '../Components/2_Home/OfferBanners'
import BestSeller from '../Components/2_Home/BestSeller'
import NewsLetter from '../Components/2_Home/NewsLetter'
import Blogs from '../Components/2_Home/Blogs'

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-gray-100'>
      <div className="w-full">
        <Hero />
        <Categories />
        <div className="my-8">
          <hr className="border-t-2 mx-10 border-gray-300" />
        </div>
        <FeaturedProducts />
        <div className="my-8">
          <hr className="border-t-2 mx-10 border-gray-300" />
        </div>
        <OfferBanners />
        <div className="my-8">
          <hr className="border-t-2 mx-10 border-gray-300" />
        </div>
        <BestSeller />
        {/* <div className="my-8">
          <hr className="border-t-2 mx-10 border-gray-300" />
        </div>
        <Blogs /> */}
        <div className="my-8">
          <hr className="border-t-2 mx-10 border-gray-300" />
        </div>
        <NewsLetter />
      </div>
    </div>
  )
}
