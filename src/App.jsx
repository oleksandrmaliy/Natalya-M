import { Helmet } from 'react-helmet';

import Container from './components/container';
import BgWrapper from './components/bgWrapper.jsx';
import Header from './components/header.jsx';
import HeroSet from './components/heroSet.jsx';
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Купити продукцію Форевер | Forever Living Products</title>
        <meta
          name="description"
          content="Купити продукцію Форевер від Forever Living Products. Натуральні продукти на основі алое вера для здоров'я, краси та гарного самопочуття."
        />
        <meta name="author" content="Natalya M" />
        <meta
          name="keywords"
          content="Купити продукцію Форевер, Forever Living, алое вера, натуральні добавки, здорове харчування, догляд за шкірою, вітаміни, косметика"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Купити продукцію Форевер | Forever Living Products"
        />
        <meta
          property="og:description"
          content="Замовляйте якісні продукти Forever Living на основі алое вера. Натуральні рішення для краси, здоров'я та гарного самопочуття."
        />
        <meta property="og:image" content="URL_до_зображення" />
        <meta property="og:url" content="https://natalya-m.vercel.app/" />
        <link rel="canonical" href="https://natalya-m.vercel.app/" />
      </Helmet>

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
        <Container>
          <Footer />
        </Container>
      </BgWrapper>

      <ScrollToTopButton />
    </>
  );
};

export default App;
