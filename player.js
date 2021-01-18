
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.wins = JSON.parse(localStorage.getItem(this.name)) || 0;
    this.id = Date.now();
  }

  playCard() {
    if (currentGame.activePlayer === this && this.hand.length > 0) {
      currentGame.deck.push(this.hand.pop());
      currentGame.changeActivePlayer(this);
      return `${this.name} PLAYS THE ${currentGame.deck[currentGame.deck.length - 1].num} OF ${currentGame.deck[currentGame.deck.length - 1].suit}`;
    } else if (currentGame.activePlayer === this && this.hand.length === 0) {
      currentGame.changeActivePlayer(this);
      return `${this.name} HAS NO CARDS AND MUST PASS`;
    } else {
      return `IT IS NOT ${this.name}'s TURN`;
    }
  }

  slap() {
    if (currentGame.deck.length === 0) {
      return;
    } else if (this.hand.length === 0) {
      return currentGame.endGameCondition1(this);
    } else if (this.myOpponentIs().hand.length === 0) {
      return currentGame.endGameCondition2(this);
    } else {
      return currentGame.checkSlap(this)
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
