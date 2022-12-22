import Link from 'next/link';
import { Post } from '../helpers/types';

function PostCard({ title, date, description, slug }: Post): JSX.Element {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-xl my-4">{title}</h2>
      <time className="text-gray-400">{date}</time>
      <p className="mt-4 italic">{description}</p>

      <Link href="/[slug]" className="text-blue-500 mt-4 mb-2 block" as={`/${slug}`}>
        Read more
      </Link>
    </div>
  );
}

export default PostCard;
