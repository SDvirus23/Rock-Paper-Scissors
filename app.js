let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreleast = document.querySelector("#user-score");
const compScoreleast = document.querySelector("#comp-score");
const restgame=document.querySelector("#reset");
const getCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return option[randIndx];
};
const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userScore++;

    userScoreleast.innerText = userScore;
    msg.innerText = `you win! your ${userchoice} beats  ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;

    compScoreleast.innerText = compScore;
    msg.innerText = `you loose!computer's ${compChoice} beats your  ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawgame = () => {
  msg.innerText = `The game was draw!!`;
  msg.style.backgroundColor = "#370617";
};

const playgame = (userchoice) => {
  const compChoice = getCompChoice();

  if (userchoice == compChoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice == "rock") {
      userwin = compChoice == "scissors" ? true : false;
    } else if (userchoice == "paper") {
      userwin = compChoice == "rock" ? true : false;
    } else {
      userwin = compChoice == "paper" ? true : false;
    }

    showWinner(userwin, userchoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");

    playgame(userchoice);
  });
});

restgame.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userScoreleast.innerText = "0";
    compScoreleast.innerText = "0";
    msg.innerText="play your move!";
    msg.style.backgroundColor = "#370617";

})