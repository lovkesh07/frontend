import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white z-50 fixed top-0 left-0 w-full">
      <div className="flex items-center font-medium justify-evenly">
        <div className="z-50 p-5 w-fit flex">
          {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
          logo
          <div className="text-3xl md:hidden text-black " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}/>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-5 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        {/* <div className="md:block hidden">
          <Button />
        </div> */}
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          {/* <div className="py-5">
            <Button />
          </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;