import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 bg-black 
        items-center justify-center md:h-[359px] relative sm:static
        h-[100%] pb-10 sm:pb-0 overflow-hidden'>
            <div className='sm:grid grid-cols-1 py-[50px]
              items-center ml-2 sm:ml-10 w-[100%]'>
                <div className=''>
                    <h1 className='text-white text-left sm:p-0 pl-10'>
                        Be the first to know !</h1>
                    <div className='flex my-5'>
                        <input type="email" placeholder=
                        'Enter email address' className='sm:max-w-[269px] 
                        h-[50px] rounded-tl-md rounded-bl-md w-[200px] pl-2'/>
                        <button className='w-[95px] h-[50px]
                        bg-[#F3CCCC] rounded-tr-md  '>Sign Up</button>
                    </div>
                </div>
                <div className='flex gap-4 sm:static absolute bottom-0 pb-4 
                sm:pb-0 ml-[60px] sm:ml-0'>
                    <FaInstagram className='bg-[#F3CCCC] w-[20px] 
                    md:w-[25px] md:h-[20px] h-[15px] rounded-full '/>
                    <FaTwitter className='bg-[#F3CCCC] w-[20px] 
                    md:w-[25px] md:h-[20px] h-[15px] rounded-full'/>
                    <FaPinterestP className='bg-[#F3CCCC] w-[20px] 
                    md:w-[25px] md:h-[20px] h-[15px] rounded-full'/>
                    <FaLinkedinIn className='bg-[#F3CCCC] w-[20px] 
                    md:w-[25px] md:h-[20px] h-[15px] rounded-full'/>
                    <FaFacebookF className='bg-[#F3CCCC] w-[20px] 
                    md:w-[25px] md:h-[20px] h-[15px] rounded-full'/>
                </div>
            </div>
            <div className=' items-center w-[100%] relative bottom-10 sm:static'>
                <ul className='text-white text-[12px] lg:text-[14px] xl:[16px]
                    grid lg:grid-cols-4 text-left list-disc gap-y-5 ml-6 sm:m-0 grid-cols-2
                    sm:p-0 grid-rows-3 md:grid-cols-3 gap-x-10 sm:gap-x-0'>
                    <li>Shop</li>
                    <li>Gallery</li>
                    <li>What We Do</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Custom Orders</li>
                    <li>Work With Us</li>
                    <li>Make Enquires</li>
                    <li>Return Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
//I start now//
export default Footer