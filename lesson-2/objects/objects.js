/*
 * This is the example of object mutation
 */

let alex = {
  gender: 'male',
  profession: 'engineer'
};


const oleg = alex;
const alexandra = oleg;

alexandra.gender = 'feemale';
alexandra.profession = 'qa';

alex = { car: 'tesla'};

console.log('Mutating object: ', alex);