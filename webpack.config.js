const path = require('path');
const fs = require('fs');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = require('./configs/env');

const templateFiles = fs.readdirSync(
  path.resolve(__dirname, env.paths.source, 'templates')
);

const htmlPluginEntries = templateFiles.map(
  (template) =>
    new HTMLWebpackPlugin({
      inject: true,
      hash: false,
      filename: template,
      template: path.resolve(env.paths.source, 'templates', template),
      favicon: path.resolve(env.paths.source, 'images', 'favicon.ico'),
    })
);

module.exports = {
  entry: {
    app: path.resolve(env.paths.source, 'js', 'app.js'),
  },
  output: {
    path: env.paths.output,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: env.paths.source,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/design/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: env.limits.images,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: env.limits.fonts,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].minify.css',
    }),
    new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(env.paths.source, 'images', 'content'),
          to: path.resolve(env.paths.output, 'images', 'content'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
        {
          from: path.resolve(env.paths.source, 'images', 'design'),
          to: path.resolve(env.paths.output, 'images', 'design'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
        {
          from: path.resolve(env.paths.source, 'images', 'icons'),
          to: path.resolve(env.paths.output, 'images', 'icons'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
        {
          from: path.resolve(env.paths.source, 'css'),
          to: path.resolve(env.paths.output, 'css'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
        {
          from: path.resolve(env.paths.source, 'audio'),
          to: path.resolve(env.paths.output, 'audio'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
      ],
    }),
  ].concat(htmlPluginEntries),
  target: 'web',
};
