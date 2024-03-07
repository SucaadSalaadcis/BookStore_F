import React, { useState } from 'react'
import { Label, TextInput, Textarea } from 'flowbite-react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadBooks() {
 

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
  // handlebook submission
  const handlebookSubmit = (e) => {
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
   console.log(bookObj);

   // send data to the database
   fetch("https://book-b.onrender.com/upload_book",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookObj)
   }).then(res => res.json()).then(data => {
    // console.log(data);
    toast.success("Book Created Successfully...", {
      position: "top-right"
    });
    form.reset();
   })





  }


  return (
    <>

 <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
   {/* form */}
   <form onSubmit={handlebookSubmit} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
    {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title " />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name " />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
      </div>
      </div>
     
    {/* second row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select id='inputState' name='categoryName' className='full rounded' value={selectedBookCategory}
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
        <Textarea className='w-full' id="bookDescription" name='bookDescription'  placeholder="Write your book description..." required rows={4} />
      
      </div>
  {/* book pdf link*/}
     
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book Pdf URL" />
        </div>
        <TextInput id="bookPdfURL" name='bookPdfURL' type="text" placeholder="book Pdf URL" required />
      </div>

      <button className='mt-5 bg-gradient-to-tr  from-red-300 via-indigo-200 to-pink-300 h-10 font-extrabold' type="submit">Upload Book</button>
     
    </form>
    </div>
    <ToastContainer />

    </>
  )
}

export default UploadBooks