const functions2 = require('./functions2');

describe('Exercício 4: ', () => {
  it('Testes necessários para nova implementação da função "upperCase"', () => {
    const mockUpperCase = jest.spyOn(functions2, 'upperCase');
    mockUpperCase.mockImplementationOnce((str) => str.toLowerCase());
    expect(mockUpperCase('OI Mundo')).toBe('oi mundo');
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledWith('OI Mundo');
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase('OI Mundo')).toBe('OI MUNDO');
    expect(mockUpperCase).toHaveBeenCalledWith('OI Mundo');
    expect(mockUpperCase).toHaveBeenCalledTimes(2);
  });
  it('Testes necessários para nova implementação da função "firstLetter"', () => {
    const mockfirstLetter = jest.spyOn(functions2, 'firstLetter');
    mockfirstLetter.mockImplementationOnce((str) => str[str.length - 1]);
    expect(mockfirstLetter('Olá teste')).toBe('e');
    expect(mockfirstLetter).toHaveBeenCalled();
    expect(mockfirstLetter).toHaveBeenCalledWith('Olá teste');
    expect(mockfirstLetter).toHaveBeenCalledTimes(1);
    expect(mockfirstLetter('Olá teste')).toBe('O');
    expect(mockfirstLetter).toHaveBeenCalledTimes(2);
  });
  it('Testes necessários para nova implementação da função "concat"', () => {
    const mockConcat = jest.spyOn(functions2, 'concat');
    mockConcat.mockImplementationOnce((str1, str2, str3) => `${str1}${str2}${str3}`);
    expect(mockConcat('olá', ' mundo ', 'lindo')).toBe('olá mundo lindo');
    expect(mockConcat).toHaveBeenCalled();
    expect(mockConcat).toHaveBeenCalledWith('olá', ' mundo ', 'lindo');
    expect(mockConcat).toHaveBeenCalledTimes(1);
    expect(mockConcat('aprendendo ', 'a codar')).toBe('aprendendo a codar');
    expect(mockConcat).toHaveBeenCalledTimes(2);
  });
});