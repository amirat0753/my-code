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
  const child = nurses.map((kid) => (<div className='space-y-4  ' key={kid.id}> 
   
    <span>
    <Image src={kid.profileImage} alt='doctors image' width={400} height={400} />
    </span>
  
    <div className='font-bold pt-4'>{kid.name}</div>
    <div>{kid.details}</div> 
    <div className='w-1/4'>{kid.description[0].content}</div>
     </div>
))
  return (
    <div className='p-48 bg-gradient-to-tr from-blue-500 to-sky-400 '>
      {child}
    </div>
  )
}
