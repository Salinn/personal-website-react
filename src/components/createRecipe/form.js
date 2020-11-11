import React from 'react';
import Submit from '../common/submit';
import Input from '../common/inputForm';
import TextBox from '../common/inputSide';
import { useCreateRecipeRequest } from './hooks';
import { useFormContext } from '../../contexts/FormContext';

const Form = () => {
  const {
    formData,
    formData: {
      formFields: { recipeName, recipeDescription }
    }
  } = useFormContext();
  const { executeRequest } = useCreateRecipeRequest(formData);

  return (
    <form>
      <div className="row">
        <div className="col-6">
          <TextBox formField={recipeDescription} />
        </div>
        <div className="col-6">
          <Input formField={recipeName} />
        </div>
      </div>
      <Submit submitRequest={executeRequest}>Submit Recipe</Submit>
    </form>
  );
};

export default Form;
