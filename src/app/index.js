import Header from './Components/Header';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Question from './Components/Question';
import Schedule from './Components/Schedule';
import Services from './Components/Services';
import Video from './Components/Video';
import Objects from './Components/Data';
import './global.css'
import { Poppins } from 'next/font/google'
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import Contact from '@/pages/contact';

const pop = Poppins({
  subsets: ['latin'],
weight: ['500']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>
        <Navbar />
        {children}
       <Footer />
       </body>
    </html>
  )
}
