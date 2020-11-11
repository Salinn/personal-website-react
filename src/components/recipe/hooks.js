import { useParams } from 'react-router-dom';
import { useMakeRequest } from '../../hooks/api';

// eslint-disable-next-line import/prefer-default-export
export const useRecipeProps = () => {
  const { id } = useParams();

  const recipeRequest = useMakeRequest({
    apiRequest: 'getRecipe',
    apiParams: { id },
    defaultReturn: {}
  });
  return {
    recipeRequest,
    recipe: recipeRequest.data
  };
};
