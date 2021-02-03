// eslint-disable-next-line no-undef
module.exports = {
    ignorePatterns: [
        "node_modules/",
        "dist/",
        "out/",
        "lib/",
        "**/webpack.config.js",
    ],
    env: {
        browser: false,
        es2021: true,
    },
    ignorePatterns: [
        ".eslintrc.js",
        "dist/",
        "out/",
    ],
    extends: [
        // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: [
            "./tsconfig.json",
        ],
    },
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        // https://eslint.org/docs/rules/

        "array-bracket-spacing": [ 2, "always", { objectsInArrays: false, arraysInArrays: false }],
        "brace-style": [ 2, "stroustrup", { allowSingleLine: true } ],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "only-multiline"
        }],
        indent: [ 2, 4 ],
        curly: 2,
        "default-case-last": 2,
        eqeqeq: [ 2, "smart" ],
        "func-names": [ 2, "as-needed" ],
        "max-len": [ 2, 120, 4, {
            ignoreRegExpLiterals: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreUrls: true,
        }],
        "no-constructor-return": 2,
        "no-console": 2,
        "no-else-return": [ 2, { allowElseIf: true } ],
        "no-invalid-this": 2,
        "no-multi-spaces": [ 2, { "ignoreEOLComments": true } ],
        "no-use-before-define": [ 2, { functions: false, classes: false }],
        "spaced-comment": [ 2, "always", { block: { exceptions: [ "*" ] } } ],
        quotes: [ 2, "double", { allowTemplateLiterals: true } ],

        "no-restricted-syntax": [
            // This is copied from airbnb, but I allow "for-of".
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // no-shadow has false positives with enums in TS
        "no-shadow": 0,
        "@typescript-eslint/no-shadow": [ "error" ],

        // similarly, the rules for a useless constructor also change with TS
        "no-useless-constructor": 0,
        "@typescript-eslint/no-useless-constructor": [ "error" ],

        "semi": "off",
        "@typescript-eslint/semi": [ "error" ],

        // disables
        "no-await-in-loop": 0,
        "no-continue": 0,
        "no-underscore-dangle": 0,
        "no-inner-declarations": 0,
        "no-plusplus": 0,
        "prefer-destructuring": 0,
        "prefer-template": 0,

        ///// Import rules

        "import/extensions": [ 2, "never" ],
        // this errors out on all relative path imports, I'm not sure why.
        // TypeScript checks imports anyway.
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,

        ///// TypeScript rules

        "@typescript-eslint/explicit-function-return-type": 2,
        "@typescript-eslint/no-base-to-string": 2,
        "@typescript-eslint/no-require-imports": 2,
        "@typescript-eslint/no-unnecessary-condition": 2,
        "@typescript-eslint/prefer-for-of": 2,
        "@typescript-eslint/prefer-readonly": 2,
        "@typescript-eslint/prefer-string-starts-ends-with": 2,
        "@typescript-eslint/switch-exhaustiveness-check": 2,
        "@typescript-eslint/typedef": [ 2, { parameter: true }],

        // disables
        "@typescript-eslint/no-namespace": 0,
    },
};
