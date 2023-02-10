const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js', './src/test.js'],
  output: {
    filename: '[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  performance: {
    hints: 'warning',
  },
};
