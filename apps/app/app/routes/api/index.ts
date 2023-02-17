import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import packageJson from '../../../package.json';

export const loader: LoaderFunction = async () => {
  return json({
    name: 'My API',
    version: packageJson.version,
    environment: process.env.NODE_ENV,
  });
};
