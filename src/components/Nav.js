import React, { useState } from "react";
import "./components css/nav.css";
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
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <button onClick={toggleModal}>modal</button>
      </nav>
      {modal ? (
        <div className="modal">
          {" "}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Nav;
