const path = require("path");

module.exports = (storybookBaseConfig) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  storybookBaseConfig.resolve = {
    alias: {
      "@/components/*": path.resolve(__dirname, "../components/*"),
      "@/slices/*": path.resolve(__dirname, "../slices/*"),
      "@/pages/*": path.resolve(__dirname, "../pages/*"),
      "@/styles/*": path.resolve(__dirname, "../styles/*"),
      "@/themes/*": path.resolve(__dirname, "../themes/*"),
    }
  };

  return storybookBaseConfig;
};
