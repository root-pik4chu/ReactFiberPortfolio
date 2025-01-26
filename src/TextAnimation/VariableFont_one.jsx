import React, { useEffect, useRef, useState } from "react";
// import "tailwindcss/tailwind.css";

const MathDist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const Char = ({ char, mouse, maxDist, weightEnabled }) => {
  const spanRef = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
      if (spanRef.current) {
        const rect = spanRef.current.getBoundingClientRect();
        const dist = MathDist(mouse, {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2,
        });

        const wght = weightEnabled
          ? Math.max(100, 800 - Math.abs((800 * dist) / maxDist))
          : 400;

        setStyle({
          fontVariationSettings: `'wght' ${wght}`,
        });
      }
    };

    updateStyle();
  }, [mouse, maxDist, weightEnabled]);

  return (
    <span
      ref={spanRef}
      className="inline-block transition-all"
      style={style}
    >
      {char}
    </span>
  );
};

const VariableFont_one = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [maxDist, setMaxDist] = useState(0);
  const [flex, setFlex] = useState(true);
  const [weightEnabled, setWeightEnabled] = useState(true);
  const titleRef = useRef(null);
  const text = "Hover Effect";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const updateMaxDist = () => {
      if (titleRef.current) {
        setMaxDist(titleRef.current.getBoundingClientRect().width / 2);
      }
    };

    updateMaxDist();
    window.addEventListener("resize", updateMaxDist);
    return () => window.removeEventListener("resize", updateMaxDist);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        ref={titleRef}
        className={`${
          flex ? "flex" : ""
        } text-center whitespace-nowrap`}
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="mr-2">
            {word.split("").map((char, index) => (
              <Char
                key={index}
                char={char}
                mouse={mouse}
                maxDist={maxDist}
                weightEnabled={weightEnabled}
              />
            ))}
          </span>
        ))}
      </div>
      <div className="mt-8 space-x-4">
        <button
          onClick={() => setFlex(!flex)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
        >
          Toggle Flex
        </button>
        <button
          onClick={() => setWeightEnabled(!weightEnabled)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
        >
          Toggle Weight
        </button>
      </div>
    </div>
  );
};

export default VariableFont_one;
