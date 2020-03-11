import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as toDoActions from '../redux/actions/toDoActions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ToDoListPage = props => {
  const { toDoItems, actions } = props;
  const [todoList, setTodoList] = useState('');

  const handleChange = event => {
    setTodoList(event.target.value);
  };

  const handleSubmit = event => {
    actions.addTodoItem(todoList);
  };

  return (
    <Container maxwidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <TextField label="Task to Add" onChange={handleChange} />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Grid>
      </Grid>
      {toDoItems.map(c => {
        return (
          <div>
            {c.todos}
            <br />
          </div>
        );
      })}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    toDoItems: state.country,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toDoActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage);
