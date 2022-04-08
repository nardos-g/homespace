import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const handleClick = () => {
    console.log("hey there");
  };
  const navigate = useNavigate();

  return (
    // Nave bar
    <nav className="navbar" id="navBar">
      <div className="container">
        <h1 className="logo">DJK</h1>
        <ul className="nav">
          <Link to="/">Home</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
