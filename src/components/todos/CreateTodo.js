import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { addTodo } from '../../actions/index';
import TodoForm from './TodoForm';

const CreateTodo = ({ todoListId }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const onSubmit = (formValues) => {
    dispatch(addTodo(formValues.title, formValues.dueDate, todoListId));
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={show}>
        <Icon name="plus" color="orange" size="large" />
        Add
      </Button>
      <Modal size={'mini'} open={open} onClose={close}>
        <Modal.Header>Add a Todo</Modal.Header>
        <Modal.Content>
          <TodoForm onSubmit={onSubmit} label="Add Todo" />
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

export default CreateTodo;
