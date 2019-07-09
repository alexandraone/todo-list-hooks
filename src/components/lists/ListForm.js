import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';

let ListForm = props => {
  const { handleSubmit, name, label } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{label}</label>
        <div>
          <Field
            name={name}
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <Button positive type="submit">Save</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'listForm'
})(ListForm);