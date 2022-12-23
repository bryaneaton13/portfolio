import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getPost, getPosts } from '../helpers/posts';

function Post({ data, content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className="border-b mb-8 pb-8 p-5">
        <h1 className="font-bold text-xl mt-4 mb-2">{data.title}</h1>
        <div className="mb-2">{data.description}</div>
        <div className="italic text-sm">{data.date}</div>
      </div>
      <div className="prose dark:prose-dark p-5">
        <MDXRemote {...content} />
      </div>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params?.slug as string);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
