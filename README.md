# SlapJack

**By:** Cameron Mackintosh (https://github.com/cbmackintosh)

Slapjack is a simple standard 52-deck card game with two or more players. This application allows two users to play the game on a single computer, sharing the keyboard as controls. The deck is shuffled and dealt face-down evenly between the two players, and players take turn playing their top-most card face-up onto the central pile. If a Jack of any suit is played, both players have the ability to slap the pile using their respective keys and win the entire middle pile. Doubles and sandwiches also represent valid slaps. If a player makes an invalid slap, they are penalized by giving the top-most card in their hand to their opponent who adds it to the bottom of their hand. The object of the game is to win all the cards.

When one or more players run out of cards, the remain player continues dealing out cards. The game accounts for several possibilities in this scenario
* If the player without cards slaps a jack, they win the middle pile and the game resumes normally
* If the player without cards makes an invalid slap, they lose and the game resets automatically. Doubles and sandwiches are not valid slaps when one player is out of cards.
* If the player with cards slaps a Jack, they win and the game resets.
* If the player with cards makes an invalid slap, they forfeit their top card to the other player as usual
* If all cards are played into the middle pile, the deck is reshuffled and returned to the last player to have cards and play resumes until a Jack is slapped

<img width="1391" alt="Screen Shot 2021-01-19 at 2 02 23 PM" src="https://user-images.githubusercontent.com/72054706/105092867-0cea3280-5a5f-11eb-8e25-a8c8152b8b10.png">

**TECHNOLOGIES USED**
Programming languages
* JavaScript ES6
* HTML5 and CSS

Text-editor:
* Atom 1.54.0

Browser used for testing:
* Google Chrome 87.0.4280.88

**INSTRUCTIONS FOR RUNNING THE APPLICATION:**
A GitHub Pages deploy link is not currently available for the project. Clone this repository and open index.html in your web browser. A new game is launched and cards are dealt automatically on page load. Controls are exclusively on the keyboard:

PLAYER 1 CONTROLS:
* Q to play a card
* F to slap the middle pile

PLAYER 1 CONTROLS:
* P to play a card
* J to slap the middle pile

**FUTURE ADDITIONS**
* Support for more than two players
* UI improvements to add sound and give cards animation and three dimensional depth
* Accept user input for player names, access a leaderboard from localStorage
* Other variations of the game, like Egyptian Rat Screw.
