const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/script/app.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },

  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },

      { test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/i, type: "asset/resource" },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "todo",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
