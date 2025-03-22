import BgWrapper from './bgWrapper.jsx';

const OgImage = () => {
  return (
    <BgWrapper
      styles={
        'relative bg-[url("/ogimage01.jpeg")] h-[837px] w-[1600px] bg-cover bg-center mb-10'
      }
    >
      <div className="relative z-10">
        <div className="ml-auto flex w-[780px] flex-col items-center justify-center border-4 border-red-500 pt-[10px]">
          <h2 className="border-4 border-red-500 pt-[200px] text-center font-poiret text-7xl text-white">
            Продукція компанії
            <br />
            Forever Living Products
          </h2>

          {/* <h2 className="text-center font-poiret text-7xl font-bold text-green-900">
            <b>
              Підприємець
              <br />
              Форевер
            </b>
          </h2> */}
        </div>
        <h1 className="text-shadow-white-lg border-4 border-red-500 pt-[210px] text-center font-vibes text-[150px] text-white">
          Пані Наталя
        </h1>
      </div>
    </BgWrapper>
  );
};
// border-4 border-red-500
export default OgImage;
