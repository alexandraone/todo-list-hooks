import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { addTodo } from '../actions';

class CreateTodo extends React.Component {
  state = { todoTitle: '' };

  onChange = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <div className="ui action input">
          <Input onChange={this.onChange} value={this.state.todoTitle} type="text" placeholder="Add todo"/>
          <button
            className="ui button"
            type="button"
            onClick={() => {
              this.props.addTodo(this.state.todoTitle);
              this.setState({ todoTitle: '' })
            }}>
            Add Todo
          </button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state);
  return { todos: state.todos };
};

export default connect(mapStateToProps, { addTodo })(CreateTodo);