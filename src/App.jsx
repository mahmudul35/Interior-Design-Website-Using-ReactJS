import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Brand from "./component/Brand/Brand";
import Services from "./component/Services/Services";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brand />
      <Services />
    </main>
  );
};

export default App;
