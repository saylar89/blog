import PostGrid from "components/posts/posts-grid";
import classes from "./featured-posts.module.css";

type Props = {
  posts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
  }[];
};

const FeaturedPosts: React.FC<Props> = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
