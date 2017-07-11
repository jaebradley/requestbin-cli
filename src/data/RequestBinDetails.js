import { Record, List } from 'immutable';

const defaults = {
  id: '',
  isPrivate: false,
  colors: List(),
  requestCount: 0,
};

export default class RequestDetails extends Record(defaults) {
  static from(response) {
    return new RequestDetails({
      id: response.name,
      isPrivate: response.private,
      colors: List(response.color),
      requestCount: response.request_count,
    });
  }
}
