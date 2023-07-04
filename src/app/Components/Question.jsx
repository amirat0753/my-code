import React from 'react'
import Image from 'next/image';
import { Kanit, } from 'next/font/google';
import laptop from '../images/laptop.jpg';
import { AiOutlineCheckCircle } from 'react-icons/ai';



  const team = Kanit({
  subsets:['latin'],
  weight:['500']
})
export default function Question() {
  return (
    <div>
      <div className='w-[100rem] h-[50%]'>
        <section className='flex justify-around py-14'>
          <article className='pt-14 '>
         <article className={team.className}>
           <p className='text-3xl py-4'>post your questions our experts are ready to answer</p>
              <p className='py-4'>we service to you 24/7 will ensure 100% care</p>
              <ul >
                <span className='flex gap-4'>
                  <AiOutlineCheckCircle className='mt-1' />
                  <li >Teeth modification ? </li>
                </span>
                <span className='flex py-7 gap-4'>
                  <AiOutlineCheckCircle className='mt-1'/>
                   <li>Obstetrics and Gynecology?</li>
                </span>
                 <span className='flex  gap-4'>
                  <AiOutlineCheckCircle className='mt-1'/>
                  <li>Chronic Disease Management?</li>
                  </span>
            <li className='pt-12'>
              <button className=' rounded-full p-4 bg-blue-500 text-white'>book an appointment?</button>
            </li>
              </ul>
            
            </article>
            
            
        </article>
    
          
           <article className='grid justify-between relative  top-24'>
          <Image src={laptop} alt='nurse on laptop' width={500} height={600} />
          </article>
      </section>
          </div>
      </div>
      
   
  )
}
