import { DrinkTypes, Tea, Chocolate, Coffee } from './drink';

type SugarQuantity = 0 | 1 | 2;

interface Command {
  drink: DrinkTypes;
  sugarQuantity: SugarQuantity;
}

class TeaCommand implements Command {
  drink = new Tea();

  constructor(public sugarQuantity: SugarQuantity = 0) {}
}

class CoffeeCommand implements Command {
  drink = new Coffee();

  constructor(public sugarQuantity: SugarQuantity = 0) {}
}

class ChocolateCommand implements Command {
  drink = new Chocolate();

  constructor(public sugarQuantity: SugarQuantity = 0) {}
}

type DrinkCommand = TeaCommand | CoffeeCommand | ChocolateCommand;

export {
  SugarQuantity,
  TeaCommand,
  CoffeeCommand,
  ChocolateCommand,
  DrinkCommand
}
