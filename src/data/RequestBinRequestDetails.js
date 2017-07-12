import { Record, Map } from 'immutable';

const defaults = {
  id: '',
  method: '',
  executedAt: 0,
  queryParameters: Map(),
  formData: Map(),
};

export default class RequestBinRequestDetails extends Record(defaults) {
  static from(request) {
    return new RequestBinRequestDetails({
      id: request.id,
      method: request.method,
      executedAt: request.time,
      queryParameters: Map(request.query_string),
      formData: Map(request.form_data),
    });
  }
}
