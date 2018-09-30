var serverResponse = {
  title: 'Farm Animals',
  pig: {
    icon: '/static/pig.221f.jpg',
    description: 'Goes \'oink!\''
  },
  cow: {
    icon: '/static/cow.1dd9.jpg',
    description: 'Says \'moo\'.'
  },
  dog: {
    icon: '/static/dog.9a82.jpg',
    description: 'Barks \'woof!\''
  },
  cat: {
    icon: '/static/cat.c07e.jpg',
    description: 'Meow.'
  },
};

const prototype = {
  showProperty() {
    console.log('Some property')
  }
};


const obj = Object.create(prototype, {
  foo: {
    writable: true,
    value: 'hello'
  },
  bar: {
    value: 123
  }
});

/*
 * Copy object
 */

const animals = { ...serverResponse };

/**
 * Create new object property with destructor
 * Try to change it in console
 */


Object.defineProperty(animals, 'requestStatus', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'All good',
});

Object.defineProperties(animals, {
  requestStatus:{
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'All good',
  },
  newProp: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'All good',
  },
);

//
// console.log('Object with destructor: ', animals);

/**
 * Object.freeze usage
 */

Object.freeze(animals);

// If we can change property
animals.status = 'All bad';

console.log('Changing property after freeze: ', animals);

// Changing deep property works even after freeze

animals.pig.icon = null;

console.log('Changing deep property works ', animals);

// If we can see property in keys list
console.log('Object keys after descriptor usage', Object.keys(animals));

// If we can delete property
delete animals.status;

console.log('Delete property after descriptor usage', animals);

/**
 *
 * Tasks for objects
 *
 * 1) Get object keys in array
 * 2) Get object values in array
 * 3) Get only some keys
 * 4) Find some value in object
 * 5) Get all icons array
 */

/**
 * Task 1: Get object keys in array
 */

console.log('Get object keys: ', Object.keys(animals) );

/**
 * Task 2: Get object values in array
 */

// ES6 only
console.log('Get object values: ', Object.values(animals) );

// for ES5
var values = Object.keys(animals).map(function(key) {
  return animals[key];
});

console.log('Get object values ES5: ', values );

// lodash method

console.log('Get object values with lodash : ', _.values(animals) );


/**
 * Task 3: Get only some keys
 */

// lodash

console.log('Get object only some keys with lodash: ',
  _.pick(animals, ['cow', 'dog'])
);

/**
 * Task 4: Find some value in object
 */

// lodash

console.log('Find object some value with lodash: ',
  _.find(animals, function(item) {
      return item.description === 'Meow.';
  })
);

/**
 * Task 5: Get all icons array
 */

// for ES5

var iconsList = [];

Object.keys(animals).forEach(function(key) {
  var value = animals[key];
  var icon = value.icon;

  if (icon) iconsList.push(icon);
});

console.log('Get all icons array: ', iconsList);