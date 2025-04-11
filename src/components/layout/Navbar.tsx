import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "About Me", path: "#about" },
  { title: "Experience", path: "#workexperience" },
  { title: "Projects", path: "#projects" },
  { title: "Skills", path: "#skills" },
  { title: "Resume", path: "#resume" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed flex justify-center w-full text-black dark:text-white font-bold">
      <div
        className="border border-teal-400 mt-8 backdrop-blur-2xl rounded-3xl 
                            hidden md:flex items-center justify-center p-2 max-w-[600px] mx-auto"
      >
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="transform hover:skew-x-12 hover:text-teal-400
                                                                transition-all duration-300 ease-in-out"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-14 border rounded
                                                z-50 text-teal-400 dark:text-white/70 border-black p-2 dark:border-white/70"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-full text-teal-400 bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.path} onClick={closeNav} className="text-5xl">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
