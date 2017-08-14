const Dotenv = require('dotenv-webpack');
const Webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new Webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components',
      './src/api'
    ],
    alias: {
      src: 'src',
      applicationStyles: 'src/styles/app.scss',
      actions: 'src/actions/actions.jsx',
      reducers: 'src/reducers/reducers.jsx',
      configureStore: 'src/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtools: 'cheap-module-eval-source-map'
};
