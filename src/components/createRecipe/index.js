import React from 'react';
import { FormProvider } from '../../contexts/FormContext';
import Form from './form';
import { useCreateRecipeProps } from './hooks';

const CreateRecipePage = props => {
  const { fields } = useCreateRecipeProps(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-white text-center">Upload New Recipe</h1>
          <div className="card">
            <div className="card-body">
              <FormProvider fields={fields}>
                <Form />
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CreateRecipePage);
