// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#2-builds--project-setup
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { EnvironmentPlugin } = require('webpack');

module.exports = merge(common, {
  mode: 'development',

  plugins: [
    
    new EnvironmentPlugin({
      ADDRR: 'localhost',
    }),
  ],

});
