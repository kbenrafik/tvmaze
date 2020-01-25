import {
  makeClient
} from '../index';

describe('makeClient', () => {
  it('should make a client', () => {
    const client = makeClient();
    expect(client).toMatchSnapshot();
  })
});
