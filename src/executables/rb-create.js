#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';

import CommandExecutor from '../services/CommandExecutor';

program
  .description('Create Request Bin')
  .option('-p, --private', 'Create Private Request Bin')
  .option('-c, --copy', 'Copy Request Bin Id to Clipboard')
  .parse(process.argv);

try {
  CommandExecutor.createBin(program.private || false, program.copy || false)
    .catch(err => console.log(`Error occurred when creating bin: ${err.message}`));
} catch (e) {
  console.error(`Error when creating bin: ${e.message}`);
}
