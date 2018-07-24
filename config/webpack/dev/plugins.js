const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = webpack => [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development")
    }
  })
];
