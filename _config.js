var config = {};

// Update to have your correct username and password
config.mongoURI = {
  production: process.env.MONGODB_URI,
  development: process.env.MONGODB_URI,
  test: process.env.MONGODB_URI,
};
module.exports = config;
