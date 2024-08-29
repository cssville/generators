const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  // devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      fs: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  entry: {
    generator: './src/generate.ts',
  },
  output: {
    filename: 'generator.bundle.js',
    path: path.resolve(__dirname, 'gen'), // This line specifies the output directory
  },
  plugins: [],
};
