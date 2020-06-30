import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { editTodoList } from '../../actions/index';
import Form from './ListForm';

const EditList = props => {
  const [open, setOpen] = useState(false);
  const list = useSelector(state =>
    state.lists.filter(list => list.id === props.listId)
  );
  const dispatch = useDispatch();

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const onSubmit = formValues => {
    dispatch(editTodoList(formValues.title, props.listId));
    setOpen(false);
  };

  return (
    <div>
      <Icon name="edit" size="large" link onClick={show} />
      <Modal size={'mini'} open={open} onClose={close}>
        <Modal.Header>Edit title</Modal.Header>
        <Modal.Content>
          <Form
            initialValues={{ title: list[0].title }}
            onSubmit={onSubmit}
            name="title"
            label="Edit List"
          />
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

export default EditList;
