
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Solution #1

for (let i = 0; i < 10; i++){
  console.log('Sync code: ', i);

  setTimeout(() => console.log('Async code: ', i), 0);
}

// Solution #2

for (var i = 0; i < 10; i++){
  console.log('Sync code: ', i);

  setTimeout((i) => console.log('Async code: ', i), 0, i);
}

// Solution #3

for (var i = 0; i < 10; i++){
  console.log('Sync code: ', i);
  ((i) => {
    setTimeout(() => console.log('Async code: ', i), 0);
  })(i)
}