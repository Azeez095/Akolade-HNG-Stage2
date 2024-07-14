import React from 'react'
import spiralimg from './spiral.png'
import stillHero from './stillHero.png'
import {data} from './data'
import { CiHeart } from 'react-icons/ci'
import { IoIosArrowDown } from "react-icons/io";


const Stilettos = () => {
  return (
    <div>
        <div className='text-left mt-10'>
            <h3>Stilettos</h3>
            <div className='flex justify-between items-center overflow-hidden'>
                <img src={spiralimg} alt='' className='h-[500px]' />
                <div className='flex flex-col justify-center 
                items-center border relative w-[350px] h-[320px]
                border-white shadow-r text-left left-[300px] bg-white
                mt-6'>
                    <h1 className='text-[40px] tracking-[30px]
                     text-left'>
                    STIL
                    <br/>
                    ETT
                    <br/>
                    OS
                    <br/>
                    </h1>
                    <p className='break-words mr-[30px] w-[200px]
                    '>The best heels for that 
                    perfect classy look!!!!</p>
                </div>
                <img src={stillHero} alt='' className='h-[500px] lg:mr-[300px]'/>

            </div>

            <div className='flex flex-col mt-20 '>
                <div className='md: mx-5 lg:mx-5 xl:mx-11 flex justify-between'>
                    <div className='flex gap-[200px]'>
                        <div className='flex'>
                            <span>Sort by</span>
                            <IoIosArrowDown className='self-center' />
                        </div>
                        <div className='flex'>
                            <span>Category</span>
                            <IoIosArrowDown className='self-center' />
                        </div>
                    </div>
                    <span>125 results</span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4  place-items-center 
                gap-2 md:gap-3  lg:gap-2 items-stretch text-left md:mx-5 xl:mx-0'>
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id}className=' '>
                                        <img src={item.image} alt="" className='bg-[#F4F6FB]
                                        lg:h-[19rem] lg:w-[287px] my-6 md:h-[200px] md:w-[200px] 
                                        w-[150px] h-[150px] max-w-full' />
                                    <div className='flex justify-between'>
                                        <div className='text-[10px] lg:text-[12px] lg:leading-[20px] sm:leading-[20px] sm:text-[14px]'>
                                        <h6 className=''>{item.title}</h6>
                                        <p className='text-gray-500'>{item.name}</p>
                                        <p>{item.price}</p>
                                        </div>
                                        <CiHeart className='text-[24px]'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className=' w-[193px] h-[50px] my-20 self-center
                px-6 py-2 bg-white border text-gray-400'>LOAD MORE</button>
            </div>


        </div>
    </div>
  )
}

export default Stilettos