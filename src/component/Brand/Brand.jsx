import React from "react";
import Brand1 from "./../../assets/brand/1.png";
import Brand2 from "./../../assets/brand/2.png";
import Brand3 from "./../../assets/brand/3.png";
import Brand4 from "./../../assets/brand/4.png";
import Brand5 from "./../../assets/brand/5.png";
const Brand = () => {
  return (
    <div className="container py-16 md:py-0">
      <div className="flex justify-center flex-wrap md:justify-between">
        <img src={Brand1} alt="" className="w-[130px]" />
        <img src={Brand2} alt="" className="w-[130px]" />
        <img src={Brand3} alt="" className="w-[130px]" />
        <img src={Brand4} alt="" className="w-[130px]" />
        <img src={Brand5} alt="" className="w-[130px]" />
      </div>
    </div>
  );
};

export default Brand;
