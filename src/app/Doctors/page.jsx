"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import doctors from "../json/doctors";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export let nurse = doctors.slice();

export default function Objects() {
  {
    /*     
      <Link href= {`/${pole.name}`}> */
  }

  //         <Image  src={pole.profileImage} alt={pole.name} width={450} height={50} />
  //         <h2 className='pt-4'>{pole.topic}</h2>
  //         <p className=' font-bold text-lg'>{pole.details}</p>
  //      
  //   </article>
  // ));

  return (
    <div className="w-full m-auto h-[50%]">
        <article className="text-center m-10 space-y-5">
          <h2 className="text-xl">ARTICLES AND NEWS</h2>
          <p className="text-3xl">
            our articles on health and personal wellness
          </p>
        </article>
         
        <div className=" m-24">
          <section>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              autoplay
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}>
              {doctors.map((doctor) => (
                <div className="w-[500px] ">
                  <SwiperSlide
                    key={doctor.name}
                    className="border shadow-md  bg-slate-100 p-10 rounded-lg ">
                    <Image 
                      src={doctor.profileImage}
                      width={450}
                      height={50}
                      alt="image"
                      className=" rounded-md "
                    />
                      <Link href={`/Doctors/${doctor.id}`}>
                    <div className="pt-4">
                  
                        <div className="pb-2">{doctor.topic}</div>
                        
                    <div>{doctor.name}</div>
                      <div className="truncate font-bold">{doctor.details}</div>
                       <p className='flex pt-4 text-gray-700 font-light '>
                      link arrow <AiOutlineArrowRight className='mt-[6px] ml-7 ' />
                  </p>
                
                        </div>
                       </Link>
                  </SwiperSlide>
                </div>
              ))}
              ...
            </Swiper>
          </section>
        </div>
      </div>
      
  );
}
