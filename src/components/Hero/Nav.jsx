import React from "react";
import logo from "../../assets/logoW.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { Link } from "react-scroll";

const Nav = () => {
  const [open, setopen] = React.useState(false);
  return (
    <header
      className={`text-white w-[100vw] mx-auto !fixed !top-0 z-[1000]`}
    >
      <div
        className={`w-[100vw] xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1500px] font-nunito flex py-5 justify-between text-[18px] font-semibold select-none transition-all ease-linear duration-650 ${
          open
            ? "bg-opacity-100 lg:bg-opacity-40 bg-dark lg:bg-transparent"
            : "bg-opacity-40 bg-none"
        }`}
      >
        <img
          src={logo}
          alt="Alexendria"
          className="h-5 sm:h-6 md:h-8 lg:h-10 my-auto hover:cursor-pointer"
        />

        <ul
          className={`block absolute px-[1.5rem] md:px-[3rem] lg:flex align-right lg:items-center !z-[100] transition-all ease-in duration-500 w-[100vw] left-[0] lg:w-auto lg:z-auto lg:static  lg:bg-none  lg:space-x-10 space-y-2.5 lg:space-y-0 my-auto p-3 lg:p-0 lg:mb-auto hover:[&>*]:text-purp hover:[&>*]:lg:text-purp hover:[&>*]:duration-500 opacity-100 hover:[&>*]:cursor-pointer ${
            open
              ? " top-[55px] md:top-[80px] opacity-100 bg-dark lg:bg-transparent"
              : " top-[-300px] opacity-0"
          } `}
        >
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              to="authors"
            >
              Authors
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              to="team"
            >
              Team
            </Link>
          </li>
          <li className="lg:hidden px-5 py-3 inline-block border rounded-md hover:cursor-pointer hover:duration-500  hover:border-dark hover:bg-white hover:!text-dark">
            CONNECT WALLET
          </li>
          <button
            className={`transition-all ease-in duration-500 px-5 py-3 border text-[16px] rounded-md hover:cursor-pointer hover:duration-500 text-purp hover:border-white hover:bg-transparent hover:!text-white bg-white hidden lg:inline `}
          >
            CONNECT WALLET
          </button>
        </ul>
        <div className="flex gap-2 md:gap-6 flex-wrap items-center lg:hidden">
          <button
            className={`transition-all ease-in duration-500 p-2 md:px-5 md:py-3 border text-[12px] sm:text-[14px] md:text-[16px] rounded-md hover:cursor-pointer hover:duration-500 text-purp hover:border-white hover:bg-transparent hover:!text-white bg-white inline-block ${
              open ? " hidden " : ""
            }`}
          >
            SELECT WALLET
          </button>
          <span
            className={`cursor-pointer lg:hidden transition-all ease-in duration-500 inline-block`}
            onClick={() => setopen(!open)}
          >
            <img src={open ? close : menu} alt="" className="w-7 md:w-10" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
