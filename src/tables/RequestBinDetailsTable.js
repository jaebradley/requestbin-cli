import Table from 'cli-table2';

export default class RequestBinDetailsTable {
  constructor(details) {
    this.details = details;
  }

  build() {
    const table = new Table();
    table.push(
      { 'Bin ID': this.details.id },
      { Requests: this.details.requestCount },
      { Private: this.details.isPrivate },
      { Colors: this.details.colors.join(', ') },
    );
    return table.toString();
  }
}
