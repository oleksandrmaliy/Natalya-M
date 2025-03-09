import Contacts from './contacts';

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col justify-center gap-1 p-4 text-center text-white sm:gap-2 sm:p-5 md:gap-3 md:p-6 lg:gap-4 lg:p-7 xl:gap-5 xl:p-8"
    >
      <p className="mx-auto font-vibes text-5xl lg:text-6xl xl:text-7xl">
        Наталя М
      </p>

      <Contacts />

      <p className="mx-auto font-poiret text-base lg:text-lg xl:text-xl">
        &copy; {new Date().getFullYear()} Всі права захищені.
      </p>
    </div>
  );
};

export default Footer;
