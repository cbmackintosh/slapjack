
class Game {
  constructor() {
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.activePlayer = null;
    this.deck = [
      {num: '1', suit: 'blue'},
      {num: '2', suit: 'blue'},
      {num: '3', suit: 'blue'},
      {num: '4', suit: 'blue'},
      {num: '5', suit: 'blue'},
      {num: '6', suit: 'blue'},
      {num: '7', suit: 'blue'},
      {num: '8', suit: 'blue'},
      {num: '9', suit: 'blue'},
      {num: '10', suit: 'blue'},
      {num: 'J', suit: 'blue'},
      {num: 'Q', suit: 'blue'},
      {num: 'K', suit: 'blue'},
      {num: '1', suit: 'gold'},
      {num: '2', suit: 'gold'},
      {num: '3', suit: 'gold'},
      {num: '4', suit: 'gold'},
      {num: '5', suit: 'gold'},
      {num: '6', suit: 'gold'},
      {num: '7', suit: 'gold'},
      {num: '8', suit: 'gold'},
      {num: '9', suit: 'gold'},
      {num: '10', suit: 'gold'},
      {num: 'J', suit: 'gold'},
      {num: 'Q', suit: 'gold'},
      {num: 'K', suit: 'gold'},
      {num: '1', suit: 'green'},
      {num: '2', suit: 'green'},
      {num: '3', suit: 'green'},
      {num: '4', suit: 'green'},
      {num: '5', suit: 'green'},
      {num: '6', suit: 'green'},
      {num: '7', suit: 'green'},
      {num: '8', suit: 'green'},
      {num: '9', suit: 'green'},
      {num: '10', suit: 'green'},
      {num: 'J', suit: 'green'},
      {num: 'Q', suit: 'green'},
      {num: 'K', suit: 'green'},
      {num: '1', suit: 'red'},
      {num: '2', suit: 'red'},
      {num: '3', suit: 'red'},
      {num: '4', suit: 'red'},
      {num: '5', suit: 'red'},
      {num: '6', suit: 'red'},
      {num: '7', suit: 'red'},
      {num: '8', suit: 'red'},
      {num: '9', suit: 'red'},
      {num: '10', suit: 'red'},
      {num: 'J', suit: 'red'},
      {num: 'Q', suit: 'red'},
      {num: 'K', suit: 'red'},
    ];
  }
  dealFullDeck() {
    shuffleCards(this.deck);
    for (var i = 0; i < 52; i++) {
      if (i % 2 === 0) {
        this.player1.hand.push(this.deck.pop());
      } else {
        this.player2.hand.push(this.deck.pop());
      }
    }
    this.activePlayer = this.player1;
  }
  changeActivePlayer(player) {
    if (player === this.player1) {
      this.activePlayer = this.player2;
    } else {
      this.activePlayer = this.player1;
    }
  }
  checkSlap(player) {
    if (this.deck[this.deck.length - 1].num === 'J') {
      console.log('slapjack')
      this.winMiddleCards(player)
    } else if (this.deck.length > 2 && this.deck[this.deck.length - 1].num === this.deck[this.deck.length - 2].num) {
      console.log('double')
      this.winMiddleCards(player)
    } else if (this.deck.length > 3 && this.deck[this.deck.length - 1].num === this.deck[this.deck.length - 3].num) {
      console.log('sandwich')
      this.winMiddleCards(player)
    } else {
      console.log('bad slap')
      this.forfeitCard(player);
      this.changeActivePlayer(player);
    }
  }
  winMiddleCards(player) {
    player.hand = player.hand.concat(this.deck.splice(0, this.deck.length));
    shuffleCards(player.hand);
    this.changeActivePlayer(player)
  }
  forfeitCard(player) {
    if (player === currentGame.player1) {
      this.player2.hand.unshift(this.player1.hand.pop());
    } else {
      this.player1.hand.unshift(this.player2.hand.pop());
    }
  }
}
