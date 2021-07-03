abstract class Drink {
  code: string = "";
  price: number = 0.0;
}

class Tea implements Drink {
  // private readonly name: string = "Tea";
  readonly code: string = "T";
  readonly price: number = 0.4;

  constructor() {}
}

class Coffee implements Drink {
  // private readonly name: string = "Tea";
  readonly code: string = "C";
  readonly price: number = 0.6;

  constructor() {}
}

class Chocolate implements Drink {
  // private readonly name: string = "Chocolate";
  readonly code: string = "H";
  readonly price: number = 0.5;

  constructor() {}
}

type DrinkTypes = Tea | Coffee | Chocolate;

export {
  Tea,
  Coffee,
  Chocolate,
  DrinkTypes
}
