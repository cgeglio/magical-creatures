class Medusa {
  constructor (name) {
    this.name = name;
    this.statues = [];
    // this.statues.stoned = true;
  }

  stare(victim) {
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues[3].stoned = true;
      this.statues.shift();
    }
  }
}





module.exports = Medusa;
