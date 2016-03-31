#!/usr/bin/env node
require('babel-polyfill');

process.on('unhandledRejection', err => { throw err; });

var cli = require('../dist/cli.js').default;
var transformArguments = require('../dist/transformArguments').default;
var executeGenerator = require('../dist/executeGenerator').default;

cli(transformArguments, executeGenerator, process, require);

