import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-items">
        <li>Home</li>
        <li>Profile</li>
        <li>TodoList</li>
        <li>Options</li>
      </ul>
    </div>
  );
};

export default Header;
