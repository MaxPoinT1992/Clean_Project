const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");
let mode = "development";
let EnvValues = {};

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";

  EnvValues = {
    REACT_APP_GOOGLE_MAPS_API: "AIzaSyCXD0uwY61G0xTY1bIRzzmJJJPemzpjCN0",
    REACT_APP_RAPIDAPI_WEATHER_API_KEY: "16f5ed9a54msh81db9f48c80fd25p17",
    REACT_APP_RAPIDAPI_TRAVEL_API_KEY:
      "16f5ed9a54msh81db9f48c80fd25p171f84jsn3c393e5db597",
  };
  plugins.push(new EnvironmentPlugin(EnvValues));
}

if (process.env.NODE_ENV === "development") {
  EnvValues = {
    REACT_APP_GOOGLE_MAPS_API: "AIzaSyCXD0uwY61G0xTY1bIRzzmJJJPemzpjCN0",
    REACT_APP_RAPIDAPI_WEATHER_API_KEY: "16f5ed9a54msh81db9f48c80fd25p17",
    REACT_APP_RAPIDAPI_TRAVEL_API_KEY:
      "16f5ed9a54msh81db9f48c80fd25p171f84jsn3c393e5db597",
  };
  plugins.push(new EnvironmentPlugin(EnvValues));
}

module.exports = {
  mode: mode,
  stats: { warnings: false },
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

  plugins: plugins,

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true, //shows changes on the project without refreshing it.
  },
};
