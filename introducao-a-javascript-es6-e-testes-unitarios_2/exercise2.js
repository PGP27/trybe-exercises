const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adManha = (lesson2, chave, valor) => {
      lesson2[chave] = valor;
  }

  adManha(lesson2, 'turno', 'manhã');

  const keys = (lesson) => Object.keys(lesson);

  const size = (lesson) => Object.keys(lesson).length;

  const values = (lesson) => Object.values(lesson);

  const allLessons = {

  }

  allLessons.lesson1 = Object.assign({}, lesson1);
  allLessons.lesson2 = Object.assign({}, lesson2);
  allLessons.lesson3 = Object.assign({}, lesson3);

  const alunos = (obj) => {
      let a = 0;
      for (index in obj) {
          a += obj[index].numeroEstudantes;
      }
      return a;
  }

  const posKey = (obj, i) => Object.keys(obj)[i];

  const verify = (obj, key, value) => {
      const entries = Object.entries(obj);
      for (let i = 0; i < entries.length; i++) {
          if (key === entries[i][0] && value === entries[i][1]) {
              return true;
          }
      }
      return false;
  }

  console.log(verify(lesson1, 'materia', 'Matemática'));