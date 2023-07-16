

import Image from 'next/image'
import DOCTOR from '../images/DOCTOR.jpg';
import dental from '../images/dental.png'
import {Poppins} from 'next/font/google';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export default function Navbar() {
  return (
        
    <div className='bg-white '>
        
        <nav className='flex justify-between shadow-md fixed w-full pr-44 bg-white z-50' >
            <span className=' '>
              <Image className=' transform  hover:translate-x-4  duration-75 animate-pulse w-[150px] h-[140px]' src={dental} alt='dental logo'width={120} height={50}  />
        </span>
    
          <ul className='flex justify-around gap-14 uppercase pt-14 pl-40 text-xl'>
           

             
          <Link href={'/'}><li>Home</li></Link>
              <Link href={'/Company'}><li>Company</li></Link>
              <Link href={'/Services'}><li>Services</li></Link>
          <Link href={'/Contact'}><li>Contact</li></Link>
       

          <span className='flex gap-x-10 pl-40'>
              <Link href="tel:+234 912 862 4858">
                <li className=''>Tel:+2349128624858 </li>
                </Link>
             
              <Link href={'/Booknow'}>
                <li className=' pb-8 -mt-2 border-[1px] h-8 p-2  rounded-md uppercase bg-sky-500 text-white hover:bg-[#0a132e]'>Book now</li>
                </Link>
          </span>
          
                  
         
          </ul>
     
       
        </nav>
       </div>

   
     );
}