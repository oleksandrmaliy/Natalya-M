// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const useScrollDirection = () => {
//   const [direction, setDirection] = useState(null);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [trigger, setTrigger] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY) {
//         setDirection("down");
//       } else if (currentScrollY < lastScrollY) {
//         setDirection("up");
//       }
//       setLastScrollY(currentScrollY);
//       setTrigger((prev) => prev + 1); // Змінюємо trigger кожного разу
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return { direction, trigger };
// };

// const ScrollAnimation = () => {
//   const { direction: scrollDirection, trigger } = useScrollDirection();
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   const [animationStage, setAnimationStage] = useState("center");

//   useEffect(() => {
//     if (!inView || !scrollDirection) return;

//     setAnimationStage("move-10");

//     setTimeout(() => {
//       setAnimationStage("overshoot-5");

//       setTimeout(() => {
//         setAnimationStage("center");
//       }, 300);
//     }, 300);
//   }, [trigger, inView]); // Додаємо `trigger` для перезапуску анімації при кожному скролі

//   const getTranslateY = () => {
//     switch (animationStage) {
//       case "move-10":
//         return scrollDirection === "down" ? "-50%" : "50%";
//       case "overshoot-5":
//         return scrollDirection === "down" ? "30%" : "-30%";
//       default:
//         return "0%";
//     }
//   };

//   return (
//     <div className="relative h-[1500px] bg-fuchsia-300 p-8">
//       <motion.div
//         ref={ref}
//         className="sticky top-[calc(50%-64px)] flex h-32 w-32 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg"
//         animate={{ y: getTranslateY() }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//       >
//         Div 2
//       </motion.div>
//     </div>
//   );
// };

// export default ScrollAnimation;
