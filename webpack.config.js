const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/privacy.html",
      filename: "privacy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/impressum.html",
      filename: "impressum.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/operator-wheel.html",
      filename: "operator-wheel.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img", to: "assets/img" },
        { from: "src/assets/fonts", to: "assets/fonts" },
        { from: "CNAME", to: "" },
      ],
    }),
  ],
};
