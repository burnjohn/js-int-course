var someObj = {
  j:1,
};

var newObj = someObj;

someObj.j = 2;
someObj.t = 3;

console.log('1st console log', newObj);

someObj = {
  n: 'yes'
};

someObj.g = 3;

console.log('2nd console log', newObj);
