/* eslint-disable lines-between-class-members */
class Player {
  name;
  #gender = 'female';
  birthDate;

  constructor(name, gender, date) {
    this.name = name;
    if (gender === 'male') {
      this.#gender = gender;
    }
    if (date !== null && date !== undefined) {
      const [d, m, y] = date.split('/');
      this.birthDate = new Date(d, m, y);
    }
  }
  get gender() {
    return this.#gender;
  }

  // eslint-disable-next-line class-methods-use-this, no-empty-function
  set gender(gender) {}

  setBirthDate(date) {
    this.birthDate = date;
  }
}
module.exports = Player;
