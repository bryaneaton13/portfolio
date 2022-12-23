import Link from 'next/link';
import { Post } from '../helpers/types';

function PostCard({ title, date, description, slug }: Post): JSX.Element {
  return (
    <div className="p-4 border-b hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.005] transition-transform">
      <Link href="/[slug]" className="" as={`/${slug}`}>
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="italic text-sm mt-1">{date}</div>
        <div className="mt-3 italic">{description}</div>
        <span className="text-sm mt-2 text-blue-500 hover:underline">Read more</span>
      </Link>
    </div>
  );
}

export default PostCard;
