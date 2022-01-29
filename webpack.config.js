const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "monitoring pollution app",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|webp)$/i,
        use: {
          loader: "img-optimize-loader",
          options: {
            compress: {
              mode: "low",
            },
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 500,
    open: true,
  },
};
