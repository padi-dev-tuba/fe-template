const path = require('path')

module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules', './src/assets'],
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@themeConfig': path.resolve(__dirname, 'themeConfig.js'),
        '@core': path.resolve(__dirname, 'src/@core'),
        '@validations': path.resolve(__dirname, 'src/@core/utils/validations/validations.js'),
        '@axios': path.resolve(__dirname, 'src/libs/axios'),
        '@common': path.resolve(__dirname, 'src/modules/common'),
      },
    },
  },
  chainWebpack: config => {
    // split entry
    config
      .entry('devepress')
      .add('devextreme/dist/css/dx.common.css')
      .add('devextreme/dist/css/dx.light.css')

    config
      .entry('vselect')
      .add('@riophae/vue-treeselect/dist/vue-treeselect.css')

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // eslint-disable-next-line no-param-reassign
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        }
        return options
      })

    // lazy load
    config.plugins.delete('prefetch')
  },
  transpileDependencies: ['vue-echarts', 'resize-detector', 'vue-currency-input'],
}
