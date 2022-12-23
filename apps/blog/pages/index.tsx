import { InferGetStaticPropsType } from 'next';
import PostCard from '../components/PostCard';
import { getPosts } from '../helpers/posts';

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1 className="mt-2 md:mt-4 pb-4 font-bold text-xl border-b">Latest</h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
