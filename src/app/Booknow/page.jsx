"use client"
import React, { useState } from 'react';

export default function Booknow() {
  const [alertMessage, setAlertMessage] = useState('');

  const handleAlert = () => {
    setAlertMessage('Message sent'); 
  };

  return (
    <div>
      <div className='p-14 pt-48 space-y-6 text-[#0a132e]'>
        <h2 className='text-center text-3xl font-bold text-[#0a132e]'>
          Book an appointment with us for a better experience
        </h2>
        <p className='text-center text-xl text-[#0a132e]'>
          By scheduling an appointment with us, you can rest assured that <br />
          you will receive the highest standard of care
          in a welcoming and comfortable environment.
        </p>
        <article className='border-double border-8 bg-slate-100 border-blue-600 p-14 text-lg'>
          <h2 className='font-bold text-xl'>DOCTOR&apos;S APPOINTMENT FORM</h2>
          <form className='grid space-y-7 text-lg'>
            <label htmlFor='firstName'>Name</label>
            <input className='border-b-2' type='text' id='firstName' placeholder='First name' required />
            <input className='border-b-2' type='text' id='lastName' placeholder='Last name' required />

            <label htmlFor='gender'>Gender</label>
            <select name='gender' id='gender'>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='transgender'>Transgender</option>
            </select>

            <label htmlFor='email'>Email</label>
            <input className='border-b-2' type='email' id='email' placeholder='Enter a valid email address' required />

            <label htmlFor='message'>Message</label>
            <input className='border-b-2 p-12' type='text' id='message' name='message' required />

            <label htmlFor='phone'>Phone Number</label>
            <input className='border-b-2' type='tel' id='phone' required />

            <label htmlFor='Address'>Address</label>
            <input className='border-b-2' type='text' id='streetAddress' placeholder='Street address' />
            <input className='border-b-2' type='text' id='city' placeholder='City' />

            <label className='text-[#0a132e]' htmlFor='previouslyAttended'>
              Have you previously attended our facility?
            </label>
            <div>
              <input className='border-b-2' type='checkbox' id='yes' name='previouslyAttended' />
              <label htmlFor='yes'>Yes</label>
            </div>
            <div>
              <input className='border-b-2' type='checkbox' id='no' name='previouslyAttended' />
              <label htmlFor='no'>No</label>
            </div>
            <label className='text-[#0a132e]' htmlFor='condition'>
              If yes, state which condition and when?
            </label>
            <input className='border-b-2 p-10' type='text' name='condition' required />
            <span className='text-[#0a132e] font-bold text-2xl'>Appointment type</span>
            <label className='text-[#0a132e]' htmlFor='previouslyAttended'>
              Select which appointment type(s) you require
            </label>
            <div>
              <input className='border-b-2' type='checkbox' id='cervix' name='appointment' />
              <label htmlFor='cervix'>Cervix checkup</label>
            </div>
            <div>
              <input className='border-b-2' type='checkbox' id='heart' name='appointment' />
              <label htmlFor='heart'>Heart checkup</label>
            </div>
            <div>
              <input className='border-b-2' type='checkbox' id='eye' name='appointment' />
              <label htmlFor='eye'>Eye checkup</label>
            </div>

            <button onClick={handleAlert} className='p-4 border w-1/4 bg-[#4977f6] rounded-md text-xl font-bold text-white' type='submit'>
              Submit
            </button>
          </form>
        </article>
      </div>
    </div>
  );
}
