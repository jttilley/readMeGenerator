
/* 
Title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions
Things to add:
    Authors
    copy right and year
    Tech Used
    screen shot relative path
*/

function makeLists(str) {
  // console.log('str', str);
  // console.log('str.match(/;/): ', str.match(/;/));
  if (str.match(/;/) !== null) {
    // console.log('str: ', str);
    let revStr = str.replace(/;\s?/g, "\n* ");
    // console.log('revStr: ', revStr);
    const srch = revStr.match(/\:\s*/);
    // console.log('srch: ', srch);
    if (srch === null) {
      revStr = "* " + revStr;
    } else {
      // console.log('srch[0]: ', srch[0]);
      revStr = revStr.split(srch[0]).join(":\n* ")
    }
    // console.log(revStr)
    return revStr
  }
  return str;
}

function insertPiece(title, data) {
  return `## ${title}
${data}

`
}

// function to generate markdown for README
function generateMarkdown( { title, description, usage, install, contribution, license, testing, github, email, tech, api, tech2, pic, authors, repo, deployed } ) {
  const codeStyling = "```"
  
  let fullTech = tech.join(', ');
  
  const year = new Date().getFullYear();
  
  // convert semicolons to lists
  description = makeLists(description);
  usage = makeLists(usage);
  contribution = makeLists(contribution);
  testing = makeLists(testing);
  authors = makeLists(authors);
  
  // set Author(s) title
  let authorTitle = "Author"
  if (authors.match(/[\,\&\;]/) !== null) {
    authorTitle += `s`
  };

  console.log('initial fullTech: ', fullTech);

  console.log('tech2: ', tech2);
  // add extra tech items to tech list
  if (tech2 !== undefined) {
    console.log('tech2: ', tech2);
    fullTech = fullTech.replace(/, Other/,""); //remove other from list
    fullTech += `, ${tech2}`;
  };
  
  console.log('after tech2 fullTech: ', fullTech);

  // add APIs to tech list
  if (api != undefined) {
    fullTech = fullTech.replace(/, APIs/,""); //remove APIs from list
    fullTech += `, APIs: ${api}`;
  };
  
  console.log('after api fullTech: ', fullTech);

  // setup for adding links if any were included
  let linkTitle = "Link";
  if (repo != "" && deployed != "") {
    linkTitle += "s";
  };
  console.log('linkTitle: ', linkTitle);
  
  let link = "";
  if (deployed != "") {
    link += `Deployed link: ${deployed}
    `;
  };
  console.log('after depo link: ', link);
  
  if (repo != "") {
    link += `Repo link: ${repo}`;
  };
  console.log('after repo link: ', link);


  // initialize readme file
  let readme = `# ${title}

![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

`
  // add description
  readme += insertPiece("Description",description);
  console.log('after description readme: ', readme);

  // add links here
  if (repo !== "" || deployed !== "") {
    readme += insertPiece(linkTitle, link)
  }

  // Add Author(s)
  readme += insertPiece(authorTitle,authors); 

  // Add Tech used
  readme += insertPiece("Tech Used",fullTech); 

  // add the table of contents
  readme += insertPiece("Table of Contents",`
* [Example](#example)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
`); 

  // add a pic for the order if one exists
  console.log('pic: ', pic);
  if (pic !== "") {
    readme += insertPiece("Example",`![example](${pic})`);
  }

  // add installation
  readme += `## Installation
To install the necessary denpendencies, run the following command:
${codeStyling}
${install}
${codeStyling}

`
  //add usage  
  readme += insertPiece("Usage",usage);

  // add license
  readme += insertPiece("License",`The license for this project is: *${license}* ©  ${year} ${authors}
  `);

  // add contribution
  readme += insertPiece("Contribution",contribution);

  // add tests
  readme += insertPiece("Tests",testing);

  // add Questions
  readme += insertPiece("Questions",`If you have any questions you can email me at: ${email}

Also feel free to check out my GitHub page here: https://github.com/${github}
  `);

  
  // console.log('readme: ', readme);
  return readme;
}

module.exports = generateMarkdown;
