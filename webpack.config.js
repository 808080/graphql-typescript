const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  performance: {
    hints: false,
  },
  optimization: {
    nodeEnv: false
  },
  externals: [nodeExternals()],
};