import fs from "fs";
import path from "path";
import matter from "gray-matter";

type DataType = {
  slug: string;
  title?: string;
  date?: string;
  image?: string;
  excerpt?: string;
  isFeatured?: boolean;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles;
};

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //remove the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: DataType = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date! > postB.date! ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
