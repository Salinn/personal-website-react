import React from 'react';
import Input from '../common/inputForm';
import TextBox from '../common/textboxForm';
import { useFormContext } from '../../contexts/FormContext';

const TitleDescription = () => {
  const {
    formData: {
      formFields: { recipeName, recipeDescription }
    }
  } = useFormContext();

  return (
    <div className="row">
      <div className="col-6">
        <Input formField={recipeName} />
      </div>
      <div className="col-6">
        <TextBox formField={recipeDescription} />
      </div>
    </div>
  );
};

export default TitleDescription;
