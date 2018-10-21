const getUsersReq = () => new Promise((res, rej) => {
  setTimeout(() => {
    res('some data');
  }, 3000);
});

const getProductsReq = () => new Promise((res, rej) => {
  setTimeout(() => {
    res('some data');
  }, 3000);
});

(() => {
  let users = null;
  let products = null;

  getUsersReq()
    .then((usersFromServer) => {
      users = usersFromServer;

      console.log('Resolved: ', usersFromServer);
    });

  getProductsReq()
    .then((productsFromServer) => {
      products = productsFromServer;

      console.log('Resolved: ', productsFromServer);
    });


})();

(async () => {
  const users = await getUsersReq();
  const products = await getProductsReq();

  console.log('Resolved: ', users);
})();