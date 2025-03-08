// import { useEffect, useState } from "react";
// const remInPx = parseFloat(
//   getComputedStyle(document.documentElement).fontSize
// );
// console.log(`1rem = ${remInPx}px`);
// const [position, setPosition] = useState("translate-x-[90vw]");

// useEffect(() => {
//   setTimeout(() => {
//     setPosition("translate-x-0");
//   }, 1000);
// }, []);

// <div className="relative flex h-96 w-full items-center justify-center overflow-hidden bg-amber-900 p-10">
//   <div
//     className={`absolute h-48 w-48 place-content-center bg-cyan-300 text-center align-middle transition-transform duration-1000 ease-out ${position}`}
//   >
//     lalala
//   </div>
// </div>

const Top = ({ children }) => {
  return (
    <div className="mb-4 w-full bg-greencolor sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
      {children}
    </div>
  );
};

export default Top;
