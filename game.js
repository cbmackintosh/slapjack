
class Game {
  constructor() {
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.activePlayer = null;
    this.deck = [
      {num: '1', suit: 'blue', img:'./assets/blue-01.png'},
      {num: '2', suit: 'blue', img:'./assets/blue-02.png'},
      {num: '3', suit: 'blue', img:'./assets/blue-03.png'},
      {num: '4', suit: 'blue', img:'./assets/blue-04.png'},
      {num: '5', suit: 'blue', img:'./assets/blue-05.png'},
      {num: '6', suit: 'blue', img:'./assets/blue-06.png'},
      {num: '7', suit: 'blue', img:'./assets/blue-07.png'},
      {num: '8', suit: 'blue', img:'./assets/blue-08.png'},
      {num: '9', suit: 'blue', img:'./assets/blue-09.png'},
      {num: '10', suit: 'blue', img:'./assets/blue-10.png'},
      {num: 'J', suit: 'blue', img:'./assets/blue-jack.png'},
      {num: 'Q', suit: 'blue', img:'./assets/blue-queem.png'},
      {num: 'K', suit: 'blue', img:'./assets/blue-king.png'},
      {num: '1', suit: 'gold', img:'./assets/gold-01.png'},
      {num: '2', suit: 'gold', img:'./assets/gold-02.png'},
      {num: '3', suit: 'gold', img:'./assets/gold-03.png'},
      {num: '4', suit: 'gold', img:'./assets/gold-04.png'},
      {num: '5', suit: 'gold', img:'./assets/gold-05.png'},
      {num: '6', suit: 'gold', img:'./assets/gold-06.png'},
      {num: '7', suit: 'gold', img:'./assets/gold-07.png'},
      {num: '8', suit: 'gold', img:'./assets/gold-08.png'},
      {num: '9', suit: 'gold', img:'./assets/gold-09.png'},
      {num: '10', suit: 'gold', img:'./assets/gold-10.png'},
      {num: 'J', suit: 'gold', img:'./assets/gold-jack.png'},
      {num: 'Q', suit: 'gold', img:'./assets/gold-queen.png'},
      {num: 'K', suit: 'gold', img:'./assets/gold-king.png'},
      {num: '1', suit: 'green', img:'./assets/green-01.png'},
      {num: '2', suit: 'green', img:'./assets/green-02.png'},
      {num: '3', suit: 'green', img:'./assets/green-03.png'},
      {num: '4', suit: 'green', img:'./assets/green-04.png'},
      {num: '5', suit: 'green', img:'./assets/green-05.png'},
      {num: '6', suit: 'green', img:'./assets/green-06.png'},
      {num: '7', suit: 'green', img:'./assets/green-07.png'},
      {num: '8', suit: 'green', img:'./assets/green-08.png'},
      {num: '9', suit: 'green', img:'./assets/green-09.png'},
      {num: '10', suit: 'green', img:'./assets/green-10.png'},
      {num: 'J', suit: 'green', img:'./assets/green-jack.png'},
      {num: 'Q', suit: 'green', img:'./assets/green-queen.png'},
      {num: 'K', suit: 'green', img:'./assets/green-king.png'},
      {num: '1', suit: 'red', img:'./assets/red-01.png'},
      {num: '2', suit: 'red', img:'./assets/red-02.png'},
      {num: '3', suit: 'red', img:'./assets/red-03.png'},
      {num: '4', suit: 'red', img:'./assets/red-04.png'},
      {num: '5', suit: 'red', img:'./assets/red-05.png'},
      {num: '6', suit: 'red', img:'./assets/red-06.png'},
      {num: '7', suit: 'red', img:'./assets/red-07.png'},
      {num: '8', suit: 'red', img:'./assets/red-08.png'},
      {num: '9', suit: 'red', img:'./assets/red-09.png'},
      {num: '10', suit: 'red', img:'./assets/red-10.png'},
      {num: 'J', suit: 'red', img:'./assets/red-jack.png'},
      {num: 'Q', suit: 'red', img:'./assets/red-queen.png'},
      {num: 'K', suit: 'red', img:'./assets/red-king.png'},
    ];
  }

  dealFullDeck() {
    this.shuffleCards(this.deck);
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
    this.shuffleCards(player.hand);
    this.changeActivePlayer(player)
  }

  forfeitCard(player) {
    if (player === currentGame.player1) {
      this.player2.hand.unshift(this.player1.hand.pop());
    } else {
      this.player1.hand.unshift(this.player2.hand.pop());
    }
  }

  shuffleCards(cards) {
    for (var i = 0; i < cards.length; i++) {
      cards.splice(i, 0, cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
  }

}
