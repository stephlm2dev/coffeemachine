abstract class Drink {
  code: string = "";
  price: number = 0.0;
}

class Tea implements Drink {
  readonly code: string = "T";
  readonly price: number = 0.4;
}

class Coffee implements Drink {
  readonly code: string = "C";
  readonly price: number = 0.6;
}

class Chocolate implements Drink {
  readonly code: string = "H";
  readonly price: number = 0.5;
}

class OrangeJuice implements Drink {
  readonly code: string = "O";
  readonly price: number = 0.6;
}


type DrinkTypes = Tea | Coffee | Chocolate | OrangeJuice;

export {
  Tea,
  Coffee,
  Chocolate,
  OrangeJuice,
  DrinkTypes
}
