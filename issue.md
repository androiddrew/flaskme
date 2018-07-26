Create a project with the following structure:

```
top_level/
├── backend
│   ├── static
│   └── templates
└── vue_project
    ├── dist
    ├── public
    └── src
 ```
With vue.config.js set to :

```
const path = require("path");

module.exports = {
  outputDir: path.resolve('../../backend/static'), 
  assetsDir: './assets',
  baseUrl: '/',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].filename = path.resolve('../backend/templates/index.html');
        return args;
      });
  },
}
```

Build your vue_project. The result is creates an `index.html` with the correct paths in the href tags, but the static assets are placed relative to the default folder NOT the outputDir defined in your config file.

Setting the vue.config file to:

```
const path = require("path");

module.exports = {
  outputDir: path.resolve('../../backend/static'),
  assetsDir: '../../backend/static/assets',
  baseUrl: '/',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].filename = path.resolve('../backend/templates/index.html');
        return args;
      });
  },
}
```

Will place the static assets in the defined directory however the `index.html` href values are injected with the assetsDir path.

```
<link as=script href=/../../backend/static/assets/js/chunk-vendors.fb29d323.js rel=preload>
```

