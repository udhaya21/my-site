"use strict";

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

webpack(
  {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    entry: {
      main: path.join(__dirname, "../src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: isProduction ? "[contenthash].[name].bundle.js" : "[name].js",
      clean: true,
      chunkFilename: isProduction
        ? "[contenthash].[name].chunk.js"
        : "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction
          ? "[contenthash].[name].bundle.css"
          : "[name].css",
      }),
      new WebpackManifestPlugin({ publicPath: "/" }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../public/index.html"),
        inject: "body",
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      process.exit(1);
      return;
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.log("Finished running webpack with errors.");
      info.errors.forEach((e) => console.error(e));
      process.exit(1);
    } else {
      console.log("Finished running webpack.");
    }
  }
);
