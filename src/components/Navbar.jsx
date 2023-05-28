import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DropDown from "./DropDown";
import Accordions from "./Accordians";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);

  const [List1, setList1] = useState([
    {
      title: "Services",
      module: [
        {
          name: "Digital Experience"
        },
        {
          name: "Product Engineering",
        },
        {
          name: "Cloud Engineering",
        },
        {
          name: "NextGen Services",
        },
      ],
    },

    {
      title: "Platform & Product",
      module: [
        {
          name: "Kellton4Health",
        },
        {
          name: "KLGAME",
        },
        {
          name: "tHRive",
        },
        {
          name: "Kellton$NFT",
        },
      ],
    },
    {
      title: "About Us",
      module: [
        {
          name: "Our Partners",
        },
        {
          name: "Testimonials",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Investors",
        },
        {
          name: "Privacy-Policy",
        }
      ],
    },
  ]);

  const handelnav = () => {
    setnavOpen(!navOpen);
  };
  return (
    <header className=" z-50 h-[80px] w-screen flex items-center justify-center md:gap-0 lg:gap-5 fixed top-0 left-0 bg-[rgba(16,44,81,255)] text-white">
      <div className=" px-3 lg:px-6">
        <span>
          <h1 className=" text-3xl sm:text-5xl font-extrabold">KellTon</h1>
        </span>
      </div>
      <nav className=" flex w-[100%] justify-center items-center">
        <ul className=" hidden md:flex md:items-center md:relative md:top-0 md:left-0 md:w-[100%] md:text-xs lg:text-sm ">
          <li className=" my-3 mx-3 py-3 px-2 w-fit hover:text-blue-300  transition-all duration-300 cursor-pointer text-center">
            Home
          </li>
          {/* {List1.map((item, index) => {
            return (
              <li
                key={index}
                className=" my-3 py-3 px-2 w-full hover:text-blue-300  transition-all duration-300 cursor-pointer text-center"
              >
                <DropDown title={item.title} list1={item.module} />
              </li>
            );
          })} */}
        </ul>
        <ul
          className={
            navOpen
              ? " z-50 py-3 bg-[rgba(16,44,81,255)] text-white w-[60%] h-screen absolute top-[80px] left-0 ease-in duration-500  md:hidden text-center font-bold font-customised1"
              : " z-50 bg-[rgba(16,44,81,255)] text-white w-[60%] h-screen absolute top-[80px] left-[-150%] ease-in duration-500  text-center font-bold font-customised1"
          }
        >
          <li className=" mx-auto my-2 py-3 px-4 w-fit ">
            Home
          </li>
          {/* <Accordions /> */}
        </ul>
        <div
          onClick={handelnav}
          className=" cursor-pointer flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-0 mr-5 sm:mr-10 md:hidden"
        >
          <i>
            {!navOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
