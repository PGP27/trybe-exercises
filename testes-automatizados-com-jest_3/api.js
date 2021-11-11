const fetch = require("node-fetch");

const getApi = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const obj = await response.json();
    return obj;
  }
  catch (error) {
    console.log(error);
  }
};

module.exports = {
  getApi,
};