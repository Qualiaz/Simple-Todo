const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },

  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5001, // default 8080
    open: true,
    hot: false, // for some reason it works better set to false to reload htmlplugin
    compress: true,
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },

      { test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/i, type: "asset/resource" },

      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: { presets: ["@babel/preset-env"] },
      //   },
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "todo",
      filename: "index.html",
      template: "src/template.html", //create temp file
    }),
  ],
};
