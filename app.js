/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//Hide the dice when the game starts:
document.querySelector('.dice').style.display = 'none';

// Set global and current scores to 0 when the game starts:
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//Event Listener for when the dice is rolled
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. random number
  var dice = Math.floor(Math.random() * 6 + 1);

  // 2. Display the result of dice
  var diceDom = document.querySelector('.dice');
  // re-display it since we hid it previously
  diceDom.style.display = 'block';
  // change the source of the dice image absed on the image names
  diceDom.src = 'dice-' + dice + '.png';

  // 3. Update the round score only IF the rolled dice # is not "1"

  if (dice !== 1) {
    // Add curent score

    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // Next Player

    // activePlayer = (activePlayer - 1) * -1; //this is fine but learning terniary operator so do it as follows

    nextPlayer();
  }
});

//Event listener for holding our score into the global score

document.querySelector('.btn-hold').addEventListener('click', function() {
  // Add current score to player's global score
  scores[activePlayer] += roundScore;

  //Update the UI as well

  document.getElementById('score-' + activePlayer).textContent =
    scores[activePlayer];

  //check if player won the game or else go to the next player

  if (scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

    document.querySelector('.dice').style.display = 'none';

    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.add('winner');

    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.remove('active');
  } else {
    nextPlayer();
  }
});

// As part of DRY

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  roundScore = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');

  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('current-0').textContent = 0;

  document.getElementById('current-1').textContent = 0;

  document.querySelector('.dice').style.display = 'none';
}
