function playPaper() {
  var originalHtml = document.documentElement.innerHTML;
  //var originalCss = document.head.querySelector('style').innerHTML;

  localStorage.setItem("originalHtml", originalHtml);

  document.getElementById("youHand").src = "assets/img/paper.png";
  document.getElementById("youHand").style.visibility = "visible";
  document.getElementById("youHandLabel").innerHTML = "Papel";
  document.getElementById("youHandLabel").style.visibility = "Visible";
  document.getElementById("computerHand").style.visibility = "visible";
  document.getElementById("computerHandLabel").style.visibility = "Visible";
  let computerPlay = Math.floor(Math.random() * 3);
  console.log(computerPlay);
  if (computerPlay == 0) {
    //Computadora juega Paper
    document.getElementById("computerHand").src = "assets/img/paper.png";
    document.getElementById("computerHandLabel").innerHTML = "Papel";
    setTimeout(showResult, 2000, 2); // 2 es empate
  } else if (computerPlay == 1) {
    //CPU juega Rock
    document.getElementById("computerHand").src = "assets/img/rock.png";
    document.getElementById("computerHandLabel").innerHTML = "Piedra";
    setTimeout(showResult, 2000, 0); // 0 es user win
  } else if (computerPlay == 2) {
    // CPU juega Scissors
    document.getElementById("computerHand").src = "assets/img/scissors.png";
    document.getElementById("computerHandLabel").innerHTML = "Tijeras";
    setTimeout(showResult, 2000, 1); // 1 es CPU win
  }
}

function playRock() {
  document.getElementById("youHand").src = "assets/img/rock.png";
  document.getElementById("youHand").style.visibility = "visible";
  document.getElementById("youHandLabel").innerHTML = "Piedra";
  document.getElementById("youHandLabel").style.visibility = "Visible";
  document.getElementById("computerHand").style.visibility = "visible";
  document.getElementById("computerHandLabel").style.visibility = "Visible";
  let computerPlay = Math.floor(Math.random() * 3);
  console.log(computerPlay);
  if (computerPlay == 0) {
    //Computadora juega Paper
    document.getElementById("computerHand").src = "assets/img/paper.png";
    document.getElementById("computerHandLabel").innerHTML = "Papel";
    setTimeout(showResult, 2000, 1); // 1 (lose)
  } else if (computerPlay == 1) {
    //CPU juega Rock
    document.getElementById("computerHand").src = "assets/img/rock.png";
    document.getElementById("computerHandLabel").innerHTML = "Piedra";
    setTimeout(showResult, 2000, 2); // 2 (empate)
  } else if (computerPlay == 2) {
    // CPU juega Scissors
    document.getElementById("computerHand").src = "assets/img/scissors.png";
    document.getElementById("computerHandLabel").innerHTML = "Tijeras";
    setTimeout(showResult, 2000, 0); // 0 (win)
  }
}

function playScissors() {
  document.getElementById("youHand").src = "assets/img/scissors.png";
  document.getElementById("youHand").style.visibility = "visible";
  document.getElementById("youHandLabel").innerHTML = "Tijeras";
  document.getElementById("youHandLabel").style.visibility = "Visible";
  document.getElementById("computerHand").style.visibility = "visible";
  document.getElementById("computerHandLabel").style.visibility = "Visible";
  let computerPlay = Math.floor(Math.random() * 3);
  console.log(computerPlay);
  if (computerPlay == 0) {
    //Computadora juega Paper
    document.getElementById("computerHand").src = "assets/img/paper.png";
    document.getElementById("computerHandLabel").innerHTML = "Papel";
    setTimeout(showResult, 2000, 0); // Win
  } else if (computerPlay == 1) {
    //CPU juega Rock
    document.getElementById("computerHand").src = "assets/img/rock.png";
    document.getElementById("computerHandLabel").innerHTML = "Piedra";
    setTimeout(showResult, 2000, 1); // Lose
  } else if (computerPlay == 2) {
    // CPU juega Scissors
    document.getElementById("computerHand").src = "assets/img/scissors.png";
    document.getElementById("computerHandLabel").innerHTML = "Tijeras";
    setTimeout(showResult, 2000, 2); // Draw
  }
}

function showResult(winner) {
  let scoreUser = Number(document.getElementById("youScore").innerHTML);
  let scoreCPU = Number(document.getElementById("computerScore").innerHTML);

  document.getElementById("youHand").style.display = "none";
  document.getElementById("computerHand").style.display = "none";
  document.getElementById("computerHandLabel").style.display = "none";
  document.getElementById("youHandLabel").style.display = "none";
  document.getElementById("boardLine").style.display = "none";

  let pWinner = document.createElement("p");

  pWinner.style.fontSize = "50px";

  pWinner.style.fontFamily = "sans-serif";

  document.getElementById("boardContainer").style.display = "flex";
  document.getElementById("boardContainer").style.flexDirection = "column";
  document.getElementById("boardContainer").style.alignItems = "center";
  document.getElementById("boardContainer").style.justifyContent = "center";

  if (winner == 0) {
    //User ganador
    let pWinnerText = document.createTextNode("Ganaste");

    pWinner.appendChild(pWinnerText);

    document.getElementById("boardContainer").appendChild(pWinner);

    scoreUser += 1;

    setTimeout(function () {
      var storedHtml = localStorage.getItem("originalHtml");

      document.documentElement.style.visibility = 'hidden';

      document.documentElement.innerHTML = storedHtml;

      document.documentElement.style.visibility = 'visible';

      document.getElementById("youScore").innerHTML = scoreUser;
      document.getElementById("computerScore").innerHTML = scoreCPU;
    }, 2000);
    
  } else if (winner == 1) {
    // CPU ganadora
    let pWinnerText = document.createTextNode("Perdiste");

    pWinner.appendChild(pWinnerText);

    document.getElementById("boardContainer").appendChild(pWinner);

    scoreCPU += 1;

    setTimeout(function () {
        var storedHtml = localStorage.getItem("originalHtml");
  
        document.documentElement.style.visibility = 'hidden';

        document.documentElement.innerHTML = storedHtml;

        document.documentElement.style.visibility = 'visible';
  
        document.getElementById("computerScore").innerHTML = scoreCPU;
        document.getElementById("youScore").innerHTML = scoreUser;
      }, 2000);
  } else if (winner == 2) {
    // Empate
    let pWinnerText = document.createTextNode("Empate");

    pWinner.appendChild(pWinnerText);

    document.getElementById("boardContainer").appendChild(pWinner);

    setTimeout(function () {
        var storedHtml = localStorage.getItem("originalHtml");
  
        document.documentElement.style.visibility = 'hidden';

        document.documentElement.innerHTML = storedHtml;

        document.documentElement.style.visibility = 'visible';
  
        document.getElementById("computerScore").innerHTML = scoreCPU;
        document.getElementById("youScore").innerHTML = scoreUser;
      }, 2000);
  }
}
