import React from 'react'
import {Kanit,Rowdies} from 'next/font/google';




 
const box = Kanit({
  subsets: ['latin'],
  weight: ['400']
})
  
export default function Video() {
  
  const videoId = 'xjSg0OIigI0';
  return (

      <div>
      <div className='bg-sky-100 w-[100rem]'>
      <section className={box.className} > 
        <article className='grid justify-center p-20'>
        <h2 className='text-blue-700 uppercase text-center'> DR.matthew anderson</h2>
        <p className='text-3xl py-6'>watch video to learn how the procedure works</p>
        <iframe className='pl-5 md:w-full' width="600" height="315" src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player" 
            allowfullscreen ></iframe> 
           
          </article>
       </section>
    </div>
    </div>
  )
}
