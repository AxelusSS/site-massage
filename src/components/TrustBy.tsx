import { useRef } from "react";

const logos = [
  "/brands/logo2.png",
  "/brands/logo3.png",
  "/brands/logo4.png",
  "/brands/logo5.png",
  "/brands/logo6.png",
  "/brands/logo7.png",
  "/brands/logo8.png",
  "/brands/logo9.png",
];

export default function Bandeau() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: "140px",
        backgroundImage:
          "url('https://img.centrefrance.com/4yQdXQKpWh99VhTtuuYciT53L72fU983XGAe7UCleWw/rs:auto:1200:800:1:0/g:sm/bG9jYWw6Ly8vMDAvMDAvMDYvNDUvNzcvMjAwMDAwNjQ1Nzc3OA.webp?w=1000&h=563&crop=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none z-10" />

      <div className="absolute inset-0 flex items-center z-20">
        <div className="whitespace-nowrap animate-carousel flex gap-12">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Logo ${i + 1}`}
              className="h-24 w-auto object-contain"
              style={{ flex: "0 0 auto" }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-carousel {
          animation: carousel 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
