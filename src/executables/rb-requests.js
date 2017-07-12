#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';
import CommandExecutor from '../services/CommandExecutor';

program
  .description('Get Requests for Given Request Bin')
  .arguments('<requestBinId>')
  .action((requestBinId) => {
    try {
      CommandExecutor.getRequests(requestBinId)
        .catch(err => console.error(`Error when getting requests for Request Bin ${requestBinId}: ${err.message}`));
    } catch (e) {
      console.error(`Error when getting requests for Request Bin ${requestBinId}: ${e.message}`);
    }
  });

program.parse(process.argv);
