import React from 'react';
import dental from '../images/dental.png';
import Image from 'next/image';
import Link from 'next/link';
import surgery from '../images/surgery.jpeg';
// import Slider from '../Components/Slider';
import maternity from '../images/maternity.jpg';
import emergency from '../images/emergency.jpg';
import lab from '../images/lab.jpg';
import xray from '../images/xray.jpeg';
import { BsFacebook, BsPinterest, BsEnvelopeOpenFill } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { Kanit } from 'next/font/google';
import smile from '../images/smile.webp';
import grey from '../images/grey.webp';



const cap = Kanit({
  subsets: ['latin'],
  weight: ['400']
});

export default function Page() {
  return (
   
    <div className={cap.className}>

      <section className="pt-36 text-black bg-gradient-to-b from-sky-500 via-[#082b95] to-blue-500  pl-20 p-16">
        <h1 className="text-4xl text-white text-center py-4 ">Our Medical Services</h1>
        <p className='text-center text-2xl text-white m-2'>"Empowering Patients and <span className='text-[#0a132e]'>Transforming Lives"</span> </p>
        <article className="grid grid-cols-4 gap-10 bg-white p-14 rounded-md">
            
          <span>
            <Image className='rounded-[8px]' src={emergency} alt="two medical officials in an ambulance van" width={400} height={300} />
          </span>

          <article>
            
            <h2 className='text-2xl '>Emergency Care </h2>
              
            <p className='text-lg'>
              We have emergency departments that provide immediate medical attention to individuals experiencing severe
              injuries or life-threatening conditions.
            </p>
            <p className='font-sans pt-3  text-sky-500'>
              <a href="https://www.who.int/health-topics/emergency-care#tab=tab_1">learn more</a>
              </p>
          </article>
         
           <span>
            <Image  className='rounded-[8px]' src={xray} alt="xray of human ribs" width={500} height={500} />
          </span>
            <article >
            <h2 className='text-2xl'>Diagnostic Services</h2>
            <p className='text-lg'>
              We offer diagnostic services such as imaging (X-rays, CT scans, MRI scans) and other procedures to help
              diagnose and monitor diseases and conditions.
            </p>
            <p className='font-sans pt-3 text-sky-500'>
              <a href="https://en.wikipedia.org/wiki/X-ray"> learn more</a>
            </p>
          </article>
         

            <span>
            <Image  className='rounded-[8px]' src={maternity} alt="pregnant woman" width={400} height={300} />
          </span>
          <article>
            <h2 className='text-2xl'>Maternity Care</h2>
            <p className='text-lg'>We provide prenatal care, labor and delivery services for expectant mothers and newborns.</p>
            <p className='font-sans pt-12  text-sky-500'>
              <a href="https://en.wikipedia.org/wiki/X-ray"> learn more</a>
            </p> 
          </article>
         

            <span>
            <Image className='rounded-[8px]' src={surgery} alt="doctors performing surgery" width={400} height={300} />
          </span>
          <article>
            <h2 className='text-2xl'>Surgery</h2>
            <p className='text-lg'>
              We have operating rooms and surgical teams that perform a wide range of surgical procedures, including
              general surgery, neurosurgery, and more.
            </p>
              <p className='font-sans pt-3 text-sky-500'>
              <a href="https://en.wikipedia.org/wiki/X-ray"> learn more</a>
             </p>
          </article>
         

           <span>
            <Image className='rounded-[8px]' src={smile} alt="doctors talking to patient" width={400} height={400} />
          </span>
          <article>
            <h2 className='text-2xl'>Preventive Care</h2>
            <p className='text-lg'>
              our Hospital promote preventive healthcare by offering services like vaccinations, counseling,<br />
               and education to help individuals maintain their health .  
            </p>
              <p className='font-sans pt-4 text-sky-500'>
              <a href="https://en.wikipedia.org/wiki/X-ray"> learn more</a>
             </p>
          </article>
         
            <span>
            <Image  className='rounded-[8px]' src={grey} alt="patient in rehabilitation centre" width={500} height={500} />
          </span>
           <article>
            <h2 className='text-2xl'>Rehabilitation Services</h2>
            <p className='text-lg'>
              We offer rehabilitation programs and services for patients recovering from surgeries, injuries, including physical therapy and speech therapy.  
            </p>
              <p className='font-sans pt-5  text-sky-500'>
              <a href="https://en.wikipedia.org/wiki/X-ray"> learn more</a>
             </p>
          </article>
        
        </article>
     
        </section>

      </div>
    
  );
}
