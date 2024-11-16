import React from 'react'
import Avatar from "react-avatar"
import Logo from "../assets/Logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 '>

      <div className="flex  items-center">
        {/* Hamburger */}
        <GiHamburgerMenu  size={"24px"}/>
        <img className='px-5' width={"115px"} src={Logo} alt="logo" />
      </div>

      <div className="flex items-center w-[40%]">
         <div className="w-[100%] px-1 py-2 border border-gray-400 rounded-l-full">
            <input type="text" placeholder='Search' className=' w-full outline-none px-2' />
         </div>
         <button className='border border-gray-400 outline-none px-3 py-2 rounded-r-full text-center'><IoSearch size={"24px"}/></button>
      </div>

      <div className="flex w-[10%] justify-between">
        <AiOutlineVideoCameraAdd size={"34px"} className='cursor-pointer'/>
        <MdOutlineNotificationsActive size={"34px"} className='cursor-pointer'/>
        <Avatar githubHandle="sitebase" size={34} round={true}  className='cursor-pointer'/>
      </div>

    </div>
  )
}

export default Navbar
