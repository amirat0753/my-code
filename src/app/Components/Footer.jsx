import React from 'react'
import dental from '../images/dental.png';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { SiWorldhealthorganization } from 'react-icons/si'
import { BiPhoneCall } from 'react-icons/bi'; 
import { MdOutlineMail } from 'react-icons/md';
import { BsHospital } from 'react-icons/bs';
import Link from 'next/link';


const year = new Date().getFullYear()
export default function List() {
  return (
    <div>
      <main className='flex justify-around bg-[#0a132e] p-12 pt-32 text-white w-full '>
         
        <div className='pt-12 relative bottom-12 text-lg '>
          <span className='flex'>
            <p className='m-2' >
          <SiWorldhealthorganization size={30}/></p>
            <p className='pt-3 text-xl font-bold'>PHG {year} </p>
            </span>
           <p>Build a better website for your <br />
          medical and healthcare business today</p>                   
        </div>
        
        <section>
        
          <h2 className='font-bold pb-2'>PRODUCT</h2>
         
          <Link href={'/'}>
            <p className='py-2'>Home</p>
          </Link>
          <Link href={'/Company'}>
            <p className='py-3'>Company</p>
         </Link>
          <Link href={'/Booknow'}>
            <p className='py-3'>form</p>
         </Link>
        
          
     </section>
      <section >
          <h2 className='font-bold pb-2 '>RESOURCES</h2>
         
          <Link href={'/Services'}>
            <p className='py-2'>Services</p>
          </Link>
          <Link href={'/Services'}>
              <p className='py-3'>Service Page</p>
            </Link>
           <Link href={'/Booknow'}>
              <p className='py-3'>Book us</p>
           </Link>
          
      </section>
     
      <section>
        <h2 className='font-bold  pb-2'>COMPANY</h2>
         
          <Link href={'/Contact'}>
           <p className='py-2'>Contact</p>
            </Link>
             
            <Link href={'/Blog'}>
            <p className='py-3'>Blog</p>
          </Link>
           <Link href={'/Blog'}>
            <p className='py-3'>Blog Page</p>
          </Link>
         
        </section>
        <section className='pb-14 space-y-4'>
          <h2 className='font-bold pl-2 pb-2'>CONTACT US</h2>
          
          <span className='flex space-x-3'>
            <p className='pt-1'>
              <BiPhoneCall />
              </p>
            <p className=''>
              <Link href="tel:+234 812 872 4858">
                +234 812 872 4858
              </Link>
            </p>
          </span>

          <span className='flex space-x-3'>
            <p className='pt-1'>
              <MdOutlineMail />
            </p>
            
              <address>
               <p>amira@gmail.com</p> 

              </address>
          
          </span>
          <span className='flex'>
          <p className='pt-1 '>
            <BsHospital />
            </p>
            <p className='pl-4 w-1/2'>
              No 42 montgomery road, yaba Lagos, Nigeria
            </p>
          </span>
        </section>
      
        </main>
     
    </div>
  )
}

