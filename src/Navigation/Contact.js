import React from "react";
import Contactme from "../components/Contactme";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Call = () => {
  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <header className="about">
        <main className="header-content">
          <h1>Contact Me </h1>
          <p>
            I have a Knack for designing, creating and presenting functional
            digital products that exceed expectations, meet user needs and
            business demands.
          </p>
        </main>
      </header>
      <section>
        <Contact></Contact>
      </section>
      <section>
        <Contactme></Contactme>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Call;
