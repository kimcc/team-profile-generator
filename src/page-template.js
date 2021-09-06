// Create the employee rows
const generateEmployee = employeeData => {
  const engineerArray = employeeData.filter(employee => employee.getRole() === 'Engineer');
  const internArray = employeeData.filter(employee => employee.getRole() === 'Intern');

  const engineerHTML = engineerArray.map(person => {
    return `
    <section>
      <div class="profile">
        <img class="mask" src="./assets/engineer.png" alt="Dog wearing sunglasses">
        <div>
          <h2>${person.name}</h2>
          <p>Engineer</p>
        </div>
      </div>
      <div>
        <h3>ID Number</h3>
        <p>${person.id}</p>
      </div>
      <div>
        <h3>Email Address</h3>
        <p>${person.email}</p>
      </div>
      <div>
        <h3>Github</h3>
        <p>${person.github}</p>
      </div>
    </section>
  `;
  })
  .join('') // Prevent from joining with commas and join with space instead

  const internHTML = internArray.map(person => {
    return `
    <section>
      <div class="profile">
        <img class="mask" src="./assets/intern.png" alt="Dog with ball in mouth">
        <div>
          <h2>${person.name}</h2>
          <p>Intern</p>
        </div>
      </div>
      <div>
        <h3>ID Number</h3>
        <p>${person.id}</p>
      </div>
      <div>
        <h3>Email Address</h3>
        <p>${person.email}</p>
      </div>
      <div>
        <h3>School</h3>
        <p>${person.school}</p>
      </div>
    </section>
    `;
  })
  .join('') 

  return `
  <section>
    <div class="profile">
      <img class="mask" src="./assets/manager.png" alt="Dog wearing bow tie">
      <div>
        <h2>${employeeData[0].name}</h2>
        <p>Manager</p>
      </div>
    </div>
    <div>
      <h3>ID Number</h3>
      <p>${employeeData[0].id}</p>
    </div>
    <div>
      <h3>Email Address</h3>
      <p>${employeeData[0].email}</p>
    </div>
    <div>
      <h3>Office Number</h3>
      <p>${employeeData[0].officeNumber}</p>
    </div>
  </section>
  ${engineerHTML}
  ${internHTML}
`;
}

module.exports = employeeData => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="styles.css">
    <title>My Team</title>
  </head>
  <body>
    <main>
      <h1>My team</h1>
      ${generateEmployee(employeeData)}
    </main>
  </body>
  </html>
  `;
}
