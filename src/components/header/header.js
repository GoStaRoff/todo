import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-items">
        <li><a href="/home">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/list">TodoList</a></li>
        <li><a href="/options">Options</a></li>
      </ul>
    </div>
  );
};

export default Header;
