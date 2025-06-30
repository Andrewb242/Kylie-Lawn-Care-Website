import React, { useEffect, useRef } from "react";
import "./Gallery.css";

const photos = [
  {
    before: "https://picsum.photos/500",
    after: "https://picsum.photos/500?random=1",
  },
  {
    before: "https://picsum.photos/500?random=2",
    after: "https://picsum.photos/500?random=3",
  },
  {
    before: "https://picsum.photos/500?random=4",
    after: "https://picsum.photos/500?random=5",
  },
  {
    before: "https://picsum.photos/500?random=6",
    after: "https://picsum.photos/500?random=7",
  },
  {
    before: "https://picsum.photos/500?random=8",
    after: "https://picsum.photos/500?random=9",
  },
  {
    before: "https://picsum.photos/500?random=10",
    after: "https://picsum.photos/500?random=11",
  },
];

export default function Gallery() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("gallery-hidden");
            entry.target.classList.add("gallery-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const timeoutId = setTimeout(() => {
      refs.current.forEach((el) => {
        if (el) {
          observer.observe(el);
        }
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
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
