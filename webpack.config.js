const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
	  app: __dirname + "/source"
  },
  output: {
    path: __dirname + "/public",
    publicPath: '/app.html'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./source/app.html",
      filename: "./app.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};