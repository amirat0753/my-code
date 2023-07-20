import React from 'react'
import Image from 'next/image';
import nurses from '../images/nurses.jpg'
import { Poppins } from 'next/font/google';
import Link from 'next/link';



export default function Header() {
  return (
    <div>
    <div className='flex bg-sky-400 pb-0 justify-between pt-14 gap-24 w-full h-[120%]'>
       <article className='pl-32 pt-48 space-y-7'>
         <h1 className='text-5xl text-[#0a132e] '>
          Prioritizing your health<br />
          empowers you to lead a vibrant life.
          </h1>
            <p className='text-white pb-8'>
          Routine medical check-ups are crucial for early detection of potential health issues. <br />
       
          Schedule regular visit to your healthcare provider and follow their advice for maintaining optimal health.
            </p>
           
            <Link href={'/Booknow'}>
          <button className='border p-4 rounded-[10px]  text-white shadow-md bg-[#0a132e] hover:text-[#4977f6]'>
              Book an Appointment
          </button>
            </Link>
           </article>
     
        <span className='pt-48 pr-0 w-full md:w-1/2'>
          <Image src={nurses} alt= 'doctor performing surgery' width={700} height={500} />
          </span>
      </div>
  </div>

  )
}
