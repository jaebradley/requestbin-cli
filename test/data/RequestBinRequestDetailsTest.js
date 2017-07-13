import chai from 'chai';

import { Map } from 'immutable';

import RequestBinRequestDetails from '../../src/data/RequestBinRequestDetails';

chai.should();

describe('Test RequestBinRequestDetails', () => {
  describe('#from', () => {
    it('should return new RequestBinRequestDetails', () => {
      const id = 'id';
      const method = 'method';
      const executedAt = 'executedAt';
      const queryParameters = { foo: 'bar' };
      const formData = { baz: 'boo' };

      const details = {
        id,
        method,
        time: executedAt,
        query_string: queryParameters,
        form_data: formData,
      };

      const expected = new RequestBinRequestDetails({
        id,
        method,
        executedAt,
        queryParameters: Map(queryParameters),
        formData: Map(formData),
      });

      RequestBinRequestDetails.from(details).should.deep.eql(expected);
    });
  });

  describe('#constructor', () => {
    it('should return default RequestBinRequestDetails', () => {
      const details = new RequestBinRequestDetails();
      details.id.should.eql('');
      details.method.should.eql('');
      details.executedAt.should.eql(0);
      details.queryParameters.should.eql(Map());
      details.formData.should.eql(Map());
    });
  });
});
