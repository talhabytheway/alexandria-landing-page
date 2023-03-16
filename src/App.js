import React from "react";

import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Welcome from "./components/Welcome/Welcome";
import Publish from "./components/Publish/Publish";
import Benefit from "./components/Benefit/Benefit";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="">
      <Hero />
      <Feature />
      <Welcome />
      <Publish />
      <Benefit />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
