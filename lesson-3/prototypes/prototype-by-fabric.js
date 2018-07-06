function PersonSuperClass() {
  this.getFamilyStatus = function() {
    if (!this.family) {
      return 'Free';

    }

    return 'married';
  };
}

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.family = true;
}

Person.prototype = new PersonSuperClass();


// Object.setPrototypeOf(Person, new PersonSuperClass());

var ivan = new Person('Ivan', 'male');

console.log('New person: ', ivan);

console.log('New person familyStatus: ', ivan.getFamilyStatus());

