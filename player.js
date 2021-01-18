
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.wins = JSON.parse(localStorage.getItem(this.name)) || 0;
    this.id = Date.now();
  }

  playCard() {
    if (currentGame.activePlayer === this && this.hand.length > 0 && this.myOpponentIs().hand.length > 0) {
      currentGame.deck.push(this.hand.pop());
      currentGame.activePlayer = this.myOpponentIs();
      return 'VALID-PLAY';
    } else if (currentGame.activePlayer === this && this.myOpponentIs().hand.length === 0) {
      currentGame.deck.push(this.hand.pop());
      currentGame.activePlayer = this;
      return 'SKIP-OPPONENT';
    } else {
      return 'INVALID-PLAY';
    }
  }

  slap() {
    if (this.hand.length === 0) {
      return currentGame.endGameCondition1(this);
    } else if (this.myOpponentIs().hand.length === 0) {
      return currentGame.endGameCondition2(this);
    } else if (currentGame.deck.length > 0){
      return currentGame.checkSlap(this);
    } else {
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
