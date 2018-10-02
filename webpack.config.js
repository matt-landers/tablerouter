const path = require('path');
var nodeExternals = require('webpack-node-externals');

const serverConfig = (env, argv) => {

  return {
    mode: 'production',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'tsconfig.json'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'tablerouter',
      libraryTarget: 'umd'
    },
    target: 'node',
    node: {
      __dirname: false
    },
    externals: [nodeExternals()]
  }
};

module.exports = [serverConfig];