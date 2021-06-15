const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@images": path.resolve(__dirname, "src/images/"),
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@constants": path.resolve(__dirname, "src/config/constants"),
      "@routing": path.resolve(__dirname, "src/routing/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@api": path.resolve(__dirname, "src/config/api/"),
    },
  },
};
