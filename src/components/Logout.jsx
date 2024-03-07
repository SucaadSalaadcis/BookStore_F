import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'

import { useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Logout() {

  
    const {logout} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ||"/";

    const handleLogout = () => {
        logout().then(() => {
           
            // Sign-out successful.  
            navigate(from, {replace: true});
          }).catch((error) => {
            // An error happened.
          });
    }

  return (
    <>
    <div className='h-screen flex items-center justify-center bg-teal-100'>
        <button className='bg-red-500 px-8 text-white rounded py-2 ' onClick={handleLogout}>Logout</button>
    </div>

<ToastContainer />

</>
  )
}

export default Logout