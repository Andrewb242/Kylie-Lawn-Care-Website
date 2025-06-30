import React from "react";
import "./Home.css";
import serviceData from "../Data/serviceData.json";

export default function Home() {
  const { services } = serviceData;

  return (
    <div className="home-container">
      <div className="home-cover-photo">
        <div className="home-logo-container">
          <img className="home-logo" src="logo-square.svg" alt="Logo Square" />
        </div>
      </div>
      <div className="home-about-container">
        <h2>About Us</h2>
      </div>
      <div className="home-services-container">
        <h1>Our Services</h1>
        {services.map((service, index) => (
          <h3 key={index}>{service}</h3>
        ))}
      </div>
    </div>
  );
}
