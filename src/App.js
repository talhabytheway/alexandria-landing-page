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
    <div className="relative">
    <div className="bg-[url('./assets/hero-bg.png')] bg-no-repeat bg-[length:auto_100%] md:bg-cover  bg-center">
    <div className="bg-[url('./assets/heroArch.png')] bg-no-repeat lg:bg-[length:100%_100%] bg-[length:100%_100vh] " >
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
