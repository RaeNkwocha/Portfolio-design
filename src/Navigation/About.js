import React from "react";
import Contact from "../components/Contact";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../components/components css/about.css";
const About = () => {
  return (
    <>
      {" "}
      <Nav></Nav>
      <header className="about">
        <main className="header-content">
          <h1>About Me </h1>
          <p>
            I have a Knack for designing, creating and presenting functional
            digital products that exceed expectations, meet user needs and
            business demands.
          </p>
        </main>
      </header>
      <section>
        <main className="about-flex">
          <div className="about-box"></div>
          <div className="about-text">
            <h2>I Create Products Not Just Art.</h2>
            <p>
              Hello there! I’m a Product and Interactions designer, I have a
              Knack for designing, creating and presenting functional digital
              products that exceed expectations, meet user needs and business
              demands. I have worked with startups, collaborated with teams of
              larger organizations, and I'm currently working in a team of
              Product designers for a software company that creates
              multi-faceted products with varying complexities and
              functionalities.
            </p>
            {/* <br /> */}
            <p>
              I Implement Design Thinking, which enables me design intuitive,
              effective and functional user interfaces while maintaining premium
              aesthetics, my designs are also heavily influenced by research of
              a wide demographic of users and their frustrations and this has
              ultimately resulted in good reviews from users of the products.
            </p>
            <div className="resume">Click on this to view my Resume</div>
          </div>
        </main>
      </section>
      <main className="services">
        <div className="services-flex">
          <h3>Designing With Passion While Exploring The World.</h3>

          <h5>
            I'm experienced with a vast number of Design tools including
            InVision and Figma to create wireframes, mobile app interfaces and
            prototyping designs. And also Adobe Illustrator and Photoshop to
            create a variety of logos, illustrations, digital and printed
            images.
          </h5>
        </div>
        <div className="services-flex-2">
          <h3>Any Type Of Query & Discussion.</h3>

          <h5>contact me here</h5>
          <h3>quoch999@gmail.com</h3>
        </div>
      </main>
      <Contact></Contact>
      <Contactme></Contactme>
      <Footer></Footer>
    </>
  );
};

export default About;
