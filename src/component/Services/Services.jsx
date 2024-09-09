import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { div, title } from "framer-motion/client";
const Services = () => {
  const ServicesList = [
    {
      id: 1,
      title: "Luxury Facilities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
      link: <FaPenToSquare />,
    },
    {
      id: 2,
      title: "Quality Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
      link: <FaVectorSquare />,
    },
    {
      id: 3,
      title: "Affordable Price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
      link: <BiSolidDollarCircle />,
    },
  ];
  return (
    <div className="container py-14">
      <div className="text-center w-96 mx-auto">
        <h1 className="text-4xl font-bold">What we provide</h1>
        <p className="text-gray-500">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {ServicesList.map((list) => {
          return (
            <div
              key={list.id}
              className="w-96 mx-auto border border-black py-9 px-4"
            >
              <span className="text-xl inline-block border border-black rounded-full p-4">
                {list.link}
              </span>
              <h1 className="text-2xl font-semibold my-6">{list.title}</h1>
              <p>{list.description}</p>
              <a className="font-bold underline cursor-pointer mt-2" href="">
                Learn More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
