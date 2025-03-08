import Container from './components/container';
import Top from './components/top.jsx';
import Header from './components/header.jsx';
import BlockHero from './components/blockHero.jsx';
// import ShopBlock from "./components/shopBlock.jsx";
// import ForeverBlock from "./components/foreverBlock.jsx";
// import Footer from "./components/footer.jsx";
// import Bottom from "./components/bottom.jsx";
// import { ScrollToTopButton } from "./components/upBottom.jsx";

// import ScrollAnimation from "./components/xtest.jsx";
// import ScrollAnimation2 from "./components/xxtest.jsx";

const App = () => {
  return (
    <>
      {/* <div className="container mx-auto my-16 grid grid-cols-1 gap-16 sm:grid-cols-3 border-4 border-green-500 sm:border-yellow-500 md:border-red-500 lg:border-blue-500 xl:border-orange-500">
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt vero
            nam voluptatem harum vitae et ex suscipit eos repellendus placeat,
            aliquid non nulla iure quia ipsam ullam quis, sed fugiat. Libero
            quibusdam aliquam perspiciatis tenetur ratione, tempora assumenda
            cupiditate eveniet, corporis officia alias ipsum sint quam nihil
            expedita sit culpa nam dolores delectus, magnam fugiat facere.
          </p>
        </div>
        <div className="sm:col-span-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt at,
            cum obcaecati non nulla incidunt quis maiores, expedita
            exercitationem adipisci corrupti aut hic nesciunt necessitatibus
            quisquam sit. Cupiditate, adipisci quo! Distinctio expedita maiores
            itaque veniam, eveniet voluptate illo, nostrum quod at eum molestiae
            est rerum animi cum officiis voluptas ad eaque dolore consequatur
            nulla sint! Dolorum eius repellat laboriosam quis! Modi
            reprehenderit ducimus a pariatur eligendi, quam itaque velit nam
            incidunt blanditiis placeat dolores in, reiciendis illo sapiente
            error at ut hic dolore deleniti rerum, libero quo iure. Dolorem,
            delectus. Eius commodi velit, quae magnam officia sit quo. Aut
            voluptatum eligendi, recusandae quasi a excepturi quia itaque harum
            incidunt fugiat hic ad libero nulla nihil, reprehenderit magni odio
            accusantium beatae.
          </p>
        </div>
      </div> */}
      <Top>
        <Container>
          <Header />
        </Container>
      </Top>
      <Container>
        <BlockHero />
        {/* <ShopBlock /> */}
        {/* <ScrollAnimation /> */}
        {/* <ScrollAnimation2 /> */}
        {/* <ForeverBlock /> */}
        {/* <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <div className="h-10 w-10 animate-ping rounded-full bg-blue-500"></div>
          <div className="flex h-16 w-16 animate-bounce items-center justify-center bg-red-500 text-white">
            🔔
          </div>
          <div className="h-10 w-32 animate-pulse rounded bg-gray-300"></div> */}
      </Container>
      {/* <Bottom>
        <Container>
          <Footer />
        </Container>
      </Bottom> */}
      {/* <ScrollToTopButton /> */}
    </>
  );
};

export default App;
