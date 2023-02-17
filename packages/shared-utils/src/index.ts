const NodeEnv = process.env.NODE_ENV;

export const Configs = {
  NodeEnv,
  isLocal: NodeEnv === 'development',
  isProd: NodeEnv === 'production',
};

export const Links = {
  Twitter: 'https://twitter.com/bryaneaton131',
  Github: 'https://github.com/bryaneaton13',
  Repo: 'https://github.com/bryaneaton13/portfolio',
  Www: Configs.isLocal ? 'http://localhost:3002' : 'https://www.bryaneaton.com',
  Blog: Configs.isLocal ? 'http://localhost:3000' : 'https://blog.bryaneaton.com',
  App: Configs.isLocal ? 'http://localhost:3000' : 'https://app.bryaneaton.com',
};

export const uniqArr = <T>(arr: T[]): T[] => [...new Set(arr)];
export const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));
export const exists = (v: any) => typeof v !== 'undefined';
export const isArray = (a: any) => Array.isArray(a);
export const isString = (s: any) => typeof s === 'string';
export const isInteger = (n: any) => Number.isInteger(n);
export const isObject = (o: any) => typeof o === 'object' && o !== null;
export const isObjectEmpty = (o: { [s: string]: unknown } | ArrayLike<unknown>) =>
  Object.entries(o).length === 0 && o.constructor === Object;
