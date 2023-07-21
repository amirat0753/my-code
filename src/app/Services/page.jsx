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
import smile from '../images/smile.webp';
import grey from '../images/grey.webp';



export default function services() {
  return (
   
    <div>

      <section className="pt-44 text-black bg-gradient-to-b from-sky-500 via-[#082b95] to-blue-500  pl-20 p-16">
        <h1 className="text-4xl text-white text-center py-4 font-bold">Our Medical Services</h1>
        <p className='text-center text-2xl text-white m-2'>&#34;Empowering Patients and <em className='text-[#0a132e] font-bold'>Transforming Lives&#34;</em> </p>
        <article className="grid grid-cols-4 gap-10 bg-white p-14 rounded-md shadow-xl shadow-black">
            
          <span>
            <Image className='rounded-[8px]' src={emergency} alt="two medical officials in an ambulance van" width={400} height={300} />
          </span>

          <article>
             <h2 className='text-2xl font-bold pb-2'> Emergency Care </h2>
              <p>
              We have emergency departments that provide immediate medical attention to individuals experiencing severe
              injuries or life-threatening conditions.
            </p>
            
          </article>
         
           <span>
            <Image  className='rounded-[8px]' src={xray} alt="xray of human ribs" width={500} height={500} />
          </span>
            <article >
            <h2 className='text-2xl font-bold pb-2'>Diagnostic Services</h2>
            <p>
              We offer diagnostic services such as imaging (X-rays, CT scans, MRI scans) and other procedures to help
              diagnose and monitor diseases and conditions.
            </p>
            
          </article>
         

            <span>
            <Image  className='rounded-[8px]' src={maternity} alt="pregnant woman" width={400} height={300} />
          </span>
          <article>
           
            <h2 className='text-2xl font-bold pb-2'>Maternity Care</h2>
            <p>We provide prenatal care, labor and delivery services for expectant mothers and newborns.</p>
          
          </article>
         

            <span>
            <Image className='rounded-[8px]' src={surgery} alt="doctors performing surgery" width={400} height={300} />
          </span>
          <article>
            <h2 className='text-2xl font-bold pb-2'> Surgery</h2>
            <p>
              We have operating rooms and surgical teams that perform a wide range of surgical procedures, including
              general surgery, neurosurgery, and more.
            </p>
             
          </article>
         

           <span>
            <Image className='rounded-[8px]' src={smile} alt="doctors talking to patient" width={400} height={400} />
          </span>
          <article>
            <h2 className='text-2xl font-bold pb-1'>Preventive Care</h2>
            <p>
              Our Hospital promote preventive healthcare by offering services like vaccinations, counseling,<br />
               and education to help individuals maintain their health .  
            </p>
             
          </article>
         
            <span>
            <Image  className='rounded-[8px]' src={grey} alt="patient in rehabilitation centre" width={500} height={500} />
          </span>
           <article>
            <h2 className='text-2xl font-bold pb-2'>Rehabilitation Services</h2>
            <p>
              We offer rehabilitation programs and services for patients recovering from surgeries, injuries, including physical therapy and speech therapy.  
            </p>
             
          </article>
        
        </article>
     
        </section>

      </div>
    
  );
}
