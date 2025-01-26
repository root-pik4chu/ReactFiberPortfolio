import React, { useEffect, useRef } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

const VariableFontGsap = ({text}) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Splitting.js on mount
    Splitting({ target: textRef.current, by: "chars" });

    const chars = Array.from(textRef.current.querySelectorAll(".char"));
    const maxDist = 200; // Maximum distance for hover effect

    const calculateWeight = (distance) => {
      const weight = 400 + Math.max(0, (maxDist - distance) * 4);
      return Math.min(900, Math.max(100, weight));
    };

    const handleMouseMove = (e) => {
      const rect = textRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      chars.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const charX = charRect.left + charRect.width / 2 - rect.left;
        const charY = charRect.top + charRect.height / 2 - rect.top;

        const distance = Math.sqrt(
          Math.pow(mouseX - charX, 2) + Math.pow(mouseY - charY, 2)
        );
        const fontWeight = calculateWeight(distance);

        char.style.fontVariationSettings = `'wght' ${fontWeight}`;
      });
    };

    const handleMouseLeave = () => {
      chars.forEach((char) => {
        char.style.fontVariationSettings = `'wght' 400`;
      });
    };

    const textContainer = textRef.current;
    textContainer.addEventListener("mousemove", handleMouseMove);
    textContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textContainer.removeEventListener("mousemove", handleMouseMove);
      textContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={textRef}
      className="variable-font hover-text"
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "6rem",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
};

export default VariableFontGsap;
