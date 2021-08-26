import AllPosts from "components/posts/all-posts";
import { getAllPosts } from "lib/posts.util";
import { GetStaticProps } from "next";

type PropType = {
  posts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
  }[];
};

const AllPostsPage = (props: PropType) => {
  return <AllPosts posts={props.posts} />;
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
