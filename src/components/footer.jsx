import Contacts from "./contacts";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col justify-center gap-4 p-4 text-center text-white sm:gap-5 sm:p-5 md:gap-6 md:p-6 lg:gap-7 lg:p-7 xl:gap-8 xl:p-8"
    >
      {/* <p className="font-poiret text-4xl">Контакти</p> */}
      <Contacts />
      <div className="flex flex-col justify-center">
        <p className="mx-auto font-vibes text-5xl lg:text-6xl xl:text-7xl">
          Наталя М
        </p>
        <p className="mx-auto font-poiret text-base lg:text-lg xl:text-xl">
          &copy; {new Date().getFullYear()} Всі права захищені.
        </p>
      </div>
    </div>
  );
};

export default Footer;
