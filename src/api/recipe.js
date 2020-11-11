import { get, post } from './request';

const getRecipes = () => {
  const url = 'recipes';
  return get({ url });
};

const getRecipe = props => {
  const {
    apiParams: { id }
  } = props;
  const url = `recipes/${id}`;

  return get({ url });
};

const createRecipe = props => {
  const { recipe } = props;
  const url = 'recipes/new';
  const data = { recipe };
  return post({ url, data });
};

export { getRecipe, getRecipes, createRecipe };
