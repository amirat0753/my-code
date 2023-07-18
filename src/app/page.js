import React from 'react'
import Navbar from './Components/Nav';
import Header from './Components/Header';

import News from './Components/News';
import Services from './Components/Services';
import Video from './Components/Video';
import Question from './Components/Question';
import Schedule from './Components/Schedule';

import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import List from './Components/Footer';
import Objects from './Doctors/page';

export default function page() {
  return (
   
    <div>
        <Header />
        <News />
        <Services />
        <Video />
        <Question />
        <Schedule />
       <Objects />
      <Testimonial />
      <Contact />
    </div>
      
    
         
  )
}
