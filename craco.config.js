const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@assets": resolvePath("./src/assets"),
      "@shared": resolvePath("./src/shared/"),
    },
  },
};
