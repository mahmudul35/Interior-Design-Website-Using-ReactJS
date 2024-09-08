import React from "react";
import Logo from "../../assets/logo-1.png";
const Navbar = () => {
  const NavLinks = [
    {
      id: 1,
      title: "About",
      link: "#",
    },
    {
      id: 2,
      title: "Service",
      link: "#",
    },
    {
      id: 3,
      title: "Project",
      link: "#",
    },
    {
      id: 4,
      title: "Contact",
      link: "#",
    },
  ];
  return (
    <div className="container py-3 flex justify-between items-center">
      {/* logo */}
      <div className="flex items-center gap-1 capitalize">
        <img src={Logo} alt="pic" className="w-10" />
        <span className="font-extrabold text-2xl uppercase">Interior</span>
      </div>
      {/* link */}
      <div className=" hidden md:flex">
        {NavLinks.map((link) => {
          return (
            <a className="mx-3 font-semibold lg:text-base" href={link.link}>
              {link.title}
            </a>
          );
        })}
      </div>
      {/* button */}
      <div>
        <button className="border font-semibold border-black px-3 py-2 shadow-[5px_5px_0px_0px_#6c6c6c] hover:bg-black hover:text-white duration-500">
          Try For Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
