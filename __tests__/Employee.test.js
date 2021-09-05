const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Bob', '1234', 'bob@domain.com');

  expect(employee.name).toBe('Bob');
  expect(employee.id).toBe('1234');
  expect(employee.email).toBe('bob@domain.com');
});

test("gets employee name", () => {
  const employee = new Employee('Bob', '1234', 'bob@domain.com');
  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets employee id", () => {
  const employee = new Employee('Bob', '1234', 'bob@domain.com');
  expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets employee email", () => {
  const employee = new Employee('Bob', '1234', 'bob@domain.com');
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets employee role", () => {
  const employee = new Employee('Bob', '1234', 'bob@domain.com');
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});





