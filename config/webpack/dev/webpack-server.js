const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");
const opn = require("opn");
const port = 9000;
const devHost = "0.0.0.0";

opn(`http://${devHost}:${port}`);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  noInfo: true,
  overlay: true
}).listen(port, devHost, error => {
  if (error) {
    return console.log(error);
  }
  console.log(`Running at http://${devHost}:${port}`);
});
