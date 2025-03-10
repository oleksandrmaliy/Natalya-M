import Container from './components/container';
import BgWrapper from './components/bgWrapper.jsx';
import Header from './components/header.jsx';
import HeroSet from './components/heroSet.jsx';
// import BlockHeader from './components/heroSet.jsx';
import BlockShop from './components/blockShop.jsx';
import BlockForever from './components/blockForever.jsx';
import Footer from './components/footer.jsx';
import ScrollToTopButton from './components/upBottom.jsx';

const headerBgStyles =
  'mb-4 w-full bg-greencolor sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8';
const footerBgStyles = 'w-full bg-greencolor';

const App = () => {
  return (
    <>
      <BgWrapper styles={headerBgStyles}>
        <Container>
          <Header />
        </Container>
      </BgWrapper>

      <HeroSet />

      <Container>
        <BlockShop />
        <BlockForever />
      </Container>

      <BgWrapper styles={footerBgStyles}>
        {/* <Container> */}
        <Footer />
        {/* </Container> */}
      </BgWrapper>

      <ScrollToTopButton />
    </>
  );
};

export default App;
