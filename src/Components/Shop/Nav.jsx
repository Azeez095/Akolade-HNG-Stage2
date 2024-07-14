import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlinePerson } from "react-icons/md";

const Nav = () => {
  return (
    <div className='border shadow-sm max-w-[full]'>
            <nav className='flex justify-between sm:justify-between mx-5 my-[22px]
            sm:mx-[68px] items-center'>
                <RiMenu2Fill className='sm:hidden'/>
                <h1>Kaiza</h1>
                <div className='flex sm:w-[550px] justify-between '>
                    <ul className='hidden sm:flex w-[378px] justify-between'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>    
                    </ul>
                    <ul className='flex w-[62px] sm:w-[120px] 
                    justify-between items-center'>
                        <li><IoIosSearch /></li>
                        <li><FiShoppingCart /></li>
                        <li><MdOutlinePerson className='hidden sm:block'/></li>
                    </ul>
                    
                </div>
            </nav>
        </div>
  )
}

export default Nav