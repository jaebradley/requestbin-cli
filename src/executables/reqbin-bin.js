#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';

import { getBinDetails } from '../';

program
  .description('Get Request Bin Details')
  .arguments('<requestBinId>')
  .action((requestBinId) => {
    try {
      getBinDetails.catch(e => console.error(`Error when fetching Request Bin ${requestBinId}: ${e.message}`));
    } catch (e) {
      console.error(`Error when fetching Request Bin ${requestBinId}: ${e.message}`);
    }
  });

program.parse(process.argv);
