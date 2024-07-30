import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {

  return (
    <div className='navbar'>
      <a href='#section'>Projects</a>
    </div>
  );
};

export default Navbar;