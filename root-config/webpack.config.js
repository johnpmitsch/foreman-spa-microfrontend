const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = env => ({
  entry: {
    "foreman-root-config": "foreman-root-config.js"
  },
  output: {
    publicPath: "/",
    filename: "[name].js"
  },
  devtool: "sourcemap",
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      inject: false
    }),
    new Dotenv() // loads environment from .env
  ],
  externals: []
});
