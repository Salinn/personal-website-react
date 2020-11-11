import { useMakeRequest } from '../../hooks/api';

// eslint-disable-next-line import/prefer-default-export
export const useRecipes = () => {
  const recipesRequest = useMakeRequest({
    apiRequest: 'getRecipes',
    defaultReturn: []
  });
  return {
    recipesRequest,
    recipes: recipesRequest.data
  };
};
