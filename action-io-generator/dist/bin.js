#!/usr/bin/env node

const index = require("./index");

index.cli()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
