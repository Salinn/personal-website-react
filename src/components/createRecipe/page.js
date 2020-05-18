import React from 'react';
import Form from '../form';
import { fieldTypes } from '../../contexts/FormContext';

const Page = () => {
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
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-white text-center">Upload New Recipe</h1>
          <Form fields={fields} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Page);
