import React from 'react'

import bar from "./../../assets/bar.svg";
import logo from "./../../assets/logo.svg";


const Welcome = () => {
  return (
    <div className='w-[100%] px-6 md:w-[80%] md:px-0 mx-auto text-center font-open text-navy'>
      <img src={bar} alt="" className='py-12 md:py-14 w-full'/>
      <h2 className="text-dark font-prata text-[40px] md:text-[44px] lg:text-[48px]">
      Welcome to the <span className="text-blue">wall of</span>
      </h2>
      <img src={logo} alt="Alexandria" className='w-full md:w-[60%] lg:h-20 lg:w-auto mx-auto' />
      <p className="text-[24px] md:text-[28px] lg:text-[32px] max-w-[550px] mx-auto pt-8">This is where we tell you at all our hopes and aspirations.</p>
      <p className="text-[24px] md:text-[28px] lg:text-[32px]">Behold the wanderer of the literary metaverse.</p>
      <img src={bar} alt="" className='py-12 md:py-14 w-full'/>

    </div>
  )
}

export default Welcome