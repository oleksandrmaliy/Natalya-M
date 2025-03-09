import Container from './components/container';
import BgWrapper from './components/bgWrapper.jsx';
import Header from './components/header.jsx';
import BlockHero from './components/blockHero.jsx';
import BlockShop from './components/blockShop.jsx';
import BlockForever from './components/blockForever.jsx';
import Footer from './components/footer.jsx';
import ScrollToTopButton from './components/upBottom.jsx';

const headerBgStyles =
  'mb-4 w-full bg-greencolor sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8';
const heroBgStyles =
  'relative bg-[url("../public/bghero.jpeg")] bg-cover bg-center mb-4 bg-green-100 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8';
const footerBgStyles = 'w-full bg-greencolor';

const App = () => {
  return (
    <>
      <BgWrapper styles={headerBgStyles}>
        <Container>
          <Header />
        </Container>
      </BgWrapper>

      <BgWrapper styles={heroBgStyles}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/50"></div>
        <div className="relative z-10">
          <Container>
            <BlockHero />
          </Container>
        </div>
      </BgWrapper>

      <Container>
        <BlockShop />
        <BlockForever />
      </Container>

      <BgWrapper styles={footerBgStyles}>
        <Container>
          <Footer />
        </Container>
      </BgWrapper>

      <ScrollToTopButton />
    </>
  );
};

export default App;
