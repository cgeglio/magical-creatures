class Fairy {
  constructor (name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured';
    this.humanWards = [];

  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust = this.dust * 2;
  }
  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i]);
    }
  }
  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    this.humanWards.push(infant);
    if (this.humanWards.length >=3 ) {
      this.disposition = 'Good natured';
    }
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious'
    } else {
      return infant;
    }
  }
}



module.exports = Fairy;
