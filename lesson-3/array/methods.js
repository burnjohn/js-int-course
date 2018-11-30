const animalsList = [
  { name: "pig", icon: "/static/pig.221f.jpg", description: "Goes 'oink!'", power: 3 },
  { name: "cow", icon: "/static/cow.1dd9.jpg", description: "Says 'moo'.", power: 4 },
  { name: "dog", icon: "/static/dog.9a82.jpg", description: "Barks 'woof!'", power: 2 },
  { name: "cat", icon: "/static/cat.c07e.jpg", description: "Meow.", power: 1 },
];

const animalsAdditionalList = [
  { name: "pig", icon: "/static/pig.221f.jpg", description: "Goes 'oink!'", power: 3 },
  { name: "cow", icon: "/static/cow.1dd9.jpg", description: "Says 'moo'.", power: 4 },
  { name: "dog", icon: "/static/dog.9a82.jpg", description: "Barks 'woof!'", power: 2 },
];

/**
 *
 * TASKS:
 * 1) filter if power less than 2
 * 2) change values
 * 3) get the highest power
 * 4) if only some is cow
 * 5) if all are cow
 * 6) merge 2 arrays
 * 7) transform into string all animal names
 * 8) if names includes dog
 * 9) array iterator
 *
 */

/**
 *
 * Task 1: filter if power less than 3
 */

{

  const newList = animalsList.filter(animal => animal.power < 3);

  // const newList = animalsList.filter(({ power }) => power < 3);

  // Or in es5

  // var newList = animalsList.filter(
  //   function(item) {
  //     if (item.power < 3) {
  //       return item.power;
  //     }
  //   }
  // );

  // console.log('Task 1 : ', newList);

}

/**
 *
 * Task 2: Change all animal names to be the same
 */

{
  const newList = animalsList.map(item => ({ ...item, name: 'dog' }));

  // const newList = animalsList.map(item => {
  //   return Object.assign({}, item, { name: 'dog' });
  // });


  // console.log('Task 2 : ', newList);
}


/**
 *
 * Task 3: Get the highest power animal power
 * it should be number
 *
 */

{

  const power = animalsList.reduce(
    (prevResult, item, index, arr) => {

      if (prevResult < item.power) {
        return item.power;
      }

      return prevResult;
    },
    0
  );


  // const power = animalsList.reduce(
  //   (acc, item) =>
  //     item.power > acc
  //       ? item.power
  //       : acc
  //   ,0
  // );

  // console.log('Task 3 : ', power);

}

/**
 *
 * Task 3.5: Get the highest power animal power
 * it should be number
 *
 */

{

  // const power = animalsList.reduce(
  //   (commonObj, { name, power }) => ({...commonObj, ...{[name]: power}})
  //   , {}
  // );

  const power = animalsList.reduce(
    (commonObj, item) => {
      const key = item.name;
      const value = item.power;

      commonObj[key] = value;
      return commonObj;
    }, {}
  );

  // console.log('Task 3.5 : ', power);
}

/**
 *
 * Task 4: If there is a cow in the array
 *
 */

{
  const isCowInTheList = animalsList.some(item => item.name === 'cow');

  console.log('Task 4 : ', isCowInTheList);
}

/**
 *
 * Task 5: If all animals names in the array are cows
 *
 */

{
  const allItemsAreCows = animalsList.every(function(item) {
    return item.name === 'cow';
  });

  console.log('Task 5 : ', allItemsAreCows);
}

/**
 *
 * Task 6: Merge 2 animals arrays
 *
 */

{
  const newList = animalsList.concat(animalsAdditionalList);

  // const newList = [...animalsList, ...animalsAdditionalList];

  console.log('Task 6 : ', newList);
}

/**
 *
 * Task 7: Transform into string all animal names and return it
 *
 */

{
  // const newList = animalsList.reduce(
  //   (namesStr, { name }, index) => (
  //     index === 0
  //       ? namesStr + name
  //       : `${namesStr}, ${name}`
  //   ), ''
  // );



  const newList = animalsList
    .map(({ name }) => name)
    .reverse()
    .join(' | ');


  console.log('Task 7 : ', newList);
}

/**
 *
 * Task 8: If animal names includes dog
 *
 */

{

  const isDogInList =
    animalsList
      .map(({ name }) => name)
      .indexOf('dog') !== -1;

  console.log('Task 8 :', isDogInList);

}

/**
 *
 * Array iterator
 *
 */

{
  const iterator = animalsList[Symbol.iterator]();

  console.log(iterator.next());
  console.log(iterator.next());
}



