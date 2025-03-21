// import { useState } from 'react';

// export const useScrollTrigger = () => {
//   const [trigger, setTrigger] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setTrigger((prev) => prev + 1);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return trigger;
// };

export const getScale = () => {
  switch (animationStage) {
    case 'scale-up':
      return 1.1;
    default:
      return 1;
  }
};

export const handleClick = ({ setShowtext, setEffect }) => {
  setShowtext(!showText);
  setEffect(true);
};
