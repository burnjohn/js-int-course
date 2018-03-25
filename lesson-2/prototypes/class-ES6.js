class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.family = true;

    // this.getFamilyStatus = () => {
    //   return 'My method!';
    // }

  }

  getFamilyStatus() {
    if (!this.family) {
      return 'Free';
    }

    return 'married';
  }
}

const ivan = new Person('Ivan', 'male');
console.log('New person: ', ivan);

console.log('New person familyStatus: ', ivan.getFamilyStatus());
