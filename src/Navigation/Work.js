import React from "react";
import Contact from "../components/Contact";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";

const Work = () => {
  return (
    <>
      <Nav></Nav>
      <header className="about">
        <main className="header-content">
          <h1>Portfolio </h1>
          <p>
            I have a Knack for designing, creating and presenting functional
            digital products that exceed expectations, meet user needs and
            business demands.
          </p>
        </main>
      </header>
      <main>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Contactme></Contactme>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Work;
