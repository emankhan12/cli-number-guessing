#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "please guess a number 1-6:",
    }
]);
if (answer.userGuesseNumber === randomNumber) {
    console.log("congtratulation! you guessed right number.");
}
else {
    console.log("you gussed wrong number");
}
