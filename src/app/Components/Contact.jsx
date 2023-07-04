import React from 'react'

export default function 
() {
  return (
    <div className='bg-blue-200 w-[100rem] h-[]'>
      <div className=' text-center'>
        <h2>CONTACT US</h2>
        <p className='text-3xl'> Get in touch to book your first appointment</p>
        <form className='grid grid-cols-3'>
          <label htmlFor="text">
          <input className='border' type="text" name='firstname'placeholder='First Name' />
            </label>
          <input className='border'type="text" name='lastname' placeholder='Last Name' />
         <label htmlFor="">
          <input type="tel" name='telephone' placeholder='Phone Number' />
          </label>
          <label htmlFor="email">
            <input type="text" name='email' placeholder='Email' />
           </label>
        </form>
        <button>Submit Now</button>
      </div>
    </div>
  )
}
