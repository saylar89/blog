import AllPosts from "components/posts/all-posts";
import { getAllPosts } from "lib/posts.util";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Fragment } from "react";

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
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
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
