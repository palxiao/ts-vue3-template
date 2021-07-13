const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduction ? './' : '/',
  productionSourceMap: false,
  transpileDependencies: [
    // 'html2canvas',
    // 'vuejs-datepicker',
    // 'vue-clipboard2'
  ],
    configureWebpack: config => {
      if (isProduction) {
        config.plugins.push(
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
          }),
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true
              }
            }
          })
        );
        // 分离包
        config.externals = {
          'vue': 'Vue',
          'vue-router': 'VueRouter',
          'vuex': 'Vuex',
          'axios': 'axios',
          // 'immutable': 'Immutable'
          // 'vant': 'vant'
        }
      }
    },
}
