
(() => {
  const animasObj = {
    'dog': true,
    'cat': true,
    'horse': true
  };

  const getAllAnimals = () => Object.keys(animasObj);

  const getSomeAnimal = (animal, animalsList) =>
    animalsList.filter( animalFromList =>  animal === animalFromList);

  const saveToLS = (data) => localStorage.setItem(animals, JSON.stringify(data));

  const horse = getSomeAnimal('horse', getAllAnimals());

  saveToLS(horse);
})();


// Call stack example

// 6. Object.keys func
// 5. getAllAnimals func
// 4. getSomeAnimal func
// 3. saveToLS func
// 2. anonymous func
// 1. module file func

// Stack overflow example

(() => {

  const getAllAnimals = () => getSomeAnimal();

  const getSomeAnimal = () => {
    getAllAnimals();
  };

  getSomeAnimal();

})();


// Call stack example

// 4. getAllAnimals func
// 3. getSomeAnimal func
// 4. getAllAnimals func
// 3. getSomeAnimal func
// 4. getAllAnimals func
// 3. getSomeAnimal func
// 4. getAllAnimals func
// 3. getSomeAnimal func
// 4. getAllAnimals func
// 3. getSomeAnimal func
// 2. anonymous func
// 1. module file func


