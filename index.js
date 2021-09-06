const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./src/generate-site.js');
const generatePage = require('./src/page-template');

const employeeArray = [];

// Prompt to fill out manager information
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
          validate: managerID => {
            if (managerID) {
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
            if (isNaN(managerOffice) || !managerOffice) {
              console.log("Please enter a number for your team manager's office number!");
              return false;
            } else {
              return true;
            }
          }
        }
    ])
    .then (employeeData => {
      const { managerName, managerID, managerEmail, managerOffice } = employeeData; // Gets the values so we can use them to construct the object
      const manager = new Manager(managerName, managerID, managerEmail, managerOffice);
      //console.log(manager);
      employeeArray.push(manager);
    })
    .then(promptOtherMembers);
}

// Prompt the user to add an engineer, intern or finish building their team.
// If they pick finish building my team, they will exit out. Otherwise, it will prompt them again.
const promptOtherMembers = () => {
  return inquirer
    .prompt([
    {
      type: 'list',
      name: 'next',
      message: 'What would you like to do next?',
      choices: ['Add an engineer', 'Add an intern', new inquirer.Separator(), 'Finish building my team']
    },
    {
      type: 'input',
      name: 'engineerName',
      message: "What is your engineer's name? (Required)",
      when: answers => {
        return answers.next === 'Add an engineer'
      },
      validate: engineerName => {
        if (engineerName) {
          return true;
        } else {
          console.log("Please enter your engineer's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerID',
      message: "What is your engineer's employee ID? (Required)",
      when: answers => {
        return answers.next === 'Add an engineer'
      },
      validate: engineerID => {
        if (engineerID) {
          return true;
        } else {
          console.log("Please enter your engineer's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is your engineer's email address? (Required)",
      when: answers => {
        return answers.next === 'Add an engineer'
      },
      validate: engineerEmail => {
        if (engineerEmail) {
          return true;
        } else {
          console.log("Please enter your engineer's email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "What is your engineer's Github username? (Required)",
      when: answers => {
        return answers.next === 'Add an engineer'
      },
      validate: engineerGithub => {
        if (engineerGithub) {
          return true;
        } else {
          console.log("Please enter your engineer's Github username!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internName',
      message: "What is your interns's name? (Required)",
      when: answers => {
        return answers.next === 'Add an intern'
      },
      validate: internName => {
        if (internName) {
          return true;
        } else {
          console.log("Please enter your intern's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internID',
      message: "What is your intern's employee ID? (Required)",
      when: answers => {
        return answers.next === 'Add an intern'
      },
      validate: internID => {
        if (internID) {
          return true;
        } else {
          console.log("Please enter your intern's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is your intern's email address? (Required)",
      when: answers => {
        return answers.next === 'Add an intern'
      },
      validate: internEmail => {
        if (internEmail) {
          return true;
        } else {
          console.log("Please enter your intern's email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is your intern's school? (Required)",
      when: answers => {
        return answers.next === 'Add an intern'
      },
      validate: internSchool => {
        if (internSchool) {
          return true;
        } else {
          console.log("Please enter your intern's school!");
          return false;
        }
      }
    }
  ])
  .then(employeeData => {
    if (employeeData.next === 'Add an engineer') {
      const { engineerName, engineerID, engineerEmail, engineerGithub } = employeeData; // Gets the values so we can use them to construct the object
      const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
      employeeArray.push(engineer);

      return promptOtherMembers();

    } else if (employeeData.next === 'Add an intern') {
      const { internName, internID, internEmail, internSchool } = employeeData; // Gets the values so we can use them to construct the object
      const intern = new Intern(internName, internID, internEmail, internSchool);
      employeeArray.push(intern);

      return promptOtherMembers();
    }
    else {
      return employeeArray;
    }
  })
};

promptManager()
  .then(employeeData => {
    return generatePage(employeeData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
      console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
});