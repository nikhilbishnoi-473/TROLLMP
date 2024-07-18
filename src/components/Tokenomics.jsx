import React from 'react'
import img_graph from '../assets/image/webp/circle_graph.webp'
import ellips_top from '../assets/image/webp/ellips_top.webp'
import ellips_bottom from '../assets/image/webp/ellips_bottom.webp'

const Tokenomics = () => {
  return (
 <section className=' bg-text-red relative  '>
    <div className=' max-w-[1140px] z-50 mx-auto px-[12px] pb-[94px] max-md:pb-[45px] mt-[189px] max-lg:mt-[121px] max-md:mt-[80px] max-sm:mt-[65px] max-sm:pb-[30px]  '>
        <div className=' flex flex-row   flex-wrap mx-[-12px]'> 
        <div className=' md:w-6/12 w-[100%] flex justify-center px-3 z-50 max-md:pt-4'>
        <img className=' z-40 max-w-[548.56px] cursor-pointer w-full' src={img_graph} alt="img_graph" />
        </div> 
        
        <div className=' md:w-6/12 w-[100%] flex justify-center px-3   max-md:pt-4 items-center md:justify-end z-50'>
        <div className=' flex flex-col'> 
            <div className='max-w-[501px] border-[1px]  border-[#FFFFFF80] shadow-box-shadow  hover:shadow-box_shadow_2 duration-500 rounded-[20px]  p-[20px]'>
                <h2 className=' font-[400] font-dela-font text-white max-md:text-[38px]  max-md:leading-[36px] max-sm:leading-[30px] max-sm:text-[30px]  text-[40px] leading-[48px] '>Tokenomics</h2>
                <div className=' flex gap-[43px] items-center pt-[16px]'>
                    <h4 className=' Bals-font  font-Bals-font font-[400] max-sm:text-[15px] text-[16px] max-sm:leading-[21px] leading-[24px] text-white '>Token Name:</h4>
                  <h5 className='   font-Bals-font font-[700] text-[18px] max-sm:text-[16px] max-sm:leading-[23px] leading-[27px] text-white '>TROLLMP</h5>
                </div>
                <div className=' flex gap-[35px] items-center pt-[1px]'>
                    <h4 className=' Bals-font  font-Bals-font font-[400]  max-sm:text-[15px] text-[16px]  max-sm:leading-[21px] leading-[24px] text-white '>Token Symbol:</h4>
                  <h5 className='   font-Bals-font font-[700] text-[18px]  max-sm:text-[16px] max-sm:leading-[23px] leading-[27px] text-white '>TRMP</h5>
                </div>
                <div className=' flex gap-[48px] items-start  pt-[1px]'>
                    <h4 className=' Bals-font  font-Bals-font font-[400]  max-sm:text-[15px] text-[16px]  max-sm:leading-[21px] leading-[24px] text-white text-nowrap '>Total Supply:</h4>
                  <h5 className='   font-Bals-font font-[400] text-[16px] leading-[24px] text-white max-w-[323px] '>Infinite jest supply, but let's keep it real  <span className=' font-[700] text-[18px]  max-sm:text-[16px] max-sm:leading-[23px] leading-[27px]'>–142.53 Billion</span> </h5>
                </div>
                <div className=' flex gap-[4px] items-center  pt-[1px]'>
                    <h4 className=' Bals-font  font-Bals-font font-[400]  max-sm:text-[15px] text-[16px]  max-sm:leading-[21px] leading-[24px] text-white '>TRMP Token Type:</h4>
                  <h5 className='   font-Bals-font font-[700] text-[18px]  max-sm:text-[16px] max-sm:leading-[23px] leading-[27px] text-white '>ERC-20</h5>
                </div>
            </div>
        </div>
       
    </div>
        </div>
    </div>
    <div className=' absolute  w-full xl:top-[-163px]  md:top-[-100px] top-[-50px] left-0'>
        <img className='  w-full max-h-[312px]' src={ellips_top} alt="ellips_top" />
    </div>
    <div className=' absolute  w-full  xl:bottom-[-131px] md:bottom-[-100px] bottom-[-45px]  z-0 left-0'>
      <img className='z-[-1]  max-h-[312px] w-full' src={ellips_bottom} alt="ellips_bottom" />
    </div>
 </section>
  )
}

export default Tokenomics