import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// flowbite
import { Avatar } from 'flowbite-react';
import img from "../assets/banner/38.jpg"
import img2 from "../assets/banner/s2.jpg"
import img3 from "../assets/banner/s3.jpg"
import img4 from "../assets/banner/43.jpg"
import img5 from "../assets/banner/40.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// react icons
import {FaStar} from "react-icons/fa6"


// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Review() {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        {/* cards */}
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-gradient-to-tr  from-indigo-200 via-red-200 to-blue-200 py-8 px-4 md:m-5 rouded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores ex aliquam placeat reprehenderit dolores sequi illum.</p>
                         <Avatar img={img2} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Suad Salad</h5>
                         <p className='text-base'>CEO, ABC Company</p>

                </div>
            </div>
        </SwiperSlide>

            {/* 2 */}
            <SwiperSlide className='shadow-2xl bg-gradient-to-tr  from-indigo-200 via-blue-200 to-pink-200 py-8 px-4 md:m-5 rouded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores ex aliquam placeat reprehenderit dolores sequi illum.</p>
                         <Avatar img={img3} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Salmo Mukhtar</h5>
                         <p className='text-base'>CEO, DEF Company</p>

                </div>
            </div>
        </SwiperSlide>
         
          {/* 3 */}
          <SwiperSlide className='shadow-2xl  bg-gradient-to-tr  from-indigo-200 via-red-200 to-pink-200 py-8 px-4 md:m-5 rouded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores ex aliquam placeat reprehenderit dolores sequi illum.</p>
                         <Avatar img={img} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Ruwa Ali</h5>
                         <p className='text-base'>CEO, GHI Company</p>

                </div>

              
            </div>
        </SwiperSlide>
      

            {/* 4 */}
            <SwiperSlide className='shadow-2xl bg-gradient-to-tr  from-blue-200 via-red-200 to-pink-200 py-8 px-4 md:m-5 rouded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores ex aliquam placeat reprehenderit dolores sequi illum.</p>
                         <Avatar img={img4} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Ruhan Ping</h5>
                         <p className='text-base'>CEO, JKL Company</p>

                </div>
            </div>
        </SwiperSlide>
       
          {/* 5 */}
          <SwiperSlide className='shadow-2xl bg-gradient-to-tr  from-red-200 via-indigo-200 to-pink-200 py-8 px-4 md:m-5 rouded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores ex aliquam placeat reprehenderit dolores sequi illum.</p>
                         <Avatar img={img5} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Josh Rale</h5>
                         <p className='text-base'>CEO, MNO Company</p>

                </div>
            </div>
        </SwiperSlide>
        
          {/* 6*/}
       
       
      </Swiper>
        </div>
    </div>
  )
}

export default Review