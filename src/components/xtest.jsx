// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const useScrollTrigger = () => {
//   const [trigger, setTrigger] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setTrigger((prev) => prev + 1);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return trigger;
// };

// const ScrollAnimation = () => {
//   const scrollTrigger = useScrollTrigger();
//   const [animationStage, setAnimationStage] = useState("normal");

//   // Відстежуємо, чи дів2 у вьюпорті
//   const { ref, inView } = useInView({
//     triggerOnce: false, // Завжди відстежуємо видимість
//     threshold: 0.1, // 10% блоку має бути видно
//   });

//   useEffect(() => {
//     if (!inView) return; // Запускаємо анімацію тільки якщо div2 у вьюпорті

//     setAnimationStage("scale-up");

//     setTimeout(() => {
//       setAnimationStage("scale-down");

//       setTimeout(() => {
//         setAnimationStage("normal");
//       }, 300);
//     }, 300);
//   }, [scrollTrigger, inView]);

//   const getScale = () => {
//     switch (animationStage) {
//       case "scale-up":
//         return 1.5;
//       case "scale-down":
//         return 0.75;
//       default:
//         return 1;
//     }
//   };

//   return (
//     <div className="relative h-[1500px] bg-amber-300 p-8">
//       <motion.div
//         ref={ref} // Додаємо ref для відстеження видимості
//         className="sticky top-[calc(50%-64px)] flex h-32 w-32 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg"
//         animate={{ scale: getScale() }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//       >
//         Div 2
//       </motion.div>
//     </div>
//   );
// };

// export default ScrollAnimation;
