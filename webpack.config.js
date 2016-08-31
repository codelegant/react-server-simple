/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:40
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry  : {
    'bundle': './browser'
  },
  output : {
    path         : './',
    filename     : '[name].min.js',//[name].js
    libraryTarget: "var"
  },
  module : {
    loaders: [
      {
        test   : /\.js?$/,
        loader : 'babel',// short for babel-loader
        exclude: /node_modules/,
        query  : {
          presets: ['react', 'es2015', 'stage-0']
        }

      }
    ],
  },
  target : 'web',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output  : {comments: false}
    })
  ],

};