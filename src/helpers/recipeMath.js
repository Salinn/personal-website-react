const conversionTable = {
  tsp: 1,
  tbs: 3,
  'fl-oz': 6,
  cup: 48.69,
  pint: 96,
  quart: 192,
  gallon: 768
};

const lowestForm = ingredient => {
  const { amount, unit } = ingredient.measurement;
  return {
    amount: amount * conversionTable[unit],
    unit: 'tsp'
  };
};

const readableForm = totalSum => {
  return Object.keys(conversionTable).reduce(
    (bestSum, key) => {
      const conversionAmount = conversionTable[key];
      const bestIngredientSum = totalSum / conversionAmount;
      const GREATER_THAN_ZERO = conversionAmount > 0;
      const LESS_THAN_PREVIOUS = bestSum.amount > bestIngredientSum;

      if (GREATER_THAN_ZERO && LESS_THAN_PREVIOUS) {
        return { unit: key, amount: bestIngredientSum };
      }
      return bestSum;
    },
    { amount: 0, unit: 'tsp' }
  );
};

const notConvertable = (first, second) => {
  const firstIngredientMeasureable = first.measurement.unit in conversionTable;
  const secondIngredientMeasureable =
    second.measurement.unit in conversionTable;

  if (firstIngredientMeasureable && secondIngredientMeasureable) {
    return false;
  }
  return true;
};

const doubleAmount = (first, second) => {
  return 0;
};

const sumIngredients = (first, second) => {
  if (notConvertable(first, second)) {
    return doubleAmount(first, second);
  }
  const firstAmount = lowestForm(first);
  const secondAmount = lowestForm(second);

  return readableForm(firstAmount + secondAmount);
};

const removeIngredients = () => {};

export { sumIngredients, removeIngredients };
