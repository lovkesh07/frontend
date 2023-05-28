import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useFocusWithin } from "react-aria";

const DropDown = ({ title, list1 }) => {
  const [IsOpen, setIsOpen] = useState(false);
  let [isFocusWithin, setFocusWithin] = useState(false);
  let { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!IsOpen)}
      // onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      // onFocus={() => setIsOpen(true)}
      {...focusWithinProps}
      className=" bg-[rgba(16,44,81,255)] relative w-full"
    >
      <motion.button layout className=" text-xs w-fit">
        {title}
      </motion.button>
      {IsOpen || isFocusWithin ? (
        <ArrowDropUpIcon fontSize="small" />
      ) : (
        <ArrowDropDownIcon fontSize="small" />
      )}
      {(IsOpen || isFocusWithin) && (
        <motion.div className=" text-sm z-50 w-full h-fit bg-gray-100 rounded-md text-[rgba(16,44,81,255)] absolute top-[35px] md:top-[55px] left-[50%] translate-x-[-50%] opacity-100  transition-all duration-300">
          {list1.map((module, i) => {
            return (
              <motion.div
                key={i}
                className=" text-[0.9rem] w-full py-2 px-2 mx-auto  border-b-[1px] border-black"
              >
                <li>{module.name}</li>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
};

export default DropDown;
