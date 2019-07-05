import React from 'react';
import { connect } from 'react-redux';
import { deleteTodoList, editTodoList } from '../actions';
import { List } from 'semantic-ui-react';
import history from '../history';

import EditList from './EditList';

class Todo extends React.Component {
  removeTodoList = id => {
    this.props.deleteTodoList(id);
  };

  editTodoList = title => {
    this.props.editTodoList(title);
  };

  render() {
    return (
      <div>
        {(this.props.lists.length) ? (
          <List divided verticalAlign='middle'>
            {this.props.lists.map((list, index) => {
              return (
              <List.Item key={list.id} style={(index % 2 === 0) ? { backgroundColor: '#EFEFEF', padding: '10px' } : { backgroundColor: 'white', padding: '10px' }}>
                <List.Content floated='right'>
                  <List.Icon name="minus circle" size="large" link onClick={() => this.removeTodoList(list.id)}/>
                </List.Content>
                <List.Content floated='right'>
                  <EditList listId={list.id}/>
                </List.Content>
                <List.Icon name="list" size="large" />
                <List.Content>
                  <List.Header as='a' onClick={() => history.push({
                    pathname: '/todo',
                    state: { todoListId: list.id, title: list.title }
                  })}>
                    {list.title}
                  </List.Header>
                </List.Content>
              </List.Item>
              )})}
          </List>) : (<div
            style={{ marginTop: "50px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
          >
            <div className="alert alert-danger" role="alert">
              No Todo List exists
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { lists: state.lists };
};

export default connect(mapStateToProps, { deleteTodoList, editTodoList })(Todo);