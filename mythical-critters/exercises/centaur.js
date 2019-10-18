class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.activityCount = 0;
    this.layingDown = false;
    this.rested = true;
    }

  shoot() {
    this.activityCount++;
    if (this.activityCount >= 3) {
      this.rested = false;
      this.cranky = true;
      return 'NO!';
    }
    if (this.layingDown === true) {
      return 'NO!';
      this.cranky = true;
    }
    if (this.layingDown === false) {
      return 'Twang!!!';
      this.cranky = false;
  }
}

  run() {
    this.activityCount++;
    if (this.activityCount >= 3) {
      this.cranky = true;
      return 'NO!'}
    if (this.layingDown === true) {
      this.cranky = false;
      return 'NO!'
    }
    if (this.layingDown === false) {
      this.cranky = false;
      return 'Clop clop clop clop!!!';
  }
}

  sleep () {
    if (this.layingDown === false) {
      this.cranky = true;
      this.rested = false;
      return 'NO!';
    }
    if (this.layingDown === true) {
      this.cranky = false;
      this.rested = true;
      this.activityCount = 0;
      return 'ZZZZ';
    }
  }

  layDown () {
    this.standing = false;
    this.layingDown = true;
  }

  standUp () {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion () {
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
    if (this.rested === true) {
      this.cranky = true; }
    else {
        this.cranky = false;
      }
    // if (this.rested === false) {
    //   this.cranky = false;
    // }
  }
}




module.exports = Centaur;
