# Red Hat Actions Webpack Config

[![webpack config](https://img.shields.io/npm/v/@redhat-actions/webpack-config?label=@redhat-actions/webpack-config)](https://npmjs.com/@redhat-actions/webpack-config)

GitHub Actions tend to use `@vercel/ncc` for bundling due to its ease of use. However, on multiple occasions I've had `ncc` stop working without any obvious way to fix it.

On those projects, I've migrated to `webpack`, so the config is stored here.

# Install

Install peer dependencies:
```sh
npm i -D webpack webpack-cli ts-loader @types/terser-webpack-plugin
```

Install the config:
```sh
npm i -D @redhat-actions/webpack-config
```

Create `webpack.config.js` with the following content:

```js
//@ts-check

module.exports = require("@redhat-actions/webpack-config");
```

If you need to modify/override the config, you can set `module.exports` to a function instead, modify the `require`'d config as necessary, and return the config.
