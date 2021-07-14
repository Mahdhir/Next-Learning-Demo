import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
import { Article } from "../models/Article";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  articles: Article[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => {
        return <ArticleItem key={index} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
