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

{
  /* <div
        id="hero"
        className="mb-4 grid bg-green-100 p-4 sm:mb-5 sm:p-5 md:mb-6 md:grid-cols-3 md:gap-6 md:p-6 lg:mb-7 lg:gap-7 lg:p-7 xl:mb-8 xl:gap-8 xl:p-8"
      > */
}
//   <div className="relative border-4 border-red-500">
{
  /* <img */
}
//       src={natalya}
//       alt="Natalya"
//       className="relative -top-11 w-2/3 rounded-full border-8 border-white shadow-all-green sm:-top-13 md:-top-20 md:w-full lg:-top-24 xl:-top-28"
//     />
//   </div>
//   <div className="mt-4 md:col-span-2 md:mt-0">
//     {/* md:flex md:flex-col md:justify-between */}
//     <div className="mb-4">
//       <div className="mb-4">
//         <p className="mb-4 indent-14 font-vibes text-5xl">
//           <b>Вітаю Вас!</b>
//         </p>
//         <p className="indent-14">
//           Мене звати Наталя, і я – підприємець компанії Forever. Два роки
//           тому я зробила важливий вибір – розпочати власну справу, яка не
//           лише приносить дохід, а й наповнює моє життя сенсом та свободою.
//         </p>
{
  /* {showText && ( */
}
// <div>
//   <p className="indent-14">
//     Коли я вперше познайомилася з продукцією Forever, мене вразила
//     її якість і натуральний склад. Я зрозуміла, що хочу не просто
//     користуватися нею сама, а й ділитися цими унікальними
//     продуктами з іншими. Так і почався мій шлях у бізнесі, який
//     відкрив переді мною безліч можливостей.
//   </p>
//   <p className="indent-14">
//     Сьогодні я з упевненістю можу сказати, що Forever – це більше,
//     ніж просто продукція. Це стиль життя, це можливість
//     піклуватися про своє здоров’я, виглядати чудово та почуватися
//     енергійною кожного дня. Крім того, це шанс для кожного, хто
//     хоче змінити своє життя та знайти фінансову незалежність.
//   </p>
//   <p className="indent-14">
//     Якщо ви хочете спробувати якісну продукцію Forever або
//     дізнатися більше про можливості, які вона відкриває, буду рада
//     допомогти вам підібрати ідеальний варіант саме для вас.
//     Напишіть мені – з радістю поділюся своїм досвідом та підкажу
//     найкраще рішення для ваших потреб!
//   </p>
//   <br />
//   <p className="mb-4 indent-14">
//     <b>Вітаю вас!</b>
//   </p>
//   <p className="indent-14">
//     Мене звати Наталя, і я підприємець компанії Forever. Два роки
//     тому я вирішила розпочати власну справу, яка дозволяє мені
//     поєднувати якісні продукти для здоров’я та можливість
//     розвитку.
//   </p>
//   <p className="indent-14">
//     Продукція Forever привернула мою увагу своїм натуральним
//     складом і високими стандартами якості. Я спробувала її сама,
//     переконалася в результатах і вирішила поділитися цим з іншими.
//     Так я прийшла до бізнесу, який став для мене не лише роботою,
//     а й способом зробити щось корисне для людей.
//   </p>
//   <p className="indent-14">
//     Forever – це можливість підтримувати здоров’я, доглядати за
//     собою та обирати якісні продукти. Якщо вам цікаво дізнатися
//     більше або спробувати продукцію, буду рада відповісти на
//     запитання та допомогти з вибором.
//   </p>
// </div>
{
  /* )} */
}
// </div>

{
  /* <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="cursor-pointer text-greencolor"
          >
            {showText ? "Згорнути" : "Читати більше..."}
          </button>
        </div> */
}
// </div>
{
  /* <div className="mt-auto">
        <button
          onClick={scrollToFooter}
          className="flex w-full items-center bg-greencolor/90 p-4 hover:bg-redcolor"
        >
          <p className="flex h-full w-full items-center justify-center text-center text-white">
            Зв&apos;яжіться зі мною
          </p>
        </button>
      </div> */
}
//   </div>
// </div>
