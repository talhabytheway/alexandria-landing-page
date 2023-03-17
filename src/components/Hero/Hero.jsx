import React from "react";

import hero from '../../assets/hero-illustration-main.png'
import star from '../../assets/starHero.svg'
import send from '../../assets/send.svg'
const Hero = () => {
  return (
    <div className="hero pt-20 md:pt-24 lg:pt-28 flex flex-wrap flex-col-reverse lg:flex-row w-[100vw] justify-between xl:mx-auto px-[1.5rem] md:px-[3rem] lg:pr-0 lg:pl-[6rem] lg:max-w-[1500px] font-open">
      <div className="w-[100%] lg:w-[45%] relative pt-20 lg:pt-0">
        <h1 className="text-[40px] md:text-[64px] lg:text-[96px] text-white font-prata textshad">Your books on<span className="hidden lg:inline">-</span><span className="lg:hidden"> </span>chain</h1>
        <p className="text-white text-[20px] md:text-[26px] lg:text-[32px] drop-shadow-md">The storefront you need to publish and sell books as NFTs</p>
        <div className="flex flex-col lg:flex-row gap-3 md:gap-5 pt-6 [&>*]:lg:inline-block [&>*]:block">
        <button className=" text-white font-medium px-10 py-3 border text-[20px] rounded-md hover:cursor-pointer hover:duration-500 bg-gradient-to-r from-blue to-pink hover:bg-gradient-to-tr"> <img src={send} alt="" className="inline-block pl-2" /> EXPLORE</button>
        <button
            className={`font-bold transition-all ease-in duration-500 px-10 py-3 border text-[20px] rounded-md hover:cursor-pointer hover:duration-500 text-purp bg-white hover:bg-navy inline-block `}
          >
            PUBLISH
          </button>
        </div>
        <img src={star} alt="" className="absolute top-[-2%] right-[-2%]"/>
      </div>
        <img src={hero} alt="" className="h-fit ml-auto md:mx-auto lg:mr-0 w-[100%] lg:w-[45%] max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"/>
    </div>
  );
};

export default Hero;
