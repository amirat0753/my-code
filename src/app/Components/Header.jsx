import React from 'react'
import Image from 'next/image';
import nurses from '../images/nurses.jpg'
import { Vollkorn, Mitr, Kanit } from 'next/font/google';

const font = Kanit({
  subsets: ['latin'],
  weight: ['400'],
})
const mit = Mitr({
  subsets: ['latin'],
  weight: ['300'],
})

export default function Header() {
  return (
   
    <div className='bg-sky-400 p-32 pb-0  pr-0 flex gap-10 w-[100rem]'>
                
      <div className='flex flex-col h-1/2 '>
        <article className={mit.className}>
        <h1 className='  md:text-5xl sm:text-4xl text-[#0a132e] md: mb-8'>
          Prioritizing your health<br />
          empowers you to lead a vibrant life.
        </h1>
        <p className='text-white pb-10'>
          Routine medical check-ups are crucial for early detection of potential health issues. <br />
       
          Schedule regular visit to your healthcare provider and follow their advice for maintaining optimal health.
        </p>
       
           <span className='rounded-md p-2 bg-[#0a132e] text-white'>
            <a href >Book an Appointment</a>
          </span>
           </article>
      </div>
      <div className='w-1/2 ml-9 justify-end'>
          <Image src={nurses} alt= 'doctor performing surgery' width={700} height={700} />
          </div>
      </div>
  

  )
}
