// Lets play some Pong!

// pong

// For those who don't know what Pong is, it is a simple arcade game where two players can move their paddles to hit a ball towards the opponent's side of the screen, gaining a point for each opponent's miss. You can read more about it here.
// Task:

// You must finish the Pong class. It has a constructor which accepts the maximum score a player can get throughout the game, and a method called play. This method determines whether the current player hit the ball or not, i.e. if the paddle is at the sufficient height to hit it back. There're 4 possible outcomes: player successfully hits the ball back, player misses the ball, player misses the ball and his opponent reaches the maximum score winning the game, either player tries to hit a ball despite the game being over. You can see the input and output description in detail below.
// "Play" method input:

//     ball position - The Y coordinate of the ball
//     player position - The Y coordinate of the centre(!) of the current player's paddle

// "Play" method output:

// One of the following strings:

//     "Player X has hit the ball!" - If the ball "hits" the paddle
//     "Player X has missed the ball!" - If the ball is above/below the paddle
//     "Player X has won the game!" - If one of the players has reached the maximum score
//     "Game Over!" - If the game has ended when the play method is called

// Important notes:

//     Players take turns hitting the ball, always starting the game with the Player 1.
//     The paddles are 7 pixels in height.
//     The ball is 1 pixel in height.


// MY SOLUTION
class Pong {
    constructor(maxScore) {
      this.maxScore = maxScore;
      this.playerOne = {name: 'Player 1', score: 0}
      this.playerTwo = {name: 'Player 2', score: 0}
      this.gameOver = false;
      this.round = 0
      
    }
    
    play(ballPos, playerPos) {
        if (!this.gameOver) {
            let range = Math.abs(ballPos - playerPos);
            if (range > 3) {
               let missed = this.round % 2 == 0 ? this.playerOne : this.playerTwo;
               let winner = this.round % 2 == 0 ? this.playerTwo : this.playerOne;
               winner.score += 1
               this.round += 1
               console.log(missed, winner)
               const msg = winner.score == this.maxScore ? `${winner.name} has won the game!` : `${missed.name} has missed the ball!`
               this.gameOver = winner.score == this.maxScore ? true : false 
               return msg
            } else {
               let hit = this.round % 2 == 0 ? `${this.playerOne.name} has hit the ball!` : `${this.playerTwo.name} has hit the ball!`
               this.round += 1
               return hit
            }
        } else {
            this.round = 0;
            this.playerOne.score = 0;
            this.playerTwo.score = 0;
            this.maxScore = 0;
            return 'Game Over!'
        }
        
       
    }
  }


//  CODEWARS SOLUTION

// class Pong {
//     constructor(maxScore) {
//       this.maxScore = maxScore;
//       this.turn = 0;
//       this.scores = {
//         1: 0,
//         2: 0
//       },
//       this.gameOver = false
//     }
    
//     play(ballPos, playerPos) {
    
//       this.turn = this.turn % 2 + 1;
    
//       if(this.gameOver){
//         return 'Game Over!';
//       }
      
//       if(Math.abs(playerPos - ballPos) <= 3.5){
//         return `Player ${this.turn} has hit the ball!`;
//       } else {
//         this.scores[this.turn] += 1;
        
//         if(this.scores[this.turn] == this.maxScore){
//           this.gameOver = true;
//           return `Player ${this.turn % 2 + 1} has won the game!`;
//         }  
//         return `Player ${this.turn} has missed the ball!`;
//       }  
//     }
//   }

  
  
