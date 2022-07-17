function play() {
  var randomNumber = [];
  for (var i = 0; i < 2; i++) {
    randomNumber.push(Math.floor(Math.random() * 6) + 1);
    var whatDice = ".img" + (i + 1);
    var randomDiceImageSource = "images/dice" + randomNumber[i] + ".png";
    document.querySelector(whatDice).setAttribute("src", randomDiceImageSource);
  }
  if (randomNumber[0] > randomNumber[1]) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber[0] < randomNumber[1]) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

play();
