import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components css/nav.css";
import Hamburger from "./Hamburger";

const Nav = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log("hey");
  };

  return (
    <>
      <nav className="nav">
        <h3>la cartera</h3>
        <ul className="ul">
          <Link
            to="/"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            <li>About</li>
          </Link>
          <Link
            to="/portfolio"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            <li>Portfolio</li>
          </Link>

          <Link
            to="/contact"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            <li>Contact</li>
          </Link>
        </ul>
        <div className="hamburger">
          <Hamburger></Hamburger>
        </div>

        {/* <button onClick={toggleModal}>modal</button> */}
      </nav>
      {/* {modal ? (
        <div className="modal">
          {" "}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : null} */}
    </>
  );
};

export default Nav;
