#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';

program
  .description('Get Request for Given Request Bin')
  .arguments('<requestBinId> <requestId>')
  .action((requestBinId, requestId) => {
    // Placeholder functionality

    console.log(`Getting requests for Bin: ${requestBinId} and Request: ${requestId}`);
  });

program.parse(process.argv);
