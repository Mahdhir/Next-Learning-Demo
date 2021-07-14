import articleStyles from "../styles/Article.module.css";
import Link from "next/link";
import { Article } from "../models/Article";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  article: Article;
}

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <Link href="/article/{id}" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
