const api = require('./api');
const fetch = require("node-fetch");

describe('Exercício 6: ', () => {
  const getApi = jest.spyOn(api, 'getApi');
  afterEach(getApi.mockReset);

  it('Teste para caso a promise resolva', async () => {
    getApi.mockResolvedValue('request sucess');
    getApi();
    expect(getApi).toHaveBeenCalled();
    expect(getApi).toHaveBeenCalledTimes(1);
    expect(getApi()).resolves.toBe('request sucess');
    expect(getApi).toHaveBeenCalledTimes(2);
  });

  it('Teste para caso a promise seja rejeitada', async () => {
    getApi.mockResolvedValue('request failed');
    getApi();
    expect(getApi).toHaveBeenCalled();
    expect(getApi).toHaveBeenCalledTimes(1);
    expect(getApi()).resolves.toBe('request failed');
    expect(getApi).toHaveBeenCalledTimes(2);
  });
});