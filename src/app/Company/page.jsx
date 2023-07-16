import React from 'react';
import Link from 'next/link';
import styles from '../style.module.css'
import Image from 'next/image';
import woman from '../images/woman.jpg'
import {Poppins } from 'next/font/google';
import  coat from '../images/coat.jpg'
import glasses from '../images/glasses.jpg'
import bald from '../images/bald.jpg'
import nurse from '../images/nurse.jpg'
import teeth from '../images/teeth.jpg'

const doctor = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

export default function company() {
  return (
    <>
    <div className={doctor.className}>
      <div className={styles.picture}>
        <article className='grid justify-center text-center pt-60 space-y-7'>
          <h1 className='text-4xl font-extrabold'>MIRA'S HEALTHCARE</h1>
          <p className='text-2xl text-white'>
            Our mission is to provide exceptional
            <em className='text-[#0a132e]'> healthcare services </em> to our patients, <br />
            promote wellness, and improve the well-being of the communities we serve.
          </p>
          <Link href={'/Booknow'}>
            <button className='p-4 border rounded-md font-bold text-white bg-[#0a132e] text-xl'>
              BOOK NOW
            </button>
          </Link>
        </article>
      </div>

      <section className='flex flex-col space-y-8 '>
        <div className='flex flex-wrap items-center justify-center m-20 '>
          <div className='w-full md:w-1/2'>
            <span className=''>
              <Image className='rounded-[10px]'src={woman} alt='doctor in white' width={600} height={700} />
            </span>
          </div>
          <div className='w-full md:w-1/2 '>
            <section className='pl-14 space-y-4'>
              <h2 className='text-3xl font-bold'>About Mira's <span className='text-[#4977f6]'>healthcare</span> </h2>
             <p className='text-lg font-bold'>
               <em className='text-[#4977f6]'> Mira's Healthcare</em> is a visionary and patient-centric healthcare <br />
                organization committed to
                revolutionizing the way healthcare is delivered.
              </p>
              <p className='text-lg font-bold'>
                We believe that everyone deserves access <br /> to high-quality, affordable,
                healthcare services.
              </p>
              <h2 className='text-3xl text-[#4977f6] font-bold'>Founder</h2>
              <p className='text-lg font-bold'>
                With a diverse background in medicine.<br/><em className='text-[#395fc8]'> Dr. Rodriguez</em> brings a
                unique perspective to healthcare delivery.
              </p>
            </section>
          </div>
        </div>
        <div className='bg-slate-200 p-20'>
          <h2 className='text-4xl text-center uppercase text-slate-900 pb-8 font-bold '>meet our doctors</h2>
          <div className='flex justify-between gap-x-14 font-bold'>
            <section className='text-lg border-[8px]  p-9  bg-slate-900 shadow-md shadow-black rounded-md text-white'>
              <Image className='rounded-md'src={coat} alt='doctor in labcoat' width={500} height={400} />
              <p className='pt-4'>Name: Dr. Rodriguez</p>
              <p>Specialty: Internal Medicine</p>
            </section>

             <section className='text-lg border-[8px] p-9 shadow-md  shadow-black rounded-md bg-slate-900 text-white'>
              <Image className='rounded-md'src={teeth} alt='doctor in labcoat' width={500} height={400} />
               <p className='pt-4'>Name: Dr. Smith </p>
               <p>Specialty: Pediatrics </p>
               
            </section>
 
             <section className='text-lg border-[8px] shadow-md  p-9 bg-slate-900  shadow-black rounded-md text-white'>
              <Image className='rounded-md' src={bald} alt='doctor in labcoat' width={500} height={400} />
              <p className='pt-4'>Name: Dr. Johnson</p>
               <p>Specialty: Dermatology</p>  
            </section>

            <section className='text-lg border-[8px]  p-9 bg-slate-900 rounded-md shadow-md shadow-black text-white '>
              <Image className='rounded-md' src={glasses} alt='doctor in labcoat' width={500} height={400} />
               <p className='pt-4'>Name: Dr. Johnson</p>
               <p>Specialty: Dermatology</p>    
            </section>

            <section className='text-lg  p-9 bg-slate-900 shadow-md shadow-black border-[8px] rounded-md text-white'>
              <Image className='rounded-md' src={nurse} alt='doctor in labcoat' width={500} height={400} />
               <p className='pt-4'>Name: Dr. Johnson</p>
               <p>Specialty: Dermatology</p>  
            </section>
          </div>
           
         </div>
      </section>
      </div>
      </>
  );
}
