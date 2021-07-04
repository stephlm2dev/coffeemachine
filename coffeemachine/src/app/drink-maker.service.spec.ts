import { TestBed } from '@angular/core/testing';

import { DrinkMakerService } from './drink-maker.service';

import { DrinkCapability } from './models/drink';
import DrinkCommand from './models/command';
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
    const tea = DrinkCommand.askFor('Tea');
    tea.addSugar(1);
    tea.paidWith(1);
    expect(service.prepareCommand(tea)).toBe('T:1:0');
  });

  it('should make 1 chocolate with no sugar - and therefore no stick', () => {
    const chocolate = DrinkCommand.askFor('Chocolate');
    chocolate.paidWith(2);
    expect(service.prepareCommand(chocolate)).toBe('H::');
  });

  it('should make 1 coffee with 2 sugars and a stick', () => {
    const coffee = DrinkCommand.askFor('Coffee');
    coffee.addSugar(2);
    coffee.paidWith(2);
    expect(service.prepareCommand(coffee)).toBe('C:2:0');
  });

  it('should make 1 orange juice', () => {
    const juice = DrinkCommand.askFor('Orange Juice');
    juice.paidWith(2);
    expect(service.prepareCommand(juice)).toBe('O::');
  });

  it('should make 1 extra hot tea with 1 sugar and a stick', () => {
    const tea = DrinkCommand.askFor('Tea');
    tea.addSugar(1);
    tea.addExtra([DrinkCapability.EXTRA_HOT]);
    tea.paidWith(1);
    expect(service.prepareCommand(tea)).toBe('Th:1:0');
  });

  it('should make 1 extra hot chocolate with no sugar - and therefore no stick', () => {
    const chocolate = DrinkCommand.askFor('Chocolate');
    chocolate.addExtra([DrinkCapability.EXTRA_HOT]);
    chocolate.paidWith(2);
    expect(service.prepareCommand(chocolate)).toBe('Hh::');
  });

  it('should make 1 extra hot coffee with 2 sugars and a stick', () => {
    const coffee = DrinkCommand.askFor('Coffee');
    coffee.addSugar(2);
    coffee.addExtra([DrinkCapability.EXTRA_HOT]);
    coffee.paidWith(2);
    expect(service.prepareCommand(coffee)).toBe('Ch:2:0');
  });

  it('should make 1 extra hot coffee with no sugar', () => {
    const coffee = DrinkCommand.askFor('Coffee');
    coffee.addExtra([DrinkCapability.EXTRA_HOT]);
    coffee.paidWith(2);
    expect(service.prepareCommand(coffee)).toBe('Ch::');
  });

  it('should make 1 extra hot chocolate with one sugar and a stick', () => {
    const chocolate = DrinkCommand.askFor('Chocolate');
    chocolate.addSugar(1);
    chocolate.addExtra([DrinkCapability.EXTRA_HOT]);
    chocolate.paidWith(2);
    expect(service.prepareCommand(chocolate)).toBe('Hh:1:0');
  });

  it('should make 1 extra hot tea with two sugar and a stick', () => {
    const tea = DrinkCommand.askFor('Tea');
    tea.addSugar(2);
    tea.addExtra([DrinkCapability.EXTRA_HOT]);
    tea.paidWith(1);
    expect(service.prepareCommand(tea)).toBe('Th:2:0');
  });

  // KO Not enough money given tests
  it('should NOT make 1 tea with 1 sugar and a stick', () => {
    const tea = DrinkCommand.askFor('Tea');
    tea.addSugar(1);
    tea.paidWith(0);
    expect(service.prepareCommand(tea)).toBe('M:0.4€ are missing');
  });

  it('should NOT make 1 chocolate with no sugar - and therefore no stick', () => {
    const chocolate = DrinkCommand.askFor('Chocolate');
    chocolate.paidWith(0);
    expect(service.prepareCommand(chocolate)).toBe('M:0.5€ are missing');
  });

  it('should NOT make 1 coffee with 2 sugars and a stick', () => {
    const coffee = DrinkCommand.askFor('Coffee');
    coffee.addSugar(2);
    coffee.paidWith(0);
    expect(service.prepareCommand(coffee)).toBe('M:0.6€ are missing');
  });

  it('should NOT make 1 orange juice', () => {
    const juice = DrinkCommand.askFor('Orange Juice');
    juice.paidWith(0);
    expect(service.prepareCommand(juice)).toBe('M:0.6€ are missing');
  });

  it('should NOT make 1 extra hot orange juice', () => {
    const juice = DrinkCommand.askFor('Orange Juice');
    juice.addExtra([DrinkCapability.EXTRA_HOT]);
    juice.paidWith(2);
    expect(service.prepareCommand(juice)).toBe('O::');
  });

  it('should NOT make 1 orange juice with one sugar', () => {
    const juice = DrinkCommand.askFor('Orange Juice');
    juice.addSugar(1);
    juice.paidWith(2);
    expect(service.prepareCommand(juice)).toBe('O::');
  });

  it('should NOT make 1 apple juice', () => {
    let juice = null;
    try {
      juice = DrinkCommand.askFor('Apple Juice');
      juice.addSugar(1);
      juice.paidWith(2);
      service.prepareCommand(juice);
    } catch (err) {
      expect(err).toBe('Invalid drink: Apple Juice');
    }
  });

  // Message tests
  it('should forwards any message received onto the coffee machine interface', () => {
    expect(
      service.prepareCommand({
        name: MessageTypes.DEFAULT,
        message: 'Hello World',
      })
    ).toBe('M:Hello World');
  });
});
