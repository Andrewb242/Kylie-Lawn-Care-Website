import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="home-about-contact-container">
        <div className="home-about-container">
          <h2>About Us</h2>
        </div>
        <div className="home-logo-contact-container">
          <img className="home-logo" src="logo-square.svg" alt="Logo Square" />
          <div className="home-contact-container">
            <h2>Contact information</h2>
            <h3>814-441-3179</h3>
            <h3>salawncare31@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
