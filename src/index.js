import { RequestBinClient } from 'request-bin';
import copypaste from 'copy-paste';

import createBinDetailsTable from './createBinDetailsTable';
import createRequestDetailsTable from './createRequestDetailsTable';

const createBin = async ({ isPrivate = false, copyBinIdToClipboard = false }) => {
  const {
    name: id,
    color: colors,
    request_count: requestCount,
  } = await RequestBinClient.createBin(isPrivate);
  if (copyBinIdToClipboard) {
    copypaste.copy(id);
  }

  const table = createBinDetailsTable({
    id,
    isPrivate,
    colors,
    requestCount,
  });

  console.log(table);
};

const getBinDetails = async (binId) => {
  const {
    name: id,
    private: isPrivate,
    color: colors,
    request_count: requestCount,
  } = await RequestBinClient.getBin(binId);

  const table = createBinDetailsTable({
    id,
    isPrivate,
    colors,
    requestCount,
  });

  console.log(table);
};

const getRequestsDetails = async (binId) => {
  const requestsDetails = await RequestBinClient.getRequests(binId);
  requestsDetails.forEach(({
    id,
    time: executedAt,
    query_string: queryParameters,
    form_data: formData,
  }) => console.log(createRequestDetailsTable({
    id,
    executedAt,
    queryParameters,
    formData,
  })));
};

const getRequestDetails = async ({ binId, requestId }) => {
  const {
    id,
    time: executedAt,
    query_string: queryParameters,
    form_data: formData,
  } = await RequestBinClient.getRequest(binId, requestId);
  const table = createRequestDetailsTable({
    id,
    executedAt,
    queryParameters,
    formData,
  });

  console.log(table);
}

export {
  createBin,
  getBinDetails,
  getRequestsDetails,
  getRequestDetails,
};
