module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://software.thinkrite.com',
        secure: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '/' },
        logLevel: 'debug',
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  },
};
