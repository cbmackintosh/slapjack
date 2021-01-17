var currentGame = null;

var middlePile = document.querySelector('.middle-pile');

var playerOneWinCount = document.querySelector('.player-one-win-count');
var playerTwoWinCount = document.querySelector('.player-two-win-count');

window.addEventListener('load', loadGame)
document.addEventListener('keydown', controls);

function controls(event) {
  if (event.key === 'q' && currentGame.activePlayer === currentGame.player1) {
    currentGame.player1.playCard();
    displayCard(currentGame.deck[currentGame.deck.length - 1])
    adjustHandDisplay(currentGame.player1)
  } else if (event.key === 'p' && currentGame.activePlayer === currentGame.player2) {
    currentGame.player2.playCard();
    displayCard(currentGame.deck[currentGame.deck.length - 1])
    adjustHandDisplay(currentGame.player2)
  } else if (event.key === 'f') {
    slapResponse(currentGame.slap(currentGame.player1));
  } else if (event.key === 'j') {
    slapResponse(currentGame.slap(currentGame.player2));
  }
}

function slapResponse(slap) {
  if (slap === 'good-slap') {
    middlePile.classList.add('hidden');
    document.querySelector(`.${player.name}-hand`).classList.remove('hidden');
  } else if (slap === 'winning-slap') {
    middlePile.classList.add('hidden');
    ajdustHandDisplay(currentGame.player1)
    ajdustHandDisplay(currentGame.player2)
  }
}

function adjustHandDisplay(player) {
  if (player.hand.length === 0) {
    document.querySelector(`.${player.name}-hand`).classList.add('hidden');
  } else {
    document.querySelector(`.${player.name}-hand`).classList.remove('hidden');
  }
}

function loadGame() {
  currentGame = new Game();
  currentGame.dealFullDeck();
  middlePile.classList.add('hidden');
  playerOneWinCount.innerText = `WINS: ${currentGame.player1.wins}`;
  playerTwoWinCount.innerText = `WINS: ${currentGame.player2.wins}`;
}

function displayCard(card) {
  middlePile.classList.remove('hidden');
  middlePile.innerHTML = `<img src="${card.img}" alt="${card.num} of ${card.suit}s">`;
}
