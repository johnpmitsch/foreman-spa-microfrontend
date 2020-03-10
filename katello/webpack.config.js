const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["src/foreman-katello.js"],
  output: {
    library: "foreman-test-ui-katello",
    libraryTarget: "umd",
    filename: "foreman-katello.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.css|\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
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
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  devtool: "source-map",
  // These packages are expected to be in foreman-chroming
  externals: [
    "react",
    "react-dom",
    "react-router-dom",
    "react-scripts",
    "single-spa-react"
  ],
  devServer: {
    historyApiFallback: true,
    writeToDisk: true
  }
};
