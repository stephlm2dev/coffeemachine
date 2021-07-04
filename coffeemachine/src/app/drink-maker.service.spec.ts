import { TestBed } from '@angular/core/testing';

import { DrinkMakerService } from './drink-maker.service';

import { DrinkCapability } from './models/drink';
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
    const tea = new TeaCommand()
    tea.addSugar(1);
    tea.giveMoney(1);
    expect(service.prepareCommand(tea)).toBe("T:1:0");
  });

  it('should make 1 chocolate with no sugar - and therefore no stick', () => {
    const chocolate = new ChocolateCommand()
    chocolate.giveMoney(2);
    expect(service.prepareCommand(chocolate)).toBe("H::");
  });

  it('should make 1 coffee with 2 sugars and a stick', () => {
    const coffee = new CoffeeCommand()
    coffee.addSugar(2);
    coffee.giveMoney(2);
    expect(service.prepareCommand(coffee)).toBe("C:2:0");
  });

  it('should make 1 orange juice', () => {
    const juice = new OrangeJuiceCommand()
    juice.giveMoney(2);
    expect(service.prepareCommand(juice)).toBe("O::");
  });

  it('should make 1 extra hot tea with 1 sugar and a stick', () => {
    const tea = new TeaCommand()
    tea.addSugar(1);
    tea.addExtra([DrinkCapability.EXTRA_HOT])
    tea.giveMoney(1);
    expect(service.prepareCommand(tea)).toBe("Th:1:0");
  });

  it('should make 1 extra hot chocolate with no sugar - and therefore no stick', () => {
    const chocolate = new ChocolateCommand()
    chocolate.addExtra([DrinkCapability.EXTRA_HOT])
    chocolate.giveMoney(2);
    expect(service.prepareCommand(chocolate)).toBe("Hh::");
  });

  it('should make 1 extra hot coffee with 2 sugars and a stick', () => {
    const coffee = new CoffeeCommand()
    coffee.addSugar(2);
    coffee.addExtra([DrinkCapability.EXTRA_HOT])
    coffee.giveMoney(2);
    expect(service.prepareCommand(coffee)).toBe("Ch:2:0");
  });

  it('should make 1 extra hot coffee with no sugar', () => {
    const coffee = new CoffeeCommand()
    coffee.addExtra([DrinkCapability.EXTRA_HOT])
    coffee.giveMoney(2);
    expect(service.prepareCommand(coffee)).toBe("Ch::");
  });

  it('should make 1 extra hot chocolate with one sugar and a stick', () => {
    const chocolate = new ChocolateCommand()
    chocolate.addSugar(1);
    chocolate.addExtra([DrinkCapability.EXTRA_HOT])
    chocolate.giveMoney(2);
    expect(service.prepareCommand(chocolate)).toBe("Hh:1:0");
  });

  it('should make 1 extra hot tea with two sugar and a stick', () => {
    const tea = new TeaCommand()
    tea.addSugar(2);
    tea.addExtra([DrinkCapability.EXTRA_HOT])
    tea.giveMoney(1);
    expect(service.prepareCommand(tea)).toBe("Th:2:0");
  });


  // KO Not enough money given tests
  it('should NOT make 1 tea with 1 sugar and a stick', () => {
    const tea = new TeaCommand()
    tea.addSugar(1);
    tea.giveMoney(0);
    expect(service.prepareCommand(tea)).toBe("M:0.4€ are missing");
  });

  it('should NOT make 1 chocolate with no sugar - and therefore no stick', () => {
    const chocolate = new ChocolateCommand()
    chocolate.giveMoney(0);
    expect(service.prepareCommand(chocolate)).toBe("M:0.5€ are missing");
  });

  it('should NOT make 1 coffee with 2 sugars and a stick', () => {
    const coffee = new CoffeeCommand()
    coffee.addSugar(2);
    coffee.giveMoney(0);
    expect(service.prepareCommand(coffee)).toBe("M:0.6€ are missing");
  });

  it('should NOT make 1 orange juice', () => {
    const juice = new OrangeJuiceCommand()
    juice.giveMoney(0);
    expect(service.prepareCommand(juice)).toBe("M:0.6€ are missing");
  });

  it('should NOT make 1 extra hot orange juice', () => {
    const juice = new OrangeJuiceCommand()
    juice.addExtra([DrinkCapability.EXTRA_HOT]);
    juice.giveMoney(2);
    expect(service.prepareCommand(juice)).toBe("O::");
  });

  it('should NOT make 1 orange juice with one sugar', () => {
    const juice = new OrangeJuiceCommand()
    juice.addSugar(1);
    juice.giveMoney(2);
    expect(service.prepareCommand(juice)).toBe("O::");
  });


  // Message tests
  it('should forwards any message received onto the coffee machine interface', () => {
    expect(service.prepareCommand({
      name: MessageTypes.DEFAULT,
      message: "Hello World"
    })).toBe("M:Hello World");
  });
});
