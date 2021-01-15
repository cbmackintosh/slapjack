
// HELPER FUNCTIONS://

function shuffleCards(cards) {
  for (var i = 0; i < cards.length; i++) {
    cards.splice(i, 0, cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
  }
}
