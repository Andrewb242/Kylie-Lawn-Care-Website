import React, { useEffect, useRef } from "react";
import "./Gallery.css";

const photos = [
  {
    before: "https://via.placeholder.com/300x200?text=Before+1",
    after: "https://via.placeholder.com/300x200?text=After+1",
  },
  {
    before: "https://via.placeholder.com/300x200?text=Before+2",
    after: "https://via.placeholder.com/300x200?text=After+2",
  },
  {
    before: "https://via.placeholder.com/300x200?text=Before+3",
    after: "https://via.placeholder.com/300x200?text=After+3",
  },
  {
    before: "https://via.placeholder.com/300x200?text=Before+4",
    after: "https://via.placeholder.com/300x200?text=After+4",
  },
  {
    before: "https://via.placeholder.com/300x200?text=Before+5",
    after: "https://via.placeholder.com/300x200?text=After+5",
  },
  {
    before: "https://via.placeholder.com/300x200?text=Before+6",
    after: "https://via.placeholder.com/300x200?text=After+6",
  },
  // Add more photo objects as needed
];

export default function Gallery() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gallery-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-container">
      {photos.map((photo, idx) => (
        <div
          key={idx}
          className="gallery-photo-pair gallery-hidden"
          ref={(el) => (refs.current[idx] = el)}
        >
          <img
            src={photo.before}
            alt={`Before ${idx}`}
            className="gallery-image"
          />
          <img
            src={photo.after}
            alt={`After ${idx}`}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
}
