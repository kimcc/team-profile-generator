const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
  const manager = new Manager('Bob', '1234', 'bob@domain.com', '9876');

  expect(manager.name).toBe('Bob');
  expect(manager.id).toBe('1234');
  expect(manager.email).toBe('bob@domain.com');
  expect(manager.officeNumber).toBe('9876');
});

test("gets manager name", () => {
  const manager = new Manager('Bob', '1234', 'bob@domain.com', '9876');
  expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("gets manager id", () => {
  const manager = new Manager('Bob', '1234', 'bob@domain.com', '9876');
  expect(manager.getId()).toEqual(expect.stringContaining(manager.id));
});

test("gets manager email", () => {
  const manager = new Manager('Bob', '1234', 'bob@domain.com', '9876');
  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("gets employee role", () => {
  const manager = new Manager('Bob', '1234', 'bob@domain.com', '9876');
  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});