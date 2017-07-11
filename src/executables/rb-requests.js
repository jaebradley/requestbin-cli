#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';

program
  .description('Get Requests for Given Request Bin')
  .arguments('<requestBinId>')
  .action((requestBinId) => {
    // Placeholder functionality

    console.log(`Getting requests for ${requestBinId}`);
  });

program.parse(process.argv);
