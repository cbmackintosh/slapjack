
class Game {
  constructor() {
    this.player1 = new Player('PLAYER 1');
    this.player2 = new Player('PLAYER 2');
    this.activePlayer = null;
    this.deck = [
      {num: 'A', suit: 'BLUE', img:'./assets/blue-01.png'},
      {num: '2', suit: 'BLUE', img:'./assets/blue-02.png'},
      {num: '3', suit: 'BLUE', img:'./assets/blue-03.png'},
      {num: '4', suit: 'BLUE', img:'./assets/blue-04.png'},
      {num: '5', suit: 'BLUE', img:'./assets/blue-05.png'},
      {num: '6', suit: 'BLUE', img:'./assets/blue-06.png'},
      {num: '7', suit: 'BLUE', img:'./assets/blue-07.png'},
      {num: '8', suit: 'BLUE', img:'./assets/blue-08.png'},
      {num: '9', suit: 'BLUE', img:'./assets/blue-09.png'},
      {num: '10', suit: 'BLUE', img:'./assets/blue-10.png'},
      {num: 'J', suit: 'BLUE', img:'./assets/blue-jack.png'},
      {num: 'Q', suit: 'BLUE', img:'./assets/blue-queen.png'},
      {num: 'K', suit: 'BLUE', img:'./assets/blue-king.png'},
      {num: 'A', suit: 'GOLD', img:'./assets/gold-01.png'},
      {num: '2', suit: 'GOLD', img:'./assets/gold-02.png'},
      {num: '3', suit: 'GOLD', img:'./assets/gold-03.png'},
      {num: '4', suit: 'GOLD', img:'./assets/gold-04.png'},
      {num: '5', suit: 'GOLD', img:'./assets/gold-05.png'},
      {num: '6', suit: 'GOLD', img:'./assets/gold-06.png'},
      {num: '7', suit: 'GOLD', img:'./assets/gold-07.png'},
      {num: '8', suit: 'GOLD', img:'./assets/gold-08.png'},
      {num: '9', suit: 'GOLD', img:'./assets/gold-09.png'},
      {num: '10', suit: 'GOLD', img:'./assets/gold-10.png'},
      {num: 'J', suit: 'GOLD', img:'./assets/gold-jack.png'},
      {num: 'Q', suit: 'GOLD', img:'./assets/gold-queen.png'},
      {num: 'K', suit: 'GOLD', img:'./assets/gold-king.png'},
      {num: 'A', suit: 'GREEN', img:'./assets/green-01.png'},
      {num: '2', suit: 'GREEN', img:'./assets/green-02.png'},
      {num: '3', suit: 'GREEN', img:'./assets/green-03.png'},
      {num: '4', suit: 'GREEN', img:'./assets/green-04.png'},
      {num: '5', suit: 'GREEN', img:'./assets/green-05.png'},
      {num: '6', suit: 'GREEN', img:'./assets/green-06.png'},
      {num: '7', suit: 'GREEN', img:'./assets/green-07.png'},
      {num: '8', suit: 'GREEN', img:'./assets/green-08.png'},
      {num: '9', suit: 'GREEN', img:'./assets/green-09.png'},
      {num: '10', suit: 'GREEN', img:'./assets/green-10.png'},
      {num: 'J', suit: 'GREEN', img:'./assets/green-jack.png'},
      {num: 'Q', suit: 'GREEN', img:'./assets/green-queen.png'},
      {num: 'K', suit: 'GREEN', img:'./assets/green-king.png'},
      {num: 'A', suit: 'RED', img:'./assets/red-01.png'},
      {num: '2', suit: 'RED', img:'./assets/red-02.png'},
      {num: '3', suit: 'RED', img:'./assets/red-03.png'},
      {num: '4', suit: 'RED', img:'./assets/red-04.png'},
      {num: '5', suit: 'RED', img:'./assets/red-05.png'},
      {num: '6', suit: 'RED', img:'./assets/red-06.png'},
      {num: '7', suit: 'RED', img:'./assets/red-07.png'},
      {num: '8', suit: 'RED', img:'./assets/red-08.png'},
      {num: '9', suit: 'RED', img:'./assets/red-09.png'},
      {num: '10', suit: 'RED', img:'./assets/red-10.png'},
      {num: 'J', suit: 'RED', img:'./assets/red-jack.png'},
      {num: 'Q', suit: 'RED', img:'./assets/red-queen.png'},
      {num: 'K', suit: 'RED', img:'./assets/red-king.png'},
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
    this.activePlayer = player.myOpponentIs();
    console.log(`IT IS ${this.activePlayer.name}'s TURN`);
  }

  checkSlap(player) {
    if (this.deck[this.deck.length - 1].num === 'J') {
      console.log(`${player.name} - SLAPJACK!`);
      this.winMiddleCards(player);
      return `SLAPJACK! - ${player.name} WINS THE MIDDLE PILE!`;
    } else if (this.deck.length >= 2 && this.deck[this.deck.length - 1].num === this.deck[this.deck.length - 2].num) {
      this.winMiddleCards(player);
      return `DOUBLE! - ${player.name} WINS THE MIDDLE PILE!`;
    } else if (this.deck.length >= 3 && this.deck[this.deck.length - 1].num === this.deck[this.deck.length - 3].num) {
      this.winMiddleCards(player)
      return `SANDWICH! - ${player.name} WINS THE MIDDLE PILE!`
    } else {
      this.forfeitCard(player);
      this.changeActivePlayer(player);
      return `BAD SLAP FROM ${player.name}. FORFEITS CARD TO ${player.myOpponentIs().name}`;
    }
  }

  endGameCondition1(player) {
    if (this.deck[this.deck.length - 1].num === 'J') {
      this.winMiddleCards(player);
      this.changeActivePlayer(player);
      return `SLAPJACK! ${player.name} WINS THE MIDDLE PILE AND STAYS ALIVE!`
    } else {
      player.myOpponentIs().wins++;
      player.myOpponentIs().saveWinsToStorage();
      this.gameOver(player.myOpponentIs());
      return `BAD SLAP FROM ${player.name} - ${player.myOpponentIs().name} WINS THE GAME!`
    }
  }

  endGameCondition2(player) {
    if (this.deck[this.deck.length - 1].num === 'J') {
      player.wins++;
      player.saveWinsToStorage();
      this.gameOver(player);
      return `SLAPJACK! ${player.name} WINS THE GAME!`
    } else {
      this.forfeitCard(player);
      this.changeActivePlayer(player);
      return `BAD SLAP FROM ${player.name}, FORFEIT CARD TO ${player.myOpponentIs().name}`;
    }
  }

  winMiddleCards(player) {
    player.hand = player.hand.concat(this.deck.splice(0, this.deck.length));
    this.shuffleCards(player.hand);
    this.changeActivePlayer(player);
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
