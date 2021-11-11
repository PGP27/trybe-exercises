const fat = (num) => num === 1 ? 1 : num === 2 ? 2 : num * fat(num - 1);

console.log(fat(4));