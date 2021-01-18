
var currentGame;

var gameLog = document.querySelector('.game-event-log');
var middlePile = document.querySelector('.middle-pile');
var playerOneHand = document.querySelector('.player1-hand');
var playerTwoHand = document.querySelector('.player2-hand');

var playerOneWinCount = document.querySelector('.player1-win-count');
var playerTwoWinCount = document.querySelector('.player2-win-count')

document.addEventListener('keydown', controls)
window.addEventListener('load', loadGame)

function loadGame() {
  currentGame = new Game();
  currentGame.dealFullDeck();
  playerOneWinCount.innerText = `WINS: ${currentGame.player1.wins}`;
  playerTwoWinCount.innerText = `WINS: ${currentGame.player2.wins}`;
}

function controls() {
  if (event.key === 'q') {
    gameLog.innerText = currentGame.player1.playCard();
    renderCard()
  } else if (event.key === 'p') {
    gameLog.innerText = currentGame.player2.playCard();
    renderCard()
  } else if (event.key === 'f') {
    gameLog.innerText = currentGame.player1.slap();
  } else if (event.key === 'j') {
    gameLog.innerText = currentGame.player2.slap();
  }
  adjustAllCardsVisibility();
}

function renderCard() {
  middlePile.src = `${currentGame.deck[currentGame.deck.length - 1].img}`;
  middlePile.alt = `the ${currentGame.deck[currentGame.deck.length - 1].num} of ${currentGame.deck[currentGame.deck.length - 1].suit}`;
}

function adjustAllCardsVisibility() {
  adjustCardVisibility(currentGame.deck, middlePile)
  adjustCardVisibility(currentGame.player1.hand, playerOneHand);
  adjustCardVisibility(currentGame.player2.hand, playerTwoHand);
}

function adjustCardVisibility(array, element) {
  if (array.length === 0) {
    element.classList.add('hidden');
  } else {
    element.classList.remove('hidden');
  }
}
