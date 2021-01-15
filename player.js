
class Player {
  constructor(name, game) {
    this.name = name;
    this.hand = [];
    this.wins = 0;
    this.id = Date.now()
  }
  playCard(){
    game.deck.push(this.hand.splice(this.hand.length - 1, 1)[0]);
  }
  saveWinsToStorage() {

  }
}
