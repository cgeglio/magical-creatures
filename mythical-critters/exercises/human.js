class Human {
  constructor (name) {
    this.name = name;
    this.knockedOut = false;
    this.encounterCounter = 0;

  }



  noticesOgre() {
    if (this.encounterCounter != 0 && this.encounterCounter % 3 === 0 ) {
        return true;
      } else {
        return false;
      }
  }

}


module.exports = Human;
