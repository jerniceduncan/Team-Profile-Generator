const Manager = require("./Manager");
const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require('./Engineer');
const html = require("./Generate_HTML");
const fs = require('fs');
const genCard = require('./gen_cards');
const chalk = require('chalk');


let managerCard = "";
let engCard = "";
let internCard = "";
let team_cards = "";

//building a team using manager prompt//
let managerPrompt = () => {
    console.log(chalk.red.bgYellowBright.underline.bold("Please Build Your Team!"));
    return inquirer.prompt([{
                type: "input",
                name: "name",
                message: chalk.cyanBright("What is your Managers Name?")
            },
            {
                type: "input",
                name: "id",
                message: chalk.magentaBright("What is your Manager id?")
            },
            {
                type: "input",
                name: "email",
                message: chalk.redBright("What is your managers email?")
            },
            {
                type: "input",
                name: "officeNumber",
                message: chalk.blueBright("What is your managers office number?")
            }
        ]) //Instantiating a new Manager object
        .then((data) => {
            let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            // console.log(newManager);

            managerCard = genCard.man_card(newManager.name, newManager.id, newManager.email, newManager.officeNumber);
            team_cards += managerCard;

            chooseTeam();
        })

}

//prompt to choose a team member
const chooseTeam = () => {
    inquirer.prompt([{
            type: "list",
            name: "member",
            message: chalk.yellowBright("Which type of team member would you like to add?"),
            choices: ["engineer", "Intern", "I dont want to add any more team members"]
        }])
        .then((data) => {
            if (data.member === "engineer") {
                buildEngineer();
            } else if (data.member === "Intern") {
                buildIntern();
            } else {
                console.log(chalk.magentaBright.bgWhiteBright.underline.bold("Check the output folder for your generated team!"));
                const outputPage = html.generateHTML(team_cards);
                fs.writeFile("./output/new_team.html", outputPage, (err) => {
                    if (err) throw err;
                    //  
                });
            }
        })
}

//prompt to build an intern
const buildIntern = () => {
    inquirer.prompt([{
                type: "input",
                name: "internName",
                message: chalk.cyanBright("What is your Interns Name?")
            },
            {
                type: "input",
                name: "internId",
                message: chalk.magentaBright("What is your Interns id?")
            },
            {
                type: "input",
                name: "internEmail",
                message: chalk.redBright("What is your Interns email?")
            },
            {
                type: "input",
                name: "internSchool",
                message: chalk.blueBright("Where did your Intern go to School?")
            }
        ])
        .then((data) => {
            let newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            // console.log(newIntern);

            internCard = genCard.genInternCard(newIntern.name, newIntern.id, newIntern.email, newIntern.school);
            team_cards += internCard;
            chooseTeam();
        })
}

// Prompt to Build Engineer
const buildEngineer = () => {
    inquirer.prompt([{
                type: "input",
                name: "engineerName",
                message: chalk.cyanBright("What is your Engineers Name?")
            },
            {
                type: "input",
                name: "engineerId",
                message: chalk.magentaBright("What is your Engineers id?")
            },
            {
                type: "input",
                name: "engineerEmail",
                message: chalk.redBright("What is your Engineers email?")
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: chalk.blueBright("What is your Engineers Github userName?")
            }
        ])
        .then((data) => {
            let newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);

            engCard = genCard.genEngineerCard(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github);
            team_cards += engCard;

            chooseTeam();
        })
}

module.exports =
    managerPrompt,
    buildEngineer,
    buildIntern;