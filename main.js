var currentGame = null;

// HELPER FUNCTIONS://

function shuffleCards(cards) {
  for (var i = 0; i < cards.length; i++) {
    cards.splice(i, 0, cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
  }
}

function forfeitCard(player) {
  if (player === currentGame.player1) {
    currentGame.player2.hand.unshift(currentGame.player1.hand.pop());
  } else {
    currentGame.player1.hand.unshift(currentGame.player2.hand.pop());
  }
}
