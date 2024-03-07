import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    fetch("https://book-b.onrender.com/all_books").then(res => res.json()).then(data => setBooks(data))
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24 '>
      <h2 className='text-5xl font-bold text-center'> All Books Are Here...</h2>

      <div className='grid my-12 gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book =>  <div>
            <img src={book.imageURL} alt=""  className=' h-[70%] w-[50%] ml-28  md:h-[65%] md:w-[85%] md:ml-8 '/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p className='ml-28 md:ml-8'>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p className='ml-28 md:ml-8'>
                Here  the biggest enterbise 
              </p>
            </p>

            <button className='bg-gradient-to-tr  from-blue-400 via-sky-200 to-pink-800  mt-3 font-bold py-2 px-24 rounded ml-28 md:ml-8'>
            <a href={book.bookPdfURL}>Buy</a>
            {/* <a href="https://www.goodreads.com/book/show/62080187-never-lie">Buy</a> */}
            </button>
          </div>)
        }
      </div>
    </div>
  )
}

export default Shop