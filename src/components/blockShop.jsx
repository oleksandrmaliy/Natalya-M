import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import storeBlue from '../assets/images/storeBlue.jpg';

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

const BlockShop = () => {
  const [showText, setShowtext] = useState(false);
  const [effect, setEffect] = useState(false);

  const scrollTrigger = useScrollTrigger();
  const [animationStage, setAnimationStage] = useState('normal');

  // Відстежуємо, чи дів2 у вьюпорті
  const { ref, inView } = useInView({
    triggerOnce: false, // Завжди відстежуємо видимість
    threshold: 0.1, // 10% блоку має бути видно
  });

  const identity = 'shop';

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
    setShowtext(!showText);
    setEffect(true);
  };

  return (
    <div
      id="shop"
      className="mb-4 grid grid-cols-1 bg-sky-100 p-4 sm:mb-5 sm:grid-cols-3 sm:p-5 md:mb-6 md:gap-6 md:p-6 lg:mb-7 lg:gap-7 lg:p-7 xl:mb-8 xl:gap-8 xl:p-8"
      // className="mb-8 grid min-h-110 w-full grid-cols-1 border-4 border-red-500 bg-green-100 p-4 md:grid-cols-3 md:gap-8 md:p-6 lg:p-7 xl:p-8"
    >
      <div className="relative mb-4 sm:mb-0">
        <motion.div
          ref={ref} // Додаємо ref для відстеження видимості
          className="sticky top-[calc(50%-45px)] mx-auto flex h-auto w-1/2 items-center justify-center sm:top-[calc(50%-62px)] sm:w-2/3 md:top-[calc(50%-75px)] lg:top-[calc(50%-101px)] xl:top-[calc(50%-128px)] 2xl:top-[calc(50%-156px)]"
          animate={{ scale: getScale() }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <img
            src={storeBlue}
            alt="Store"
            className="w-full rounded-full border-[3px] border-white sm:border-[4px] md:border-[5px] lg:border-[6px] xl:border-[7px] 2xl:border-[8px]"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-between sm:col-span-2">
        <div className="mb-4">
          <div className="mb-4">
            <p className="mb-4">
              <b>Онлайн магазин роздрібної торгівлі</b>
            </p>
            <p className="mb-4">
              Forever Living Products – це міжнародний бренд, що спеціалізується
              на виробництві та продажу натуральних продуктів, які допомагають
              підтримувати здоров&apos;я, красу та гарне самопочуття.
            </p>

            {showText && (
              <div>
                <p>
                  <b>Асортимент продукції</b>
                </p>
                <ul className="mb-4">
                  <li>
                    <span className="font-medium italic">Гелі алое вера </span>–
                    натуральні напої для зміцнення імунітету та покращення
                    травлення.
                  </li>
                  <li>
                    <span className="font-medium italic">
                      Косметика та догляд за шкірою{' '}
                    </span>
                    – креми, лосьйони, гелі для обличчя та тіла з доглядовими
                    компонентами.
                  </li>
                  <li>
                    <span className="font-medium italic">Харчові добавки </span>
                    – вітаміни, мінерали та біологічно активні речовини для
                    підтримки організму.
                  </li>
                  <li>
                    <span className="font-medium italic">
                      Продукти бджільництва{' '}
                    </span>
                    – натуральні медові продукти для енергії та імунітету.
                  </li>
                  <li>
                    <span className="font-medium italic">
                      Програми детоксу та контролю ваги{' '}
                    </span>
                    – комплекси для здорового способу життя.
                  </li>
                </ul>
                <p>
                  <b>Переваги покупки у нас</b>
                </p>
                <ul className="mb-4">
                  <li>
                    <span className="font-medium italic">Гарантія якості </span>
                    – продукція сертифікована та має високу якість.
                  </li>
                  <li>
                    <span className="font-medium italic">
                      Безпосереднє постачання{' '}
                    </span>
                    – товари надходять від офіційного дистриб’ютора, без
                    посередників.
                  </li>
                  <li>
                    <span className="font-medium italic">
                      Гнучка система знижок{' '}
                    </span>
                    – постійним клієнтам надаються спеціальні пропозиції.
                  </li>
                  <li>
                    <span className="font-medium italic">Швидка доставка </span>
                    – оперативна обробка замовлень і відправка по всій країні.
                  </li>
                  <li>
                    <span className="font-medium italic">
                      Персональні консультації{' '}
                    </span>
                    – допомога у виборі продукції відповідно до потреб.
                  </li>
                </ul>
                <p>
                  <b> Як зробити замовлення</b>
                </p>
                <ul className="mb-4">
                  <li>Оберіть потрібні товари в каталозі.</li>
                  <li>Додайте їх до кошика та оформіть замовлення.</li>
                  <li>Оберіть зручний спосіб доставки та оплати.</li>
                  <li>
                    Отримайте свою продукцію та насолоджуйтесь користю
                    натуральних компонентів!
                  </li>
                </ul>
                <p>
                  Залишайтесь здоровими та красивими разом із Forever Living
                  Products!
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="cursor-pointer text-blue-500"
            >
              {showText ? 'Згорнути' : 'Читати більше...'}
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href="https://380500014529.flpuretail.com/uk/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center gap-4 border-[3px] border-white bg-bluecolor p-4 hover:bg-redcolor hover:text-white sm:border-[4px] md:border-[5px] lg:border-[6px] xl:border-[7px] 2xl:border-[8px]"
          >
            <p className="flex h-full w-full items-center justify-center text-center">
              Перейти до магазину
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlockShop;
