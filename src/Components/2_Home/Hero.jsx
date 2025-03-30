import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function Hero() {
  const [swiper, setSwiper] = useState([]);

  useEffect(() => {
    fetch('./public/img/Hero_Slider/slider.json')
      .then(res => res.json())
      .then(data => {
        setSwiper(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {swiper.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='w-full h-full flex justify-center items-center'>
              <img src={slide.image} alt={slide.title} className='w-full h-full object-cover' />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30'>
                <h1 className='text-stone-700 text-4xl font-bold'>{slide.title}</h1>
                <p className='text-white text-xl mt-4'>{slide.subtitle}</p>
                <button className='bg-gray-200 px-4 py-2 mt-4 rounded hover:bg-white transition duration-300'>
                  <a href='#'
                    className='text-black font-semibold text-lg'
                  >
                    {slide.buttonText}
                  </a>

                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}
