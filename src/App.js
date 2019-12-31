import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  constructor(props) {
    super(props);
    this.state = {
      // input: '',
      todos: [
        { id: 0, text: '리액트 소개', checked: false },
        { id: 1, text: 'JSX 사용해보기', checked: true },
        { id: 2, text: '라이프 사이클 이해하기', checked: false },
      ],
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value, // input 의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input } = this.state;
    this.setState(prevState => {
      const { todos } = prevState;
      todos.push({
        id: this.id + 1,
        text: input,
        checked: false,
      });
      return {
        input: '',
        todos,
      };
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }

    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  };

  render() {
    const { todos } = this.state;
    const { handleToggle, handleRemove } = this;

    return (
      <div>
        <TodoListTemplate form={<Form />}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
      </div>
    );
  }
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
