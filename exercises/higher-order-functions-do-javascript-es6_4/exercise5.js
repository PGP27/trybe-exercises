const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

const containsA = () => names.reduce((acc, nome) => {
    let name = nome.toLocaleLowerCase();
    let split = name.split('a');
    return acc + name.length - split.reduce((ac, str) => ac + str.length, 0);
}, 0);

assert.deepStrictEqual(containsA(), 20);