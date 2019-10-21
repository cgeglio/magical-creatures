class Sphinx {
  constructor () {
    this.riddles = [];
    this.heroesEaten = 0;
    this.wrongCount = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3)
      this.riddles.shift();
  }

  attemptAnswer(guess) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === guess) {

          this.riddles.splice(i, 1);



      } else {
        this.wrongCount++;
        if (this.wrongCount === 3) {
          this.heroesEaten++;
        }
        }

      }
      if (this.riddles.length === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`
      } else {
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }



    }
  }



module.exports = Sphinx;
