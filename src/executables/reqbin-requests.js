#!/usr/bin/env node

/* eslint-disable no-console */
/* eslint-disable consistent-return */

import program from 'commander';
import { getRequestsDetails } from '../';

program
  .description('Get Requests for Given Request Bin')
  .arguments('<requestBinId>')
  .action((requestBinId) => {
    try {
      return getRequestsDetails(requestBinId)
        .catch(err => console.error(`Error when getting requests for Request Bin ${requestBinId}: ${err.message}`));
    } catch (e) {
      console.error(`Error when getting requests for Request Bin ${requestBinId}: ${e.message}`);
    }
  });

program.parse(process.argv);
