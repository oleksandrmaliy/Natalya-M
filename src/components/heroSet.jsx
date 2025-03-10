import BgWrapper from './bgWrapper.jsx';
import Container from './container.jsx';
import BlockHero from './blockHero.jsx';

const HeroSet = () => {
  return (
    <BgWrapper
      styles={
        'relative bg-[url("../public/bghero.jpeg")] bg-cover bg-center mb-4 bg-green-100 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8'
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/50"></div>
      <div className="relative z-10">
        <Container>
          <BlockHero />
        </Container>
      </div>
    </BgWrapper>
  );
};

export default HeroSet;
