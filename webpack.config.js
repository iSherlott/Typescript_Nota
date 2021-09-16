const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/019_-_Webpack/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { reportFiles: "tsconfig.frontend.json" },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "frontend", "assets", "js"),
  },
  devtool: "source-map",
};
