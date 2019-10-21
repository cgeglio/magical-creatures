class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
    this.encounterCounter = 0;
  }

encounter(human) {
    human.encounterCounter++;
    this.encounterCounter++;
    if (this.encounterCounter != 0 && this.encounterCounter % 3 === 0 ) {
      this.swings++;
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }

}



module.exports = Ogre;
