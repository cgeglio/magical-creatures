class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    // this.human = false;
    // this.wolf = true;
    // this.hungry = true;
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
    }

  // eat(victim) {
  //   if (this.wolf = false) {
  //     this.hungry = false
  //     victim.alive = true;
  //   } else if (this.wolf = true){
  //     victim.alive = false;
  //     this.human = true;
  //   }
  //   }

  eat(victim) {
    if (this.hungry) {
      victim.alive = false;
      this.hungry = false;
      this.human = true;
    }
  }
    // if (this.hungry = true) {
    //
    //   this.human = true;
    // } else {

    }


  // change () {
  //     this.human = !this.human;
  //     this.wolf = !this.wolf;
  // if (this.wolf = true) {
  //    this.hungry = true;
  //  } else {
  //    this.hungry= false;
  //  }
  // }
  // eat (victim) {
  //   if (this.hungry = true) {
  //     victim.alive = false;
  //     this.wolf = !this.wolf;
  //     this.human = !this.human;
  //   } else if (this.human = true)
  //     victim.alive = true;
  //   }
  // }
  //


module.exports = Werewolf;
