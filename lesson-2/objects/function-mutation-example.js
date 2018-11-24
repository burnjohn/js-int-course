// mutation example

var alex = {
  gender: 'male',
  profession: 'engineer'
};


function getNewPerson(person) {
  const personSaved = { ...person };

  personSaved.profession = 'intern QA';

  return personSaved;
}

var newPerson = getNewPerson(alex);
