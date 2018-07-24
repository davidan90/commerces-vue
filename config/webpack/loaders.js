module.exports = [
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
        sass: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
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
];
