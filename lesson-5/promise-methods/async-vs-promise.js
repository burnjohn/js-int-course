const getUsersReq = (interval) =>
  new Promise((res) => {
    setTimeout(() => {
      res('Users data pack');
    }, interval);
  });

const getProductsReq = (interval) =>
  new Promise((res) => {
    setTimeout(() => {
      res('Products data pack');
    }, interval);
  });


(() => {
  let users = null;
  let products = null;

  getUsersReq(3000)
    .then((usersFromServer) => {
      users = usersFromServer;

      console.log('Resolved: ', usersFromServer);
    });

  getProductsReq(3000)
    .then((productsFromServer) => {
      products = productsFromServer;

      console.log('Resolved: ', productsFromServer);
    });


})();

(async () => {
  const users = await getUsersReq(3000);
  const products = await getProductsReq(3000);

  console.log('Resolved: ', users, products);
})();


// Async for loop

(async () => {
  const requests = [getUsersReq, getProductsReq, getUsersReq, getProductsReq];

  for (let request of requests) {
    const data = await request(3000);

    console.log('data was got: ', data);
  }



})();