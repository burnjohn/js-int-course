
// Pure functions

const itemsList = [];

const getFilteredList = (list, exceptionsFunc) => {
  const exceptions = exceptionsFunc();

  list.filter(item => !exceptions.includes(item));
};

const getUniqueItems = (list) => {
  const set = new Set(list);

  return Array.from(set);
};



const filteredList = combine(
  getUniqueItems,
  getFilteredList,
);




