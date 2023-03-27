import React from "react";

import logo from '../../assets/logo.svg'
import discord from '../../assets/discord.svg'
import twitter from '../../assets/twitter.svg'

const Footer = () => {
  return (
    <div className="bg-[#0E0F1E] text-[#F6F6F6] font-open mt-24 md:">
      <div className="py-10 md:py-16 lg:py-20 xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1500px] flex flex-col gap-6 lg:flex-row justify-between w-full">
        <div className="">
          <img src={logo} alt="" className="h-12 mb-6 mx-auto lg:mx-0"/>
          <span className="hidden lg:block text-[14px]">© 2022 Alexandria Labs. All Right Reserved</span>
          <span className="lg:hidden flex flex-row gap-4 justify-center flex-wrap">
              <a href="https://www.twitter.com/_talhaism"><img src={twitter} alt="" className="inline h-[35px]" /></a>
              <a href="https://www.twitter.com/_talhaism"><img src={discord} alt="" className="inline h-[35px]" /></a>
            </span>
        </div>
        <div className=" flex flex-row space-between justify-center flex-wrap [&>ul]:flex-col [&>ul]:h-full [&>ul]:gap-4 [&>ul]:flex-wrap [&>ul]:justify-center w-full lg:w-fit gap-6 md:gap-10 lg:gap-16 [&>ul>li]:cursor-pointer">
            <ul className="flex">
              <li>About</li>
              <li>Early Access</li>
            </ul>
            <ul className="flex">
              <li>Author Submissions</li>
              <li>Team</li>
            </ul>
            <ul className="hidden lg:!flex">
              <li><a href="https://www.twitter.com/_talhaism"><img src={twitter} alt="" className="inline pr-2" />Twitter</a></li>
              <li><a href="https://www.twitter.com/_talhaism"><img src={discord} alt="" className="inline pr-2" />Discord</a></li>
            </ul>
        </div>
          <span className="lg:hidden text-[14px] text-center">© 2022 Alexandria Labs. All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
