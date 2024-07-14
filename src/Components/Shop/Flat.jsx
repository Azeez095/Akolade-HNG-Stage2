import React from 'react'
import image1 from '../../assets/Flat/image1.png'
import image2 from '../../assets/Flat/image2.png'
import image3 from '../../assets/Flat/image3.png'
import image4 from '../../assets/Flat/image4.png'
import { CiHeart } from "react-icons/ci";

const dataFlat = [
    {
        id: 1,
        image: image1,
        title: 'Cassie',
        name: 'Satin round toe evening flats',
        price: "N10,000"
    },
    {
        id: 2,
        image: image2,
        title: 'Stuart',
        name: 'Emilia Jane Flat',
        price: "N40,000"
    },
    {
        id: 3,
        image: image3,
        title: 'Sandalias',
        name: 'Planas White cross belt',
        price: "N11,000"
    },
    {
        id: 4,
        image: image4,
        title: 'Beau Today',
        name: 'Handmade pointy shoes',
        price: "N15,000"
    }
]


function Flat() {
  return (
    <div>
        <div className='mx-5 sm:mx-5 my-[50px] lg:text-[20px] lg:mt-[70px]'>
            <h5 className='text-left sm:mx-[45px] font-bold'>Flat</h5>
            <div className='grid grid-cols-2 sm:grid-cols-4  place-items-center 
            gap-2 md:gap-1 md:mx-9 lg:gap-2 items-stretch text-left lg:ml-4 lg:mr-4'>
                {
                    dataFlat.map((item) => {
                        return (
                            <div key={item.id}className='md:mx-[10px] '>
                                    <img src={item.image} alt="" className='bg-[#F4F6FB]
                                    lg:h-[19rem] lg:w-[287px] my-6 md:h-[200px] md:w-[200px] 
                                    w-[150px] h-[150px] max-w-full' />
                                <div className='flex justify-between'>
                                    <div className='text-[10px] lg:text-[16px] lg:leading-[30px] sm:leading-[20px] sm:text-[14px]'>
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
            <h6 className='text-right text-[#934A4A] text-[10px] sm:text-[14px] 
            lg:text-[20px] sm:mr-[45px] mt-4'>view all &gt;</h6>
            <hr className="hidden sm:block border-t-2 border-gray-400 mx-[45px]"></hr>
        </div>
        
    </div>
    
  )
}

export default Flat