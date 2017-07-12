import Table from 'cli-table2';
import colors from 'colors';
import moment from 'moment';

export default class RequestBinRequestDetailsTable {
  constructor(details) {
    this.details = details;
  }

  build() {
    const table = new Table();
    const formattedQueryParameters = this.getFormattedQueryParameters();
    const formattedFormData = this.getFormattedFormData();

    table.push(
      { 'Request ID': colors.red(colors.bold(this.details.id)) },
      { Method: colors.green(colors.bold(this.details.method)) },
      { 'Executed At': colors.cyan(colors.bold(moment(Math.round(1000 * this.details.executedAt)).format('ddd, MMM Do YYYY, h:mm:ss A'))) },
    );

    if (formattedQueryParameters) {
      table.push({ 'Query Parameters': formattedQueryParameters });
    }

    if (formattedFormData) {
      table.push({ 'Form Data': formattedFormData });
    }

    return table.toString();
  }

  getFormattedQueryParameters() {
    return RequestBinRequestDetailsTable.getFormattedMapping(this.details.queryParameters);
  }

  getFormattedFormData() {
    return RequestBinRequestDetailsTable.getFormattedMapping(this.details.formData);
  }

  static getFormattedMapping(mapping) {
    return mapping.map((value, key) => `${colors.bold(colors.green(key))}: ${colors.red(value)}`)
      .toArray()
      .join('\n');
  }
}
