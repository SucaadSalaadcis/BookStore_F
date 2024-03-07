import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
import Swal from 'sweetalert2'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ManageBooks() {

  const [allBooks, setAllBooks] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/all_books").then(res => res.json()).then(data => setAllBooks(data));
  });
  
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(() => toast.success("Book Deleted Successfully...", {
      position: "top-right"
    }));
    //  console.log(id);

  }

  return (
    <>
    <div className='px-4 my-12 lg:px-24 '>
       <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
       {/* table */}
       <Table className='lg:w-[900px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit and Delete</span> 
          </Table.HeadCell>
        </Table.Head>
          {
            allBooks.map((book,index)=>   <Table.Body className="divide-y" key={book._id}>
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index +1}
            </Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10.00</Table.Cell>
            <Table.Cell>

              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit 
              </Link>
              <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-500'>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>)
          }
  
      </Table>
    </div>
    <ToastContainer/>
   </>
  )
}

export default ManageBooks