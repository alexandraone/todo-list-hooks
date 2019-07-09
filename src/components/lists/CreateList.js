import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { addTodoList } from '../../actions/index';
import Form from './ListForm';

class CreateList extends React.Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });


  onSubmit = (formValues) => {
    this.props.addTodoList(formValues.title);
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.show}><Icon name="plus" color='orange' size='large' />Add</Button>
        <Modal size={'mini'} open={open} onClose={this.close}>
          <Modal.Header>Add a Todo List</Modal.Header>
          <Modal.Content>
            <Form
              onSubmit={this.onSubmit}
              name='title'
              label='Add Todo List'
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
  return { lists: state.lists };
};

export default connect(mapStateToProps, { addTodoList })(CreateList);