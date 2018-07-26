const path = require("path");

module.exports = {
  outputDir: path.resolve('../../flaskme/static'),
  assetsDir: undefined,  //'../../flaskme/static/assets', // MUST BE RELATIVE PATH BUT IS NOT RELATIVE TO OUTPUT DIR
  baseUrl: '/',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].filename = path.resolve('../flaskme/templates/index.html');
        return args;
      });
  },
}

