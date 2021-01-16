
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.wins = 0;
    this.id = Date.now();
  }

  playCard() {
    if (currentGame.activePlayer === this && this.hand.length > 0) {
      console.log(this.hand[this.hand.length - 1]);
      currentGame.deck.push(this.hand.pop());
      currentGame.changeActivePlayer(this);
    } else if (currentGame.activePlayer === this && this.hand.length === 0) {
      console.log(`You have no cards so you pass`);
      currentGame.changeActivePlayer(this);
    } else {
      console.log(`It's not your turn`)
    }
  }

  slap() {
    currentGame.activePlayer = null;
    if (currentGame.checkSlap(this) === 'good-slap' && this.myOpponentIs().hand.length === 0) {
      this.wins++
      currentGame.gameOver(this);
      console.log(`${this.name} WINS!`)
    } else {
      return
    }
  }

  myOpponentIs() {
    if (this === currentGame.player1) {
      return currentGame.player2;
    } else {
      return currentGame.player1
    }
  }
}
