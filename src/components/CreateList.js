import React from 'react';
import { connect } from 'react-redux';
import { Container, Input, Grid } from 'semantic-ui-react';
import { addTodoList } from '../actions';
import TodoList from './TodoList';

class CreateList extends React.Component {
  state = { title: '' };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onClick = () => {
      this.props.addTodoList(this.state.title);
      this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <Container>
          <Grid className="segment centered" divided='vertically'>
            <Grid.Row>
              <Grid.Column>
                <h3>Todo List</h3>
                <Input onChange={this.onChange} value={this.state.title} type="text" placeholder="Add Todo List"/>
          <button
            className="ui button"
            type="button"
            onClick={this.onClick}>
            Add List
          </button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
        <TodoList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { lists: state.lists };
};

export default connect(mapStateToProps, { addTodoList })(CreateList);