import React from 'react'
import Image from 'next/image';
import gloves from '../images/gloves.jpeg';
import { Poppins } from 'next/font/google';
import { ImQuotesLeft } from 'react-icons/im'
import { MdKeyboardArrowRight } from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'



  
export default function Testimonial() {
  return (
    <div className=' w-full h-[50rem]'>
      <section>
      <article className='text-center'>
        <h2 className='text-xl pb-4' >TESTIMONIAL</h2>
        <p className='text-3xl font-semibold'>This is what our patient has to say about DR.Margeret</p>
        </article>
        
        <div className='flex justify-around pt-24 gap-16 p-16'>
          <span className='border-y-8 border-l-8 border-blue-600 ' >
            <Image className='shadow-xl shadow-slate-900' src={gloves} alt='doctor smiling' width={300} height={100} />
        
          </span>
          
     
          <div className='pt-24 grid justify-between'>
             <span className=''>
                <ImQuotesLeft />
               </span>
            <p>
            I appreciate Dr. Margaret's exceptional care, <br />
              professionalism, and dedication to my well-being.
            </p>
             <p>
            I  express gratitude for her compassionate bedside manner and her ability to listen attentively to my
            <br />concerns. Dr. Margaret ensures I fully understand my treatment options and any necessary lifestyle changes.
          </p>
        
          <p className='text-xl py-5 font-bold'>Lee Morgan Slack, Inc.</p>
            <p><em>New York, NY Team</em></p>
            <span>
              <ImQuotesLeft />
              </span>
          </div>
        
          
         
       </div>
      </section>
        {/* <span >
            <MdKeyboardArrowLeft size={30}/>
          </span>
          <span>
             <MdKeyboardArrowRight size={30} />
          </span> */}
    </div>
  );
}

