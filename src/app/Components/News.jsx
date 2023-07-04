import Link from 'next/link';
import React from 'react';
import { Kanit, Lobster, Rakkas, Amarante, Kavoon, Ewert } from 'next/font/google';


const lob = Lobster({
  subsets: ['latin'],
  weight: ['400']
})
const red = Rakkas({
  subsets: ['latin'],
  weight: ['400']
})
const save = Kanit({
  subsets: ['latin'],
  weight: ['500']
})
const page  = Amarante({
  subsets: ['latin'],
  weight: ['400']
})
 const post = Kavoon({
  subsets: ['latin'],
  weight: ['400']
 })
const shape = Ewert({
  subsets: ['latin'],
  weight: ['400']
})
 
export default function News() {
  return (
    <div className='bg-[#0a132e] w-[100rem] h-[300px]'>
    
      <div >
        <div className='text-center pt-20 text-2xl text-white'>
         <p className={save.className}>we've been mentioned in the press</p>
        </div>
        
        <ul className='flex justify-around p-12 pb-20 text-[#4977f6] text-2xl'>
        
          <li className={post.className}><a href='https://www.washingtonpost.com/health/'>The Washington Post </a></li>
          <li className={red.className}><a href='https://techcrunch.com/tag/healthcare/'><span className={shape.className} >TC </span>Tech Crunch</a></li>
          <li className={save.className}><a href='https://www.bloomberg.com/markets/sectors/health-care'>Bloomberg</a></li>
          <li className={page.className}><a href='https://gizmodo.com/science/health'>Gizmodo</a></li>
          <li className={red.className}><a href='https://www.forbes.com/health/'>Forbes</a></li>
        </ul>
      </div>
    </div>
  )
}
