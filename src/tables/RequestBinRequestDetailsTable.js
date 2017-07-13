import Table from 'cli-table2';
import chalk from 'chalk';
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
      { 'Request ID': this.getFormattedId() },
      { Method: this.getFormattedMethod() },
      { 'Executed At': this.getFormattedExecutionTime() },
    );


    if (formattedQueryParameters) {
      table.push({ 'Query Parameters': formattedQueryParameters });
    }

    if (formattedFormData) {
      table.push({ 'Form Data': formattedFormData });
    }

    return table.toString();
  }

  getFormattedId() {
    return chalk.red(chalk.bold(this.details.id));
  }

  getFormattedMethod() {
    return chalk.green(chalk.bold(this.details.method));
  }

  getFormattedExecutionTime() {
    const millisecondUnixTimestamp = Math.round(1000 * this.details.executedAt);
    const formattedTime = moment(millisecondUnixTimestamp).format('ddd, MMM Do YYYY, h:mm:ss A');
    return chalk.cyan(chalk.bold(formattedTime));
  }

  getFormattedQueryParameters() {
    return RequestBinRequestDetailsTable.getFormattedMapping(this.details.queryParameters);
  }

  getFormattedFormData() {
    return RequestBinRequestDetailsTable.getFormattedMapping(this.details.formData);
  }

  static getFormattedMapping(mapping) {
    return mapping.map((value, key) => RequestBinRequestDetailsTable.getFormattedEntry(key, value))
      .toArray()
      .join('\n');
  }

  static getFormattedEntry(key, value) {
    return `${chalk.bold(chalk.green(key))}: ${chalk.red(value)}`;
  }
}
