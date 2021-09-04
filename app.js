const inquirer = require('inquirer');
const fs = require('fs');

const promptManager = () => {
  return inquirer
    .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is your team manager's name? (Required)",
          validate: managerName => {
            if (managerName) {
                return true;
            } else {
                console.log("Please enter your team manager's name!");
                return false;
            }
          }
        },
        {
          type: 'input',
          name: 'managerID',
          message: "What is your team manager's employee ID? (Required)",
          validate: managerName => {
            if (managerName) {
                return true;
            } else {
                console.log("Please enter your team manager's employee ID!");
                return false;
            }
          }
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is your team manager's email address? (Required)",
          validate: managerEmail => {
            if (managerEmail) {
                return true;
            } else {
                console.log("Please enter your team manager's email address!");
                return false;
            }
          }
        },
        {
          type: 'input',
          name: 'managerOffice',
          message: "What is your team manager's office number? (Required)",
          validate: managerOffice => {
            if (managerOffice) {
              if (typeof managerOffice !== 'number') {
                console.log("Please enter a number!");
                return false;
              }
                return true;
            } else {
                console.log("Please enter your team manager's office number!");
                return false;
            }
          }
        }
    ]);
}

const promptOtherMembers = () => {
  console.log('prompt other members');
}

promptManager()
  .then(promptOtherMembers)
  .catch(err => {
    console.log(err);
});