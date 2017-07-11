import { RequestBinClient } from 'request-bin';

import RequestBinDetails from '../data/RequestBinDetails';
import RequestBinDetailsTable from '../tables/RequestBinDetailsTable';

export default class CommandExecutor {
  static createBin(isPrivate) {
    return RequestBinClient.createBin(isPrivate || true)
      .then(data => RequestBinDetails.from(data))
      .then(details => new RequestBinDetailsTable(details).build());
  }
}
