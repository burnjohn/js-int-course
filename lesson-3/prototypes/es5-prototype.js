function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.family = true;
}

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.family = true;
  }
}

// variant 1

Person.prototype.getName = function() {
  console.log(this.name);
};

Person.prototype.setName = function(name) {
  this.name = name;
  console.log(this.name);
};

// variant 1

Person.prototype = {
  getName:  function() {
    console.log(this.name);
  },
  setName: function(name) {
    this.name = name;
    console.log(this.name);
  }
};


var person = new Person('Bob', 'male');