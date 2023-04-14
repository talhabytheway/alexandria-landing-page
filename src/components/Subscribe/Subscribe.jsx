import React from "react";

import subIllus from "../../assets/subIllus.png";

const Subscribe = () => {
  return (
    <div className="py-24 xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1500px]">
      <div className="items-center flex gap-8 flex-col">
        <img src={subIllus} alt="" className="w-full max-w-[500px]" />
        <div className="text-center">
          <h4 className="text-[40px] md:text-[44px] lg:text-[48px] font-prata text-navy pb-2">
            SUBSCRIBE
          </h4>
          <p className="text-[#303365] text-[16px] md:text-[18px] lg:text-[20px]">
            Duis non orci justo. Nulla lobortis, elit ac imperdiet
          </p>
        </div>
        <div className="relative w-full max-w-[532px] flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
            className="w-[100%] inline-block h-full rounded-lg focus-visible:outline-none border-[1.5px] border-[##DEDFE2] py-[12px] px-[14px] md:py-[14px] md:px-[24px]"
          />
          <div className="absolute right-0 text-[14px] md:text-[16px] font-open bg-blue cursor-pointer text-center text-white font-medium rounded-lg py-[12px] px-[24px] md:py-[14px] md:px-[48px]">
            SEND
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
