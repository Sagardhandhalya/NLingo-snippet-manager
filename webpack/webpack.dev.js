const reactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,
    port: 4000,
    historyApiFallback: true,
  },
  plugins: [new reactRefreshPlugin()],
}
