

const types = {
  ADD_INGREDIENTS: 'ADD_INGREDIENTS',
  REMOVE_INGREDIENTS: 'REMOVE_INGREDIENTS',
  ADD_RECIPES: 'ADD_RECIPES',
  ADD_RECIPE: 'ADD_RECIPE',
  REMOVE_RECIPE: 'REMOVE_RECIPE'
};
const groceryReducer = (state, action) => {
  switch (action.type) {
    
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
