module.exports = {
  entry: './index.jsx',

  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' }
    ]
  }
};
