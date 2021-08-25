import React from "react";
import { fallDown as Menu } from "react-burger-menu";

const Hamburger = () => {
  function showSettings(event) {
    event.preventDefault();
  }

  return (
    <Menu width={"100%"} right>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="bm-men"
      >
        <a id="home" className="bm-item-list" href="/">
          Home
        </a>
        <a id="about" className="bm-item-list" href="/about">
          About
        </a>
        <a id="contact" className="bm-item-list" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="bm-item-list" href="">
          Settings
        </a>
      </main>
    </Menu>
  );
};

export default Hamburger;
