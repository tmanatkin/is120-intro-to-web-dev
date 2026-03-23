let turn1;
let turn2;

// play game
function playGame() {
  turn1 = document.querySelector('input[name="player1"]:checked')?.value;
  turn2 = document.querySelector('input[name="player2"]:checked')?.value;

  // cannot submit with null values
  if (turn1 === undefined || turn2 === undefined) {
    console.log("Please select options for both players.");
  }

  // tie
  if (turn1 === turn2) {
    console.log("It's a tie!");
  } // player 1 win conditions
  else if (
    (turn1 === "Rock" && turn2 === "Scissors") ||
    (turn1 === "Paper" && turn2 === "Rock") ||
    (turn1 === "Scissors" && turn2 === "Paper")
  ) {
    console.log("Player 1 wins!");
  } // else, player 2 wins
  else {
    console.log("Player 2 wins!");
  }
}

// add event listener to button
document.querySelector("#goButton").addEventListener("click", playGame);
