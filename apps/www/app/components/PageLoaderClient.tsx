import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Page from '~/components/Page';
import { FiLoader } from 'react-icons/fi';

export default function PageLoaderClient({ children, onMount }: { children: ReactNode; onMount?: Function }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Page>
        <div className="flex flex-row items-center text-3xl justify-center mt-20 text-stone-600">
          <FiLoader className="animate-spin mr-2" />
          Loading...
        </div>
      </Page>
    );
  }

  return <Page>{children}</Page>;
}
