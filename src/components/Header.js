import React from "react";
import "./components css/header.css";
import text from "./images/text.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <main className="header-content">
          <h5>Get Every Single Solution.</h5>
          <img
            src={text}
            alt=""
            style={{ width: "100%", paddingTop: "10px" }}
          ></img>
          {/* <h1>Hi, I’m Victor, I’m a Product Designer.</h1> */}
          <p>
            I have a Knack for designing, creating and presenting functional
            digital products that exceed expectations, meet user needs and
            business demands.
          </p>
          <button>Hire me</button>
          <button>Learn more</button>
        </main>
      </header>
    </>
  );
};

export default Header;
