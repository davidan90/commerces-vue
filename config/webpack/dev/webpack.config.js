const path = require("path");
const webpack = require("webpack");
const loaders = require("../loaders");
const devPlugins = require("./plugins");

module.exports = {
  entry: {
    index: "./src/main.js"
  },
  output: {
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  module: {
    rules: loaders
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",
  plugins: devPlugins(webpack)
};

// if (process.env.NODE_ENV === "production") {
//   module.exports.devtool = "#source-map";
//   module.exports.output = {
//     path: path.resolve(__dirname, "./dist"),
//     publicPath: "./",
//     filename: "main.js",
//     chunkFilename: "[name].chunk.js"
//   };
//   module.exports.plugins = (module.exports.plugins || []).concat(
//     prodPlugins(webpack)
//   );
// }
