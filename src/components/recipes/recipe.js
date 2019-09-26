import React from 'react';

const Recipe = props => {
  const { name } = props;
  return (
    <card>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      {name}
    </card>
  );
};

export default React.memo(Recipe);
