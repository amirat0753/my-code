import React from 'react';
import { FaTooth } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { FaTeethOpen } from 'react-icons/fa'
import {TbDentalOff} from 'react-icons/tb'
import { Kanit,Poppins } from 'next/font/google';


const word = Kanit({
  subsets: ['latin'],
  weight: ['400'],
});
const pop = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Services() {
  return (
    <div className="bg-white p-20 md:w-[100rem] h-[50%]">
      <div className={word.className}>
        <div className="text-center">
          <h2 className="text-blue-700 uppercase">Services</h2>
          <p className="text-3xl text-black p-2">Experiences in multiple medical practices</p>
        </div>
        <div className="container mx-auto px-4 py-8 items-center">
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:pl-30">
            <div className="bg-purple-200 p-6 text-center">
              <span className='flex justify-center  text-purple-900 '><TbDentalOff  /></span>
              <h2 className='font-bold'>CAVITY FILLING</h2>
              <p>It restores the tooth's structure while preventing further decay.</p>
            </div>
            <div className="bg-blue-200 p-5 text-center">
             
              <span className='flex justify-center '><FaTooth className=" text-blue-600 text-center" /></span> 
              <h2 className='font-bold'>FLUORIDE TREATMENT</h2>
              <p>
                Fluoride is a mineral that strengthens teeth, making them resistant to tooth decay.
                </p>
              
            </div>
            <div className="bg-yellow-200 p-5 text-center">
              <span className='flex justify-center'><FaTeethOpen className="text-yellow-700 text-center" /></span> 
              <h2 className='font-bold'>DENTAL PREVENTION</h2>
              <p>
                Schedule routine dental check-ups at least every six months or as advised by your
                dentist.
              </p>
            </div>
            <div className="bg-rose-200 p-5 text-center">
              <span className='flex justify-center text-rose-800 '><GiTooth className=''  /></span>
              <h2 className='font-bold'>TOOTH EXTRACTION</h2>
              <p>
                To ensure your comfort during the procedure, the dentist will administer a local
                anesthetic to numb the tooth and surrounding tissues.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
