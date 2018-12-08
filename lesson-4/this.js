
/*
 * Execution context
 */

function f1(){
  return this;
}

f1(); //Window

'use strict';
function f1(){
  return this;
}

f1(); //undefined


const o = {
  prop: 37,
  func() {
    return this;
  }
};

console.log(o.func());
// Object o -  {prop: 37, func: ƒ}


const b = {
  b: 2,
  func: o.func
};

console.log(b.func());
// Object b -  {b: 2, func: ƒ}


const node = document.querySelector('div');

node.addEventListener('click', o.func);
node.click(); // dom element



/*
 * Arrow function context
 */

const c = () => console.log(this);
c(); // Window

'use strict';
const a = () => console.log(this);
a(); // Window


{
  const o = {
    prop: 37,
    func: () => {
      return this;
    }
  };

  console.log(o.func());
  // Window


  const b = {
    b: 2,
    func: o.func
  };

  console.log(b.func());
  // Window


  const node = document.querySelector('div');

  node.addEventListener('click', o.func);
  node.click(); // Window

}

{
  const o = {
    prop: 37,
    func: () => this
  };

  console.log(o.func());
  // Window

  const b = {
    b: 2,
    func: o.func.bind(o)
  };

  console.log(b.func());
  // Window
}