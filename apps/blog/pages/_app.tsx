import Layout from '../components/Layout';
import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
// import {Header} from '../components/Header.js'

const components = {
  // h1: Header
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

export default MyApp;
