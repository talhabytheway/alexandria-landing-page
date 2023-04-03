import React from "react";

import quill from "../../assets/quill.png";
import document from "../../assets/document.svg";
import pencil from "../../assets/pencil.svg";
import pencilSquare from "../../assets/pencilSquare.svg";
import paper from "../../assets/paper.svg";
import send from "../../assets/sendP.svg";

const Benefit = () => {
  return (
    <div className="bg-[#f1f0f9]">
      <div className="py-20 md:py-30 lg:py-40 bg-[#f1f0f9] mt-64 xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1500px]">
        <div className="relative">
          <img
            src={quill}
            alt=""
            className="w-[200px] md:w-[250px] lg:w-[350px] absolute top-[-170px] sm:top-[-150px] md:top-[-200px] lg:top-[-300px] right-0"
          />
          <h2 className="text-dark font-prata text-[40px] md:text-[44px] lg:text-[48px] text-left md:text-center">
            DISCOVER THE <span className="text-blue">BENEFITS</span>
          </h2>
          <div className="grid grid-col-2 md:grid-cols-4 xl:grid-cols-6 gap-10 mt-16 justify-items-center mx-auto [&>div]:rounded-lg">
            <div className="w-full max-w-[390px] p-8 bg-white flex flex-col gap-4 col-span-2">
              <img src={pencil} alt="" className="w-[56px]" />
              <h5 className="text-[32px] md:text-[36px] xl:text-[40px] font-prata text-[#21233B]">
                Author Cohorts
              </h5>
              <p className="text-[#303365] text-[16px] md:text-[18px] lg:text-[20px]">
                Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
                nisi ante blandit ligula, vel elementum urna velit eu lorem.
                Nullam in mauris sit amet quam efficitur aliquam vel accumsan
                elit.
              </p>
            </div>
            <div className="w-full max-w-[380px] p-8 bg-white flex flex-col gap-4 col-span-2">
              <img src={send} alt="" className="w-[56px]" />
              <h5 className="text-[32px] md:text-[36px] xl:text-[40px] font-prata text-[#21233B]">
                Early Access
              </h5>
              <p className="text-[#303365] text-[16px] md:text-[18px] lg:text-[20px]">
                Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
                nisi ante blandit ligula, vel elementum urna velit eu lorem.
                Nullam in mauris sit amet quam efficitur aliquam vel accumsan
                elit.
              </p>
            </div>
            <div className="w-full max-w-[380px] p-8 bg-white flex flex-col gap-4 col-span-2">
              <img src={document} alt="" className="w-[56px]" />
              <h5 className="text-[32px] md:text-[34px] xl:text-[38px] font-prata text-[#21233B]">
                Platform Reader
              </h5>
              <p className="text-[#303365] text-[16px] md:text-[18px] lg:text-[20px]">
                Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
                nisi ante blandit ligula, vel elementum urna velit eu lorem.
                Nullam in mauris sit amet quam efficitur aliquam vel accumsan
                elit.
              </p>
            </div>
            <div className="w-full max-w-[380px] p-8 bg-white flex flex-col gap-4 col-span-2 xl:col-start-2 xl:col-end-4">
              <img src={pencilSquare} alt="" className="w-[56px]" />
              <h5 className="text-[32px] md:text-[36px] xl:text-[40px] font-prata text-[#21233B]">
                Author Cohorts
              </h5>
              <p className="text-[#303365] text-[16px] md:text-[18px] lg:text-[20px]">
                Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
                nisi ante blandit ligula, vel elementum urna velit eu lorem.
                Nullam in mauris sit amet quam efficitur aliquam vel accumsan
                elit.
              </p>
            </div>
            <div className="w-full max-w-[380px] p-8 bg-white flex flex-col gap-4 col-span-2 md:col-start-2 md:col-end-4 xl:col-start-4 xl:col-end-6">
              <img src={paper} alt="" className="w-[56px]" />
              <h5 className="text-[32px] md:text-[36px] xl:text-[40px] font-prata text-[#21233B]">
                Early Access
              </h5>
              <p className="text-[#303365] text-[16px] md:text-[18px] lg:text-[20px]">
                Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
                nisi ante blandit ligula, vel elementum urna velit eu lorem.
                Nullam in mauris sit amet quam efficitur aliquam vel accumsan
                elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
