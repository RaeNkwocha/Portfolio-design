import React from "react";
import "./components css/portfolio.css";

const Portfolio = () => {
  return (
    <>
      <nav className="nav-1">
        <h3>A Peek At My Portfolio</h3>

        <ul>
          <li>All</li>
          <li>Branding</li>
          <li>Logo</li>
          <li>UI/UX</li>
          <li>Website</li>
        </ul>
      </nav>

      <main className="grid">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
        <div className="box-4"></div>
        <div className="box-5"></div>
        <div className="box-6"></div>
      </main>
    </>
  );
};

export default Portfolio;
