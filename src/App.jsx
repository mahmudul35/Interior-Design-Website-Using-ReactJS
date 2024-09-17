import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Brand from "./component/Brand/Brand";
import Services from "./component/Services/Services";
import Banner from "./component/Banner/Banner";
import LivingRoom from "./component/LivingRoom/LivingRoom";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brand />
      <Services />
      <Banner />
      <LivingRoom />
    </main>
  );
};

export default App;
