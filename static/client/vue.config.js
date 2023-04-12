const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  publicPath: './static/client/dist/',
  transpileDependencies: true
})

// static/client/dist