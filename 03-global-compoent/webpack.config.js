const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
