import { DrinkTypes, Tea, Chocolate, Coffee, OrangeJuice } from './drink';

type SugarQuantity = 0 | 1 | 2;

interface Command {
  drink: DrinkTypes;
  sugarQuantity: SugarQuantity;
  moneyGiven: number;
}

class TeaCommand implements Command {
  drink = new Tea();

  constructor(public moneyGiven: number = 0, public sugarQuantity: SugarQuantity = 0) {}
}

class CoffeeCommand implements Command {
  drink = new Coffee();

  constructor(public moneyGiven: number = 0, public sugarQuantity: SugarQuantity = 0) {}
}

class ChocolateCommand implements Command {
  drink = new Chocolate();

  constructor(public moneyGiven: number = 0, public sugarQuantity: SugarQuantity = 0) {}
}

class OrangeJuiceCommand implements Command {
  drink = new OrangeJuice();
  sugarQuantity: SugarQuantity = 0;

  constructor(public moneyGiven: number = 0) { }
}

type DrinkCommand = TeaCommand | CoffeeCommand | ChocolateCommand | OrangeJuiceCommand;

export {
  SugarQuantity,
  TeaCommand,
  CoffeeCommand,
  ChocolateCommand,
  OrangeJuiceCommand,
  DrinkCommand
}
