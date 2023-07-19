"use client" 
import React from 'react';
import { nurse } from "../page";
import Image from 'next/image';

function clinic(params) {
  const nurses = nurse.find((patient) => patient.id === params.slug)
  return nurses ? [nurses] : []
}

export default function Page({params}) {
  const nurses = clinic(params)
  const child = nurses.map((kid) => (
    <div className='space-y-4' key={kid.id}> 
      <div className='grid justify-items-center py-20 bg-white border w-[70%] shadow-xl shadow-black'>
        <span>
          <Image src={kid.profileImage} alt='doctors image' width={400} height={400} />
        </span>
  
        <div className='font-bold py-3'>Name: {kid.name}</div>
        <div className='font-bold pb-7'>Qualification: {kid.qualification}</div>
        <h2 className='font-bold border-b-4 border-blue-600'>Expertise in Preventive Healthcare</h2>
        <div className='w-[70%] pt-4'>{kid.description[0].content}</div>
      </div>
    </div>
  ));

  return (
    <div className='p-40 pb-20 grid justify-center bg-gradient-to-br  from-blue-600 via-sky-500 to-indigo-900 '>
      <section className='w-[70%] h-[50%] mx-auto pl-40 pt-20 '>
        {child}
      </section>
    </div>
  )
}
