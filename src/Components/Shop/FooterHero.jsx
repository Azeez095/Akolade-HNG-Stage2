import React from 'react'
import img1 from '../../assets/FooterHero/img1.png'
import img2 from '../../assets/FooterHero/img2.png'

const FooterHero = () => {
  return (
    <div className='max-w-[100%] mx-5 sm:mx-[68px]'>
        <div className='hidden sm:grid sm:grid-cols-2 sm:w-[100%]  mb-[50px]'>
            <div className='sm:flex justify-center items-center 
            sm:flex-col h-[500px] max-w-[100%] bg-[#F3CCCC]'>
                <div className='text-black text-center block lg:w-[367px] 
                text-wrap'>
                    <h4 className='text-[50px]'>Kaiza</h4>
                    <p className=' text-[20px] text-wrap'>Walk the walk: Kaiza shoes quality and classy</p>
                </div>
                <button className='mt-[90px] border border-white
                py-3 w-[192px] h-[50px] bg-white text-gray-500 
                rounded-md'>SHOP NOW</button>
            </div>
            <img src={img1} alt="" className='object-cover max-w-[100%] w-[100%] h-[500px] max-h-[500px]'/>
        </div>

        <div className='sm:hidden justify-center items-center 
            flex flex-col h-[350px] max-w-[100%] bg-[#F3CCCC] my-10 bg-cover 
            bg-center max-h[100%] relative text-center'>
                <img src={img2} alt="" className='object-cover max-w-[100%] w-[96px] h-[132px] mb-5'/>
                <div className='text-black text-center block lg:w-[367px] 
                text-wrap self-center'>
                    <h4 className='text-[24px]'>Kaiza</h4>
                    <p className=' text-[12px] mx-4 text-wrap '>Walk the walk: Kaiza shoes quality and classy</p>
                </div>
                <button className='border border-gray-400 shadow
                py-3 w-[107px] h-[30px] text-black bg-white
                rounded-md text-[10px] text-center absolute bottom-[15px]
                flex justify-center items-center'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default FooterHero
