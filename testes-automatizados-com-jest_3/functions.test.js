const functions = require('./functions');

describe('Exercício 1: ', () => {
  it('Testa se a função "rng100" foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    functions.rng100 = jest.fn();
    functions.rng100.mockReturnValue(10);
    functions.rng100();
    expect(functions.rng100).toHaveBeenCalled();
    expect(functions.rng100()).toBe(10);
    expect(functions.rng100).toHaveBeenCalledTimes(2);
  });
});

describe('Exercício 2: ', () => {
  it('Testes necessários para nova implementação da função "rng100", que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
    functions.rng100 = jest.fn();
    functions.rng100.mockImplementationOnce((a, b) => a / b);
    expect(functions.rng100(6, 3)).toBe(2);
    expect(functions.rng100).toHaveBeenCalled();
    functions.rng100.mockReturnValue(20);
    functions.rng100();
    expect(functions.rng100()).toBe(20);
    expect(functions.rng100).toHaveBeenCalledTimes(3);
  });
});

describe('Exercício 3: ', () => {
  it('Testes necessários para nova implementação da função "rng100", que receba três parâmetros e retorne sua multiplicação', () => {
    functions.rng100 = jest.fn();
    functions.rng100.mockImplementationOnce((a, b, c) => a * b * c);
    expect(functions.rng100(2, 4, 5)).toBe(40);
    expect(functions.rng100).toHaveBeenCalled();
    expect(functions.rng100).toHaveBeenCalledWith(2, 4, 5);
    expect(functions.rng100).toHaveBeenCalledTimes(1);
    functions.rng100.mockReset();
  });
  it('Testes necessários para nova implementação da função "rng100", que receba um parâmetro e retorne seu dobro', () => {
    functions.rng100 = jest.fn();
    functions.rng100.mockImplementationOnce((a) => a + a);
    expect(functions.rng100(6)).toBe(12);
    expect(functions.rng100).toHaveBeenCalled();
    expect(functions.rng100).toHaveBeenCalledWith(6);
    expect(functions.rng100).toHaveBeenCalledTimes(1);
    functions.rng100.mockReset();
  });
});