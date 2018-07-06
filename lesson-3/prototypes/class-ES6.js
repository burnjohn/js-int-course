class SuperPerson {
  constructor(name, gender){


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
    //
    // this.getFamilyStatus = () => {
    //   return 'My method!';
    // }
    Person.count++
  }

  static getStatus(){
    console.log('static method')
  }
}

Person.count = 0;

const ivan = new Person('Ivan', 'male');

console.log('New person: ', ivan);

console.log('New person familyStatus: ', ivan.getFamilyStatus());
