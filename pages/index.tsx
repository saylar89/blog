import FeaturedPosts from "components/home-page/featured-posts";
import { getFeaturedPosts } from "lib/posts.util";
import { GetStaticProps } from "next";
import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import Head from "next/head";

type PropType = {
  posts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
  }[];
};

const HomePage = (props: PropType) => {
  return (
    <Fragment>
      <Head>
        <title>Aslan's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
