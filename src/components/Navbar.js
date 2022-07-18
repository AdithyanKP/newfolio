import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  //navbar toggle handler
  const navHandler = () => {
    setNav((nav) => !nav);
  };

  //mobile navbar actions
  const mobileNavHandler = () => {
    setNav(false);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]  text-white">
      <div>
        <p>ADITHYAN KP</p>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
        </ul>
      </div>
      {/* burgerbar */}
      <div className="md:hidden z-10" onClick={() => navHandler()}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile view */}
      <ul
        className={
          !nav
            ? " hidden "
            : " md:hidden absolute top-0 left-0 flex flex-col w-full h-screen justify-center align-center bg-[#0a192f] items-center"
        }
      >
        <li className="py-4 text-3xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => mobileNavHandler()}
          >
            Home
          </Link>
        </li>

        <li className="py-4 text-3xl">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => mobileNavHandler()}
          >
            Skills
          </Link>
        </li>
        <li className="py-4 text-3xl">
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => mobileNavHandler()}
          >
            Work
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00cc88]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Instagram
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
