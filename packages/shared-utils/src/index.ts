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
};

export const uniqArr = (arr: any[]) => [...new Set(arr)];
