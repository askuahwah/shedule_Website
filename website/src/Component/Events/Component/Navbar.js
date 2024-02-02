import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Event.module.css";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className={style.Navbar_heading}>
        <p>Mood Indigo</p>
      </div>
      <div className={style.Navbar_link}>
        <NavLink to="/dayone">Day 1</NavLink>
        <NavLink to="/daysecond">Day 2</NavLink>
        <NavLink to="/daythird">Day 3</NavLink>
        <NavLink to="/dayfour">Day 4</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
