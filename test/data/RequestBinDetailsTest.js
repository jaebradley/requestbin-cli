import chai from 'chai';

import { List } from 'immutable';

import RequestBinDetails from '../../src/data/RequestBinDetails';

chai.should();

describe('Test RequestBinDetails', () => {
  describe('#from', () => {
    it('should return a new RequestBinDetails', () => {
      const name = 'name';
      const isPrivate = 'isPrivate';
      const color = 'color';
      const requestCount = 'requestCount';
      const details = {
        name,
        private: isPrivate,
        color,
        request_count: requestCount,
      };
      const expected = new RequestBinDetails({
        id: name,
        isPrivate,
        colors: List(color),
        requestCount,
      });
      RequestBinDetails.from(details).should.deep.eql(expected);
    });
  });

  describe('#constructor', () => {
    it('should return a default RequestBinDetails', () => {
      const details = new RequestBinDetails();
      details.id.should.eql('');
      details.isPrivate.should.eql(false);
      details.colors.should.eql(List());
      details.requestCount.should.eql(0);
    });
  });
});
