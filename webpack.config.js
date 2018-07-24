var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

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
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ],
        include: `${__dirname}/src`
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ["vue-style-loader", "css-loader", "sass-loader"],
            sass: [
              "vue-style-loader",
              "css-loader",
              "sass-loader?indentedSyntax"
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port: 9000
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  module.exports.output = {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./",
    filename: "main.js",
    chunkFilename: "[name].chunk.js"
  };
  module.exports.plugins = (module.exports.plugins || []).concat([
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
  ]);
}
