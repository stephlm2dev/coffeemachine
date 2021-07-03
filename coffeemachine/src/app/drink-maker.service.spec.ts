import { TestBed } from '@angular/core/testing';

import { DrinkMakerService } from './drink-maker.service';

import { DrinkTypes } from './models/drink';
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

  it('should make 1 tea with 1 sugar and a stick', () => {
    expect(service.prepareCommand({
      name: DrinkTypes.TEA,
      sugarQuantity: 1
    })).toBe("T:1:0");
  });

  it('should makes 1 chocolate with no sugar - and therefore no stick', () => {
    expect(service.prepareCommand({
      name: DrinkTypes.CHOCOLATE,
      sugarQuantity: 0
    })).toBe("H::");
  });

  it('should makes 1 coffee with 2 sugars and a stick', () => {
    expect(service.prepareCommand({
      name: DrinkTypes.COFFEE,
      sugarQuantity: 2
    })).toBe("C:2:0");
  });

  it('should forwards any message received onto the coffee machine interface', () => {
    expect(service.prepareCommand({
      name: MessageTypes.DEFAULT,
      message: "Hello World"
    })).toBe("M:Hello World");
  });
});
