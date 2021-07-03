import { TestBed } from '@angular/core/testing';

import { DrinkMakerService } from './drink-maker.service';

import { TeaCommand, CoffeeCommand, ChocolateCommand, OrangeJuiceCommand } from './models/command';
import { MessageTypes } from './models/message';

describe('DrinkMakerService', () => {
  let service: DrinkMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // OK coffee maker tests
  it('should make 1 tea with 1 sugar and a stick', () => {
    const tea = new TeaCommand(1, 1);
    expect(service.prepareCommand(tea)).toBe("T:1:0");
  });

  it('should make 1 chocolate with no sugar - and therefore no stick', () => {
    const chocolate = new ChocolateCommand(2);
    expect(service.prepareCommand(chocolate)).toBe("H::");
  });

  it('should make 1 coffee with 2 sugars and a stick', () => {
    const coffee = new CoffeeCommand(2, 2);
    expect(service.prepareCommand(coffee)).toBe("C:2:0");
  });

  it('should make 1 orange juice', () => {
    const juice = new OrangeJuiceCommand(2);
    expect(service.prepareCommand(juice)).toBe("O::");
  });

  // KO Not enough money given tests
  it('should NOT make 1 tea with 1 sugar and a stick', () => {
    const tea = new TeaCommand(0, 1);
    expect(service.prepareCommand(tea)).toBe("M:0.4€ are missing");
  });

  it('should NOT make 1 chocolate with no sugar - and therefore no stick', () => {
    const chocolate = new ChocolateCommand(0);
    expect(service.prepareCommand(chocolate)).toBe("M:0.5€ are missing");
  });

  it('should NOT make 1 coffee with 2 sugars and a stick', () => {
    const coffee = new CoffeeCommand(0, 2);
    expect(service.prepareCommand(coffee)).toBe("M:0.6€ are missing");
  });

  it('should NOT make 1 orange juice', () => {
    const juice = new OrangeJuiceCommand(0);
    expect(service.prepareCommand(juice)).toBe("M:0.6€ are missing");
  });

  // Message tests
  it('should forwards any message received onto the coffee machine interface', () => {
    expect(service.prepareCommand({
      name: MessageTypes.DEFAULT,
      message: "Hello World"
    })).toBe("M:Hello World");
  });
});
