import { Record } from 'immutable';

const defaults = {
  id: '',
  method: '',
  executedAt: 0,
  queryString: {},
  formData: {},
  body: {},
};

export default class RequestBinRequestDetails extends Record(defaults) {
  static from(request) {
    return new RequestBinRequestDetails({
      id: request.id,
      method: request.method,
      executedAt: request.time,
      queryString: request.query_string,
      formData: request.form_data,
      body: request.body,
    });
  }
}
