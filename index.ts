#! /usr/bin/env node

import inquirer from "inquirer";

const systemgeneratedNo = Math.floor(Math.random() * 10);


const answer = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "Write your guess between 1 to 10 :",
  },
]);

const { userGuess } = answer;

if (userGuess === systemgeneratedNo) {
  console.log(`WOW!!! your answer ${systemgeneratedNo} is correct \n YOU WIN!`);
} else {
  console.log("please try again, better luck next time!");
}




