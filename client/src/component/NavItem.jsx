import React from "react";
import "./ht.css";
const NavItem = ({ text, url }) => {
  return (
    <a
      className="text-black cursor-pointer hover:underline text-xl font-normal "
     

      href={url}
    >
      <div className="navitem">
      {text} 
      </div>

     
    </a>
  );
};

export default NavItem;
