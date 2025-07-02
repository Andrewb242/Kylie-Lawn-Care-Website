import React from "react";
import "./Home.css";
import testimonialData from "../Data/testimonialData.json";
import TestimonialCard from "../Components/TestimonialCard";

export default function Home() {
  const { testimonials } = testimonialData;

  return (
    <div className="home-container">
      <div className="home-cover-photo">
        <div className="home-slogan-container">
          <h1>Precision Landscaping. Lasting Beauty.</h1>
        </div>
      </div>
      <div className="home-about-container">
        <h2>About Us</h2>
      </div>
      <div className="home-testimonials-container">
        <h2>What Our Clients Say</h2>
        <div className="home-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <p>"{testimonial.quote}"</p>
              <span>- {testimonial.author}</span>
            </TestimonialCard>
          ))}
        </div>
      </div>
    </div>
  );
}
