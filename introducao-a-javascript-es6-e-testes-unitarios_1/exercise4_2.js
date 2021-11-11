let skills = ['HTML','CSS','JS','BootStrap','Responsividade'];
skills.sort();

const f1 = (string) => {
    let s = "Raio-X do T-Rex";
    s = s.replace('x', string);
    s = s.replace('X', string);
    return s;
}

console.log(f1('Trybe'));

const f2 = (string) => `Tryber Pedro aqui! Minhas cinco principais habilidades são: ${skills} ${string}`;

console.log(f2(f1('Trybe')));