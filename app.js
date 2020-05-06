////#region Elements
let userWins = 0;
let userLosses = 0;
let userTies = 0;
let userWinElem = document.getElementById("userWins"); //span displaying user wins
let userLossesElem = document.getElementById("userLosses"); //span displaying user losses
let userTiesElem = document.getElementById("userTies");
let rockButtonElem = document.getElementById("rock"); // rock button element
let paperButtonElem = document.getElementById("paper"); // paper button element
let scissorsButtonElem = document.getElementById("scissors"); //scissors button element
let playerPickElem = document.getElementById("playerPick");
let jsPickElem = document.getElementById("jsPick");

let playerTemplate = '';
let jsTemplate = '';
////#endregion Elements

//WORKS
//PICKS RANDOM NUMBER TO CHOOSE FROM LIST OF MOVES
function jsPicked() {
  let moves = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let randomMove = moves[randomNum];
  return randomMove;

}

function drawPicks(playerPick, jsPick){

playerPickElem.innerText = "You Picked " + playerPick;

jsPickElem.innerText = "JS Picked " + jsPick;

}

//WORKS
//DISPLAYS WIN ELEMENTS AND INCREMENTS WIN COUNT
function win(playerPick, jsPick) {
  //IM SURE THERES A WAY I COULDVE MOVED ALL THESE THREE LINES OUT TO ANOTHER FUNCTION BUT
  document.getElementById("status").classList.remove("bg-danger", "bg-warning", "hidden")
  document.getElementById("status").classList.add("bg-success")
  document.getElementById("statusText").innerText = "You Win!"
  userWins++;
  // @ts-ignore
  userWinElem.innerText = userWins;

  drawPicks(playerPick, jsPick)

  // console.log(playerPick)
  // console.log(jsPick);
  
}

//WORKS
//DISPLAYS LOSS ELEMETS AND INCREMENTS LOSS COUNT
function lose(playerPick, jsPick) {
  document.getElementById("status").classList.remove("bg-success", "bg-warning", "hidden")
  document.getElementById("status").classList.add("bg-danger")
  document.getElementById("statusText").innerText = "You Lose!"
  userLosses++;
  // @ts-ignore
  userLossesElem.innerText = userLosses;

  drawPicks(playerPick, jsPick)
  
  // console.log(playerPick)
  // console.log(jsPick);
  
}

//WORKS
//DISPLAYS TIE ELEMENTS AND INCREMENTS TIE COUNT
function tie(playerPick, jsPick) {
  document.getElementById("status").classList.remove("bg-danger", "bg-warning", "hidden")
  document.getElementById("status").classList.add("bg-warning")
  document.getElementById("statusText").innerText = "Its a Tie!"
  userTies++;
  // @ts-ignore
  userTiesElem.innerText = userTies;
  
  drawPicks(playerPick, jsPick)
  // console.log(playerPick)
  // console.log(jsPick);
  

  
}
function game(playerPicked) {
  // the button clicked is stored as playerPicked

  let jsMove = jsPicked();
  // ^ Sets the jsMove to the random move from the function above
  switch (playerPicked + jsMove) { //combine the playerPick and jsMove to one string
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(playerPicked, jsMove);
      console.log("user wins");
      break;
    // ^ cases for a player win

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      // @ts-ignore
      lose(playerPicked, jsMove);
      console.log("user loses");
      break;
    // ^ cases for a player loss

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      // @ts-ignore
      tie(playerPicked, jsMove);
      console.log("its a tie!");
      break;
    // ^ cases for a tie
  }
}


