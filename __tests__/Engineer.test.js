const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const engineer = new Engineer('Bob', '1234', 'bob@domain.com', 'https://github.com/bob');

  expect(engineer.name).toBe('Bob');
  expect(engineer.id).toBe('1234');
  expect(engineer.email).toBe('bob@domain.com');
  expect(engineer.github).toBe('https://github.com/bob');
});

test("gets engineer name", () => {
  const engineer = new Engineer('Bob', '1234', 'bob@domain.com', 'https://github.com/bob');
  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets engineer id", () => {
  const engineer = new Engineer('Bob', '1234', 'bob@domain.com', 'https://github.com/bob');
  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test("gets engineer email", () => {
  const engineer = new Engineer('Bob', '1234', 'bob@domain.com', 'https://github.com/bob');
  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets engineer github", () => {
  const engineer = new Engineer('Bob', '1234', 'bob@domain.com', 'https://github.com/bob');
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("gets employee role", () => {
  const engineer = new Engineer('Bob', '1234', 'bob@domain.com', 'https://github.com/bob');
  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});