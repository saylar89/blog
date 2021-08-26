import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

type Props = {
  posts: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
  }[];
};

const PostGrid: React.FC<Props> = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
