import React from 'react'
import img1 from '../../assets/Hero/img1.png'
import img2 from '../../assets/Hero/img2.png'
const Hero = () => {
  return (
    <section className='max-w-[100%] mx-5 sm:mx-[68px]'>
        <div className='my-[30px] sm:my-[40px] text-left'>
            <span className='text-[10px] sm:hidden text-gray-400'>Home 
                <span className='text-black'> &gt;</span> </span>
            <span className='text-[10px] sm:text-[15px] font-bold'>
                Shop</span>
        </div>
        <div className='hidden sm:grid sm:grid-cols-2 sm:w-[100%] sm:'>
            <div className='sm:flex justify-center items-center 
            sm:flex-col h-[635px] max-w-[100%] bg-black'>
                <div className='text-white text-center block lg:w-[367px] 
                text-wrap'>
                    <h4 className='text-[50px]'>Kaiza</h4>
                    <p className=' text-[20px] text-wrap'>Walk the walk: Kaiza shoes quality and classy</p>
                </div>
                <button className='mt-[90px] border border-white
                py-3 w-[192px] h-[50px] bg-white text-gray-500 
                rounded-md'>SHOP NOW</button>
            </div>
            <img src={img1} alt="" className='object-cover max-w-[100%] w-[100%] h-[635px]'/>
        </div>
        <div className='sm:hidden bg-cover bg-center flex flex-col w-[320px] max-w-[100%] relative' 
        style={{ 
            backgroundImage: `url(${img1})`,
            maxWidth: '100vw',
            width: '90%',
            height: '401px',
            marginLeft:'35px',
            objectFit: 'cover',
            overflow: 'hidden',
            
        }}>
           
            <p className='absolute bottom-4 w-[90%] text-wrap text-left px-2 text-white max-w-[100%]'>
                Shop the best of women’s shoes</p>
        </div>
        <div className=' sm:hidden text-[30px] bold text-left self-center tracking-[20px]
             h-[240px] flex flex-col justify-between max-w-[100%] py[4px] ml-0 
             absolute bottom-[200px]'>
                <h1>S<span className='text-white'>HOP</span></h1>
                <h1>S<span className='text-white'>HOP</span></h1>
                <h1>S<span className='text-white'>HOP</span></h1>
        </div>
        <div className='flex flex-col items-center mt-[35px] text-[10px] sm:hidden '>
            <p>Do you want to see some of our shoes?</p>
            <button className='w-[137px] h-[30px] bg-[#F3CCCC] px-5 py-3
             mt-[15px] flex text-center justify-center items-center '>CHECK IT OUT</button>
        </div>
        <div className='sm:hidden justify-center items-center 
            flex flex-col h-[328px] max-w-[100%] bg-white my-10 bg-cover 
            bg-center max-h[100%] relative'
            style={{ 
                backgroundImage: `url(${img2})`,
                width:'100%',
                height:'328px'
            }}>
                <div className='text-black text-center block lg:w-[367px] 
                text-wrap self-center'>
                    <h4 className='text-[24px]'>Kaiza</h4>
                    <p className=' text-[12px] mx-10 text-wrap '>Walk the walk: Kaiza shoes quality and classy</p>
                </div>
                <button className='border border-gray-400 shadow
                py-3 w-[107px] h-[30px] text-black font-bold
                rounded-md text-[10px] text-center bold absolute bottom-[55px]'>SHOP NOW</button>
        </div>
    </section>
  )
}

export default Hero