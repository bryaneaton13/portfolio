import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPosts = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  return allPostsData;
};

export const getPost = async (slug: string) => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};
