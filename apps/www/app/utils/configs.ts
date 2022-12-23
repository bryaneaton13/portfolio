const NodeEnv = process.env.NODE_ENV;

export const Configs = {
  NodeEnv,
  isLocal: NodeEnv === 'development',
  isProd: NodeEnv === 'production',
};
