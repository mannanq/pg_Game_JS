/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, diceDOM;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// no dice when game begins
var diceObject = document.querySelector('.dice');

diceObject.style.display = 'none';

//Set everything to 0:

//Global score for each player

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

//roundScore for each player

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//define dice object so it could eb selected in the roll dice event listener below

// roll dice event listener

document.querySelector('.btn-roll').addEventListener('click', function() {
  //roll dice

  var dice = Math.floor(Math.random() * 6 + 1);
  //   console.log(dice);

  // set dice # equal to the diceDOM pic and display it

  diceObject.style.display = 'block';
  diceObject.src = 'dice-' + dice + '.png';

  // If 1 is rolled, then go to next player otherwise add to roundScore
  if (dice !== 1) {
    // add to roundScore of the active player

    roundScore += dice;

    // display it to the UI as well

    document.getElementById('current-' + activePlayer).textContent = roundScore;
  }
});

// implement hold button now

document.querySelector('.btn-hold').addEventListener('click', function() {
  // add roundScore to the
});
