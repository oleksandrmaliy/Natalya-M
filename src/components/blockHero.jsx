// import { useState, useEffect } from 'react';

import natalya from '../assets/images/Natalya.webp';

const BlockHero = () => {
  // const [showText, setShowText] = useState(false);
  // const [effect, setEffect] = useState(false);

  // const identity = 'hero';

  // useEffect(() => {
  //   if (effect & !showText) {
  //     document.getElementById(identity)?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  // }, [effect, showText]);

  // const handleClick = () => {
  //   setShowText(!showText);
  //   setEffect(true);
  // };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main
        id="hero"
        className="grid p-4 sm:grid-cols-3 sm:gap-5 sm:p-5 md:gap-6 md:p-6 lg:gap-7 lg:p-7 xl:gap-8 xl:p-8"
      >
        <div className="relative">
          <img
            src={natalya}
            loading="lazy"
            alt="Natalya"
            className="relative -top-11 aspect-square w-2/3 rounded-full border-[3px] border-white shadow-all-green sm:-top-16 sm:w-full sm:border-[4px] md:-top-20 md:border-[5px] lg:-top-24 lg:border-[6px] xl:-top-28 xl:border-[7px] 2xl:border-[8px]"
          />
        </div>
        <div className="flex flex-col justify-between sm:col-span-2">
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold leading-tight tracking-tight sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              Вітаю Вас!
            </h3>
            <p className="mb-2">
              Мене звати Наталя, і я – підприємець компанії Forever Living
              Products. Познайомившись із цією компанією та спробувавши її
              продукцію, я зробила важливий вибір – розпочати власну справу, що
              не лише приносить дохід, а й наповнює моє життя сенсом і свободою.
            </p>
            <p className="mb-2">
              Коли я вперше познайомилася з продукцією Forever, мене вразила її
              якість і натуральний склад. Я зрозуміла, що хочу не просто
              користуватися нею сама, а й ділитися цими унікальними продуктами з
              іншими. Так і почався мій шлях у бізнесі, який відкрив переді мною
              безліч можливостей.
            </p>
            <p className="mb-2">
              Сьогодні я з упевненістю можу сказати, що Forever – це більше, ніж
              просто продукція. Це стиль життя, це можливість піклуватися про
              своє здоров’я, виглядати чудово та почуватися енергійною кожного
              дня. Крім того, це шанс для кожного, хто хоче змінити своє життя
              та знайти фінансову незалежність.
            </p>
            <p className="">
              Якщо ви хочете спробувати якісну продукцію Forever або дізнатися
              більше про можливості, які вона відкриває, буду рада допомогти вам
              підібрати ідеальний варіант саме для вас. Напишіть мені – з
              радістю поділюся своїм досвідом та підкажу найкраще рішення для
              ваших потреб!
            </p>
          </div>
          <div className="mt-auto grid grid-cols-1 gap-4 md:grid-cols-2">
            <button
              onClick={scrollToFooter}
              className="flex w-full items-center rounded-xl bg-greencolor/90 p-2 hover:bg-redcolor"
            >
              <p className="flex h-full w-full items-center justify-center text-center text-xs text-white sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                Контакти
              </p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlockHero;
