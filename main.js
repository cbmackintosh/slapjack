
var currentGame;

var gameLog = document.querySelector('.game-event-log');
var middlePile = document.querySelector('.middle-pile');
var playerOneHand = document.querySelector('.player1-hand');
var playerTwoHand = document.querySelector('.player2-hand');

var playerOneWinCount = document.querySelector('.player1-win-count');
var playerTwoWinCount = document.querySelector('.player2-win-count');

document.addEventListener('keydown', controls);
window.addEventListener('load', loadGame);

function loadGame() {
  currentGame = new Game();
  currentGame.dealFullDeck();
  updateWinCounts();
  highlightActivePlayer();
}

function controls(event) {
  if (event.key === 'q') {
    playDOMResponse(currentGame.player1.playCard(), currentGame.player1.name);
  } else if (event.key === 'p') {
    playDOMResponse(currentGame.player2.playCard(), currentGame.player2.name);
  } else if (event.key === 'f') {
    slapDOMResponse(currentGame.player1.slap(), currentGame.player1);
  } else if (event.key === 'j') {
    slapDOMResponse(currentGame.player2.slap(), currentGame.player2);
  }
}

function playDOMResponse(returnedString, player) {
  if (returnedString === 'VALID-PLAY' || returnedString === 'SKIP-OPPONENT') {
    gameLog.innerText = `${player} PLAYS THE ${currentGame.deck[currentGame.deck.length - 1].num} OF ${currentGame.deck[currentGame.deck.length - 1].suit}.`;
    renderCard();
  } else {
    return;
  }
  adjustAllCardsVisibility();
  highlightActivePlayer();
}

function slapDOMResponse(returnedString, player) {
  if (returnedString === 'SLAPJACK' || returnedString === 'DOUBLE' || returnedString === 'SANDWICH') {
    gameLog.innerText = `${returnedString}! ${player.name} WINS THE MIDDLE PILE!`
  } else if (returnedString === 'BAD-SLAP') {
    gameLog.innerText = `BAD SLAP FROM ${player.name} - FORFEITS THEIR TOP CARD TO ${player.myOpponentIs().name}`;
  } else if (returnedString === 'SAVING-SLAP') {
    gameLog.innerText = `SLAPJACK! ${player.name} STAYS ALIVE!`
  } else if (returnedString === 'LOSING-SLAP') {
    gameLog.innerText = `BAD SLAP! ${player.name} LOSES! GAME RESET`
    updateWinCounts()
  } else if (returnedString === 'WINNING-SLAP') {
    gameLog.innerText = `SLAPJACK! ${player.name} WINS! GAME RESET`
    updateWinCounts()
  } else if (returnedString === 'INVALID-SLAP') {
    return;
  }
  adjustAllCardsVisibility();
  highlightActivePlayer();
}

function renderCard() {
  middlePile.src = `${currentGame.deck[currentGame.deck.length - 1].img}`;
  middlePile.alt = `the ${currentGame.deck[currentGame.deck.length - 1].num} of ${currentGame.deck[currentGame.deck.length - 1].suit}`;
}

function highlightActivePlayer() {
  if (currentGame.activePlayer === currentGame.player1) {
    playerOneHand.classList.add('card-highlight');
    playerTwoHand.classList.remove('card-highlight');
  } else {
    playerTwoHand.classList.add('card-highlight');
    playerOneHand.classList.remove('card-highlight');
  }
}

function adjustAllCardsVisibility() {
  adjustCardVisibility(currentGame.deck, middlePile)
  adjustCardVisibility(currentGame.player1.hand, playerOneHand);
  adjustCardVisibility(currentGame.player2.hand, playerTwoHand);
}

function adjustCardVisibility(array, element) {
  if (!array.length) {
    element.classList.add('hidden');
  } else {
    element.classList.remove('hidden');
  }
}

function updateWinCounts() {
  playerOneWinCount.innerText = `WINS: ${currentGame.player1.wins}`;
  playerTwoWinCount.innerText = `WINS: ${currentGame.player2.wins}`;
}
