const types = {
  ADD_RECIPE: 'ADD_RECIPE'
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      return action.recipe;
    default:
      return state;
  }
};

export { recipeReducer, types };
