import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
   return (
      <div id="sideBar">
         <NavLink to="/alerts" className="menuLink">Alerts</NavLink>
         <NavLink to="/buttons" className="menuLink">Buttons</NavLink>
         <NavLink to="/grid" className="menuLink">Grid</NavLink>
      </div>
   );
};

export default SideBar;
