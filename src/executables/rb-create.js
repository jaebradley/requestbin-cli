#!/usr/bin/env node

import program from 'commander';

import CommandExecutor from '../services/CommandExecutor';

program
  .description('Create Request Bin')
  .option('-p, --private', 'Create Private Request Bin')
  .option('-c, --copy', 'Copy Request Bin Id to Clipboard')
  .parse(process.argv);

CommandExecutor.createBin(program.private || false, program.copy || false);
