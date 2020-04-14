import React, { useContext } from 'react';
import { RecipeContext } from '../../hooks/contexts';

export const GroceryList = () => {
  const { groceries } = useContext(RecipeContext);

  const listedItems = groceries.map(({ measurement, name }) => {
    return (
      <li key={`${measurement}-${name}`}>
        {measurement.amount} {measurement.unit} - {name}
      </li>
    );
  });

  return (
    <div className="card p-3">
      Total Items {groceries.length}
      <ul>{listedItems}</ul>
    </div>
  );
};

export default React.memo(GroceryList);
