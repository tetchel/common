# Redhat Actions TS Config

[![tsconfig](https://img.shields.io/npm/v/@redhat-actions/tsconfig?label=@redhat-actions/tsconfig&logo=typescript&logoColor=red)](https://npmjs.com/@redhat-actions/tsconfig)

## Install

```sh
npm i -D @redhat-actions/tsconfig
```

Then create `tsconfig.json`:
```json
{
  "extends": "@redhat-actions/tsconfig",
  "compilerOptions": {
    "rootDir": "src/",
    "outDir": "out/"
  },
  "include": [
    "src/"
  ],
}
```

Also see [our ESLint config](https://npmjs.com/@redhat-actions/eslint-config).
