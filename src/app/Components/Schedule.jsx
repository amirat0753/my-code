import React from 'react'
import {Poppins} from 'next/font/google';
import styles from '../style.module.css'
import Link from 'next/link';

  
export default function Schedule() {
  return (
    <div className='w-full h-[50%]'>
      
      <section className='text-center p-28 bg-gradient-to-tr from-[#0a132e] via-indigo-950 to-blue-600 m-24 text-white'>
        <p className='text-3xl font-bold pb-12'>Schedule inperson or virtual appointment today</p>
            <div>
              <Link href={'/Booknow'}>
              <button className='rounded-full shadow-md shadow-black hover:text-lg p-3 bg-blue-600 '>Book an appointment</button>
              </Link>
          </div>
        </section>
    
      
    
      </div>
 
   
  
   
  )
}
