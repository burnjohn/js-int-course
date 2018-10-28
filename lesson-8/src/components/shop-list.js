import { sendProducts } from '../services/product-service';
import shopItem from './shop-item';

const shopList = () => {

  const state = {
    productsSendCount: 0,
    selectedProducts: []
  };
​
  const shouldNotSend = product => {
    return product.itemsCount !== 0;
  };
  ​
  const onProductsSend = () => {
    state.productsSendCount += 1;
  };

  const addToSelected = selectedProduct => {
    state.selectedProducts.push(selectedProduct);
  };
  ​
  selectedProducts.forEach(currentProduct => {
    const shouldSend = shouldNotSend(currentProduct);

    sendProducts(shouldSend, onProductsSend, state.productsSendCount)
  });

  return (
    ` <ul class="products-list">
        ${
          productsList.map( product => {
            return shopItem(product, addToSelected);
          })
        }
      </ul>
    `
  )

};

export default shopList;