// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const userTable = document.querySelector('tbody');
const userInfo = [];

let runningTotal = 0;
let averageSalary = 0;


// Collect employee data
const collectEmployees = function() {

  
  let firstName = prompt("Enter First Name");
  let lastName = prompt("Enter Last Name");
  let salaryRate = Number(prompt("Enter Salary", 0));

  const newUser = {
    first: firstName,
    last: lastName,
    salary: salaryRate,
  }

  userInfo.push(newUser);

  const again = confirm("Add Another Employee?")

  if(again){
    collectEmployees()
  }

  return userInfo;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {

  for(let i = 0; i < userInfo.length; i++){
    runningTotal += userInfo[i].salary;
  }

  averageSalary = runningTotal / userInfo.length;

  console.log(`The average employee salary is: ${averageSalary}`);
}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomUser = Math.floor(Math.random()*userInfo.length);
  let selectedUser = userInfo[randomUser].first;

  console.log(`Congratulations, ${selectedUser}, you have been randomly selected to win a thing!`)

}













/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.first;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.last;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
