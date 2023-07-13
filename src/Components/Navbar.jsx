import './Navbar.css'
import logo from '../assets/images/md_main_logo.png'
import camera from '../assets/images/camera.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavBottom } from './NavBottom';
const Navigation = () => {
    return (
      <div className='navbar-wrapper'>
    <nav className="navbar h-[70px]  flex">
       <div className="navbar-brand ml-12">
        <img src={logo} className='w-[125px] h-[30px]'  alt="logo" />
    </div>
         <div className="font-sans pr-3 text-black ml-4 h-[36px] rounded-lg border-r-white bg-white flex items-center justify-center">
  <button className="flex items-center justify-center px-4">
    <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
  </button>
  <div className="border h-[36px]  rounded-r-lg border-white overflow-hidden flex">
    <input type="text" className="px-4  w-[900px] placeholder:text-sm text-black font-medium" placeholder="Search for products..."/>
              </div>
              <button className="flex items-center justify-center ">
         <img className='h-4 w-4' src={camera} />
  </button>
          </div>
          <div className='inline-flex justify-evenly'>
    <div className="p-3 flex">
                  <span>Categories</span>
                  <RiArrowDropDownLine className='text-2xl'/>
    </div>
    <div className="p-3 flex">
                  <span>Brands</span>
                  <RiArrowDropDownLine className='text-2xl'/>
    </div>
              <div className="mt-[6px] ml-4 flex">
                  <div className='h-[37px] w-[75px] bg-[#ffdb15] text-black rounded-lg flex items-center justify-center'><button className='text-center'>Sign In</button></div>
                  
    </div>
</div>
      
            </nav>
            <NavBottom/>
            </div>
      
  );
};

export default Navigation;