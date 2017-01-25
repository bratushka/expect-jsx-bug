const path = require('path');


module.exports = {
  debug: true,
  entry: [
    path.resolve(__dirname, 'src', 'index.js')
  ],
  target: 'node',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['src', 'node_modules']
  },
  noInfo: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.json$/, loader: "json"}
    ]
  },
};
