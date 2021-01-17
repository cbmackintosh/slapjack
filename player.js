
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.wins = JSON.parse(localStorage.getItem(this.name)) || 0;
    this.id = Date.now();
  }

  playCard() {
    if (currentGame.activePlayer === this && this.hand.length > 0) {
      console.log(`${this.name} PLAYS THE ${this.hand[this.hand.length - 1].num} OF ${this.hand[this.hand.length - 1].suit}`);
      currentGame.deck.push(this.hand.pop());
      currentGame.changeActivePlayer(this);
    } else if (currentGame.activePlayer === this && this.hand.length === 0) {
      console.log(`${this.name} HAS NO CARDS AND MUST PASS`);
      currentGame.changeActivePlayer(this);
    } else {
      console.log(`IT IS NOT ${this.name}'s TURN`);
    }
  }

  myOpponentIs() {
    if (this === currentGame.player1) {
      return currentGame.player2;
    } else {
      return currentGame.player1;
    }
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name, this.wins);
  }
}
