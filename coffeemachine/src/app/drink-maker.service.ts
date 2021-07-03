import { Injectable } from '@angular/core';

import { DrinkTypes, DrinkCommand } from './models/drink';
import { MessageCommand } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class DrinkMakerService {

  constructor() { }

  prepareCommand(command: DrinkCommand | MessageCommand) {
    const isDrinkCommand = Object.values(DrinkTypes).includes(command.name as any);
    return isDrinkCommand
      ? this.makeDrinkCommand(command as DrinkCommand)
      : this.prepareMessageCommand(command as MessageCommand);
  }

  private makeDrinkCommand(drink: DrinkCommand) {
    const withSugar = drink.sugarQuantity !== 0;
    return `${drink.name}:${withSugar ? drink.sugarQuantity + ":0" : ":"}`
  }

  private prepareMessageCommand(message: MessageCommand) {
    return `${message.name}:${message.message}`;
  }
}
