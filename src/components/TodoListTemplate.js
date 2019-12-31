import React from 'react';
import './TodoListTemplate.css';
import PropTypes from 'prop-types';

const TodoListTemplate = ({ form, children }) => (
  <main className="todo-list-template">
    <div className="title"> 오늘 할 일</div>
    <section className="form-wrapper">{form}</section>
    <section className="todos-wrapper">{children}</section>
  </main>
);

TodoListTemplate.propTypes = {
  form: PropTypes.element,
  children: PropTypes.element,
};

export default TodoListTemplate;
