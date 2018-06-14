import Table from 'cli-table3';
import chalk from 'chalk';

export default class RequestBinDetailsTable {
  constructor(details) {
    this.details = details;
  }

  build() {
    const table = new Table();
    table.push(
      { 'Bin ID': this.getFormattedId() },
      { Requests: this.getFormattedRequestCounts() },
      { Private: this.getFormattedIsPrivate() },
      { Colors: this.getFormattedColors() },
    );
    return table.toString();
  }

  getFormattedId() {
    return chalk.red(chalk.bold(this.details.id));
  }

  getFormattedRequestCounts() {
    return chalk.green(chalk.bold(this.details.requestCount));
  }

  getFormattedIsPrivate() {
    return chalk.cyan(chalk.bold(this.details.isPrivate));
  }

  getFormattedColors() {
    return chalk.blue(this.details.colors.join(', '));
  }
}
