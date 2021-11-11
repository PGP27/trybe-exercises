function encode(string) {
    let e = string;
    for (let i = 0; i < e.length; i++) {
      if (e[i] == 'a') {
        e = e.replace('a', '1');
      }
      else if (e[i] == 'e') {
        e = e.replace('e', '2');
      }
      else if (e[i] == 'i') {
        e = e.replace('i', '3');
      }
      else if (e[i] == 'o') {
        e = e.replace('o', '4');
      }
      else if (e[i] == 'u') {
        e = e.replace('u', '5');
      }
    }
    return e;
  }

  function decode(string) {
    let d = string;
    for (let i = 0; i < string.length; i++) {
      if (d[i] == '1') {
        d = d.replace('1', 'a');
      }
      else if (d[i] == '2') {
        d = d.replace('2', 'e');
      }
      else if (d[i] == '3') {
        d = d.replace('3', 'i');
      }
      else if (d[i] == '4') {
        d = d.replace('4', 'o');
      }
      else if (d[i] == '5') {
        d = d.replace('5', 'u');
      }
    }
    return d;
  }

  function techList(array, name) {
    if (array[0] == null) {
      return "Vazio!";
    }
    let skills = [];
    let vet = array.sort();
    for (let i = 0; i < array.length; i++){
      skills[i] = {
        tech: vet[i],
        name: name
      }
    }
    return skills;
  }

  function hydrate(string) {
    let cont = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == '1') {
        cont += 1;
      }
      if (string[i] =='2') {
        cont += 2;
      }
      if (string[i] == '3') {
        cont += 3;
      }
      if (string[i] == '4') {
        cont += 4;
      }
      if (string[i] == '5') {
        cont += 5;
      }
      if (string[i] == '6') {
        cont += 6;
      }
      if (string[i] == '7') {
        cont += 7;
      }
      if (string[i] == '8') {
        cont += 8;
      }
      if (string[i] == '9') {
        cont += 9;
      }
    }
    if (cont == 1){
      return cont + " copo de água"
    }
    return cont + " copos de água"
  }

  describe('Exercise 1', () => {
    // it('Parte 1', () => {
    //   
    // });
    it('Parte 2', () => {
      expect(encode('a e i o u')).toEqual('1 2 3 4 5');
    });
    it('Parte 3', () => {
      expect(decode('12345')).toEqual('aeiou');
    });
    it('Parte 4', () => {
      expect(encode('rty')).toEqual('rty');
      expect(decode('678')).toEqual('678');
    });
    it('Parte 5', () => {
      const a = 'ola mundo'
      const b = '4l1 m5nd4'
      expect(encode(a)).toEqual(b);
      expect(decode(b)).toEqual(a);
    });
  });

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});