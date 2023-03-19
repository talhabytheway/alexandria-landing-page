import React from "react";

import subIllus from "../../assets/subIllus.png";

const Subscribe = () => {
  return (
    <div className="py-24 xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1500px]">
      <div className="items-center flex gap-8 flex-col">
        <img src={subIllus} alt="" className="w-full max-w-[500px]" />
        <div className="text-center">
          <h4 className="text-[40px] md:text-[44px] lg:text-[48px] font-prata text-navy">
            SUBSCRIBE
          </h4>
          <p className="text-[#303365] text-[16px] md:text-[18px] lg:text-[20px]">
            Duis non orci justo. Nulla lobortis, elit ac imperdiet
          </p>
        </div>
        <div className="w-full max-w-[600px] flex h-[50px] gap-2 items-center">
          <input type="text" name="" id="" className="w-[70%] sm:w-[80%] pl-2 inline-block h-full rounded-lg focus-visible:outline-[#DEDFE2] border-2 border-[#DEDFE2]"/>
          <div className="text-[14px] lg:text-[16px] font-open w-[30%] sm:w-[20%] bg-blue cursor-pointer text-center text-white font-medium rounded-lg  py-[15px] lg:py-[14px]">SEND</div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
