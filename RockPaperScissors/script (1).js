document.querySelector('#buttons')
  .addEventListener('click', event => {
    let target = event.target; // html tag
    //console.log(target);

    let value = target.innerHTML // the value from the buttom inside the html tag
    console.log(value); 

//Step 1:
// create a variable array Rock, Papper, Sicssors
const options = ["ROCK", "PAPER", "SCISSORS"];
let gameOptions = "" ;

    
  
// generate a radom number 0-2 index 0, index 1, index 2
const index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
gameOptions += options[index];
// console.log
console.log(gameOptions);
//Step 3:
// console.log everything(variables)
const newText = document.getElementById("score");
//Step 4:
// Add the if statements to compare the values
// console.log 
if (value == gameOptions) {
    console.log ("nobody wins");
    newText.textContent = "nobody wins";
} else if (value == "ROCK" && gameOptions == "SCISSORS") {
    console.log ("you win!");
    newText.textContent = "you win!";
}  else if (value == "PAPER" && gameOptions == "ROCK") {
    console.log ("you win!");
    newText.textContent = "you win!";
}  else if (value == "SCISSORS" && gameOptions == "PAPER") {
    console.log ("you win!");
    newText.textContent = "you win!";
} else if (gameOptions == "ROCK" && value == "SCISSORS") {
    console.log ("the computer wins");
    newText.textContent = "the computer wins";
}else if (gameOptions == "PAPER" && value == "ROCK") {
    console.log ("the computer wins");
    newText.textContent = "the computer wins";
}else if (gameOptions == "SCISSORS" && value == "PAPER") {
    console.log ("the computer wins");
    newText.textContent = "the computer wins";
}
// (user value rock && random value is paper ){ you loose! } else if ()

//Step 5:
//Print in the html file(the console.log value);


  });