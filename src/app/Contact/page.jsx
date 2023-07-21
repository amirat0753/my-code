import React from 'react';
import Image from 'next/image';
import woman from '../images/woman.jpg';
import { Poppins} from 'next/font/google'; 
import styles from '../style.module.css';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import { BiTimer } from 'react-icons/bi'
import Link from 'next/link';


export default function contact() {
  return (
    <div className='w-full'>
      <section className='grid grid-cols-2 justify-center pt-48 mr-16  '>
        <div>
          <Image className="rounded-r-full" src={woman} alt="doctor smiling" width={700} height={600} />
        </div>
        <div className='mx-14 pb-2 mb-16'>
          <h2 className='text-2xl pb-3 font-bold'>CONTACT US</h2>
          <form className='grid grid-col-2 space-y-7 text-lg '>
            <label  htmlFor="name">Names</label>
              <input className='border-b-2' type="text" placeholder="Enter your name" required />
            
            <label htmlFor="email">Email  </label>
              <input className='border-b-2 '  type="text" placeholder="Enter a valid email address" required/>
           
            <label className='pb-4' htmlFor="message">Message </label>
            <input className='border-b-2' type="text" name="message" required />
    
            <button className='pr-52 border rounded-md p-1 bg-sky-500 text-white' type="submit">Submit</button>
          </form>
        </div>
      
         
        <section className='flex m-14  border-blue-700 ml-24 gap-12 w-full'>

            <article className='border px-20 text-center pt-9 text-white bg-sky-500 rounded-md p-10 '>
              <span className='flex justify-around pb-4'>
              <FiPhoneCall className='mt-2 text-[#444]' size={20}/>
            <h2 className='text-xl pt-1 font-bold'>CALL US</h2>
              </span>
            <Link href="tel:+234 912 862 4858">
                <p className='text-lg'>
                   +2349128624858
                   </p>
                
            
            <p className='text-lg'>
             +124983564454
            </p>
          </Link>
          </article>

            <article className='border  text-white bg-sky-500 rounded-md px-20 pt-8 '>
              <span className='flex justify-center pr-10 pb-4  space-x-2'>
               <MdLocationPin className='mt-1 text-[#444]' size={25}/>
               <h2 className='text-xl pt-1 text-white font-bold'>LOCATION</h2>
              </span>
         
            <p className='text-lg text-white'>No 42 montgomery road, yaba Lagos, Nigeria</p>
          </article>
           
            <article className='border rounded-md  text-white p-14 px-12 pt-8  bg-sky-500'>
              <span className='flex justify-around pb-4  space-x-2'>
                <MdEmail className='text-[#444]' size={30}/>
                <h2 className='text-xl pt-1 font-bold'>SEND AN EMAIL</h2>
            </span>
            <address>
            <p className='text-lg'>
              ameeraadebisi@gmail.com 
              ameera0753@gmail.com
              </p>
              </address>
          </article>
          
            <article className='border bg-sky-500 px-20 pt-8 rounded-md  text-white  p-10  '>
              <span className='flex justify-around pb-4 space-x-2 pr-5'>
                <BiTimer className='text-[#444]' size={30}/>
                <h2 className='text-xl pt-1 font-bold'>HOURS</h2>
                </span>
          <p className='text-lg'>mon-fri....10am-8pm</p>
          <p className='text-lg'>sat,sun...6am-7pm</p>
           </article>
         

          </section>
        
          
      </section>
     
    </div>
  );
}
