import React from "react";
import banner2 from "../../assets/banner2 (1).png";
const LivingRoom = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-14 px-7">
        {/* For content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">
            Simple way to make stylish living room
          </h1>
          <p className="my-10 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, fugiat quod neque molestiae aliquid libero sed enim
            excepturi dolor autem blanditiis eum nihil, modi nobis est eaque,
            laboriosam labore quisquam repellendus iusto eos officiis illo? Iure
            neque ipsam voluptatem at!
          </p>
          <div className="flex space-x-4">
            <div className="w-28">
              <h1 className="font-bold text-4xl">15</h1>
              <p className="text-gray-500 my-4">Years of experience</p>
            </div>
            <div className="w-20">
              <h1 className="font-bold text-4xl">355</h1>
              <p className="text-gray-500 my-4">Happy Clients</p>
            </div>
            <div className="w-20">
              <h1 className="font-bold text-4xl">35</h1>
              <p className="text-gray-500 my-4">Award Gained</p>
            </div>
          </div>
          <button className="border border-black bg-black text-white uppercase font-bold px-3 py-2 shadow-[5px_5px_0px_0px_#6c6c6c]  duration-500">
            Get Started
          </button>
        </div>
        {/* For images */}
        <div className="flex-1">
          <img src={banner2} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
