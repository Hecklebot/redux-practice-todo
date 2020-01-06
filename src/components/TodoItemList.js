import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(({ id, text, checked }) => <TodoItem id={id} text={text} checked={checked} onToggle={onToggle} onRemove={onRemove} key={id} />);
    return <div>{todoList}</div>;
  }
}

TodoItemList.propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
};
export default TodoItemList;
