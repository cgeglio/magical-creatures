class Direwolf {
  constructor (name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    stark.safe = true;
    if (stark.location === this.home) {
    // for (var i = 0; i < stark.length; i++)  {
    this.starksToProtect.push(stark);
    this.huntsWhiteWalkers = false;

    // [i]
  }
  if (this.starksToProtect.length > 2) {
    this.starksToProtect.pop([2]);
    [2].safe = false;
  }
}
  leave(stark) {
    stark.safe = false;
    this.starksToProtect = [];

}
}

module.exports = Direwolf;
