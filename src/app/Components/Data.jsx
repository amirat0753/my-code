import React from 'react';
import { Kanit } from 'next/font/google';
import Image from 'next/image';
import {AiOutlineArrowRight} from 'react-icons/ai'

const object = Kanit({
  subsets: ['latin'],
  weight: ['400'],
});

const data = [
  
  {
    "id": "1",
    "topic": "ARTICLES",
    "name": "Dr. Jane Smith",
    "details": "should be tested post covid and other tests",
    "profileImage": "https://images.pexels.com/photos/12495583/pexels-photo-12495583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "id": "2",
    "topic": "ARTICLES",
    "name": "Dr. Jon Doe",
    "details": "Overeating? Mindfulness and support are essential ",
    "profileImage": "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "id": "3",
    "topic": "ARTICLES",
    "name": "Dr. Mary Robert",
    "details": "Can vitamin supplements prevent health issues?",
    "profileImage": "https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
export default function Objects() {
  const poles = data.map((pole) => (
    <div key={pole.id}>
      
      <div className='border items-center pl-6 pr-2 py-8'>
        <Image className=' w-[400px] h-[500px]' src={pole.profileImage} alt={pole.name} width={300} height={50} />
        <div className='pt-4 '>
        <h2>{pole.topic}</h2>
          <p className='text-2xl'>{pole.details}</p>
          </div>
        <p className='flex pt-4'>
        link arrow <AiOutlineArrowRight className='mt-[6px] ml-7 ' />
        </p>
    

      </div>
    </div>
  ));

  return (
      <div className='w-[90%] m-20 mb-10 h-[50%]' >
    <div className={object.className}>
      <article className='text-center m-10'>
        <h2 className='text-lg'>ARTICLES AND NEWS</h2>
         <p className='text-4xl'>our articles on health and personal wellness</p>
        </article>
       
 
      <div className='grid justify-center '>
      <section className='grid gap-7 grid-cols-3 w-[100%] '>
        {poles}
      </section> 
     </div>
      </div>
    </div>
  );
}