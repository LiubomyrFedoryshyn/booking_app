const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      });
    }
    //aliases
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@pages"] = path.join(__dirname, "pages");
    config.resolve.alias["@utils"] = path.join(__dirname, "utils");
    config.resolve.alias["@assets"] = path.join(__dirname, "assets");
    config.resolve.alias["@interfaces"] = path.join(__dirname, "interfaces");
    //aliases
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
