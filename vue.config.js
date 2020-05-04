const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: 'http://localhost:3000',
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
}
