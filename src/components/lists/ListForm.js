import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'semantic-ui-react';

const ListForm = ({ onSubmit, name, label }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>{label}</label>
            <Field name={name} component="input" type="text" />
          </div>
          <Button positive type="submit">
            Save
          </Button>
        </form>
      );
    }}
  />
);

export default ListForm;
