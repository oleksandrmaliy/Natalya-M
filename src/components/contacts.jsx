import { FiPhoneCall } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

const Contacts = () => {
  const classname =
    "size-14 sm:size-15 md:size-16 lg:size-18 xl:size-20 text-white";
  return (
    <div className="flex justify-center">
      <div className="mx-auto grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        <a href="tel:+380509967575">
          <FiPhoneCall className={classname} />
        </a>
        <a
          href="https://t.me/+380509967575"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegramLine className={classname} />
        </a>
        <a
          href="https://wa.me/380509967575?text=Привіт!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={classname} />
        </a>
        <a
          href="https://m.me/natasha.maliy1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiMessengerLine className={classname} />
        </a>
        <a
          href="viber://chat?number=%2B380509967575"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaViber className={classname} />
        </a>
        <a href="mailto:user@gmail.com?subject=Замовлення%20продукції%20Форевер&body=Вітаю,%20Наталі!">
          <MdAlternateEmail className={classname} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
