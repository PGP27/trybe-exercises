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