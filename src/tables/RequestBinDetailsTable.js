import Table from 'cli-table2';
import colors from 'colors';

export default class RequestBinDetailsTable {
  constructor(details) {
    this.details = details;
  }

  build() {
    const table = new Table();
    table.push(
      { 'Bin ID': colors.red(colors.bold(this.details.id)) },
      { Requests: colors.green(colors.bold(this.details.requestCount)) },
      { Private: colors.cyan(colors.bold(this.details.isPrivate)) },
      { Colors: colors.rainbow(this.details.colors.join(', ')) },
    );
    return table.toString();
  }
}
