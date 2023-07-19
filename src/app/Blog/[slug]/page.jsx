"use client" 
import React from 'react';
import {topic} from '../page'
import Image from 'next/image';

function blog(params) {
  const content = topic.find((news) => news.id === params.slug)
  return content ? [content] : []
}
export default function Page({params}) {
  const content = blog(params)
  const health = content.map((age) => (<div className='space-y-4 w-full ' key={age.id}> 
    <div className='grid  justify-items-center py-20 border w-[70%] bg-white shadow-xl shadow-black'>
    <span>
    <Image src={age.profileImage} alt='doctors image' width={420} height={400} />
    </span>
      
       <div className='font-bold pt-4 text-lg border-b-4 border-blue-600'>{age.topic}</div>
       
        <div className='w-[70%] pt-4'>{age.details}</div> 
        <div className='w-[70%]'>{age.description[0].content}</div>
      
    </div>
    </div>
))
  return (
    <div className='p-40 pb-20 grid justify-center bg-gradient-to-tl  from-blue-500 to-green-500'>
      <section className='w-[70%] h-[50%] mx-auto  pl-32 pt-20'>
        {health}
        </section>
    </div>
  )
}
