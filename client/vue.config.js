const path = require("path");

module.exports = {
  outputDir: '../flaskme/static',
  assetsDir: undefined,
  baseUrl: process.env.NODE_ENV === 'production'
   ? '/static'
   : '/',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  chainWebpack: config => {
  // Change index.html output directory
  if (process.env.NODE_ENV === 'production'){
    config.plugin('html')
      .tap(args => {
        args[0].filename = path.resolve('../flaskme/templates/index.html');
        return args;
      });
  }
},
}
