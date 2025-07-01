import React from "react";
import "./Service.css";
import serviceData from "../Data/serviceData.json";

export default function Service() {
  const { services, serviceArea } = serviceData;

  return (
    <div className="service-container">
      <div className="service-s-container">
        <h1>Our Services</h1>
        {services.map((service, index) => (
          <p key={index}>{service}</p>
        ))}
      </div>

      <div className="service-sa-container">
        {serviceArea && (
          <>
            <h2>Service Area</h2>
            <p>{serviceArea}</p>
          </>
        )}
      </div>

      <div className="cta-section">
        <h2>Get in Touch</h2>
        <p>
          Contact us today to schedule your landscaping service or get a free
          quote!
        </p>
      </div>
    </div>
  );
}
