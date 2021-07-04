enum DrinkCapability {
  WITH_SUGAR = '',
  EXTRA_HOT = 'h',
}

type DrinkCapabilities = Array<DrinkCapability>;

abstract class Drink {
  code: string = '';
  price: number = 0.0;
  capabilities: DrinkCapabilities = [];
}

class Tea implements Drink {
  readonly code: string = 'T';
  readonly price: number = 0.4;
  readonly capabilities: DrinkCapabilities = [
    DrinkCapability.EXTRA_HOT,
    DrinkCapability.WITH_SUGAR,
  ];
}

class Coffee implements Drink {
  readonly code: string = 'C';
  readonly price: number = 0.6;
  readonly capabilities: DrinkCapabilities = [
    DrinkCapability.EXTRA_HOT,
    DrinkCapability.WITH_SUGAR,
  ];
}

class Chocolate implements Drink {
  readonly code: string = 'H';
  readonly price: number = 0.5;
  readonly capabilities: DrinkCapabilities = [
    DrinkCapability.EXTRA_HOT,
    DrinkCapability.WITH_SUGAR,
  ];
}

class OrangeJuice implements Drink {
  readonly code: string = 'O';
  readonly price: number = 0.6;
  readonly capabilities: DrinkCapabilities = [];
}

type DrinkTypes = Tea | Coffee | Chocolate | OrangeJuice;

export {
  DrinkCapability,
  DrinkCapabilities,
  Tea,
  Coffee,
  Chocolate,
  OrangeJuice,
  DrinkTypes,
};
