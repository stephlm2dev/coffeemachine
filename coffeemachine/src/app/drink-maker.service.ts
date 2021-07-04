import { Injectable } from '@angular/core';

import { DrinkCommand } from './models/command';
import { MessageCommand, MessageTypes } from './models/message';

@Injectable({
  providedIn: 'root',
})
export class DrinkMakerService {
  constructor() {}

  prepareCommand(command: DrinkCommand | MessageCommand) {
    let cmd = null;

    if ('sugarQuantity' in command) {
      cmd = this.canPayDrink(command)
        ? this.makeDrinkCommand(command as DrinkCommand)
        : this.missingMoney(command as DrinkCommand);
    } else {
      cmd = this.prepareMessageCommand(command as MessageCommand);
    }
    return cmd;
  }

  private makeDrinkCommand(command: DrinkCommand) {
    const withSugar = command.sugarQuantity !== 0;
    return `${command.drink.code}${command.options.join('')}:${
      withSugar ? command.sugarQuantity + ':0' : ':'
    }`;
  }

  private prepareMessageCommand(message: MessageCommand) {
    return `${message.name}:${message.message}`;
  }

  private canPayDrink(command: DrinkCommand) {
    return command.drink.price <= command.moneyGiven;
  }

  private missingMoney(command: DrinkCommand) {
    const message: MessageCommand = {
      name: MessageTypes.DEFAULT,
      message: `${Math.abs(
        command.drink.price - command.moneyGiven
      )}€ are missing`,
    };
    return this.prepareMessageCommand(message);
  }
}
