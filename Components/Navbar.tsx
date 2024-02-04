"use client";
import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [open, setOpen] = useState(false)

  return (
    <div className="w-screen h-[80px] shadow-lg relative z-10 ">
    <div className="px-2 flex justify-between items-center w-full h-full">

        <img className='h-14 mx-8' src="https://s3.amazonaws.com/assets.grepsr.com/static/logo.png" alt="logo"/>
        <ul className="hidden lg:flex items-center gap-x-60">
            <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-red-300 via-purple-500 to-pink-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                <Link className='text-xl font-light tracking-widest' href="/product">PRODUCTS</Link>
            </li>
        
            <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-red-300 via-purple-500 to-pink-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                <Link className='text-xl font-light tracking-widest' href="/analytics">ANALYTICS</Link>
            </li>
           
        </ul>


        <div className="hidden lg:flex mx-16">
            {/* {!user && <div>
            <Link to="/app/signin">
            <button className="bg-transparent hover:bg-indigo-600 hover:text-white lg:px-8 py-3 text-black mr-4 rounded-full">
               Sign In
            </button>
            </Link>
            <Link to="/app/signup">
            <button className="px-8 py-3 rounded-full">
                Sign Up
            </button>
            </Link>
            </div>} */}


            {/* {user&&<div className="ml-10 mr-10 px-8  " onClick={handleAvatar}>
                <img className="h-[50px] w-[100px]" src={profile} />

                
                <ul className={!open ? 'hidden' : 'absolute mt-3  bg-white rounded-2xl px-4 py-4'} >
                    <div className="text-[#f9a826]">
                    {userName}
                    </div>
                   <a href="http://localhost:3000/app/bookings"> <li className="hover:bg-gray-200 w-full">My Bookings</li></a>
                    <li onClick={handleLogOut} className="hover:bg-gray-200 w-full">Log Out</li>


                </ul>
                
            </div>} */}
        </div>
        <div className="lg:hidden block" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}

        </div>
    </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 text-center  lg:hidden'} >
        <li className=" w-full">
        <Link href="/product">Products</Link>
        </li>
        <li className=" w-full">
        <Link href="/analytics">Analytics</Link>
        </li>
        
        <div className="flex flex-col my-4">
           
        </div>
    </ul>



</div>
  )
}

export default Navbar