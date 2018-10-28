
export const sendProducts = (shouldNotSend, onProductsSend, products) => {
  if (shouldNotSend) {
    return;
  }

  sendProductsToServers(products).then( data => {
    onProductsSend();
  })
};



