const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type:'input',
        message: "What is your GitHub username?",
        name: "github",
        default: "jttilley"
    },{
        type:'input',
        message: "What is your email?",
        name: "email",
        default: "jttilley007@gmail.com"
    },{
        type:'input',
        message: "What is the title of your project?",
        name: "title"
    },{
        type:'input',
        message: "Give a brief description of your what your project does:",
        name: "description"
    },{
        type:'input',
        message: "Who worked on the project?",
        name: "authors",
        default: "Jason Tilley"
    },{
        type:'checkbox',
        message: "What tech was used for this project?",
        choices: ["HTTP", "CSS", "JavaScript", "Bootstrap", "React", "jQuery", "Ajax", "ES6", "RegEx", "Moment.js", "FontAwesome", "Node.js", "express", "inquirer","fs","path","utils", "APIs", "Other"],
        name: "tech"
    },{
        type:'input',
        message: "What APIs were used in this project?",
        name: "api",
        when: (ans) => ans.tech.indexOf("APIs") > -1
    },{
        type:'input',
        message: "List any other Tech used:",
        name: "tech2",
        when: (ans) => ans.tech.indexOf("Other") > -1
    },{
        type:'input',
        message: "What does the user need to know about using the repo?",
        name: "usage",
        default: `Fork it; Clone it to your computer; run "node index.js" in the terminal`
    },{
        type:'input',
        message: "What command should be run to install the dependencies?",
        name: "install",
        default: "npm i"
    },{
        type:'list',
        message: "What kind of license would you like to use for this project?",
        choices: ["MIT","GNU","ISC","Apache"],
        name: "license"
    },{
        type:'input',
        message: "How can someone test this project?",
        name: "testing",
        default: `Run "npm run test"`
    },{
        type:'input',
        message: "How can others contribute to the project?",
        name: "contribution",
        default: "Fork it"
    },{
        type:'input',
        message: "Photo: Enter the local path and name of a photo, or a web link to it.",
        name: "pic",
        default: "./public/assets/images/Screen-Shot.png"
    },{
        type:'input',
        message: "Enter your repository link if you have one:",
        name: "repo",
        default: "https://github.com/jttilley/",
        validate: (ans) => {
            console.log('ans: ', ans);
            console.log('ans[ans.length-1]: ', ans[ans.length-1]);
            
            if (ans[ans.length-1] === "/") {
                return "Please add the rest pf the link. found |" + ans[ans.length-1] + "|"
            } 
            return true;
        }
    },{
        type:'input',
        message: "Enter your deployed link if you have one:",
        name: "deployed",
        
    }
];


// function to write README file
function writeToFile(fileName, data) {

    const readme = generateMarkdown(data);
    // console.log('readme: ', readme);
    
    fs.writeFile(fileName, readme, err => {
        if (err) {
            throw err;
        }
        console.log(`Saved Sucessfully!`);
    },)
    .catch (err => console.log(err));
}

// function to initialize program
async function init() {
    try {
        console.log("This will generate a README.md file.")
        console.log("To create a list in your answers use ';' to seperate list items and ':' after your list title if you want one.");
        console.log(`If you type 'run "<code line>"' it will be given code syntax in the readme file.`);

        const answers = await inquirer.prompt(questions);
        // console.log('answers: ', answers);
        
        writeToFile("./created/README.md", answers)
    }
    catch {err => console.log(err)};
}

// function call to initialize program
init();
