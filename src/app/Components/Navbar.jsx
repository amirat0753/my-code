

import Image from 'next/image'
import DOCTOR from '../images/DOCTOR.jpg';
import dental from '../images/dental.png'
import { Mitr} from 'next/font/google';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const mat = Mitr({
  subsets: ['latin'],
  weight: ['400'],
})




export default function Navbar() {
  return (
        
    <div className='md:h-[100px] md:w-full shadow-md fixed bg-white'>
      <div className={mat.className}>
        <nav className='text-black'>
            
          <ul className='flex justify-between '>
            <li className='mt-4'>
              <Image className='relative -top-8 transform  hover:translate-x-4  duration-75 animate-pulse w-[150px] h-[150px]' src={dental} alt='dental logo'width={150} height={50}  />
            </li>
            <span className='flex justify-around space-x-16  pr-9 py-10 text-lg uppercase'>
              
              <Link href={'/'}><li>Home</li></Link>
              <Link href={'/Company'}><li>Company</li></Link>
              <Link href={'/Services'}><li>Services</li></Link>
              <Link href={'/Contact'}><li>Contact</li></Link>
          
            </span>
          
            <span className='flex space-x-12 pr-24 py-10'>
              <li className='text-xl'><a href='tel:2348128724858'>+2348128724858</a>
              </li>
              <a href='https://partner.booking.com' className=' pb-8 -mt-2 border-[1px] h-8 p-2  rounded-md uppercase bg-sky-500 text-white hover:bg-[#0a132e]'>Book now</a>
            </span>
          </ul>
     
       
        </nav>
       </div>

    </div>
     );
}
        {/* <div>
          {/* { <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />} */}
          
        {/* </div>
        <div className='fixed left-0 top-0 w-[20%]  h-full border-r border-black bg-white'>

          <p className='w-full m-4 '>
            <Image className='relative transform  hover:translate-x-4  duration-700 animate-pulse' src={dental} alt='dental logo' width={150} height={50} />
          </p>
          <ul className='pt-2 text-indigo-950 pl-12 text-xl'  >
           
            
            <Link href={'./Home'}><li className='p-4 border-b border-sky-500'>Home</li></Link>
            <Link href={'./Company'}><li className='p-4  border-b border-black'>Company</li></Link>
            <Link href={'./Services'}><li className='p-4  border-b border-black'>Services</li></Link>
            <Link href={'./Contact'}><li className='p-4  border-b border-black'>Contact</li></Link>

            <li className='p-4   border-b  border-black' ><a href='tel:2348128724858'>+2348128724858</a>
              
            </li>
            <li className='p-4 '>
              <a href className=' '>Book now</a>
            </li>
          </ul>
     
        </div>
        
         
       
    
      </div> */}
    {/* </div>  */}
 