import { FiPhoneCall } from 'react-icons/fi';
import { RiTelegramLine } from 'react-icons/ri';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const Contacts = () => {
  const iconStyle =
    'size-10 sm:size-12 md:size-14 lg:size-16 xl:size-18 text-white';
  return (
    <div className="flex justify-center">
      <div className="mx-auto grid grid-cols-4 gap-4 sm:grid-cols-8 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        <a href="tel:+380509967575">
          <FiPhoneCall className={iconStyle} />
        </a>
        <a
          href="https://t.me/+380509967575"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegramLine className={iconStyle} />
        </a>
        <a
          href="https://wa.me/380509967575?text=Привіт!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={iconStyle} />
        </a>
        <a
          href="https://m.me/natasha.maliy1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiMessengerLine className={iconStyle} />
        </a>
        <a href="https://www.facebook.com/natasha.maliy1" target="_blank">
          <AiOutlineFacebook className={iconStyle} />
        </a>
        <a
          href="viber://chat?number=%2B380509967575"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaViber className={iconStyle} />
        </a>
        <a href="https://www.instagram.com/natasha.maliy1/" target="_blank">
          <FaInstagram className={iconStyle} />
        </a>
        <a href="mailto:user@gmail.com?subject=Замовлення%20продукції%20Форевер&body=Вітаю,%20Наталі!">
          <MdAlternateEmail className={iconStyle} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
