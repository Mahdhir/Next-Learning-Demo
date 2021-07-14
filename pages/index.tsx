import ArticleList from "../components/ArticleList";
import { server } from "../config/index";
import { Article } from "../models/Article";
import { GetStaticProps } from "next";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  articles: Article[];
}

const Home: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//   const articles = await res.json();

//   return {
//     props:{
//       articles
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
