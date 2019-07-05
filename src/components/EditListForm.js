import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from "semantic-ui-react";

let EditListForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Edit List</label>
        <div>
          <Field
            name="title"
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
  form: 'editList'
})(EditListForm);