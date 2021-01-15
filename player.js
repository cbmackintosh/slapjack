
class Player {
  constructor(name, game) {
    this.name = name;
    this.hand = [];
    this.wins = 0;
    this.id = Date.now()
  }
  playCard(){
    currentGame.deck.push(this.hand.splice(this.hand.length - 1, 1)[0]);
    console.log (currentGame.deck[currentGame.deck.length - 1]);
  }
  slap() {
    if (currentGame.deck[currentGame.deck.length - 1].num === 'J' || currentGame.deck[currentGame.deck.length - 1].num === currentGame.deck[currentGame.deck.length - 2].num || currentGame.deck[currentGame.deck.length - 1].num === currentGame.deck[currentGame.deck.length - 3].num) {
      this.hand = this.hand.concat(currentGame.deck.splice(0, currentGame.deck.length));
      shuffleCards(this.hand);
      console.log('GOOD SLAP');
    } else {
      console.log('BAD SLAP');
    }
  }
  saveWinsToStorage() {

  }
}
