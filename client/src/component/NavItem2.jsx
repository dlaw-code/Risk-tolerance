import React from "react";
import "./ht.css";


const NavItem2 = ({ text, url }) => {
  return (
    <a
      className="text-white bg-black cursor-pointer  text-xl font-normal px-6 py-2 rounded-lg main bar"
      href={url}
    >
      {text} 
    </a>
  );
};

export default NavItem2;
