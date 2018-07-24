const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TITLEPRO } = require("../env");

module.exports = webpack => [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    title: TITLEPRO
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
];
