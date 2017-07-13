import Table from 'cli-table2';
import colors from 'colors';

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
    return colors.red(colors.bold(this.details.id));
  }

  getFormattedRequestCounts() {
    return colors.green(colors.bold(this.details.requestCount));
  }

  getFormattedIsPrivate() {
    return colors.cyan(colors.bold(this.details.isPrivate));
  }

  getFormattedColors() {
    return colors.rainbow(this.details.colors.join(', '));
  }
}
