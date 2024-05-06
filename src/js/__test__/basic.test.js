import {Character, Team}  from '../app';

let Player1 = new Character('маг', 100);
let Player2 = new Character('лучник', 80);
let Player3 = new Character('мечник', 10);

test('creating new character', () => {
  expect(Player1).toEqual({name: 'маг', health: 100});
});

test('adding new character', () => {
  let myTeam = new Team();
  myTeam.add(Player1);
  expect(() => myTeam.add(Player1)).toThrow('Нельзя добавить игрока повторно!');
});

test('adding multiple characters', () => {
  let myTeam = new Team();
  myTeam.addAll(Player1, Player2, Player3);
  expect(myTeam.members.size).toEqual(3);
});

test('testing toArray method', () => {
  let myTeam = new Team();
  myTeam.addAll(Player1, Player2, Player3);
  myTeam.toArray();
  expect(myTeam.members).toEqual([{name: 'маг', health: 100}, {name: 'лучник', health: 80}, {name: 'мечник', health: 10}]);
});