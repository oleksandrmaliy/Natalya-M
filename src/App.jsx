import Container from './components/container';
import Top from './components/top.jsx';
import Header from './components/header.jsx';
import BlockHero from './components/blockHero.jsx';
import BlockShop from './components/blockShop.jsx';
import BlockForever from './components/blockForever.jsx';
import Footer from './components/footer.jsx';
import Bottom from './components/bottom.jsx';
import ScrollToTopButton from './components/upBottom.jsx';

const App = () => {
  return (
    <>
      <Top>
        <Container>
          <Header />
        </Container>
      </Top>
      <Container>
        <BlockHero />
        <BlockShop />
        <BlockForever />
      </Container>
      <Bottom>
        <Container>
          <Footer />
        </Container>
      </Bottom>
      <ScrollToTopButton />
    </>
  );
};

export default App;
