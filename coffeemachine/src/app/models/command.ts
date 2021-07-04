import { DrinkCapability, DrinkCapabilities, DrinkTypes, Tea, Chocolate, Coffee, OrangeJuice } from './drink';

type SugarQuantity = 0 | 1 | 2;

class Command {
  drink!: DrinkTypes;
  sugarQuantity: SugarQuantity = 0;
  options: DrinkCapabilities = [];
  moneyGiven: number = 0;

  public addSugar(quantity: SugarQuantity) {
    if (this.drink.capabilities.includes(DrinkCapability.WITH_SUGAR)) {
      this.sugarQuantity = quantity;
    }
  }

  public addExtra(opts: DrinkCapabilities) {
    this.options = opts.filter((opt: DrinkCapability) => this.drink.capabilities.includes(opt));
  }

  public giveMoney(amount: number) {
    this.moneyGiven = amount;
  }
}

class TeaCommand extends Command {
  drink = new Tea();
}

class CoffeeCommand extends Command {
  drink = new Coffee();
}

class ChocolateCommand extends Command {
  drink = new Chocolate();
}

class OrangeJuiceCommand extends Command {
  drink = new OrangeJuice();
  readonly sugarQuantity: SugarQuantity = 0;
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
