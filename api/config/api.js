var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  // 10 days in minutes
  expireTime: 24 * 60 * 10
};

module.exports = config;