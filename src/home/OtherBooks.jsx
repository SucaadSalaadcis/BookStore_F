import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

function OtherBooks() {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
     fetch("http://localhost:3000/all_books").then(res => res.json()).then(data => setBooks(data.slice(8)))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div> 
  )
}

export default OtherBooks