#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';

import CommandExecutor from '../services/CommandExecutor';

program
  .description('Create Request Bin')
  .option('-p, --private', 'Create private Request Bin')
  .parse(process.argv);

CommandExecutor.createBin(program.private).then(table => console.log(table));
