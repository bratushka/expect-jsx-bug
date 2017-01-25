const path = require('path');


module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js')
  ],
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.json$/, loader: "json"}
    ]
  },
};
