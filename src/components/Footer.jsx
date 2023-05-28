import React from "react";
import { Link } from "react-router-dom";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EmailIcon from "@mui/icons-material/Email";
// import CallIcon from "@mui/icons-material/Call";


const Footer = () => {
  return (
    <footer className=" bg-[rgba(16,44,81,255)] text-gray-400 w-full ">
      <div className=" flex flex-col  md:flex-row md:justify-evenly">
        <div className=" px-5 py-5 flex">
          <ul className=" py-5">
            <h1 className=" w-fit text-xl border-b-2 border-white">company</h1>
            <li className="pt-3 pl-3  hover:text-white ">
              <Link to="/aboutus">about us</Link>
            </li>
            <li className="py-3 pl-3  hover:text-white ">
              <Link to="/managed-services">our services</Link>
            </li>
            <li className="py-3 pl-3  hover:text-white ">
              <Link to="/contactus">contact us</Link>
            </li>
            {/* <li className="py-3 pl-3 hover:pl-5 hover:text-white ease-in duration-150">
              <a href="#">get help</a>
            </li> */}
          </ul>
        </div>
        <div className=" py-5 flex ">
          <ul className=" p-5">
            <h1 className=" w-fit text-xl border-b-2 border-white">
              more info
            </h1>
            <li className="py-5 pl-3  hover:text-white ease-in duration-150">
              <a className=" hover:text-white" href="#">
                <i className="flex">
                  {/* <LocationOnIcon /> */}
                  <p className=" px-1">
                    our location :- APAC | EMEA | Americas
                  </p>
                </i>
                <p className=" pl-2"></p>
              </a>
            </li>
            <li className="py-5 pl-3  hover:text-white ease-in duration-150">
              <a className=" hover:text-white" href="#">
                <i className="flex">
                  {/* <EmailIcon /> */}
                  <p className=" px-1">email :- sales@msptechnet.com</p>
                </i>
                <p className=" pl-2"></p>
              </a>
            </li>
            <li className="py-5 pl-3  hover:text-white ease-in duration-150">
              <a className=" hover:text-white" href="#">
                <i className="flex">
                  {/* <CallIcon /> */}
                  <p className=" px-1">Call Us :- +917827905347</p>
                </i>
                <p className=" pl-2"></p>
              </a>
            </li>
          </ul>
        </div>
        <div class=" py-10 flex flex-col">
          <h1 className=" ml-5 w-fit text-xl border-b-2 border-white">
            follow us
          </h1>
          <div className=" p-5">
            <a className="pr-3 hover:text-white" href="#">
              <i>
                {/* <FacebookIcon /> */}
              </i>
            </a>
            <a className="pr-3 hover:text-white" href="#">
              <i>
                {/* <TwitterIcon /> */}
              </i>
            </a>
            <a className="pr-3 hover:text-white" href="#">
              <i>
                {/* <InstagramIcon /> */}
              </i>
            </a>
            <a className="pr-3 hover:text-white" href="#">
              <i>
                {/* <LinkedInIcon /> */}
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;