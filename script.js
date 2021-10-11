var playerScore = 0
var computerScore = 0
var ties = 0

var play = confirm("Would you like to play 'Rock, Paper, Scissors?")
var userInput = prompt("R, P, or S?")
var choice = ["R", "P", "S"]

console.log(userInput)
alert("You chose " + userInput)

// this is the index range. Numbers between 0-2 because there are only three options
for (i = 0; i < choice.length; i++) {
function getRandomItem() {
    // Math.random choose a random number, multiply by three for three options, and math.floor to get an integer between 0 and 2
  var selection = choice[Math.floor(Math.random() * 3)]
  console.log(selection)

// an if statement that shows the user what the computer chose
  if (selection === "R") {
      alert("Computer chooses R")
  }
  else if (selection === "P") {
      alert("Computer chooses P")
  }
  else {
      alert("Computer chooses S")
  }

  // an if statement that decides the outcome based on the user and computers choice
  if (selection === userInput) {
  alert("It's a tie")
//   by putting "++" on ties, computerScore, and playerScore, the wins, losses, or ties will go up by one each time depending on the outcome
  ties++
  }
   else if ((userInput === "R" && selection === "P")||
            (userInput === "P" && selection === "S")||
            (userInput === "S" && selection === "R")) {
    alert("You Lose")
    console.log(computerScore++)
  }
  else if  ((userInput === "P" && selection === "R")||
            (userInput === "S" && selection === "P")||
            (userInput === "R" && selection === "S")){
    alert("You Win!")
    console.log(playerScore++)
  }
// options to include incase someone types in an error
  else if (userInput === "")
    alert("You did not make a selection!")

  else {
    alert("Input invalid!")
  }
}
}

getRandomItem()

    // displays and keeps track of score
    alert(
        "Wins = " + playerScore + " Losses = " + computerScore + " Ties = " + ties
    )

var playAgain = confirm("Play Again?")
// if choosing "Y" the while loop repeats whole game cycle over step by step as long as "Y" is typed in
while (playAgain === true) {
    var userInput = prompt("R, P, or S?")
    var choice = ["R", "P", "S"]
    console.log(userInput)
    
    alert("You chose " + userInput)

    getRandomItem()

    alert(
        "Wins = " + playerScore + " Losses = " + computerScore + " Ties = " + ties
    )

    var playAgain = confirm("Play Again?")
    }








