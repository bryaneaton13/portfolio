import Layout from '../components/Layout';
import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const components = {
  // h1: Header
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bryan Eaton's Blog</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Layout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </>
  );
}

export default MyApp;
