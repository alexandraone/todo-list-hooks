import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { addTodoList } from '../../actions/index';
import Form from './ListForm';

const CreateList = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const onSubmit = formValues => {
    dispatch(addTodoList(formValues.title));
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => show()}>
        <Icon name="plus" color="orange" size="large" />
        Add
      </Button>
      <Modal size={'mini'} open={open} onClose={close}>
        <Modal.Header>Add a Todo List</Modal.Header>
        <Modal.Content>
          <Form onSubmit={onSubmit} name="title" label="Add Todo List" />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateList;
