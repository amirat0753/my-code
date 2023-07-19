import React from 'react'

export default function Contact () {
  return (
    <div className='bg-sky-200 w-full h-[] p-24 '>
      <div className=' text-center'>
        <h2>CONTACT US</h2>
        <p className='text-3xl font-bold'> Get in touch to book your first appointment</p>
          <div className='bg-white w-[700px] h-[500px] mt-8 mx-auto mb-8  shadow-xl flex flex-col justify-center border'>
        <form className='flex flex-col mx-auto justify-center items-center mb-4 '>
            <span className='flex gap-4 mt-10 mb-4'> 
              <input type="text" name="firstname" placeholder='First Name' className='w-[280px] py-3 border rounded-sm p-4 ' required />
              
               <input type="text" name="lastname" placeholder='Last Name' className='w-[280px] py-3 border rounded-sm p-4' required/>

            </span>


             <span className='flex gap-4 mb-4'> 
                  <input type="number"name='phone number' placeholder='Phone Number' className='w-[280px] py-3 border rounded-sm p-4 ' required/>
                  <input type="text" name='email' placeholder='Email' className='w-[280px] py-3 border rounded-sm p-4' required />
               </span>
          
          
          <input type="text" name="message" placeholder='Type your message here' className='w-[585px] h-[200px] pb-32 pl-4 border' />
          </form>
          <div className=' text-left w-32 mx-14 p-2 rounded-sm  bg-blue-600 hover:bg-[#0a132e] text-white'>
            <button >Submit Now</button>
            </div>
         </div>

        
        
      </div>
    </div>
  )
}
