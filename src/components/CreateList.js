import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon, Modal } from 'semantic-ui-react';
import { addTodoList } from '../actions';

class CreateList extends React.Component {
  state = { title: '', open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onClick = () => {
    this.props.addTodoList(this.state.title);
    this.setState({ title: '', open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.show}><Icon name="plus" color='orange' size='large' />Add</Button>
        <Modal size={'mini'} open={open} onClose={this.close}>
          <Modal.Header>Add a Todo List</Modal.Header>
          <Modal.Content>
            <Input onChange={this.onChange} value={this.state.title} type="text" placeholder="Add Todo List"/>
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
  return { lists: state.lists };
};

export default connect(mapStateToProps, { addTodoList })(CreateList);