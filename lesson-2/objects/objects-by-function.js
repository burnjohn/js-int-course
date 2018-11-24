/*
 * This is the example of arguments mutation by the function
 */

// Module pattern for global scope protection
(function() {

  function changeGender(person) {
    var newPerson = {};

    Object.keys(person).forEach(key => {
      newPerson[key] = person[key];
    });

    newPerson.gender = 'female';
  }

  var alex = {
    gender: 'male',
    profession: 'engineer',
  };

  changeGender(alex);

  console.log('Mutating object: ', alex);

})();

/*
 * 2 ways of adding getters and setters for object properties
 * in descriptors
 *
 */

var user = {
  firstName: 'Alex',
  secondName: 'Mask',
  gender: 'male',
  profession: 'engineer',
  salary: 2000,

  set name(value) {
    this.firstName = value.trim();
  },
};

Object.defineProperty(user, 'fullName', {
  get: function() {
    return this.firstName + ' ' + this.secondName;
  },
});

user.name = ' Oleg ';

console.log('Setter for name: ', user.firstName);
console.log('Getter for name: ', user.fullName);

