/* eslint-disable no-console */

import { RequestBinClient } from 'request-bin';
import copypaste from 'copy-paste';

import RequestBinDetails from '../data/RequestBinDetails';
import RequestBinDetailsTable from '../tables/RequestBinDetailsTable';

export default class CommandExecutor {
  static createBin(isPrivate, copyBinIdToClipboard) {
    return RequestBinClient.createBin(isPrivate)
      .then(data => RequestBinDetails.from(data))
      .then((details) => {
        if (copyBinIdToClipboard) {
          copypaste.copy(details.id);
        }
        console.log(new RequestBinDetailsTable(details).build());
      }).catch(err => console.log(`Error occurred when creating bin: ${err.message}`));
  }
}
