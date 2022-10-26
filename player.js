/* eslint-disable lines-between-class-members */
class Player {
  name;
  #gender = 'female';
  birthDate;
  age;
  category;

  constructor(name, gender, date) {
    this.name = name;
    if (gender === 'male') {
      this.#gender = gender;
    }
    if (date !== null && date !== undefined) {
      const [d, m, y] = date.split('/');
      this.birthDate = new Date(d, m, y);
      const today = new Date();
      this.age = today.getFullYear() - this.birthDate.getFullYear();
      const monthDiff = today.getMonth() - this.birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
        this.age -= 1;
      }
    }
  }
  get gender() {
    return this.#gender;
  }
  // eslint-disable-next-line class-methods-use-this, no-empty-function
  set gender(gender) {}

  // eslint-disable-next-line no-dupe-class-members
  get age() {
    return this.age;
  }

  setBirthDate(date) {
    this.birthDate = date;
  }
}
module.exports = Player;
