import React from "react";
import Contact from "../components/Contact";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Contactme></Contactme>
      <Footer></Footer>
    </div>
  );
};

export default Home;
