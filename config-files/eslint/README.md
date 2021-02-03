# Redhat Actions ESLint Config

[![eslint-config](https://img.shields.io/npm/v/@redhat-actions/eslint-config?label=@redhat-actions/eslint&logo=eslint&logoColor=red)](https://npmjs.com/@redhat-actions/eslint-config)

## Install
```sh
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin && \
    npm i -D @redhat-actions/eslint-config
```

Then create `.eslintrc.js` with the following contents:
```js
module.exports = {
    extends: [
        "@redhat-actions/eslint-config",
    ],
};
```

This config file includes rules that require the TypeScript types. See [our tsconfig](https://npmjs.com/@redhat-actions/tsconfig).
