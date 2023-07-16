import React from 'react'
import {Poppins} from 'next/font/google';




 
export default function Video() {
  
  const videoId = 'xjSg0OIigI0';
  return (

      <div>
      <div className='bg-sky-100 w-full'>
      <section > 
        <article className='grid justify-center p-20'>
        <h2 className='text-blue-700 uppercase text-center text-xl'> DR.matthew anderson</h2>
        <p className='text-3xl py-6 font-bold'>watch video to learn how the procedure works</p>
        <iframe className='pl-5 md:w-full' width="600" height="315" src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player" 
            allowfullscreen ></iframe> 
           
          </article>
       </section>
    </div>
    </div>
  )
}
