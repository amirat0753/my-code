import React from 'react'
import Image from 'next/image';
import white from '../images/white.jpeg';
import { Kanit } from 'next/font/google';
import { ImQuotesLeft } from 'react-icons/im'
import { MdKeyboardArrowRight } from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'


const test = Kanit({
  subsets: ['latin'],
  weight: ['400']
})
  
export default function Testimonial() {
  return (
    <div className='flex  justify-center w-[100rem] h-[50rem]'>
      <section className={test.className}>
      <article className='text-center py-14'>
        <h2 className='text-lg '>TESTIMONIAL</h2>
        <p className='text-3xl'>This is what our patient has to say about DR.Margeret</p>
      </article>
        <div className='flex justify-center '>
          <span className='pr-44'>
            <Image src={white} alt='doctor smiling' width={300} height={100} />
        
          </span>
          
     
        <div className='pt-36 pr-40'>
            <p>
             
                <ImQuotesLeft />
               
            I appreciate Dr. Margaret's exceptional care, <br />
            professionalism, and dedication to my well-being.
          </p>
          <p>
            I  express gratitude for her compassionate bedside manner and her ability to listen attentively to my
            <br />concerns. Dr. Margaret ensures I fully understand my treatment options and any necessary lifestyle changes.
          </p>
          <p className='text-xl py-5'>Lee Morgan Slack, Inc.</p>
            <p>New York, NY Team</p>
            <ImQuotesLeft />
          </div>
        
          
         
       </div>
      </section>
        <span className='flex justify-end '>
            <MdKeyboardArrowLeft size={30}/>
          </span>
          <span>
             <MdKeyboardArrowRight size={30} />
          </span>
    </div>
  );
}

