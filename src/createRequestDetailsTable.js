import Table from 'cli-table2';
import chalk from 'chalk';

const formatEntry = ({ key, value }) => `${chalk.bold(chalk.green(key))}: ${chalk.red(value)}`;
const formatEntries = entries => entries.map((value, key) => formatEntry({ key, value })).join('\n');

const createRequestDetailsTable = ({
  id,
  method,
  executedAt,
  queryParameters = null,
  formData = null,
}) => {
  const table = new Table();

  table.push({
    'Request ID': chalk.red(chalk.bold(id)),
    Method: chalk.green(chalk.bold(method)),
    'Executed At': chalk.green(chalk.bold(new Date(1000 * executedAt).toISOString())),
  });

  if (queryParameters && queryParameters.size > 0) {
    table.push({ 'Query Parameters': formatEntries(queryParameters) });
  }

  if (formData && formData.size > 0) {
    table.push({ 'Form Data': formatEntries(formData) });
  }

  return table.toString();
};

export default createRequestDetailsTable;
