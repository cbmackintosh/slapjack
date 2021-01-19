
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.wins = JSON.parse(localStorage.getItem(this.name)) || 0;
    this.id = Date.now();
  }

  playCard() {
    if (currentGame.activePlayer === this && this.hand.length && this.myOpponentIs().hand.length) {
      currentGame.deck.push(this.hand.pop());
      currentGame.activePlayer = this.myOpponentIs();
      return 'VALID-PLAY';
    } else if (currentGame.activePlayer === this && this.hand.length && !this.myOpponentIs().hand.length) {
      currentGame.deck.push(this.hand.pop());
      currentGame.activePlayer = this;
      return 'SKIP-OPPONENT';
    } else if (currentGame.activePlayer === this && currentGame.deck.length === 52) {
      this.hand = this.hand.concat(currentGame.deck.splice(0, currentGame.deck.length));
      currentGame.shuffleCards(this.hand);
      currentGame.activePlayer = this;
      return 'RESHUFFLE';
    } else {
      return 'INVALID-PLAY';
    }
  }

  slap() {
    if (!this.hand.length && currentGame.deck.length) {
      return currentGame.endGameCondition1(this);
    } else if (!this.myOpponentIs().hand.length && currentGame.deck.length) {
      return currentGame.endGameCondition2(this);
    } else if (currentGame.deck.length){
      return currentGame.checkSlap(this);
    } else if (!currentGame.deck.length) {
      return 'INVALID-SLAP';
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
