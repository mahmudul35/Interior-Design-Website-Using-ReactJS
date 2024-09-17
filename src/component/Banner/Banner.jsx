import React from "react";
import BannerImg from "./../../assets/banner.png";
const Banner = () => {
  return (
    <div className="container mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={BannerImg} alt="" />
        </div>
        <div className="flex flex-col  justify-center">
          <h1 className="text-3xl font-bold">
            We Believe that a team makes any project better
          </h1>
          <p className="text-gray-500 my-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam aliquid
          </p>
          <button className="border  border-black bg-black text-white uppercase font-bold px-3 py-2 shadow-[5px_5px_0px_0px_#6c6c6c]  duration-500">
            Discover now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
