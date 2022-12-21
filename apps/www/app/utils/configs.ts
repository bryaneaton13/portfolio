const NodeEnv = process.env.NODE_ENV;

export const Configs = {
  NodeEnv,
  isLocal: NodeEnv === 'development',
  isProd: NodeEnv === 'production',
};

export const Links = {
  Repo: 'https://github.com/bryaneaton13/portfolio',
  Www: 'https://www.bryaneaton.com',
};
