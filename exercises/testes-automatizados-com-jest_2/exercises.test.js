const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Exercise 1: ', () => {
  it('Verify uppercase function',(done) => {
    uppercase('ola mundo', (result) => {
      expect(result).toBe('OLA MUNDO');
      done();
    });
  });
});

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };
  
      return reject({ error: 'User with ' + id + ' not found.' });
  });
};
  
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Exercise 2 e 3: ', () => {
  it('Verify find user with getUserName function', async () => {
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  });
  it('Verify not find user with getUserName function', async () => {
    try{
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 1 + ' not found.' });
    }
  });
});

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Exercise 4: ', () => {
  it('Verify find "sd-01-week4-5-project-todo-list" and "sd-01-week4-5-project-meme-generator" with getRepos function', async () => {
    const array = await getRepos('https://api.github.com/orgs/tryber/repos');
    const arrayFind = [];
    array.forEach((arr) => {
      if(arr === 'sd-01-week4-5-project-todo-list' || arr === 'sd-01-week4-5-project-meme-generator' ) {
        arrayFind.push(arr);
      }
    });
    expect(arrayFind).toEqual(['sd-01-week4-5-project-meme-generator', 'sd-01-week4-5-project-todo-list']);
  });
});

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});