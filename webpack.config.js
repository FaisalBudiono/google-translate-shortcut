const path = require('path');

/**@type {import('webpack').Configuration}*/
module.exports = {
  entry: {
    module: './src/index.js',
    background: './src/background.js',
    injector: './src/injector.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/dist')
  },
};
