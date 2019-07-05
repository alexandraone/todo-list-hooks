import React from 'react';
import { connect } from 'react-redux';
import { Input, Modal, Button, Icon } from 'semantic-ui-react';
import { addTodo } from '../actions';

class CreateTodo extends React.Component {
  state = { todoTitle: '', dueDate: '', open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  };

  onClick = () => {
    const todoListId = this.props.todoListId;
    this.props.addTodo(this.state.todoTitle, this.state.dueDate, todoListId);
    this.setState({ todoTitle: '', open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.show}><Icon name="plus" color='orange' size='large' />Add</Button>
        <Modal size={'mini'} open={open} onClose={this.close}>
          <Modal.Header>Add a Todo</Modal.Header>
          <Modal.Content>
            <Input onChange={this.onChange} name="todoTitle" value={this.state.todoTitle} type="text" placeholder="Add Todo" />
            <Input onChange={this.onChange} name="dueDate" value={this.state.dueDate} type="date" placeholder="Add due Date" />

          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => this.setState({ open: false })}>Cancel</Button>
            <Button positive onClick={this.onClick}>Add List</Button>
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