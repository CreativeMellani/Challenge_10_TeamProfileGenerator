//Uses the Inquirer package.
//Uses the Jest package for a suite of unit tests.

//included inquier packages needed for this  src:https://www.npmjs.com/package/inquirer 
const inquirer = require('inquirer');
const fs = require('fs');

// Constructor function which can be used to create objects containing the properties
// Following the format from Day 1, Activity 1
function Roles (employee, engineer, intern, manager) {
    this.employee = employee;
    this.engineer = engineer;
    this.intern = intern;
    this.manager = manager;
    
    this.makeNoise = () => {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  }




 //Creating  an array of questions for user to input for employee information
inquirer
.prompt([
  /* Pass your questions in here */
  {
      name: 'firstName',
      message: 'What is your first name?'
  },
  {
      name:'lastName',
      message:'What is your last name?'
  },
  {
      ID:'ID Number',
      message:'What is your employee ID number?'
  },
  {
    email:'employee email',
    message:'What is your employee email?'
  },
  {
      role:'role at the company',
      message: 'What is your role?'
  }


])
.then((answers) => {

  
  const employeeInfo = `${answers.firstname}  ${answers.lastName} employee number is ${answers.ID} your employee email is ${answers.email} and your role is ${ansers.role}`;
  
  console.log(employeeInfo)

  // TODO: Create a function to write README file
  
  fs.writeFile('README.md', readmeMD, (err) => {
      if(err) {console.log(err)}
      else{console.log('Employee Information Logged')}
  })
})
