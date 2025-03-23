import BgWrapper from './bgWrapper.jsx';

const OgImage = () => {
  return (
    <BgWrapper
      styles={
        'relative bg-[url("/ogimage.jpg")] h-[837px] w-[1600px] bg-cover bg-center mb-10'
      }
    >
      {/* <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-blue-900/100 to-white/0"></div> */}
      {/* <div className="relative z-10">
        <h1 className="pt-[0px] text-center font-vibes text-[250px] text-white">
          Пані Наталя
        </h1>
        <div className="ml-auto flex w-[870px] flex-col items-center justify-center">
          <h2 className="pt-[50px] text-center font-poiret text-7xl text-white">
            Продукція компанії
            <br />
            Forever Living Products
          </h2>

         
        </div>
      </div> */}
    </BgWrapper>
  );
};
// border-4 border-red-500
export default OgImage;
