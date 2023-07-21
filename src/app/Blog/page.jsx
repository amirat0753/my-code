 'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import style from '../style.module.css';
import hand from '../images/hand.jpeg';
import { TypewriterClass } from 'typewriter-effect';
import featured from '../json/featured'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import Link from 'next/link';


  export let topic = featured.slice();
export default function BlogPage() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const currentTime = `${hours}:${minutes}`;

  const date = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
 
  

  return (
    <section>
      <div className='md:w-full h-screen flex pt-36'>
        <div className='h-[100%] w-[50%] px-28 bg-neutral-200  '>
          <h1 className='pt-24 text-4xl md:w-4/5 uppercase pb-5 font-bold'>
            Welcome to <span className='text-blue-700'>mira&apos;s</span> healthcare blog 
          </h1>
          <p className='text-lg md:w-full '>
            A trusted source of health information, inspiration, and empowerment. This is a space dedicated to sharing
            insightful articles, stories, and resources that aim to empower, educate, and inspire our valued patients,
            caregivers, and the community at large.
          </p>
          <button className='mt-10 border text-white font-semibold p-4 rounded-lg bg-gradient-to-tr from-blue-600 via-sky-600 to-indigo-950 hover:bg-blue-500'>
            Book an appointment
          </button>
        </div>

        <div className=' w-[50%] flex items-center justify-center p-24 bg-gradient-to-tr py-28 from-blue-400 via-sky-500 to-indigo-950'>
         
          <div className={`${style.image}  shadow-2xl shadow-slate-950 border-[8px] h-[80%] w-[46%] border-black `}>
            <p className='text-center pt-4 text-2xl text-white'>{currentTime}</p>
            <p className='text-center text-white'>{formattedDate}</p>
            </div>
         
        </div>
      </div>

      <div className='grid grid-cols-2 text-white bg-slate-950 p-24'>
        <span>
          <Image
            className='rounded-md border-y-8 border-x-8 border-y-blue-500'
            src={hand}
            alt='a psychologist talking to a patient'
            width={400}
            height={300}
          />
        </span>
        <div className='space-y-6'>
          <p className='text-3xl'>
            Embracing <span className='text-blue-500'>Mental Health</span> and Emotional Well-being
          </p>
          <p>Recognizing the profound impact of mental health on overall well-being, our hospital prioritizes the integration of mental health services.</p>
          <p>
            We offer compassionate counseling, support groups, and therapeutic activities that address the emotional and psychological aspects of healing,
            promoting emotional well-being for our patients and their loved ones.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 p-20 gap-52 mb-8'>
        <article className='space-y-5'>
          <h2 className='text-3xl text-blue-500 font-bold uppercase'>Sets the standard for outstanding high-quality care and patient safety</h2>
          <p>Our hospital emphasizes the importance of complementary practices such as yoga, mindfulness, and meditation.</p>
          <p>At our hospital, we believe in empowering patients as partners in their healthcare journey.</p>
          <p>We encourage open communication, active participation in decision-making, and collaborative goal-setting.</p>
        </article>
        <span>
          <iframe
            className='rounded-md border-r-8 border-y-8 border-gray-700'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/vPz0mWtZRBE?start=53'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </span>
      </div>
      <div>
        <article className='text-center'>
        <h2 className=' text-4xl border-b-blue-500 p-4 font-bold'>Featured topics</h2>
        <p className='text-lg'>Our featured topics cover a wide range of health-related areas, ensuring that you have access to reliable and up-to-date content.</p>
        </article>
        <div className=" m-24">
          <section>
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              autoplay
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}>
                  {featured.map((topics) => (
                <div className="w-[500px]" key={topics.id}>
                <SwiperSlide
                        className="border shadow-md bg-slate-300 p-10 rounded-lg hover:shadow-black">
                        
                    <Link href={`/Blog/${topics.id}`}>
                          
                    <Image 
                      src={topics.profileImage}
                      width={450}
                      height={50}
                      alt="image"
                      className=" rounded-md "
                        />
                         
                    <div className="pt-4">
                    <div className="pb-2 text-lg ">{topics.topic}</div>
                    <div>{topics.name}</div>
                      <div className="truncate font-bold">{topics.details}</div>
                      
                  </div>
                    </Link>
                   
                  </SwiperSlide>
                </div>
              ))}
              ...
            </Swiper>
            <div className='flex justify-center pt-12  pb-4 w-[100%]'>
              <p className='flex space-x-6'>
                <span  className='hover:shadow-md hover:shadow-black hover:animate-spin hover:duration-75  border rounded-full p-1 bg-gradient-to-bl from-purple-700 via-pink-500 to-orange-500'>
                <Link href="https://www.instagram.com/accounts/emailsignup/">
                  <AiOutlineInstagram className='text-white ' size={40} />
                  </Link>
                </span>

                <span className='hover:shadow-md hover:shadow-black hover:animate-bounce hover:duration-75'>
                 <Link href="https://web.facebook.com/signup?_rdc=1&_rdr">
                  <BsFacebook size={45} className='text-blue-500 ' />
                  </Link>
                </span>
                
                <span className='hover:shadow-md hover:rounded-full hover:shadow-black hover:animate-pulse hover:duration-75'  >
               <Link href="https://twitter.com/i/flow/signup">
                <AiFillTwitterCircle  className='text-sky-500'size={50} />
                  </Link>
                </span>

                 <span className=' hover:animate-pulse hover:duration-75'  >
               <Link href="https://youtu.be/E3QpXj_QOqQ">
                <BsYoutube className='text-red-600'size={50} />
                  </Link>
                  </span>
              </p>
              <p className='text-xl pl-4 pt-2'>Follow us for more info</p>
             
              </div>
          </section>
        </div>
      </div>
    </section>
  );
}
