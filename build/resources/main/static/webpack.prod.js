// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#2-builds--project-setup
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    
    new EnvironmentPlugin({
      ADDRR: '3.35.214.100',
    }),
  ],
});
