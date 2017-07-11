#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';

program
  .description('Create Request Bin')
  .option('-p, --private', 'Create private Request Bin')
  .parse(process.argv);

// Placeholder functionality

console.log(`Creating Request Bin - Private: ${program.private}`);
