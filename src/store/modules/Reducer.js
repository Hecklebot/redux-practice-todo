/* eslint-disable no-debugger */
import { createAction } from 'redux-actions';

const ADD_ITEM = 'ADD_ITEM'; // 아이템 추가
const KEY_INPUT = 'KEY_INPUT'; // 입력받은 키 input에 넣기
const TOGGLE_ITEM = 'TOGGLE_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = createAction(ADD_ITEM, text => text);
export const keyInput = createAction(KEY_INPUT, text => text);
export const removeItem = createAction(REMOVE_ITEM, id => id);
export const toggleItem = createAction(TOGGLE_ITEM, id => id);

let id = 3;
const initState = {
  input: '',
  todos: [
    { id: 0, text: '리액트 소개', checked: false },
    { id: 1, text: 'JSX 사용해보기', checked: true },
    { id: 2, text: '라이프 사이클 이해하기', checked: false },
    { id: 3, text: '테스트', checked: false },
  ],
};

export default function Reducer(state = initState, action) {
  const index = state.todos.findIndex(todo => todo.id === action.payload);
  const selected = state.todos[index];
  const nextTodos = [...state.todos];
  switch (action.type) {
    case ADD_ITEM:
      id += 1;
      return {
        ...state,
        input: '',
        todos: state.todos.concat({
          id,
          text: action.payload,
          checked: false,
        }),
      };
    case KEY_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    case TOGGLE_ITEM:
      nextTodos[index] = {
        ...selected,
        checked: !selected.checked,
      };

      return {
        todos: nextTodos,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
