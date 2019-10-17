class Wizard {
  constructor (wizard) {
    this.name = wizard.name;
    this.isRested = true;
    this.spellCount = 0;
    if (wizard.isRested !== undefined) {
      this.isRested = wizard.isRested;
    }
    this.bearded = true;
    if (wizard.bearded !== undefined) {
      this.bearded = wizard.bearded;
    }
  }
  incantation (incantation) {
    return incantation.toUpperCase();
  }
  cast (spell) {
    this.spellCount++;
    if (this.spellCount >= 3) {
      this.isRested = false;
    } else {
      if (this.spellCount <4)
      return spell.toUpperCase();
    }
    return "I SHALL NOT CAST";
  }
}
module.exports = Wizard;
