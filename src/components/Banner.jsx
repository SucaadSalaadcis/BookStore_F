import React from 'react'
import BannerCard from '../home/BannerCard'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-gradient-to-tr  from-red-200 via-indigo-200 to-pink-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 h-full space-y-8'>
                <h2 className='text-5xl font-bold text-black leading-snug'>Buy And Sell Your Books
                 <span className='text-blue-700'> for the best prices</span>
                </h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellendus minima molestiae sequi perspiciatis ad
                     quo natus dolorum reprehenderit animi atque?
                </p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search A Book' 
                    className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                    transition-all ease-in duration-300'>Search</button>
                </div>

            </div>

            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner