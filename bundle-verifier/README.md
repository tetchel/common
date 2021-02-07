# GitHub Action Bundle Verifier

[![bundle-verifier CI](https://github.com/redhat-actions/common/workflows/bundle-verifier%20CI/badge.svg)](https://github.com/redhat-actions/common/actions)

[![Bundle Size](https://img.shields.io/github/size/redhat-actions/common/bundle-verifier/dist/index.js)](./dist/)
[![Tag](https://img.shields.io/github/v/tag/redhat-actions/common)](https://github.com/redhat-actions/common/tags)
[![License](https://img.shields.io/github/license/redhat-actions/common)](./LICENSE)

GitHub Action repositories are unusual in that their production bundle is committed to the repository.

This leads to a potential inconsistency where, if a developer updates the source code but does not run the compiler and/or bundler, the source code may not match the distribution that is committed. This is best resolved through [pre-commit hooks](./hooks).

The goal of this action is to bundle the source code and compare the generated bundle to that which was committed. If they match, the distibution is up-to-date and the action succeeds. Otherwise, the action fails.

There is no reason that this action can't be used by projects other than GitHub Actions, but this action was developed for that use-case.

## Inputs

See [this repository's workflow](./.github/workflows/verify-verifier.yml) for an example.

| Input | Description |
| ---   | --- |
| `bundle_file` | Path, relative to the repository root, to your bundled js file. Only one regular file is supported. <br><br>For this repository, it is [`dist/index.js`](./dist/index.js). |
| `bundle_command`| Command to run to generate your bundle. A `package.json` script is recommended, which can in turn execute your bundler such as `webpack` or `ncc`.<br><br>For this repository, it is [`npm run bundle`](./package.json#L8). |
| `working_directory` | Working directory to use for relative path to `bundle_file`, and to run the `bundle_command` in.<br><br>For this repository, it is [`bundle-verifier`](./bundle-verifier). |

## Hooks
To ensure bundle consistency, this repository uses git pre-commit hooks.

To install the hooks, run `cp hooks/* ../.git/hooks/` and accept any overwrites.
