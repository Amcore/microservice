const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  css: {
    extract: false
  },
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.output.library = 'app2'
    config.output.libraryTarget = 'amd'
    config.externals = [
      /^@portal\/*/,
      /^lodash$/,
      /^single-spa$/,
      /^rxjs\/?.*$/
    ]
  },
  outputDir: path.resolve(__dirname, './app2'),
  publicPath: 'app/app2',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 8822
  }
}
