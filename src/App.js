import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';
import { appStart, addItem, keyInput, removeItem, toggleItem } from './store/modules/Actions';

const mapStateToProps = state => {
  const { input, todos } = state;
  return {
    input,
    todos,
  };
};

class App extends Component {
  async componentDidMount() {
    const data = axios.get(`https://my-react-todo-12824.firebaseio.com/todos.json`); // array
    this.props.appStart((await data).data);
  }

  handleCreate = () => {
    this.props.addItem(this.props.input);
  };

  handleChange = e => {
    this.props.keyInput(e.target.value);
  };

  handleRemove = id => {
    this.props.removeItem(id);
  };

  handleKeyPress = e => {
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.key === 'Enter') {
      this.props.addItem(e.target.value);
    }
  };

  handleToggle = id => {
    this.props.toggleItem(id);
  };

  render() {
    const { input, todos } = this.props;
    const { handleCreate, handleToggle, handleRemove, handleChange, handleKeyPress } = this;

    return (
      <div>
        <TodoListTemplate form={<Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} />}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
      </div>
    );
  }
}

App.propTypes = {
  input: PropTypes.string,
  todos: PropTypes.array,
  appStart: PropTypes.func,
  addItem: PropTypes.func,
  keyInput: PropTypes.func,
  removeItem: PropTypes.func,
  toggleItem: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  appStart: data => dispatch(appStart(data)),
  addItem: text => dispatch(addItem(text)),
  keyInput: text => dispatch(keyInput(text)),
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
