const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Ecommerce-Site/'
      : '/',
    transpileDependencies: true
})
