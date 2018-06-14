/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Map } from 'immutable';

import Table from 'cli-table3';

import RequestBinRequestDetailsTable from '../../src/tables/RequestBinRequestDetailsTable';

chai.should();
chai.use(sinonChai);

describe('Test RequestBinRequestDetailsTable', () => {
  let sandbox;
  const id = 'id';
  const method = 'method';
  const executedAt = 0;
  const queryParameters = Map({ foo: 'bar', baz: 'boo' });
  const formData = Map({ jae: 'baebae', bae: 'jadley' });
  const fullDetails = {
    id,
    method,
    executedAt,
    queryParameters,
    formData,
  };
  const detailsWithoutQueryParameters = {
    id,
    method,
    executedAt,
    queryParameters: Map(),
    formData,
  };
  const detailsWithoutFormData = {
    id,
    method,
    executedAt,
    queryParameters,
    formData: Map(),
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#constructor', () => {
    it('should return details', () => {
      const table = new RequestBinRequestDetailsTable(fullDetails);
      table.details.should.eql(fullDetails);
    });
  });

  describe('#build', () => {
    const formattedId = 'formattedId';
    const formattedMethod = 'formattedMethod';
    const formattedExecutionTime = 'formattedExecutionTime';
    const formattedQueryParameters = 'formattedQueryParameters';
    const formattedFormData = 'formattedFormData';
    const tableString = 'tableString';

    it('should return a table with all rows', () => {
      const table = new RequestBinRequestDetailsTable(fullDetails);
      const stubbedFormattedId = sandbox.stub(table, 'getFormattedId').returns(formattedId);
      const stubbedFormattedMethod = sandbox.stub(table, 'getFormattedMethod').returns(formattedMethod);
      const stubbedFormattedExecutionTime = sandbox.stub(table, 'getFormattedExecutionTime').returns(formattedExecutionTime);
      const stubbedFormattedQueryParameters = sandbox.stub(table, 'getFormattedQueryParameters').returns(formattedQueryParameters);
      const stubbedFormattedFormData = sandbox.stub(table, 'getFormattedFormData').returns(formattedFormData);
      const stubbedTablePush = sandbox.stub(Table.prototype, 'push');
      const stubbedTableToString = sandbox.stub(Table.prototype, 'toString').returns(tableString);
      table.build();
      stubbedFormattedId.should.have.been.calledOnce;
      stubbedFormattedMethod.should.have.been.calledOnce;
      stubbedFormattedExecutionTime.should.have.been.calledOnce;
      stubbedFormattedQueryParameters.should.have.been.calledOnce;
      stubbedFormattedFormData.should.have.been.calledOnce;
      stubbedTablePush.should.have.been.calledWith(
        { 'Request ID': formattedId },
        { Method: formattedMethod },
        { 'Executed At': formattedExecutionTime },
      );
      stubbedTablePush.should.have.been.calledWith({
        'Query Parameters': formattedQueryParameters,
      });
      stubbedTablePush.should.have.been.calledWith({
        'Form Data': formattedFormData,
      });
      stubbedTableToString.should.have.been.calledOnce;
    });

    it('should return table without query parameters', () => {
      const table = new RequestBinRequestDetailsTable(detailsWithoutQueryParameters);
      const stubbedFormattedId = sandbox.stub(table, 'getFormattedId').returns(formattedId);
      const stubbedFormattedMethod = sandbox.stub(table, 'getFormattedMethod').returns(formattedMethod);
      const stubbedFormattedExecutionTime = sandbox.stub(table, 'getFormattedExecutionTime').returns(formattedExecutionTime);
      const stubbedFormattedQueryParameters = sandbox.stub(table, 'getFormattedQueryParameters').returns([]);
      const stubbedFormattedFormData = sandbox.stub(table, 'getFormattedFormData').returns(formattedFormData);
      const stubbedTablePush = sandbox.stub(Table.prototype, 'push');
      const stubbedTableToString = sandbox.stub(Table.prototype, 'toString').returns(tableString);
      table.build();
      stubbedFormattedId.should.have.been.calledOnce;
      stubbedFormattedMethod.should.have.been.calledOnce;
      stubbedFormattedExecutionTime.should.have.been.calledOnce;
      stubbedFormattedQueryParameters.should.have.been.calledOnce;
      stubbedFormattedFormData.should.have.been.calledOnce;
      stubbedTablePush.should.have.been.calledWith(
        { 'Request ID': formattedId },
        { Method: formattedMethod },
        { 'Executed At': formattedExecutionTime },
      );
      stubbedTablePush.should.have.been.calledWith({
        'Form Data': formattedFormData,
      });
      stubbedTableToString.should.have.been.calledOnce;
    });

    it('should return table without form data', () => {
      const table = new RequestBinRequestDetailsTable(detailsWithoutQueryParameters);
      const stubbedFormattedId = sandbox.stub(table, 'getFormattedId').returns(formattedId);
      const stubbedFormattedMethod = sandbox.stub(table, 'getFormattedMethod').returns(formattedMethod);
      const stubbedFormattedExecutionTime = sandbox.stub(table, 'getFormattedExecutionTime').returns(formattedExecutionTime);
      const stubbedFormattedQueryParameters = sandbox.stub(table, 'getFormattedQueryParameters').returns(formattedQueryParameters);
      const stubbedFormattedFormData = sandbox.stub(table, 'getFormattedFormData').returns([]);
      const stubbedTablePush = sandbox.stub(Table.prototype, 'push');
      const stubbedTableToString = sandbox.stub(Table.prototype, 'toString').returns(tableString);
      table.build();
      stubbedFormattedId.should.have.been.calledOnce;
      stubbedFormattedMethod.should.have.been.calledOnce;
      stubbedFormattedExecutionTime.should.have.been.calledOnce;
      stubbedFormattedQueryParameters.should.have.been.calledOnce;
      stubbedFormattedFormData.should.have.been.calledOnce;
      stubbedTablePush.should.have.been.calledWith(
        { 'Request ID': formattedId },
        { Method: formattedMethod },
        { 'Executed At': formattedExecutionTime },
      );
      stubbedTablePush.should.have.been.calledWith({
        'Query Parameters': formattedQueryParameters,
      });
      stubbedTableToString.should.have.been.calledOnce;
    });

    it('should return a table with all rows (integration test)', () => {
      const table = new RequestBinRequestDetailsTable(fullDetails);
      const expected = '\u001b[90m┌──────────────────\u001b[39m\u001b[90m┬────────────────────────────────┐\u001b[39m\n\u001b[90m│\u001b[39m Request ID       \u001b[90m│\u001b[39m \u001b[31m\u001b[1mid\u001b[22m\u001b[39m                             \u001b[90m│\u001b[39m\n\u001b[90m├──────────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Method           \u001b[90m│\u001b[39m \u001b[32m\u001b[1mmethod\u001b[22m\u001b[39m                         \u001b[90m│\u001b[39m\n\u001b[90m├──────────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Executed At      \u001b[90m│\u001b[39m \u001b[36m\u001b[1mWed, Dec 31st 1969, 7:00:00 PM\u001b[22m\u001b[39m \u001b[90m│\u001b[39m\n\u001b[90m├──────────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Query Parameters \u001b[90m│\u001b[39m \u001b[1m\u001b[32mfoo\u001b[39m\u001b[22m: \u001b[31mbar\u001b[39m                       \u001b[90m│\u001b[39m\n\u001b[90m│\u001b[39m                  \u001b[90m│\u001b[39m \u001b[1m\u001b[32mbaz\u001b[39m\u001b[22m: \u001b[31mboo\u001b[39m                       \u001b[90m│\u001b[39m\n\u001b[90m├──────────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Form Data        \u001b[90m│\u001b[39m \u001b[1m\u001b[32mjae\u001b[39m\u001b[22m: \u001b[31mbaebae\u001b[39m                    \u001b[90m│\u001b[39m\n\u001b[90m│\u001b[39m                  \u001b[90m│\u001b[39m \u001b[1m\u001b[32mbae\u001b[39m\u001b[22m: \u001b[31mjadley\u001b[39m                    \u001b[90m│\u001b[39m\n\u001b[90m└──────────────────\u001b[39m\u001b[90m┴────────────────────────────────┘\u001b[39m';
      table.build().should.eql(expected);
      console.log(`Expected:\n ${expected}`);
    });

    it('should return a table without query parameters (integration test)', () => {
      const table = new RequestBinRequestDetailsTable(detailsWithoutQueryParameters);
      const expected = '\u001b[90m┌─────────────\u001b[39m\u001b[90m┬────────────────────────────────┐\u001b[39m\n\u001b[90m│\u001b[39m Request ID  \u001b[90m│\u001b[39m \u001b[31m\u001b[1mid\u001b[22m\u001b[39m                             \u001b[90m│\u001b[39m\n\u001b[90m├─────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Method      \u001b[90m│\u001b[39m \u001b[32m\u001b[1mmethod\u001b[22m\u001b[39m                         \u001b[90m│\u001b[39m\n\u001b[90m├─────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Executed At \u001b[90m│\u001b[39m \u001b[36m\u001b[1mWed, Dec 31st 1969, 7:00:00 PM\u001b[22m\u001b[39m \u001b[90m│\u001b[39m\n\u001b[90m├─────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Form Data   \u001b[90m│\u001b[39m \u001b[1m\u001b[32mjae\u001b[39m\u001b[22m: \u001b[31mbaebae\u001b[39m                    \u001b[90m│\u001b[39m\n\u001b[90m│\u001b[39m             \u001b[90m│\u001b[39m \u001b[1m\u001b[32mbae\u001b[39m\u001b[22m: \u001b[31mjadley\u001b[39m                    \u001b[90m│\u001b[39m\n\u001b[90m└─────────────\u001b[39m\u001b[90m┴────────────────────────────────┘\u001b[39m';
      table.build().should.eql(expected);
      console.log(`Expected:\n ${expected}`);
    });

    it('should return a table without form data (integration test)', () => {
      const table = new RequestBinRequestDetailsTable(detailsWithoutFormData);
      const expected = '\u001b[90m┌──────────────────\u001b[39m\u001b[90m┬────────────────────────────────┐\u001b[39m\n\u001b[90m│\u001b[39m Request ID       \u001b[90m│\u001b[39m \u001b[31m\u001b[1mid\u001b[22m\u001b[39m                             \u001b[90m│\u001b[39m\n\u001b[90m├──────────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Method           \u001b[90m│\u001b[39m \u001b[32m\u001b[1mmethod\u001b[22m\u001b[39m                         \u001b[90m│\u001b[39m\n\u001b[90m├──────────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Executed At      \u001b[90m│\u001b[39m \u001b[36m\u001b[1mWed, Dec 31st 1969, 7:00:00 PM\u001b[22m\u001b[39m \u001b[90m│\u001b[39m\n\u001b[90m├──────────────────\u001b[39m\u001b[90m┼────────────────────────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Query Parameters \u001b[90m│\u001b[39m \u001b[1m\u001b[32mfoo\u001b[39m\u001b[22m: \u001b[31mbar\u001b[39m                       \u001b[90m│\u001b[39m\n\u001b[90m│\u001b[39m                  \u001b[90m│\u001b[39m \u001b[1m\u001b[32mbaz\u001b[39m\u001b[22m: \u001b[31mboo\u001b[39m                       \u001b[90m│\u001b[39m\n\u001b[90m└──────────────────\u001b[39m\u001b[90m┴────────────────────────────────┘\u001b[39m';
      table.build().should.eql(expected);
      console.log(`Expected:\n ${expected}`);
    });
  });

  describe('#getFormattedId', () => {
    const table = new RequestBinRequestDetailsTable({ id });

    it('should get formatted id', () => {
      table.getFormattedId().should.eql('\u001b[31m\u001b[1mid\u001b[22m\u001b[39m');
    });
  });

  describe('#getFormattedMethod', () => {
    const table = new RequestBinRequestDetailsTable({ method });

    it('should get formatted method', () => {
      table.getFormattedMethod().should.eql('\u001b[32m\u001b[1mmethod\u001b[22m\u001b[39m');
    });
  });

  describe('#getFormattedExecutionTime', () => {
    const table = new RequestBinRequestDetailsTable({ executedAt });

    it('should get formatted execution time', () => {
      table.getFormattedExecutionTime().should.eql('\u001b[36m\u001b[1mWed, Dec 31st 1969, 7:00:00 PM\u001b[22m\u001b[39m');
    });
  });

  describe('#getFormattedQueryParameters', () => {
    it('should get formatted query parameters', () => {
      const table = new RequestBinRequestDetailsTable({ queryParameters });
      table.getFormattedQueryParameters().should.eql('\u001b[1m\u001b[32mfoo\u001b[39m\u001b[22m: \u001b[31mbar\u001b[39m\n\u001b[1m\u001b[32mbaz\u001b[39m\u001b[22m: \u001b[31mboo\u001b[39m');
    });
  });

  describe('#getFormattedFormData', () => {
    it('should get formatted form data', () => {
      const table = new RequestBinRequestDetailsTable({ formData });
      table.getFormattedFormData().should.eql('\u001b[1m\u001b[32mjae\u001b[39m\u001b[22m: \u001b[31mbaebae\u001b[39m\n\u001b[1m\u001b[32mbae\u001b[39m\u001b[22m: \u001b[31mjadley\u001b[39m');
    });
  });

  describe('#getFormattedEntry', () => {
    it('should get formatted entry', () => {
      const key = 'key';
      const value = 'value';
      RequestBinRequestDetailsTable.getFormattedEntry(key, value).should.eql('\u001b[1m\u001b[32mkey\u001b[39m\u001b[22m: \u001b[31mvalue\u001b[39m');
    });
  });
});
