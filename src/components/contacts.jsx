import { FiPhoneCall } from 'react-icons/fi';
import { RiTelegramLine } from 'react-icons/ri';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';

const Contacts = () => {
  const iconStyle =
    'size-8 sm:size-8 md:size-8 lg:size-8 xl:size-10 text-white hover:transition-transform hover:ease-in-out hover:duration-300 hover:scale-110';
  return (
    <div className="mx-auto flex justify-center">
      <div className="grid grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        {/* <a href="tel:+380509535273">
          <FiPhoneCall className={iconStyle} />
        </a> */}
        <a
          href="https://t.me/+380509535273"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegramLine className={iconStyle} />
        </a>
        <a
          href="https://wa.me/380509535273?text=Привіт!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={iconStyle} />
        </a>
        <a
          href="viber://chat?number=%2B380509535273"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaViber className={iconStyle} />
        </a>
        <a
          href="https://www.messenger.com/t/natasha.maliy1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiMessengerLine className={iconStyle} />
        </a>
        <a href="https://www.instagram.com/natasha.maliy1/" target="_blank">
          <FaInstagram className={iconStyle} />
        </a>
        <a href="https://www.facebook.com/natasha.maliy1" target="_blank">
          <AiOutlineFacebook className={iconStyle} />
        </a>
        {/* <a href="mailto:maliyyilam1@gmail.com?subject=Замовлення%20продукції%20Форевер&body=Вітаю,%20Наталі!">
          <RiMailSendLine className={iconStyle} />
        </a> */}
      </div>
    </div>
  );
};

export default Contacts;
