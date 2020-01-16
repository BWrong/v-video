const { resolve } = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve('./dist'),
    filename: 'index.js',
    library: 'v-video',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  },
  externals: 'video.js'
};
