import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

import Item from "./Item";

import arrow from "./../../assets/arrow.svg";
import moby from "./../../assets/moby.png";
import war from "./../../assets/war.png";
import leagues from "./../../assets/leagues.png";
import eth from "./../../assets/ethereum.svg";

const breakPoints = [
  { width: 1, itemsToShow: 1,},
  { width: 768, itemsToShow: 2,},
  { width: 1024, itemsToShow: 3,},
];

const Feature = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="py-10 md:py-14 lg:py-16 w-[100vw] justify-between xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-0 lg:max-w-[1440px]">
      <div className="flex flex-wrap justify-between flex-col md:flex-row gap-5 md:gap-0 text-center md:text-left md:px-[3rem] lg:px-[6rem] lg:pb-12 pb-8 pt-6 ">
        <h2 className="text-dark font-prata text-[24px] md:text-[36px] lg:text-[40px]">
          FEATURED <span className="text-blue">WORKS</span>
        </h2>
        <div className="flex gap-10 mx-auto md:mx-0 pb-4">
          <img
            src={arrow}
            onClick={() => carouselRef.current.slidePrev()}
            alt="left"
            className="cursor-pointer mx-2"
          />
          <img
            src={arrow}
            onClick={() => carouselRef.current.slideNext()}
            alt="right"
            className="rotate-180 cursor-pointer mx-2"
          />
        </div>
      </div>
      <div className="">
        <Carousel ref={carouselRef} breakPoints={breakPoints} className="" itemPadding={[20,20]} outerSpacing={width>= 1024 ? 70 : 0}>
          <Item>
            <div className="cursor-pointer md:mx-2 p-4 lg:p-6 xl:mx-3 md:bg-white md:text-dark text-white bg-purp rounded-lg">
              <div className="">
                <img
                  src={moby}
                  alt=""
                  className="rounded-lg !aspect-[1] md:!aspect-[332/487] md:aspect-auto[332/487] object-bottom object-cover"
                />
              </div>
              <div className="pt-4 md:hidden">
                <h4 className="font-bold font-open pb-2">Moby Dick</h4>
                <p className="font-open text-[14px]">
                  Herman Melville | Collector’s Edition
                </p>
                <div className="flex justify-between font-open font-semibold items-center pt-[10px]">
                  <span>...</span>
                  <div className="flex items-center"><img src={eth} alt="" className="inline h-[20px] pr-2"/><span> 0.25 ETH</span></div>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="cursor-pointer md:mx-2 p-4 lg:p-6 xl:mx-3 md:bg-white md:text-dark text-white bg-purp rounded-lg">
              <div className="">
                <img
                  src={war}
                  alt=""
                  className="rounded-lg !aspect-[1] md:!aspect-[332/487] md:aspect-auto[332/487] object-bottom object-cover"
                />
              </div>
              <div className="pt-4 md:hidden">
                <h4 className="font-bold font-open pb-2">The War of The Worlds</h4>
                <p className="font-open text-[14px]">
                  H.G. Wells | Collector’s Edition
                </p>
                <div className="flex justify-between font-open font-semibold items-center pt-[10px]">
                  <span>...</span>
                  <div className="flex items-center"><img src={eth} alt="" className="inline h-[20px] pr-2"/><span> 0.19 ETH</span></div>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="cursor-pointer md:mx-2 p-4 lg:p-6 xl:mx-3 md:bg-white md:text-dark text-white bg-purp rounded-lg">
              <div className="">
                <img
                  src={leagues}
                  alt=""
                  className="rounded-lg !aspect-[1] md:!aspect-[332/487] object-bottom object-cover"
                />
              </div>
              <div className="pt-4 md:hidden">
                <h4 className="font-bold font-open pb-2">
                  20,000 Leagues Under The Sea
                </h4>
                <p className="font-open text-[14px]">
                  Jules Verne, Victoria Bloke
                </p>
                <div className="flex justify-between font-open font-semibold items-center pt-[10px]">
                  <span>...</span>
                  <div className="flex items-center"><img src={eth} alt="" className="inline h-[20px] pr-2"/><span> 1.3 ETH</span></div>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="cursor-pointer md:mx-2 p-4 lg:p-6 xl:mx-3 md:bg-white md:text-dark text-white bg-purp rounded-lg">
              <div className="">
                <img
                  src={moby}
                  alt=""
                  className="rounded-lg !aspect-[1] md:!aspect-[332/487] md:aspect-auto[332/487] object-bottom object-cover"
                />
              </div>
              <div className="pt-4 md:hidden">
                <h4 className="font-bold font-open pb-2">Moby Dick</h4>
                <p className="font-open text-[14px]">
                  Herman Melville | Collector’s Edition
                </p>
                <div className="flex justify-between font-open font-semibold items-center pt-[10px]">
                  <span>...</span>
                  <div className="flex items-center"><img src={eth} alt="" className="inline h-[20px] pr-2"/><span> 0.25 ETH</span></div>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="cursor-pointer md:mx-2 p-4 lg:p-6 xl:mx-3 md:bg-white md:text-dark text-white bg-purp rounded-lg">
              <div className="">
                <img
                  src={war}
                  alt=""
                  className="rounded-lg !aspect-[1] md:!aspect-[332/487] md:aspect-auto[332/487] object-bottom object-cover"
                />
              </div>
              <div className="pt-4 md:hidden">
                <h4 className="font-bold font-open pb-2">The War of The Worlds</h4>
                <p className="font-open text-[14px]">
                  H.G. Wells | Collector’s Edition
                </p>
                <div className="flex justify-between font-open font-semibold items-center pt-[10px]">
                  <span>...</span>
                  <div className="flex items-center"><img src={eth} alt="" className="inline h-[20px] pr-2"/><span> 0.19 ETH</span></div>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="cursor-pointer md:mx-2 p-4 lg:p-6 xl:mx-3 md:bg-white md:text-dark text-white bg-purp rounded-lg">
              <div className="">
                <img
                  src={leagues}
                  alt=""
                  className="rounded-lg !aspect-[1] md:!aspect-[332/487] md:aspect-auto[332/487] object-bottom object-cover"
                />
              </div>
              <div className="pt-4 md:hidden">
                <h4 className="font-bold font-open pb-2">
                  20,000 Leagues Under The Sea
                </h4>
                <p className="font-open text-[14px]">
                  Jules Verne, Victoria Bloke
                </p>
                <div className="flex justify-between font-open font-semibold items-center pt-[10px]">
                  <span>...</span>
                  <div className="flex items-center"><img src={eth} alt="" className="inline h-[20px] pr-2"/><span> 1.3 ETH</span></div>
                </div>
              </div>
            </div>
          </Item>
        </Carousel>
      </div>
      <h4 className="font-prata text-center text-dark text-[24px] md:text-[28px] lg:text-[32px] pt-8 lg:pt-[76px]">
        Want to add your work?
      </h4>
      <button className="mx-auto mt-6 block text-white font-medium px-10 py-3 border md:text-[20px] rounded-md hover:cursor-pointer hover:duration-500 bg-gradient-to-r from-blue to-pink hover:bg-gradient-to-tr">
        CONTACT US
      </button>
    </div>
  );
};

export default Feature;
