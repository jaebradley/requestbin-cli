#!/usr/bin/env node

/* eslint-disable no-console */
/* eslint-disable consistent-return */

import program from 'commander';

import { getRequestDetails } from '../';

program
  .description('Get Request for Given Request Bin')
  .arguments('<requestBinId> <requestId>')
  .action((requestBinId, requestId) => {
    try {
      getRequestDetails({ binId: requestBinId, requestId })
        .catch(e => console.error(`Error when getting request ${requestId} for Request Bin ${requestBinId}: ${e.message}`));
    } catch (e) {
      console.error(`Error when getting request ${requestId} for Request Bin ${requestBinId}: ${e.message}`);
    }
  });

program.parse(process.argv);
