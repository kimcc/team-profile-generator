const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
  const intern = new Intern('Bob', '1234', 'bob@domain.com', 'My University');

  expect(intern.name).toBe('Bob');
  expect(intern.id).toBe('1234');
  expect(intern.email).toBe('bob@domain.com');
  expect(intern.school).toBe('My University');
});

test("gets intern name", () => {
  const intern = new Intern('Bob', '1234', 'bob@domain.com', 'My University');
  expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("gets intern id", () => {
  const intern = new Intern('Bob', '1234', 'bob@domain.com', 'My University');
  expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test("gets intern email", () => {
  const intern = new Intern('Bob', '1234', 'bob@domain.com', 'My University');
  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets intern school", () => {
  const intern = new Intern('Bob', '1234', 'bob@domain.com', 'My University');
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets employee role", () => {
  const intern = new Intern('Bob', '1234', 'bob@domain.com', 'My University');
  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});