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

var bob = new Person('Bob', 'male');

console.log('New person: ', bob);

// console.log('New person familyStatus: ', bob.getFamilyStatus());

