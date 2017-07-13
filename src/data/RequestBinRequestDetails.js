import { Record, Map } from 'immutable';

const defaults = {
  id: '',
  method: '',
  executedAt: 0,
  queryParameters: Map(),
  formData: Map(),
};

export default class RequestBinRequestDetails extends Record(defaults) {
  static from(details) {
    return new RequestBinRequestDetails({
      id: details.id,
      method: details.method,
      executedAt: details.time,
      queryParameters: Map(details.query_string),
      formData: Map(details.form_data),
    });
  }
}
