# Configs

This directory contains the TypeScript, ESLint and webpack configs we use for the Red Hat GitHub Actions. Include these config files when scaffolding a new action that uses TypeScript/JavaScript.

Refer to the READMEs under the subdirectories for install instructions.

## Updating the config files
The process is manual for now but should be automated in an actions workflow.

1. `cd` into the directory for the package you want to update.
2. Run `npm version (major | minor | patch)` to bump the version accordingly.
3. Run `npm publish --access=public`.
