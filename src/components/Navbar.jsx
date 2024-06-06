import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/add"}>Add</NavLink>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/edit"}>Edit</NavLink>
    </div>
  );
};

export default Navbar;
//navlink -
