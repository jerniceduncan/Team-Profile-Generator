const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
const teamMembers = [];
function managerInfo() {
  console.log("please enter manager info");
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "managerName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "managerEmailAddress",
        message: "What is Email Address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your Office Number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      //create new manager object
      let manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmailAddress,
        answers.officeNumber
      );
      //collecting team members
      teamMembers.push(manager);
     addNewTeamMember()
    });

}

function addNewTeamMember() {
    inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "userChoice",
        message: "Which type of team Member would you like to Add?",
        choices:[
            "Engineer", "Intern", "No more members?"
        ]

      }
    ])
.then((data)=>{
    if (data.userChoice = "Engineer")
})


//  above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including tempted div for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

//calling the function starting point of application
managerInfo();
}