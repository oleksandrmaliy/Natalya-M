import { useState, useEffect } from 'react';

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
      <div
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
          <div className="mb-4">
            <div className="mb-4">
              <p className="indent-14 font-vibes text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                <b>Вітаю Вас!</b>
              </p>
              <p className="indent-14">
                Мене звати Наталя, і я – підприємець компанії Forever. Два роки
                тому я зробила важливий вибір – розпочати власну справу, яка не
                лише приносить дохід, а й наповнює моє життя сенсом та свободою.
              </p>
              {/* {showText && ( */}
              <div>
                <p className="indent-14">
                  Коли я вперше познайомилася з продукцією Forever, мене вразила
                  її якість і натуральний склад. Я зрозуміла, що хочу не просто
                  користуватися нею сама, а й ділитися цими унікальними
                  продуктами з іншими. Так і почався мій шлях у бізнесі, який
                  відкрив переді мною безліч можливостей.
                </p>
                <p className="indent-14">
                  Сьогодні я з упевненістю можу сказати, що Forever – це більше,
                  ніж просто продукція. Це стиль життя, це можливість
                  піклуватися про своє здоров’я, виглядати чудово та почуватися
                  енергійною кожного дня. Крім того, це шанс для кожного, хто
                  хоче змінити своє життя та знайти фінансову незалежність.
                </p>
                <p className="indent-14">
                  Якщо ви хочете спробувати якісну продукцію Forever або
                  дізнатися більше про можливості, які вона відкриває, буду рада
                  допомогти вам підібрати ідеальний варіант саме для вас.
                  Напишіть мені – з радістю поділюся своїм досвідом та підкажу
                  найкраще рішення для ваших потреб!
                </p>
                <br />
                <p className="indent-14 font-vibes text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                  <b>Вітаю Вас!</b>
                </p>
                <p className="indent-14">
                  Мене звати Наталя, і я підприємець компанії Forever. Два роки
                  тому я вирішила розпочати власну справу, яка дозволяє мені
                  поєднувати якісні продукти для здоров’я та можливість
                  розвитку.
                </p>
                <p className="indent-14">
                  Продукція Forever привернула мою увагу своїм натуральним
                  складом і високими стандартами якості. Я спробувала її сама,
                  переконалася в результатах і вирішила поділитися цим з іншими.
                  Так я прийшла до бізнесу, який став для мене не лише роботою,
                  а й способом зробити щось корисне для людей.
                </p>
                <p className="indent-14">
                  Forever – це можливість підтримувати здоров’я, доглядати за
                  собою та обирати якісні продукти. Якщо вам цікаво дізнатися
                  більше або спробувати продукцію, буду рада відповісти на
                  запитання та допомогти з вибором.
                </p>
              </div>
              {/* )} */}
            </div>
            {/* <div className="flex justify-center">
              <button
                onClick={handleClick}
                className="cursor-pointer text-greencolor"
              >
                {showText ? 'Згорнути' : 'Читати більше...'}
              </button>
            </div> */}
          </div>
          <div className="mt-auto">
            <button
              onClick={scrollToFooter}
              className="flex w-full items-center border-[3px] border-transparent bg-greencolor/90 p-4 hover:bg-redcolor sm:border-[4px] md:border-[5px] lg:border-[6px] xl:border-[7px] 2xl:border-[8px]"
            >
              <p className="flex h-full w-full items-center justify-center text-center text-white">
                Зв&apos;яжіться зі мною
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockHero;
