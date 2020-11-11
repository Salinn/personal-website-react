/* eslint-disable import/prefer-default-export */
import { fieldTypes } from '../../contexts/FormContext';
import { useMakeRequest } from '../../hooks/api';

export const useCreateRecipeProps = () => {
  const fields = {
    recipeName: {
      id: 'recipe-name',
      label: 'Recipe Name',
      name: 'recipeName',
      value: '',
      errors: [],
      uncheckedValue: '',
      min: 2,
      type: fieldTypes.INPUT
    },
    recipeDescription: {
      id: 'recipe-description',
      label: 'Recipe Description',
      name: 'recipeDescription',
      value: '',
      errors: [],
      uncheckedValue: '',
      min: 2,
      type: fieldTypes.TEXT_BOX
    }
  };

  return { fields };
};

export const useCreateRecipeRequest = formData => {
  const { formFields } = formData;

  return useMakeRequest({
    apiRequest: 'createRecipe',
    apiParams: { fields: formFields },
    immediateRequest: false,
    defaultReturn: {}
  });
};
