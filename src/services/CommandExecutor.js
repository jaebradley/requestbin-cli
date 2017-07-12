/* eslint-disable no-console */
/* eslint-disable max-len */

import { RequestBinClient } from 'request-bin';
import copypaste from 'copy-paste';

import RequestBinDetails from '../data/RequestBinDetails';
import RequestBinDetailsTable from '../tables/RequestBinDetailsTable';

import RequestBinRequestDetails from '../data/RequestBinRequestDetails';
import RequestBinRequestDetailsTable from '../tables/RequestBinRequestDetailsTable';

export default class CommandExecutor {
  static createBin(isPrivate, copyBinIdToClipboard) {
    if (typeof isPrivate !== 'boolean') {
      throw new Error(`Invalid private value: ${isPrivate}`);
    }

    if (typeof copyBinIdToClipboard !== 'boolean') {
      throw new Error(`Invalid copy value: ${copyBinIdToClipboard}`);
    }

    return RequestBinClient.createBin(isPrivate)
      .then(data => RequestBinDetails.from(data))
      .then((details) => {
        if (copyBinIdToClipboard) {
          copypaste.copy(details.id);
        }
        console.log(new RequestBinDetailsTable(details).build());
      });
  }

  static getBin(binId) {
    if (!CommandExecutor.isValidId(binId)) {
      throw new Error(`Invalid binId: ${binId}`);
    }

    return RequestBinClient.getBin(binId)
      .then(data => RequestBinDetails.from(data))
      .then(details => console.log(new RequestBinDetailsTable(details).build()));
  }

  static getRequests(binId) {
    if (!CommandExecutor.isValidId(binId)) {
      throw new Error(`Invalid binId: ${binId}`);
    }

    return RequestBinClient.getRequests(binId)
      .then(data => data.map(request => RequestBinRequestDetails.from(request)))
      .then((requests) => {
        requests.forEach(request => console.log(new RequestBinRequestDetailsTable(request).build()));
      });
  }

  static getRequest(binId, requestId) {
    if (!CommandExecutor.isValidId(binId)) {
      throw new Error(`Invalid binId: ${binId}`);
    }

    if (!CommandExecutor.isValidId(requestId)) {
      throw new Error(`Invalid requestId: ${requestId}`);
    }

    return RequestBinClient.getRequest(binId, requestId)
      .then(data => RequestBinRequestDetails.from(data))
      .then(request => console.log(new RequestBinRequestDetailsTable(request).build()));
  }

  static isValidId(id) {
    return id && typeof id === 'string' && id.trim().length > 0;
  }
}
