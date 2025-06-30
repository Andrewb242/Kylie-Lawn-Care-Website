import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>S&A Lawncare and Services LLC</h3>
        <p>
          Phone: <a href="tel:8144413179">814-441-3179</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:salawncare31@gmail.com">salawncare31@gmail.com</a>
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} S&A Lawncare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
