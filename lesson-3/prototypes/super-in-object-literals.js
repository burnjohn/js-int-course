/*
 * This is the example of super in object literals
 */

const protoObject = {
  method1() {
    console.log('Used method from prototype');
  },
};

const obj = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj, protoObject);

