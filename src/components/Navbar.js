import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  //navbar toggle handler
  const navHandler = () => {
    setNav((nav) => !nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]  text-white">
      <div>
        <p>ADITHYAN KP</p>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
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
        <li className="py-4 text-4xl">Home</li>
        <li className="py-4 text-4xl">About</li>
        <li className="py-4 text-4xl">Skills</li>
        <li className="py-4 text-4xl">Work</li>
        <li className="py-4 text-4xl">Contact</li>
      </ul>
    </div>
  );
};
export default Navbar;
