const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
  const playerChoice = prompt("Enter rock, paper of scissors (to quit, enter 'quit'): ");
  if (playerChoice.toLowerCase() === "quit") {
    break;
  }

  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    console.log("Please enter a valid choice.");
    continue;
  }

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * 2);
  const computerChoice = choices[randomIndex];

  console.log("The computer chose:", computerChoice);

  if (computerChoice === playerChoice) {
    console.log("Draw match!");
    ties++;
  } else if ((playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper")) {
    console.log("Player Won!");
    wins++;
  } else {
    console.log("Player Lost!");
    losses++;
  }
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties);