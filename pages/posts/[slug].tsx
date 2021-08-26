import PostContent from "components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "lib/posts.util";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

type Props = {
  post: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PostDetailPage = (props: Props) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const { slug } = params as IParams;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
