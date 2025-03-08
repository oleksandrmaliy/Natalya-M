const Header = ({ children }) => {
  return (
    <div className="flex flex-col justify-center pt-6 pb-4 sm:pt-7 sm:pb-5 md:pt-8 md:pb-6 lg:pt-9 lg:pb-7 xl:pt-10 xl:pb-8">
      <h1 className="mx-auto font-vibes text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        Наталя М
      </h1>
      <h3 className="mx-auto font-poiret text-lg text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
        Підприємець Форевер
      </h3>

      {/* <p className="inline-block rotate-[-10]">Цей текст нахилений під кутом</p>
      <p className="inline-block skew-x-[-10]">Цей текст перекошений</p>
      <p className="inline-block transition-transform group-hover:rotate-6">
        Наведи курсор – і текст повернеться
      </p> */}
      {/* <p className="inline-block" style={{ transform: "rotate(-30deg)" }}>
        Цей текст нахилений під кутом
      </p>
      <p className="inline-block" style={{ transform: "skewX(-10deg)" }}>
        Цей текст перекошений
      </p> */}
      {children}
    </div>
  );
};

export default Header;
