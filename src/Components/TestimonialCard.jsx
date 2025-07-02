// TestimonialCard.jsx
import React, { useRef, useEffect, useState } from "react";
import "./TestimonialCard.css";

export default function TestimonialCard({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`testimonial-card ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}
