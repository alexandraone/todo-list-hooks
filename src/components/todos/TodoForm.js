import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';

let TodoForm = props => {
  const { handleSubmit, label } = props;
  return (
    <form onSubmit={handleSubmit}>
        <label>{label}</label>
          <Field
            name='title'
            component='input'
            type='text'
          />
          <Field
            name='dueDate'
            component='input'
            type='date'
          />
        <Button positive type="submit">Save</Button>
    </form>
  );
};

export default reduxForm({
  form: 'todoForm'
})(TodoForm);