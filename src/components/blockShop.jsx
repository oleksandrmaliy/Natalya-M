import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LinkButton from './linkButton';

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

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
    if (!inView) return;

    setAnimationStage('scale-up');

    setTimeout(() => {
      setAnimationStage('normal');
    }, 300);
  }, [scrollTrigger, inView]);

  const getScale = () => {
    switch (animationStage) {
      case 'scale-up':
        return 1.1;
      default:
        return 1;
    }
  };

  const handleClick = () => {
    setShowtext(!showText);
    setEffect(true);
  };

  return (
    <section
      id="shop"
      className="mb-4 grid grid-cols-1 bg-sky-100 p-4 sm:mb-5 sm:grid-cols-3 sm:p-5 md:mb-6 md:gap-6 md:p-6 lg:mb-7 lg:gap-7 lg:p-7 xl:mb-8 xl:gap-8 xl:p-8"
    >
      <div className="relative mb-4 sm:mb-0">
        <motion.div
          className="sticky top-[calc(50%-45px)] mx-auto flex h-auto w-1/2 items-center justify-center sm:top-[calc(50%-62px)] sm:w-2/3 md:top-[calc(50%-75px)] lg:top-[calc(50%-101px)] xl:top-[calc(50%-128px)] 2xl:top-[calc(50%-156px)]"
          ref={ref}
          animate={{ scale: getScale() }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <img
            src={storeBlue}
            loading="lazy"
            alt="Store"
            className="aspect-square w-full rounded-full border-[3px] border-white sm:border-[4px] md:border-[5px] lg:border-[6px] xl:border-[7px] 2xl:border-[8px]"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-between sm:col-span-2">
        <div className="mb-8">
          <div className="mb-4">
            <h3 className="mb-4 text-lg font-semibold leading-tight tracking-tight sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              Онлайн магазин роздрібної торгівлі
            </h3>
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
                    <span className="font-medium">Гелі алое вера </span>–
                    натуральні напої для зміцнення імунітету та покращення
                    травлення.
                  </li>
                  <li>
                    <span className="font-medium">
                      Косметика та догляд за шкірою{' '}
                    </span>
                    – креми, лосьйони, гелі для обличчя та тіла з доглядовими
                    компонентами.
                  </li>
                  <li>
                    <span className="font-medium">Харчові добавки </span>–
                    вітаміни, мінерали та біологічно активні речовини для
                    підтримки організму.
                  </li>
                  <li>
                    <span className="font-medium">Продукти бджільництва </span>–
                    натуральні медові продукти для енергії та імунітету.
                  </li>
                  <li>
                    <span className="font-medium">
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
                    <span className="font-medium">Гарантія якості </span>–
                    продукція сертифікована та має високу якість.
                  </li>
                  <li>
                    <span className="font-medium">
                      Безпосереднє постачання{' '}
                    </span>
                    – товари надходять від офіційного дистриб’ютора, без
                    посередників.
                  </li>
                  <li>
                    <span className="font-medium">Гнучка система знижок </span>–
                    постійним клієнтам надаються спеціальні пропозиції.
                  </li>
                  <li>
                    <span className="font-medium">Швидка доставка </span>–
                    оперативна обробка замовлень і відправка по всій країні.
                  </li>
                  <li>
                    <span className="font-medium">
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
                <p className="font-medium">
                  Залишайтесь здоровими та красивими разом із Forever Living
                  Products!
                </p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className="cursor-pointer text-xs font-medium text-blue-500 hover:text-blue-800 sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base"
              >
                {showText ? 'Згорнути' : 'Читати більше'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LinkButton
            link={'https://380500014529.flpuretail.com/uk/'}
            title={'Перейти до магазину'}
          />
        </div>
      </div>
    </section>
  );
};

export default BlockShop;
