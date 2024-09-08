import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
