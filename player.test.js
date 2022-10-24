/* eslint-disable prefer-destructuring */
const Player = require('./player');

test('Crear jugador instancia de Player', () => {
  const player1 = new Player();
  expect(typeof player1).toBe('object');
  expect(player1).toBeInstanceOf(Object);
});

test('Crear jugador con nombre, se almacena nombre en propiedad name', () => {
  const player1 = new Player('Pepe');
  expect(player1.name).toBe('Pepe');
});

test('Crear jugador, si el sexo no es male o female, guardarlo como female', () => {
  const player1 = new Player('Pepe', 'neutro');
  const player2 = new Player('Pepe');

  expect(player1.gender).toBe('female');
  expect(player2.gender).toBe('female');
});

test('Se puede consultar el sexo, pero no modificarlo', () => {
  const player1 = new Player('Pepe', 'male');
  player1.gender = 'female';

  expect(player1.gender).toBe('male');
});

test('Insertar jugador con fecha de nacimiento, y comprobar su validez', () => {
  const player1 = new Player('Sara', 'female', '10/10/2003');
  const fecha = new Date(player1.birthDate);
  expect(player1.birthDate).toEqual(fecha);
});
