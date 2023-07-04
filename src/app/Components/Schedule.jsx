import React from 'react'
import { Kanit, Viga } from 'next/font/google';
import styles from '../style.module.css'

  const person = Kanit({
  subsets:['latin'],
  weight:['400']
})
export default function Schedule() {
  return (
    <div className='w-[100rem] h-[50%]'>
     <div className={styles.box}>
      <div className={person.className}>
      <section className='text-center p-28 m-24 text-white'>
        <p className='text-3xl pb-12'>Schedule inperson or virtual appointment today</p>
        <div>
          <button className='rounded-full  p-3 bg-blue-800 '>book an appointment</button>
          </div>
        </section>
    
        </div>
    
      </div>
    </div>
   
  
   
  )
}
