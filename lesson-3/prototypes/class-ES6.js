class SuperPerson {
  constructor() {

  }

  getFamilyStatus2() {
    if (!this.family) {
      return 'Free';
    }

    return 'married';
  }

  getFamilyStatus() {
    if (!this.family) {
      return 'Free';
    }

    return 'married';
  }
}


class Person extends SuperPerson {
  constructor(name, gender) {
    super(name, gender);

    this.name = name;
    this.gender = gender;
    this.family = true;

    Person.count++
  }

  getFirstName() {
    return this.name;
  }

  showFullName() {
    const firstName = this.getFirstName();

    console.log(firstName);
  }
}

Person.count = 0;

const bob = new Person('bob', 'male');

console.log('New person: ', bob);

// console.log('New person familyStatus: ', bob.getFamilyStatus());
