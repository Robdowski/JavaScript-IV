class GameObject {
  constructor(att) {
    this.createdAt = att.createdAt;
    this.name = att.name;
    this.dimensions = att.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(att) {
    super(att);
    this.healthPoints = att.healthPoints;
    this.name = att.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(att) {
    super(att);
    this.team = att.team;
    this.weapons = att.weapons;
    this.language = att.language;
  }
  greet() {
    return `${this.name} returns a greeting in ${this.language}`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

class Villain extends Humanoid {
  constructor(att) {
    super(att);
    this.evil = att.evil;
    this.city = att.city;
    this.enemy = att.enemy;
  }
  evilPlan() {
    return `${this.name} is plotting to destroy ${this.city}.`;
  }
  bigMistake() {
    return `What an idiot! ${
      this.name
    } is giving an absurdly long monologue instead of using ${
      this.weapons
    }, giving ${this.enemy} time to plan.`;
  }
}

class Hero extends Humanoid {
  constructor(att) {
    super(att);
    this.good = att.good;
    this.city = att.city;
    this.enemy = att.enemy;
  }
  batSignal() {
    return `${this.name} has been alerted that a Villain is present in ${
      this.city
    }.`;
  }
  exile() {
    return `${this.name} picks ${this.enemy} up by his underwear and sends ${
      this.enemy
    } hurdling through space into the sun. Yeah, ${this.name} kills.`;
  }
}

const batman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 6
  },
  healthPoints: 20,
  name: "Bruce Wayne",
  team: "Gotham",
  weapons: "Batarang",
  language: "English",
  city: "Gotham",
  good: "65%",
  enemy: "The Joker"
});

const joker = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 5
  },
  healthPoints: 12,
  name: "The Joker",
  team: "Gotham Underbelly",
  weapons: "Bomb",
  language: "English",
  city: "Gotham",
  evil: "98%",
  enemy: "Batman"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(joker.evilPlan());
console.log(batman.batSignal());
console.log(joker.bigMistake());
console.log(batman.exile());
