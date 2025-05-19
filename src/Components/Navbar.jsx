import React from "react";
import "./Navbar.css";

export default function Navbar({ page }) {
  const links = [
    { label: "Home", page: "home" },
    { label: "Gallery", page: "gallery" },
    { label: "Service Information", page: "service" },
    { label: "Contact Us", page: "contact" },
  ];

  return (
    <div className="nav-container">
      <img
        className="nav-logo"
        alt="Company Logo"
        src="logo-transparent-horizontal.svg"
      />
      <div className="nav-links-container">
        {links.map((link) => (
          <a
            key={link.page}
            href={`?page=${link.page}`}
            className={`nav-link${page === link.page ? " active" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
