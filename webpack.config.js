const path = require("path");
const webpack = require("webpack");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const filename = "[name].min.js";

const plugins = [
  new LodashModuleReplacementPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: `${filename}.map`,
  }),
];

module.exports = {
  entry: {
    "sd-components": path.join(__dirname, "src"),
  },
  output: {
    path: path.resolve(__dirname, "lib/dist"),
    filename,
    library: {
      name: "sd-components",
      type: "umd",
    },
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
    "@chakra-ui/react": {
      commonjs: "@chakra-ui/react",
      commonjs2: "@chakra-ui/react",
      amd: "@chakra-ui/react",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx?$/,
        use: ["babel-loader?babelrc"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
