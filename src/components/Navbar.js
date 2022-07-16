import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
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
      <div className="hidden">
        <FaBars />
      </div>
      {/* mobile view */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Navbar;
