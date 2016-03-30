#!/usr/bin/env node
require('babel-polyfill');

var program = require('commander');

var cli = require('../dist/cli.js').default;

cli(require, program, process);
