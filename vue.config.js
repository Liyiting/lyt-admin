// vue.config.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 选项...
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
