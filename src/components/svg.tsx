export const CardSwap = () => {
  return (
    <svg
      viewBox="0 0 400 700"
      width="80"   // smaller size for inline usage
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      style={{ verticalAlign: "middle" }} // aligns nicely with text
    >
      <title>Carousel swipe animation</title>

      {/* Phone frame */}
      <rect
        x="20"
        y="20"
        width="360"
        height="660"
        rx="40"
        fill="black"
        stroke="white"
        strokeWidth="4"
      />

      {/* Screen background */}
      <rect
        x="40"
        y="60"
        width="320"
        height="600"
        rx="20"
        fill="#111"
      />

      {/* Arrow (above carousel) */}
      <text
        id="arrow"
        x="200"
        y="140"
        fontSize="60"
        textAnchor="middle"
        fill="white"
      >
        →
      </text>

      {/* Carousel container */}
      <clipPath id="mask">
        <rect x="60" y="200" width="280" height="200" rx="16" />
      </clipPath>
      <g clipPath="url(#mask)">
        <g id="carousel">
          {/* Three cards */}
          <rect x="60" y="200" width="280" height="200" rx="16" fill="#fff" />
          <rect x="360" y="200" width="280" height="200" rx="16" fill="#e6e6e6" />
          <rect x="660" y="200" width="280" height="200" rx="16" fill="#ccc" />
        </g>
      </g>

      <style>{`
        #carousel {
          animation: slide 4s infinite;
        }
        @keyframes slide {
          0%   { transform: translateX(0); }
          20%  { transform: translateX(-300px); }
          40%  { transform: translateX(-300px); }
          60%  { transform: translateX(-600px); }
          80%  { transform: translateX(-600px); }
          100% { transform: translateX(0); }
        }

        #arrow {
          animation: arrowBlink 4s infinite;
        }
        @keyframes arrowBlink {
          0%, 39%   { opacity: 0; transform: translateX(0); }
          20%       { opacity: 1; transform: translateX(10px); }
          40%, 59%  { opacity: 0; transform: translateX(0); }
          60%       { opacity: 1; transform: translateX(10px); }
          80%, 100% { opacity: 0; transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          #carousel, #arrow { animation: none; }
        }
      `}</style>
    </svg>
  );
};
