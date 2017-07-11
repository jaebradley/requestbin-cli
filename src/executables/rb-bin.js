#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';

program
  .description('Get Request Bin Details')
  .arguments('<requestBinId>')
  .action((requestBinId) => {
    // Placeholder functionality

    console.log(`Getting Request Bin Details for ${requestBinId}`);
  });

program.parse(process.argv);
