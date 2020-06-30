import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'semantic-ui-react';

let TodoForm = ({ label, onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label>{label}</label>
          <Field name="title" component="input" type="text" />
          <Field name="dueDate" component="input" type="date" />
          <Button positive type="submit">
            Save
          </Button>
        </form>
      )}
    />
  );
};

export default TodoForm;
