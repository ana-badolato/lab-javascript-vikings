// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
      this.health-=damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health-=damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health-=damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(newVicking) {
    this.vikingArmy.push(newVicking);
  }

  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }

  vikingAttack() {
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);

    let saxon = this.saxonArmy[saxonRandom];
    let viking = this.vikingArmy[vikingRandom];

    let result = saxon.receiveDamage(viking.attack());

    if (saxon.health <= 0) {
        this.saxonArmy.splice(saxonRandom, 1);
    }

    return result;
}

  saxonAttack() {
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);

    let saxon = this.saxonArmy[saxonRandom];
    let viking = this.vikingArmy[vikingRandom];

    let result = viking.receiveDamage(saxon.attack());

    if (viking.health <= 0) {
        this.vikingArmy.splice(vikingRandom, 1);
    }

    return result;
}
}

