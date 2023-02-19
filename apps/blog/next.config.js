const nextMDX = require('@next/mdx');

const withMDX = nextMDX({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ...withMDX({
    // Support MDX files as pages:
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  }),
};
