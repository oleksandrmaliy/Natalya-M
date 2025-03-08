import { useState, useEffect } from 'react';

import natalya from '../assets/images/Natalya.webp';

const BlockHero = () => {
  const [showText, setShowText] = useState(true);
  const [effect, setEffect] = useState(false);

  const identity = 'hero';

  useEffect(() => {
    if (effect & !showText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [effect, showText]);

  const handleClick = () => {
    setShowText(!showText);
    setEffect(true);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        id="hero"
        className="mb-4 grid bg-green-100 p-4 sm:mb-5 sm:grid-cols-3 sm:gap-5 sm:p-5 md:mb-6 md:gap-6 md:p-6 lg:mb-7 lg:gap-7 lg:p-7 xl:mb-8 xl:gap-8 xl:p-8"
      >
        <div className="relative border-4 border-red-500">
          <img
            src={natalya}
            alt="Natalya"
            className="relative -top-11 w-2/3 rounded-full border-8 border-white shadow-all-green sm:-top-16 sm:w-full md:-top-20 lg:-top-24 xl:-top-28"
          />
        </div>
        <div className="mt-4 sm:col-span-2 sm:mt-0">
          <div className="mb-4">
            <div className="mb-4">
              <p className="mb-4 indent-14 font-vibes text-5xl">
                <b>Вітаю Вас!</b>
              </p>
              <p className="indent-14">
                Мене звати Наталя, і я – підприємець компанії Forever. Два роки
                тому я зробила важливий вибір – розпочати власну справу, яка не
                лише приносить дохід, а й наповнює моє життя сенсом та свободою.
              </p>
              {showText && (
                <div>
                  <p className="indent-14">
                    Коли я вперше познайомилася з продукцією Forever, мене
                    вразила її якість і натуральний склад. Я зрозуміла, що хочу
                    не просто користуватися нею сама, а й ділитися цими
                    унікальними продуктами з іншими. Так і почався мій шлях у
                    бізнесі, який відкрив переді мною безліч можливостей.
                  </p>
                  <p className="indent-14">
                    Сьогодні я з упевненістю можу сказати, що Forever – це
                    більше, ніж просто продукція. Це стиль життя, це можливість
                    піклуватися про своє здоров’я, виглядати чудово та
                    почуватися енергійною кожного дня. Крім того, це шанс для
                    кожного, хто хоче змінити своє життя та знайти фінансову
                    незалежність.
                  </p>
                  <p className="indent-14">
                    Якщо ви хочете спробувати якісну продукцію Forever або
                    дізнатися більше про можливості, які вона відкриває, буду
                    рада допомогти вам підібрати ідеальний варіант саме для вас.
                    Напишіть мені – з радістю поділюся своїм досвідом та підкажу
                    найкраще рішення для ваших потреб!
                  </p>
                  <br />
                  <p className="mb-4 indent-14">
                    <b>Вітаю вас!</b>
                  </p>
                  <p className="indent-14">
                    Мене звати Наталя, і я підприємець компанії Forever. Два
                    роки тому я вирішила розпочати власну справу, яка дозволяє
                    мені поєднувати якісні продукти для здоров’я та можливість
                    розвитку.
                  </p>
                  <p className="indent-14">
                    Продукція Forever привернула мою увагу своїм натуральним
                    складом і високими стандартами якості. Я спробувала її сама,
                    переконалася в результатах і вирішила поділитися цим з
                    іншими. Так я прийшла до бізнесу, який став для мене не лише
                    роботою, а й способом зробити щось корисне для людей.
                  </p>
                  <p className="indent-14">
                    Forever – це можливість підтримувати здоров’я, доглядати за
                    собою та обирати якісні продукти. Якщо вам цікаво дізнатися
                    більше або спробувати продукцію, буду рада відповісти на
                    запитання та допомогти з вибором.
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className="cursor-pointer text-greencolor"
              >
                {showText ? 'Згорнути' : 'Читати більше...'}
              </button>
            </div>
          </div>
          <div className="mt-auto">
            <button
              onClick={scrollToFooter}
              className="flex w-full items-center bg-greencolor/90 p-4 hover:bg-redcolor"
            >
              <p className="flex h-full w-full items-center justify-center text-center text-white">
                Зв&apos;яжіться зі мною
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 md:flex-none">
        <div className="bg-blue-200">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam
            rerum numquam facere iusto tempore error, magni excepturi corporis
            nulla delectus provident ipsum suscipit aperiam saepe labore laborum
            facilis quo? Delectus vel modi maxime! Magnam, excepturi error neque
            blanditiis illo laboriosam cumque corrupti repudiandae iure
            temporibus obcaecati eos illum fugit. Facere dignissimos, eos est
            tenetur laboriosam qui! Modi, libero dolorem!
          </p>
        </div>
        <div className="md:bg-red-200">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            molestias eius dignissimos repellat, praesentium minima rem nam
            provident aperiam reprehenderit id accusantium ut quidem, porro
            excepturi, voluptatem fuga possimus ipsam? Expedita laboriosam
            maiores, nulla saepe, facere eaque at aliquid nemo corporis
            reprehenderit doloremque asperiores molestiae. Magni sit eius illo
            veritatis libero velit quisquam, molestias dicta! Neque corrupti cum
            aperiam esse. Doloribus provident ut eos consequuntur esse officia
            illum dolore, consequatur natus mollitia possimus modi voluptate
            sequi ipsa eveniet eaque, velit recusandae temporibus ea,
            repudiandae voluptatem ex iusto eum! Facere, error. Reprehenderit
            distinctio eius doloribus quaerat, nisi nesciunt mollitia ad autem
            harum magni, maiores itaque numquam officiis deleniti voluptatum
            vero aliquam possimus vitae alias unde necessitatibus voluptate?
            Nulla dolor libero fugit. Necessitatibus voluptatum eos blanditiis
            facere minima aut ullam dolorem iure doloremque dolore beatae
            deleniti eius cumque animi quasi vel, molestias quae consequuntur
            autem. Exercitationem quasi vel itaque assumenda quos reiciendis?
            Non accusamus culpa commodi minus incidunt necessitatibus quia odio
            corrupti tenetur nesciunt quidem, excepturi temporibus itaque
            numquam. Amet facilis, est numquam veniam blanditiis iste provident
            culpa, nulla reprehenderit aspernatur facere.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlockHero;
