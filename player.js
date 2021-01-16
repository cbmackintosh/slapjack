
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.wins = 0;
    this.id = Date.now();
  }
  playCard() {
    if (currentGame.activePlayer === this) {
      console.log(this.hand[this.hand.length - 1]);
      currentGame.deck.push(this.hand.pop());
      currentGame.changeActivePlayer(this);
    } else {
      console.log(`It's not your turn`);
    }
  }
  slap() {
    currentGame.activePlayer = null;
    currentGame.checkSlap(this);
  }
}
