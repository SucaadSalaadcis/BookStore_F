import React from 'react'
import img5 from "../assets/banner/44.jpg"
import img6 from "../assets/banner/45.jpg"
function Dashboard() {
  return (
  
    // 
     <>

    <div className='flex gap-5 pt-10 ml-5'>

    <div className='w-[230px] h-[100px] bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200  rounded  p-2 pt-10 pl-[8%] text-black font-bold uppercase'> Books</div>
    <div className='w-[230px] h-[100px] bg-gradient-to-tr  from-blue-200 via-indigo-200 to-rose-200 rounded p-2 pt-10 pl-[7%] text-black font-bold uppercase'>Customers</div>
    <div className='w-[230px] h-[100px] bg-gradient-to-tr  from-red-200 via-indigo-200 to-blue-200 rounded p-2 pt-10 pl-[8%] text-black font-bold uppercase'>Users</div>
    <div className='w-[230px] h-[100px] bg-gradient-to-tr  from-blue-200 via-rose-200 to-rose-200 rounded p-2 pt-10 pl-[7%] text-black font-bold uppercase'>Categories</div>

   </div>

  <br/>  <br/> <br/> <br/>
    <div className='flex absolute top-[40%] gap-5 pt-10  ml-[21%]'>

    <div className=' h-[170px] bg-gray-300 shadow-2xl rounded  p-2 pt-10 pl-[7%] text-black font-bold uppercase'>
      <img src={img5} className='rounded mr-10  w-[430px]' alt="" />
    </div>
   </div>
 
    <div className='flex absolute top-[40%] gap-5 pt-10  ml-[60%]'>

    <div className=' h-[170px] bg-pink-300 shadow-2xl rounded  p-2 pt-10 pl-[7%] text-black font-bold uppercase'>
      <img src={img6} className='rounded mr-10  w-[430px]' alt="" />
    </div>
   </div>
 
     </>


  )
}

export default Dashboard