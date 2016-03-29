#!/usr/bin/env node
var program = require('commander');

var cli = require('../dist/cli.js').default;

cli(require, program, process);
