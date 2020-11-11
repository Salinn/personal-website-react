import React from 'react';

export const GroceryList = () => {
  const groceries = [];

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
