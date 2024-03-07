import { Button, Label, TextInput, Textarea } from 'flowbite-react';

import React, { useState } from 'react'
import {useLoaderData, useParams} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditBooks() {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL} = useLoaderData()
 
  

  const bookCatergories = [
   "Fiction",
   "Non-Fiction",
   "Mistery",
   "Programming",
   "Fantasty",
   "Horror",
   "History",
   "Self-help",
   "Business",
   "Children Books",
   "Travel",
   "Religion",
   "Art And Design"
  ];

  const [selectedBookCategory, setSelectedBookCatergory] = useState(bookCatergories[0]);

  const handleChangeSelectedValues = (e) => {
   console.log(e.target.value);
   setSelectedBookCatergory(e.target.value);
  }
  // handle book update
  const handlebookUpdate = (e) => {
   e.preventDefault();
   const form = e.target;
   const bookTitle = form.bookTitle.value;
   const authorName = form.authorName.value;
   const imageURL = form.imageURL.value;
   const category = form.categoryName.value;
   const bookDescription = form.bookDescription.value;
   const bookPdfURL = form.bookPdfURL.value;
   console.log(bookTitle);

   const bookObj = {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfURL
   }
  //  console.log(bookObj);

  // update book data
 
  fetch(`https://book-b.onrender.com/book/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookObj)
  }).then(res => res.json()).then(() =>  toast.success("Updated Successfully...", {
    position: "top-right"
  }));
  //  console.log(id);
  }


  return (
   <>

 <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Update A Book</h2>
   {/* form */}
   <form onSubmit={handlebookUpdate} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
    {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title " />
        </div>
        <TextInput id="bookTitle" name='bookTitle' defaultValue={bookTitle} type="text" placeholder="Book Name" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name " />
        </div>
        <TextInput id="authorName" name='authorName' defaultValue={authorName} type="text" placeholder="Author Name" required />
      </div>
      </div>
     
    {/* second row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' defaultValue={imageURL} type="text" placeholder="Book image URL" required />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select id='inputState' name='categoryName' defaultValue={category} className='full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValues}>
          {
            bookCatergories.map((option) => <option key={option} value={option}> {option}</option>)
          }

        </select>
      </div>
      </div>
     
     {/* third row */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea className='w-full' id="bookDescription" defaultValue={bookDescription} name='bookDescription'  placeholder="Write your book description..." required rows={4} />
      
      </div>
  {/* book pdf link*/}
     
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book Pdf URL" />
        </div>
        <TextInput id="bookPdfURL" name='bookPdfURL' defaultValue={bookPdfURL} type="text" placeholder="book Pdf URL" required />
      </div>
      <Button className='mt-5' type="submit">Update Book</Button>
     
    </form>

    </div>

<ToastContainer />

</>
  )
}

export default EditBooks