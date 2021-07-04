import {
  DrinkCapability,
  DrinkCapabilities,
  DrinkTypes,
  Tea,
  Chocolate,
  Coffee,
  OrangeJuice,
} from './drink';

type SugarQuantity = 0 | 1 | 2;

class DrinkCommand {
  drink!: DrinkTypes;
  sugarQuantity: SugarQuantity = 0;
  options: DrinkCapabilities = [];
  money: number = 0;

  constructor(drink: DrinkTypes) {
    this.drink = drink;
  }

  public addSugar(quantity: SugarQuantity) {
    if (this.drink.capabilities.includes(DrinkCapability.WITH_SUGAR)) {
      this.sugarQuantity = quantity;
    }
  }

  public addExtra(opts: DrinkCapabilities) {
    this.options = opts.filter((opt: DrinkCapability) =>
      this.drink.capabilities.includes(opt)
    );
  }

  public paidWith(amount: number) {
    this.money += amount;
  }

  static askFor(name: string) {
    let command = null;
    switch (name) {
      case 'Tea':
        command = new DrinkCommand(new Tea());
        break;
      case 'Coffee':
        command = new DrinkCommand(new Coffee());
        break;
      case 'Chocolate':
        command = new DrinkCommand(new Chocolate());
        break;
      case 'Orange Juice':
        command = new DrinkCommand(new OrangeJuice());
        break;

      default:
        throw `Invalid drink: ${name}`;
        break;
    }
    return command;
  }
}

export default DrinkCommand;
