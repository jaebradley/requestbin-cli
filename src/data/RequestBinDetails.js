import { Record, List } from 'immutable';

const defaults = {
  id: '',
  isPrivate: false,
  colors: List(),
  requestCount: 0,
};

export default class RequestBinDetails extends Record(defaults) {
  static from(details) {
    return new RequestBinDetails({
      id: details.name,
      isPrivate: details.private,
      colors: List(details.color),
      requestCount: details.request_count,
    });
  }
}
