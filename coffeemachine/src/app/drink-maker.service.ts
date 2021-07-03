import { Injectable } from '@angular/core';

import { DrinkCommand } from './models/command';
import { MessageCommand } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class DrinkMakerService {

  constructor() { }

  prepareCommand(command: DrinkCommand | MessageCommand) {
    const isDrinkCommand = 'sugarQuantity' in command;
    return isDrinkCommand
      ? this.makeDrinkCommand(command as DrinkCommand)
      : this.prepareMessageCommand(command as MessageCommand);
  }

  private makeDrinkCommand(command: DrinkCommand) {
    const withSugar = command.sugarQuantity !== 0;
    return `${command.drink.code}:${withSugar ? command.sugarQuantity + ":0" : ":"}`
  }

  private prepareMessageCommand(message: MessageCommand) {
    return `${message.name}:${message.message}`;
  }
}
