/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Table from 'cli-table2';

import RequestBinDetailsTable from '../../src/tables/RequestBinDetailsTable';

chai.should();
chai.use(sinonChai);

describe('Test RequestBinDetailsTable', () => {
  let sandbox;
  const id = 'id';
  const requestCount = 'requestCount';
  const isPrivate = 'isPrivate';
  const colorValues = [1, 2];
  const details = {
    id,
    requestCount,
    isPrivate,
    colors: colorValues,
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#constructor', () => {
    it('should return details', () => {
      const table = new RequestBinDetailsTable(details);
      table.details.should.eql(details);
    });
  });

  describe('#build', () => {
    it('should return a table', () => {
      const formattedId = 'formattedId';
      const formattedRequestCounts = 'formattedRequestCounts';
      const formattedIsPrivate = 'formattedIsPrivate';
      const formattedColors = 'formattedColors';
      const tableString = 'tableString';
      const table = new RequestBinDetailsTable(details);
      const stubbedFormattedId = sandbox.stub(table, 'getFormattedId').returns(formattedId);
      const stubbedFormattedRequestCounts = sandbox.stub(table, 'getFormattedRequestCounts').returns(formattedRequestCounts);
      const stubbedFormattedIsPrivate = sandbox.stub(table, 'getFormattedIsPrivate').returns(formattedIsPrivate);
      const stubbedFormattedColors = sandbox.stub(table, 'getFormattedColors').returns(formattedColors);
      const stubbedTablePush = sandbox.stub(Table.prototype, 'push');
      const stubbedTableToString = sandbox.stub(Table.prototype, 'toString').returns(tableString);
      table.build();
      stubbedFormattedId.should.have.been.calledOnce;
      stubbedFormattedRequestCounts.should.have.been.calledOnce;
      stubbedFormattedIsPrivate.should.have.been.calledOnce;
      stubbedFormattedColors.should.have.been.calledOnce;
      stubbedTablePush.should.have.been.calledWith(
        { 'Bin ID': formattedId },
        { Requests: formattedRequestCounts },
        { Private: formattedIsPrivate },
        { Colors: formattedColors },
      );
      stubbedTableToString.should.have.been.calledOnce;
    });

    it('should return a table (integration test)', () => {
      const expected = '\u001b[90m┌──────────\u001b[39m\u001b[90m┬──────────────┐\u001b[39m\n\u001b[90m│\u001b[39m Bin ID   \u001b[90m│\u001b[39m \u001b[31m\u001b[1mid\u001b[22m\u001b[39m           \u001b[90m│\u001b[39m\n\u001b[90m├──────────\u001b[39m\u001b[90m┼──────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Requests \u001b[90m│\u001b[39m \u001b[32m\u001b[1mrequestCount\u001b[22m\u001b[39m \u001b[90m│\u001b[39m\n\u001b[90m├──────────\u001b[39m\u001b[90m┼──────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Private  \u001b[90m│\u001b[39m \u001b[36m\u001b[1misPrivate\u001b[22m\u001b[39m    \u001b[90m│\u001b[39m\n\u001b[90m├──────────\u001b[39m\u001b[90m┼──────────────┤\u001b[39m\n\u001b[90m│\u001b[39m Colors   \u001b[90m│\u001b[39m \u001b[34m1, 2\u001b[39m         \u001b[90m│\u001b[39m\n\u001b[90m└──────────\u001b[39m\u001b[90m┴──────────────┘\u001b[39m';
      const table = new RequestBinDetailsTable(details);
      table.build().should.eql(expected);
      console.log(`Expected:\n ${expected}`);
    });
  });

  describe('#getFormattedId', () => {
    it('should get formatted id', () => {
      const table = new RequestBinDetailsTable(details);
      table.getFormattedId().should.eql('\u001b[31m\u001b[1mid\u001b[22m\u001b[39m');
    });
  });

  describe('#getFormattedRequestCounts', () => {
    it('should get formatted request counts', () => {
      const table = new RequestBinDetailsTable(details); table.getFormattedRequestCounts().should.eql('\u001b[32m\u001b[1mrequestCount\u001b[22m\u001b[39m');
    });
  });

  describe('#getFormattedIsPrivate', () => {
    it('should get formatted private', () => {
      const table = new RequestBinDetailsTable(details);
      table.getFormattedIsPrivate().should.eql('\u001b[36m\u001b[1misPrivate\u001b[22m\u001b[39m');
    });
  });

  describe('#getFormattedColors', () => {
    it('should get formatted colors', () => {
      const table = new RequestBinDetailsTable(details);
      table.getFormattedColors().should.eql('\u001b[34m1, 2\u001b[39m');
    });
  });
});
