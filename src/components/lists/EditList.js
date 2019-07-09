import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { editTodoList } from '../../actions/index';
import Form from './ListForm';

class EditList extends React.Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  onSubmit = (formValues) => {
    this.props.editTodoList(formValues.title, this.props.listId);
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Icon name="edit" size="large" link onClick={this.show}/>
        <Modal size={'mini'} open={open} onClose={this.close}>
          <Modal.Header>Edit title</Modal.Header>
          <Modal.Content>
            <Form
              initialValues={{ title: this.props.list[0].title }}
              onSubmit={this.onSubmit}
              name='title'
              label='Edit List'
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

const mapStateToProps = (state, ownProps) => {
  return { list: state.lists.filter(list => list.id === ownProps.listId) };
};

export default connect(mapStateToProps, { editTodoList })(EditList);