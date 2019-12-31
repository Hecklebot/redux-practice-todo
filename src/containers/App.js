import { Component } from 'react';
import { connect } from 'react-redux';
// import TodoListTemplate from './components/TodoListTemplate';
// import TodoItemList from './components/TodoItemList';
// import Form from './components/Form';

class App extends Component {
  id = 3;

  handleChange = e => {
    console.log(e);
  };

  handleCreate = () => {};

  handleKeyPress = e => {
    console.log(e);
  };

  handleToggle = id => {
    console.log(id);
  };

  handleRemove = id => {
    console.log(id);
  };
}

const mapStateToProps = state => {
  console.log('ccc', state);
  const { id, input, todos } = state;
  return {
    id,
    input,
    todos,
  };
};
export default connect(mapStateToProps)(App);
