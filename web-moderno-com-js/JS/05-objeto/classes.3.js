class Engine {
    constructor(power) {
      this.power = power;
    }
  }
  
  class Car {
    constructor(make, model, engine) {
      this.make = make;
      this.model = model;
      this.engine = engine;
    }
  }
  
  let myEngine = new Engine(200);
  let myCar = new Car("Toyota", "Camry", myEngine);
  console.log(myCar.engine.power); // imprime 200
/*
  class Engine {
    constructor(power) {
      this.power = power;
    }
  }
  
  class Car {
    constructor(make, model, engine) {
      this.make = make;
      this.model = model;
      this.engine = engine;
    }
  }
  
  let myEngine = new Engine(200);
  let myCar = new Car("Toyota", "Camry", myEngine);
  let myCar2 = new Car("Honda", "Civic", myEngine);
  console.log(myCar.engine === myCar2.engine); // imprime true
  console.log(myEngine); // imprime a engine


*/