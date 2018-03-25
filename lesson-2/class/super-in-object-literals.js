/*
 * This is the example of super in object literals
 */

const obj1 = {
  method1() {
    console.log('Used method from prototype');
  },
};

const obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2();
