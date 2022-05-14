const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  output: {
    path: path.resolve(__dirname, "dist"), //for the "CleanWebpackPlugin" to know what path to clean when building
    assetModuleFilename: "images/[hash][ext][query]", //put images in a folder called "images" when building to production
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ], //allows CSS ,SCSS and postCSS support
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },

      {
        test: /\.jsx?$/, //allow .js be used by babel.
        exclude: /node_modules/, //prevents babel from checking this folder.
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true, //shows changes on the project without refreshing it.
  },
};
