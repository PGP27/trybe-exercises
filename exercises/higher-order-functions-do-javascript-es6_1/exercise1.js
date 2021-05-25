const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
  return employees;
};

const contratada = (nome) => ({
  nomeCompleto: nome,
  email: `${nome}@trybe.com`,
});

console.log(newEmployees(contratada));