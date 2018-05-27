const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33,11);

  if (res !== 44) {
    throw new Error(`Value not correct. Expected: 44, got: ${res}`);
  }
});

it('should add square a number', () => {
  let sq = utils.square(5);
  if (sq !== 25) {
    throw new Error(`Value not correct. Expected: 25, got: ${sq}`);
  }
});
