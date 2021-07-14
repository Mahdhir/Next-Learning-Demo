import { useRouter } from "next/router";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
import Link from "next/link";
import { Article } from "../../../models/Article";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  article: Article;
}

const Article: React.FC<Props> = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(`${server}/api/articles/${context.params?.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths:GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article: Article) => article.id);
  const paths = ids.map((id: number) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map((article: any) => article.id);
//   const paths = ids.map((id: number) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Article;
