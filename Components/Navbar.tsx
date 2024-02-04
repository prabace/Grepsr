"use client";
import React, {useEffect, useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode';
import { remove } from "@/actions/action";


type DecodeTokenType = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
  };

  type PropsType = {
    userToken: { value: string; name: string };
  };

const Navbar = ({ userToken }: PropsType) => {


    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState<{ [key: string]: string }>({});
    

    useEffect(() => {
        if (userToken.value) {
          try {
            const decodedToken: DecodeTokenType = jwtDecode(userToken?.value);
            const userObject: { [key: string]: string } = {

                username: decodedToken.username,
                email: decodedToken.email,
                firstName: decodedToken.firstName,
                lastName: decodedToken.lastName,
                image: decodedToken.image,
              }
              setUser(userObject);
          } catch (error) {
            console.error('Error decoding user token:', error);
          }
        }
      }, [userToken]);


    const handleClick = () => setNav(!nav)
    const handleAvatar = () => setOpen(!open)

    function handleLogOut() {
        setNav(false);
        remove("userToken");
      }
   

  return (
    <div className="w-screen h-[80px] shadow-lg relative z-10 ">
    <div className="px-2 flex justify-between items-center w-full h-full">

        <Link href={"/Product"}><img className='h-14 mx-8' src="https://s3.amazonaws.com/assets.grepsr.com/static/logo.png" alt="logo"/></Link>
        <ul className="hidden lg:flex items-center gap-x-60">
            <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-red-300 via-purple-500 to-pink-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                <Link className='text-xl font-light tracking-widest' href="/Product">PRODUCTS</Link>
            </li>
        
            <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-red-300 via-purple-500 to-pink-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                <Link className='text-xl font-light tracking-widest' href="/analytics">ANALYTICS</Link>
            </li>
           
        </ul>


        <div className="hidden lg:flex mx-16 ">
            
            {userToken&&userToken.value&&<div className="ml-10 mr-10 px-8  " onClick={handleAvatar}>
            <div className='flex justify-center items-center text-[#f9a826]  gap-x-10 cursor-pointer'>   
            <img className='h-10 w-auto' src={user.image}/>
            {user.username}
            </div>
                <ul className={!open ? 'hidden' : 'absolute mt-3  bg-white rounded-2xl px-4 py-4'} >
                    <div className="text-[#f9a826] ">
                    Signed In
                    </div>
                    <hr/>

                    <li onClick={handleLogOut} className="hover:bg-gray-200 hover:cursor-pointer w-full p-3">Log Out</li>


                </ul>
                
            </div>}
        </div>
        <div className="lg:hidden block" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}

        </div>
    </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 text-center  lg:hidden'} >
        <li className=" w-full">
        <Link href="/Product">Products</Link>
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