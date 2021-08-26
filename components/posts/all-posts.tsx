import classes from "./all-posts.module.css";
import PostGrid from "./posts-grid";

type Props = {
  posts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
  }[];
};

const AllPosts: React.FC<Props> = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
