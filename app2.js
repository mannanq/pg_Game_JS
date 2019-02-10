/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, diceObject;

// define diceObject to be re-used later

diceObject = document.querySelector('.dice');

init();

//define dice object so it could be selected in the roll dice event listener below

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
  } else {
    // othersie go to the next player and set roundScore to 0

    nextPlayer();
  }
});

// implement hold button now

document.querySelector('.btn-hold').addEventListener('click', function() {
  // add roundScore to the total score of the active Player

  scores[activePlayer] += roundScore;

  // show total score in UI as well

  document.getElementById('score-' + activePlayer).textContent =
    scores[activePlayer];

  // Implement win condition

  if (scores[activePlayer] >= 20) {
    //if score of the player who chose to hold is 20 or above, they win and class 'winner' is added and hide the dice
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';

    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.add('winner');

    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.remove('active');

    diceObject.style.display = 'none';
  } else {
    // or else go to next player i.e. keep playing

    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // set roundScore to 0
  roundScore = 0;

  //set roundScore to 0 in UI as well:

  document.getElementById('current-0').textContent = '0';

  document.getElementById('current-1').textContent = '0';

  // remove dice from the window

  diceObject.style.display = 'none';

  // take care of active class

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

//Implement the new game button

// Run init function when clicked
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  // no dice when game begins

  diceObject.style.display = 'none';

  //Set everything to 0:

  //Global score for each player

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  //roundScore for each player

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // take care of classes

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
}
