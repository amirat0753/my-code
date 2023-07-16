import React from 'react'
import Image from 'next/image';
import {Poppins } from 'next/font/google';
import laptop from '../images/laptop.jpg';
import { AiOutlineCheckCircle } from 'react-icons/ai';



export default function Question() {
  return (
    <div >
      <div className='w-full h-[50%]'>
        <section className='flex justify-around p-14 pb-10'>
        <article>
             <p className='text-3xl py-4 font-bold'>Post your questions our experts are ready to answer</p>
              <p className='py-6  text-lg font-bold'>We service to you 24/7 will ensure 100% care</p>
            <ul>
              
                <span className='flex gap-4 text-lg'>
                  <AiOutlineCheckCircle className='mt-1' />
                  <li >What can I do to prevent certain health conditions? </li>
               </span>
              
                <span className='flex py-7 gap-4 text-lg'>
                  <AiOutlineCheckCircle className='mt-1'/>
                   <li>What should I eat to maintain a healthy diet?</li>
              </span>
              
                 <span className='flex gap-4 text-lg'>
                  <AiOutlineCheckCircle className='mt-1'/>
                  <li>How can I achieve and maintain a healthy weight?</li>
                  </span>
            <li className='pt-12'>
              <button className=' rounded-full p-4 bg-blue-500 hover:bg-[#0a132e] text-white'>Book an appointment?</button>
            </li>
          </ul>
          </article>
    
       <span className='pt-8  '>
          <Image className='border-b-8 border-r-8 rounded-md shadow-xl border-blue-500' src={laptop} alt='nurse on laptop' width={500} height={700} />
          </span>
           </section>
          </div>
      </div>
      
   
  )
}
