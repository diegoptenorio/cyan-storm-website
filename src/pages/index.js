import Header from '../components/Header';
import Article from '../components/Article';
import Footer from '../components/Footer';

import { news } from '../content';

const Home = () => (
  <>
    <div className="h-[12px] bg-light-blue w-full -mb-[12px]"></div>
    <div className="h-[200vh] w-[100vw] -z-10 fixed -translate-y-[100vh] bg-gradient-radial from-gradient-light-blue via-gradient-dark-blue to-gradient-dark-blue"></div>
    <div className="max-w-screen-lg top-0 z-10 left-0 right-0	mx-auto">
      <Header />
    </div>
    <div className="max-w-screen-lg z-10 left-0 right-0	mx-auto">
      {news.map((article) => 
        <Article
          key={article.id}
          image={article.image}
          title={article.title}
        >
          {article.text}
        </Article>
      )}
    </div>
    <div className="z-10 w-full">
      <Footer />
    </div>
  </>
);

export default Home;