  import { Sidebar } from 'flowbite-react';
  import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
  import { BiBuoy } from 'react-icons/bi';

import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';

//
import { useSnackbar } from 'notistack';
import { useLocation, useNavigate } from 'react-router-dom';

function SidebarBook() {

 
  const { enqueueSnackbar } = useSnackbar();
  const {logout} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname ||"/";

  const handleLogout = () => {
      logout().then(() => {
          // Sign-out successful.
          enqueueSnackbar("LogOut Successfully...",{variant: 'success'});
          navigate(from, {replace: true});
        }).catch((error) => {
          // An error happened.
        });
  }



  //
  
  const {user} = useContext(AuthContext);
  console.log(user);

    return (
      <Sidebar  aria-label="Sidebar with content separator example">
         <Sidebar.Logo  href="#" img={user?.photoURL} imgAlt="Flowbite logo" className='rounded-full w-12 h-12'>
       {
        user?.displayName || "Demo user"
       }
      </Sidebar.Logo>
      <Sidebar.Items className="bg-gradient-to-tr rounded-md  from-blue-200 via-indigo-200 to-pink-200 text-black">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" className=' hover:text-black'  icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload"  className=' hover:text-black' icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage"  className=' hover:text-black' icon={HiInbox}>
            Mange Books
          </Sidebar.Item>
          <Sidebar.Item href="#"  className=' hover:text-black' icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/signUp"  className=' hover:text-black' icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiTable}>
          <button className='text-white font-semibold bg-gradient-to-tr  from-black via-white-200 to-red-200 px-8 rounded py-2 ' onClick={handleLogout}>Logout</button>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#"  className=' hover:text-black' icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#"  className=' hover:text-black' icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    
    )
}

export default SidebarBook