const path = require("path");
var webpack = require("webpack")

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      }
    ],
  
     
    },
    plugins:[
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "content.js",
    path: path.resolve(__dirname, "..", "extension"),
  },
};