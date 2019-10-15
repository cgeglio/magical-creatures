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
    if (this.spellCount > 2) {
      this.isRested = false;
      return "I SHALL NOT CAST";
    } else {
      return spell.toUpperCase();
    }
  }
}
module.exports = Wizard;
