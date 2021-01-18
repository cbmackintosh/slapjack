
var currentGame;

window.addEventListener('load', loadGame)

function loadGame() {
  currentGame = new Game()
  currentGame.dealFullDeck()
}

document.addEventListener('keydown', controls)

function controls() {
  if (event.key === 'q') {
    currentGame.player1.playCard();
  } else if (event.key === 'p') {
    currentGame.player2.playCard();
  } else if (event.key === 'f') {
    currentGame.player1.slap();
  } else if (event.key === 'j') {
    currentGame.player2.slap();
  }
}
