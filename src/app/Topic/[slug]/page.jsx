"use client" 
import React from 'react';
import {topic} from '../[slug]'
import Image from 'next/image';

function blog(params) {
  const content = topic.find((news) => news.id === params.slug)
  return content ? [content] : []
}
export default function Page({params}) {
  const content = blog(params)
  const health = content.map((age) => (<div className='space-y-4 ' key={age.id}> 
   
    <span>
    <Image src={age.profileImage} alt='doctors image' width={400} height={400} />
    </span>
  
    <div className='font-bold pt-4'>{age.topic}</div>
    <div>{age.details}</div> 
    <div className='w-1/4'>{age.description[0].content}</div>
     </div>
))
  return (
    <div className='p-48 bg-gradient-to-tr from-blue-500 to-sky-400 '>
      {health}
    </div>
  )
}
