class SuperMenu {

  privateMethod (){} // works

  _protectedMethod (){} // works

  publicMethod (){} // works
}

class PageMenu extends SuperMenu {
  publicMethod() {
    this.protectedMethod(); // works
    this.privateMethod(); // error
  }
}


class MainMenu {
  constructor() {
    const methods = new PageMenu();

    methods.privateMethod(); // error
    methods.protectedMethod(); // error
    methods.publicMethod(); // works
  }
}