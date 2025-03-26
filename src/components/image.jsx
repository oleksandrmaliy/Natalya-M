import BgWrapper from './bgWrapper.jsx';

const OgImage = () => {
  return (
    <BgWrapper
      styles={
        'relative bg-[url("/ogimage.jpg")] h-[837px] w-[1600px] bg-cover bg-center mb-10'
      }
    ></BgWrapper>
  );
};

export default OgImage;
