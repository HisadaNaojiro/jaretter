const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env' , '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-export-default-from']
        }
      }
    ]
  },
  resolve: {
    alias: {
      front: path.resolve(__dirname , '../../src/'),
    },
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname , '../../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    // この記述がないとeslint-loader実行時にエラーが出る（2018/03/15時点）
    new webpack.LoaderOptionsPlugin({ 
      options: {
        eslint: {
          configFile: './config/development/.eslintrc.json'
        }
      } 
    }),
  ],
};
