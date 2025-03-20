import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import foreverBlue from '../assets/images/foreverBlue.jpg';
import foreverLinks from '../constants/foreverLinks.js';

const useScrollTrigger = () => {
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setTrigger((prev) => prev + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return trigger;
};

const BlockForever = () => {
  const [showText, setShowText] = useState(false);
  const [effect, setEffect] = useState(false);

  const scrollTrigger = useScrollTrigger();
  const [animationStage, setAnimationStage] = useState('normal');

  // Відстежуємо, чи дів2 у вьюпорті
  const { ref, inView } = useInView({
    triggerOnce: false, // Завжди відстежуємо видимість
    threshold: 0.1, // 10% блоку має бути видно
  });

  const identity = 'forever';

  useEffect(() => {
    if (effect & !showText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [showText, effect]);

  useEffect(() => {
    if (!inView) return; // Запускаємо анімацію тільки якщо div2 у вьюпорті

    setAnimationStage('scale-up');

    setTimeout(() => {
      // setAnimationStage("scale-down");
      setAnimationStage('normal');
      // setTimeout(() => {

      // }, 300);
    }, 300);
  }, [scrollTrigger, inView]);

  const getScale = () => {
    switch (animationStage) {
      case 'scale-up':
        return 1.1;
      case 'scale-down':
        return 0.95;
      default:
        return 1;
    }
  };

  const handleClick = () => {
    setShowText(!showText);
    setEffect(true);
  };

  return (
    <div
      id="forever"
      className="mb-4 grid grid-cols-1 gap-4 bg-sky-100 p-4 sm:mb-5 sm:grid-cols-3 sm:gap-5 sm:p-5 md:mb-6 md:p-6 lg:mb-7 lg:p-7 xl:mb-8 xl:p-8"
    >
      <div className="relative mb-4 sm:mb-0">
        <motion.div
          className="sticky top-[calc(50%-45px)] mx-auto flex h-auto w-1/2 items-center justify-center sm:top-[calc(50%-62px)] sm:w-2/3 md:top-[calc(50%-75px)] lg:top-[calc(50%-101px)] xl:top-[calc(50%-128px)] 2xl:top-[calc(50%-156px)]"
          ref={ref} // Додаємо ref для відстеження видимості
          animate={{ scale: getScale() }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <img
            src={foreverBlue}
            loading="lazy"
            alt="Опис фото"
            className="aspect-square w-full rounded-full border-[3px] border-white sm:border-[4px] md:border-[5px] lg:border-[6px] xl:border-[7px] 2xl:border-[8px]"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-between sm:col-span-2">
        <div className="mb-4">
          <div className="mb-4">
            <h3 className="mb-4 text-lg font-semibold leading-tight tracking-tight sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              Forever Living Products
            </h3>
            <p className="mb-4">
              Forever Living Products – це американська компанія, заснована у
              1978 році в місті Скоттсдейл, штат Аризона, і є міжнародним
              лідером у виробництві продукції для здоров’я на основі алое вера.
            </p>

            {showText && (
              <div>
                <p>
                  <b> Основні факти про компанію:</b>
                </p>
                <ul className="mb-4">
                  <li>
                    <span className="font-medium italic">Рік заснування: </span>
                    1978
                  </li>
                  <li>
                    <span className="font-medium italic">Засновник: </span>Рекс
                    Моан (Rex Maughan)
                  </li>
                  <li>
                    <span className="font-medium italic">Штаб-квартира: </span>
                    Скоттсдейл, Аризона, США
                  </li>
                  <li>
                    <span className="font-medium italic">Діяльність: </span>
                    Виробництво та продаж продукції для здоров’я та краси
                  </li>
                  <li>
                    <span className="font-medium italic">Продукція: </span>
                    Напої з алое вера, біологічно активні добавки, косметика,
                    продукти бджільництва
                  </li>
                  <li>
                    <span className="font-medium italic">
                      Мережа дистрибуції:{' '}
                    </span>
                    Понад 160 країн
                  </li>
                </ul>

                <p>
                  <b> Основні принципи компанії: </b>
                </p>
                <ul className="mb-4">
                  <li className="font-medium italic">
                    Висока якість продукції
                  </li>
                  <li className="font-medium italic">Природні компоненти</li>
                  <li className="font-medium italic">
                    Інноваційні технології виробництва
                  </li>
                  <li className="font-medium italic">
                    Глобальна екологічна відповідальність
                  </li>
                </ul>
                <p className="mb-4">
                  Компанія Forever Living Products володіє власними плантаціями
                  алое вера, що дозволяє контролювати кожен етап виробництва –
                  від вирощування рослин до кінцевого продукту. Вся продукція
                  проходить суворий контроль якості, а компанія дотримується
                  міжнародних стандартів сертифікації.
                </p>
                <p className="mb-4">
                  Бізнес-модель та принципи Forever Living Products працює за
                  моделлю мережевого маркетингу (MLM), що дозволяє незалежним
                  дистриб’юторам розвивати власний бізнес, продаючи продукцію
                  компанії.
                </p>
                <p>
                  Forever Living Products залишається одним із найбільших
                  виробників продукції на основі алое вера у світі, пропонуючи
                  натуральні та ефективні рішення для здорового способу життя.
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center text-blue-500">
            <button onClick={handleClick}>
              {showText ? 'Згорнути' : 'Читати більше...'}
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {foreverLinks.map(({ title, url }) => (
              <li
                key={nanoid()}
                className="rounded-xl bg-bluecolor p-2 hover:bg-redcolor hover:text-white lg:px-6 xl:px-2"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center"
                >
                  <p className="flex h-full w-full items-center justify-center text-center">
                    {title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockForever;
