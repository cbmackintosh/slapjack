
class Game {
  constructor() {
    this.player1 = new Player('PLAYER 1');
    this.player2 = new Player('PLAYER 2');
    this.activePlayer = null;
    this.deck = [
      {num: 'ACE', suit: 'BLUE', img:'./assets/blue-01.png'},
      {num: '2', suit: 'BLUE', img:'./assets/blue-02.png'},
      {num: '3', suit: 'BLUE', img:'./assets/blue-03.png'},
      {num: '4', suit: 'BLUE', img:'./assets/blue-04.png'},
      {num: '5', suit: 'BLUE', img:'./assets/blue-05.png'},
      {num: '6', suit: 'BLUE', img:'./assets/blue-06.png'},
      {num: '7', suit: 'BLUE', img:'./assets/blue-07.png'},
      {num: '8', suit: 'BLUE', img:'./assets/blue-08.png'},
      {num: '9', suit: 'BLUE', img:'./assets/blue-09.png'},
      {num: '10', suit: 'BLUE', img:'./assets/blue-10.png'},
      {num: 'JACK', suit: 'BLUE', img:'./assets/blue-jack.png'},
      {num: 'QUEEN', suit: 'BLUE', img:'./assets/blue-queen.png'},
      {num: 'KING', suit: 'BLUE', img:'./assets/blue-king.png'},
      {num: 'ACE', suit: 'GOLD', img:'./assets/gold-01.png'},
      {num: '2', suit: 'GOLD', img:'./assets/gold-02.png'},
      {num: '3', suit: 'GOLD', img:'./assets/gold-03.png'},
      {num: '4', suit: 'GOLD', img:'./assets/gold-04.png'},
      {num: '5', suit: 'GOLD', img:'./assets/gold-05.png'},
      {num: '6', suit: 'GOLD', img:'./assets/gold-06.png'},
      {num: '7', suit: 'GOLD', img:'./assets/gold-07.png'},
      {num: '8', suit: 'GOLD', img:'./assets/gold-08.png'},
      {num: '9', suit: 'GOLD', img:'./assets/gold-09.png'},
      {num: '10', suit: 'GOLD', img:'./assets/gold-10.png'},
      {num: 'JACK', suit: 'GOLD', img:'./assets/gold-jack.png'},
      {num: 'QUEEN', suit: 'GOLD', img:'./assets/gold-queen.png'},
      {num: 'KING', suit: 'GOLD', img:'./assets/gold-king.png'},
      {num: 'ACE', suit: 'GREEN', img:'./assets/green-01.png'},
      {num: '2', suit: 'GREEN', img:'./assets/green-02.png'},
      {num: '3', suit: 'GREEN', img:'./assets/green-03.png'},
      {num: '4', suit: 'GREEN', img:'./assets/green-04.png'},
      {num: '5', suit: 'GREEN', img:'./assets/green-05.png'},
      {num: '6', suit: 'GREEN', img:'./assets/green-06.png'},
      {num: '7', suit: 'GREEN', img:'./assets/green-07.png'},
      {num: '8', suit: 'GREEN', img:'./assets/green-08.png'},
      {num: '9', suit: 'GREEN', img:'./assets/green-09.png'},
      {num: '10', suit: 'GREEN', img:'./assets/green-10.png'},
      {num: 'JACK', suit: 'GREEN', img:'./assets/green-jack.png'},
      {num: 'QUEEN', suit: 'GREEN', img:'./assets/green-queen.png'},
      {num: 'KING', suit: 'GREEN', img:'./assets/green-king.png'},
      {num: 'AACE', suit: 'RED', img:'./assets/red-01.png'},
      {num: '2', suit: 'RED', img:'./assets/red-02.png'},
      {num: '3', suit: 'RED', img:'./assets/red-03.png'},
      {num: '4', suit: 'RED', img:'./assets/red-04.png'},
      {num: '5', suit: 'RED', img:'./assets/red-05.png'},
      {num: '6', suit: 'RED', img:'./assets/red-06.png'},
      {num: '7', suit: 'RED', img:'./assets/red-07.png'},
      {num: '8', suit: 'RED', img:'./assets/red-08.png'},
      {num: '9', suit: 'RED', img:'./assets/red-09.png'},
      {num: '10', suit: 'RED', img:'./assets/red-10.png'},
      {num: 'JACK', suit: 'RED', img:'./assets/red-jack.png'},
      {num: 'QUEEN', suit: 'RED', img:'./assets/red-queen.png'},
      {num: 'KING', suit: 'RED', img:'./assets/red-king.png'},
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

  checkSlap(player) {
    if (this.deck[this.deck.length - 1].num === 'JACK') {
      this.winMiddleCards(player);
      return `SLAPJACK`;
    } else if (this.deck.length >= 2 && this.deck[this.deck.length - 1].num === this.deck[this.deck.length - 2].num) {
      this.winMiddleCards(player);
      return `DOUBLE`;
    } else if (this.deck.length >= 3 && this.deck[this.deck.length - 1].num === this.deck[this.deck.length - 3].num) {
      this.winMiddleCards(player)
      return `SANDWICH`
    } else {
      this.forfeitCard(player);
      this.activePlayer = player.myOpponentIs();
      return `BAD-SLAP`;
    }
  }

  endGameCondition1(player) {
    if (this.deck[this.deck.length - 1].num === 'JACK') {
      this.winMiddleCards(player);
      this.changeActivePlayer(player);
      return `SAVING-SLAP`
    } else {
      player.myOpponentIs().wins++;
      player.myOpponentIs().saveWinsToStorage();
      this.gameOver(player.myOpponentIs());
      return `LOSING-SLAP`
    }
  }

  endGameCondition2(player) {
    if (this.deck[this.deck.length - 1].num === 'JACK') {
      player.wins++;
      player.saveWinsToStorage();
      this.gameOver(player);
      return `WINNING-SLAP`
    } else {
      this.forfeitCard(player);
      this.changeActivePlayer(player);
      return `BAD-SLAP`;
    }
  }

  winMiddleCards(player) {
    player.hand = player.hand.concat(this.deck.splice(0, this.deck.length));
    this.shuffleCards(player.hand);
    this.activePlayer = player.myOpponentIs();
  }

  forfeitCard(player) {
    player.myOpponentIs().hand.unshift(player.hand.pop());
  }

  shuffleCards(cards) {
    for (var i = 0; i < cards.length; i++) {
      cards.splice(i, 0, cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
  }

  gameOver(winningPlayer) {
    this.deck = this.deck.concat(winningPlayer.hand.splice(0, winningPlayer.hand.length));
    this.shuffleCards(this.deck);
    this.dealFullDeck();
  }
}
