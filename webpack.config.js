const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', query: { presets: ['es2015','react'], exclude: /node_modules/ } },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
  ]
};

module.exports = config;
