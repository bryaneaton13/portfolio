import { useCatch } from '@remix-run/react';
import Nav from './Nav';

export default function NotFoundPage() {
  const caught = useCatch();
  console.log('caught', caught);
  return (
    <div className="w-screen h-screen from-blue-200 to-blue-200 via-green-200 animate-move-bg bg-gradient-to-r bg-[length:400%] flex flex-col">
      <Nav />
      <div className="flex flex-1 h-auto flex-row items-center justify-center">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">The page you're looking for doesn't exist.</p>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              {caught.status} - {caught.statusText}
            </p>

            <a href="/" className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
              Go home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
