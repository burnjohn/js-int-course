class SuperPerson {
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

const ivan = new Person('Ivan', 'male');

console.log('New person: ', ivan);

console.log('New person familyStatus: ', ivan.getFamilyStatus());
