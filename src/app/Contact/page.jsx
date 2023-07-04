import React from 'react';
import Image from 'next/image';
import woman from '../images/woman.jpg';
import { Kanit } from 'next/font/google'; 

const word = Kanit({
  subsets: ['latin'],
  weight: ['400']
 })

export default function Page() {
  return (
    <div className={word.className}>
      <section className='grid grid-cols-2 justify-center pt-36 mr-16 mb-24'>
        <div>
          <Image className="rounded-r-full" src={woman} alt="doctor smiling" width={700} height={600} />
        </div>
        <div className='mx-14 pb-2 my-8'>
          <h2 className='text-3xl pb-3'>CONTACT US</h2>
          <form className='grid grid-col-2 space-y-7 text-lg '>
            <label  htmlFor="name"> Name</label>
              <input className='border-b-2' type="text" placeholder="Enter your name" />
            
            <label htmlFor="email">Email  </label>
              <input className='border-b-2'  type="text" placeholder="Enter a valid email address" />
           
            <label className='pb-4' htmlFor="message">Message </label>
            <input className='border-b-2' type="text" name="message" />
    
            <button className='pr-52 border rounded-md p-1' type="submit">Submit</button>
          </form>
        </div>
        
        <section className='flex gap-x-24 ml-72'>

         <article>
            <h2>CALL US</h2>
            <p>
            <a href="#">+234812872458</a>
            </p>
            <p>
             <a href="#">+124983564454</a>
            </p>
         
          </article>

          <article>
           <h2>LOCATION</h2>
            <p>No 42 montgomery road, yaba Lagos, Nigeria</p>
          </article>
           
          <article>
            <h2>SEND AN EMAIL</h2>
          <a href="#">ameeraadebisi@gmail.com</a>
          </article>
          
          <article>
          <h2>HOURS</h2>
          <p>mon-fri....10am-8pm</p>
          <p>sat,sun...6am-7pm</p>
           </article>
         

          </section>
         
      </section>
    </div>
  );
}
