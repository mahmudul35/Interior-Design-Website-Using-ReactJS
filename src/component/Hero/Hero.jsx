import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="container mt-9 md:mt-0 flex flex-col md:flex-row justify-between items-center md:min-h-[600px]">
      <div className="flex flex-col  justify-center  w-3/4 md:w-2/4 ">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold">
            SKETCH LUXURY INTERIOR DESIGN
          </h1>
          <p className="my-6 text-gray-500  md:w-3/4">
            Bring your dream to life with one-on-one design help & hand picked
            products tailored to your style, space and budget.
          </p>
        </div>
        {/* button */}
        <div className="flex gap-4">
          <button className="border border-black bg-black text-white uppercase font-bold px-3 py-2 shadow-[5px_5px_0px_0px_#6c6c6c]  duration-500">
            Get Started
          </button>
          <button className="border border-black px-3 py-2 shadow-[5px_5px_0px_0px] uppercase font-bold">
            Contact US
          </button>
        </div>
      </div>

      {/* image */}
      <div className="mt-10 md:mt-0">
        <img
          src={hero}
          alt=""
          className="w-[80%] md:w-[500px] object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
