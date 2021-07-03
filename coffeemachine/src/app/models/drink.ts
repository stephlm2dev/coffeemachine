enum DrinkTypes {
  TEA = "T",
  COFFEE = "C",
  CHOCOLATE = "H",
};

type SugarQuantity = 0 | 1 | 2;

type DrinkCommand = {
  name: DrinkTypes;
  sugarQuantity: SugarQuantity;
}

export {
  DrinkTypes,
  SugarQuantity,
  DrinkCommand
}
