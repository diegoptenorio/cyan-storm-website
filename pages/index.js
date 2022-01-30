import Header from '../components/Header';
import Article from '../components/Article';
import Footer from '../components/Footer';

import Articles from '../content/articles';

const Home = () => (
  <>
    <Header />
    {Articles.map((article) => 
      <Article
        key={article.id}
        image={article.image}
        title={article.title}
        text={article.text}
      />
    )}
    <Footer />
  </>
);

export default Home