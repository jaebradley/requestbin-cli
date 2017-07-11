#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('Interface for creating Request Bins and fetching information about existing Request Bins')
  .command('create', 'Create a Request Bin')
  .command('bin', 'Get details for a Request Bin')
  .command('requests', 'Get details for requests for a given Request Bin')
  .command('request', 'Get details for a specific request for a given Request Bin')
  .parse(process.argv);
