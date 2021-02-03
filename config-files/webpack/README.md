# Red Hat Actions Webpack Config

<!-- [![webpack config](https://img.shields.io/npm/v/@redhat-actions/webpack-config?label=@redhat-actions/webpack-config)](https://npmjs.com/@redhat-actions/webpack-config) -->

GitHub Actions tend to use `@vercel/ncc` for bundling due to its ease of use. However, on multiple occasions I've had `ncc` stop working without any obvious way to fix it.

On those projects, I've migrated to `webpack`, so the config is stored here.

# Install

Install peer dependencies:
```sh
npm i -D webpack webpack-cli ts-loader terser-webpack-plugin
```

Copy the [webpack.config.js](./webpack.config.js) into your project.

I will add an NPM package if I find this config requires updates.
