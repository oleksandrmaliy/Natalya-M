// import { Children } from "react";

const Container = ({ children }) => {
  return (
    <div className="container font-montserrat text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      {children}
    </div>
  );
};

export default Container;
