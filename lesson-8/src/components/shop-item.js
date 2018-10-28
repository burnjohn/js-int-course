
const reactConsumer = component => {
  let data = {};

  window.reactEvents.on('dataChange', (data) => component(data));

  return component(data);
};

const shopItem = (product, onClick) => {

  return (
    `<li class="products-item" onclick="${ () => onClick(product) }"> 

        <p>${ product.name }</p>
        <img src="${ product.imageSrc }">
        <p>${ product.itemsCount }</p>
        
    </li>`
  );

};

export default reactConsumer(shopItem);