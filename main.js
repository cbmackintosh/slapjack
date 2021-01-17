var currentGame = null;

var middlePile = document.querySelector('.middle-pile');

window.addEventListener('load', loadGame)
document.addEventListener('keydown', controls);

function controls(event) {
  if (event.key === 'q' && currentGame.activePlayer === currentGame.player1) {
    currentGame.player1.playCard();
    displayCard(currentGame.deck[currentGame.deck.length - 1])
  } else if (event.key === 'p' && currentGame.activePlayer === currentGame.player2) {
    currentGame.player2.playCard();
    displayCard(currentGame.deck[currentGame.deck.length - 1])
  } else if (event.key === 'f') {
    currentGame.player1.slap();
  } else if (event.key === 'j') {
    currentGame.player2.slap();
  }
}

function loadGame() {
  currentGame = new Game();
  currentGame.dealFullDeck();
  middlePile.classList.add('hidden');
}

function displayCard(card) {
  middlePile.classList.remove('hidden');
  middlePile.innerHTML = `<img src="${card.img}">`
}
