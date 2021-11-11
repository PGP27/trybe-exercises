function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Exercise 1', () => {
  it('Parte 1', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('Parte 2', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Parte 3', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('Parte 4', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('Exercise 2', () => {
  it('Parte 1', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Parte 2', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Parte 3', () => {
    const a = [1, 2, 3, 4];
    expect(myRemove(a, 5)).toEqual(a);
  });
  it('Parte 4', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercise 3', () => {
  it('Parte 1', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Parte 2', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Parte 3', () => {
    const a = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(a, 6)).toEqual(a);
  });
  it('Parte 4', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercise 4', () => {
  it('Parte 1', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('Parte 2', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });
  it('Parte 3', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });
  it('Parte 4', () => {
    expect(myFizzBuzz(11)).toEqual(11);
  });
  it('Parte 5', () => {
    expect(myFizzBuzz('10')).toEqual(false);
  });
});

describe('Exercise 5', () => {
  it('Parte 1', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Parte 2', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('Parte 3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});