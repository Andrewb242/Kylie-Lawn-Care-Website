import React, { useState } from "react";
import serviceData from "../Data/serviceData.json";

import "./Contact.css";

export default function Contact() {
  const email = "salawncare31@gmail.com";
  const { services } = serviceData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    jobDescription: "",
    selectedServices: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pressed");

    // Create email string with form data
    const emailBody = `
Phone Number: ${formData.phoneNumber}
Address: ${formData.address}
Job Description: ${formData.jobDescription}
Selected Services: ${formData.selectedServices.join(", ")}
    `.trim();

    const mailtoLink = `mailto:${email}?subject=Service Request&body=${encodeURIComponent(
      emailBody
    )}`;
    window.location.href = mailtoLink;
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phoneNumber &&
    formData.address &&
    formData.jobDescription &&
    formData.selectedServices.length > 0;

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch for your lawn care needs</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2 className="contact-section-title">Get In Touch</h2>
          <div className="contact-email">
            <strong>Phone:</strong> <a href="tel:8144413179">814-441-3179</a>
          </div>
          <div className="contact-email">
            <strong>Email:</strong>{" "}
            <a href="mailto:salawncare31@gmail.com">salawncare31@gmail.com</a>
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="name" className="contact-label">
              Name *
            </label>
            <input
              type="tel"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="contact-input"
              placeholder="First and last name"
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-label">
              Email Address *
            </label>
            <input
              type="tel"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="contact-input"
              placeholder="abc123@youremailprovider.com"
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="phoneNumber" className="contact-label">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="contact-input"
              placeholder="(555) 123-4567"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="address" className="contact-label">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="contact-input"
              placeholder="123 Main St, City, State 12345"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="jobDescription" className="contact-label">
              Job Description *
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleInputChange}
              className="contact-textarea"
              placeholder="Please describe the work you need done..."
              rows="4"
              required
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-label">
              Services Needed * (Select all that apply)
            </label>
            <div className="contact-services-grid">
              {services.map((service, index) => (
                <label key={index} className="contact-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.selectedServices.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="contact-checkbox"
                  />
                  <span className="contact-checkbox-text">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={!isFormValid}
            className={`contact-submit-button ${
              !isFormValid ? "contact-submit-disabled" : ""
            }`}
          >
            Send Email Request
          </button>
        </div>
      </div>
    </div>
  );
}
