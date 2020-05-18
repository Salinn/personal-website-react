import { sumIngredients, removeIngredients } from '../helpers/recipeMath';

const types = {
  ADD_INGREDIENTS: 'ADD_INGREDIENTS',
  REMOVE_INGREDIENTS: 'REMOVE_INGREDIENTS',
  ADD_RECIPES: 'ADD_RECIPES',
  ADD_RECIPE: 'ADD_RECIPE',
  REMOVE_RECIPE: 'REMOVE_RECIPE'
};
const groceryReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENTS:
      return action.ingredients
        .reduce((list, item) => {
          const [foundItem] = list.filter(
            listItem => listItem.name === item.name
          );
          if (foundItem) {
            const listWithoutFoundItem = list.filter(
              listItem => listItem.name !== item.name
            );
            const newItem = {
              ...item,
              measurement: sumIngredients(foundItem, item)
            };
            return listWithoutFoundItem.concat(newItem);
          }
          return list.concat(item);
        }, state)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    case types.REMOVE_INGREDIENTS:
      return action.recipe.ingredients
        .reduce((list, item) => {
          const [foundItem] = list.filter(
            listItem => listItem.name === item.name
          );
          if (foundItem) {
            const listWithoutFoundItem = list.filter(
              listItem => listItem.name !== item.name
            );
            const newItem = {
              ...item,
              measurement: removeIngredients(foundItem, item)
            };
            if (newItem.measurement?.amount === 0.0)
              return listWithoutFoundItem;
            return listWithoutFoundItem.concat(newItem);
          }
          return list;
        }, state)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    default:
      return state;
  }
};
const recipeReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_RECIPES:
      return action.recipes;
    default:
      return state;
  }
};
const recipeListReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      const [recipeExists] = state.filter(
        recipe => recipe.id === action.recipe.id
      );
      if (recipeExists) {
        const listWithoutRecipe = state.filter(
          recipe => recipe.id !== action.recipe.id
        );
        return listWithoutRecipe
          .concat({ ...recipeExists, quantity: recipeExists.quantity + 1 })
          .sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      return state
        .concat({ ...action.recipe, quantity: 1 })
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    case types.REMOVE_RECIPE:
      return state.filter(recipe => recipe.id !== action.recipe.id);
    default:
      return state;
  }
};

export { recipeReducer, groceryReducer, recipeListReducer, types };
