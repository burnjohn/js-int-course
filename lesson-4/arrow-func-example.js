// Example 1

const obj = {
  data: 5,

  method() {

    const a = (function() {
      console.log(`this in simple func: `, this);
    }).bind(this);

    const b = () => {
      console.log(`this in arrow func: `, this);
    };

    a();
  }
};



// Example 2


const exampleObj = {
  data1: 10,
  cbfunc: null,

  f1(cb) {
    cb();
  },

  f3(cb) {
    this.cbfunc = cb;
    this.cbfunc();
  }
};

const showThis = function() {
  console.log('My this: ', this);
};
