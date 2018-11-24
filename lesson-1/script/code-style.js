const elList = document.querySelectorAll('a');

(function() {

  // imperative style
  var valuesList = [];

  for (var i; i < elList.length; i++) {
    valuesList.push(elList[i].innerHTML);
  }

  var itemList = [];

  valuesList.forEach(HTMLtext => {
    if (HTMLtext === 'some text') {
      item.push(HTMLtext);
    }
  });

})();

{

// declarative style
  const valuesList = [...elList].map(nodeEl => nodeEl.innerHTML);
  const itemList = valuesList.filter(text =>  HTMLtext === 'some text');

}