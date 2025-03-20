const Container = ({ children }) => {
  return (
    <div className="container font-montserrat text-sm leading-relaxed tracking-normal sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg">
      {children}
    </div>
  );
};

export default Container;
