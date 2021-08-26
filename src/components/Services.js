import React from "react";
import "./components css/services.css";
import icon from "./images/icon.png";
import paint from "./images/paint.png";

const Services = () => {
  return (
    <section>
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

      <main className="list-service">
        <h3 className="h3">What Services you will Get from me?</h3>
        <section className="flex-3">
          <div className="my-services">
            <div className="icon-container">
              <img src={icon} alt=""></img>
            </div>
            <h3 style={{ textAlign: "center" }}>UX/UI Design</h3>
            <p style={{ textAlign: "center" }}>
              Free resource that will help nderstand thecv designc process and
              improve theroi nderstand the design process andisei impro are of
              vquality.
            </p>
          </div>
          <div className="my-services">
            <div className="icon-container">
              {" "}
              <img src={paint} alt=""></img>
            </div>
            <h3 style={{ textAlign: "center" }}>Graphics Design</h3>
            <p style={{ textAlign: "center" }}>
              Free resource that will help nderstand thecv designc process and
              improve theroi nderstand the design process andisei impro are of
              vquality.
            </p>
          </div>
          <div className="my-services">
            {" "}
            <div className="icon-container">
              <img src={icon} alt=""></img>
            </div>
            <h3 style={{ textAlign: "center" }}>Website Design</h3>
            <p style={{ textAlign: "center" }}>
              Free resource that will help nderstand thecv designc process and
              improve theroi nderstand the design process andisei impro are of
              vquality.
            </p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Services;
