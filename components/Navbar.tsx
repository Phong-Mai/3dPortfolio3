import Link from "next/link";
import React from "react";
import { Link as Scroll} from 'react-scroll'
const Navbar = () => {
  return (
    <div className="w-full h-20 p-4 fixed z-[100] font-neue">
      <div className="flex items-center justify-between w-full h-full px-2 text-3xl">
        <span>Showkat.</span>
        <div>
          <ul className="hidden md:flex">
            <Scroll to="about">
              <li className="ml-10 text-3xl uppercase hover:border-b hover:border-[#ff1722] cursor-pointer">
                About
              </li>
            </Scroll>
            <Scroll to="skill">
              <li  className="ml-10 text-3xl uppercase hover:border-b hover:border-[#ff1722] cursor-pointer">
                Skills
              </li>
            </Scroll>
            <Scroll to="project">
              <li className="ml-10 text-3xl uppercase hover:border-b hover:border-[#ff1722] cursor-pointer">
                Projects
              </li>
            </Scroll>
            <Scroll to="contact">
              <li className="ml-10 text-3xl uppercase hover:border-b hover:border-[#ff1722] cursor-pointer">
                Contact
              </li>
            </Scroll>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
