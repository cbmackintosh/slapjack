
var currentGame;

var middlePile = document.querySelector('.middle-pile');
var playerOneHand = document.querySelector('.player1-hand');
var playerTwoHand = document.querySelector('.player2-hand');

var playerOneWinCount = document.querySelector('.player1-win-count');
var playerTwoWinCount = document.querySelector('.player2-win-count')

document.addEventListener('keydown', controls)
window.addEventListener('load', loadGame)

function loadGame() {
  currentGame = new Game()
  currentGame.dealFullDeck()
  playerOneWinCount.innerText = `WINS: ${currentGame.player1.wins}`
  playerTwoWinCount.innerText = `WINS: ${currentGame.player2.wins}`
}

function controls() {
  if (event.key === 'q') {
    currentGame.player1.playCard();
    renderCard()
  } else if (event.key === 'p') {
    currentGame.player2.playCard();
    renderCard()
  } else if (event.key === 'f') {
    currentGame.player1.slap();
  } else if (event.key === 'j') {
    currentGame.player2.slap();
  }
  adjustAllCardsVisibility();
}

function renderCard() {
  middlePile.src = `${currentGame.deck[currentGame.deck.length - 1].img}`;
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
