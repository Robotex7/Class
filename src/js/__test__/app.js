export class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

export class Team {
  constructor() {
      this.members = new Set();
  }

  add(character) {
      if (this.members.has(character)) {
          throw new Error('Нельзя добавить игрока повторно!');
      }
      this.members.add(character);
  }

  addAll(...characters) {
      for (let character of characters) {
          this.members.add(character);
      }
  }

  toArray() {
      return this.members = Array.from(this.members);
  }
}