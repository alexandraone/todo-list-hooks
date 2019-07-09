import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { addTodo } from '../../actions/index';
import Form from './TodoForm';

class CreateTodo extends React.Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });


  onSubmit = (formValues) => {
    const todoListId = this.props.todoListId;
    this.props.addTodo(formValues.title, formValues.dueDate, todoListId);
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.show}><Icon name="plus" color='orange' size='large' />Add</Button>
        <Modal size={'mini'} open={open} onClose={this.close}>
          <Modal.Header>Add a Todo</Modal.Header>
          <Modal.Content>
            <Form
              onSubmit={this.onSubmit}
              label='Add Todo'
              />
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => this.setState({ open: false })}>Cancel</Button>
          </Modal.Actions>
        </Modal>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return { todos: state.todos, lists: state.lists };
};

export default connect(mapStateToProps, { addTodo })(CreateTodo);