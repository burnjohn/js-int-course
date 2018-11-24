/*
 * Ways of cloning objects
 *
 */

var student1 = {
  name: 'Oleg',
  gender: 'male',
  obj: {a: 2},
};

var student2 = { ...student1 };

console.log('Case 1: cloning object', student1);
console.log('New object', student2);

changeGender(student1);

console.log('Case 2: cloning object with lodash', student1);

function changeGender(student) {

  var newStudent = _.clone(student);
  newStudent.gender = 'female';

  console.log('Gender was changed. New object: ', newStudent);
}
