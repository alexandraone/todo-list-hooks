import React from 'react';
import { connect } from 'react-redux';
import { deleteTodoList } from '../actions';
import { List } from 'semantic-ui-react';
import history from '../history';

class Todo extends React.Component {
  removeTodoList = (id) => {
    this.props.deleteTodoList(id);
  };

  render() {
    return (
      <div>
        {(this.props.lists.length) ? (
          <List divided verticalAlign='middle' relaxed>
            {this.props.lists.map(list => (
              <List.Item key={list.id}>
                <List.Icon name="list" size="large" />
                <List.Content key={list.id}>
                  <List.Header as='a' onClick={() => history.push({ pathname: '/todo', state: { todoListId: list.id, title: list.title } })}>
                    {list.title}
                  </List.Header>
                </List.Content>
                <List.Content floated='right'>
                  <List.Icon name="minus circle" size="large" link onClick={() => this.removeTodoList(list.id)}/>
                </List.Content>
              </List.Item>
              ))}
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

export default connect(mapStateToProps, { deleteTodoList })(Todo);