import React from 'react'
import dental from '../images/dental.png';
import Image from 'next/image';
import { Kanit } from 'next/font/google';
import {SiWorldhealthorganization} from 'react-icons/si'

const text = Kanit({
  subsets: ['latin'],
  weight:['300'],
})
export default function List() {
  return (
    <div className={text.className}>
      <main className='flex justify-around bg-[#0a132e] p-12 pt-32 text-white w-[100rem]'>
         
        <div className='pt-12 relative bottom-12 text-lg '>
          <SiWorldhealthorganization />
          <p >PHG</p>
           <p>build a better website for your <br />
          medical and healthcare business today</p>                   
        </div>
        
        <section className='space-y-4'>
        
        <h2>PRODUCT</h2>
         <p>Home</p>
         <p>Company</p>
         <p>Services</p>
        <p>Blog</p>
          
     </section>
      <section className=' space-y-4'>
         <h2>RESOURCES</h2>
         <p>Service Page</p>
         <p>Blog post</p>
         <p>404</p>
        <p>Password</p>
      </section>
     
      <section className='space-y-4'>
          <h2>COMPANY</h2>
          <p>Contact</p>
         <p>Style Guide</p>
         <p>More Templates</p>
      
        </section>
        <section className='pb-14 space-y-4'>
          <h2>CONTACT US</h2>
          <p></p>
          <p>+234 812 872 4858</p>
          <p>amira@gmail.com</p>
        </section>
     
        </main>
      
    </div>
  )
}

