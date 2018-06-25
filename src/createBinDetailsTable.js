import Table from 'cli-table2';
import chalk from 'chalk';

const createBinDetailsTable = ({ id, requestCount, isPrivate, colors }) => {
  const table = new Table();
  table.push({
    'Bin ID': chalk.red(chalk.bold(id)),
    Requests: chalk.green(chalk.bold(requestCount)),
    Private: chalk.cyan(chalk.bold(isPrivate)),
    Colors: chalk.blue(colors.join(', ')),
  });
  return table.toString();
};

export default createBinDetailsTable;
