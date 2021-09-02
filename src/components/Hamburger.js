import React from "react";
import { Link } from "react-router-dom";

import { fallDown as Menu } from "react-burger-menu";

const Hamburger = () => {
  return (
    <Menu width={"100%"} right>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
        }}
        className="bm-men"
      >
        <Link
          style={{ listStyle: "none", textDecoration: "none", color: "black" }}
          to="/"
        >
          <li>Home</li>
        </Link>
        <Link
          to="/about"
          style={{ listStyle: "none", textDecoration: "none", color: "black" }}
        >
          <li>About</li>
        </Link>

        <Link
          to="/contact"
          style={{ listStyle: "none", textDecoration: "none", color: "black" }}
        >
          <li>Contact</li>
        </Link>
        <Link
          to="/portfolio"
          style={{ listStyle: "none", textDecoration: "none", color: "black" }}
        >
          <li>Portfolio</li>
        </Link>
      </main>
    </Menu>
  );
};

export default Hamburger;
