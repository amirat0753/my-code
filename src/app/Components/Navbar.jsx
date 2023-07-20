"use client"
import { useState } from 'react';
import Image from 'next/image'
import DOCTOR from '../images/DOCTOR.jpg';
import dental from '../images/dental.png'
import {Poppins} from 'next/font/google';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineInstagram,AiFillTwitterCircle,AiOutlineFacebook } from 'react-icons/ai';



export  default function Navbar () {
 
  return (
        
    <div className='bg-white '>
        
      <nav className='flex justify-between shadow-md fixed w-full pr-44 bg-white z-50' >
       <Link href={'/'} >
            <span className=' '>
              <Image className=' transform  hover:translate-x-4  duration-75 animate-pulse w-[150px] h-[140px]' src={dental} alt='dental logo'width={120} height={50}  />
        </span>
        </Link>
        <div className='hidden sm:flex'>
          <ul className='flex justify-around gap-14 uppercase pt-14 pl-40 text-lg'>
           

             
          <Link href={'/'}><li>Home</li></Link>
              <Link href={'/Company'}><li>Company</li></Link>
              <Link href={'/Services'}><li>Services</li></Link>
          <Link href={'/Contact'}><li>Contact</li></Link>
       

          <span className='flex gap-x-10 pl-40'>
              <Link href="tel:+234 912 862 4858">
                <li className='h'>Tel:+2349128624858 </li>
                </Link>
             
              <Link href={'/Booknow'}>
                <li className=' pb-8 -mt-2 border-[1px] h-8 p-2  rounded-md uppercase bg-sky-500 text-white hover:bg-[#0a132e]'>Book now</li>
                </Link>
          </span>
          
                  
         
          </ul>
         </div> 
        {/* <div>
          <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className={menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-100 p-10 ease-in duration-500"
         :" fixed left-[-100%] top-0  p-10 ease-in duration-500" }>

        </div>
        <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='md:hidden cursor-pointer '>
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className='flex-col py-4'>
          <ul className='flex justify-around gap-14 uppercase pt-14 pl-40 text-xl'>
           


            <Link href={'/'}>
              <li onClick={() => setMenuOpen(false)}>Home</li>
            </Link>
            <Link href={'/Company'}>
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>Company</li>
            </Link>
            <Link href={'/Services'}>
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>Services</li>
            </Link>
            <Link href={'/Contact'}>
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>Contact</li>
            </Link>
       

    
          <Link href="tel:+234 912 862 4858">
                <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>Tel:+2349128624858 </li>
          </Link>
             
          <Link href={'/Booknow'}>
                <li className= 'py-4 cursor-pointer pb-8 -mt-2 border-[1px] h-8 p-2  rounded-md uppercase bg-sky-500 text-white hover:bg-[#0a132e]'>Book now</li>
          </Link>
        </ul>
        </div>
        <div className='flex flex-row justify-around pt-10 items-center'>
          <AiOutlineInstagram size={20} className='cursor pointer' />
          <AiOutlineFacebook size={30} className='cursor pointer' />
          <AiFillTwitterCircle size={30} className='cursor pointer' />
        </div>
         <Link href={'/'} >
        <span className=' '>
            <Image className=' cursor-pointer pt-6 transform  hover:translate-x-4  duration-75 animate-pulse w-[150px] h-[140px]'
              src={dental} alt='dental logo'
              width={120}
              height={50} />
        </span>
        </Link> */}
        </nav>
       </div>

   
     )
}
