const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Exercise 1: ', () => {
  it('Verify uppercase function',(done) => {
    uppercase('ola mundo', (result) => {
      expect(result).toBe('OLA MUNDO');
      done();
    })
  });
});