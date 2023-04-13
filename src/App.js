import React from "react";
// import heroBg from './assets/hero-bg-mobile.png'

import Hero from "./components/Hero/Hero";
import Nav from "./components/Hero/Nav";
import Feature from "./components/Feature/Feature";
import Welcome from "./components/Welcome/Welcome";
import Publish from "./components/Publish/Publish";
import Benefit from "./components/Benefit/Benefit";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="relative bg-[#F6F6F6]">
    <div className="bg-[url('./assets/hero-png.png')] bg-no-repeat bg-top bg-[length:cover_70%] md:bg-[length:cover_67%] xxl:bg-[length:auto_85%]">
    <div className="bg-[url('./assets/archMob.svg')] lg:bg-[url('./assets/heroArch.png')] bg-no-repeat lg:bg-[length:100%_65%] bg-[length:87vw_auto] bg-top" >
      <Nav />
      <Hero />
      <Feature />
    </div>
    </div>
    <div className="">
      <Welcome />
      <Publish />
      <Benefit />
      <Subscribe />
      <Footer />
    </div>
    </div>
  );
}

export default App;
