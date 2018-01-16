const path = require('path')

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.g(raph)?ql$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ]
  },

  resolve: {
    alias: {
      assets: path.join(__dirname, '/src/assets'),
      components: path.join(__dirname, '/src/components'),
      '~graphql': path.join(__dirname, '/src/graphql'),
      styling: path.join(__dirname, '/src/styling'),
    }
  }
}
